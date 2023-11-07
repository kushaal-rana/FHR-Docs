<h1><b>Postgres queries</b></h1>

<!-- Prerequisites: *This tutorial assumes that you have access to an instance of the FHR database running on a PostgreSQL server* -->
<!-- 
<p>Make sure you have the necessary permissions and connectivity to the database. If your FHR database is not on the default search path, adjust the schema accordingly in your SQL queries. </p>
<br/> -->

## 1. Overview

This tutorial provides an introduction to the structure and content of the FHR database. By the end of this tutorial you will be able to:

* Obtain metadata for database tables and columns.
* Perform basic SQL queries on individual tables.
* Combine tables using SQL joins to extract meaningful information.
* Utilize database views to retrieve high-level data.
<br></br>

### STEPS TO EXECUTE QUERIES USING DBEAVER

### CONNECT TO THE VPN (IF NOT IN HOSPITAL SERVER)
![Connection to VPN](/src/static/img/hotspotconnection.png)
### INSTALL DBEAVER TOOL
### CONNECT TO THE DATABASE
![Connection to Database](/src/static/img/dbconnection.png)
![Connection to Database](/src/static/img/dbconnection2.png)
### NOW YOU WILL BE CONNECTED TO THE DATABASE
![Queries ](/src/static/img/queries1.png)
### NOW EXECUTE THE SQL QUERIES ON REQUIRED TABLES
![SQL Queries](/src/static/img/queries2.png)

## 2. Database metadata

List the name of all clinical data we have in this database
</br>
Use: This query provides an overview of the available clinical data, which is essential for understanding the scope and types of data stored in the database.
</br>

## 3. Patient Information

List of mothers who had category 3
<br></br>

<b>Use:</b> This query identifies mothers associated with a specific category (e.g., maternal care category), aiding in the tracking and management of maternity care.
Mothers who did not have an emergency c-section
</br>
<b>Use:</b> This query helps in identifying mothers who did not undergo an emergency cesarean section, which is important for analyzing childbirth procedures and outcomes.
List of babies who had multiple abnormal conditions
</br>
<b>Use:</b> This query retrieves infants with multiple abnormal health conditions, which is valuable for monitoring and managing high-risk neonatal cases.
</br>

## 4. FHR signal

How many recordings contain useful information
</br>

<b>Use:</b> This query counts the number of recordings with valuable Fetal Heart Rate (FHR) signals, aiding in assessing data quality and completeness in fetal monitoring.
What is the missing rate of FHR with ID # 9182620
</br>
<b>Use:</b> This query calculates the missing rate of FHR data for a specific child, helping evaluate data completeness and quality in fetal monitoring.

</br>

## 5. Diabetes Diagnosis 

List of mothers who had diabetes
<b>Use:</b> This query identifies mothers with diabetes diagnoses, which is essential for managing and monitoring diabetic patients during pregnancy.
</br>

## 6. ChildBirth and Maternity information

ChildBirth and Maternity Information
</br>
How many babies are the first child?
</br>
<b>Use:</b>This query counts the number of babies who are the firstborn, which is important for understanding birth order and maternal healthcare.
How many recordings contain uterine activity signals

</br>
<b>Use:</b>This query counts the recordings containing uterine activity signals, which is crucial for monitoring uterine contractions during labor.
How many babies were born during 01/01/2019 and 12/31/2019

</br>
<b>Use:</b>This query determines the number of babies born within a specific date range, aiding in patient record management and resource allocation.

</br>

## 6. Problem 

Step 1: Get the list of children who have a birth date and mother encounter ID.

``` sql
SELECT child_person_id
FROM querytool_2023.mother_child_link
WHERE birth_dt_tm IS NOT NULL AND mother_encntr_id IS NOT NULL;
```
<br></br>

Step  2: Find children who were in the NICU.

``` sql
SELECT DISTINCT mother_encntr_id
FROM querytool_2023.mother_diagnosis
WHERE en_loc_nurse_unit_disp = 'NICU';
```
<br></br>

Step  3: Find children who were in the ICU.

``` sql
SELECT DISTINCT mother_encntr_id
FROM querytool_2023.mother_diagnosis
WHERE en_loc_nurse_unit_disp = 'ICU';;
```
<br></br>

Step  4: Determine how many children were in both NICU and ICU.

``` sql
SELECT COUNT(*)
FROM (
    SELECT child_person_id
    FROM querytool_2023.mother_child_link
    WHERE birth_dt_tm IS NOT NULL AND mother_encntr_id IS NOT NULL
) AS A
WHERE A.mother_encntr_id IN (
    SELECT DISTINCT mother_encntr_id
    FROM querytool_2023.mother_diagnosis
    WHERE en_loc_nurse_unit_disp = 'NICU'
)
AND A.mother_encntr_id IN (
    SELECT DISTINCT mother_encntr_id
    FROM querytool_2023.mother_diagnosis
    WHERE en_loc_nurse_unit_disp = 'ICU'
);
```
<br></br>
This final query will give you the count of babies who were in both NICU and ICU.
</br>
