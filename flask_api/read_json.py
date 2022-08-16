import json
  
# Opening JSON file
f = open(r'D:\Project\Mix_Project\Project_I\flask_api\thailand.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)

# Iterating through the json
# list

def get_province( p_name ):
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