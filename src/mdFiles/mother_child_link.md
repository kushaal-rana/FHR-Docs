<h1><b>MOTHER CHILD LINK</h1></b>

**Table Source:** Hospital Database.

**Table Purpose:** The "mother_child_link" table serves as a link or connection between mothers and their respective children.

**Number of Rows:** 11337

**Links to:**
<!-- * PATIENTS on `SUBJECT_ID` -->

# Brief Summary

This table is designed to establish a connection between mothers and their children, typically newborns, by recording the identifiers of both the mother and child, as well as important timestamps and encounter identifiers. It is essential for maintaining the relationship between mothers and their infants in the healthcare system.

# Important Considerations
<!-- 
* The data is sourced from the admission, discharge, and transfer database from the hospital (often referred to as 'ADT' data).
* Organ donor accounts are sometimes created for patients who died in the hospital. These are distinct hospital admissions with very short, sometimes negative lengths of stay. Furthermore, their `DEATHTIME` is frequently the same as the earlier patient admission's `DEATHTIME`.
* All text data, except for that in the `INSURANCE` column, is stored in upper case. -->

# Table Columns

Name | Postgres Data Type
---- | -----------------
mother\_person\_id | INT8
child\_person\_id | INT8
birth\_dt\_tm | TIMESTAMP
reg\_dt\_tm | TIMESTAMP
mother\_encntr\_id | INT8

# Detailed Description

### `child_person_id`, `mother_person_id`, `mother_encounter_id`
Each row in the "mother_child_link" table contains a `child_person_id`, `mother_person_id`, and `mother_encounter_id`. The `child_person_id` represents a unique identifier for each child. The `mother_person_id` represents a unique identifier for each mother, while `mother_encntr_id` can vary, indicating multiple admissions for a single mother at the hospital. This table can have duplicate `mother_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `birth_dt_tm`, `reg_dt_tm`
The `birth_dt_tm` states the date and time of the child's birth. This timestamp records when the birth event occurred, while `reg_dt_tm` refers to the date and time of registration or recording of the mother-child relationship. It indicates when the linkage was established.
