from flask import Flask, request
from flask_cors import CORS, cross_origin
import handlers as handler
from datetime import date

server = Flask(__name__)
cors = CORS(server)
server.config['CORS_HEADERS'] = 'Content-Type'
handlerObject = handler.Handlers()
    
@server.route("/")
@cross_origin()
def slash_path_handler():
    return "api route / created ..."

@server.route("/convert",  methods=['POST'])
@cross_origin()
def util_caller():
    target_text = request.data
    
    summary = handlerObject.summarize_context(raw_text=target_text, type="string")
    file_name = "D:\\Projects\\CS-Bot\\output-files\\summarize-output.txt"
    handlerObject.save_to_file(text=summary, file_name=file_name)

    response = handlerObject.classify_context(raw_text=target_text, type="string")
    file_name = "D:\\Projects\\CS-Bot\\output-files\\classify-output.txt"
    handlerObject.save_to_file(text=response,file_name=file_name)
    return "OK !"
    
@server.route("/summary", methods=['GET'])
@cross_origin()
def summary_result_handler():
    content = handlerObject.display_result("../output-files/summarize-output.txt")
    return content

@server.route("/classification", methods=['GET'])
@cross_origin()
def classification_result_handler():
    content = handlerObject.display_result("../output-files/classify-output.txt")
    return content

server.run(port=5010, debug=True)

    