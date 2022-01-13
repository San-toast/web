 import random

print("Let's roll a dice")

sides= int(input("How many sides should this dice have? (Pick between 2-20) "))

while sides< 2 or sides >20:
     sides= int(input("How many sides should this dice have? (Pick between 2-20) "))


print("Rolling...")

print("It's a " , random.randrange(sides))