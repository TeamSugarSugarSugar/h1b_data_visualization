// This is the general data for the h1b visualization


// OTHERS represent cases with a status of Rejected or voided.

var general_data =[
	{"year":2010, "visa type":"H-1B","CERTIFIED":258381,"CERTIFIED-WITHDRAWN":27397,"DENIED":38827,"WITHDRAWN":11420,"OTHERS":14},
	{"year":2010, "visa type":"H-1B1 Chile","CERTIFIED":289,"CERTIFIED-WITHDRAWN":34,"DENIED":105,"WITHDRAWN":14,"OTHERS":1},
	{"year":2010, "visa type":"H-1B1 Singapore","CERTIFIED":263,"CERTIFIED-WITHDRAWN":27,"DENIED":59,"WITHDRAWN":12,"OTHERS":0},
	{"year":2010, "visa type":"E-3 Australian","CERTIFIED":3757,"CERTIFIED-WITHDRAWN":347,"DENIED":1460,"WITHDRAWN":184,"OTHERS":3},
	{"year":2010, "visa type":"Not Specified","CERTIFIED":0,"CERTIFIED-WITHDRAWN":0,"DENIED":1,"WITHDRAWN":0,"OTHERS":5},
	{"year":2011, "visa type":"H-1B","CERTIFIED":303099,"CERTIFIED-WITHDRAWN":11442,"DENIED":27711,"WITHDRAWN":9962,"OTHERS":0},
	{"year":2011, "visa type":"H-1B1 Chile","CERTIFIED":294,"CERTIFIED-WITHDRAWN":7,"DENIED":91,"WITHDRAWN":6,"OTHERS":0},
	{"year":2011, "visa type":"H-1B1 Singapore","CERTIFIED":233,"CERTIFIED-WITHDRAWN":7,"DENIED":39,"WITHDRAWN":9,"OTHERS":0},
	{"year":2011, "visa type":"E-3 Australian","CERTIFIED":4310,"CERTIFIED-WITHDRAWN":140,"DENIED":1331,"WITHDRAWN":175,"OTHERS":0},
	{"year":2011, "visa type":"Not Specified","CERTIFIED":0,"CERTIFIED-WITHDRAWN":0,"DENIED":1,"WITHDRAWN":0,"OTHERS":0},
	{"year":2012, "visa type":"H-1B","CERTIFIED":346773,"CERTIFIED-WITHDRAWN":30674,"DENIED":19869,"WITHDRAWN":10708,"OTHERS":0},
	{"year":2012, "visa type":"H-1B1 Chile","CERTIFIED":335,"CERTIFIED-WITHDRAWN":8,"DENIED":57,"WITHDRAWN":9,"OTHERS":0},
	{"year":2012, "visa type":"H-1B1 Singapore","CERTIFIED":375,"CERTIFIED-WITHDRAWN":19,"DENIED":52,"WITHDRAWN":17,"OTHERS":0},
	{"year":2012, "visa type":"E-3 Australian","CERTIFIED":5185,"CERTIFIED-WITHDRAWN":417,"DENIED":1171,"WITHDRAWN":175,"OTHERS":0},
	{"year":2012, "visa type":"Not Specified","CERTIFIED":0,"CERTIFIED-WITHDRAWN":0,"DENIED":0,"WITHDRAWN":1,"OTHERS":0},
	{"year":2013, "visa type":"H-1B","CERTIFIED":375925,"CERTIFIED-WITHDRAWN":34909,"DENIED":11250,"WITHDRAWN":11506,"OTHERS":14},
	{"year":2013, "visa type":"H-1B1 Chile","CERTIFIED":384,"CERTIFIED-WITHDRAWN":12,"DENIED":37,"WITHDRAWN":9,"OTHERS":0},
	{"year":2013, "visa type":"H-1B1 Singapore","CERTIFIED":460,"CERTIFIED-WITHDRAWN":24,"DENIED":24,"WITHDRAWN":12,"OTHERS":0},
	{"year":2013, "visa type":"E-3 Australian","CERTIFIED":6182,"CERTIFIED-WITHDRAWN":487,"DENIED":858,"WITHDRAWN":179,"OTHERS":1},
	{"year":2013, "visa type":"Not Specified","CERTIFIED":0,"CERTIFIED-WITHDRAWN":0,"DENIED":1,"WITHDRAWN":1,"OTHERS":0},	
	{"year":2014, "visa type":"H-1B","CERTIFIED":446416,"CERTIFIED-WITHDRAWN":35742,"DENIED":10790,"WITHDRAWN":15726,"OTHERS":2},
	{"year":2014, "visa type":"H-1B1 Chile","CERTIFIED":479,"CERTIFIED-WITHDRAWN":21,"DENIED":49,"WITHDRAWN":8,"OTHERS":0},
	{"year":2014, "visa type":"H-1B1 Singapore","CERTIFIED":714,"CERTIFIED-WITHDRAWN":35,"DENIED":50,"WITHDRAWN":26,"OTHERS":0},
	{"year":2014, "visa type":"E-3 Australian","CERTIFIED":7535,"CERTIFIED-WITHDRAWN":552,"DENIED":1049,"WITHDRAWN":309,"OTHERS":1},
	{"year":2014, "visa type":"Not Specified","CERTIFIED":0,"CERTIFIED-WITHDRAWN":0,"DENIED":0,"WITHDRAWN":0,"OTHERS":0}
];

var top_20_company_data = [
	{"year":2010, "company":"MICROSOFT CORPORATION	","case_count":4507},
	{"year":2010, "company":"WIPRO LIMITED","case_count":3044},
	{"year":2010, "company":"DELOITTE CONSULTING LLP","case_count":2377},
	{"year":2010, "company":"INFOSYS TECHNOLOGIES LIMITED","case_count":2197},
	{"year":2010, "company":"FUJITSU AMERICA, INC.","case_count":1741},
	{"year":2010, "company":"IBM INDIA PRIVATE LIMITED","case_count":1514},
	{"year":2010, "company":"COGNIZANT TECHNOLOGY SOLUTIONS U.S. CORPORATION","case_count":1479},
	{"year":2010, "company":"INTEL CORPORATION","case_count":1262},
	{"year":2010, "company":"IBM CORPORATION","case_count":1235},
	{"year":2010, "company":"LARSEN & TOUBRO INFOTECH LIMITED","case_count":1213},
	{"year":2010, "company":"UST GLOBAL INC.","case_count":1133},
	{"year":2010, "company":"QUALCOMM INCORPORATED","case_count":1076},
	{"year":2010, "company":"TATA CONSULTANCY SERVICES LIMITED","case_count":1026},
	{"year":2010, "company":"CVS RX SERVICES, INC.","case_count":971},
	{"year":2010, "company":"ORACLE AMERICA, INC.","case_count":946},
	{"year":2010, "company":"GOOGLE INC.","case_count":928},
	{"year":2010, "company":"ERNST & YOUNG LLP","case_count":831},
	{"year":2010, "company":"JPMORGAN CHASE & CO.","case_count":819},
	{"year":2010, "company":"GOLDMAN, SACHS & CO.","case_count":763},
	{"year":2010, "company":"MARLABS, INC","case_count":724},
	{"year":2011, "company":"TATA CONSULTANCY SERVICES LIMITED","case_count":5416},
	{"year":2011, "company":"MICROSOFT CORPORATION","case_count":4253},
	{"year":2011, "company":"DELOITTE CONSULTING LLP","case_count":3621},
	{"year":2011, "company":"WIPRO LIMITED","case_count":3028},
	{"year":2011, "company":"COGNIZANT TECHNOLOGY SOLUTIONS U.S. CORPORATION","case_count":2721},
	{"year":2011, "company":"LARSEN & TOUBRO INFOTECH LIMITED","case_count":2105},
	{"year":2011, "company":"INTEL CORPORATION","case_count":1952},
	{"year":2011, "company":"IBM CORPORATION","case_count":1822},
	{"year":2011, "company":"HCL AMERICA, INC.","case_count":1699},
	{"year":2011, "company":"DELOITTE & TOUCHE LLP","case_count":1391},
	{"year":2011, "company":"ERNST & YOUNG U.S. LLP","case_count":1354},
	{"year":2011, "company":"GOOGLE INC.","case_count":1306},
	{"year":2011, "company":"ORACLE AMERICA, INC.","case_count":1302},
	{"year":2011, "company":"ACCENTURE LLP","case_count":1254},
	{"year":2011, "company":"QUALCOMM INCORPORATED","case_count":1226},
	{"year":2011, "company":"UST GLOBAL INC.","case_count":1209},
	{"year":2011, "company":"INFOSYS TECHNOLOGIES LIMITED","case_count":1191},
	{"year":2011, "company":"FUJITSU AMERICA, INC.","case_count":1123},
	{"year":2011, "company":"IBM INDIA PRIVATE LIMITED","case_count":2083},
	{"year":2012, "company":"INFOSYS LIMITED","case_count":15818},
	{"year":2012, "company":"WIPRO LIMITED","case_count":7182},
	{"year":2012, "company":"TATA CONSULTANCY SERVICES LIMITED","case_count":6736},
	{"year":2012, "company":"DELOITTE CONSULTING LLP","case_count":4727},
	{"year":2012, "company":"IBM INDIA PRIVATE LIMITED","case_count":4075},
	{"year":2012, "company":"MICROSOFT CORPORATION","case_count":4067},
	{"year":2012, "company":"ACCENTURE LLP","case_count":2619},
	{"year":2012, "company":"LARSEN & TOUBRO INFOTECH LIMITED","case_count":2339},
	{"year":2012, "company":"ERNST & YOUNG U.S. LLP","case_count":2314},
	{"year":2012, "company":"HCL AMERICA, INC.","case_count":2209},
	{"year":2012, "company":"PATNI AMERICAS INC.","case_count":2072},
	{"year":2012, "company":"COGNIZANT TECHNOLOGY SOLUTIONS U.S. CORPORATION","case_count":1853},
	{"year":2012, "company":"IBM CORPORATION","case_count":1837},
	{"year":2012, "company":"DELOITTE & TOUCHE LLP","case_count":1829},
	{"year":2012, "company":"GOOGLE INC.","case_count":1695},
	{"year":2012, "company":"QUALCOMM INCORPORATED","case_count":1679},
	{"year":2012, "company":"INTEL CORPORATION","case_count":1669},
	{"year":2012, "company":"ORACLE AMERICA, INC.","case_count":1632},
	{"year":2012, "company":"SATYAM COMPUTER SERVICES LIMITED","case_count":1563},
	{"year":2012, "company":"UST GLOBAL INC.","case_count":1368},
	{"year":2013, "company":"INFOSYS LIMITED","case_count":32223},
	{"year":2013, "company":"TATA CONSULTANCY SERVICES LIMITED","case_count":8790},
	{"year":2013, "company":"WIPRO LIMITED","case_count":6734},
	{"year":2013, "company":"DELOITTE CONSULTING LLP","case_count":6124},
	{"year":2013, "company":"ACCENTURE LLP","case_count":4994},
	{"year":2013, "company":"MICROSOFT CORPORATION","case_count":3902},
	{"year":2013, "company":"IBM INDIA PRIVATE LIMITED","case_count":3593},
	{"year":2013, "company":"LARSEN & TOUBRO INFOTECH LIMITED","case_count":3136},
	{"year":2013, "company":"HCL AMERICA, INC.","case_count":3013},
	{"year":2013, "company":"ERNST & YOUNG U.S. LLP","case_count":2182},
	{"year":2013, "company":"IBM CORPORATION","case_count":2180},
	{"year":2013, "company":"GOOGLE INC.","case_count":2167},
	{"year":2013, "company":"IGATE TECHNOLOGIES INC.","case_count":2059},
	{"year":2013, "company":"INTEL CORPORATION","case_count":1947},
	{"year":2013, "company":"QUALCOMM TECHNOLOGIES, INC.","case_count":1901},
	{"year":2013, "company":"DELOITTE & TOUCHE LLP","case_count":1832},
	{"year":2013, "company":"ORACLE AMERICA, INC.","case_count":1757},
	{"year":2013, "company":"COGNIZANT TECHNOLOGY SOLUTIONS U.S. CORPORATION","case_count":1704},
	{"year":2013, "company":"AMAZON CORPORATE LLC","case_count":1206},
	{"year":2013, "company":"LARSEN & TOUBRO LIMITED","case_count":1166},
	{"year":2014, "company":"INFOSYS LIMITED","case_count":23759},
	{"year":2014, "company":"TATA CONSULTANCY SERVICES LIMITED","case_count":14098},
	{"year":2014, "company":"WIPRO LIMITED","case_count":8365},
	{"year":2014, "company":"DELOITTE CONSULTING LLP","case_count":7017},
	{"year":2014, "company":"ACCENTURE LLP","case_count":5498},
	{"year":2014, "company":"IBM INDIA PRIVATE LIMITED","case_count":5029},
	{"year":2014, "company":"HCL AMERICA, INC.","case_count":4749},
	{"year":2014, "company":"LARSEN & TOUBRO INFOTECH LIMITED","case_count":3939},
	{"year":2014, "company":"MICROSOFT CORPORATION","case_count":3750},
	{"year":2014, "company":"ERNST & YOUNG U.S. LLP","case_count":3727},
	{"year":2014, "company":"IGATE TECHNOLOGIES INC.","case_count":3124},
	{"year":2014, "company":"GOOGLE INC.","case_count":2949},
	{"year":2014, "company":"INTEL CORPORATION","case_count":2506},
	{"year":2014, "company":"IBM CORPORATION","case_count":2457},
	{"year":2014, "company":"COGNIZANT TECHNOLOGY SOLUTIONS U.S. CORPORATION","case_count":2358},
	{"year":2014, "company":"TECH MAHINDRA (AMERICAS), INC.","case_count":1932},
	{"year":2014, "company":"DELOITTE & TOUCHE LLP","case_count":1628},
	{"year":2014, "company":"AMAZON CORPORATE LLC","case_count":1596},
	{"year":2014, "company":"APPLE INC.","case_count":1458},
	{"year":2014, "company":"JPMORGAN CHASE & CO.","case_count":1442}
];


var top_20_state_data = [
	{"year":2010, "state":"CA","case_count":59615},
	{"year":2010, "state":"NJ","case_count":37454},
	{"year":2010, "state":"NY","case_count":36365},
	{"year":2010, "state":"TX","case_count":28119},
	{"year":2010, "state":"IL","case_count":18367},
	{"year":2010, "state":"PA","case_count":14437},
	{"year":2010, "state":"FL","case_count":14231},
	{"year":2010, "state":"MA","case_count":14210},
	{"year":2010, "state":"VA","case_count":12347},
	{"year":2010, "state":"GA","case_count":10041},
	{"year":2010, "state":"WA","case_count":9690},
	{"year":2010, "state":"MI","case_count":9583},
	{"year":2010, "state":"MD","case_count":8824},
	{"year":2010, "state":"NC","case_count":7667},
	{"year":2010, "state":"OH","case_count":6401},
	{"year":2010, "state":"CT","case_count":4834},
	{"year":2010, "state":"MO","case_count":3319},
	{"year":2010, "state":"AZ","case_count":3263},
	{"year":2010, "state":"TN","case_count":3051},
	{"year":2010, "state":"MN","case_count":2967},
	{"year":2011, "state":"CA","case_count":62052},
	{"year":2011, "state":"NJ","case_count":42458},
	{"year":2011, "state":"NY","case_count":35350},
	{"year":2011, "state":"TX","case_count":29170},
	{"year":2011, "state":"IL","case_count":19209},
	{"year":2011, "state":"PA","case_count":16964},
	{"year":2011, "state":"MA","case_count":14960},
	{"year":2011, "state":"FL","case_count":14172},
	{"year":2011, "state":"VA","case_count":13214},
	{"year":2011, "state":"MD","case_count":13001},
	{"year":2011, "state":"GA","case_count":10427},
	{"year":2011, "state":"MI","case_count":10298},
	{"year":2011, "state":"WA","case_count":9414},
	{"year":2011, "state":"NC","case_count":8501},
	{"year":2011, "state":"OH","case_count":6157},
	{"year":2011, "state":"CT","case_count":4829},
	{"year":2011, "state":"TN","case_count":3434},
	{"year":2011, "state":"AZ","case_count":3373},
	{"year":2011, "state":"MN","case_count":3121},
	{"year":2011, "state":"MO","case_count":3035},
	{"year":2012, "state":"CA","case_count":68856},
	{"year":2012, "state":"NJ","case_count":53791},
	{"year":2012, "state":"TX","case_count":48365},
	{"year":2012, "state":"NY","case_count":35990},
	{"year":2012, "state":"IL","case_count":21526},
	{"year":2012, "state":"PA","case_count":19685},
	{"year":2012, "state":"MA","case_count":17345},
	{"year":2012, "state":"VA","case_count":14711},
	{"year":2012, "state":"FL","case_count":13986},
	{"year":2012, "state":"MD","case_count":13971},
	{"year":2012, "state":"MI","case_count":12959},
	{"year":2012, "state":"NC","case_count":11195},
	{"year":2012, "state":"GA","case_count":10851},
	{"year":2012, "state":"WA","case_count":9720},
	{"year":2012, "state":"OH","case_count":6815},
	{"year":2012, "state":"CT","case_count":5300},
	{"year":2012, "state":"MO","case_count":3457},
	{"year":2012, "state":"TN","case_count":3415},
	{"year":2012, "state":"AZ","case_count":3389},
	{"year":2012, "state":"MN","case_count":3248},
	{"year":2013, "state":"CA","case_count":74634},
	{"year":2013, "state":"TX","case_count":66761},
	{"year":2013, "state":"NJ","case_count":53977},
	{"year":2013, "state":"NY","case_count":34291},
	{"year":2013, "state":"IL","case_count":24796},
	{"year":2013, "state":"PA","case_count":21255},
	{"year":2013, "state":"MA","case_count":16069},
	{"year":2013, "state":"MD","case_count":15806},
	{"year":2013, "state":"VA","case_count":14681},
	{"year":2013, "state":"MI","case_count":14033},
	{"year":2013, "state":"FL","case_count":12216},
	{"year":2013, "state":"GA","case_count":11301},
	{"year":2013, "state":"WA","case_count":10328},
	{"year":2013, "state":"NC","case_count":10155},
	{"year":2013, "state":"OH","case_count":7109},
	{"year":2013, "state":"CT","case_count":4939},
	{"year":2013, "state":"MO","case_count":3446},
	{"year":2013, "state":"TN","case_count":3399},
	{"year":2013, "state":"MN","case_count":3227},
	{"year":2013, "state":"AZ","case_count":3135},
	{"year":2014, "state":"CA","case_count":89259},
	{"year":2014, "state":"TX","case_count":72892},
	{"year":2014, "state":"NJ","case_count":67321},
	{"year":2014, "state":"NY","case_count":39252},
	{"year":2014, "state":"IL","case_count":28924},
	{"year":2014, "state":"PA","case_count":23005},
	{"year":2014, "state":"MD","case_count":21678},
	{"year":2014, "state":"MA","case_count":18303},
	{"year":2014, "state":"MI","case_count":18047},
	{"year":2014, "state":"VA","case_count":17844},
	{"year":2014, "state":"FL","case_count":14369},
	{"year":2014, "state":"NC","case_count":14070},
	{"year":2014, "state":"GA","case_count":13887},
	{"year":2014, "state":"WA","case_count":12001},
	{"year":2014, "state":"OH","case_count":8002},
	{"year":2014, "state":"CT","case_count":5776},
	{"year":2014, "state":"MO","case_count":4188},
	{"year":2014, "state":"MN","case_count":3998},
	{"year":2014, "state":"TN","case_count":3981},
	{"year":2014, "state":"CO","case_count":3586}
];


var top_20_city_data = [
	{"year":2010, "city":"NEW YORK","case_count":23125},
	{"year":2010, "city":"HOUSTON","case_count":7841},
	{"year":2010, "city":"CHICAGO","case_count":6371},
	{"year":2010, "city":"EDISON","case_count":5702},
	{"year":2010, "city":"PHILADELPHIA","case_count":5415},
	{"year":2010, "city":"SUNNYVALE","case_count":4972},
	{"year":2010, "city":"REDMOND","case_count":4808},
	{"year":2010, "city":"LOS ANGELES","case_count":4403},
	{"year":2010, "city":"SAN JOSE","case_count":4189},
	{"year":2010, "city":"SANTA CLARA","case_count":3782},
	{"year":2010, "city":"PLANO","case_count":3771},
	{"year":2010, "city":"BOSTON","case_count":3385},
	{"year":2010, "city":"EAST BRUNSWICK","case_count":3374},
	{"year":2010, "city":"SAN FRANCISCO","case_count":3340},
	{"year":2010, "city":"DALLAS","case_count":3301},
	{"year":2010, "city":"ATLANTA","case_count":3235},
	{"year":2010, "city":"CAMBRIDGE","case_count":3139},
	{"year":2010, "city":"SAN DIEGO","case_count":2853},
	{"year":2010, "city":"MIAMI","case_count":2743},
	{"year":2010, "city":"IRVING","case_count":2419},
	{"year":2011, "city":"NEW YORK","case_count":23079},
	{"year":2011, "city":"HOUSTON","case_count":7908},
	{"year":2011, "city":"PHILADELPHIA","case_count":7564},
	{"year":2011, "city":"EDISON","case_count":7398},
	{"year":2011, "city":"CHICAGO","case_count":7238},
	{"year":2011, "city":"ROCKVILLE","case_count":6116},
	{"year":2011, "city":"SUNNYVALE","case_count":5745},
	{"year":2011, "city":"SAN JOSE","case_count":4784},
	{"year":2011, "city":"SANTA CLARA","case_count":4609},
	{"year":2011, "city":"REDMOND","case_count":4600},
	{"year":2011, "city":"SAN FRANCISCO","case_count":3704},
	{"year":2011, "city":"BOSTON","case_count":3569},
	{"year":2011, "city":"ATLANTA","case_count":3562},
	{"year":2011, "city":"LOS ANGELES","case_count":3475},
	{"year":2011, "city":"PLANO","case_count":3445},
	{"year":2011, "city":"EAST BRUNSWICK","case_count":3438},
	{"year":2011, "city":"DALLAS","case_count":3205},
	{"year":2011, "city":"IRVING","case_count":3198},
	{"year":2011, "city":"RTP","case_count":3171},
	{"year":2011, "city":"CAMBRIDGE","case_count":2960},
	{"year":2012, "city":"NEW YORK","case_count":23809},
	{"year":2012, "city":"PLANO","case_count":18150},
	{"year":2012, "city":"EDISON","case_count":9440},
	{"year":2012, "city":"HOUSTON","case_count":9108},
	{"year":2012, "city":"PHILADELPHIA","case_count":8917},
	{"year":2012, "city":"CHICAGO","case_count":8643},
	{"year":2012, "city":"EAST BRUNSWICK","case_count":7745},
	{"year":2012, "city":"ROCKVILLE","case_count":7410},
	{"year":2012, "city":"SUNNYVALE","case_count":5515},
	{"year":2012, "city":"SAN JOSE","case_count":5315},
	{"year":2012, "city":"SAN FRANCISCO","case_count":5040},
	{"year":2012, "city":"SANTA CLARA","case_count":4774},
	{"year":2012, "city":"DALLAS","case_count":4623},
	{"year":2012, "city":"BOSTON","case_count":4549},
	{"year":2012, "city":"REDMOND","case_count":4445},
	{"year":2012, "city":"RTP","case_count":4322},
	{"year":2012, "city":"CAMBRIDGE","case_count":4016},
	{"year":2012, "city":"IRVING","case_count":3996},
	{"year":2012, "city":"SAN DIEGO","case_count":3983},
	{"year":2012, "city":"ATLANTA","case_count":3946},
	{"year":2013, "city":"PLANO","case_count":34641},
	{"year":2013, "city":"NEW YORK","case_count":22683},
	{"year":2013, "city":"CHICAGO","case_count":11264},
	{"year":2013, "city":"PHILADELPHIA","case_count":10244},
	{"year":2013, "city":"EDISON","case_count":9460},
	{"year":2013, "city":"ROCKVILLE","case_count":9372},
	{"year":2013, "city":"HOUSTON","case_count":8560},
	{"year":2013, "city":"EAST BRUNSWICK","case_count":7196},
	{"year":2013, "city":"SAN JOSE","case_count":6534},
	{"year":2013, "city":"SUNNYVALE","case_count":6219},
	{"year":2013, "city":"SANTA CLARA","case_count":6105},
	{"year":2013, "city":"RTP","case_count":5415},
	{"year":2013, "city":"DALLAS","case_count":5322},
	{"year":2013, "city":"SAN FRANCISCO","case_count":5271},
	{"year":2013, "city":"FREMONT","case_count":5011},
	{"year":2013, "city":"BOSTON","case_count":4957},
	{"year":2013, "city":"IRVING","case_count":4932},
	{"year":2013, "city":"SAN DIEGO","case_count":4602},
	{"year":2013, "city":"REDMOND","case_count":4463},
	{"year":2013, "city":"MOUNTAIN VIEW","case_count":3955},
	{"year":2014, "city":"PLANO","case_count":34641},
	{"year":2014, "city":"NEW YORK","case_count":22683},
	{"year":2014, "city":"CHICAGO","case_count":11264},
	{"year":2014, "city":"PHILADELPHIA","case_count":10244},
	{"year":2014, "city":"EDISON","case_count":9460},
	{"year":2014, "city":"ROCKVILLE","case_count":9372},
	{"year":2014, "city":"HOUSTON","case_count":8560},
	{"year":2014, "city":"EAST BRUNSWICK","case_count":7196},
	{"year":2014, "city":"SAN JOSE","case_count":6534},
	{"year":2014, "city":"SUNNYVALE","case_count":6219},
	{"year":2014, "city":"SANTA CLARA","case_count":6105},
	{"year":2014, "city":"RTP","case_count":5415},
	{"year":2014, "city":"DALLAS","case_count":5322},
	{"year":2014, "city":"SAN FRANCISCO","case_count":5271},
	{"year":2014, "city":"FREMONT","case_count":5011},
	{"year":2014, "city":"BOSTON","case_count":4957},
	{"year":2014, "city":"IRVING","case_count":4932},
	{"year":2014, "city":"SAN DIEGO","case_count":4602},
	{"year":2014, "city":"REDMOND","case_count":4463},
	{"year":2014, "city":"MOUNTAIN VIEW","case_count":3955}
];





