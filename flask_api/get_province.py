import json
  
# Opening JSON file
f = open('thailand.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)

# Iterating through the json
# list

def GetProvince( p_name ):
    temp_json = {"type": "FeatureCollection",
            "features":[]
            }
    
    for province in data['features']:
        temp_p = province['properties']['name']
        if(p_name == temp_p):
            temp_json['features'] = province
        if(p_name == "all"):
            temp_json['features'].append(province)
    # Closing file
    f.close()
    return temp_json