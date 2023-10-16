<h1><b>MOTHER LABS</b></h1>

**Table Source:** Hospital Database.

**Table Purpose:** The "mother_labs" table stores laboratory-related data for mothers in an obstetrics and gynecology (OBGYN) context, including test results and associated information.

**Number of Rows:** 474503

**Links to**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to capture a wide range of information related to laboratory tests conducted on expectant mothers. It includes details about the tests themselves, the results, normal ranges, timestamps, and contextual information such as admission and encounter details.

# Important Considerations

To be added.
<!-- 
* The data is sourced from the admission, discharge and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->

# Table Columns

Name | Postgres Data Type
---- | -----------------
unit | VARCHAR
result\_date | TIMESTAMP(0)
result\_val | VARCHAR
event\_tag | VARCHAR
ce\_event\_disp | VARCHAR
ce\_catalog\_disp | INT8
mother\_person\_id | INT8
mother\_encntr\_id | VARCHAR
critical\_low | VARCHAR
critical\_high | VARCHAR
normal\_low | VARCHAR
normal\_high | VARCHAR
ce\_normalcy\_method\_disp | VARCHAR
ce\_normalcy\_disp | VARCHAR
ce\_result\_status\_disp | VARCHAR
series\_ref\_nbr | VARCHAR
e\_loc\_facility\_disp | VARCHAR
e\_loc\_nurse\_unit\_disp | VARCHAR
e\_med\_service\_disp | VARCHAR
inpatient\_admit\_dt\_tm | TIMESTAMP(0)
reg\_dt\_tm | TIMESTAMP(0)
disch\_dt\_tm | TIMESTAMP(0)
reason\_for\_visit | VARCHAR
e\_admit\_mode\_disp | VARCHAR
e\_admit\_type\_disp | VARCHAR
e\_encntr\_type\_disp | VARCHAR
e\_encntr\_type\_class\_disp | VARCHAR
e\_encntr\_status\_disp | VARCHAR
e\_encntr\_class\_disp | VARCHAR
e\_accommodation\_reason\_disp | VARCHAR
e\_accommodation\_disp | VARCHAR
e\_admit\_src\_disp | VARCHAR
clinical\_event\_id | INT8


# Detailed Description

### `unit`
The unit of measurement used for the result values.
<br></br>

### `result_date`
The timestamp indicating when the test result was obtained.
<br></br>

### `result_val`, `event_tag`
`result_val` indicates the actual result value of the laboratory test. `event_tag` states a tag or label associated with the clinical event.
<br></br>

### `ce_event_disp`, `ce_catalog_disp`
These columns provide contextual information about the mother’s lab reports. `ce_event_disp` describes the clinical event related to the laboratory test, and `ce_catalog_disp` states the catalog identifier for the clinical event.
<br></br>

### `mother_person_id`, `mother_encntr_id`
Each row in the "mother_labs" table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `critical_low`, `critical_high`, `normal_low`, `normal_high`
The `critical_low` and `critical_high` define the critical range of the event result. The `normal_low` and `normal_high` columns define the expected normal range for the event specified.
<br></br>

### `ce_normalcy_method_disp`, `ce_normalcy_disp`, `ce_result_status_disp`
`ce_normalcy_method_disp` describes the method used to determine normalcy, while `ce_normalcy_disp` indicates the normalcy status of the mother's lab reports. `ce_result_status_disp` states the results of the clinical event.
<br></br>

### `series_ref_nbr`
Reference number for the series.
<br></br>

### `e_loc_facility_disp`, `e_loc_nurse_unit_disp`, `e_med_service_disp`
The `e_loc_facility_disp` describes the name of the facility where the test was conducted. `e_loc_nurse_unit_disp` specifies the nurse unit or department within the facility, and `e_med_service_disp` states the medical service or department responsible for the test.
<br></br>

### `inpatient_admit_dt_tm`, `reg_dt_tm`, `disch_dt_tm`
`inpatient_admit_dt_tm` indicates the date and time of the inpatient admission, `reg_dt_tm` is the date and time of registration, and `disch_dt_tm` states the date and time of discharge.
<br></br>

### `reason_for_visit`
The reason for the mother's visit to the healthcare facility.
<br></br>

### `e_admit_mode_disp`, `e_admit_type_disp`, `e_encntr_type_disp`, `e_encntr_type_class_disp`, `e_encntr_status_disp`, `e_encntr_class_disp`, `e_accommodation_reason_disp`, `e_accommodation_disp`, `e_admit_src_disp`
`e_admit_mode_disp` is the mode of admission to the healthcare facility, `e_admit_type_disp` describes the type of admission, `e_encntr_type_disp` is the type of encounter, `e_encntr_type_class_disp` states the class of encounter, `e_encntr_status_disp` is the status of the encounter, `e_encntr_class_disp` specifies the class of the encounter, `e_accommodation_reason_disp` describes the reason for accommodation, `e_accommodation_disp` is the type of accommodation, and `e_admit_src_disp` states the source of admission.
<br></br>

### `clinical_event_id`
Each row is assigned a unique `clinical_event_id`, which serves as a unique identifier for clinical events related to lab measurements.