import geopandas
myshpfile = geopandas.read_file(r"C:\Users\s6201\Downloads\World_Countries\World_Countries.shp")
myshpfile.to_file('country.json', driver='GeoJSON')