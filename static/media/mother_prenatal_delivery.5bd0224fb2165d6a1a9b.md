<h1><b>Mother Prenatal Delivery</b></h1>

**Table source:** Hospital Database.

**Table purpose:** Defines prenatal and delivery information for mothers who have given birth at the hospital.

**Number of rows:** 4480364

**Links to:**

<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief summary

The "mother_peternal_delivery" table contains details about prenatal care, delivery events, and related data for pregnant mothers. It likely includes information about prenatal tests, delivery outcomes, and various metrics associated with the birthing process.

# Important considerations
<!-- 
* The data is sourced from the admission, discharge and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->




# Table columns

Name | Postgres data type
---- | ----
mother\_person\_id | int8
mother\_encntr\_id | int8
c\_event\_disp | varchar
c\_contributor\_system\_disp | varchar
contributor\_system\_cd | int8
normal\_low | varchar
normal\_high | varchar
c\_normalcy\_method\_disp | varchar
c\_normalcy\_disp | varchar
result\_val | varchar
result\_val\_formatted\_date | varchar
c\_result\_units\_disp | varchar
c\_result\_time\_units\_disp | varchar
c\_result\_status\_disp | varchar
valid\_from\_dt\_tm | timestamp(0)
valid\_until\_dt\_tm | timestamp(0)

# Detailed Description

## `mother_person_id`, `mother_encntr_id`
Each row in the `mother_peternal_delivery` table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

## `c_event_disp`, `c_contributor_system_disp`, `contributor_system_cd`
These columns provide contextual information about the mother’s prenatal care or delivery. `c_event_disp` describes the event, `c_contributor_system_disp` specifies the contributor system, and `contributor_system_cd` describes a code representing the contributor system.
<br></br>

## `normal_low`, `normal_high`
The `normal_low` and `normal_high` columns define the expected normal range for the event specified.
<br></br>

## `c_normalcy_method_disp`, `c_normalcy_disp`
`c_normalcy_method_disp` describes the method used to determine normalcy, while `c_normalcy_disp` indicates the normalcy status of the mother's delivery.
<br></br>

## `result_val`, `result_val_formatted_date`, `c_result_units_disp`, `c_result_time_units_disp`, `c_result_status_disp`
The `result_val` column contains the actual event measurement, and the `result_val_formatted_date` specifies the date associated with the result value. The `c_result_units_disp` specifies the units of measurement, and `c_result_time_units_disp` describes time units associated with the result. `c_result_status_disp` states the result states, for example, normal, abnormal.
<br></br>

## `valid_from_dt_tm`, `valid_until_dt_tm`
`valid_from_dt_tm` and `valid_until_dt_tm` specify the validity period of the data.

