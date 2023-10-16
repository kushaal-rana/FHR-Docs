<h1><b>Postgres queries</b></h1>

Prerequisites: *This tutorial assumes that you have access to an instance of the FHR database running on a PostgreSQL server*

<p>Make sure you have the necessary permissions and connectivity to the database. If your FHR database is not on the default search path, adjust the schema accordingly in your SQL queries. </p>
<br/>

### 1. Overview

This tutorial provides an introduction to querying the FHR (Fetal Heart Rate) database using SQL. By the end of this tutorial, you will be able to:

* Obtain metadata for database tables and columns.
* Perform basic SQL queries on individual tables.
* Combine tables using SQL joins to extract meaningful information.
* Utilize database views to retrieve high-level data.
<br></br>

### 2. Database metadata

You can retrieve metadata for specific tables and columns in the FHR database using SQL commands. 
To obtain metadata for a table, use the following query as an example:

``` sql
Display metadata for the child_birthweight table \d+ child_birthweight;
```

This command will show information about columns, data types, constraints, and more for the specified table. 
You can explore metadata for other tables like `child_diagnosis`, `child_labs`, and `mother_person`.
<br></br>

### 3. Basic Queries

Let's start with some basic SQL queries to retrieve data from individual tables:
<br></br>

### 3.1. Find Distinct Diagnosis Types for Child Encounters

``` sql
Get child birthweights with associated IDs SELECT child_person_id, child_encntr_id, result_val AS birthweight FROM child_birthweight;
```

This query retrieves child birthweights along with their associated person and encounter IDs.
<br></br>

### 3.2. Find Distinct Diagnosis Types for Child Encounters

```sql
List distinct diagnosis types for child encounters SELECT DISTINCT(d_diag_type_disp) AS diagnosis_type FROM child_diagnosis;
```

This query lists unique diagnosis types for child encounters.
<br></br>

### 3.3. Retrieve Mother's Lab Results
```sql
Get lab results for mothers along with normalcy status
SELECT mother_person_id, mother_encntr_id, c_event_disp AS lab_event, result_val AS lab_result, c_normalcy_disp AS normalcy_status FROM mother_labs;
```

This query retrieves lab results for mothers and includes their normalcy status.
<br></br>

### 4. Combining Tables with Joins

Now, let's combine tables using SQL joins to extract more meaningful insights:
<br></br>

### 4.1. Count FHR Signals per Mother

```sql
Count the number of FHR signals per mother SELECT mother_person_id, COUNT(*) AS signal_count FROM fhr_signals GROUP BY mother_person_id;
```
This query counts the number of FHR signals for each mother in the database.
<br></br>

### 4.2. Retrieve Child Procedures for a Specific Encounter

```sql
Get child procedures for a specific encounter (replace [Encounter_ID] with the actual ID) 
SELECT child_person_id, child_encntr_id, short_string AS procedure_description FROM child_procedures WHERE child_encntr_id = [Encounter_ID];
```
Replace [`Encounter_ID`] with the actual encounter ID to find child procedures for that specific encounter.
<br></br>

### 5. Using Views

You can also utilize database views to extract high-level information:

```sql
Sample view to find mother-patient links 
CREATE OR REPLACE VIEW mother_patient_links AS SELECT mother_person_id, child_person_id, birth_dt_tm FROM mother_child_link;
Retrieve mother-patient links using the view SELECT * FROM mother_patient_links;
```
This example creates a view to find links between mothers and children and then retrieves data from the view.
These are introductory SQL queries to help you get started with querying the FHR database.
<br></br>
<i>Customize and expand these queries to meet your specific research needs.</i>