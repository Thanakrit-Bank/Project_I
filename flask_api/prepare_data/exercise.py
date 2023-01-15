import json
  
# Opening JSON file
f = open(r'country.json')
data = json.load(f)

f_all = open(r'full_thailand.json')
data_all = json.load(f_all)

print(len(data["features"][0]["properties"]))
print(data["features"][0].keys())               # ['type', 'properties', 'geometry']

print(data["features"][0]['type'])  # "Feature"

print(data["features"][0]['properties'].keys()) # ['AREA', 'PERIMETER', 'CTRY3M_', 'CTRY3M_ID', 'COUNTRY', 'CNTRY_NAME', 'REGION', 'CONTINENT', 'LAND_OCEAN']
print(data["features"][0]['properties'])
#{'AREA': 944.166, 'PERIMETER': 337.918, 'CTRY3M_': 3966, 'CTRY3M_ID': 10785, 'COUNTRY': 'CH', 'CNTRY_NAME': 'China', 'REGION': 'Eastern Asia', 'CONTINENT': 'Asia', 'LAND_OCEAN': 'Continent'}

print(data["features"][0]['geometry'].keys())   # ['type', 'coordinates']
print(data["features"][0]['geometry']["type"])  # "Polygon"
print(len(data["features"][0]['geometry']["coordinates"][0]))  #[[[lat, lon], [lat, lon], [lat, lon], [lat, lon], ........... ]]


import pandas as pd
import numpy as np
import geopandas as gpd
import matplotlib.pyplot as plt

df_places = gpd.read_file('southeast-asia_.geojson')
df_places['geometry'].plot()
plt.show()


##############################################################################
# import numpy as np
# import pandas as pd
# import shapefile as shp
# import matplotlib.pyplot as plt
# import seaborn as sns

# sns.set(style="whitegrid", palette="pastel", color_codes=True)
# sns.mpl.rc("figure", figsize=(10,6))

# shp_path = r"C:\Users\s6201\Downloads\Data_Project\Country boundaries of Southeast Asia\data\commondata\data0\cntry_3m.shp"
# sf = shp.Reader(shp_path)
# print(sf.records()[1])

# def read_shapefile(sf):
#     """
#     Read a shapefile into a Pandas dataframe with a 'coords' 
#     column holding the geometry information. This uses the pyshp
#     package
#     """
#     fields = [x[0] for x in sf.fields][1:]
#     records = sf.records()
#     shps = [s.points for s in sf.shapes()]
#     df = pd.DataFrame(columns=fields, data=records)
#     df = df.assign(coords=shps)
#     return df

# df = read_shapefile(sf)
# df.shape

# def plot_shape(id, s=None):
#     """ PLOTS A SINGLE SHAPE """
#     plt.figure()
#     ax = plt.axes()
#     ax.set_aspect('equal')
#     shape_ex = sf.shape(id)
#     x_lon = np.zeros((len(shape_ex.points),1))
#     y_lat = np.zeros((len(shape_ex.points),1))
#     for ip in range(len(shape_ex.points)):
#         x_lon[ip] = shape_ex.points[ip][0]
#         y_lat[ip] = shape_ex.points[ip][1]
#     plt.plot(x_lon,y_lat) 
#     x0 = np.mean(x_lon)
#     y0 = np.mean(y_lat)
#     plt.text(x0, y0, s, fontsize=10)
#     # use bbox (bounding box) to set plot limits
#     plt.xlim(shape_ex.bbox[0],shape_ex.bbox[2])
#     return x0, y0

# print(df.sample(5))
# print(df[df.CNTRY_NAME == "Japan"])

# comuna = "Japan"
# com_id = df[df.CNTRY_NAME == comuna].index.values[0]
# # plot_shape(com_id, comuna)
# # plt.show()

# def plot_map(sf, x_lim = None, y_lim = None, figsize = (11,9)):
#     '''
#     Plot map with lim coordinates
#     '''
#     plt.figure(figsize = figsize)
#     id=0
#     for shape in sf.shapeRecords():
#         x = [i[0] for i in shape.shape.points[:]]
#         y = [i[1] for i in shape.shape.points[:]]
#         plt.plot(x, y, 'k')
        
#         if (x_lim == None) & (y_lim == None):
#             x0 = np.mean(x)
#             y0 = np.mean(y)
#             # plt.text(x0, y0, id, fontsize=10)
#         id = id+1
    
#     if (x_lim != None) & (y_lim != None):     
#         plt.xlim(x_lim)
#         plt.ylim(y_lim)


# plot_map(sf)
# plt.show()
