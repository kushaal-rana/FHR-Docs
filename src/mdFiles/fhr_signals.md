<h1><b>FHR SIGNALS</b></h1>

**Table source:** Hospital Database.

**Table purpose:** The "FHR_Signals" table stores fetal heart rate (FHR) signal data file names, linking them to specific children, mothers, and encounters.

**Number of rows:** 34381

**Brief summary:**
The "FHR_Signals" table plays a crucial role in organizing and associating FHR data with relevant children and maternal encounters.

**Important considerations:**
None
- 
- 

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
file\_name | VARCHAR(1,000,000)
mother\_person\_id | INT8
mother\_encounter\_id | INT8

# Detailed description

This table serves as a repository for FHR signal data, with each row representing a unique combination of child, mother, and encounter. The columns in this table include:
<br/>
### `child_person_id`
This column contains a unique identifier for each child represented in the table. It helps establish a link between the FHR signals and the specific child. Each child's identifier is distinct.
<br></br>

### `file_name`
The `file_name` column stores the name of the file associated with the FHR signals. This information can be used to locate and retrieve the actual FHR data for analysis. File names are stored as strings.
<br></br>

### `mother_person_id`
Each mother is assigned a unique identifier in the `mother_person_id` column. This identifier distinguishes one mother from another in the database.
<br></br>

### `mother_encounter_id`
This column contains an identifier for each encounter or visit of the mother. It links the FHR signals to a specific encounter for the mother, allowing for temporal association between the FHR data and the mother's visit.
