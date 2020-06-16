---
id: historic-data
title: OpenEEW sensor dataset
sidebar_label: OpenEEW sensor dataset
---

All data contributed to OpenEEW is [available as a dataset](https://registry.opendata.aws/grillo-openeew/) with AWS OpenData.

This incredible resource dates back to the end of 2017, features data from various countries, and contains some very large magnitude earthquakes (the ones we care about for EEWs!).

You can access this data [with our Python library](/docs/analyze-historic), or view and download files with [the OpenEEW viewer](https://s3.amazonaws.com/grillo-openeew/index.html).

### A note on terminology

Within the data, we use the term `device` for each IoT accelerometer and `record` for each set of accelerometer data that the devices send to the cloud. Therefore, the OpenEEW data consists of many records for many devices.

### How are records generated?

Each device contains a low-noise MEMS accelerometer that provides acceleration values for the three axes x, y and z. These values are returned in gals, where 1 gal = 1 cm/s². In order to send these values to the cloud in real time, devices collect a small set of triaxial readings, typically either 32 or 125, and send them, together with the Unix time (denoted `device_t`) corresponding to the final reading, as a JSON:

```javascript
{
  "x": [2.723, 2.293, 2.75, ...],
  "y": [3.134, 1.686, -4.081, ...],
  "z": [10.636, 13.891, 13.084, ...],
  "device_t": 1518824421.406,
  "sr": 31.25
}
```

The `sr` field contains the accelerometer sample rate, which is the number of samples per second. Using this value, it is possible to assign timestamps to the individual (x, y, z) sample points by subtracting a suitable multiple of `1/sr` from `device_t` (or from `cloud_t`, which is introduced below).

In the above example where the sample rate is 31.25, if each array has length 32, then we would expect a new record approximately every 1.024 seconds.

### What happens in the cloud?

Once data reaches the cloud, an additional Unix time is added, denoted `cloud_t`, to indicate the time of arrival. Historically this has been useful for sensors that don't include a GPS module fo accurate timekeeping, such as the MX-series. New sensors typically include a GPS module and so the `device_t` is preferable over `cloud_t`. In rare cases where two records have the same `cloud_t`, the `device_t` can be used to determine the correct order (or vice versa).

We also append the `country_code` and `device_id` fields to identify which device sent the record. So the final record looks like this:

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

### Where is OpenEEW data stored on AWS?

As shown on the [AWS Registry of Open Data](https://registry.opendata.aws/grillo-openeew/), OpenEEW data is available from an S3 bucket called `grillo-openeew` in the region `us-east-1`. This data is publicly available and does not require an AWS account to access it, although having one provides additional options for working with the data.

You can view and download the OpenEEW records using [this S3 browser](https://s3.amazonaws.com/grillo-openeew/index.html).

![s3-browser](/docs/assets/openeew-s3-browser.png)

### How are records organized on AWS?

Records are assigned to files according to country and device, and then by date based on the `cloud_t` field. A typical file name (or key) has the following structure:

```javascript
records/
  country_code=<country_code>/
    device_id=<device_id>/
      year=<year>/
        month=<month>/
          day=<day>/
            hour=<hour>/
              <minute>.jsonl
```

For example, the sample record from above can be found in the file:

```
records/country_code=mx/device_id=008/year=2018/month=02/day=16/hour=23/40.jsonl
```

Note that the `<minute>` value is currently set to increment by five minutes, i.e. 00, 05, 10, etc. The corresponding five-minute intervals of each file are inclusive at the lower end and exclusive at the upper end. For example, if `cloud_t` for a record corresponds to exactly 40 minutes and 0 seconds, that record will be assigned to the file ending `/40.jsonl` (as opposed to `/35.jsonl`).

The `.jsonl` file extension indicates that records are stored as [newline-delimited JSON objects](http://jsonlines.org/). This means each file contains one JSON per line, where each JSON is a single record with a structure as described above.

### And device metadata?

In order to work with these records, some basic metadata about the devices is required, especially their locations. This metadata is organized by country and can be found in files named as follows:

```
devices/
  country_code=<country_code>/
    devices.jsonl
```

We again use the `.jsonl` structure for consistency with records.
The complete history of device metadata is included, so that any changes in, say, device location can be tracked. A typical entry looks like this:

```javascript
{
  "country_code": "mx",
  "device_id": "008",
  "latitude": 16.61,
  "longitude": -98.98,
  "effective_from": 1483228800.0,
  "effective_to": 253402300799.0,
  "is_current_row": true,
  "vertical_axis": "x",
  "horizontal_axes": ["y", "z"]
}
```

The `effective_from` and `effective_to` fields, in Unix time, give the dates on which the metadata was valid. These values will never overlap between different rows for a given device, so that a query of the form `effective_from ≤ t ≤ effective_to` will never return more than one entry. This is the same as using a `BETWEEN` operator in SQL. For simplicity, the `is_current_row` field can also be used to check for currently valid metadata.

The vertical_axis and horizontal_axes fields are useful for certain calculations, such as Peak Ground Accelerations.
