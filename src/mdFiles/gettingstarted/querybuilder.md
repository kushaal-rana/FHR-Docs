<h1><b>Query Builder</b></h1>
The FHR Database Query Tool is a user-friendly interface designed for executing SQL queries on the Fetal Heart Rate (FHR) database. This tool is primarily tailored for researchers who want to perform basic data exploration within the FHR database or those who are new to working with this dataset and wish to understand its structure. 
<br></br>

### Important considerations and constraints
<p>
When formulating queries, it's essential to adhere to PostgreSQL syntax. To ensure optimal server performance and resource management, we have imposed the following limitations:
</p>
<p>
<ol>
<li><b>Row Limit:</b> The system will return a maximum of 5000 rows for any query.</li>
<li><b>Query Timeout:</b> Queries are assigned a maximum runtime of 15 minutes. Queries surpassing this time limit will result in timeouts and no results.</li>
</ol>
</p>
<br>
<p>
While we strive to maintain a reliable service, please note that our resources are finite, and we cannot guarantee uninterrupted access at all times.
</p>
<br>
<p>
This query tool provides a convenient means to explore and extract relevant information from the FHR database efficiently. For more extensive research endeavors, setting up a local database is recommended.
</p>
<br>
<p>
Should you require further assistance or encounter any issues while using the tool, please do not hesitate to reach out for support. We are here to assist you in making the most of the FHR database for your research needs.
</p>

