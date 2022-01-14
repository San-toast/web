from locale import currency
from multiprocessing.dummy import current_process
from os import curdir


myself = {
    "firstName": "Santos",
    "lastName" : "Gutierrez",
    "currentCity": "Keaau",
    "age": "27",
    "eyeColor": "Brown",
    
    "address": {
        "streetName": "Pilikai",
        "streetNumber": "100",
        "city": "Keaau",
        "state": "Hawaii",
        "zip": "96706"
    },

    "schoolHistory": {
        "elemntary": "Bilbray Elementary",
        "middle": "Ilima Intermediate",
        "high": "James Campbell High School"

}
    
    }

    
myself["schoolHistory"]["college"]= "MIT"
print(myself)

print(f"My name is {myself['firstName']} {myself['lastName']} and I live in {myself['currentCity']}")