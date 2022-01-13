userNumber = int(input("Enter a number to see if it's a prime number \n"))

def prime(num):
    if num > 1:
        for i in range(2,num):
            if (num % i) == 0:
                print(num,"is not a prime number")
                break
        else:
            print(num,"is a prime number")
       
    else:
        print(num,"is not a prime number")

prime(userNumber)