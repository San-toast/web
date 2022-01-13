userWord= input("Enter a word to check if it's a palindrome \n")
palindrome = userWord[::-1]

if userWord == palindrome:
    print(userWord, " is a palindrome!")
else:
    print(userWord, " is not a palindrome!")