---
id: analyze-historic
title: Analyze OpenEEW data
sidebar_label: Analyze OpenEEW data
---

There are various methods you can use to read historic OpenEEW data, in order to test new algorithms. Here we provide an example with our [Python library](#openeew-data-with-python), and also using [Node-RED](#openeew-data-with-node-red).

Here you can find [a package using Julia](https://github.com/tclements/OpenEEW.jl) for working with OpenEEW data, created by [Tim Clements](https://github.com/tclements).

[Laura Ermert](https://github.com/lermert) has created [tools in python and Julia](https://github.com/lermert/grillo_ruido) to facilitate working with OpenEEW data, for example converstion to MSEED format.

## OpenEEW data with Python

Presently you can use the [OpenEEW package for Python](https://pypi.org/project/openeew/) to download and analyze OpenEEW accelerometer data.

This tutorial allows you to get started working with OpenEEW accelerometer data in Python (version 3.5 or later) by analyzing a magnitude 7.2 earthquake that occurred in Mexico on 16 February 2018.

The code is available as a Jupyer notebook from our github [repo](https://github.com/openeew/openeew-python/blob/master/notebooks/exploring_openeew_data.ipynb).

### Installing requirements

To install openeew, you can use pip(for Python 3.5 or later):

```python
pip install openeew
```

To reproduce the results of this tutorial, you will also need to install some other packages:

```python
pip install folium plotnine geopy
```

### Finding earthquake details

Mexico's national seismological service (SSN) has a [catalog](http://www2.ssn.unam.mx:8080/sismos-fuertes/) of past earthquakes. Here, you can find details of the magnitude 7.2 earthquake that struck near the coast of Oaxaca on 16 February 2018, which we will store in a dict variable for later use:

```python
    # Get earthquake location and datetime
    eq = {
        'latitude': 16.218,
        'longitude': -98.0135,
        'date_utc': '2018-02-16 23:39:39'
        }
```

Using the folium package, we can visualize the epicenter on a map:

```python
    import folium

    # Create map centered at earthquake epicenter
    m = folium.Map(
            location=[eq['latitude'], eq['longitude']],
            zoom_start=7
            )

    # Add circle to indicate epicenter
    folium.Circle(
        radius=10000,
        location=[eq['latitude'], eq['longitude']],
        color='crimson',
        fill='crimson',
        ).add_to(m)
```

This produces a beautiful interactive map with the epicenter shown as a crimson circle:

![Earthquake epicenter (map produced using folium)](/docs/pythonmap-1.png)_Earthquake epicenter (map produced using folium)_

### Getting device locations

The next step is to see where OpenEEW's seismic devices were located at the time of the earthquake. This is straightforward using OpenEEW:

```python
    # Import the AwsDataClient class
    from openeew.data.aws import AwsDataClient

    # Initialize client object with 'mx'
    # This means we want data for Mexico
    data_client = AwsDataClient('mx')

    # Get device metadata as of the earthquake date
    devices = data_client.get_devices_as_of_date(eq['date_utc'])
```

Now we can add the device locations to the map from above:

```python
    for d in devices:
        folium.Marker(
            [d['latitude'], d['longitude']],
            popup = folium.Popup(
                d['device_id'],
                sticky=True
                )
            ).add_to(m)
```

![Epicenter and device locations (map produced using folium)](/docs/pythonmap-2.png)_Epicenter and device locations (map produced using folium)_

We see that the majority of devices are deployed along the Pacific coast of Mexico, which is its most seismically active region.

Clicking on the blue markers, we can see the corresponding device IDs:

![Devices closest to epicenter (map produced using folium)](/docs/pythonmap-3.png)_Devices closest to epicenter (map produced using folium)_

### Getting accelerometer records

Now we know where the different devices were located at the time of the earthquake, we would like to see their accelerometer records. This can be achieved using the method `get_filtered_records` together with the function `get_df_from_records`, which returns the accelerometer records as a pandas.DataFrame:

```python
    from openeew.data.df import get_df_from_records

    # Specify start and end dates in UTC
    start_date_utc = '2018-02-16 23:39:00'
    end_date_utc = '2018-02-16 23:43:00'

    # Get records for the specified dates
    records_df = get_df_from_records(
        data_client.get_filtered_records(
            start_date_utc,
            end_date_utc
            )
        )
```

For plotting purposes, we extract a `datetime.datetime` object from the Unix time `sample_t` and then select the required columns:

```python
    from datetime import datetime

    # Get UTC date from Unix time sample_t
    records_df['sample_dt'] = \
        records_df['sample_t'].apply(
            lambda x: datetime.utcfromtimestamp(x)
            )

    # Select required columns
    records_df = records_df[
        ['device_id', 'x', 'y', 'z', 'sample_dt']
        ]
```

Looking at the first few rows with `results_df.head()` gives:

| device_id |   x    |   y   |   z   |        sample_dt        |
| :-------- | :----: | :---: | :---: | :---------------------: |
| 000       | -0.155 | 0.158 | 0.015 | 2018-02-16 23:38:59.602 |
| 000       | -0.128 | 0.158 | 0.128 | 2018-02-16 23:38:59.634 |
| 000       | -0.158 | 0.128 | 0.068 | 2018-02-16 23:38:59.666 |
| 000       | -0.177 | 0.128 | 0.121 | 2018-02-16 23:38:59.698 |
| 000       | -0.132 | 0.177 | 0.102 | 2018-02-16 23:38:59.730 |

To visualize these records, we use the package plotnine and a simple function that outputs a plot of the x-, y- and z-axes for a given `device_id`:

```python
    import plotnine as pn

    def plot_seismograms(device_id):

        # Get earthquake date as datetime.datetime object
        eq_dt = AwsDataClient._get_dt_from_str(eq['date_utc'])

        plots = []
        for axis in ['x', 'y', 'z']:
            plots.append(
                pn.ggplot(
                    records_df[records_df['device_id'] == device_id],
                    pn.aes('sample_dt', axis)
                    ) + \
                pn.geom_line(color='blue') + \
                pn.scales.scale_x_datetime(
                    date_breaks='1 minute',
                    date_labels='%H:%M:%S'
                    ) + \
                pn.geoms.geom_vline(
                    xintercept=eq_dt,
                    color='crimson'
                    ) + \
                pn.labels.ggtitle(
                    'device {}, axis {}'.format(
                          device_id, axis)
                          )
                    )

        # Now output the plots
        for p in plots:
            print(p)
```

From the map above, we see that the closest station to the epicenter was 004, but unfortunately this device was not sending data at the time. Indeed, maintaining device connectivity is one of the challenges of managing a seismic network. The next closest station was 006, which we pass to our function:

```python
    plot_seismograms('006')
```

This gives the following output for the x-axis:

![Accelerometer records for device 006 (plot created using plotnine)](/docs/pyplot1.png)_Accelerometer records for device 006 (plot created using plotnine)_

We see that this device recorded some large accelerometer values (in [Gal](<https://en.wikipedia.org/wiki/Gal_(unit)>), where 1 Gal = 1cm/s²), as we would expect by its proximity to the epicenter. The crimson vertical line, which shows when the earthquake started, is about 10 seconds before the shaking started to affect this sensor.

Now we have an idea how the earthquake affected nearby devices, let's have a look at one further away. Going back to the map, we see that there was a device, 000, located in Mexico City, more than 350km away:

![Device located in the south of Mexico City (map produced using folium)](/docs/pythonmap-4.png)_Device located in the south of Mexico City (map produced using folium)_

For this device, `plot_seismogram` outputs the following for the x-axis:

![Accelerometer records for device 000 (plot created using plotnine)](/docs/pyplot2.png)_Accelerometer records for device 000 (plot created using plotnine)_

We immediately note some differences from the first plot:

- the acceleration values are much lower

- more time passed after the earthquake began before it was detected: approximately 1 minute compared to 10 seconds for the closest device

The first point highlights that shaking caused by an earthquake changes with distance from the epicenter, while the second point highlights the window of opportunity after an earthquake is first detected to send alerts to faraway locations before shaking there begins.

The challenge is therefore to accurately estimate how shaking will be felt in faraway locations and to do so quickly before shaking in those locations begins.

### Comparing maximum accelerations

To see how distance affects the level of shaking, it is interesting to compare the maximum acceleration of each device with distance from the epicenter.

Here we calculate the maximum horizontal acceleration of each device:

```python
    # For each device, get max acceleration of horizontal axes
    # Store these values as pandas Series
    pgas = pd.Series(name='pga')
    pgas.index.name = 'device_id'

    for device_id in records_df.device_id.unique():
        # Get horizontal axes from device metadata
        horizontal_axes = [
            d['horizontal_axes'] for d in devices
            if d['device_id'] == device_id
        ][0]

        # Get max accel as sqrt of sum of squares of horizontal axes
        pgas[device_id] = \
            (records_df[records_df['device_id'] == device_id][horizontal_axes] ** 2) \
            .sum(axis=1) \
            .pow(0.5) \
            .max()
```

We can then combine these values with the device metadata:

```python
    from geopy.distance import distance

    # Use a pandas DataFrame for convenience
    devices_df = pd.DataFrame(devices)

    devices_df = devices_df[
        [
            'device_id',
            'latitude',
            'longitude'
        ]
    ]

    # Use the geopy.distance.distance function
    # to get distance from devices to epicenter
    devices_df['dist_from_eq'] = devices_df.apply(
        lambda r: round(
            distance(
                (r['latitude'], r['longitude']),
                (eq['latitude'], eq['longitude'])
                ).km, 3),
            axis=1
        )

    devices_df = devices_df.merge(pgas, left_on='device_id', right_index=True)
```

Finally, we create a plot using this code:

```python
    # Plot using linear scale
    pn.ggplot(
            devices_df,
            pn.aes('dist_from_eq', 'pga')
            ) + \
        pn.geom_point(color='blue') + \
        pn.labels.ggtitle('PGA vs distance from epicenter')
```

which gives:

![How shaking changes with distance (plot created using plotnine)](/docs/pga-distance.png)_How shaking changes with distance (plot created using plotnine)_

We see that the maximum acceleration decreases exponentially as distance from epicenter increases.
