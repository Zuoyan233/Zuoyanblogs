---
title: 教你解锁手机Bootloader
published: 2025-10-29
description: "如何解锁手机上的万恶之源Bootloader锁，解开了手机最高权限永远属于你（仅限于小米和一加）"
pinned: false
image: "./unlock.png"
tags: ["安卓玩机","技术向"]
category: Bootloader
draft: false

---
### 帖子之前先下载前置需要的工具<a href="https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn" target="_blank">`Android SDK Platform-Tools（ADB调试器）`</a>，需要解压到任意一个盘中。

---
# 一加手机
- **点`“关于本机”`**。  

<img src="/images/Post/Bootloader images/oneplus 1.png" width="300px" high="300px" style="margin:0 auto;">

- **点击版本号五次直到显示已开启`“开发者模式”`**。
<img src="/images/Post/Bootloader images/oneplus 2.png" width="800px" high="800px" style="margin:0 auto;">

- **在`“开发者模式”`里找到`“OEM解锁”`和`USB调试`并打开**。
- ***确定已打开开发者模式、oem解锁、USB调试，电脑ADB环境正常，终端adb devices正常（文件传输、勾、允许、）***。
<img src="/images/Post/Bootloader images/oneplus 3.png" width="300px" high="300px" style="margin:0 auto;">

```yaml
在开机状态下，使用adb验证机器是否连接到电脑：adb devices
确认连接到电脑后，输入以下adb命令：adb reboot fastboot
进入fastboot后输入以下命令：fastboot flashing unlock
```

- **这时候会弹出一大串英文，用上下音量键摁动中选择“`UNLOCK THE BOOTLOADER`”，完成解锁操作。之后手机全部清除数据重启。**

<img src="/images/Post/Bootloader images/oneplus 4.png" width="800px" high="800px" style="margin:0 auto;">

---
# 小米 MIUI & HyperOS
- **如果你是`Xiaomi HyperOS`系统用户，请在`"小米社区"`内测模板中的`“Bootloader解锁申请”`中答题**。
<img src="/images/Post/Bootloader images/xiaomi 0.jpg" width="300px" high="300px" style="margin:0 auto;">

- **请在`“我的设备”`里找到`“全部参数与信息”`**。
<img src="/images/Post/Bootloader images/xiaomi 1.jpg" width="500px" high="500px" style="margin:0 auto;">

- **点击`”OS版本“`五次直到显示已开启`“开发者模式”`**。
<img src="/images/Post/Bootloader images/xiaomi 2.jpg" width="300px" high="300px" style="margin:0 auto;">


- **在`“开发者模式”`里找到`“设备解锁状态”`**。
<img src="/images/Post/Bootloader images/xiaomi 3.jpg" width="600px" high="600px" style="margin:0 auto;">

- **在`“设备解锁状态”`中最底下点击`“绑定设备和账号”`**。
- **直到显示“设备已于账号绑定”`等待168个小时完成操作**。
<img src="/images/Post/Bootloader images/xiaomi 4.jpg" width="300px" high="300px" style="margin:0 auto;">


- **等待168个小时后，需点击这里在官网下载<a href="https://www.miui.com/unlock/download.html" target="_blank">`小米解锁BL工具`</a>，`下载的工具必需要解压！`**。
<img src="/images/Post/Bootloader images/xiaomi 5.jpg" width="800px" high="800px" style="margin:0 auto;">

- **第一次运行打开`MiUsbDriver.exe`驱动安装程序安装上去，不然识别不了手机**。
<img src="/images/Post/Bootloader images/xiaomi 6.jpg" width="800px" high="800px" style="margin:0 auto;">

- **打开`miflash_unlock.exe`登录小米账号**
<img src="/images/Post/Bootloader images/xiaomi 7.jpg" width="800px" high="800px" style="margin:0 auto;">

- **手机进入`Bootloader`模式，手机关机，`电源键 + 音量下键，两个键长按`**。
<img src="/images/Post/Bootloader images/xiaomi 8.jpg" width="300px" high="300px" style="margin:0 auto;">

- **手机用数据线插到电脑，点击`解锁`，解锁会清除手机数据，等待解锁成功**。
<img src="/images/Post/Bootloader images/xiaomi 9.jpg" width="800px" high="800px" style="margin:0 auto;">
<img src="/images/Post/Bootloader images/xiaomi 10.jpg" width="800px" high="800px" style="margin:0 auto;">