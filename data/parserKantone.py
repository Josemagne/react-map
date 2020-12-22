import json
import codecs

kantone = ['Kanton Waadt VD', 'Kanton St. Gallen SG', 'Kanton Tessin TI', 'Kanton Wallis VS',
'Kanton Glarus GL', 'Kanton Appenzell Innerrhoden AI', 'Kanton Basel-Stadt BS', 'Kanton Schwyz SZ',
'Kanton Bern BE', 'Kanton Solothurn SO', 'Kanton Graubünden GR', 'Kanton Uri UR', 'Kanton Jura JU',
'Kanton Obwalden OW', 'Kanton Zug ZG', 'Kanton Appenzell Ausserrhoden AR', 'Kanton Nidwalden NW',
'Kanton Basel-Landschaft BL', 'Kanton Neuenburg NE', 'Kanton Luzern LU', 'Kanton Thurgau TG',
'Kanton Freiburg FR', 'Kanton Zürich ZH', 'Kanton Aargau AG', 'Kanton Genf GE', 'Kanton Schaffhausen SH'];

path = "data.csv";
bag = dict();

# initialize all the cantons in bag
for canton in kantone:
  bag[canton] = [];

with codecs.open(path, 'r', 'iso-8859-15') as file:
  for line in file:
    my_list = line.split(";");
    if (my_list[1] in bag):
      bag[my_list[1]].append({"Name": my_list[0], "Kanton": my_list[1], "BFS": my_list[2],
      "Einwohner": my_list[3], "Fläche": my_list[4], "Einwohner_pro_kmq": my_list[5]});

with open('kantone.json', 'w') as file:
  json.dump(bag, file);

