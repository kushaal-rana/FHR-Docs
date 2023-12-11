<h1><b>MOTHER DIAGNOSIS</h1></b>

**Table Source:** Hospital Database.

**Table Purpose:** The "mother_diagnosis" table stores information related to diagnoses made for mothers in an obstetrics and gynecology (OBGYN) context, including details about the diagnosis, severity, and timing.

**Number of Rows:** 139912

**Links to:**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to capture diagnostic information for mothers, including the type of diagnosis, its severity, timing, and other relevant details. It is an essential part of tracking and managing the health of expectant mothers during prenatal and postnatal care.

<!-- # Important Considerations

To be added. -->
<!-- 
* The data is sourced from the admission, discharge, and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->

# Table Columns

Name | Postgres Data Type
---- | -----------------
mother\_person\_id | INT8
mother\_encntr\_id | INT8
reg\_dt\_tm | TIMESTAMP(0)
source\_identifier | VARCHAR
source\_string | VARCHAR
diag\_priority | INT8
d\_diag\_type\_disp | VARCHAR
en\_med\_service\_disp | VARCHAR
d\_present\_on\_admit\_disp | VARCHAR

# Detailed Description

### `mother_person_id`, `mother_encntr_id`
Each row in the `mother_diagnosis` table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.

### `reg_dt_tm`
These timestamp column, `reg_dt_tm` store date and time information related to registration. It offers a chronological perspective on each diagnosis.
<br></br>

### `source_identifier`
`source_identifier` is a column that holds identifiers linked to the source or origin of the diagnostic data. It can help trace the source system or context from which the diagnosis information was obtained.
<br></br>

### `source_string`
`source_string` contains textual data that can provide additional context or details regarding the source of diagnosis information. It may assist in understanding where the diagnosis data originates.
<br></br>

### `diag_priority`
`diag_priority` is an integer column representing the priority or significance of diagnoses. Values such as 0, 1, 2, and others indicate the priority level assigned to each diagnosis, aiding in understanding its importance.
<br></br>

### `d_diag_type_disp`
The `d_diag_type_disp` column describes the type of diagnosis, with values such as 'Final,' 'Discharge,' 'Admitting,' 'Reason For Visit,' and more. It offers information on the nature of each diagnosis event.
<br></br>


### `en_med_service_disp`
`en_med_service_disp` column contain textual data, describing the medical service associated with the diagnosis events. It provides context for the care settings.
<br></br>

### `d_present_on_admit_disp`
This column, `d_present_on_admit_disp` indicates whether the diagnosis was present on admission. Values like 'E' (present on admission), 'Y,' 'N,' and 'W' (working) offer insights into the diagnosis status at admission.
<br></br>






