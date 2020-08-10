---
id: build-sensor
title: Build your own sensor
sidebar_label: Build a sensor
---
Please also refer to the accompanying [Github Repository](https://github.com/openeew/openeew-sensor).

You can order a pre-assembled, plug and play, sensor that has been flashed with firmware [here](https://grillo.io/buy-sensor/).

Alternatively, you can build your own with this guide. Here you can create your own PCB, flash firmware, and fabricate your sensor enclosure.

## Hardware

The OpenEEW sensor features a high performance MEMS accelerometer and ethernet or wifi connectivity. It includes also a loud buzzer and 3 bright Neopixel LEDS for alarm functions. By including alarm functions, the owners of the locations where they are installed are more likely to value and look after the device.

The sensor has already shown itself to be [as good as seismometers that cost 60x more](https://openeew.com/blog/sensor-benchmark).

Components are mounted in a PCB with the corresponding circuitry. The board operates at 3.3V with a maximum current of 1A. The accelerometer is accessed via SPI interface, specifically ESP32's VSPI. GPS can optionally be added with a UART interface.

![PCB design v1.0](/docs/pcb-openeew.PNG)_OpenEEW sensor PCB design v1.0_

You can find here the schematics, PCB and BOM files [here](https://github.com/openeew/openeew-sensor/tree/master/eagle).


## Enclosure

You can either 3D print yourself an enclosure using Fusion 360 or your favorite modelling program. This design features snap lip joints to make it easy to assemble, and flanged base for a sturdy connection to the wall surface.
![3D printed case v1.0](/docs/case-3d.PNG)_OpenEEW case design v1.0_


Alternatively you can buy a case that fits the board dimensions ([such as this](https://www.aliexpress.com/item/4000337012320.html?spm=a2g0o.detail.1000014.19.36fa34d16GPRAR&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.14976.157518.0&scm_id=1007.14976.157518.0&scm-url=1007.14976.157518.0&pvid=d8255fa0-4728-41cd-be64-fe030910cf37&_t=gps-id:pcDetailBottomMoreOtherSeller,scm-url:1007.14976.157518.0,pvid:d8255fa0-4728-41cd-be64-fe030910cf37,tpp_buckets:668%230%23131923%2312_668%23808%236395%23432_668%23888%233325%233_4976%230%23157518%230_4976%232711%237538%23458_4976%233223%2310328%231_4976%233104%239653%235_4976%233141%239887%239_668%232846%238107%2326_668%232717%237564%23644_668%233164%239976%23121)).
