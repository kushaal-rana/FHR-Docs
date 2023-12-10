<h1><b>CHILD VITALS</h1></b>

**Table source:** Hospital Database.

**Table purpose:** The "Child_Vitals" table has contains vital sign measurements and related information for children.

**Number of rows:** 1048575

**Brief summary:**
This table contains information about the vital signs and measurements of pediatric patients during their hospital stays. It includes details such as the event description, contributor system information, event tags, and clinical event identifiers. Additionally, it records the normal range for each vital sign, event timestamps, and relevant data about the patients.

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
child\_encntr\_id | INT8
valid\_from\_dt\_tm | TIMESTAMP(0)
c\_event\_disp | VARCHAR
result\_val | VARCHAR
c\_result\_units\_disp | VARCHAR
normal\_low | VARCHAR
normal\_high | VARCHAR
c\_normalcy\_disp | VARCHAR
c\_result\_status\_disp | VARCHAR

# Detailed description

The "Child_Vitals" table serves as a comprehensive repository for documenting vital signs and measurements of pediatric patients during their hospital stays. It captures essential information about each vital sign reading, providing insights into the nature of the measurement, its source, and relevant details.

### `child_person_id`, `child_encntr_id`
Each row in the "Child_BirthWeight" table contains a unique IDs, `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `valid_from_dt_tm`
Timestamps representing the validity period of each vital sign reading. "valid_from_dt_tm" indicates when the measurement was recorded.

### `c_event_disp`
This column provides a description of the type of vital sign or measurement recorded. It includes vital signs such as "Respiratory Rate," "Temperature Axillary," "Pulse Oximetry," "Heart Rate Monitored," "Oxygen Therapy," and more.
<br></br>

### `result_val`
Contains the actual numeric value of the vital sign or measurement, such as heart rate in bpm (beats per minute), temperature in degrees Celsius, or other relevant units.
<br></br>

### `c_result_units_disp`
Specifies the units of measurement for each recorded vital sign, including "%," "bpm," "DegC" (degrees Celsius), "br/min" (breaths per minute), "mmHg" (millimeters of mercury), "cm" (centimeters), "kg" (kilograms), "m2" (square meters), and "kg/m2" (kilograms per square meter).
<br></br>

### `normal_low`, `normal_high`
These columns represent the normal or reference range for each vital sign or measurement. They provide the lower and upper boundaries within which values are considered normal. For example, for "Temperature Axillary," the normal range is between 35.2°C and 37.3°C.
<br></br>

### `c_normalcy_method_disp`
This column may describe the method or criteria used to determine normalcy or abnormality.
<br></br>

### `c_normalcy_disp`
Indicates whether the recorded vital sign or measurement falls within normal ("HI" for high, "LOW" for low) or exceeds the normal range (">HHI").
<br></br>

### `c_result_status_disp`
Indicates the status of the recorded vital sign or measurement, such as "Final," "Modified," "Preliminary," "Not Done," "In Progress," or "In Error."
<br></br>

