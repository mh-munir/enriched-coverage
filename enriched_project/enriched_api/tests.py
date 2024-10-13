from django.test import TestCase
import requests
import json


endpoint= 'http://127.0.0.1:8000/api/list/'
json_data = {
    "title": "Teisnt",
    "slug": "654js",
    "content": "isdjfklsfjkljfksadjf",
    "author": "fsjafklasjfklasfjdkl",
    "price": 55
}
get_response = requests.post(endpoint,json_data)

# print(get_response.headers)
# print(get_response.text)
print(get_response.json())



# Create your tests here.
