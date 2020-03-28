import requests
import xmltodict, json, pprint
class Classifier:
    def __init__(self) :
        self.INPUT_TEXT = ""
        self.CLASSIFICATION_MATRIX = []
        self.TEXT_COVERAGE = []
    
    def get_CLASSIFICATION_MATRIX(self) :
        return self.CLASSIFICATION_MATRIX
    
    def get_TEXT_COVERAGE(self):
        return self.TEXT_COVERAGE

    # fluent
    def set_INPUT_TEXT(self, raw_text):
        print("setting target text")
        self.INPUT_TEXT = raw_text
        return self
    
    # fluent
    def set_CLASSIFICATION_MATRIX(self, matrix):
        print("sending classification matrix")
        self.CLASSIFICATION_MATRIX = matrix
        return self

    # fluent 
    def set_TEXT_COVERAGE(self, text_coverage):
        print("sending text coverage")
        self.TEXT_COVERAGE = text_coverage
        return self

    def classify(self) :
        
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

        xml = f'{xml_prefix}{self.INPUT_TEXT}{xml_suffix}'    

        headers = {'Content-Type': 'application/xml'} # set what your server accepts

        r = (requests.post('https://api.uclassify.com', data=xml, headers=headers).text)
        my_dict = xmltodict.parse(r)
        res_str = json.dumps(my_dict)
        res_json = json.loads(res_str)
        text_coverage = res_json["uclassify"]["readCalls"]["classify"]["classification"]['@textCoverage']
        matrix_list = res_json["uclassify"]["readCalls"]["classify"]["classification"]['class']
        matrix_category = {}
        for i in matrix_list :
            matrix_category[i['@className']] = float(i['@p'])
        matrix_category = dict(sorted(matrix_category.items(), key = lambda kv:(kv[1], kv[0]),reverse=True))
        matrix_category["text_coverage"] = float(text_coverage)
        return matrix_category
        
    def classifier_handler(self, raw_text) :
        classification_matrix = self.set_INPUT_TEXT(raw_text=raw_text).classify()
        return self.set_CLASSIFICATION_MATRIX(classification_matrix).get_CLASSIFICATION_MATRIX()
        
