import json 

f = open(r"nc.json")
  
# returns JSON object as 
# a dictionary
data = json.load(f)

def getGridData():
    return data['features']

# print(getGrid())