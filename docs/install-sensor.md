---
id: install-sensor
title: Install an OpenEEW sensor
sidebar_label: Install a sensor
---


OpenEEW sensors require specific installation conditions to ensure acceptable data quality:

1. Located on ground or basement floor.
1. Fixed mechanically to a rigid structural element such as column, beam or near a wall corner edge.
1. Connection to internet, depending on sensor module:
    - WiFi. Requires proximity to router and with good Signal to Noise ratio for optimum transmission of packets.
    - Ethernet. Requires proximity to router.
    - A cellular connection has been tested, but requires pre-processing on the device to limit telemetry costs.
1. The device has a 5W wall adapter that needs to be connected to a mains socket outlet, or battery pack. Sleep mode on the MCU has not yet proven useful as transmission needs to be ready with no delay when shaking starts.
1. (optionally) a GPS antenna needs to be fixed with adhesive to a nearby window to get clear view of satellites.


![Sensor installation](/docs/sensor-install.jpg)_OpenEEW sensor installed low to ground on block wall near corner junction_
