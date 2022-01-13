original = input("Type to trnslate to leetspeak!\n")
original =original.upper()
print(original , "\nTurns into...")
def leet (string):
    leetSpeak =""
    for letter in string:
        if letter == "A":
            leetSpeak =leetSpeak + "4"
        elif letter == "E":
            leetSpeak =leetSpeak + "3"
        elif letter == "G":
            leetSpeak =leetSpeak + "6"
        elif letter == "I":
            leetSpeak =leetSpeak + "1"
        elif letter == "O":
            leetSpeak =leetSpeak + "0"
        elif letter == "S":
            leetSpeak =leetSpeak + "5"
        elif letter == "T":
            leetSpeak =leetSpeak + "7"
        else:
            leetSpeak =leetSpeak + letter
    print(leetSpeak)

leet(original)