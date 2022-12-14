import calendar,json,math
from datetime import date, timedelta, datetime
from dateutil import relativedelta
def get_array_day(dates):
    # Tue Jan 10 2006 00:00:00 GMT+0700,Wed Feb 15 2006 00:00:00 GMT+0700 
    temp_date = dates.split(' ')
    day_list = []

    if(len(temp_date) == 1):
        time = datetime.strptime(dates, '%Y')
        temp = day_list.append(time.strftime(str_date))
        return day_list
    else:
        month = {month: index for index, month in enumerate(calendar.month_abbr) if month}
        sdate = date(int(temp_date[3]), month[temp_date[1]], int(temp_date[2]))   # start date
        edate = date(int(temp_date[8]), month[temp_date[6]], int(temp_date[7]))   # end date

        delta = edate - sdate       # as timedelta
        for i in range(delta.days + 1):
            day = sdate + timedelta(days=i)
            day_list.append(day.strftime(str_date))
            temp = list(set(day_list))
        return temp

def convert_nc_json(province, date, index, index_folder):
    global str_date

    str_date = '%Y'
# D:\Coding\JavaScript\REACT_Native\Data_Project\Data_Project\
# C:\Users\Administrator\Desktop\Data_Project\
    load_data = open(rf'C:\Users\Administrator\Desktop\Data_Project\{index_folder}/{index}/{province}.json')
    data_province = json.load(load_data)

    # it used to check string date format
    if (data_province['properties']['date_type'] == 'year'):
        str_date = '%Y'
    else:
        str_date = '%Y-%m'

    day_list = get_array_day(date)

    temp_data = data_province['fetures']
       
    temp_time_series = {}
    for ind,grid_data in enumerate(data_province['fetures']):
        value = 0
        for day in day_list:
            if (day not in temp_time_series.keys()):
                temp_time_series[day] = []
            if(index_folder != 'spi'):
                str_index_time = str(int(day)-int(data_province['properties']['start_time']))
                if (grid_data['properties']['time_index'][str_index_time] != '--'):
                    value += float(grid_data['properties']['time_index'][str_index_time])
                    temp_time_series[day].append(float(grid_data['properties']['time_index'][str_index_time]))
            else :
                date_input = datetime.strptime(day, "%Y-%m")
                date_start = datetime.strptime(data_province['properties']['start_time'], "%Y-%m-%d")
                r = relativedelta.relativedelta(date_input, date_start)
                index_month = r.months + (12*r.years)
                
                if (grid_data['properties']['time_index'][str(index_month)] != '--'):
                    value += float(grid_data['properties']['time_index'][str(index_month)])
                    temp_time_series[day].append(float(grid_data['properties']['time_index'][str(index_month)]))

        value /= len(day_list)
        temp_data[ind]['properties']['index'] = value

        # delete time_index when send data from api 
        temp_data[ind]['properties']['time_index'] = False

    time_series_data = []
    for date in temp_time_series.keys():
        time_series_data.append({"date": date, 'index': sum(temp_time_series[date])/len(temp_time_series[date])})
    index_center = len(data_province['fetures'])//2
    temp_data[index_center]['properties']['time_index'] = True
    # temp_data[index_center]['properties']['time_series'] = time_series_data
    temp_data[index_center]['properties']['time_series'] = sorted(time_series_data, key=lambda i: i['date'])
    
    # temp_data.append(time_series_data)
    test = temp_data[index_center]['properties']['time_series']

    return temp_data


