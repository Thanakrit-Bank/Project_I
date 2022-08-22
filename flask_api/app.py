from flask import Flask,jsonify,request
from flask_restful import Api, Resource
from get_province import GetProvince
import json
from flask_cors import CORS

app = Flask(__name__)
api = CORS(app)
f = open('token.json')
data = json.load(f)

@app.route('/get_province/<string:p_name>')
def get(p_name):
    if (request.headers.get('x-access-token') == data['key']):
        temp = GetProvince(p_name)
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


if __name__ == "__main__":
    app.run(debug=True, port="5000")