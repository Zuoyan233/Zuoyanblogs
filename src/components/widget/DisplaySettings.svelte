<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getDefaultHue, getHue, setHue } from "@utils/setting-utils";
import { onDestroy, onMount } from "svelte";
import { siteConfig } from "../../config";

let hue = 250;
let defaultHue = 250;
let isMounted = false;

// 从配置中读取循环设置
let isCycling = siteConfig.themeColor.cycle?.enabled ?? true;
let cycleDirection = siteConfig.themeColor.cycle?.direction ?? 1;
let cycleSpeed = siteConfig.themeColor.cycle?.speed ?? 10000;

// 确保初始速度在安全范围内 (10000-100000)
cycleSpeed = Math.max(10000, Math.min(100000, cycleSpeed));

let animationFrame: number | null = null;
let lastTimestamp = 0;

// 优化：使用节流，降低更新频率
let lastHueUpdate = 0;
const UPDATE_INTERVAL = 800;

// 缓存当前色相值
let currentHue = 250;

// 声明防抖定时器变量
let updateTimeout: ReturnType<typeof setTimeout> | null = null;

// 速率滑块进度条计算
let progressPercent: number;

function resetHue() {
	hue = defaultHue;
	currentHue = defaultHue;
	setHue(defaultHue);
}

function cycleAnimation(timestamp: number) {
	if (!isCycling) {
		animationFrame = null;
		return;
	}

	if (lastTimestamp === 0) {
		lastTimestamp = timestamp;
		lastHueUpdate = timestamp;
		animationFrame = requestAnimationFrame(cycleAnimation);
		return;
	}

	const deltaTime = timestamp - lastTimestamp;
	// 确保速度在安全范围内 (10000-100000)
	const safeSpeed = Math.max(10000, Math.min(100000, cycleSpeed));
	// 根据时间差计算色相变化，保持动画流畅
	const hueChange = (deltaTime / safeSpeed) * 360 * cycleDirection;
	currentHue = (currentHue + hueChange + 360) % 360;

	// 优化：节流更新UI，减少重绘次数
	if (timestamp - lastHueUpdate >= UPDATE_INTERVAL) {
		// 更新显示值
		hue = currentHue;
		// 关键修复：在这里应用全局颜色变化
		setHue(currentHue);
		lastHueUpdate = timestamp;
	}

	lastTimestamp = timestamp;
	animationFrame = requestAnimationFrame(cycleAnimation);
}

function toggleCycle() {
	if (isCycling) {
		// 停止循环
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
			animationFrame = null;
		}
		isCycling = false;
		lastTimestamp = 0;
		// 停止时确保显示正确的色相值
		hue = currentHue;
		setHue(currentHue);
	} else {
		// 开始循环
		isCycling = true;
		currentHue = hue; // 从当前值开始循环
		lastTimestamp = 0;
		lastHueUpdate = 0;
		animationFrame = requestAnimationFrame(cycleAnimation);
	}
}

onDestroy(() => {
	if (animationFrame) {
		cancelAnimationFrame(animationFrame);
		animationFrame = null;
	}

	// 清理防抖定时器
	if (updateTimeout) {
		clearTimeout(updateTimeout);
		updateTimeout = null;
	}
});

onMount(() => {
	isMounted = true;
	defaultHue = getDefaultHue();

	// 从存储中获取当前颜色
	const savedHue = getHue();
	hue = savedHue;
	currentHue = savedHue;

	// 如果配置允许循环，启动动画
	if (isCycling) {
		lastTimestamp = 0;
		lastHueUpdate = 0;
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
			animationFrame = null;
		}
		animationFrame = requestAnimationFrame(cycleAnimation);
	}
});

// 非循环模式下，防抖更新颜色
$: if (isMounted && !isCycling && (hue || hue === 0)) {
	if (updateTimeout) {
		clearTimeout(updateTimeout);
	}
	updateTimeout = setTimeout(() => {
		setHue(hue);
		currentHue = hue; // 同步 currentHue
		updateTimeout = null;
	}, 16);
}

// 监听速度变化，确保在有效范围内 (10000-100000)
$: if (isMounted) {
	if (cycleSpeed < 10000) cycleSpeed = 10000;
	if (cycleSpeed > 100000) cycleSpeed = 100000;
}

$: {
	// 速率滑块进度条计算进度百分比 (min=10000, max=100000)
	progressPercent = ((cycleSpeed - 10000) / (100000 - 10000)) * 100;
}
</script>

<!-- 只有当 themeColor.fixed 为 false 时才显示控制面板 -->
{#if !siteConfig.themeColor.fixed}
<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <!-- 主题色标题和重置按钮部分保持不变 -->
    <div class="flex flex-row gap-2 mb-3 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            {i18n(I18nKey.themeColor)}
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md active:scale-90"
              class:opacity-0={isCycling || (!isCycling && hue === defaultHue)} 
              class:pointer-events-none={isCycling || (!isCycling && hue === defaultHue)} 
              on:click={resetHue}>
              <div class="text-[var(--btn-content)]">
                  <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
              </div>
            </button>
        </div>
        <div class="flex gap-1">
            <div id="hueValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center
            font-bold text-sm items-center text-[var(--btn-content)]">
                {Math.round(hue)}
            </div>
        </div>
    </div>
    
    <!-- 颜色滑块 - 添加 will-change 优化 -->
    <div class="w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none">
        <input aria-label={i18n(I18nKey.themeColor)} type="range" min="0" max="360" bind:value={hue}
               class="slider will-change-transform" id="colorSlider" step="5" style="width: 100%" disabled={isCycling}>
    </div>
    
    <!-- 循环控制部分 -->
    <div class="flex items-center gap-2 mt-3">
        <Icon icon="fa6-solid:palette" class="text-xs text-[var(--btn-content)]"></Icon>
        <span class="font-bold text-sm text-neutral-900 dark:text-neutral-100 text-sm flex-1">{i18n(I18nKey.colorCycle)}</span>
        <button 
            class="btn-regular w-8 h-8 left rounded-md flex items-center justify-center active:scale-90"
            class:opacity-50={isCycling}
            on:click|stopPropagation={toggleCycle}
        >
            <Icon icon={isCycling ? "fa6-solid:stop" : "fa6-solid:play"} class="text-sm"></Icon>
        </button>
    </div>

    <!-- 速度控制滑块 -->
    <div class="flex items-center gap-2 mt-2">
        <Icon icon="fa6-solid:gauge-high" class="text-xs text-[var(--btn-content)]"></Icon>
        <span class="font-bold text-sm text-neutral-900 dark:text-neutral-100 text-sm flex-1">{i18n(I18nKey.cycleSpeedControl)}</span>
    </div>
    <div class="flex items-center gap-2 mt-2">
            <input 
                type="range" 
                min="10000" 
                max="100000" 
                bind:value={cycleSpeed}
                class="speed-slider"
                step="100"
                disabled={!isCycling}
                style="--progress: {progressPercent}%;"
            >
            <span class="transition bg-[var(--btn-regular-bg)] w-20 h-6 rounded-md flex justify-center
            font-bold items-center text-xs text-[var(--btn-content)] w-12 text-right">{cycleSpeed}ms</span>
        </div>
</div>
{/if}

<style lang="stylus">
    /* 优化：使用 will-change 提示浏览器 */
    #display-setting
      will-change transform, opacity
      
      input[type="range"]
        -webkit-appearance none
        height 1.5rem
        background-image var(--color-selection-bar)
        transition background-image 0.15s ease-in-out
        will-change background-image

        &:disabled
          opacity 0.3
          cursor not-allowed

        &::-webkit-slider-thumb
          -webkit-appearance none
          height 1rem
          width 0.5rem
          border-radius 0.125rem
          background rgba(255, 255, 255, 0.7)
          box-shadow none
          &:hover
            background rgba(255, 255, 255, 0.8)
          &:active
            background rgba(255, 255, 255, 0.6)

        &::-moz-range-thumb
          -webkit-appearance none
          height 1rem
          width 0.5rem
          border-radius 0.125rem
          border-width 0
          background rgba(255, 255, 255, 0.7)
          box-shadow none
          &:hover
            background rgba(255, 255, 255, 0.8)
          &:active
            background rgba(255, 255, 255, 0.6)

    .speed-slider
        width 230px
        height 4px
        -webkit-appearance none
        border-radius 4px
        outline none
        transition opacity 0.2s
        background var(--btn-regular-bg) !important
        will-change opacity
        
        &:disabled
            opacity 0.3
            cursor not-allowed
        
        &::-webkit-slider-thumb
            -webkit-appearance none
            width 0
            height 0
            opacity 0
        
        &::-moz-range-thumb
            width 0
            height 0
            border none
            opacity 0
        
        &::-webkit-slider-runnable-track
            width 100%
            height 20px
            background linear-gradient(to right, var(--primary) 0%, var(--primary) var(--progress), var(--btn-regular-bg) var(--progress))
            border-radius 4px
        
        &::-moz-range-track
            height 20px
            background var(--btn-regular-bg)
            border-radius 4px
        
        &::-moz-range-progress
            height 20px
            background var(--primary)
            border-radius 4px

    /* 优化：添加 will-change 到动画元素 */
    .float-panel
        will-change transform, opacity
        
    .btn-regular
        will-change transform
        
    /* 优化：使用硬件加速 */
    .slider, .speed-slider
        transform translateZ(0)
        backface-visibility hidden
</style>
