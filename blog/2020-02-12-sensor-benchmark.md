---
id: sensor-benchmark
title: OpenEEW sensor benchmarking
author: Luis Rodriguez
authorURL: https://github.com/luisera
authorImageURL: https://avatars3.githubusercontent.com/u/1552302?s=460&u=0d9ce1f13d8e06500cd80a2a116c365d656f67d3&v=4
tags: [benchmark, sensor, eew]
---

Here we will evaluate the performance of OpenEEW seismic sensors to demonstrate their suitability for EEW applications.

<!--truncate-->

## The Test
Historic accelerations from the Grillo sensor network in Mexico will be compared to the [UNAM Engineering Institute Accelerometric Network (RAII-UNAM)](https://aplicaciones.iingen.unam.mx/AcelerogramasRSM/Inicio.aspx).  This is one of the two national strong motion networks.

RAII-UNAM is a dense, well-recognized network that uses observatory grade accelerometers such as Kinemetrics Episensor with 24bit digitizers. UNAM sites are a combination of low-noise free field sites outside of cities as well as basin sites within large population centers.


![Map UNAM](/blog/map-unam.png)_RAII-UNAM seismic network_

![Map Grillo](/blog/map-grillo2018.png)_Grillo OpenEEW network_

---


## OpenEEW sensor
The OpenEEW sensor is a three component accelerometer with a 20 bit digitizer and dynamic range of +/- 2g. It is paired with a microcontroller that continuously sends samples to the cloud, as well as status updates.

The device is configured to send up to 125 samples for each axis per second to the cloud, where the data is stored, processed, and visualized.

![OpenEEW sensor](/blog/openeew-sensor.jpg)

_OpenEEW sensor and monitoring screen_

---

## Comparison of data

### OpenEEW PGAs compared to UNAM PGAs
To arrive at a comparison for PGAs during the February 2018 M7.2 Pinotepa event, peak ground accelerations were taken from the UNAM database and also from the OpenEEW traces stored in AWS.

The maximum value for a single component was chosen for the PGA on either dataset, and plotted here.

It can be observed that the OpenEEW sensors show similar PGAs and distance decay consistent with the UNAM sensors. Clusters of UNAM sites above the mean acceleration are within city basins (Acapulco, Oaxaca, and Puebla).

![PGA plot](/blog/pgaplot1.png)_OpenEEW PGAs compared to UNAM PGAs_

### OpenEEW PGVs compared to UNAM PGVs
The same acceleration datasets from the PGA comparison were used for a PGV comparison for the 7.2M event.

Gain is removed from the raw accelerations from the OpenEEW sensors and baseline corrected and integrated to velocity.

As with the PGA, the peak ground velocity behavior is consistent between the UNAM and OpenEEW sensors.

![PVA plot](/blog/pgaplot2.png)

_OpenEEW PVAs compared to UNAM PVAs_

### Comparison against ground motion models
We routinely observe that shaking intensities measured by OpenEEW compare favorably to regional and global ground motion models (GMMs). 

Shown here are 3 separate events. The scatter plots show the comparison to published GMMs `Zhao2006`, `Atkinson&Boore2003`, `McVerry2006`, `LinLee2006` for the mean values of PGA. 

![3 events](/blog/map-3events.png)

![3 events](/blog/scatter1.png)

![3 events](/blog/scatter2.png)
![3 events](/blog/scatter3.png)

It can be observed that the OpenEEW PGAs align well with predictions from GMMs. 

We note slightly high residual ground motions for the M7.2 earthquake (observed in UNAM data too). These  are likely due to the unusually small source dimensions of the earthquake which denotes a high stress drop. See Li et al (2020).

### Sample waveforms for one Grillo sensor for 3 events

![3 events](/blog/sample-event.png)

![3 events](/blog/seismo1.png)
![3 events](/blog/seismo2.png)
![3 events](/blog/seismo3.png)

## Conclusion

For the purpose of generating ground motion intensity measures (e.g. PGAs and PGVs), it is shown that OpenEEW sensors perform as well as one of Mexico’s national strong motion networks.

OpenEEW accelerometers have enough fidelity and dynamic range to easily record all felt and damaging events at local and regional distances. The lower cost and ease of deployment allows OpenEEW sensors to form dense networks to correctly capture the variability of ground motion across an urban center.

As well as generating high quality data, OpenEEW also offers very low-latency transmission and processing through the cloud, resulting in near-instant and accessible data.


