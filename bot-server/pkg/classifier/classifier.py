import xml.etree.ElementTree as xml
import requests
def classifier() :
    input_text = ""
    input_text = open("input_original.txt", "rt").read()

    xml_prefix = """<?xml version="1.0" encoding="utf-8"?> 
    <uclassify version="1.01" xmlns="http://api.uclassify.com/1/RequestSchema">
    <texts>
        <text id="text_1">"""

    xml_suffix = """</text>
    </texts>
    <readCalls readApiKey="SCdtO64qY2H8">
        <classify id="call_1" username="uClassify" classifierName="Topics" textId="text_1" />
    </readCalls>
    </uclassify>"""

    xml = f'{xml_prefix}{input_text}{xml_suffix}'    
    
    headers = {'Content-Type': 'application/xml'} # set what your server accepts

    print (requests.post('https://api.uclassify.com', data=xml, headers=headers).text)
    # print((len(input_text)))