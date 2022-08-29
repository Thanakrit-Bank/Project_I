from flask import Flask,jsonify,request
# from get_province import GetProvince
from flask_restful import Api
import json
from flask_cors import CORS
# from get_spei import getSpei
from get_grid import getGridData

app = Flask(__name__)
api = CORS(app)
f = open(r'C:\Users\Administrator\Desktop\Project_I\flask_api\token.json')
data = json.load(f)

# @app.route('/get_province/<string:p_name>')
# def get(p_name):
#     if (request.headers.get('x-access-token') == data['key']):
#         temp = GetProvince(p_name)
#         response = jsonify(temp)
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response

@app.route('/get_grid')
def getGrid():
    if (request.headers.get('x-access-token') == data['key']):
        temp = getGridData()
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

# @app.route('/get_grid')
# def getGrid():
#     temp = getGridData()
#     response = jsonify(temp)
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

# @app.route('/get_spei')
# def getSpei():
#     temp = getSpei()
#     response = jsonify(temp)
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

if __name__ == "__main__":
    app.run(debug=True, port="5000")