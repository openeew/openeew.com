---
id: deploy-detection-docker
title: Deploy an earthquake detection system
sidebar_label: Deploy an earthquake detection system
---
👉🏼 Please also refer to the accompanying [Github Repository](https://github.com/openeew/openeew-detection).

There are various methods you can use to ingest sensor data and output an EEW alert. Here we provide a [Docker container](#docker) featuring an MQTT broker, detection scripts, and a time-series database. 

If you prefer, you can also try this with [Node-RED](/docs/deploy-detection-nodered).

## Docker
### Install Docker Desktop
A Docker container can be installed on many systems depending on your requirements (number of sensors, latency to sensor network, and more), from a Raspberry Pi to a Kubernetes cluster in the cloud. 

To install please follow these [instructions](https://www.docker.com/get-started).

### Run OpenEEW Docker
You can get up and running with a single command:

```shell
docker run \
  --interactive \
  --tty \
  --detach \
  --env username=admin \
  --env password=admin \
  --publish 1883:1883 \
  --name openeew-detector \
  openeew/detector
  ```

The code is available [here](https://github.com/openeew/openeew-detection).

