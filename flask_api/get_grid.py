import json 

f = open("nc.json")
  
# returns JSON object as 
# a dictionary
data = json.load(f)

def getGridData():
    return data['features']

# print(getGrid())