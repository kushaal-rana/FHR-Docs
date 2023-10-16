<h1><b>Data Types</b></h1>

The fetal heart rate (FHR) data within this database provides critical insights into the health and well-being of both infants and expectant mothers. It encompasses a wide range of information, from patient-level data to hospital and ICU-level details. Here, we break down the different levels of data available and the corresponding tables and attributes.


# Patient Level Data: `CHILD_PERSON_ID` and `MOTHER_PERSON_ID`  

At the patient level, we have two primary identifiers: `CHILD_PERSON_ID` and `MOTHER_PERSON_ID`. These IDs allow us to uniquely identify individual children and mothers in the database. For each child (`CHILD_PERSON_ID`) and mother (`MOTHER_PERSON_ID`), the following static data is available.

# Hospital Level Data: `CHILD_ENCNTR_ID` and `MOTHER_ENCOUNTER_ID`

Moving up to the hospital level, we have two crucial identifiers: CHILD_ENCNTR_ID and MOTHER_ENCOUNTER_ID. These IDs are used to associate patients with specific hospital admissions or encounters.

# FHR Data Tables

In addition to patient, hospital, and ICU-level data, this database contains tables specifically related to fetal heart rate (FHR) data, including:
<ul style="list-style-type:disc;margin-left:50px;">
<li> Child Vitals (CHILD_VITALS) - Contains information about various vital signs recorded for children during their hospital encounters. </li> 
<li>
FHR Signals (FHR_SIGNALS) - Stores file names associated with FHR signals, linking them to specific children, mothers, and encounters.
</li>
<li>
FHR Vitals (FHR_VITALS) - Provides detailed data about fetal vital signs, including event descriptions, measurement details, and event timestamps during ICU stays.
</li>
</ul>
These tables collectively offer a comprehensive view of fetal health and maternal care within the hospital and ICU settings. They enable healthcare professionals and researchers to monitor and analyze vital data critical for making informed medical decisions and ensuring the well-being of both children and mothers.