+++
date = "2023-09-25T14:02:13-04:00"
title = "FHR Database Query Tool"
aliases = "/gettingstarted/querybuilder/"
linktitle = "Querybuilder"
weight = 30
toc = "true"

+++

The FHR Database Query Tool is a user-friendly interface designed for executing SQL queries on the Fetal Heart Rate (FHR) database. This tool is primarily tailored for researchers who want to perform basic data exploration within the FHR database or those who are new to working with this dataset and wish to understand its structure. 

### Important Considerations and Constraints

When formulating queries, it's essential to adhere to PostgreSQL syntax. To ensure optimal server performance and resource management, we have imposed the following limitations:

- Row Limit: The system will return a maximum of 5000 rows for any query.
- Query Timeout: Queries are assigned a maximum runtime of 15 minutes. Queries surpassing this time limit will result in timeouts and no results.



While we strive to maintain a reliable service, please note that our resources are finite, and we cannot guarantee uninterrupted access at all times.

This query tool provides a convenient means to explore and extract relevant information from the FHR database efficiently. For more extensive research endeavors, setting up a local database is recommended.

Should you require further assistance or encounter any issues while using the tool, please do not hesitate to reach out for support. We are here to assist you in making the most of the FHR database for your research needs.


