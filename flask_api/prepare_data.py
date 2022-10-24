from cmath import sin
import datetime, math, calendar, json
from get_province import GetProvince
from netCDF4 import Dataset
from shapely.geometry import Point, MultiPolygon
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

def convert_nc_json(province, index):
    global str_date

    str_date = '%Y-%m'
    #check frequency of data
    if (time[:][1]- time[:][0] >= 365):
        str_date = '%Y'

    data_form = {
        "type": "FeaturesCollection",
        "fetures": []
    }
    # update data etc. lat lon index name 
    get_data(index)

    # get data of shapefile 
    shp = GetProvince(province) 

    # create polygon of province from shapefile 
    if(shp["features"]['geometry']['type'] == 'Polygon' ):
        polygon_province = Polygon(shp['features']['geometry']['coordinates'][0])
    else :
        see_coordinates = shp['features']['geometry']['coordinates']
        list_polygon = []
        for polygon in shp['features']['geometry']['coordinates']:
            #if province == 'all' must use polygon not polygon[0]
            list_polygon.append(Polygon(polygon))
        polygon_province = MultiPolygon(list_polygon)

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

                see_intersect = intersect.normalize().wkt

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
    return data_form["fetures"]

f_load = open(r'province.json')
data_province = json.load(f_load)
province_problem = ['Krabi', 'Phangnga', 'Ranong', 'Satun','Surat Thani', 'Trang', 'Trat', 'Songkhla']

# for i in province_problem:
#     name = i
#     data_json = convert_nc_json(name, 'cdd_mpi')
#     json_object = json.dumps(data_json, indent=4)
    
#     # Writing to sample.json  , 'cdd_era', 'spei'
#     with open(f"./data_project/fixed_error/{name}.json", "w") as outfile:
#         outfile.write(json_object)

for j in ['cdd_era', 'spei','cdd_mpi']:
    # for i in data_province['features']:
    # name = i['properties']['name']
    data_json = convert_nc_json('all', j)
    json_object = json.dumps(data_json, indent=4)
    
    # Writing to sample.json  , 'cdd_era', 'spei'
    with open(f"./data_project/{j}/all.json", "w") as outfile:
        outfile.write(json_object)

