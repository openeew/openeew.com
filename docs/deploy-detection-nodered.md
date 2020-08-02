---
id: deploy-detection-nodered
title: Deploy an earthquake detection system
sidebar_label: Deploy a Node-RED earthquake detection system
---

There are various methods you can use to ingest sensor data and output an EEW alert. Here we provide an example with [Node-Red](#node-red), but you can also run the OpenEEW [Docker container](/docs/deploy-detection-docker).

## Node-RED
Node-RED is a low-code tool for working with IoT data. It natively works with the JSON format which the OpenEEW sensor outputs, making it fast and easy to use. It also provides plugins, called `nodes`, that can take data from an MQTT broker, output to email, write to a database, and much more.

This tool allows you to make `flows` which are visual representations of data being processed. We encourage you to use the [flows we create](https://github.com/openeew/openeew-nodered), and share flows that you have made.

![openeew-quakeplayback-flow](/docs/openeew-quakeplayback-flow.png)

Whilst most of what you may want to do requires simply connecting and configuring the `nodes`, for advanced work such as creating new `nodes` with unique logic, [knowledge of JavaScript](https://javascript.info/) is useful.

### Install Node-RED
Node-RED can be installed on many systems, from a Raspberry Pi to a virtual machine in the cloud. You can find [instructions here](https://nodered.org/docs/getting-started/).

For local deployment you can simply run an instance on a laptop, and when you are ready you can re-use your flows in a production environment. 

### Reading OpenEEW sensor data
The very first task should be reading real-time data from your sensors. To do this you will need an MQTT node and the credentials for connecting to the MQTT broker. If you are reading directly from an OpenEEW cluster, then you can [access the credentials here](#). If you are hosting your own MQTT broker, then you will use the credentials you have created.

Simply connect your `MQTT node` with a `debug node`, and in the debug panel you will see your data live!

![](/docs/nodered-stream1.gif)

Each sensors sends a single message per second, with the following structure:

```javascript
{"traces":
    [{"t":1518824421.406080,"sr":125,     //'t'=time, 'sr'=sample rate
      "x": [2.723, 2.293, 2.75, ...],     //32 samples per second
      "y": [3.134, 1.686, -4.081, ...],   //32 samples per second
      "z": [10.636, 13.891, 13.084, ...]  //32 samples per second
     },...  
     //4 arrays in total
    ]}
```
The timestamp from the moment each array of 32 readings is received by the accelerometer is denoted by `t`. The sensor rate, typically 32hz or 125hz, is denoted by `sr`. The individual accelerations are found in their respective axis, `x`, `y`, or `z`. The accelerations are in [gal units](https://en.wikipedia.org/wiki/Gal_(unit)), where _1 gal_ equals _1 cm/s2_.


### Detecting peak accelerations (PGAs)
As a simple trigger, you can simply set a threshold that alerts on high accelerations from the sensors. The following code can be inserted into a `function node`:
``` javascript
var alert = false;
var gals = 0.0;
var x,y,z;
for( i=0; i<msg.payload.traces[0].x.length;i++){
    x = msg.payload.traces[0].x[i];
    y = msg.payload.traces[0].y[i];
    z = msg.payload.traces[0].z[i];

    gals = Math.sqrt( Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2) );
    if( gals > 3 ) {
        // whoa - maybe an earthquake
        alert = true
    }
}

if( alert ) {
    return msg;
} else {
    return null ;
}
```
This node will declare an earthquake when it detects values above 3 gals. Of course this will not filter out accelerations from other events, such as passing vehicles or slamming doors.


### Using STA/LTA
Running the traces through an STA/LTA (Short-Term Average/Long-Term Average) node before the PGA node will help filter out non-earthquake accelerations.

To create an STA/LTA function node, you will need to do the following:
1. Take the first 10 messages of data for each sensor (approximately 10s) and for each axis take the average of the absolute values.
1. Take the final 1 message worth of data for each sensor (approximately 1s) from this same 10 message window and again take an average reading of the absolute values for each axis.
1. The average value taken from the 1 message window should be divided by the value for the 10 message window.

Repeat this every second to obtain a new STA/LTA value. Experiment with [OpenEEW historic data](/docs/historic-data) to establish a good threshold for this value, based on the typical earthquake magnitudes in your region.