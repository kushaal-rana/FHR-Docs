<h1><b>Query Builder</b></h1>
The SBU-FHRdatabase includes a web-based querying tool that enables physicians and researchers to query the database without knowing database querying languages like SQL or other programming languages. This tool allows users to construct queries using a simple drop-down menu, selecting tables and attributes of interest, and creating filters using a combination of basic logical operations (AND, OR, NOT), making it easy for them to extract the specific records in the data they need. In addition, the SBU-FHRsystem includes a visualization tool that plots the CTG signals in a resolution that is familiar to physicians in the United States. The visualization tool also allows users to identify patterns and trends in the signals easily, and it is an essential tool for the interpretation of regions of interest. The visualization tool also includes functionality for zooming, panning, making annotations, and exporting data as necessary
<br></br>

<p> 
<b>Overview of CTG Databases used in literature:</b> We systematically searched the electronic database PubMed including records up to 2020. We restricted the study language to English. A range of keywords was employed in the study, including cardiotocography (CTG), fetal heart rate (FHR), maternal heart rate (MHR), uterine contraction (TOCO), fetal heart rate monitoring, computer-assisted diagnosis, fetal distress, asphyxia, hypoxemia, and fetal hypoxia. The chosen papers underwent a process of reference searching, wherein both the references within the articles themselves and the articles that cited the original study were examined. Due to the limitations of providing a comprehensive evaluation, a set of inclusion criteria was employed to ensure the inclusion of relevant works while maintaining a clear overview. Initially, in cases where a CTG database was utilized across numerous studies, we selected the manuscript that provided the most comprehensive description of said database. Incorporating the identical description, we have provided the latest up-to-date paper. For instance, example required.
</p>
### Methods
<p>
<b>Ethics statement:</b> <br></br>The FHR recordings and clinical data were paired using a unique identifier that was anonymized and provided by the hospital information system. The CTG data were synchronized with the stages of labor, specifically the first and second stages, and were afterward adjusted relative to the time of birth to ensure de-identification. The present study received approval from the Institutional Review Board of University Hospital X, and all female participants provided their informed permission.
</p>
<p>
<b>Data collection:</b> <br></br>The data were gathered from the period spanning from Aug 1st, 2020, to August 1st, 2023, at the obstetrics unit located within the University Hospital in Brno, Czech Republic. The dataset included Maternal-Fetal data that included CTG signals along with maternal vitals, procedures, co-morbidities, pre-natal delivery variables, as well as outcomes. The CTGs were recorded using the STAN S21 and S31 fetal monitors manufactured by Neoventa Medical in Mölndal, Sweden, as well as the Avalon FM40 and FM50 fetal monitors manufactured by Philips Healthcare in Andover, MA. The CTG signals were electronically recorded within the OB TraceVue® system, developed by Philips, in a format exclusive to the system. To convert these signals into a text format, proprietary software provided by Philips was utilized. Every CTG record consists of time information and signals representing the fetal heart rate and uterine contractions, which are both sampled at a rate of 4 Hz. The recording of a signal utilizing an internal scalp electrode yielded further data pertaining to the T/QRS ratio and the characteristics of the biphasic T-wave. A final database of 552 carefully chosen cardiotocography (CTG) recordings was compiled from an initial pool of 9164 intrapartum recordings. The selection process took into account both clinical and technological factors. Further information regarding the criteria used for selecting the recordings is provided.
<br></br>
The clinical data were maintained within the hospital information system (AMIS) using a relational database. Comprehensive clinical data pertaining to the birth and fetal/maternal status were collected. The clinical data encompassed various aspects, such as delivery descriptors (including fetal presentation, delivery type, and duration of the first and second stage), neonatal outcomes (such as seizures and intubation), fetal and neonatal descriptors (including sex, gestational age, and weight), as well as information pertaining to the mother and potential risk factors. The clinical data from the final SBU-FHRdatabase were extracted from a relational database and subsequently transformed into the Physionet text format.
</p>
<p>
<b>Data selection and criteria considered:</b> <br></br>The selection procedure of the records was based on both clinical and CTG signal parameters, and the process is shown in
65 Figure X.
</p>
<p>
<b>Clinical criteria:</b> <br></br>The subsequent paragraphs delineate the criteria employed for the exclusion of records. Furthermore, we will briefly address the criteria that were incorporated into the final database’s description but were not utilized for the purpose of excluding records.
</p>
<p>
<b>Clinical selection criteria:</b>
The inclusion of recordings into the final database was determined based on the following characteristics. The references provided in this section pertain to a detailed explanation of a certain parameter.
<ol>
<ul><b>Women’s Age: </b> The age of women has been discovered to have a substantial impact on the likelihood of congenital illnesses. However, no significant relationship was observed between women’s age and the intrapartum period1 Adolescent maternal age, defined as being below 18 years old, has been associated with negative outcomes2. Consequently, data pertaining to this age group were omitted from the analysis.</ul>
<ul><b>Week of gestation</b> The level of fetal development significantly influences both the shape and behavior of the fetal heart rate (FHR) during both the antepartum and intrapartum periods3. Hence, the sample was restricted to babies that had reached a mature stage of development, specifically those with a gestational age of 37 weeks or more. This determination was mostly based on the last menstrual period, and in most instances, it was further verified through ultrasound measurements conducted during prenatal examinations.</ul>
<ul><b>Known fetal diseases</b>  Fetuses that have been identified as having congenital abnormalities or intrauterine growth restriction (IUGR), which could potentially impact the fetal heart rate (FHR) and/or the result of the delivery, were not included in the database. Furthermore, anomalies that were identified after birth were examined, and two cases involving transposed big veins were retained in the dataset. It was determined that these specific alterations should not have had an impact on the fetal heart rate (FHR).</ul>
<ul><b>Type of delivery</b>  The predominant portion of the database comprises instances of vaginal deliveries. However, in order to augment the number of instances exhibiting pathological results within the database, 16 cesarean section recordings with a pH level of 7.05 or lower were incorporated. As a result, a control group of 30 cesarean sections with normal outcomes was also added to facilitate independent assessment if required.</ul>
<ul><b>Type of gravidity</b>  Fonly singleton, uncomplicated pregnancies were included.</ul>
</ol>
</p>
<p>
<b>Additional clinical criteria provided: </b>
In addition to the criteria employed for selection, the subsequent criteria were taken into account and are accessible with the CTG data.
<ol>
<ul><b>Sex of the fetus </b> The inclusion of both sexes in the study of fetal outcomes is important, as the sex of the fetus has been found to considerably influence the outcome, as stated by Bernardes et al.4.</ul>
<ul><b>Parity</b> while the initial childbirth experience may be perceived as more challenging in a clinical context5, it has no impact on the fetal heart rate (FHR) monitoring.</ul>
<ul><b>Risk factors</b>  Risk factors refer to the specific characteristics or conditions that can be used to describe and identify pregnancies that are at a higher risk of complications or adverse outcomes. Risk variables that may have exerted an influence on the condition of the infant prior to labor have been incorporated. We suggest referring to the study by Badawi et al.6 for a comprehensive examination of the parameters and additional sources. The risk factors that were ultimately included in the database were gestational diabetes, preeclampsia, maternal temperature over 37.5°C, hypertension, and the presence of meconium coloured fluid.</ul>
<ul><b>Drugs</b>  The impact of drugs, particularly those taken during the process of childbirth, was solely examined in relation to their effect on fetal heart rate (FHR). The direct impact of opiates on fetal heart rate (FHR) is a possibility; however, their administration during delivery is seldom in the Czech Republic and was not observed in any of the cases documented in the database. Consequently, information regarding drug administration is not included in the database. It should be noted that oxytocin, for example, is utilized to improve uterine activity, which in turn indirectly affects the fetal heart rate (FHR). This influence is mostly observed by an increase in uterine activity, allowing for the assessment of FHR only using cardiotocography (CTG).</ul>
<ul><b>Other Criteria - Additional criteria</b>   supplementary details provided to offer an understanding of the rationale behind the selection of operative delivery, for instance. The several factors that can contribute to complications during childbirth are induced delivery, the kind of presentation (occipital/breech), lack of progress in labor, dystocia cephalocorporal (incoordinate uterine activity), and dystocia cephalopelvic.</ul>
</ol>
</p>

<br>
<p>
<b>Labor outcome measures:</b>
We have specifically chosen recordings that include umbilical artery pH in order to create a database suitable for comparing various automated procedures. All supplementary outcome measures that were accessible in the hospital information system were incorporated. Several of these measures are frequently misapplied and their drawbacks will be discussed in the following section.
</p>
<br>
<p>
<b>Outcome measure selection criteria: </b>
In order to facilitate impartial categorization, the inclusion of the pH measure was deemed crucial for the assessment of the database.
<ol><ul>The measurement of umbilical artery pH (pH) is a frequently utilized metric that serves as an indicator of respiratory hypoxia. The data sets containing pH measurements that were not available were omitted from the analysis. In accordance with the recommendation put forward by Rosen (53), recordings that exhibited pCO2 values beyond the 95th percentile (54) were omitted from the analysis, with the exception of those records with a pH 7.05. It is worth noting that even according to the aforementioned study (54), caution should be exercised when dealing with records that fall within this pH range.</ul>
</ol>
</p>
<br>
<p>
<b>Additional outcome measures provided: </b>
Although the pH is widely utilized as a measure, we have incorporated supplementary measurements such as the following.
<ol><ul><b>Base excess (BE)</b> is frequently utilized in clinical practice as an indicator of metabolic hypoxia; nevertheless, it is prone to producing false positive results7. </ul>
<ul><b>Base deficit in the extracellular fluid (BDecf)</b> According to Rosén et al.7, the measurement of base deficit in the extracellular fluid (BDecf) is considered to be a more accurate indicator of metabolic hypoxia compared to base excess (BE). The pH measurement continues to be a more reliable and comprehensive indicator, as supported by the recent studyconducted by Georgieva et al.8. </ul>
<ul><b>Neonatology</b> - comprehensive neonatological reports were obtained for all cases and stored in a pre-established database. There were no instances of severe neonatal morbidity, hypoxia, ischemic encephalopathy, or seizures observed in the study (For further information on neonatal morbidity, please refer to reference9). </ul>
<ul>• The subjective assessment of the delivery outcome is conducted using Apgar’s score, which involves the evaluation of a newborn kid in the 1st, 5th, and 10th minute after birth using five categories10. </ul>
</ol>
</br>
The entire information was utilized for the purpose of conducting a study on inter- and intra-observer variability. In this research, a cohort of nine experienced obstetricians assessed the cardiotocography (CTG) signals. Once processed, the clinical evaluation will be incorporated into the database.
</p>

