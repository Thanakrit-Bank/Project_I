import json
  
# Opening JSON file
f = open(r'C:\Users\Administrator\Desktop\Project_I\flask_api\thailand.json')
f_all = open(r'C:\Users\Administrator\Desktop\Project_I\flask_api\full_thailand.json')
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
    
    for province in data['features']:
        temp_p = province['properties']['name']
        if(p_name == temp_p):
            temp_json['features'] = province
    if(p_name == "all"):
        temp_json['features'].append(data_all)
    # Closing file
    f.close()
    return temp_json