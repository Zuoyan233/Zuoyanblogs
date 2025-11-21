---
title: Android系统如何获得Root权限
published: 2025-11-01
description: '本帖子教你获取安卓系统的Root权限，丰富发烧友玩机需求'
image: './cover.png'
tags: ["Android玩机","技术向","Root"]
category: Root
draft: false 
---

## 了解一下什么是Root？ (form.Bilibili)
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1BY4y1H7Mc&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" &autoplay=0> </iframe>

---
# 刷机须知
1. **请确保你的手机已经解锁Bootloader，才能进行Root刷入，不知道什么是Bootloader或者不知道如何解锁<a href="https://zuoyanblogs.pages.dev/posts/unlock-bootloader/" target="_blank">点这里教你解锁手机Bootloader</a>**。
2. **准备一根具有<span style="color:red;">USB传输数据功能的线</span>，建议使用<span style="color:red;">A to C数据线</span>，连接更稳定，准备ADB调试工具，刷入分区会用到，没下载的先下载ADB调试工具<a href="https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn" target="_blank">Android SDK Platform-Tools</a>**。
3. **在进行任何操作前，请备份好你的数据，刷机后，造成闪存、主板或其他硬件损坏的，售后视情况<span style="color:red;">有权拒绝保修</span>，如果是造成系统、黑屏或其他软件故障的，售后可进行<span style="color:red;">保内恢复处理</span>**。    

>[!WARNING]
**不要在半夜里刷机！！！**</br>
**不要在半夜里刷机！！！**</br>
**不要在半夜里刷机！！！**

---
# 下载Magisk & Kitsune Mask
## Magisk
::github{repo="topjohnwu/Magisk"}
---
## Kitsune Mask &nbsp; 
>[!WARNING] **作者已归档停止更新，建议寻找替代品**
::github{repo="1q23lyc45/KitsuneMagisk"}

>[!NOTE] **这两个Root管理器有什么不一样的吗？**</br>
**1. `Magisk`：提供基本的Root管理功能，包括模块管理等，但在隐藏Root的能力上<span style="color:red;">不如</span>Kitsune Mask强**。</br>
**2. `Kitsune Mask`：在Magisk的基础上，特别<span style="color:red;">强化</span>了隐藏Root的能力，使得某些应用（如银行应用）更难检测到设备已Root。这对于需要绕过Root检测的用户非常重要**。

---

# 刷机步骤

>[!TIP] **前期工作检查：一加，小米，Google Pixel等类原生安卓系统手机**
1. **首先激活<span style="color:red;">开发者模式</span>**。
2. **<span style="color:red;">设置→关于手机→版本信息→点击五次版本号</span>输入密码即可**。
3. **返回到<span style="color:red;">设置→系统→开发者选项</span>**。
4. **找到开发者选项查看<span style="color:red;">OEM解锁</span>是否已经打开（能刷入的硬性要求）**。
5. **请务必把<span style="color:red;">Magisk Root管理器</span>安装到手机上**

---
## 提取Boot并用Magisk修补
1. **请查看刷机包提取带有`boot.img`<span style="color:red;">（出厂安卓12以下）</span>，`init_boot.img`<span style="color:red;">（出厂安卓13以上）</span>启动内核的img镜像。**
2. **打开Magisk → 点击带有面具logo右边的<span style="color:red;">“安装” → “选择并修补一个文件” → “选择并修补一个文件”</span> → 等待Magisk修补完成。**
3. **修补生成的文件`magisk_patched-xxx.img`在 <span style="color:red;">Download</span>目录里。**
<figure>
<img src="/images/Post/Root/1.jpg" width="1200px" high="1200px" style="margin:0 auto;">
<figcaption style="text-align:center;">修补boot.img</figcaption>
<figure>

4. **手机插电脑，打开<span style="color:red;">传输文件</span>模式，打开 Download 目录，把`magisk_patched-xxx.img` 复制到ADB文件夹内**。

<figure>
<img src="/images/Post/Root/2.jpg" width="500px" high="500px" style="margin:0 auto;">
<figcaption style="text-align:center;">magisk_patched-xxx.img 复制到电脑 ADB文件夹内</figcaption>
</figure>

## 刷入Magisk修补的Boot
1. **在开机状态下，打开<span style="color:red;">ADB工具</span>输入`adb devices`手机是否连接到电脑，确认连接到电脑后，再次输入`adb reboot fastboot`。**
<figure>
<img src="/images/Post/Root/3.jpg" width="500px" high="500px" style="margin:0 auto;">
<figcaption style="text-align:center;">进入Fastboot</figcaption>
</figure>

2. **在<span style="color:red;">adb工具</span>里输入下面的刷入命令，<span style="color:red;">注意别刷错分区</span>`magisk.img`每次修补生成的名字都不一样，使用的时候请输入生成的名字**。

>[!TIP]
**`fastboot flash init_boot magisk_patched-xxx.img` 或者 `fastboot flash boot magisk_patched-xxx.img`** </br>
**之后按下回车等待显示`"OKEY"`字样代表刷入成功了**</br>
**`fastboot reboot` 输入重启手机命令**

<figure>
<img src="/images/Post/Root/4.jpg" width="500px" high="500px" style="margin:0 auto;">
<figcaption style="text-align:center;">按照TIP步骤刷入magisk_patched-xxx.img</figcaption>
</figure>

3. **开机有震动基本没问题了，耐心等开机（显示<span style="color:red;">Magisk版本</span>，就是刷好了的）**。
<figure>
<img src="/images/Post/Root/5.jpg" width="500px" high="500px" style="margin:0 auto;">
<figcaption style="text-align:center;">完成刷入并显示版本号</figcaption>
</figure>

---

# 刷入后开机卡住了，该怎么办
- **刷入`magisk.img`不能开机，可以把前面提取的 `boot.img`<span style="color:red;">（出厂安卓12以下）</span>，`init_boot.img`<span style="color:red;">（出厂安卓13以上）</span>通过 fastboot刷回去，恢复<span style="color:red;">原版 </span>`boot.img`，`init_boot`一般都能正常开机！`init_boot.img`和`boot.img` <span style="color:red;">保留</span>一份在电脑，避免出问题了可以自救下还原**。  

>[!NOTE]**格式：**</br>
**`fastboot flash boot boot.img`**</br>
**`fastboot flash init_boot init_boot.img`**

---


# 刷入模块，开始Root之旅
 <a href="https://www.cnblogs.com/zjw-blog/p/19065354" target="_blank">玩机模块分享：Magisk优秀模块推荐</a>
