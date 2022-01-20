# Introduction to classes
# Factory that produces at scale
# A base that you can build on top of

puppy = {
    "furColor": "black/tan",
    "cutenessLevel": 10,
    "tailLength": "9 in",
    "furLength": "4 in",
    "name": "Soybean",
    "breed": "German Shepherd",
    "image": "https://bit.ly/3rtgIL3"
}

mooncake = {
    "furColor": "white/tan",
    "cutenessLevel": 10,
    "tailLength": "6 in",
    "furLength": "3 in",
    "name": "Mooncake",
    "breed": "Corgi",
    "image": "https://bit.ly/3Kp0yuC"

}
# We run into the problem that we have to create more objects if we have more data

puppy = {
    "breed": "",
    "name": "",
    "size": ""
}
# Classes fit that description and help you create a bsae/skeleton for a complex dictionary
# Defining a class

class Puppy:
    # This is the fundamental qualities of your class
    def __init__(self,name,size,breed,happiness=50):
        self.name = name
        self.size = size
        self.breed = breed
        self.happiness = happiness
        # define a function inside a class is called a method
    def giveTreat(self):
        self.happiness = self.happiness * 2

    def bark(self):
        print("woof woof")


luna = Puppy("luna","med","labrador")
# prints all attributes to class
print(vars(luna))
mooncake = Puppy("mooncake","small","corgi")
cosmo= Puppy("cosmo", "huge","mutt")
print(cosmo.happiness)
cosmo.giveTreat()
print(cosmo.happiness)
cosmo.bark()

class ToyPuppy(Puppy):
    def __init__(self,name,breed, size="1ft",happiness=5,portability="very"):
        super().__init__(name,size,breed,happiness)
        self.portability = portability

    def bark(self):
        print("yap yap")

# jellybean = ToyPuppy("jellybean","toy","chihuahua",10)
# jellybean.bark()
# jellybean.giveTreat()
# print(jellybean.happiness)
# print(vars(jellybean))

# dot notation
# Act of using a class attribute and referencing it with a period(something.attribute)
# print(luna.name)
# print(mooncake.size)
# print(cosmo.breed)

class User:
    def __init__(self,name,email,password,address=""):
        self.name = name
        self.email = email
        self.password = password
        self.address = address
    def printAccountDetails(self):
        print(f"{self.name},{self.email},{self.password}")

class SueprUser(User):
    def __init__(self,name,email,password,accessPriv):
        super().__init__(name,email,password)
        self.accessPriv = accessPriv

    def printAdminStatus(self):
        print(f"You have {self.accessPriv} status")

class UltraUser(SueprUser):
    pass

class Address:
    def __init__(self,street,city,state,zip):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip

# joe = User("Joe","email@email.com", "123123")
# joe.printAccountDetails()

# jarrod = SueprUser("Jarrod", "j@j.com","passw0rd", "Admin")
# jarrod.printAccountDetails()
# jarrod.printAdminStatus()

# liz = UltraUser("Liz", "")


heathersHome = Address("mystic stone", "Atlanta","Georgia","3232")
heather = User("heather","1@1", "secretpassword", heathersHome)
print(heather.address.street)