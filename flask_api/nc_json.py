from cmath import sin
import math, calendar,json
from get_province import GetProvince
from netCDF4 import Dataset
from shapely.geometry import Point
from shapely.geometry.polygon import Polygon
from datetime import date, timedelta, datetime

data_index = 'spei'

data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\spei01.nc")

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]

grid_size = (lat[1]-lat[0])/2

values = data.variables['spei']

time = data.variables['time']

unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"
str_date = '%Y-%m-%d'
date_start = datetime.strptime(start_nc, "%Y-%m-%d")

def get_data(index):
    global data_index, data, lat, lon, grid_size, values, time, unit_nc, start_nc, date_start
    if (index == 'cdd_mpi'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\cddETCCDI_yr_MPI-ESM-MR_rcp45_r1i1p1_2006-2100.nc")
        values = data.variables['cddETCCDI']

    elif(index == 'spei'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\spei01.nc")
        values = data.variables['spei']
    elif(index == 'cdd_era'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\cddETCCDI_yr_ERAInterim_historical_r1i1p1_1979-2012.nc")
        values = data.variables['cddETCCDI']
        
    lat = data.variables['lat'][:]
    lon = data.variables['lon'][:]

    grid_size = (lat[1]-lat[0])/2


    time = data.variables['time']

    unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
    start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"
    if (len(start_nc) > 10):
        start_nc = start_nc.split(' ')[0].strip() 

    date_start = datetime.strptime(start_nc, "%Y-%m-%d")

def get_index(date): #list of date 
    
    index = 0
    list_index = []
    
    for i in time[:] :
        date_i = date_start + timedelta(days=math.ceil(i)) # day in nc file it have .5 day
        tmp = str(date_i.strftime(str_date))
        if( str(date_i.strftime(str_date)) in date):
            list_index.append(index)
        index += 1 
    return list_index

def get_array_day(dates):
    # Tue Jan 10 2006 00:00:00 GMT+0700,Wed Feb 15 2006 00:00:00 GMT+0700 
    temp_date = dates.split(' ')
    day_list = []

    if(len(temp_date) == 1):
        time = datetime.strptime(dates, '%Y-%m')
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

def convert_list_to_tuple(list): 
    temp = []
    for i in list:
        temp.append(tuple(i))
    return temp

def convert_nc_json(province, date, index):
    global str_date

    str_date = '%Y-%m'

    #check frequency of data
    get_data(index)
    xxx = time[:][1]- time[:][0]
    if (time[:][1]- time[:][0] >= 365):
        str_date = '%Y'

    load_data = open(rf'./data/{index}/{province}.json')
    data_province = json.load(load_data)

    day_list = get_array_day(date)

    date_index = get_index(day_list)
    temp_data = data_province
    for ind,grid_data in enumerate(data_province):
        value = 0
        for date in date_index:
            if (grid_data['properties']['time_index'][str(date)] != '--'):
                value += float(grid_data['properties']['time_index'][str(date)])
        value /= len(date_index)
        temp_data[ind]['properties']['index'] = value

        # delete time_index when send data from api 
        temp_data[ind]['properties']['time_index'] = False
    temp_data[len(data_province)//2]['properties']['time_index'] = True

    return temp_data


