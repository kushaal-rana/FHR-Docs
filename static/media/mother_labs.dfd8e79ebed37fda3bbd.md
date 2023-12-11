<h1><b>MOTHER LABS</b></h1>

**Table Source:** Hospital Database.

**Table Purpose:** The "mother_labs" table stores laboratory-related data for mothers in an obstetrics and gynecology (OBGYN) context, including test results and associated information.

**Number of Rows:** 474503

**Links to**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to capture a wide range of information related to laboratory tests conducted on expectant mothers. It includes details about the tests themselves, the results, normal ranges, timestamps, and contextual information such as admission and encounter details.

<!-- # Important Considerations

To be added. -->
<!-- 
* The data is sourced from the admission, discharge and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->

# Table Columns

Name | Postgres Data Type
---- | -----------------
mother\_person\_id | INT8
mother\_encntr\_id | VARCHAR
result\_date | TIMESTAMP(0)
ce\_event\_disp | VARCHAR
ce\_catalog\_disp | INT8
result\_val | VARCHAR
unit | VARCHAR
normal\_low | VARCHAR
normal\_high | VARCHAR
ce\_normalcy\_disp | VARCHAR
e\_med\_service\_disp | VARCHAR

# Detailed Description

### `mother_person_id`, `mother_encntr_id`
Each row in the "mother_labs" table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `result_date`
The timestamp indicating when the test result was obtained.
<br></br>

### `ce_event_disp`, `ce_catalog_disp`
These columns provide contextual information about the mother’s lab reports. `ce_event_disp` describes the clinical event related to the laboratory test, and `ce_catalog_disp` states the catalog identifier for the clinical event.
<br></br>

### `result_val`
`result_val` indicates the actual result value of the laboratory test.
<br></br>

### `unit`
The unit of measurement used for the result values.
<br></br>

### `normal_low`, `normal_high`
The `normal_low` and `normal_high` columns define the expected normal range for the event specified.
<br></br>

### `ce_normalcy_disp`, 
`ce_normalcy_disp` indicates the normalcy status of the mother's lab reports. 
<br></br>

### `e_med_service_disp`
`e_med_service_disp` states the medical service or department responsible for the test.
<br></br>