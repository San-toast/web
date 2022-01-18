phoneBook = []
def phoneSearch():
    if len(phoneBook) == 0:
        print("No entries in phonebook")
    else:
        nameSearch = input ("Which user would you like to lookup? \n")
        userInPhoneBook = [entry for entry in phoneBook if entry["name"] == nameSearch.upper()]
        if len(phoneBook) > 0:
            print("Found entry for", nameSearch.upper(), ":", userInPhoneBook[0]["phoneNumber"])
        else:
            notExist = nameSearch
            print(nameSearch, "does not exist")
            return

def phoneAdd():
        name = input ("Enter a name to add\n")
        phoneNumber = input ("Enter a phone number. ex: xxx-xxx-xxxx\n")
        newUser = {"name": name.upper() , "phoneNumber":phoneNumber}
        phoneBook.append(newUser)
        print(phoneBook)

def phoneDelete():
    if len(phoneBook) == 0:
        print("No entries in phonebook")
    else:
        nameToDelete = input ("Which user would you like to delete? \n")
        userInPhoneBook = [entry for entry in phoneBook if entry["name"] == nameToDelete.upper()]
        if len(phoneBook) > 0:
            print("Removed", nameToDelete.upper())
            phoneBook.remove(userInPhoneBook[0])
        else:
            notExist = nameToDelete
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
   
    elif userInput == 2:
        phoneAdd()
    
    elif userInput == 3:
        phoneDelete()

    elif userInput == 4:
        phoneList()
   
    elif userInput == 5:
        print ("Goodbye")
        break