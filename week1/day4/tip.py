bill = int(input("How much was your bill? "))

def tenPercent():
    tip = 0.1 * bill
    return print("Your tip would be $", tip)
def fifteenPercent():
    tip = 0.15 * bill
    return print("Your tip would be $", tip)
def twentyPercent():
    tip = 0.2 * bill
    return print("Your tip would be $", tip)

print("a. %10 \n")
print("b. %15 \n")
print("c. %20 \n")
tipAmount= input("Select a tip amount: \n")

while tipAmount !="a" and tipAmount != "b" and tipAmount != "c":
    print("a. %10 \n")
    print("b. %15 \n")
    print("c. %20 \n")
    tipAmount= input("Select a tip amount: \n")

if tipAmount == "a":
        tenPercent()
elif tipAmount == "b":
        fifteenPercent()
elif tipAmount == "c":
        twentyPercent()

