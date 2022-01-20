class NewList:
    def __init__(self, store, address, groceryList = []):
        self.store = store
        self.address = address
        self.groceryList = groceryList
    
class Grocery:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity


def printAllLists():
    if len(shoppingLists) > 0:
        for list in shoppingLists:
            print(f"""
    Grocery List For {list.store} at {list.address} :
         """)
            counter = 1
            for item in list.groceryList:
                print(f"""
    {counter}.{item.name} {item.price} ({item.quantity})
                 """) 
                counter += 1

    else:
        print("No lists yet")

def displayLists(allLists):
    print ("Grocery Lists:")
    counter = 1
    for list in allLists:
        print(f""" 
    {counter}. {list.store} at {list.address}
            """)
        counter += 1

def printCurrentList(currentList):

    print(f"Grocery List For {currentList.store.capitalize()} :")
    counter = 1
    for item in currentList.groceryList:
        print(f"""
    {counter}. {item.name} {item.price} ({item.quantity})
            """)
        counter += 1 


def addList():
    storeInput = input("Enter the name of the grocery store\n")
    addressInput = input("Enter the location of this store \n")
    
    createStore = NewList(storeInput, addressInput)
    shoppingLists.append(createStore)   
    
    print(f"New grocery list created for {storeInput}.")

def addGrocery(currentList):
    groceryItem = input("Enter the name of the item ")
    groceryPrice= input("What is the price of the item? \n")
    groceryQuantity = input("How many do you need? ") 
    
    newGrocery = Grocery (groceryItem, groceryPrice, groceryQuantity)
    currentList.groceryList = currentList.groceryList + [newGrocery]


shoppingLists = []


while True:
    userChoice = input("""
    Grocery List App
    =================
    1. Look at my lists
    2. Make a new list
    3. Add item to a list
    0. Quit
    =================
    What do you want to do? (pick a number)
    """)

    userChoice = int(userChoice)
    if userChoice == 1:
            printAllLists()
    elif userChoice == 2:
            addList()
        
    elif userChoice == 3:
        displayLists(shoppingLists)
        
        chooseList = int(input ("Which grocery list do you want to add an item to? (pick a number)"))
        
        currentList = shoppingLists[chooseList - 1]
        printCurrentList(currentList)
        addGrocery(currentList)
        printCurrentList(currentList)
        
        
    elif userChoice == 0:
        print("Goodbye O/")
        break

