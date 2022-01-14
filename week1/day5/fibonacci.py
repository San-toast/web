fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
choice = int(input("Which element of the fibonacci sequence do you want to see? \n"))

for i in fibonacci:
    if choice > i:
        newFib= fibonacci[-1] + fibonacci[-2]
        fibonacci.append(newFib)

print(fibonacci[choice])