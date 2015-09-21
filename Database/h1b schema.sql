create table h1b (
case_num varchar(20) not null,
year year(4) not null,
status varchar(20),
visa_class varchar(20),
employer_id int,
soc_code varchar(20),
job_title varchar(50),
wage_rate_from int,
wage_rate_to int,
wage_unit varchar(10),
full_time boolean,
primary key (case_num, year),
foreign key (employer_id) references employer(id),
foreign key (soc_code) references soc(code)
);

create table employer (
id int not null auto_increment primary key,
name varchar(100) not null,
city varchar(50),
state char(2) not null,
naics_code varchar(6)
);

create table soc (
code varchar(20) not null primary key,
name varchar(100) not null
);




 


