from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from get_province import GetProvince
from nc_json import convert_nc_json

app = Flask(__name__)
api = CORS(app)
f = open(r'token.json')
data = json.load(f)

@app.route('/get_province/<string:p_name>')
def get(p_name):
    if (request.headers.get('x-access-token') == data['key']):
        temp = GetProvince(p_name)
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

@app.route('/get_index/<string:data_index>&<string:p_name>&<string:date>')
def getGridSpei(data_index,p_name,date = '2006-01'):
    if (request.headers.get('x-access-token') == data['key']):
        temp = convert_nc_json(p_name, date, data_index)
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

if __name__ == "__main__":
    app.run(debug=True, port="5000")