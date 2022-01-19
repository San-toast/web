phoneBook = [
    {"name": "SANTOS" ,"phoneNumber": "808-555-5555"},
    {"name": "JOSH" ,"phoneNumber": "808-222-2222"}
]
def phoneSearch():
    if len(phoneBook) == 0:
        print("No entries in phonebook")
    else:
        nameSearch = input ("Which user would you like to lookup? \n")
        userInPhoneBook = [entry for entry in phoneBook if entry["name"] == nameSearch.upper()]
        if len(userInPhoneBook) > 0:
            print("Found entry for", nameSearch.upper(), ":", userInPhoneBook[0]["phoneNumber"])
        else:
            print(nameSearch, "does not exist")
            return

def phoneAdd():
        name = input ("Enter a name to add\n")
        phoneNumber = input ("Enter a phone number. ex: xxx-xxx-xxxx\n")
        newUser = {"name": name.upper() , "phoneNumber":phoneNumber}
        phoneBook.append(newUser)
        print(name.upper(), "added to phonebook with phone number:", phoneNumber)

def phoneDelete():
    if len(phoneBook) == 0:
        print("No entries in phonebook")
        return
    else:
        nameToDelete = input ("Which user would you like to delete? \n")
        userInPhoneBook = [entry for entry in phoneBook if entry["name"] == nameToDelete.upper()]
       
        if len(userInPhoneBook) > 0:
            print("Removed", nameToDelete.upper())
            phoneBook.remove(userInPhoneBook[0])
        else:          
            print(nameToDelete, "does not exist")
            return

def phoneList():
    if len(phoneBook) > 0:
        for entry in phoneBook:
            print(entry["name"], ":", entry["phoneNumber"])
    else:
        print("No entries in phonebook")

while True:
    userInput = int(input("""
Electronic Phone Book
=====================
1. Look up an entry
2. Add a new entry
3. Delete an entry
4. List all entries
5. Quit
=====================
What do you want to do (1-5)?\n"""))
    if userInput == 1:
        phoneSearch()
   
    if userInput == 2:
        phoneAdd()
    
    if userInput == 3:
        phoneDelete()

    if userInput == 4:
        phoneList()
   
    if userInput == 5:
        print ("Goodbye")
        break