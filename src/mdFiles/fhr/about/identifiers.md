<h1><b>Patient Identifiers</b></h1>

The FHR (Fetal Heart Rate) database contains a wealth of clinical information recorded during routine patient care. It's important to understand the two main types of data within the database: static data and dynamic data. These distinctions help provide context for the nature of the information stored in the database.

# Static data
Static data refers to information that is recorded once for a given identifier and typically does not change over time. In the FHR database, static data includes the following key identifiers:
### Child Patient Data
For child patients, the following static data is available:
<ul style="list-style-type:disc;margin-left:50px;">
<li>Child Person ID: A unique identifier for each child patient.</li>
<li>Child Encounter ID: An identifier for each child patient's encounter.</li>
<li>Date of Birth (DOB): The date of birth of the child patient.</li>
<li>Diagnosis: Various diagnosis details recorded for child patients.</li>
</ul>

### Mother Patient Data

Similarly, for mother patients, the following static data is available:
<ul style="list-style-type:disc;margin-left:50px;">
<li>Mother Person ID: A unique identifier for each mother patient.</li>
<li>Mother Encounter ID: An identifier for each mother patient's encounter.</li>
<li>Date of Birth (DOB): The date of birth of the mother patient.</li>
<li>Diagnosis: Various diagnosis details recorded for mother patients.</li>
</ul>
<p>It's important to note that static data is typically not associated with an `ITEMID` since it doesn't require repeated measurements. Instead, it provides essential patient information that remains constant throughout their care.</p>

# Dynamic Data

Dynamic data, on the other hand, includes information that is periodically measured or recorded during a patient's hospital stay. These measurements change over time and are often associated with an ITEMID to efficiently store repeated measurements. Examples of dynamic data include:
### Child Vital Signs

For child patients, dynamic data includes vital signs such as:
<ul style="list-style-type:disc;margin-left:50px;">
<li>Heart Rate: Recorded with associated timestamps.</li>
<li>Blood Pressure: Measured at various intervals.</li>
<li>Temperature: Monitored with timestamps.</li>
<li>Other Clinical Measurements: Recorded during the child's stay.</li>
</ul>

###  Mother Vital Signs
Similarly, for mother patients, dynamic data includes vital signs such as:
<ul style="list-style-type:disc;margin-left:50px;">
<li>Heart Rate: Monitored with timestamps.</li>
<li>Blood Pressure: Recorded at different time points.</li>
<li>Temperature: Recorded with associated timestamps.</li>
<li>Other Clinical Measurements: Collected during the mother's care.</li>
</ul>

# Hospital acquired data

Data sourced from the hospital database includes a wide range of information related to a patient's stay within the hospital. These tables provide context for the patient's overall care but are not necessarily specific to their ICU stay. Some key tables in this category include:

<ul style="list-style-type:disc;margin-left:50px;">
<li>ADMISSIONS: Contains details about patient admissions, including admission type and discharge time.</li>
<li>DIAGNOSES_ICD: Records International Classification of Diseases (ICD) codes for diagnoses.</li>
<li>LABEVENTS: Stores laboratory test results.</li>
<li>PATIENTS: Contains static patient information.</li>
<li>PROCEDURES_ICD: Records ICD codes for procedures performed on patients.</li>
<li>TRANSFERS: Provides information about patient transfers within the hospital.</li>
</ul>
<br/>
Understanding the types of data within the FHR database is essential for conducting meaningful analyses and research within the clinical context. Researchers should consider both static and dynamic data when designing queries and interpreting results.
