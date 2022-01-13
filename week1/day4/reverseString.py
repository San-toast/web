sampleString2 = "this is the name of a string"[::-1]
sampleString = "this is the name of a string"

print(sampleString)

def reverseString(stringToUse):
    reversed = ""
    for letter in stringToUse:
        reversed = letter + reversed
    print(reversed)

reverseString(sampleString)