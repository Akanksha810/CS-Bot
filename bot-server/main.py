from flask import Flask 

server = Flask(__name__)

@server.route("/")
def slash_path_handler():
    return "api route / created ..."

@server.route("/summarise")
def summarize_handler():
    return "api route /summarise created ..."

@server.route("/info")
def info_handler():
    return "api route /info created ..."

@server.route("/classify")
def classify_handler():
    return "api route /classify created ..."

@server.route("/results")
def results_handler():
    return "api route /results created ..."
# print(f'->api route created / \n->api route created /summarise \n->api route created /info\n->api route created /classify\n->api route created /results')

server.run(debug=True)