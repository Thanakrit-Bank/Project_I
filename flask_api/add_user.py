# Python program to update
# JSON


import json
from werkzeug.security import generate_password_hash, check_password_hash

# function to add to JSON
def write_json(new_data, filename='data.json'):
	with open(filename,'r+') as file:
		# First we load existing data into a dict.
		file_data = json.load(file)
		# Join new_data with file_data inside emp_details
		file_data["users"] = new_data
		# Sets file's current position at offset.
		file.seek(0)
		# convert back to json.
		json.dump(file_data, file, indent = 4)

	# python object to be appended
y = {"emp_name":"Nikhil",
	"email": "nikhil@geeksforgeeks.org",
	"job_profile": "Full Time"
	}
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
	
write_json(users, 'token.json')
