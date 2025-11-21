---
title: 教你解锁Android手机上的Bootloader
published: 2025-10-29
description: "如何解锁手机上的万恶之源Bootloader锁，解开了手机最高权限永远属于你（仅限于小米和一加）"
pinned: false
image: "./unlock.png"
tags: ["Android玩机","技术向","Bootloader"]
category: Bootloader
draft: false
---

# 什么是Bootloader?
- **Bootloader，即启动加载程序，是嵌入式系统中在操作系统内核运行之前执行的一段代码。它负责初始化硬件设备、建立内存空间映射图，为操作系统内核的调用准备合适的环境。在嵌入式系统中，Bootloader承担着类似于个人计算机BIOS的角色，是整个系统启动的基础。**
## Bootloader的功能
- **硬件初始化：在系统加电后，Bootloader是第一段运行的代码，它需要完成CPU和相关硬件的初始化工作，以确保系统能够正常运行。**
- **加载操作系统：Bootloader会将<span style="color:red;">操作系统的映像文件从存储介质（如Flash内存）</span>加载到RAM中，并跳转到操作系统的启动地址，启动操作系统。**
- **更新和修补：Bootloader通常具备通过通信接口更新系统的能力 ，可以在不拆卸设备的情况下，通过网络或其他通信方式更新或修补系统。**
## Bootloader的实现
- **硬件初始化：Bootloader首先需要对硬件进行初始化，包括<span style="color:red;">内存控制器、GPIO口、串口</span>等，以确保硬件设备处于正确的状态。**
- **加载操作系统：Bootloader需要从<span style="color:red;">固态存储设备中读取操作系统映像</span>，并将其<span style="color:red;">加载到RAM中</span>，然后跳转到操作系统的入口点。**
- **更新和修补：Bootloader需要实现一套通信协议，以支持<span style="color:red;">远程更新（空中更新OTA）</span>和修补操作系统。这通常涉及到安全认证、数据传输和存储器编程等多个环节。**

>[!TIP]
**请先下载需要的工具<span style="color:red;">Android SDK Platform-Tools（ADB调试器）</span>需要解压到任意一个盘中**</br>
**下载链接**：<a href="https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn" target="_blank">Android SDK Platform-Tools</a>

---
# 一加手机
## 前期准备
1. **在设置上点“关于本机”**。  
<figure>
<img src="/images/Post/Bootloader images/oneplus 1.png" width="300px" high="300px" style="margin:0 auto;">
<figcaption style="text-align:center;">点击“关于本机”</figcaption>
</figure>

2. **点击版本号五次直到显示已开启 “开发者模式”**。
<figure>
<img src="/images/Post/Bootloader images/oneplus 2.png" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">进入“开发者模式”</figcaption>
</figure>

3. **在“开发者模式”里找到 “OEM解锁” 和 “USB调试” 并打开**。
>  [!TIP] **确定已打开开发者模式、oem解锁、USB调试，电脑ADB环境正常，终端adb devices正常（文件传输、勾、允许、）**。
<figure>
<img src="/images/Post/Bootloader images/oneplus 3.png" width="300px" high="300px" style="margin:0 auto;">
<figcaption style="text-align:center;">查看各项环境是否打开</figcaption>
</figure>

## **进入Fastboot模式**
>[!NOTE]
**1. 在开机状态下，使用adb验证机器是否连接到电脑：</br> `adb devices`**</br>
**2. 确认连接到电脑后，输入以下adb命令：</br> `adb reboot fastboot`**</br>
**3. 进入fastboot后输入以下命令：</br> `fastboot flashing unlock`**

>[!WARNING] **这时候会弹出一大串英文，用上下音量键摁动中选择 `UNLOCK THE BOOTLOADER` 按电源键确认，完成解锁操作。之后手机全部清除数据重启。**
<figure>
<img src="/images/Post/Bootloader images/oneplus 4.png" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">如图所示</figcaption>
</figure>

---
# 小米 MIUI & HyperOS
## HyperOS用户注意
>[!TIP] **如果你是Xiaomi HyperOS系统用户，请在"小米社区"内测模板中的“Bootloader解锁申请”`中答题**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 0.jpg" width="250px" high="250px" style="margin:0 auto;">
<figcaption style="text-align:center;"> 小米社区Bootloader解锁申请</figcaption>
</figure>

---
## 前期准备
1. **请在“我的设备”里找到“全部参数与信息”**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 1.jpg" width="500px" high="500px" style="margin:0 auto;">
<figcaption style="text-align:center;">如图所示</figcaption>
</figure>

2. **点击”OS版本“五次直到显示已开启“开发者模式”**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 2.jpg" width="300px" high="300px" style="margin:0 auto;">
<figcaption style="text-align:center;">开启开发者模式</figcaption>
</figure>

3. **在“开发者模式”里找到“设备解锁状态”**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 3.jpg" width="600px" high="600px" style="margin:0 auto;">
<figcaption style="text-align:center;">找到设备解锁状态</figcaption>
</figure>

4. **在“设备解锁状态”中最底下点击“绑定设备和账号”，直到显示“设备已于账号绑定”等待168个小时完成操作**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 4.jpg" width="300px" high="300px" style="margin:0 auto;">
<figcaption style="text-align:center;">绑定设备并等待168小时</figcaption>
</figure>

## 下载小米解锁BL工具
1. **等待168个小时后，需点击这里在官网下载<a href="https://www.miui.com/unlock/download.html" target="_blank">小米解锁BL工具</a>，下载的工具必需要解压！**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 5.jpg" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">解压小米解锁工具</figcaption>
</figure>

2. **第一次运行打开 MiUsbDriver.exe 驱动安装程序安装上去，不然识别不了手机**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 6.jpg" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">第一次运行务必打上驱动程序</figcaption>
</figure>

## 运行小米解锁BL工具
1. **打开 miflash_unlock.exe 登录小米账号**
<figure>
<img src="/images/Post/Bootloader images/xiaomi 7.jpg" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">如图所示</figcaption>
</figure>

2. **手机进入 Bootloader 模式，手机关机，电源键 + 音量下键，两个键长按**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 8.jpg" width="300px" high="300px" style="margin:0 auto;">
<figcaption style="text-align:center;">如图所示</figcaption>
</figure>

3. **手机用数据线插到电脑，点击 “解锁” ，解锁会清除手机数据，等待 “解锁成功”**。
<figure>
<img src="/images/Post/Bootloader images/xiaomi 9.jpg" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">点击“解锁”</figcaption>
</figure>

<figure>
<img src="/images/Post/Bootloader images/xiaomi 10.jpg" width="800px" high="800px" style="margin:0 auto;">
<figcaption style="text-align:center;">解锁成功并重启手机</figcaption>
</figure>

# 顺利完成Bootloader解锁后如何Root?
<a href="https://zuoyanblogs.pages.dev/posts/android-root-guide/" target="_blank">链接：Android系统如何获得Root权限</a>