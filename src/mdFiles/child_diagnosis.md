+++
date = "2023-09-24T00:00:00Z"
title = "Child Diagnosis Table"
linktitle = "CHILD DIAGNOSIS"
weight = 10
toc = "true"
+++

**Table source:** Hospital Database.

**Table purpose:** Records pediatric patient diagnoses during hospital admissions.

**Number of rows:** 138,031

**Brief summary:**
This table contains data about diagnoses for pediatric patients, including timestamps, nurse units, medical services, present-on-admission status, severity, and severity class.

**Important considerations:**
- 
- 

# Table columns

Name | Postgres data type
---- | ----
id | INT8
child\_person\_id | INT8
child\_encntr\_id | INT8
short\_string | VARCHAR
source\_identifier | VARCHAR
d\_diag\_class\_disp | VARCHAR
diag\_priority | INT8
d\_diag\_type\_disp | VARCHAR
source\_string | VARCHAR
reg\_dt\_tm | VARCHAR
disch\_dt\_tm | VARCHAR
diag\_dt\_tm | VARCHAR
en\_loc\_nurse\_unit\_disp | VARCHAR
en\_med\_service\_disp | VARCHAR
d\_present\_on\_admit\_disp | VARCHAR
d\_severity\_disp | VARCHAR
d\_severity\_class\_disp | VARCHAR

# Detailed description

## `id`, `child_person_id`, `child_encntr_id`
Each row in the "Child_Diagnosis" table contains a unique ID (`id`), which ranges from 1 to 138,031. The `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.

## `short_string`
The "short_string" column contains textual data, often describing symptoms or conditions observed in pediatric patients. Common elements include 'Fever,' 'Cough,' 'Irritability,' and 'Rash,' among others.

## `source_identifier`
"source_identifier" is a column that holds identifiers linked to the source or origin of the diagnostic data. It can help trace the source system or context from which the diagnosis information was obtained.

## `diag_priority`
"diag_priority" is an integer column representing the priority or significance of diagnoses. Values such as 0, 1, 2, and others indicate the priority level assigned to each diagnosis, aiding in understanding its importance.

## `d_diag_type_disp`
The "d_diag_type_disp" column describes the type of diagnosis, with values such as 'Final,' 'Discharge,' 'Admitting,' 'Reason For Visit,' and more. It offers information on the nature of each diagnosis event.

## `source_string`
"source_string" contains textual data that can provide additional context or details regarding the source of diagnosis information. It may assist in understanding where the diagnosis data originates.

## `reg_dt_tm`, `disch_dt_tm`, `diag_dt_tm`
These timestamp columns, "reg_dt_tm," "disch_dt_tm," and "diag_dt_tm," store date and time information related to registration, discharge, and diagnosis events, respectively. They offer a chronological perspective on each diagnosis.

## `en_loc_nurse_unit_disp`, `en_med_service_disp`
"en_loc_nurse_unit_disp" and "en_med_service_disp" columns contain textual data, describing the nurse unit and medical service associated with the diagnosis events. They provide context for the care settings.

## `d_present_on_admit_disp`
This column, "d_present_on_admit_disp," indicates whether the diagnosis was present on admission. Values like 'E' (present on admission), 'Y,' 'N,' and 'W' (working) offer insights into the diagnosis status at admission.

## `d_severity_disp`, `d_severity_class_disp`
"d_severity_disp" and "d_severity_class_disp" describe the severity of diagnoses. "d_severity_disp" may contain severity level information, while "d_severity_class_disp" categorizes severity into classes, providing additional information about the diagnoses' seriousness.
