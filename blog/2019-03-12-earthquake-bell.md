---
id: earthquake-bell
title: The Earthquake Bell
author: Andres Meira
authorURL: https://github.com/andygrillo
authorImageURL: https://avatars2.githubusercontent.com/u/6279965?s=460&u=68feafd0ebf8f413baeb7770761c3c832b426aa1&v=4
tags: [eew, story]
---

The concept of an ***earthquake early-warning system*** (EEW) is not new. For 150 years it has been understood as follows:

<!--truncate-->

1. A system that **detects an earthquake quickly** using seismic sensors in areas of seismic activity.
1. On detection, an **alert is sent rapidly** and informs nearby populations before the seismic waves reach them and cause damage.
1. A system that **works automatically**, i.e. without human intervention.
1. A warning that is **understood by populations** in advance.

### J.D Cooper

An EEW of these characteristics was first described by J.D. Cooper, a doctor in San Francisco, in 1868 - the same year that a magnitude 7 rocked the Bay Area. A century would pass before Dr Cooper's technically challenging idea could be realized;

> _"...we are obliged to look for some means of prognosticating (earthquakes) and I wish to suggest the following mode by which we may make electricity the means, perhaps, of saving thousands of lives in case of the occurrence of more severe shocks than we have yet experienced. ...
> A very simple mechanical contrivance can be arranged at various points from 10 to 100 miles from San Francisco, by which a wave of the earth high enough to do damage will start an electric current over wires now radiating from this city and almost instantaneously ring an alarm bell ... known to everybody as **the earthquake bell**. ... This machinery would be self-acting, and not dependent on the telegraph operators, who might not always retain the presence of mind enough to telegraph at the moment or might sound the alarm too often.
> Of course, there might be shocks the central force of which is too near this city to be thus protected but that is not likely to occur (often)."_

This remarkable vision is the basis of all earthquake early-warning systems (EEWs) today. Dr Cooper understood not only the benefits of such a system, but also its limitations; the _inability to warn nearby populations_, the _danger of false alarms_, the _importance of functioning automation_.

---
### Shinkansen Train EEW
In 1965, shortly after Japan's bullet train began to operate, a magnitude 6 earthquake near Shizuoka damaged the train track and prompted construction of an EEW, along the lines of Dr Cooper's 1868 idea.

![Alarm system for tokaido line of Shinkansen (California Geology Feb 1988)](https://cdn-images-1.medium.com/max/2000/1*Kxf2tbr4T7HqVVV5hMlHQA.jpeg)_Alarm system for tokaido line of Shinkansen (California Geology Feb 1988)_

This system was crude by today's EEW standards; when the mechanical accelerometers indicated more than 40 cm/s2 (gals) then the trains had their power shut off immediately. Nowadays, this system has been revised, and other modern systems like Mexico's _SASMEX_, or California's _Shakealert_, boast powerful seismographs that can detect more distant earthquakes and therefore provide more time for the warning.

---
### OpenEEW
[OpenEEW by Grillo](http://openeew.com) is pursuing a new EEW method that relies on  powerful and far-reaching cloud computing. Instead of having sensors confirm an earthquake event, or provide intensity triggers, Grillo has developed low cost sensors that transmit raw data to remote data centers in realtime using Internet-of-Things (IoT) protocols. The data centers then process this vast quantity of data using Big Data technologies, i.e. powerful and scalable clusters of servers, to determine if an earthquake is happening. By leveraging the power of the cloud, Grillo is able to perform much more complicated algorithms than was possible before. What's more, Grillo is able to process various algorithms in parallel to arrive at a more reliable averaged earthquake output.

New EEWs strive for speed and accuracy. It is hard to achieve both, but a good start is having a very dense network of sensors; the closer a station is to the earthquake, the faster the detection is done; the more stations you have confirming an earthquake, the more certain you are its not a passing truck. Grillo solves this problem by reducing the work a sensor needs to do (this is passed on to the cloud), and therefore its cost. This means the inexpensive sensors can be deployed in large numbers, achieving great density, allowing for better earthquake detection and also network resiliency due to redundant sensors.

The concept of an EEW hasn't fundamentally changed since Dr Cooper's *earthquake bell *vision in 1868, but new technologies are making the realization more effective each year.
