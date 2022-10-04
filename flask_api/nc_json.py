from cmath import sin
import datetime, math
from get_province import GetProvince
from netCDF4 import Dataset
from shapely.geometry import Point
from shapely.geometry.polygon import Polygon

data_index = 'spei'

data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\spei01.nc")

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]

grid_size = (lat[1]-lat[0])/2

values = data.variables['spei']

time = data.variables['time']

unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"

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

def get_index(date):
    index = 0
    list_index = []
    str_date = '%Y-%m'
    t1 = time[:][1]- time[:][0]
    if (time[:][1]- time[:][0] >= 365):
        str_date = '%Y'
    
    for i in time[:] :
        date_i = date_start + datetime.timedelta(days=math.ceil(i))
        temp = str(date_i.strftime(str_date))
        if( str(date_i.strftime(str_date)) in date):
            list_index.append(index)
        index += 1 
    return list_index

def convert_list_to_tuple(list): 
    temp = []
    for i in list:
        temp.append(tuple(i))
    return temp

def convert_nc_json(province, date, index):

    data_form = {
        "type": "FeaturesCollection",
        "fetures": []
    }
    get_data(index)

    date_index = get_index(date)
    shp = GetProvince(province) # shape file of province
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
            if((polygon_province.contains(point) or (shortestDistance <= math.sin(math.pi/4)*2*grid_size)) and values[date_index[0], ind_lat, ind_lon] != '--'):
                count += 1
                temp = values[date_index[0], ind_lat, ind_lon].tolist()
                print(point, date, date_index[0], values[date_index[0], ind_lat, ind_lon])

                grid ={
                    "type":"Feature",
                    "properties": {
                        "grid_id": count,
                        "time": date,
                        "lon": lon_nc,
                        "lat": lat_nc,
                        "index": "{:.3f}".format(temp)
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

# convert_nc_json('Bangkok Metropolis', '1902-02')

