class BankAccount:
    def __init__(self, accountNumber,balance):
        self.accountNumber = accountNumber
        self.balance = balance

    def deposit(self,balance):
        self.balance = self.balance + depositAmount
        print(self.balance)

    def withdraw(self, balance):
        self.balance = self.balance - withdrawAmount
        print(self.balance)

    def transfer(self,otherAccount, balance):
        self.balance = self.balance - transferAmount
        otherAccount.balance =  otherAccount.balance + transferAmount
        print(self.balance)
        print(otherAccount.balance)

checkingAccount = BankAccount("H01111", 100)
otherAccount = BankAccount("L000", 200)

withdrawAmount = 50
# checkingAccount.withdraw(withdrawAmount)

depositAmount= 50
# checkingAccount.deposit(depositAmount)

transferAmount= 20
checkingAccount.transfer(otherAccount, transferAmount)