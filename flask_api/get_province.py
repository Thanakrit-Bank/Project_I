import json
  
# Opening JSON file
# f = open(r'thailand.json')
f = open(r'sample.json')
f_all = open(r'full_thailand.json')
# returns JSON object as 
# a dictionary
data = json.load(f)
data_all = json.load(f_all)
# Iterating through the json
# list

def GetProvince( p_name ):
    temp_json = {"type": "FeatureCollection",
            "features":[]
            }
    count = 0
    for province in data['features']:
        temp_p = province['properties']['name']
        if(p_name == temp_p):
            count += 1
            temp_json['features'] = province
            # temp_json['features']['properties']['id'] = count
    if(p_name == "all"):
        count += 1
        temp_json['features']=data_all
        temp_json['features']['properties']['id'] = 99
    # Closing file
    f.close()
    return temp_json