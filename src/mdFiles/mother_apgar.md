+++
date = "2015-09-01T19:34:46-04:00"
title = "Mother Apgar Score Table"
linktitle = "MOTHER_APAGR_SCORE"
weight = 10
toc = "true"
+++

**Table Source:** Hospital Database.

**Table Purpose:** Defines Apgar scores for mothers in an obstetrics and gynecology (OBGYN) context.

**Number of Rows:** 126156

**Links to:**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to record Apgar scores for mothers. Apgar scores are a standardized assessment tool used to evaluate the physical condition of newborns immediately after birth. These scores assess specific criteria such as heart rate, respiratory effort, muscle tone, reflex irritability, and color to determine the overall well-being of the newborn. The table also includes details about normalcy, measurement methods, and timing of assessments.

# Important Considerations
<!-- 
* The data is sourced from the admission, discharge, and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->

# Table Columns

Name | Postgres Data Type
---- | -----------------
mother\_person\_id | INT8
mother\_encntr\_id | INT8
c\_event\_disp | VARCHAR
c\_contributor\_system\_disp | VARCHAR
contributor\_system\_cd | INT8
normal\_low | VARCHAR
normal\_high | VARCHAR
c\_normalcy\_method\_disp | VARCHAR
c\_normalcy\_disp | VARCHAR
result\_val | VARCHAR
c\_result\_units\_disp | VARCHAR
c\_result\_status\_disp | VARCHAR
valid\_from\_dt\_tm | TIMESTAMP
valid\_until\_dt\_tm | TIMESTAMP
clinical\_event\_id | INT8
c\_catalog\_disp | VARCHAR

# Detailed Description

## `mother_person_id`, `mother_encntr_id`
Each row in the "mother_apgar" table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.

## `c_event_disp`, `c_contributor_system_disp`, `contributor_system_cd`
These columns provide contextual information about the mother’s Apgar score assessment. `c_event_disp` describes the event, `c_contributor_system_disp` specifies the contributor system, and `contributor_system_cd` describes a code representing the contributor system.

## `normal_low`, `normal_high`
The `normal_low` and `normal_high` columns define the expected normal range for the event specified.

## `c_normalcy_method_disp`, `c_normalcy_disp`
`c_normalcy_method_disp` describes the method used to determine normalcy, while `c_normalcy_disp` indicates the normalcy status of the mother's delivery.

## `result_val`, `c_result_units_disp`, `c_result_status_disp`
The `result_val` column contains the actual event measurement, `c_result_units_disp` specifies the units of measurement, and `c_result_status_disp` states the result states, for example, normal, abnormal.

## `valid_from_dt_tm`, `valid_until_dt_tm`
`valid_from_dt_tm` and `valid_until_dt_tm` specify the start and end datetime for the validity period of the data.

## `clinical_event_id`
Each row is assigned a unique `clinical_event_id`, which serves as a unique identifier for clinical events associated with the Apgar score assessment.

## `c_catalog_disp`
Description of the catalog associated with the Apgar score assessment.

