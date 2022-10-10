from cmath import sin
import datetime, math, calendar
from get_province import GetProvince
from netCDF4 import Dataset
from shapely.geometry import Point
from shapely.geometry.polygon import Polygon
from datetime import date, timedelta

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
date_start = datetime.datetime.strptime(start_nc, "%Y-%m-%d")

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

    date_start = datetime.datetime.strptime(start_nc, "%Y-%m-%d")

def get_index(date): #list of date 
    
    index = 0
    list_index = []
    
    for i in time[:] :
        date_i = date_start + datetime.timedelta(days=math.ceil(i)) # day in nc file it have .5 day
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
        temp = day_list.append(dates)
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
    if (time[:][1]- time[:][0] >= 365):
        str_date = '%Y'

    data_form = {
        "type": "FeaturesCollection",
        "fetures": []
    }
    get_data(index)
    day_list = get_array_day(date)

    date_index = get_index(day_list)
    shp = GetProvince(province) 
    
    temp_polygon = []
    polygon = []

    if (province == 'all'):
        for i in shp['features']['geometry']['coordinates']:
            temp_polygon.append(convert_list_to_tuple(i))
        for i in temp_polygon:
            for j in i:
                polygon.append(j)

    elif(shp["features"]['geometry']['type'] == 'Polygon'): 
        polygon = convert_list_to_tuple(shp['features']['geometry']['coordinates'][0])
    else :
        for i in shp['features']['geometry']['coordinates']:
            temp_polygon.append(convert_list_to_tuple(i[0])) 
        for i in temp_polygon:
            for j in i:
                polygon.append(j)

    polygon_province = Polygon(polygon)

    count = 0
    for ind_lat,lat_nc in enumerate(lat):

        for ind_lon,lon_nc in enumerate(lon):

            point = Point(lon_nc, lat_nc)
            shortestDistance = polygon_province.distance(point)
            value = 0
            if((polygon_province.contains(point) or (shortestDistance <= math.sin(math.pi/4)*2*grid_size))):
                #and values[date_index[0], ind_lat, ind_lon] != '--'
                count += 1
                if (len(date_index) == 1 and values[date_index[0], ind_lat, ind_lon] != '--'):
                    value = values[date_index[0], ind_lat, ind_lon].tolist()
                elif (len(date_index) > 1) :
                    temp_index = 0
                    for day in date_index:
                        if (values[day, ind_lat, ind_lon] != '--'):
                            temp_index += values[day, ind_lat, ind_lon].tolist()
                    value = temp_index/len(date_index)
                        
                print(point, value)

                grid ={
                    "type":"Feature",
                    "properties": {
                        "grid_id": count,
                        "time": date,
                        "lon": lon_nc,
                        "lat": lat_nc,
                        "index": "{:.3f}".format(value)
                    },
                    "geometry":{
                        "type": "Polygon",
                        "coordinates":[
                            [
                                [lon_nc - grid_size, lat_nc - grid_size],
                                [lon_nc + grid_size, lat_nc - grid_size],
                                [lon_nc + grid_size, lat_nc + grid_size],
                                [lon_nc - grid_size, lat_nc + grid_size],
                                [lon_nc - grid_size, lat_nc - grid_size] 
                            ]
                           
                        ]
                    }
                }
                data_form["fetures"].append(grid)
    return data_form["fetures"]


