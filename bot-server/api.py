# import requests
# import json
# r = requests.post(
#     "https://api.deepai.org/api/summarization",
#     data={
#         'text': "Devil May Cry 5 is an action-adventure hack and slash video game developed and published by Capcom. It is the sixth installment in the franchise and the fifth installment of the mainline Devil May Cry series. Capcom released it for Microsoft Windows, PlayStation 4, and Xbox One on 8 March 2019. The game takes place five years after Devil May Cry 4 and follows a trio of warriors with demonic powers: Dante, Nero and a new protagonist named V as they attempt to stop the Demon King Urizen from destroying the human world. Across the game, the player can use these characters in different missions. Each of them has their own way of fighting and becoming stronger. As this happens, the mystery behind V is revealed along with his connection with Urizen.\
#                 Devil May Cry 5 was directed by Hideaki Itsuno whose goal was for this installment to be his best work. He aimed to make the game balanced for both newcomers and returning gamers by providing adequate, difficult and new demons. Capcom also wanted to bring a more realistic design inspired by the \"RE Engine\" used in their previous work, Resident Evil 7: Biohazard. As a result, models were used to make the character's faces. The plot was written by returning writer Bingo Morihashi while the setting was based on various locations in London. Multiple composers worked together to produce the game's audio, creating three main themes centered around the playable characters. \
#                 Devil May Cry 5 received positive reviews from critics. Many lauded it as a return to form for the franchise, praising the variety of techniques the three characters bring, with V standing out thanks to his distinctive style of commanding familiars. The game had sold over two million copies less than two weeks after its release. A light novel and manga related to the game have also been released."
#     },
#     headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
# )
# print(r.json()['output'])





import xml.etree.ElementTree as xml
import requests

xml = """<?xml version="1.0" encoding="utf-8"?>
<uclassify version="1.01" xmlns="http://api.uclassify.com/1/RequestSchema">
  <texts>
    <text id="text_1">Devil May Cry 5[a] is an action-adventure hack and slash video game developed and published by Capcom. It is the sixth installment in the franchise and the fifth installment of the mainline Devil May Cry series. Capcom released it for Microsoft Windows, PlayStation 4, and Xbox One on 8 March 2019. The game takes place five years after Devil May Cry 4 and follows a trio of warriors with demonic powers: Dante, Nero and a new protagonist named V as they attempt to stop the Demon King Urizen from destroying the human world. Across the game, the player can use these characters in different missions. Each of them has their own way of fighting and becoming stronger. As this happens, the mystery behind V is revealed along with his connection with Urizen.

Devil May Cry 5 was directed by Hideaki Itsuno whose goal was for this installment to be his best work. He aimed to make the game balanced for both newcomers and returning gamers by providing adequate, difficult and new demons. Capcom also wanted to bring a more realistic design inspired by the "RE Engine" used in their previous work, Resident Evil 7: Biohazard. As a result, models were used to make the character's faces. The plot was written by returning writer Bingo Morihashi while the setting was based on various locations in London. Multiple composers worked together to produce the game's audio, creating three main themes centered around the playable characters.

Devil May Cry 5 received positive reviews from critics. Many lauded it as a return to form for the franchise, praising the variety of techniques the three characters bring, with V standing out thanks to his distinctive style of commanding familiars. The game had sold over two million copies less than two weeks after its release. A light novel and manga related to the game have also been released.,</text>
  </texts>
  <readCalls readApiKey="SCdtO64qY2H8">
    <classify id="call_1" username="uClassify" classifierName="Topics" textId="text_1" />
  </readCalls>
</uclassify>"""
headers = {'Content-Type': 'application/xml'} # set what your server accepts

# print (requests.post('https://api.uclassify.com', data=xml, headers=headers).text)


import xmltodict, json
import itertools

o = xmltodict.parse(requests.post('https://api.uclassify.com', data=xml, headers=headers).text)
st = json.dumps(o)
json_result = json.loads(st)
category_class = []
category_probability = []
# print(json_result['uclassify']['readCalls']['classify']['classification']['class'])
for category in json_result['uclassify']['readCalls']['classify']['classification']['class']:
    for clsName in category:
        category_class.append(category['@className'])
        category_probability.append(category['@p'])
for index in range(len(category_class[::2])):
    print(f'{category_class[::2][index]}-{category_probability[::2][index]}')