from netCDF4 import Dataset
import pandas as pd
import numpy as np

data = Dataset(r"D:\Coding\JavaScript\REACT_Native\Data_Project\spei01.nc", 'r')

lat = data.variables['lat'][:]
lon = data.variables['lon'][:]
# print(lat, lon)

temp = data.variables['spei']
print(lon[0])
print(lat[0])
print(temp[-21.25,-175.25][0])