import json 

f = open(r'D:\Project\Mix_Project\Project_I\flask_api\nc.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)

def getGridData():
    return data['features']

# print(getGrid())