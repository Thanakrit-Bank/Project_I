import geopandas
myshpfile = geopandas.read_file(r'D:\Coding\JavaScript\REACT_Native\Data_Project\Tambon\Tambon\TH_Tambon.shp')
myshpfile.to_file('myJson.json', driver='GeoJSON')