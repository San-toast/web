import time

class Hero:
    def __init__(self,name,health,strength):
        self.name = name
        self.health = health
        self.strength = strength

    
    def heal(self):
        self.health = 50
        # print(self.health)

    def attack(self,enemyHealth, strength):
        enemyHealth.health = enemyHealth.health - strength
        # print(enemyHealth.health)

class Enemy(Hero):
    def __init__(self,name,health,strength):
        self.name = name
        self.health = health
        self.strength = strength



heroName = (input("Enter a name for your hero"))
createdHero = Hero(heroName, 50 , 10)


def goblinFight():
    print(f"{heroName} encounters a goblin!")
    goblin = Enemy("Goblin", 20, 5)
    while goblin.health> 0:
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
        if userChoice == 1:
            print(heroName, "strikes at the Goblin")
            createdHero.attack(goblin, createdHero.strength)
            print(goblin.name, "retaliates against", heroName)
            goblin.attack(createdHero, goblin.strength)
            if goblin.health <= 0:
                print("Goblin defeated!")
        
        if userChoice == 2:
            print(f"{createdHero.name} inspects {goblin.name} ")
            print("It's a goblin with a pitchfork.")
            print(f"The {goblin.name} attacks while you're staring at it! ")
            goblin.attack(createdHero, goblin.strength)  

            if createdHero.health <= 0:
                print(f"""           
                            .-'~~~`-.
                            .'         `.
                            |  R  I  P  |
                            |           |
                            |           |
                            |           |
                {heroName} has fallen""")
                break  
        
        if userChoice == 3:
            print(heroName, "cures their own wounds")
            createdHero.heal()
            print(goblin.name, "attacks!")
            goblin.attack(createdHero, goblin.strength)
        
        if userChoice == 4:
            print(f"{heroName} runs away from the fight and heads home")
            break

    print("You defeat the goblin and return home")

def home():
    while True:
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
        *  1. Explore forest  2. Rest            *
        *                                        *  
        *                                        *   
        *                                        *
        ******************************************
        What do you want to do? (pick a number)
        """))
        if userChoice == 1:
            goblinFight()

        if userChoice == 2:
            if createdHero.health == 50:
                print(f"{heroName} rests and feels exactly the same")
            else:
                print(f"{heroName} rests and feels comepletely healed")
                createdHero.heal()
        
        if userChoice == 0:
            print("Thanks for playing")
            break

home()