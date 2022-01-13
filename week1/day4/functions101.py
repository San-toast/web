# How to create functions in python

# print("Welcome to my cat's hangout spot!")
# choice = input("Would you like to see my cat y/n ")

# define a function with the keyword "def"
# give a naem for the function
# finish your function with ():
def printCat():
    # anything indented in here is part of the function body
    return print(
    """
      _._     _,-'""`-._
     (,-.`._,'(       |\`-/|
         `-.-' \ )-`( , o o)
     -bf-      `-    \`_`"'-
    """
    )
    
def printMenu():
    return print("""
    **************************************
    **************************************
    1. Print My Name
    2. Print My City
    3. Print My Favorite Food
    4. Print My City and Name
    q. Quit
    **************************************
    **************************************
        
    """)

def printFood():
    return print("Pizza")

def printName():
    return print("Santos")

def printCity():
    return print("Keaau, HI")


print("Welcome to my portfolio")
choice = input("Would you like to see my portfolio y/n \n")

while choice !="n" and choice != "q":
    printMenu()
    choice = input("What would you like to do? \n")
    # choice = input("Would you like to see my cat y/n ")
    # if statements
    if choice == "1":
        printName()
    elif choice== "2":
        printCity()
    elif choice == "3":
        printFood()
    elif choice == "4":
        printCity()
        printName()
    else:
        print("Please choose between 1-4")