# import utils.summarizer
from os import path
import shorten as ob

class Handlers : 
    def __init__(self):
        pass
    
    def summarize_context(self, raw_text=None, type="string"):
        o = ob.Summarizer()
        return o.summarize_handler(raw_text)

    def save_to_file(text):
        out_file = open("output.txt", "w")
        out_file.write(text)
# summarize_context()