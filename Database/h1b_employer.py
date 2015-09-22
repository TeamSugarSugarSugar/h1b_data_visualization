__author__ = 'Zhenwei Wang, wangzw1@live.unc.edu, University of North Carolina at Chapel Hill, INLS690 224 Visual Analytics'

import paramiko
import csv
import pymysql as db
from re import escape

# establish ssh tunnel
ssh= paramiko.SSHClient()
ssh.load_system_host_keys()
ssh.connect('ruby.ils.unc.edu', port=22, username='xxxxxx', password='XXXXXXX')

# establish db connection
connect = db.connect(host='pearl.ils.unc.edu', port = 3306, user='xxxxxxx',passwd='xxxxxxx', db='xxxxx')
cursor= connect.cursor()

with open('Data_2010.csv', newline='', encoding = "ISO-8859-1") as file:
    reader = csv.DictReader(file, delimiter=',')
    h1b_list = []
    for row in reader:
        h1b_list.append(row)

    for i in range(len(h1b_list)):
        while True:
            try:
                # store employer info into employer table
                cursor.execute('Insert into employer(name, city,state, naics_code) values ("'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_NAME']))+'","'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_CITY']))+'","'+escape(format(h1b_list[i]['LCA_CASE_EMPLOYER_STATE']))+'","'+escape(format(h1b_list[i]['LCA_CASE_NAICS_CODE']))+'");')
                connect.commit()
            except db.MySQLError as error:
                message = error
                print(message, row)
                break
connect.close()

print('Done!')
