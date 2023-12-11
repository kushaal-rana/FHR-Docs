<h1><b>CHILD LABS</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "Child_Labs" table has information related to laboratory tests and results for pediatric patients during their hospital encounters.

**Number of rows:** 1048574

**Brief summary:**
The "Child_Labs" table serves as a comprehensive repository of laboratory test data for pediatric patients during their hospital encounters. Each row in the table corresponds to a specific laboratory test event, with unique IDs. It is important for tracking and analyzing laboratory test results, contributing to the monitoring and assessment of pediatric patients' health during their hospital admissions.

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
child\_encntr\_id | INT8
valid\_from\_dt\_tm | TIMESTAMP(0)
c\_event\_disp | VARCHAR
c\_catalog\_disp | VARCHAR
result\_val | VARCHAR
c\_result\_units\_disp | VARCHAR
c\_contributor\_system\_disp | VARCHAR
normal\_low | VARCHAR
normal\_high | VARCHAR
c\_normalcy\_method\_disp | VARCHAR
c\_normalcy\_disp | VARCHAR
c\_result\_status\_disp | VARCHAR
reg\_dt\_tm | TIMESTAMP(0)
disch\_dt\_tm | TIMESTAMP(0)

# Detailed description

### `child_person_id`, `child_encntr_id`
Each row in the "Child_Labs" table contains a unique IDs, `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `valid_from_dt_tm`
Timestamp column that store the validity period for each test result.
<br></br>

### `c_event_disp`,  `c_catalog_disp`
"c_event_disp" column contains textual descriptions of laboratory test events, such as test names. "c_catalog_disp" contains descriptions of the laboratory test catalogs.
<br></br>

### `result_val`
Contains the actual numeric or text-based test result values.
<br></br>

### `c_result_units_disp`
Specifies the units of measurement for test results.
<br></br>

### `c_contributor_system_disp`
"c_contributor_system_disp" provides information about the contributor or source system of the laboratory data.
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

### `c_result_status_disp`
Describes the status of the test results, indicating the result's completeness or accuracy.
<br></br>

### `reg_dt_tm`, `disch_dt_tm`
Timestamp columns indicating the registration and discharge timestamps for each laboratory test event.