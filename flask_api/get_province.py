import json
class GettingArea:
    # Opening JSON file
    def __init__(self):
        f = open(r'province.json', encoding='utf-8')
        self.data = json.load(f)

        f_all = open(r'southeast-asia_.json', encoding='utf-8')
        self.data_sea = json.load(f_all)
        f.close()
        f_all.close()

    def GetProvince(self, p_name ):
        #form of geojson
        temp_json = {"type": "FeatureCollection",
                "features":[]
                }
        #get all province in thailand
        SEA = ['Brunei Darussalam', 'Cambodia', 'Malaysia', 'Indonesia', 'Laos (Lao People’s Democratic Republic)', 'Myanmar'
                , 'Philippines', 'Thailand', 'Timor-Leste', 'Vietnam']
        if(p_name in SEA):
            # temp_json['features']=data_all
            # temp_json['features']['properties']['id'] = 99
            for country in self.data_sea['features']:
                temp_p = country['properties']['name']
                if(p_name == temp_p):
                    temp_json['features'].append(country)
        #get one province
        else:
            for province in self.data['features']:
                temp_p = province['properties']['name']
                if(p_name == temp_p):
                    temp_json['features'].append(province)
        
        return temp_json