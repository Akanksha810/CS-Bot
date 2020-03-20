# starting server 
import os
import helper as help_modules

def server_trigger():
    aux.update_bot_repo_path(f'{aux.bot_repo_path}\\bot-server')
    aux.change_working_path()
    os.system("python main.py")

aux = help_modules.Helper()
aux.reset_dir_to_parent_dir()
server_trigger()