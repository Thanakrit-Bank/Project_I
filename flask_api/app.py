from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from get_province import GetProvince
from nc_json import convert_nc_json
from werkzeug.security import generate_password_hash, check_password_hash

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

@app.route('/get_index/<string:data_index>&<string:p_name>&<string:date>&<string:index_folder>')
def getGridSpei(data_index, index_folder, p_name, date = '2006-01'):
    if (request.headers.get('x-access-token') == data['key']):
        temp = convert_nc_json(p_name, date, data_index, index_folder)
        response = jsonify(temp)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
users = [
    {
        "id": 1,
        "username": "user1",
        "password": generate_password_hash("password1")
    },
    {
        "id": 2,
        "username": "user2",
        "password": generate_password_hash("password2")
    }
]
@app.route("/login", methods=["POST"])
def login():
    # Get the username and password from the request
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Find the user in the database
    user = next(filter(lambda u: u["username"] == username, users), None)

    # If the user doesn't exist or the password is incorrect, return an error
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid login credentials"}), 401

    # Otherwise, return a success message
    return jsonify({"message": "Logged in successfully"})

if __name__ == "__main__":
    app.run(debug=True, port="5000")