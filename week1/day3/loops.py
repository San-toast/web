print("Intro to looping")

# counter = 0

# loops always have conditions
# actions to do if the condition is true
# print(counter)

# this is a while loop
# while counter < 5:
#     print("counter is less than 5")
#     counter = counter + 1
#     print(counter)

# Use keyword break to stop a process or a loop
# while True:
#     print("This is true")
#     break

# choice = input("Would you like you continue y/n ?")
# while choice == "y":
#     print("Yay!")
#     choice = input("Would you like you continue y/n ?")

# For loop is used on lists
# listOfSandwiches = ["PBJ", "Italian", "Club", "Tuna", "BLT"]

# for sandwich in listOfSandwiches:
#     print(sandwich)

# listOfSandwiches = ["PBJ", "Italian", "Club", "Tuna", "BLT"]

# for sandwich in listOfSandwiches:
#     print("*****")

# Exercise 10
# counter = 1
# squares= input("How big is the square?")

# stars= (int(squares) * "*")
# print(stars)

# while counter < int(squares):
#     print(stars)
#     counter = counter + 1

counter = 0
stars= int(input("How big is the square?"))


while counter < (stars):
    print(stars * "*")
    counter+= 1

# squareSize = int(input("How big would you like the square to be? "))

# for x in range(squareSize):
#     for x in range(squareSize):
#         print("*", end = " ")
    
#     print()