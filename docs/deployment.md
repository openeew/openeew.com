---
id: deployment
title: Where to deploy
sidebar_label: Where to deploy
---

Selecting the correct location for your sensors, or stations, is critical for creating an effective EEW. The ideal locations will be as close as possible only to events that affect the areas you are protecting.

Each deployment plan will require 3 basic steps:

## 1. Determine target area for alerts
Select population centers or assets that you wish to protect. This may include a single building, a town, or even a whole region.

In this example, it is determined that we wish to protect citizens living in both San Juan and also Ponce, located in Puerto Rico.

![target location](/docs/deploy1.png)

By narrowing the target areas, we can significantly reduce the size of the sensor network and its cost.

## 2. Assess historic seismicity
Using available data, such as the [USGS catalog](https://earthquake.usgs.gov/earthquakes/search/), you can look at all recorded earthquakes for the regions around your target locations.

These events can be exported with mapping coordinates, and plotted. By observing clusters of large magnitude events, you can know areas that should be prioritized in placement of sensors.

![target location](/docs/deploy2.png)

Select locations close to areas of seismic activity. Consider reliable power and connectivity, structural type, nearby vibrations and more.

## 3. Select locations for sensors
### Choose number of sensors
Based on your budget, determine how many sensors you can install. The more the better. An optimum spacing between sensors is 20km, but this can be increased as necessary due to budget.

It is possible to build a basic EEW with only 2 or 3 sensors, then add more as budget becomes available. This network, initialy, could be designed to cover only the most active seismic zones, but later, as funds allow, expand to cover less active zones and therefore a greater range of future earthquakes.

### Map out optimum locations
Consider the maximum distance you will need to have sensors from your locations. After a certain distance, earthquakes lose enough energy that the resulting shaking intensity at the target locations is no longer a threat 

With the knowledge of historic seimisicity, grid spacing, and max distance, you can plot ideal locations for your sensors. Try and locate them near towns or citys where there will be reliable power and internet (unless you are using alternate connectivity options such as LoRaWAN or cellular).

![target location](/docs/deploy3.png)


### Find suitable structures for sensor installation

Finally you should select the building or structure that will house the sensor. This is a very important decision to make, as the sensors may remain here for years.

The location would have these ideal characteristics:

1. **A reliable contact** who shares in the project goals, and is willing to keep the sensor active for a long period. Providing an EEW alarm to this contact can help incentivize their participation.
1. A building with **reliable internet and power** (unless you opt for an off-grid solution, and alternate connectivity module). In rural settings, the best candidates can often be municipal buildings such as schools, hospitals and government offices.
1. A location in the building **away from vibrations**, such as construction work, large roads, movement of building occupants, and machinary.
1. A buildings that meets the [installation requirements](/docs/install-sensor).

