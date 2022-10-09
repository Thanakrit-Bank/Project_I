import json
  
# Opening JSON file
f = open(r'sample.json')
data = json.load(f)

f_all = open(r'full_thailand.json')
data_all = json.load(f_all)

def GetProvince( p_name ):
    #form of geojson
    temp_json = {"type": "FeatureCollection",
            "features":[]
            }
    #get all province in thailand
    if(p_name == "all"):
        temp_json['features']=data_all
        temp_json['features']['properties']['id'] = 99
    #get one province
    else:
        for province in data['features']:
            temp_p = province['properties']['name']
            if(p_name == temp_p):
                temp_json['features'] = province
    f.close()
    return temp_json