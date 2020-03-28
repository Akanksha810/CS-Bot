from os import path
import shorten as sh
import classifier as cl


class Handlers : 
    def __init__(self):
        pass
    
    def summarize_context(self, raw_text=None, type="string"):
        sh_o = sh.Summarizer()
        return sh_o.summarize_handler(raw_text)

    def save_to_file(self, text, file_name):
        out_file = open(file_name, "w")
        out_file.write(str(text))
        out_file.close()

    def classify_context(self, raw_text=None, type="string"):
        cl_o = cl.Classifier()
        return cl_o.classifier_handler(raw_text)

    def display_result(self, file_path) :
        content = open(file_path, "r").read()
        return content
    
