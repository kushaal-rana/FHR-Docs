<h1><b>Times</b></h1>

In the FHR (Fetal Heart Rate) database, time-related information is vital for interpreting and analyzing data effectively. This documentation provides insights into various time-related columns and their significance within the database, using the actual tables and column names present in the FHR dataset.

# Time Suffixes

Time in the FHR database is represented using specific suffixes in the column names. These suffixes help users understand the temporal resolution of the data. There are two primary time suffixes:
<ul style="list-style-type:disc;margin-left:50px;">
<li>_TIME: Columns with the _TIME suffix, such as `event_start_dt_tm` and `valid_from_dt_tm`, indicate data resolution down to the minute. These timestamps provide precise measurements recorded with minute-level accuracy.</li>
<li>_DATE: Columns with the _DATE suffix, such as `reg_dt_tm` and `disch_dt_tm`, indicate data resolution down to the day. These timestamps provide measurements with hour, minute, and second values set to 00:00:00, signifying that only the date is available without the exact time.</li>
</ul>
It's important to note that the presence of `_DATE` in the suffix doesn't imply that the data was recorded at midnight but rather indicates that only the date information is available.

# Date shifting

To protect patient confidentiality, all dates in the FHR database have undergone a process of date shifting. While dates remain internally consistent for the same patient, they are randomly distributed into the future. This randomization ensures privacy while maintaining certain temporal characteristics.
Key aspects preserved by date shifting include:

<ul style="list-style-type:disc;margin-left:50px;">
<li>Time of Day - Timestamps retain the time of day, ensuring that a measurement recorded at 15:00:00 was indeed recorded at 15:00:00 local standard time.</li>
<li>Day of the Week - If a measurement was originally recorded on a Sunday, it will continue to appear on a Sunday in the future.</li>
<li>Seasonality - Seasonal patterns are maintained, so measurements recorded during the winter months will still appear during winter months.</li>
</ul>
<br/>
However, date shifting intentionally removes the following information to protect patient privacy:
<ul style="list-style-type:disc;margin-left:50px;">
<li>Year - The year is randomly distributed between 2100 - 2200.</li>
<li>Day of the month - The absolute day of the month is *not* preserved.</li>
<li>Inter-patient information - Timestamps do not imply that two patients were in the same condition at the same time on the same date.</li>
</ul>

# Specific Time Columns

### Event-Specific Time Columns
<ul style="list-style-type:disc;margin-left:50px;">
<li>event_start_dt_tm: This timestamp indicates the start time of specific events related to fetal monitoring and maternal care. In most cases, it represents the precise time when the event commenced.</li>
<li>valid_from_dt_tm: This timestamp is associated with the validity of data, indicating when specific measurements or events became valid for analysis or recording.</li>
<li>valid_until_dt_tm: Similar to valid_from_dt_tm, this timestamp indicates the validity period but represents the time when specific measurements or events are no longer valid for analysis or recording.</li>
</ul>
<br/>

### Other Time Columns
<ul style="list-style-type:disc;margin-left:50px;">
<li>reg_dt_tm: This timestamp represents registration or recording times for various events and measurements in the database.</li>
<li>disch_dt_tm`: disch_dt_tm indicates discharge times, especially relevant for hospital stays and maternal care.</li>
</ul>
<br/>
Understanding these time types and conventions is essential for conducting accurate analyses and research within the FHR database while respecting patient privacy through date shifting. Researchers and clinicians can make informed decisions based on these temporal considerations.

