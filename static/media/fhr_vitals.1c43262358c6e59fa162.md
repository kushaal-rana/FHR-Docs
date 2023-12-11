<h1><b>FHR VITALS</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "FHR_Vitals" table contains vital signs data for mothers during their encounters, including blood pressure, body surface area (BSA), heart rate, pain intensity, oxygen levels, weight, height, and more, providing critical information about maternal health status during different encounters.

**Number of rows:** 745982

**Brief summary:**
The "FHR_Vitals" table is designed to capture and store various vital signs data for mothers during their encounters, enabling monitoring and assessment of maternal health.

<!-- **Important considerations:**
None
- 
-  -->

# Table columns

Name | Postgres data type
---- | ----
mother\_person\_id | INT4
mother\_encounter\_id | INT4
valid\_from\_date\_time | TIMESTAMP
vitals\_event | VARCHAR(255)
result\_value | VARCHAR(255)
result\_units | VARCHAR(255)
normal\_low | NUMERIC
normal\_high | NUMERIC
normalcy | VARCHAR(255)
result\_status | VARCHAR(255)

# Detailed description

The "FHR_Vitals" table is a comprehensive repository of vital signs data for mothers during their encounters. It includes a variety of vital signs and measurements, such as:

### `mother_person_id`, `mother_encounter_id`
Each entry in this table is uniquely identified by an ID (id) and is associated with specific maternal individuals. "mother_person_id" represents the unique identifier for individual mothers, while "mother_encounter_id" indicates multiple admissions or encounters for the same mother.
<br></br>

### `valid_from_date_time`
These columns record the validity timestamps associated with the vital sign data, indicating when the data was recorded when it remained relevant.

### `vitals_event`
This column contains descriptions of various vital sign events, indicating what type of measurement or observation was recorded. Examples of vital sign events may include heart rate, blood pressure, oxygen saturation, etc.
<br></br>

### `result_value`
This column stores the actual numerical value or measurement recorded for the vital sign event. For example, it may contain a heart rate value in beats per minute (bpm) or a blood pressure reading.
<br></br>

### `result_units`
The "result_units" column specifies the units of measurement for the recorded values. It clarifies the scale or magnitude of the vital sign measurements, such as bpm (beats per minute), mmHg (millimeters of mercury), kg (kilograms), etc.
<br></br>

### `normal_low`, `normal_high`
These columns represent the normal low and high values or reference ranges for the corresponding vital sign event. They help establish whether the recorded measurement falls within the expected range.
<br></br>

### `normalcy`
The "normalcy" column provides information about the state of the vital sign measurement in relation to the normal range. It may indicate whether the measurement is within normal limits or if it deviates from the expected range.
<br></br>

### `result_status`
This column indicates the status or condition of the recorded vital sign measurement. It may denote whether the measurement is considered final, preliminary, in progress, or in error.
<br></br>


