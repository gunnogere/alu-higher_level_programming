#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming language that combines remarkable power with very clear syntax"
print(str[str.find('object-oriented'):str.find('programming')+11] + str[str.find('with'):str.find('with')+5] + str[str.find('Python'):str.find('Python')+6])
