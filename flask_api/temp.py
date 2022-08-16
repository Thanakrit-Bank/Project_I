import json
  
# Opening JSON file
f = open(r'C:\Users\Administrator\Desktop\Project_I\flask_api\thailand.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)

# Iterating through the json
# list
list_p = []
def get_province(  ):
    temp_json = {"type": "FeatureCollection",
            "features":[]
            }
    for province in data['features']:
        temp_p = province['properties']['name']
        list_p.append(temp_p)

        # if(p_name == temp_p):
        #     temp_json['features'] = province
    # Closing file
    f.close()
    return sorted(list_p)

print(get_province())