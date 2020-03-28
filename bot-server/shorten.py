import requests
import os


class Summarizer:
    def __init__(self):
        self.INPUT_TEXT = ""
        self.OUTPUT_TEXT = ""
        
    def get_OUTPUT_TEXT(self):
        return self.OUTPUT_TEXT

    # fluent
    def set_INPUT_TEXT(self, raw_text):
        print("setting target text ")
        self.INPUT_TEXT = raw_text
        return self

    # fluent
    def set_OUTPUT_TEXT(self, summary_json):
        print("sending processed text(summary)")
        self.OUTPUT_TEXT = summary_json
        return self

    def summarize(self):
        r = requests.post(
            url="https://api.deepai.org/api/summarization",
            data={'text': self.INPUT_TEXT},
            headers={'api-key': 'ca226d5b-37c8-4a18-b4f5-d385cac3f621'}
        )
        return r.json()['output']

    def summarize_handler(self, raw_text):
        summary_json = self.set_INPUT_TEXT(raw_text).summarize()
        return self.set_OUTPUT_TEXT(summary_json).get_OUTPUT_TEXT()


