<h1><b>Query Builder Tool</b></h1>

# Introduction

Welcome to the Query Builder tool, a dynamic interface designed to construct and run custom database queries with ease. This tool allows you to select from a list of tables, specify columns, and define conditions to retrieve specific data from the database.
<br></br>

# Step-by-Step Instructions

### Step 1: Selecting Tables

Begin by identifying the tables that contain the data you are interested in. On the left side of the page, you will find a list of available tables. Click on a table name to view the columns and select them to include in your query.

<br>

### Step 2: Adding Rules and Groups
In the middle interface, you can define your query logic:
<ul style="list-style-type: disc; margin-left: 50px;">
  <li>*Add Rule*: To include specific criteria, click on 'Add rule'. Select the desired column, the condition (such as 'equals', 'contains', etc.), and the value you are looking for.</li>
  <li>*Add Group*: To combine multiple conditions, use 'Add group'. This allows you to create nested conditions with AND/OR logic.</li>
</ul>
</br>

### Step 3: Configuring Conditions

Adjust the logical operators between your rules and groups to refine your query. Conditions can be combined using 'AND' to narrow down results or 'OR' to broaden your search.

</br>

### Step 4: Running the Query

Once your rules and conditions are set, click the 'Run' button to execute your query. The results will be displayed on the page. If no results are found, adjust your criteria and try again.

</br>

### Step 5: Saving and Loading Queries
Your queries can be saved for future use. After setting up your query, click 'Save'. To load a previously saved query, click 'Load' and select from the list of saved queries.

</br>

### Step 6: Downloading Query Results

After running your query and obtaining the desired results, you can download the data for further analysis or sharing. Click 'Download,' and the results will be saved in a CSV file on your device.
</br>
</br>

# Examples

### Example 1: Retrieving Mothers with Diabetes
To find records of mothers who had diabetes, follow these steps:
<ol style="list-style-type: decimal; margin-left: 50px;">
  <li>Select the `mother_diagnosis` table from the list.</li>
  <li>Click on 'Add rule.'</li>
  <li>Set the column to `source_string`, the condition to 'contains,' and the value to 'diabetes.'</li>
  <li>Click 'Run' to execute the query and view the results.</li>
</ol>
</br>
<img width="780" alt="image1" src="https://github.com/kushaal-rana/FHR-Docs/assets/66997833/193a8250-e82f-481b-8791-ef769c56073e">
</br>
</br>

### Example 2: Listing Children Born in 2019 with Jaundice
To retrieve a list of children born in 2019 with jaundice, follow these steps:
<ol style="list-style-type: decimal; margin-left: 50px;">
  <li>Select the `child_diagnosis` table from the list.</li>
  <li>Click on 'Add rule.'</li>
  <li>Set the column to `source_string` for jaundice and `reg_dt_tm` for the birth date.</li>
  <li>Set the conditions to 'contains' for jaundice and 'contains' for the year '2019.'</li>
  <li>Click 'Run' to execute the query and view the results.</li>
</ol>
</br>
<img width="780" alt="image_2" src="https://github.com/kushaal-rana/FHR-Docs/assets/66997833/e703f3e8-a342-4add-981d-90d2f3d043bb">
</br>
</br>

### Example 3: Analyzing Vital Signs for a Mother
For a analyzing Vital Signs for a Mother, follow these steps:
<ol style="list-style-type: decimal; margin-left: 50px;">
  <li>Select the `fhr_vitals` table from the list.</li>
  <li>Add rules for the columns `normalcy`, `result_status`, and `vitals_event`.</li>
  <li>Specify the conditions based on your criteria, for example, 'normalcy' equal to 'HI,' 'result_status' equals 'Final,' and 'vitals_event' contains 'Heart Rate.'</li>
  <li>Click 'Run' to execute the query and view the detailed results.</li>
</ol>
</br>
<img width="781" alt="image3" src="https://github.com/kushaal-rana/FHR-Docs/assets/66997833/a4f97919-e2f3-436e-b37f-3fb50d3b1164">
</br>

Feel free to customize these examples based on your specific use case and data structure.
</br>
</br>

# Video Tutorial: Navigating the Query Builder Tool

Watch this video tutorial for a hands-on demonstration of the Query Builder tool's functionalities.
</br>
<video width="781" controls>
  <source src="https://github.com/kushaal-rana/FHR-Docs/assets/66997833/0b8a3e2b-e3cb-4457-9edd-402f67a6df0b" type="video/mp4">
  Your browser does not support the video tag.
</video>
</br>

# Tips for Effective Queries
<ul style="list-style-type: disc; margin-left: 50px;">
  <li>Ensure that you have the correct spelling and case for table names and conditions.</li>
  <li>Use the 'Reset' button to clear all selections and start a new query.</li>
  <li>For complex queries, plan out your conditions and how they relate to each other before configuring them in the tool.</li>
</ul>
</br>

# Conclusion
The Query Builder is a powerful interface that puts complex database queries at your fingertips without the need for in-depth SQL knowledge. If you need further assistance, please refer to the help documentation or contact the support team.


## Tips for Effective Queries
- Ensure that you have the correct spelling and case for table names and conditions.
- Use the 'Reset' button to clear all selections and start a new query.
- For complex queries, plan out your conditions and how they relate to each other before configuring them in the tool.

# Conclusion
The Query Builder is a powerful interface that puts complex database queries at your fingertips without the need for in-depth SQL knowledge. If you need further assistance, please refer to the help documentation or contact the support team.
