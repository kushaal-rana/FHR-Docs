<h1><b>CHILD DIAGNOSIS</b></h1>

**Table source:** Hospital Database.

**Table purpose:** Records pediatric patient diagnoses during hospital admissions.

**Number of rows:** 489323

**Brief summary:**
This table contains data about diagnoses for pediatric patients, including timestamps, nurse units, medical services, present-on-admission status, severity, and severity class.

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
child\_encntr\_id | INT8
reg\_dt\_tm | VARCHAR
source\_identifier | VARCHAR
source\_string | VARCHAR
diag\_priority | INT8
d\_diag\_type\_disp | VARCHAR

# Detailed description

### `child_person_id`, `child_encntr_id`
Each row in the "Child_Diagnosis" table contains a unique IDs, `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `reg_dt_tm`
This timestamp "reg_dt_tm" stores date and time information related to registration. This offer a chronological perspective on each diagnosis.
<br></br>

### `source_identifier`
"source_identifier" is a column that holds identifiers linked to the source or origin of the diagnostic data. It can help trace the source system or context from which the diagnosis information was obtained.
<br></br>

### `source_string`
"source_string" contains textual data that can provide additional context or details regarding the source of diagnosis information. It may assist in understanding where the diagnosis data originates.
<br></br>

### `diag_priority`
"diag_priority" is an integer column representing the priority or significance of diagnoses. Values such as 0, 1, 2, and others indicate the priority level assigned to each diagnosis, aiding in understanding its importance.
<br></br>

### `d_diag_type_disp`
The "d_diag_type_disp" column describes the type of diagnosis, with values such as 'Final,' 'Discharge,' 'Admitting,' 'Reason For Visit,' and more. It offers information on the nature of each diagnosis event.
<br></br>





