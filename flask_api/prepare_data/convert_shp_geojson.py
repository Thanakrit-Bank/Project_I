import geopandas
myshpfile = geopandas.read_file(r"C:\Users\s6201\Downloads\Data_Project\Country boundaries of Southeast Asia\data\commondata\data0\cntry_3m.shp")
myshpfile.to_file('country.json', driver='GeoJSON')