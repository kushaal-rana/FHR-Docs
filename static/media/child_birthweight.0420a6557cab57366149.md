<h1><b>CHILD BIRTH WEIGHT</b></h1>

**Table source:** Hospital Database.

**Table purpose:** Records birth weight data for newborn children in the hospital.

**Number of rows:** 11254

**Brief summary:**
This table contains information about the birth weight of newborn children in the hospital. It includes details such as the event description, contributor system information, event tags, and clinical event identifiers. Additionally, it records the normal range for birth weights, event timestamps, and relevant data about the babies.

# Table columns

Name | Postgres data type
---- | ----
child\_person\_id | INT8
child\_encntr\_id | INT8
PCM Date, Time of Birth | VARCHAR
Delivery-EGA | VARCHAR
Birth Length | VARCHAR
Birth Weight | VARCHAR
Delivery Type | VARCHAR
PC PN Single Live Birth | VARCHAR
Baby's Birth Status | VARCHAR
Pregnancy/Birth Complications | VARCHAR
Birth Complications | VARCHAR
Resuscitation at Birth | VARCHAR
NAS Less Than 90% of Birth Weight | VARCHAR
PCM Birth Activity | VARCHAR
PCM Birth Muscle Tone | VARCHAR
PCM Birth Skin Color | VARCHAR
PCM Birth Skin to Skin | VARCHAR
PCM Birth Temperature | VARCHAR
PCM Neonate Outcome | VARCHAR
Para | VARCHAR


# Detailed description

### `child_person_id`, `child_encntr_id`
Each row in the "Child_BirthWeight" table contains a unique IDs, `child_person_id` represents a unique identifier for each child, while `child_encntr_id` can vary, indicating multiple admissions for a single child to the hospital. This table can have duplicate `child_person_id` values, reflecting multiple admissions for the same child.
<br></br>

### `PCM Date, Time of Birth`
Date and time of birth recorded in the PCM format.

### `Delivery-EGA`
Estimated Gestational Age at delivery.

### `Birth Length`
Length of the baby at birth.

### `Birth Weight`
Weight of the baby at birth.

### `Delivery Type`
Mode of delivery (e.g., Vaginal, Ad hoc, etc.).

### `PC PN Single Live Birth`
Pregnancy Care Provider notation for a single live birth.

### `Baby's Birth Status`
Additional information about the baby's birth status.

### `Pregnancy/Birth Complications`
Any complications during pregnancy or birth.

### `Birth Complications`
Specific details about birth complications.

### `Resuscitation at Birth`
Actions taken for resuscitation at birth.

### `NAS Less Than 90% of Birth Weight`
Information about Neonatal Abstinence Syndrome.

### `PCM Birth Activity`
Birth activity recorded in the PCM format.

### `PCM Birth Muscle Tone`
Muscle tone of the baby at birth recorded in the PCM format.

### `PCM Birth Skin Color`
Skin color of the baby at birth recorded in the PCM format.

### `PCM Birth Skin to Skin`
Whether skin-to-skin contact was recorded in the PCM format.

### `PCM Birth Temperature`
Temperature of the baby at birth recorded in the PCM format.

### `PCM Neonate Outcome`
Outcome of the neonate recorded in the PCM format.

### `Para`
Parity or the number of live births the mother has had before the current birth.