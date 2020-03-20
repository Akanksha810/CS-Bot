import requests
import json
import os

def summarizer():
    input_text = ""
    input_text = open("input_original.txt", "rt").read()
    input_text = open('summary.txt', 'w')
    r = requests.post(
        url = "https://api.deepai.org/api/summarization",
        data={'text': input_text},
        headers={'api-key': 'ca226d5b-37c8-4a18-b4f5-d385cac3f621'}
    )
    print(r.json()['output'])   


summarizer()