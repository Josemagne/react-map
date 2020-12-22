import re
import json
import codecs

bag = {};
kantone = {'Kanton Thurgau TG'};
path = 'data.csv';

with codecs.open(path, 'r', 'iso-8859-15') as file:
  for line in file:
    my_list = re.split(";", line);
    kantone.add(my_list[1]);
    bag[my_list[0]] = {"Name": my_list[0], "Kanton": my_list[1], "BFS": my_list[2],
    "Einwohner": my_list[3], "Fläche": my_list[4], "Einwohner_pro_kmq": my_list[5]};

with open('gemeinde.json', 'w') as new_file:
  json.dump(bag, new_file)

print(kantone);



print(bag['Brig-Glis'])
