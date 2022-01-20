class UserList:
    def __init__(self, title, address, groceryList=[]):
        self.title = title
        self.address = address
        self.groceryList = groceryList

    def addList(self, title, address):
        self.groceryList = {"title": title , "address":address}
        self.groceryList.append(self.groceryList)
        print(title, "added to grocery list with address:", address)
        
    def addItem(self,groceryList):
        self.groceryList.append(groceryList)

    def displayList(self):
        for add in self.groceryList:
            print(add.item, add.price ,add.quantity)

class Grocery:
    def __init__(self,item,price,quantity):
        self.item = item
        self.price = price
        self.quantity = quantity

storeTest = UserList ("Foodland", "Keaau")
testItems= Grocery("Eggs", 5, 2)
storeTest.addItem(testItems)
storeTest.displayList()



def storeAdd():
    store1= UserList("Foodland", "132 Volcano st")
    store2= UserList("KTA", "555 Puainako")
    storeName = int(input("Select a store"))
    if storeName == 1:
        store1.addList()

    if storeName == 2:
        store2.addList()


while True:
    userInput = int(input("""
Grocery List App
=====================
1. Look up an entry
2. Add a new entry
3. Delete an entry
4. List all entries
5. Quit
=====================
What do you want to do (1-5)?\n"""))
    if userInput == 1:
        storeAdd()

    else:
        print("Goodbye")

