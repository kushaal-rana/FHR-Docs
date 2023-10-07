<h1><b>CHILD BIRTH WEIGHT</b></h1>

**Table source:** Hospital Database.

**Table purpose:** Records birth weight data for newborn children in the hospital.

**Number of rows:** 138,031

**Brief summary:**
This table contains information about the birth weight of newborn children in the hospital. It includes details such as the event description, contributor system information, event tags, and clinical event identifiers. Additionally, it records the normal range for birth weights, event timestamps, and relevant data about the babies.

**Important considerations:**
- 
- 

# Table columns

Name | Postgres data type
---- | ----
id | INT8
child\_person\_id | INT8
child\_encntr\_id | INT8
c\_event\_disp | VARCHAR
c\_contributor\_system\_disp | VARCHAR
event\_tag | VARCHAR
result\_val | VARCHAR
c\_result\_units\_disp | VARCHAR
contributor\_system\_cd | INT8
normal\_low | VARCHAR
normal\_high | VARCHAR
c\_normalcy\_method\_disp | VARCHAR
c\_normalcy\_disp | VARCHAR
event\_start\_dt\_tm | VARCHAR
valid\_from\_dt\_tm | TIMESTAMP(0)
valid\_until\_dt\_tm | TIMESTAMP(0)
clinical\_event\_id | INT8
baby | VARCHAR

# Detailed description

## `id`, `child_person_id`, `child_encntr_id`
Each row in the "Child_BirthWeight" table contains a unique ID (`id`), which ranges from 1 to 138,031. The `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

## `c_event_disp`, `c_contributor_system_disp`, `event_tag`
These columns provide contextual information about the birth weight measurement event. `c_event_disp` describes the event, `c_contributor_system_disp` specifies the contributor system, and `event_tag` offers additional event details.
<br></br>

## `result_val`, `c_result_units_disp`
The `result_val` column contains the actual birth weight measurement, and `c_result_units_disp` specifies the units of measurement.
<br></br>

## `contributor_system_cd`
This column holds a code that represents the contributor system.
<br></br>

## `normal_low`, `normal_high`
The `normal_low` and `normal_high` columns define the expected normal range for birth weights.
<br></br>

## `c_normalcy_method_disp`, `c_normalcy_disp`
`c_normalcy_method_disp` describes the method used to determine normalcy, while `c_normalcy_disp` indicates the normalcy status of the birth weight measurement.
<br></br>

## `event_start_dt_tm`, `valid_from_dt_tm`, `valid_until_dt_tm`
`event_start_dt_tm` records the timestamp when the birth weight measurement event occurred. `valid_from_dt_tm` and `valid_until_dt_tm` specify the validity period of the data.
<br></br>

## `clinical_event_id`
Each row is assigned a unique `clinical_event_id`, which serves as a unique identifier for clinical events related to birth weight measurements.
<br></br>

## `baby`
The "baby" column contains additional information about the newborn associated with the birth weight measurement event.