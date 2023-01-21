import os
dir_list2 = os.listdir(r"F:\data_nc\data_project\ecearth\_SPI")
temp = []
for i in dir_list2:
    name = i.split(".")[0].split("_")[-1]
    temp.append(name)

print(set(temp))