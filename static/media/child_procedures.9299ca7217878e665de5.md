<h1><b>CHILD PROCEDURES</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "Child_Procedures" table records various medical procedures performed on pediatric patients during their hospital encounters.

**Number of rows:** 20265

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
child\_encntr\_id | INT8
proc\_date | VARCHAR
source\_identifier | VARCHAR
n\_source\_vocabulary\_disp | VARCHAR
source\_string | VARCHAR

# Detailed description

The "Child_Procedures" table is a repository containing details of medical procedures conducted on children during their hospital stays. This table captures essential information about each procedure, providing insights into its nature, source, and contextual details.

This detailed record of procedures for children is a valuable resource for healthcare professionals and researchers. It allows for the analysis of medical interventions, their sources, and the healthcare settings in which they occur, contributing to a better understanding of care within hospital environments for this demographic.

### `child_person_id`, `child_encntr_id`
Each row in this table has a unique IDs, `child_person_id` identifies individual children, while `child_encntr_id` can vary, indicating multiple admissions for a single child.
<br></br>

### `proc_date`
Stores the date on which the medical procedures were performed.
<br></br>

### `source_identifier`
Contains identifiers for the procedures, which may include codes like CPT4, ICD-10-PCS, SNOMED CT, HCPCS, and others.
<br></br>

### `n_source_vocabulary_disp`
Indicates the vocabulary or classification system used for procedure coding, including CPT4, ICD-10-PCS, SNOMED CT, HCPCS, and SNOMED International.
<br></br>

### `source_string`
Describes the source or origin of the medical procedures, including details like "EMERGENCY DEPT VISIT," "Circumcision," and more.
<br></br>