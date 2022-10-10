from datetime import date, timedelta
import calendar
date_str = 'Tue Jan 10 2006 00:00:00 GMT+0700,Wed Feb 15 2006 00:00:00 GMT+0700 '
month = {month: index for index, month in enumerate(calendar.month_abbr) if month}
temp_date = date_str.split(' ')
sdate = date(int(temp_date[3]), month[temp_date[1]], int(temp_date[2]))   # start date
edate = date(int(temp_date[8]), month[temp_date[6]], int(temp_date[7]))   # end date
print(sdate)
print(edate)
delta = edate - sdate       # as timedelta
day_list = []
for i in range(delta.days + 1):
    day = sdate + timedelta(days=i)
    day_list.append(day.strftime('%Y-%m'))
temp = list(set(day_list))
print(month)