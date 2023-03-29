const dataSelection = {
    "province": ["Amnat Charoen", "Ang Thong", 
                "Bangkok Metropolis", "Bueng Kan", "Buri Ram", 
                "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", 
                "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", 
                "Lampang", "Lamphun", "Loei", "Lop Buri", 
                "Mae Hong Son", "Maha Sarakham", "Mukdahan", 
                "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lam Phu", "Nong Khai", "Nonthaburi", 
                "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", 
                "Ranong", "Ratchaburi", "Rayong", "Roi Et", 
                "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Saraburi", "Satun", "Si Sa Ket", "Sing Buri", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", 
                "Tak", "Trang", "Trat", 
                "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", 
                "Yala", "Yasothon"],
    "country" : ["Brunei Darussalam", "Cambodia", "Malaysia", "Indonesia", "Laos People's Democratic Republic", "Myanmar","Philippines", "Thailand", "Timor-Leste", "Vietnam", "Singapore"],
    "data_provider" : ["ecearth", "hadgem2", "ensemble", "mpi"],
    "type_index" : ["SPI", "indices"],
    "type_value" : ["RCP4.5", "RCP8.5"],
    // "index_name" : ["CDD", "ID0", "TXn", "TMINmean", "WSDI", "RX5day", "R99p", "CWD", "TR25", "SU35", "PRCPTOT", "TR20", "TMAXmean", "R20mm", "TMEANmean", "FD16", "RX1day", "TX10P", "SU25", "TNx", "FD0", "TXx", "DTR", "TX90P", "TN90P", "R10mm", "TN10P", "SDII", "TNn", "R95p", "R25mm", "CSDI"],
    "index_name" : ['CDD','CSDI','CWD','DTR','FD0','FD16','ID0','PRCPTOT','R10mm', 'R20mm','R25mm', 'R95p','R99p','RX1day','RX5day','SDII','SU25','SU35','TMAXmean','TMEANmean','TMINmean','TN10P','TN90P', 'TNn','TNx','TR20','TR25','TX10P','TX90P','TXn','TXx','WSDI'],
    "SPI_name" : ["1 month", "3 month", "6  month", "9  month", "12  month", "24  month", "36  month", "48  month", "60  month"]
}

export default dataSelection