import datetime, json
from get_province import GetProvince
import numpy as np
import pandas as pd
from netCDF4 import Dataset
from shapely.geometry import Point
from shapely.geometry.polygon import Polygon


data = Dataset(r"C:\Users\Administrator\Desktop\Project_I\flask_api\spei01.nc")

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]

grid_size = (lat[1]-lat[0])/2

values = data.variables['spei']

time = data.variables['time']

unit_nc = time.units.split('since')[0].strip() # "days since 1900-1-1"
start_nc = time.units.split('since')[1].strip() # "days since 1900-1-1"

date_start = datetime.datetime.strptime(start_nc, "%Y-%m-%d")



def get_index(date):
    index = 0
    list_index = []
    for i in time[:]:
        date_i = date_start + datetime.timedelta(days=i)
        if( str(date_i.strftime('%Y-%m')) in date):
            list_index.append(index)
        index += 1 
    return list_index

def convert_list_to_tuple(list):
    temp = []
    for i in list:
        temp.append(tuple(i))
    return temp

def convert_nc_json(province, date):

    data_form = {
        "type": "FeaturesCollection",
        "fetures": []
    }

    date_index = get_index(date)
    shp = GetProvince(province) # shape file of province
    polygon = []
    tttt = len(shp['features']['geometry']['coordinates'])
    if(len(shp['features']['geometry']['coordinates']) == 1):
        polygon = convert_list_to_tuple(shp['features']['geometry']['coordinates'][0])
    else :
        for i in shp['features']['geometry']['coordinates']:
            polygon.append(convert_list_to_tuple(i[0])) 

    polygon_province = Polygon(polygon)
    count = 0

    for ind_lat,lat_nc in enumerate(lat):

        for ind_lon,lon_nc in enumerate(lon):

            point = Point(lon_nc, lat_nc)

            if(polygon_province.contains(point)):

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

