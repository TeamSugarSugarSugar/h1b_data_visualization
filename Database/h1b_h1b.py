__author__ = 'Zhenwei Wang, wangzw1@live.unc.edu, University of North Carolina at Chapel Hill, INLS690 224 Visual Analytics'

import paramiko
import csv
import pymysql as db
from re import escape

# establish ssh tunnel
ssh= paramiko.SSHClient()
ssh.load_system_host_keys()
ssh.connect('ruby.ils.unc.edu', port=22, username='xxxxx', password='xxxxxx')

# establish db connection
connect = db.connect(host='pearl.ils.unc.edu', port = 3306, user='xxxxxx',passwd='xxxxxxxxxx', db='visualdb_224')
cursor= connect.cursor()

with open('Data_2010.csv', newline='', encoding = "ISO-8859-1") as file:
    reader = csv.DictReader(file, delimiter=',')
    h1b_list = []
    # for this part, year is 2010
    year = 2010
    for row in reader:
        h1b_list.append(row)
    for i in range(len(h1b_list)):
        while True:
            try:
	#fetch the auto_generated id and store it as emp_result
                cursor.execute('select id from employer where name="'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_NAME']))+'" and city="'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_CITY']))+'" and state="'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_STATE']))+'" and naics_code="'+escape(format(h1b_list[i]['LCA_CASE_NAICS_CODE']))+'";')
                connect.commit()
                emp_result = cursor.fetchone()[0]

                # convert Y/N bool to 0/1 bool for full time boolean column
                if h1b_list[i]['FULL_TIME_POS'] == 'Y':
                    full_time_boolean = '1'
                elif h1b_list[i]['FULL_TIME_POS'] == 'N':
                     full_time_boolean = '0'

                 # store the one case at a time
                cursor.execute('Insert into h1b (year, case_num, status, visa_class, employer_id, soc_code, job_title,wage_rate_from, wage_rate_to,wage_unit,full_time)  Values ("'+escape(format(year))+'","'+escape(format(h1b_list[i]['LCA_CASE_NUMBER']))+'", "'+escape(format(h1b_list[i]['STATUS']))+'","'+escape(format(h1b_list[i]['VISA_CLASS']))+'","'+escape(format(emp_result))+'","'+escape(format(h1b_list[i]['LCA_CASE_SOC_CODE']))+'", "'+escape(format(h1b_list[i]['LCA_CASE_JOB_TITLE']))+'" ,"'+escape(format(h1b_list[i]['LCA_CASE_WAGE_RATE_FROM']))+'","'+escape(format(h1b_list[i]['LCA_CASE_WAGE_RATE_TO']))+'" ,"'+escape(format(h1b_list[i]['LCA_CASE_WAGE_RATE_UNIT']))+'" , "'+full_time_boolean+'");')
                connect.commit()
                break
            except db.MySQLError as error:
                message = error
                print(message, '\n')
                break
connect.close()

print('Done!')
