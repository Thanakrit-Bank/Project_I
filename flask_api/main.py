from flask import Flask,jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from read_json import get_province

app = Flask(__name__)
api = Api(app)

#design
class TambonGeojson(Resource):
    def get(self,p_name):
        temp = get_province(p_name)
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        # return temp
#call
api.add_resource(TambonGeojson,"/get_province/<string:p_name>")



if __name__ == "__main__":
    app.run(debug=False, port="5000")