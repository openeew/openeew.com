---
id: intensity-prediction
title: Predict user intensity
sidebar_label: Predict user intensity
---

This is the last and one of the most challenging parts of an EEW, once an earthquake is detected by the sensors and confirmed by the algorithms, the last part is to estimate what will be the shaking at different distances from the area of the detecction. 

The magnitude of earthquakes is directly related to how far the shaking could be felt, larger magnitudes generate seismic waves that travel farther and could cause damage not only near the epicenter. However, the main challenge is determine how big the earthquake could be using the first seconds of information. 

This implies differents aspects:

1. Determine the level of shaking in all the stations that are detecting the earthquake.
2. Take into account the distance between the stations.
3. Came out with a rule that if a certain number of stations register certain shaking level, estimate how big the earthaquake could be.  

