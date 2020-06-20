---
id: build-sensor
title: Build your own sensor
sidebar_label: Build a sensor
---

If you prefer not to order a sensor but build your own, you can follow this guide. Here you can build your own PCB, flash firmware, and fabricate your sensor enclosure.

## Hardware

The OpenEEW sensor features a high performance MEMS accelerometer and wifi connectivity. It has already shown itself to be [as good as seismometers that cost 60x more](https://openeew.com/blog/sensor-benchmark).

The sensor features the following components:

- ESP32 WROOM
- ADXL355
- Quectel L70 GPS (optional)

Components are mounted in a PCB with the corresponding circuitry. The board operates at 3.3V with a maximum current of 1A. The accelerometer is accessed via SPI interface, specifically ESP32's VSPI. GPS is used with a UART interface.

![PCB design v1.1](/img/PCB_layout.png)_OpenEEW sensor installed low to ground on block wall near corner junction_

You can find here the schematics, PCB and BOM files [here](https://github.com/openeew/openeew-sensor/kicad).

This design was developed using KiCad v5.0.2 and following Seeed Studio's PCBA rules. For design considerations see [here](http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification) and for Gerber files generation see [here](http://support.seeedstudio.com/knowledgebase/articles/1824574-how-to-generate-gerber-and-drill-files-from-kicad). Seedstudio components from the Open Part Library can be found [here](https://www.seeedstudio.com/opl.html).

## Firmware

You can download our Arduino firmware and install directly to the ESP32 board. For information [see here](https://github.com/openeew/openeew-sensor-arduino).

We very much welcome any help adapting our firmware for different boards and connectivity options.

## Enclosure

You can either 3d print yourself an enclosure, or buy a case that fits the board dimensions ([such as this](https://www.aliexpress.com/item/4001044846335.html?spm=a2g0o.productlist.0.0.58725970IU6LYX&algo_pvid=be2f3136-fd5f-47da-af93-dbe0e929751d&algo_expid=be2f3136-fd5f-47da-af93-dbe0e929751d-55&btsid=0be3746c15925982818394467eee33&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_)).
