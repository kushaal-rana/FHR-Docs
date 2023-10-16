<h1><b>CHILD LABS</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "Child_Labs" table has information related to laboratory tests and results for pediatric patients during their hospital encounters.

**Number of rows:** 138,031

**Brief summary:**
The "Child_Labs" table serves as a comprehensive repository of laboratory test data for pediatric patients during their hospital encounters. Each row in the table corresponds to a specific laboratory test event, with unique IDs. It is important for tracking and analyzing laboratory test results, contributing to the monitoring and assessment of pediatric patients' health during their hospital admissions.

**Important considerations:** None
- To be added
- 

# Table columns

Name | Postgres data type
---- | ----
id | INT8
child\_person\_id | INT8
child\_encntr\_id | INT8
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
valid\_from\_dt\_tm | TIMESTAMP(0)
valid\_until\_dt\_tm | TIMESTAMP(0)
clinical\_event\_id | INT8
c\_catalog\_disp | VARCHAR
reg\_dt\_tm | TIMESTAMP(0)
disch\_dt\_tm | TIMESTAMP(0)

# Detailed description

### `id`, `child_person_id`, `child_encntr_id`
Each row in the "Child_Labs" table contains a unique ID (`id`), which ranges from 1 to 138,031. The `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `c_event_disp`
This column contains textual descriptions of laboratory test events, such as test names.
<br></br>

### `c_contributor_system_disp`
"c_contributor_system_disp" provides information about the contributor or source system of the laboratory data.
<br></br>

### `contributor_system_cd`
An integer column representing system codes corresponding to contributor systems.
<br></br>

### `normal_low`, `normal_high`
These columns specify the reference range for test results, indicating the lower and upper bounds of normal values.
<br></br>

### `c_normalcy_method_disp`
Describes the method used to determine normalcy, providing insights into how reference ranges are established.
<br></br>

### `c_normalcy_disp`
Indicates the normalcy status of test results, suggesting different result interpretations.
<br></br>

### `result_val`
Contains the actual numeric or text-based test result values.
<br></br>

### `c_result_units_disp`
Specifies the units of measurement for test results.
<br></br>

### `c_result_status_disp`
Describes the status of the test results, indicating the result's completeness or accuracy.
<br></br>

### `valid_from_dt_tm`, `valid_until_dt_tm`
Timestamp columns that store the validity period for each test result.
<br></br>

### `clinical_event_id`, `c_catalog_disp`
"clinical_event_id" represents unique identifiers for clinical events associated with each test. "c_catalog_disp" contains descriptions of the laboratory test catalogs.
<br></br>

### `reg_dt_tm`, `disch_dt_tm`
Timestamp columns indicating the registration and discharge timestamps for each laboratory test event.
