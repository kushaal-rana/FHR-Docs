<h1><b>MOTHER APGAR SCORE</h1></b>

**Table Source:** Hospital Database.

**Table Purpose:** Defines Apgar scores for mothers in an obstetrics and gynecology (OBGYN) context.

**Number of Rows:** 10297

**Links to:**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to record Apgar scores for mothers. Apgar scores are a standardized assessment tool used to evaluate the physical condition of newborns immediately after birth. These scores assess specific criteria such as heart rate, respiratory effort, muscle tone, reflex irritability, and color to determine the overall well-being of the newborn. The table also includes details about normalcy, measurement methods, and timing of assessments.

# Table Columns

Name | Postgres Data Type
---- | -----------------
mother\_person\_id | INT8
mother\_encntr\_id | INT8
valid\_from\_dt\_tm | TIMESTAMP
label\_name | VARCHAR              
Apgar Score 1 Minute: | VARCHAR              
Color Apgar 1 Minute: | VARCHAR              
Heart Rate Apgar 1 Minute: | VARCHAR              
Reflex Irritability Apgar 1 Minute: | VARCHAR              
Muscle Tone Apgar 1 Minute: | VARCHAR              
Respirations Apgar 1 Minute: | VARCHAR              
Apgar Score 5 Minute: | VARCHAR              
Color Apgar 5 Minute: | VARCHAR              
Heart Rate Apgar 5 Minute: | VARCHAR              
Reflex Irritability Apgar 5 Minute: | VARCHAR              
Muscle Tone Apgar 5 Minute: | VARCHAR              
Respirations Apgar 5 Minute: | VARCHAR              
Apgar Score 10 Minute: | VARCHAR              
Color Apgar 10 Minute: | VARCHAR              
Heart Rate Apgar 10 Minute: | VARCHAR              
Reflex Irritability Apgar 10 Minute:| VARCHAR              
Muscle Tone Apgar 10 Minute: | VARCHAR              
Respirations Apgar 10 Minute: | VARCHAR              
Apgar Score 15 Minute: | VARCHAR              
Color Apgar 15 Minute: | VARCHAR              
Heart Rate Apgar 15 Minute: | VARCHAR              
Reflex Irritability Apgar 15 Minute:| VARCHAR              
Muscle Tone Apgar 15 Minute: | VARCHAR              
Respirations Apgar 15 Minute: | VARCHAR              
Apgar Score 20 Minute: | VARCHAR              
Color Apgar 20 Minute: | VARCHAR              
Heart Rate Apgar 20 Minute: | VARCHAR              
Reflex Irritability Apgar 20 Minute:| VARCHAR              
Muscle Tone Apgar 20 Minute: | VARCHAR              
Respirations Apgar 20 Minute: | VARCHAR
c\_result\_status\_disp | VARCHAR

# Detailed Description

### `mother_person_id`, `mother_encntr_id`
Each row in the "mother_apgar" table contains a `mother_person_id` and `mother_encounter_id`. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `valid_from_dt_tm`
`valid_from_dt_tm` specify the start and end datetime for the validity period of the data.
<br></br>

### `label_name`
`label_name` specifies where the diagnosis of which baby
<br></br>

### `Apgar Score 1 Minute:`, `Apgar Score 5 Minute:`, `Apgar Score 10 Minute:`, `Apgar Score 15 Minute:`, `Apgar Score 20 Minute:`
A quick way for health professionals to evaluate the health of newborns at different timestamps after birth and in response to resuscitation.
<br></br>

### `Color Apgar 1 Minute:`, `Color Apgar 5 Minute:`, `Color Apgar 10 Minute:`, `Color Apgar 15 Minute:`, `Color Apgar 20 Minute:`
The color component of the Apgar Score assesses a newborn's skin color immediately after birth in different time intervals
<br></br>

### `Heart Rate Apgar 1 Minute:`, `Heart Rate Apgar 5 Minute:`, `Heart Rate Apgar 10 Minute:`, `Heart Rate Apgar 15 Minute:`, `Heart Rate Apgar 20 Minute:`
The heart rate component of the Apgar Score assesses a newborn's pulse shortly after birth in different time intervals
<br></br>

### `Reflex Irritability Apgar 1 Minute:`, `Reflex Irritability Apgar 5 Minute:`, `Reflex Irritability Apgar 10 Minute:`, `Reflex Irritability Apgar 15 Minute:`, `Reflex Irritability Apgar 20 Minute:`
Reflex Irritability in the Apgar Score assesses how quickly a newborn responds to stimuli after birth in different time intervals
<br></br>

### `Muscle Tone Apgar 1 Minute:`, `Muscle Tone Apgar 5 Minute:`, `Muscle Tone Apgar 10 Minute:`, `Muscle Tone Apgar 15 Minute:`, `Muscle Tone Apgar 20 Minute:`
Muscle Tone in the Apgar Score assesses a newborn's muscle strength and flexibility after birth in different time intervals
<br></br>

### `Respirations Apgar 1 Minute:`, `Respirations Apgar 5 Minute:`, `Respirations Apgar 10 Minute:`, `Respirations Apgar 15 Minute:`, `Respirations Apgar 20 Minute:`
Respirations component of the Apgar Score evaluates a newborn's breathing effort after birth in different time intervals
<br></br>

### `c_result_status_disp`
`c_result_status_disp` states the result states, for example, normal, abnormal.
<br></br>




