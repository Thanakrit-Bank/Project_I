from cmath import sin
import datetime, math, calendar, json
from netCDF4 import Dataset
from shapely.geometry import Point, MultiPolygon
from shapely.geometry.polygon import Polygon
from datetime import date, timedelta, datetime
import sys
sys.path.insert(0, r'D:\Project\Mix_Project\Project_I\flask_api')
from get_province import GetProvince

data_index = 'rcp45_PRCPTOT'

data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\_SPI\ensemble85_spi_m1.nc")

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]

grid_size = (lat[1]-lat[0])/2

values = data.variables['m1']

time = data.variables['time'] # time from indices_bak is floating

unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"
str_date = '%Y-%m-%d'
date_start = datetime.strptime(start_nc, "%Y-%m-%d")

def get_data(index):
    global data_index, data, lat, lon, grid_size, values, time, unit_nc, start_nc, date_start
    if (index == 'rcp45_PRCPTOT'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\indices_bak\ensemble_rcp45_PRCPTOT.nc")
        values = data.variables['PRCPTOT']
        test = values[0,16,9]
    elif(index == 'rcp45_TMEANmean'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\indices_bak\ensemble_rcp45_TMEANmean.nc")
        values = data.variables['TMEANmean']
    elif(index == 'rcp85_PRCPTOT'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\indices_bak\ensemble_rcp85_PRCPTOT.nc")
        values = data.variables['PRCPTOT']
    elif(index == 'rcp85_TMEANmean'):
        data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\indices_bak\ensemble_rcp85_TMEANmean.nc")
        values = data.variables['TMEANmean']
    else:
        rcp_type = index.split('_')[0]
        index_type = index.split('_')[-1]
        data = Dataset(rf"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\_SPI\{index}.nc")
        # data = Dataset(rf"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\_SPI\ensemble_{rcp_type}_{index_type}.nc")
        values = data.variables[index_type]

    lat = data.variables['lat'][:]
    lon = data.variables['lon'][:]

    grid_size = (lat[1]-lat[0])/2


    time = data.variables['time'] # time from indices_bak is floating
    xxx = time[:][1]
    unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
    start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"
    # if (len(start_nc) > 10):
    #     start_nc = start_nc.split(' ')[0].strip() 

    date_start = datetime.strptime(start_nc, "%Y-%m-%d")

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

def convert_nc_json(province, index):
    global str_date

   

    data_form = {
        "type": "FeaturesCollection",
        "properties": {
                        "date_type": "month",
                        "start_time": date_start.strftime("%Y-%m-%d"),
                    },
        "fetures": []
    }
    # update data etc. lat lon index name 
    get_data(index)

    # get data of shapefile 
    shp = GetProvince(province) 

    # create polygon of province from shapefile for each province
    if(shp["features"][0]['geometry']['type'] == 'Polygon' ):
        polygon_province = Polygon(shp['features'][0]['geometry']['coordinates'][0])
    else :
        see_coordinates = shp['features'][0]['geometry']['coordinates']
        list_polygon = []
        for polygon in shp['features'][0]['geometry']['coordinates']:
            #if province == 'all' must use polygon not polygon[0]
            list_polygon.append(Polygon(polygon[0]))
        polygon_province = MultiPolygon(list_polygon)

    ### create polygon of province from shapefile for all province    
    # if(shp["features"]['geometry']['type'] == 'Polygon' ):
    #     polygon_province = Polygon(shp['features']['geometry']['coordinates'][0])
    # else :
    #     see_coordinates = shp['features']['geometry']['coordinates']
    #     list_polygon = []
    #     for polygon in shp['features']['geometry']['coordinates']:
    #         #if province == 'all' must use polygon not polygon[0]
    #         list_polygon.append(Polygon(polygon))
    #     polygon_province = MultiPolygon(list_polygon)

    

    see_polygon_province = polygon_province.normalize().wkt

    count = 0
    #loop for check each point which intersect in polygon province 
    for ind_lat,lat_nc in enumerate(lat):
        for ind_lon,lon_nc in enumerate(lon):
            value = {}
            #create polygon of grid cell for check intersection with shapefile 
            grid_cell = [
                            [lon_nc - grid_size, lat_nc - grid_size],
                            [lon_nc + grid_size, lat_nc - grid_size],
                            [lon_nc + grid_size, lat_nc + grid_size],
                            [lon_nc - grid_size, lat_nc + grid_size],
                            [lon_nc - grid_size, lat_nc - grid_size] 
                        ]

            polygon_grid = Polygon(grid_cell)
            
            # check intersection with shapely module 
            if(polygon_province.intersects(polygon_grid)):

                count += 1
                # insert pairs of values of index and index of date  
                for i, date_index in enumerate(time[:]):
                    temp = values[i, ind_lat, ind_lon]
                    value[i] = "{:.3f}".format(temp)

                intersect = polygon_province.intersection(polygon_grid)  

                list_coordinates = []
                # format coordinate to form of geojson 
                if(intersect.geom_type == 'Polygon'):
                    for i in list(intersect.exterior.coords):
                        list_coordinates.append(list(i))
                else :
                    for i in intersect:
                        temp = []
                        for j in list(i.exterior.coords):
                            temp.append(list(j))
                        list_coordinates.append(temp)

                grid ={
                    "type":"Feature",
                    "properties": {
                        "grid_id": count,
                        "time_index": value
                    },
                    "geometry":{
                        "type": intersect.geom_type,
                        "coordinates":[
                            list_coordinates
                        ]
                    }
                }
                data_form["fetures"].append(grid)
    return data_form

f_load = open(r'province.json')
data_province = json.load(f_load)
import os

#get name of index in folder "indices_bak" 
path = r"C:\Users\s6201\Downloads\Data_Project\data_project\ensemble\_SPI"
location_index = path.split('\\')[-2]
index_type = path.split('\\')[-1]
dir_list = os.listdir(path)

### create file each province
for folder_name in dir_list:
    print(folder_name)
    if(folder_name != 'monthly'):
        name_index = folder_name.split('.')[0].split('_')
        # name_subfolder = name_index[1]+"_"+name_index[2]
        name_subfolder = folder_name.split('.')[0]
        os.mkdir(f"D:\Coding\JavaScript\REACT_Native\Data_Project\Data_Project\SPI\{name_subfolder}")
        num_pro = 0
        for i in data_province['features']:
            num_pro += 1
            print(num_pro)
            name_province = i['properties']['name']
            data_json = convert_nc_json(name_province, name_subfolder)
            json_object = json.dumps(data_json, indent=4)
            # Writing to sample.json  , 'cdd_era', 'spei'
            with open(f"D:\Coding\JavaScript\REACT_Native\Data_Project\Data_Project\SPI\{name_subfolder}\{name_province}.json", "w") as outfile:
                outfile.write(json_object)

### create json file all province
# for folder_name in dir_list:
#     print(folder_name)
#     name_subfolder = folder_name.split('.')[0]
#     if(folder_name != 'monthly'):
#         os.mkdir(f"D:\Coding\JavaScript\REACT_Native\Data_Project\Data_Project\SPI\{name_subfolder}")
#         name_index = folder_name.split('.')[0].split('_')[-1]
#         num_pro = 0
#         data_json = convert_nc_json('all', name_subfolder)
#         json_object = json.dumps(data_json, indent=4)
#         with open(f"D:\Coding\JavaScript\REACT_Native\Data_Project\Data_Project\SPI\{name_subfolder}\\all.json", "w") as outfile:
#             outfile.write(json_object)
