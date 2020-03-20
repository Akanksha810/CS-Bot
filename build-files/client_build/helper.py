import os
class Helper :
    def __init__(self) :
        self.bot_repo_path = ""
        self.current_working_path = ""

    def update_bot_repo_path(self, path):
        self.bot_repo_path = path
        
    def change_working_path(self) :
        if os.path.exists(self.bot_repo_path) :
            os.chdir(self.bot_repo_path)
            print("Shifted the directory")
            self.print_working_directory()
        else:
            print("Can't change the Current Working Directory")    

    def print_working_directory(self):
        print(f'Current Working Directory = {os.getcwd()}')

    def clear_terminal(self):
        if os.name == "nt":
            os.system('cls')
        else :
            os.system('clear')

    def reset_dir_to_parent_dir(self):
        self.clear_terminal()
        self.current_working_path = os.getcwd()
        self.bot_repo_path = self.current_working_path.split('CS-Bot')[0] + "CS-Bot-1"
        self.change_working_path()