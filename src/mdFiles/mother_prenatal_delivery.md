<h1><b>Mother Prenatal Delivery</b></h1>

**Table source:** Hospital Database.

**Table purpose:** Defines prenatal and delivery information for mothers who have given birth at the hospital.

**Number of rows:** 1048575

**Links to:**

<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief summary

The "mother_peternal_delivery" table contains details about prenatal care, delivery events, and related data for pregnant mothers. It likely includes information about prenatal tests, delivery outcomes, and various metrics associated with the birthing process.

<!-- # Important considerations -->
<!-- 
* The data is sourced from the admission, discharge and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->




# Table columns

Name | Postgres data type
---- | ----
mother\_person\_id | int8
mother\_encntr\_id | int8
valid\_from\_dt\_tm | timestamp(0)
c\_event\_disp | varchar
result\_val | varchar
c\_result\_units\_disp | varchar
normal\_low | varchar
normal\_high | varchar
c\_normalcy\_disp | varchar
c\_result\_status\_disp | varchar

# Detailed Description

### `mother_person_id`, `mother_encntr_id`
Each row in the `mother_peternal_delivery` table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `valid_from_dt_tm`
`valid_from_dt_tm` specify the validity period of the data.
<br></br>

### `c_event_disp`
The column provides contextual information about the mother’s prenatal care or delivery. `c_event_disp` describes the event. 
<br></br>

### `result_val`, `c_result_units_disp`, `c_result_status_disp`
The `result_val` column contains the actual event measurement. The `c_result_units_disp` specifies the units of measurement. `c_result_status_disp` states the result states, for example, normal, abnormal.
<br></br>

### `normal_low`, `normal_high`
The `normal_low` and `normal_high` columns define the expected normal range for the event specified.
<br></br>

### `c_normalcy_disp`
`c_normalcy_disp` indicates the normalcy status of the mother's delivery.
<br></br>



