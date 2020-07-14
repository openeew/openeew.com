---
id: machine-learning
title: Develop Machine Learning model
sidebar_label: Develop Machine Learning model
---

## Problem description
Machine learning could offer significant improvements to OpenEEW earthquake detection in terms of accuracy (less false positives/negatives) and speed (less stations required for confirmation of event).

OpenEEW sensors have been transmitting unprocessed data to the cloud since 2017 in Mexico, and captured hundreds of earthquakes including several of magnitude 6 and 7. A model trained on [this data](/docs/historic-data/) could be deployed on OpenEEW networks around the world (this is not a theoretical exercise!) and save many lives.

### What is the goal?
Initially, a model should be able to determine if an earthquake is occuring in the accelerometer data. It should know that the accelerations are caused by a seismic event and not, say, a truck passing by.

The next challenge is to characterize the earthquake and determine where it is coming from (distance, direction) and its size (magnitude). The magnitude should be determined using the P-Wave (the first wave) if possible.

All this should ideally happen within a few seconds of the seismic waves reaching the sensor. Large earthquakes can last for a minute or more so we can't wait for the event to pass. It could be that the model is constantly updating its output so that more accurate estimates are being transmitted to nearby populations as the event goes on.

### Features
The dataset consists of 1 second records of accelerations from each sensor, sent every second. These records contain:

```javascript
{
  "country_code": "mx",
  "device_id": "008",
  "x": [2.723, 2.293, 2.75, ...],
  "y": [3.134, 1.686, -4.081, ...],
  "z": [10.636, 13.891, 13.084, ...],
  "device_t": 1518824421.406,
  "cloud_t": 1518824421.398,
  "sr": 31.25
}
```

Each device also has a fixed location. You can query the latitude and longitude for each `device_id` from the [locations file](#) in the registry.

### Labelling earthquakes
You can label seismic events in the dataset by cross-referencing with the Mexican Seismological Agency (SSN), which has a very good catalog that can be [downloaded as a CSV file](http://www2.ssn.unam.mx:8080/catalogo/).

Please note that whilst very good, this catalog is not complete as small events can be missed, for example during vigorous aftershock sequences.

### Performance metric


## Reference projects
Obspy - [Picking/Triggering with python library](https://docs.obspy.org/tutorial/code_snippets/trigger_tutorial.html)

CQSRG - [Locating an earthquake](http://cqsrg.org/oem/earthquakelocation/)

Isaac Kim - [Fast P-wave detection](https://towardsdatascience.com/earthquake-prediction-faffd7160f98)

H.Serdar Kuyuk - [Real-time classification of earthquake using deep learning](https://www.sciencedirect.com/science/article/pii/S1877050918319896)

Zachary Ross - [Phase detection](https://github.com/interseismic)

---

<img src="/docs/nvidia.png" alt="sensor" width="200"/>

As a member of the [NVIDIA Inception](https://www.nvidia.com/en-us/deep-learning-ai/startups/) program, we are able to support promising advances with ML and OpenEEW data with access to GPU cloud virtual machines.
