import json
  
# Opening JSON file
f = open(r'thailand.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
count = 1
for index, i in enumerate(data['features']) :
    data['features'][index]['properties']['id'] = count
    count += 1
json_object = json.dumps(data, indent=4)
with open("sample.json", "w") as outfile:
    outfile.write(json_object)