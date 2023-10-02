<h1><b>CHILD PROCEDURES</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "Child_Procedures" table records various medical procedures performed on pediatric patients during their hospital encounters.

**Number of rows:** 138,031

**Important considerations:**
- 
- 

# Table columns

Name | Postgres data type
---- | ----
id | INT8
child\_person\_id | INT8
child\_encntr\_id | INT8
mother\_person\_id | INT8
short\_string | VARCHAR
source\_string | VARCHAR
source\_identifier | VARCHAR
n\_source\_vocabulary\_disp | VARCHAR
proc\_date | VARCHAR
en\_loc\_facility\_disp | VARCHAR
en\_loc\_nurse\_unit\_disp | VARCHAR
reg\_dt\_tm | VARCHAR
disch\_dt\_tm | VARCHAR

# Detailed description

The "Child_Procedures" table is a repository containing details of medical procedures conducted on children during their hospital stays. This table captures essential information about each procedure, providing insights into its nature, source, and contextual details.

This detailed record of procedures for children is a valuable resource for healthcare professionals and researchers. It allows for the analysis of medical interventions, their sources, and the healthcare settings in which they occur, contributing to a better understanding of care within hospital environments for this demographic.

## `id`, `child_person_id`, `child_encntr_id`, `mother_person_id`
Each row in this table has a unique ID (`id`) representing the primary key. `child_person_id` identifies individual children, while `child_encntr_id` can vary, indicating multiple admissions for a single child. `mother_person_id` identifies the mother associated with the child's encounter.
<br></br>

## `short_string`
This column provides brief descriptions of the medical procedures performed, such as "Extraction, coronal remnants - deciduous tooth."
<br></br>

## `source_string`
Describes the source or origin of the medical procedures, including details like "EMERGENCY DEPT VISIT," "Circumcision," and more.
<br></br>

## `source_identifier`
Contains identifiers for the procedures, which may include codes like CPT4, ICD-10-PCS, SNOMED CT, HCPCS, and others.
<br></br>

## `n_source_vocabulary_disp`
Indicates the vocabulary or classification system used for procedure coding, including CPT4, ICD-10-PCS, SNOMED CT, HCPCS, and SNOMED International.
<br></br>

## `proc_date`
Stores the date on which the medical procedures were performed.
<br></br>

## `en_loc_facility_disp`
Describes the facility where the procedures took place, providing insights into the clinical setting.
<br></br>

## `en_loc_nurse_unit_disp`
Indicates the nurse unit within the facility where the procedures were performed. It includes locations such as "ED Pediatric," "NICU," "Newborn Nursery," and others.
<br></br>

## `reg_dt_tm`, `disch_dt_tm`
Timestamp columns representing the registration and discharge timestamps for each procedure event.
