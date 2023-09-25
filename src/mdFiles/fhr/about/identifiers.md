+++
date = "2023-09-25T14:02:13-04:00"
title = "Types of data in the database"
linktitle = "Patient identifiers"
weight = 30
toc = "true"

+++

The FHR (Fetal Heart Rate) database contains a wealth of clinical information recorded during routine patient care. It's important to understand the two main types of data within the database: static data and dynamic data. These distinctions help provide context for the nature of the information stored in the database.

# Static data

Static data refers to information that is recorded once for a given identifier and typically does not change over time. In the FHR database, static data includes the following key identifiers:

## Child Patient Data

For child patients, the following static data is available:

* Child Person ID: A unique identifier for each child patient.
* Child Encounter ID: An identifier for each child patient's encounter.
* Date of Birth (DOB): The date of birth of the child patient.
* Diagnosis: Various diagnosis details recorded for child patients.

## Mother Patient Data

Similarly, for mother patients, the following static data is available:

* Mother Person ID: A unique identifier for each mother patient.
* Mother Encounter ID: An identifier for each mother patient's encounter.
* Date of Birth (DOB): The date of birth of the mother patient.
* Diagnosis: Various diagnosis details recorded for mother patients.

It's important to note that static data is typically not associated with an `ITEMID` since it doesn't require repeated measurements. Instead, it provides essential patient information that remains constant throughout their care.

# Dynamic Data

Dynamic data, on the other hand, includes information that is periodically measured or recorded during a patient's hospital stay. These measurements change over time and are often associated with an ITEMID to efficiently store repeated measurements. Examples of dynamic data include:

## Child Vital Signs

For child patients, dynamic data includes vital signs such as:

* Heart Rate: Recorded with associated timestamps.
* Blood Pressure: Measured at various intervals.
* Temperature: Monitored with timestamps.
* Other Clinical Measurements: Recorded during the child's stay.

##  Mother Vital Signs

Similarly, for mother patients, dynamic data includes vital signs such as:

* Heart Rate: Monitored with timestamps.
* Blood Pressure: Recorded at different time points.
* Temperature: Recorded with associated timestamps.
* Other Clinical Measurements: Collected during the mother's care.

# Hospital acquired data

Data sourced from the hospital database includes a wide range of information related to a patient's stay within the hospital. These tables provide context for the patient's overall care but are not necessarily specific to their ICU stay. Some key tables in this category include:


* ADMISSIONS: Contains details about patient admissions, including admission type and discharge time.
* DIAGNOSES_ICD: Records International Classification of Diseases (ICD) codes for diagnoses.
* LABEVENTS: Stores laboratory test results.
* PATIENTS: Contains static patient information.
* PROCEDURES_ICD: Records ICD codes for procedures performed on patients.
* TRANSFERS: Provides information about patient transfers within the hospital.

Understanding the types of data within the FHR database is essential for conducting meaningful analyses and research within the clinical context. Researchers should consider both static and dynamic data when designing queries and interpreting results.
