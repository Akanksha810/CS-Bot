from os import path
import shorten as sh
import classifier as cl

class Handlers : 
    def __init__(self):
        pass
    
    def summarize_context(self, raw_text=None, type="string"):
        sh_o = sh.Summarizer()
        return sh_o.summarize_handler(raw_text)

    def save_to_file(text):
        out_file = open("output.txt", "w")
        out_file.write(text)

    def classify_context(self, raw_text=None, type="string"):
        cl_o = cl.Classifier()
        return cl_o.classifier_handler(raw_text)

    
