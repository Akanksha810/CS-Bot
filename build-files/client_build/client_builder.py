# starting client 
import os
import helper as help_modules

def client_trigger():
    
    aux.update_bot_repo_path(f'{aux.bot_repo_path}\\bot-ui')
    print(aux.bot_repo_path)
    aux.change_working_path()
    os.system("npm install")
    os.system("npm start")

aux = help_modules.Helper()
aux.reset_dir_to_parent_dir()
client_trigger()