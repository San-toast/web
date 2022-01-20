class ShoppingList:
    def __init__(self, title, address, groceryList=[]):
        self.title = title
        self.address = address
        self.groceryList = groceryList

    def set_title(self, title):
        self.title = title

    def set_address(self, address):
        self.address = address

class GroceryItem:
    def __init__(self,item,price,quantity):
        self.item = item
        self.price = price
        self.quantity = quantity

    def add_to_shopping_list(self,shopping_list):
        self.shopping_list = ShoppingList

user_list = []

while True:
    userInput = int(input("""
Grocery List App
=====================
1. Create Shopping List
2. Add Grocery Items
3. Delete an entry
4. List all entries
5. Quit
=====================
What do you want to do (1-5)?\n"""))

    if userInput == 1:
        # list_name = input("What do you want to name this list?")
        store_name= input("What is the store name you want to add? \n")
        address_name = input("What is the address you want to add? \n")

        new_list= ShoppingList(store_name, address_name)

        user_list.append(new_list)
        print(vars(new_list))
        print(vars(user_list[0]))

    if userInput == 2:
        grocery_item= input("What is the item name you want to add? \n")
        grocery_price= input("What is the price of the item \n")
        grocery_quantity= input("What is the quantity of the item \n")

        new_grocery_item = GroceryItem(grocery_item, grocery_price, grocery_quantity)

        print(vars(new_grocery_item))
        
