import time

class Hero:
    def __init__(self,name,health,strength, coins = 0):
        self.name = name
        self.health = health
        self.strength = strength
        self.coins = coins

    
    def heal(self):
        self.health = 50
        

    def attack(self,enemyHealth, strength):
        enemyHealth.health = enemyHealth.health - strength
        

    def loot(self, enemy,coins):
        enemy = enemy.coins + coins
        self.coins = enemy

    def upgrade(self, strength,coins):
        if self.coins <= 99:
            print("You don't have enough gold to do this")
        else:
            print("Your sword feels stronger")
            self.strength += 5
            self.coins  -= 100


class Enemy(Hero):
    def __init__(self,name,health,strength,coins):
        self.name = name
        self.health = health
        self.strength = strength
        self.coins = coins

heroName = (input("Enter a name for your hero\n"))
createdHero = Hero(heroName, 50 , 10)
goblinAmount = 0

def goblinFight():
    print(f"{heroName} encounters a goblin!")
    goblin = Enemy("Goblin", 20, 5, 50)

    while goblin.health> 0 or createdHero.health < 0:
        try:
            userChoice = ""
            userChoice = int(input(f"""


                HP  {goblin.health} 

                <(__)> | | |
                | \/ | \_|_/
                \^  ^/   |
                /\--/\  /|
               /  \/  \/ |
                
                {goblin.name}



        {heroName}                             HP {createdHero.health}
        ******************************************
        *                                        *
        *  1. Attack           2. Inspect enemy  *
        *                                        *  
        *  3. Heal             4. Run            *   
        *                                        *
        ******************************************
        What do you want to do? (pick a number)
        """))
        except ValueError:
            print("Please enter a valid number")
        if userChoice == 1:
            print(heroName, "strikes at the Goblin")
            createdHero.attack(goblin, createdHero.strength)
            if goblin.health > 0:

                print(goblin.name, "retaliates against", heroName)
                goblin.attack(createdHero, goblin.strength)
                
            else:
                print("Goblin defeated!")
        
        if userChoice == 2:
            print(f"{createdHero.name} inspects {goblin.name} ")
            print("It's a goblin with a pitchfork.")
            print(f"The {goblin.name} attacks while you're staring at it! ")
            goblin.attack(createdHero, goblin.strength)  

        
        if userChoice == 3:
            print(heroName, "cures their own wounds")
            createdHero.heal()
            print(goblin.name, "attacks!")
            goblin.attack(createdHero, goblin.strength)
        
        if userChoice == 4:
            print(f"{heroName} runs away from the fight and heads home")
            break

        if goblin.health <= 0:
            createdHero.loot(createdHero, goblin.coins)
            print(f"You found {goblin.coins} gold")
            print("You defeat the goblin and return home")
            

        if createdHero.health <= 0:
            print(f"The goblin strikes down {heroName}")

            break
            
def home():
    while True:
        if createdHero.health <= 0:

            print(f"""           
                                  .-'~~~`-.
                                .'         `.
                                |  R  I  P  |
                                |           |
                                |           |
                                |           |{heroName} has fallen
                                  Game Over""")
            break
        try:
            userChoice = ""
            userChoice = int(input(f"""

                          ____||____
                        ///////////\\
                        ///////////  \\
                        |    _    |  |
                        |[] | | []|[]|
                        |   | |   |  |



            {heroName}                             HP {createdHero.health}
            ******************************************
            *                                        *
            *    1. Hunt Goblin           2. Rest    *
            *                                        *  
            *    3. Check Stats           4. Shop    *                               
            *                                        *
            ******************************************                                          0. Quit Game
            What do you want to do? (pick a number)
            """))
        
        except ValueError  :
            print("Please enter a valid number")

        if userChoice == 1:
            goblinFight()

        if userChoice == 2:
            if createdHero.health == 50:
                print(f"{heroName} rests and feels exactly the same")
            else:
                print(f"{heroName} rests and feels comepletely healed")
                createdHero.heal()

        if userChoice == 3:
            print(f"""
                      Name: {heroName}
                      Strength: {createdHero.strength}
                      Gold: {createdHero.coins}""")
        
        if userChoice == 4:
            store()
        
        if userChoice == 0:
            print("Thanks for playing")
            break

def store():
    while True:

        try:
            userChoice = ""
            userChoice = int(input(f"""

                              _
                           _-'_'-_
                        _-' _____ '-_
                     _-' BLACKSMITH  '-_
                      |___|||||||||___|
                      |___|||||||||___|
                      |___|||||||o|___|
                      |___|||||||||___|
                      |___|||||||||___|
                      |___|||||||||___|



            {heroName}                             HP {createdHero.health}
            ******************************************
            *                                        *
            *    1. Upgrade sword (100 Gold)         *
            *                                        *  
            *    2. Leave                            *                               
            *                                        *
            ******************************************
            What do you want to do? (pick a number)
            """))
        
        except ValueError  :
            print("Please enter a valid number")

        if userChoice == 1:
            createdHero.upgrade(createdHero.strength, createdHero.coins)

        if userChoice == 2:
            print("Come again!")
            break


home()