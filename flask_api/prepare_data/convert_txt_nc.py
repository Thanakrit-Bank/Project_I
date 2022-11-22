def get_data_index(folder_name ,index_data):
    data_index = open(rf"D:\Coding\JavaScript\REACT_Native\Data_Project\data\_SPI\{folder_name}", "r")
    index_formated = []
    data_index_split = data_index.read().split('\n')[:-1]
    date_list = []
    mont = -1
    for i in range(len(data_index_split)):
        data_split_t = data_index_split[i].split('\t')
        # date_list.append(data_split_t[0][:4]+"/"+data_split_t[1])
        # date_list.append(float(data_split_t[0])+(float(data_split_t[1])*0.1))
        mont += 1
        date_list.append(float(mont))
        temp = []
        for x in index_data:
            if(data_split_t[x+1] == 'NA' or data_split_t[x+1] == '' or data_split_t[x+1] == ' '):
                temp.append(0)
            else:
                temp.append(float(data_split_t[x+1]))
        index_formated.append(temp)
    return [index_formated, date_list]


def get_data_latlon():
    data_lonlat = open(r"D:\Coding\JavaScript\REACT_Native\Data_Project\data\lonlat_rcm_sea.txt", "r")
    data_lat = []
    data_lon = []
    data_lonlat_split = data_lonlat.read().split('\n')[:-1]

    for i in range(len(data_lonlat_split)):
        lon_lat = [float(j) for j in data_lonlat_split[i].split('\t')]
        data_lon.append(lon_lat[0])
        data_lat.append(lon_lat[1])
    # print(lonlat_formated[:10])
    lonlat_formated = [data_lat, data_lon]
    return lonlat_formated


def get_index_latlon_thai(data_lat, data_lon):
    list_index = []
    list_lat = []
    list_lon = []
    for i in range(len(data_lat)):
        if (data_lat[i] >= 96.5 and data_lat[i] <= 106.5 and data_lon[i] >=5.2 and data_lon[i] <= 21.5):
            list_index.append(i)
            list_lat.append(data_lat[i])
            list_lon.append(data_lon[i])
    return [list_index, list_lat, list_lon]




import netCDF4 as nc
import os
import numpy as np
 
# Get the list of all files and directories
path = r"D:\Coding\JavaScript\REACT_Native\Data_Project\data\_SPI"
dir_list = os.listdir(path)
for folder_name in dir_list:
    if(folder_name != 'monthly'):
        fn = rf"D:\Coding\JavaScript\REACT_Native\Data_Project\For_project\_SPI\{folder_name[:-4]}.nc"
        ds = nc.Dataset(fn, 'w', format='NETCDF4')

        # get data from txt file 
        data_latlon = get_data_latlon()
        data_latlon_crop_thai = get_index_latlon_thai(data_latlon[1], data_latlon[0])
        data_index = get_data_index(folder_name ,data_latlon_crop_thai[0])

        # get data for nc file 
        num_year_index = len(data_index[1])
        num_pairs_lonlat = len(data_latlon_crop_thai[0])

        data_lat = list(dict.fromkeys(data_latlon_crop_thai[2]))
        data_lon = list(dict.fromkeys(data_latlon_crop_thai[1]))

        time = ds.createDimension('time', num_year_index)
        lat = ds.createDimension('lat', len(data_lat))
        lon = ds.createDimension('lon', len(data_lon))

        times = ds.createVariable('time', 'f4', ('time',))
        times.units = 'month since 1970-01-01'
        lats = ds.createVariable('lat', 'f4', ('lat',))
        lons = ds.createVariable('lon', 'f4', ('lon',))
        name_index = folder_name.split('.')[0].split('_')
        value = ds.createVariable(name_index[-1], 'f4', ('time', 'lat', 'lon',))
        value.units = "Unknows"

        times[:] = data_index[1]
        lats[:] = data_lat
        lons[:] = data_lon
        print(num_year_index)
        for i in range(num_year_index):
            value[i, :, :] = data_index[0][i]
            print(i)


        ds.close()