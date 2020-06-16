---
id: eew-benchmark
title: Comparison of Mexico’s EEWs
author: Andres Meira
authorURL: https://github.com/andygrillo
authorImageURL: https://avatars2.githubusercontent.com/u/6279965?s=460&u=68feafd0ebf8f413baeb7770761c3c832b426aa1&v=4
tags: [benchmark, mexico, eew]
---

We regularly run benchmark analysis of the OpenEEW by Grillo Earthquake Early-Warning system (EEW) against other systems in Mexico. This year we were pleased to find that our system has been performing very well and below we share the results.

<!--truncate-->

#### SASMEX
was created and is managed by a private company CIRES, and receives substantial financing by the Mexican government since 1985. It uses seismograph sensors that can cost more than $20,000 USD each including installation, and proprietary algorithms to detect earthquakes. The alerts are sent via a network of radio towers back to a handful of cities in Mexico. The SASMEX system relies on public financing and whilst it has limited coverage, it is considered to be the official alert of Mexico. It also generates revenue with its alarm devices that start at $2,000 USD.

#### SKYALERT
is a private company that has developed a sensor network using HomeSeismo sensors bought from Japan, costing several thousand USD each. When shaking is detected by a sensor, it transmits the local shaking intensity to the cloud, and push notifications are sent to the users for each separate shaking event. However, the user sometimes receives many messages depending on how many sensors reach a shaking threshold. This can be confusing for the users.

#### OPENEEW by GRILLO
is a social enterprise with funding from USAID, AXA Foundation, the Chile government and others. Grillo has developed proprietary sensors and algorithms which are located in Mexico and Chile. This system is less than 1% the cost of SASMEX, and significantly cheaper than Skyalert. This is done by using a new low-cost accelerometer (Grillo Pulse), and doing all the processing in the cloud. The Grillo detection system calculates what the shaking will be like for each end-user, and only alerts them if they will feel the shaking in their location.

---

## Benchmarking the EEWs
Grillo, SASMEX and Skyalert all send real-time tweets when their network of sensors has detected an earthquake in Mexico. The twitter platform is built for low-latency mass messaging, which is ideal for EEW where large numbers of population need to receive alerts seconds or minutes before the shaking arrives to their location. This study compares the tweets from each system to measure their performance.


| EEW        |      1st to detect      |   No. of detections |
| :------------- | :-----------: | :-----: |
| SASMEX    |   40%    |   218 |
| **OpenEEW (Grillo)**   | **45%** | **247** |
| Skyalert |   15%    |    73 |

View the [dataset here](https://docs.google.com/spreadsheets/d/1PzuKjq_HFbfXl50TxwVmLpy42HmJLXwpGCcaGE-sAQE/edit?usp=sharing).

To arrive at these scores, a year’s worth (July 2018 – July 2019) of tweets were taken from the following twitter accounts:

- @grillosismosmx
- @sasmex
- @redskyalert

To make a proper comparison, only the tweets that contain live alerts were used. Tweets that relate to post-earthquake or non-earthquake events were removed. The tweets for all EEWs were then grouped according to earthquake events. The first EEW to send an alert tweet was determined to be the fastest (labelled ‘Winner’ in the linked spreadsheet).

We also compared tweets from SASMEX with the timestamps posted in their website, and the difference was always under 1 second, which probably relates to latency involved in sending to Twitter servers.

---
## EEW accuracy
OpenEEW by Grillo is the only of the three EEWs to have **zero false positives**, i.e. alerts that were not actual earthquakes. This is due to its dense network of sensors, and proprietary algorithms.