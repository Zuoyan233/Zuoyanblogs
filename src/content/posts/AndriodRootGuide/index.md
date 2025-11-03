---
title: 安卓系统如何获得Root权限
published: 2025-11-01
description: '本帖子教你获取安卓系统的Root权限，丰富发烧友玩机需求'
image: './cover.png'
tags: ["安卓玩机","技术向","Root"]
category: Root
draft: false 
---

## 了解一下什么是Root？ (form.Bilibili)
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1BY4y1H7Mc&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" &autoplay=0> </iframe>

---
# 刷机须知
- **请确保你的手机已经解锁Bootloader，才能进行Root刷入，不知道什么是Bootloader或者不知道如何解锁<a href="https://zuoyanblogs.xyz/posts/unlockbootloader/" target="_blank">点这里教你解锁手机Bootloader</a>**。
- **准备一根具有`USB传输数据功能的线`，建议使用`A to C数据线`，连接更稳定，准备ADB调试工具，刷入分区会用到，没下载的先下载ADB调试工具<a href="https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn" target="_blank">Android SDK Platform-Tools</a>**。
- **在进行任何操作前，请备份好你的数据，刷机后，造成闪存、主板或其他硬件损坏的，售后视情况`有权拒绝保修`，如果是造成系统、黑屏或其他软件故障的，售后可进行`保内恢复处理`**。

## 不要在半夜里刷机！！！
## 不要在半夜里刷机！！！
## 不要在半夜里刷机！！！

---
# 下载Magisk & Kitsune Mask
## Magisk
::github{repo="topjohnwu/Magisk"}
---
## Kitsune Mask &nbsp; (作者已归档停止更新，建议寻找替代品)
::github{repo="1q23lyc45/KitsuneMagisk"}
## 这两个Root管理器有什么不一样的吗？
- **Magisk：提供基本的Root管理功能，包括模块管理等，但在隐藏Root的能力上`不如`Kitsune Mask强**。
- **Kitsune Mask：在Magisk的基础上，特别`强化`了隐藏Root的能力，使得某些应用（如银行应用）更难检测到设备已Root。这对于需要绕过Root检测的用户非常重要**。
---

# 刷机步骤 &nbsp;`(请务必把Magisk Root管理器安装到手机上)`
## 一加，小米，Google Pixel等`类原生安卓系统`手机
- **首先激活`开发者模式`**。
- **`设置`→`关于手机`→`版本信息`→点击五次`版本号`输入密码即可**。
- **返回到`设置`→`系统`→`开发者选项`**。
- **找到`开发者选项`查看`OEM解锁`是否已经打开（能刷入的硬性要求）**。

---
<img src="/images/Post/Root/1.jpg" width="1200px" high="1200px" style="margin:0 auto;">

```yaml
请查看刷机包提取带有boot.img（出厂安卓12以下），init_boot.img（出厂安卓13以上）启动内核的img镜像。
打开Magisk →→→ 点击带有面具logo右边的“安装” →→→ “选择并修补一个文件” →→→ 选择要修补的img的镜像文件 →→→ 等待Magisk修补完成。
修补生成的文件 magisk_patched-xxx.img 在 Download 目录里。
```

- **手机插电脑，打开 传输文件 模式，打开 Download 目录，把 magisk_patched-xxx.img 复制到电脑桌面上**。

<img src="/images/Post/Root/2.jpg" width="500px" high="500px" style="margin:0 auto;">

- **在开机状态下，打开`adb工具`输入`adb devices`手机是否连接到电脑，确认连接到电脑后，再次输入`adb reboot fastboot`**。

<img src="/images/Post/Root/3.jpg" width="500px" high="500px" style="margin:0 auto;">

- **在`adb工具`里输入下面的刷入命令，`注意别刷错分区`magisk.img每次修补生成的名字都不一样，使用的时候请输入生成的名字**。

```yaml
fastboot flash init_boot <面具文件> 或者 fastboot flash boot <面具文件>  
之后按下回车等待显示"OKEY"字样代表刷入成功了
fastboot reboot 输入重启手机命令
```

<img src="/images/Post/Root/4.jpg" width="500px" high="500px" style="margin:0 auto;">

- **开机有震动基本没问题了，耐心等开机（显示`Magisk版本`，就是刷好了的）**。

<img src="/images/Post/Root/5.jpg" width="500px" high="500px" style="margin:0 auto;">

---

# 刷入后开机卡住了？该怎么办？
- **刷入 `magisk.img` 不能开机，可以把前面提取的 `boot.img（出厂安卓12以下）`，`init_boot.img（出厂安卓13以上）` 通过 `fastboot` 刷回去，恢复`原版 boot.img，init_boot`一般都能正常开机！`init_boot.img和boot.img 保留一份在电脑`，避免出问题了可以自救下`还原`**。  
```yaml
fastboot flash boot boot.img
fastboot flash init_boot init_boot.img
```
---

# Enjoy it have a good day !!!
- **<a href="https://www.cnblogs.com/zjw-blog/p/19065354" target="_blank">链接：Magisk玩机模块推荐</a>**。
