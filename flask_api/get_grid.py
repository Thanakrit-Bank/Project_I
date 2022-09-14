import json 

f = open(r"C:\Users\Administrator\Desktop\Project_I\flask_api\nc.json")
  
# returns JSON object as 
# a dictionary
data = json.load(f)

def getGridData():
    return data['features']

# print(getGrid())