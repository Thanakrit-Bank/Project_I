f = open(r"D:\Coding\JavaScript\REACT_Native\Data_Project\data\indices\ensemble_rcp45_CDD.txt", "r")
import pandas as pd

df = pd.read_csv(r"D:\Coding\JavaScript\REACT_Native\Data_Project\data\indices\ensemble_rcp45_CDD.csv")

print(df.to_string()) 