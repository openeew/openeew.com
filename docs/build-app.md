---
id: build-app
title: Build an EEW app
sidebar_label: Build an EEW app
---

For this example, we will create  earthquake early-warning (EEW) app using React Native. You can find [the source code here](https://github.com/grillo/openeew-app-reactnative).

The app receives FCM push notifications, and visualizes historic earthquakes from a Firebase realtime database.

The user is registered through Firebase authentication, and the app uses the user location to calculate percieved intensity of an earthquake. This is done by calculating distance to the event and determining the loss in energy of the seismic.

The app also allows setting of country, testing of alarm, and browsing of previous alert events.

Alerts are only made to notify if they result in a user intensity of more than 'Debil' i.e. 'Light'.

![home](/docs/assets/app-screen1.webp)
![alerts](/docs/assets/app-screen2.webp)
![history](/docs/assets/app-screen4.webp)
![past event](/docs/assets/app-screen6.webp)