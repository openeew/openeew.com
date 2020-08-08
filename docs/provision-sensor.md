---
id: provision-sensor
title: Provision an OpenEEW sensor
sidebar_label: Provision a sensor
---

Once you have an OpenEEW sensor is ready and fixed to a rigid building element, its time to connect it and get started!

## Quickstart
Connect your sensor by ethernet to nearby router, or in the case of Wifi use any [ESP-Touch](https://www.espressif.com/en/products/software/esp-touch/overview) app to pass your wifi credentials to the device. An example is the free Grillo app ([iOS](https://apps.apple.com/ec/app/grillo/id1478536152), [Android](https://play.google.com/store/apps/details?id=com.grilloplus.iot_esptouch_demo&hl=es_MX)).

You're all set.

## Install custom firmware
If you wish to install your own firmware, please follow these steps:

### Install PlatformIO
Follow this guide to [install PlatformIO](https://docs.platformio.org/en/latest/integration/ide/vscode.html#installation) on your machine. PlaformIO offers several benefits to the Arduino IDE, particularly the ability to contain dependencies within a simple folder structure.

### Open project
Inside VSCode go to PlaformIO home, which is available on the bottom toolbar, and select `Projects`, then `Open Project`. Navigate to the root folder where you cloned this repository and open.

### (Optional) Add certificates for AWS IoT
Each device may require a unique `thing` with the AWS IoT Core registry. For AWS to permit message subscription and publishing, every device requires unique certificates as well as a unique Device ID.

Place the 3 generated files inside of `/data` foler : `clientKeyCrtPem.txt`, `clientKeyPem.txt`, `deviceId.txt`.

To upload the contents of the `data` folder you will need a tool called [ESP32 filesystem uploader](https://github.com/me-no-dev/arduino-esp32fs-plugin). To install, follow the instructions in this [readme](https://github.com/me-no-dev/arduino-esp32fs-plugin/blob/master/README.md), which will create a `Tools` > `ESP32 Sketch Data Upload` menu item within Arduino IDE. With the device connected and in bootloader mode, click on `Tools` > `ESP32 Sketch Data Upload`, which will upload the contents of the “data” folder placed with the Arduino Sketch.

### Flash your sensor
Build the project using the check mark on the bottom toolbar, then uplaod using the arrow button adjacent to it. The IDE should automatically detect the board of your connnected sensor and start to write the new firmware.

To add the certificates and other contents of the `data` folder to the SPIFFS memory, you need to
open tasks in the PlaformIO menubar on the left, and select `Upload File System image`:
![](/images/platformio-spiffs.png)

