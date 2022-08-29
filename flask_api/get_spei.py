from netCDF4 import Dataset
import pandas as pd
import numpy as np

data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\spei01.nc", 'r')

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]
# print(lat, lon)

temp = data.variables['spei']

def getSpei():
    rows = []
    for i in range(len(lat)):
        if (i == 1):
            break
        for j in range(len(lon)):
            dic = {
                'lat': 0,
                'lon': 0,
                'spei': 0
            }
            if (j ==10):
                break
            prcp = temp[1,lat[i],lon[j]]
            # temp1 = [lat[i], lon[j], prcp]
            dic['lat'] = lat[i]
            dic['lon'] = lon[j]
            dic['spei'] = prcp.data
            rows.append(dic)
            # print(lat[i],lon[j],prcp,i,j)
    return rows