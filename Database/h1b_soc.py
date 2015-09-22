__author__ = 'Zhenwei Wang, wangzw1@live.unc.edu, University of North Carolina at Chapel Hill, INLS690 224 Visual Analytics'

import paramiko
import csv
import pymysql as db
from re import escape

# establish ssh tunnel
ssh= paramiko.SSHClient()
ssh.load_system_host_keys()
ssh.connect('ruby.ils.unc.edu', port=22, username='xxxxx', password='xxxxxxx')

# establish db connection
connect = db.connect(host='pearl.ils.unc.edu', port = 3306, user='xxxx',passwd='xxxxxxx', db='visualdb_224')
cursor= connect.cursor()

with open('Data_2014.csv', newline='', encoding = "ISO-8859-1") as file:
    reader = csv.DictReader(file, delimiter=',')
    h1b_list = []
    # for this part, year is 2010
    # year = 2010
    for row in reader:
        h1b_list.append(row)

    for i in range(len(h1b_list)):
        while True:
            try:

                #  store soc info into soc table. soc name could be null, but we want to keep these people
                # as they are meaningful in the data set.
                if h1b_list[i]['LCA_CASE_SOC_NAME'] is not None:
                    cursor.execute('Insert into soc values ("'+escape(format(h1b_list[i]['LCA_CASE_SOC_CODE']))+'","'+escape(format(h1b_list[i]['LCA_CASE_SOC_NAME']))+'");')
                    connect.commit()
                else:
                    cursor.execute('Insert into soc where code="'+escape(format(h1b_list[i]['LCA_CASE_SOC_CODE']))+'";')
                    connect.commit()
            except db.MySQLError as error:
                message = error
                print(message, '\n')
                break
connect.close()

print('Done!')
