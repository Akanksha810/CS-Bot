from flask import Flask, request
from flask_cors import CORS, cross_origin
import handlers as handler

server = Flask(__name__)
cors = CORS(server)
server.config['CORS_HEADERS'] = 'Content-Type'
handlerObject = handler.Handlers()
    

@server.route("/")
@cross_origin()
def slash_path_handler():
    return "api route / created ..."


@server.route("/summarize",  methods=['POST'])
@cross_origin()
def summarize_util_caller():
    target_text = request.data
    summary_JSON = handlerObject.summarize_context(raw_text=target_text, type="string")
    return summary_JSON
    

# @server.route("/info", methods=['POST'])
# @cross_origin()
# def info_handler():
#     return "api route /info created ..."


@server.route("/classify", methods=['POST'])
@cross_origin()
def classify_util_caller():
    target_text = request.data
    print(len(target_text))
    response = handlerObject.classify_context(raw_text=target_text, type="string")
    # print(tuple(response))
    # return "response"
    return response

# @server.route("/results")
# @cross_origin()
# def results_handler():
#     return "api route /results created ..."


server.run(port=5010, debug=True)

    