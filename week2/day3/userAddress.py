class User:
    def __init__(self,first_name,last_name,address=[]):
        self.first_name = first_name
        self.last_name = last_name
        self.address = address
    
    def add_address(self,address):
        self.address.append(address)

    def display_address(self):
        for add in self.address: 
            print(add.street, add.city, add.state, add.zip_code)

class Address:
    def __init__(self,street,city,state,zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code


bob = User ("bob", "smith")
bobsAddress = Address("123 street", "keaau","Hawaii","96749")
bobsAddress2 = Address("321 street", "ewa","Hawaii","96706")
bob.add_address(bobsAddress)
bob.add_address(bobsAddress2)
bob.display_address()