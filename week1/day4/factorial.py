enteredAmount = int(input("Enter a number to find out it's factorial of it \n"))

def factorial(number):
    if number == 1 or number == 0:
        return 1
    else:
        fact = 1
        while number > 1:
            fact *= number
            number -= 1
        return fact

print("Factorial of",enteredAmount,"is", factorial(enteredAmount))