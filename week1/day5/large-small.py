theList= [12, 45, 2, 41, 31, 10, 8, 6, 4]

# theList.sort()


# print("The largest element is ", theList[-1])
# print("The smalles element is ", theList[0])
# print("The second largest element is ", theList[-2])
# print("The second smallest element is ", theList[1])

def largeSmall(givenList):
    givenList.sort()
    print("The largest element is ", theList[-1])
    print("The smalles element is ", theList[0])
    print("The second largest element is ", theList[-2])
    print("The second smallest element is ", theList[1])

largeSmall(theList)