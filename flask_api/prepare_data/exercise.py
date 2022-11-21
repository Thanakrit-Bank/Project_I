# import OS module
import os
 
# Get the list of all files and directories
path = r"D:\Coding\JavaScript\REACT_Native\Data_Project\data\_SPI"
dir_list = os.listdir(path)
 
for i in dir_list:
    print(i[:-4])
# prints all files
