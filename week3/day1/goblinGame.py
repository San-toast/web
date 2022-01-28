import random
class Hero:
    def __init__(self,name,health, maxHealth, strength, coins = 0):
        self.name = name
        self.health = health
        self.maxHealth = maxHealth
        self.strength = strength
        self.coins = coins

    
    def heal(self):
        if self.health < self.maxHealth:

            self.health = self.maxHealth
        

    def attack(self,enemyHealth, strength):
        enemyHealth.health = enemyHealth.health - strength
        

    def loot(self, enemy,coins):
        enemy = enemy.coins + coins
        self.coins = enemy

    def upgradeSword(self, strength,coins):
        if self.coins <= 99:
            print("You don't have enough gold to do this")
        else:
            print("You feel stronger")
            self.strength += 5
            self.coins  -= 100
            print(f"Strength: {self.strength}")

    def upgradeHealth(self, health, coins):
        if self.coins <= 99:
            print("You don't have enough gold to do this")
        else:
            print("You feel healthier")
            self.maxHealth += 25
            self.coins  -= 100
            self.health = self.maxHealth


class Enemy(Hero):
    def __init__(self,name,health,strength,coins):
        self.name = name
        self.health = health
        self.strength = strength
        self.coins = coins

heroName = (input("Enter a name for your hero\n"))
createdHero = Hero(heroName, 50, 50 , 10)

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
            print(f"{goblin.name} Strength: {goblin.strength}")
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

def wolfFight():
    print(f"{heroName} encounters a wolf!")
    wolf = Enemy("Wolf", 60, 25, 75)

    while wolf.health> 0 or createdHero.health < 0:
        try:
            userChoice = ""
            userChoice = int(input(f"""


                            HP  {wolf.health} 
                                         ,     ,
                                         |\---/|
                                        /  , , |
                                   __.-'|  / \ /
                          __ ___.-'        ._O|
                       .-'  '        :      _/
                      / ,    .        .     |
                      :  ;    :        :   _/
                     |  |   .'     __:   /
                     |  :   /'----'| \  |
                      \  |\  |      | /| |
                      '.'| /       || \ |
                       | /|.'       '.l \\_
                       || ||             '-'
                       '-''-'
                
                            {wolf.name}



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
            print(heroName, "strikes at the wolf")
            createdHero.attack(wolf, createdHero.strength)
            if wolf.health > 0:

                print(wolf.name, "bites", heroName)
                wolf.attack(createdHero, wolf.strength)
                
            else:
                print("Wolf defeated!")
        
        if userChoice == 2:
            print(f"{createdHero.name} inspects {wolf.name} ")
            print("It's a wolf.")
            print(f"{wolf.name} Strength: {wolf.strength}")
            print(f"The {wolf.name} attacks while you're staring at it! ")
            wolf.attack(createdHero, wolf.strength)  

        
        if userChoice == 3:
            print(heroName, "cures their own wounds")
            createdHero.heal()
            print(wolf.name, "attacks!")
            wolf.attack(createdHero, wolf.strength)
        
        if userChoice == 4:
            print(f"{heroName} runs away from the fight and heads home")
            break

        if wolf.health <= 0:
            createdHero.loot(createdHero, wolf.coins)
            print(f"You found {wolf.coins} gold")
            print("You defeat the wolf and return home")
            

        if createdHero.health <= 0:
            print(f"The wolf eats {heroName}")

            break

def skeletonFight():

    print(f"{heroName} encounters a skeleton!")
    skeleton = Enemy("Skeleton Warrior", 100, 40, 100)

    while skeleton.health> 0 or createdHero.health < 0:
        try:
            userChoice = ""
            userChoice = int(input(f"""


                HP  {skeleton.health} 


                              _.--""-._
  .                         ."         ".
 / \    ,^.         /(     Y             |      )\\
/   `---. |--'\    (  \__..'--   -   -- -'""-.-'  )
|        :|    `>   '.     l_..-------.._l      .'
|      __l;__ .'      "-.__.||_.-'v'-._||`"----"
 \  .-' | |  `              l._       _.'
  \/    | |                   l`^^'^^'j
        | |                _   \_____/     _
        j |               l `--__)-'(__.--' |
        | |               | /`---``-----'"1 |  ,-----.
        | |               )/  `--' '---'   \'-'  ___  `-.
        | |              //  `-'  '`----'  /  ,-'   I`.  \\
      _ L |_            //  `-.-.'`-----' /  /  |   |  `. \\
     '._' / \         _/(   `/   )- ---' ;  /__.J   L.__.\ :
      `._;/7(-.......'  /        ) (     |  |            | |
      `._;l _'--------_/        )-'/     :  |___.    _._./ ;
        | |                 .__ )-'\  __  \  \  I   1   / /
        `-'                /   `-\-(-'   \ \  `.|   | ,' /
                           \__  `-'    __/  `-. `---'',-'
                              )-._.-- (        `-----'


                {skeleton.name}



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
            print(heroName, "strikes at the Skeleton")
            createdHero.attack(skeleton, createdHero.strength)
            if skeleton.health > 0:

                print(skeleton.name, "retaliates against", heroName)
                skeleton.attack(createdHero, skeleton.strength)
                
            else:
                print("Skeleton Warrior defeated!")
        
        if userChoice == 2:
            print(f"{createdHero.name} inspects {skeleton.name} ")
            print("It's a well equipped skeleton with a sword and shield.")
            print(f"{skeleton.name} Strength: {skeleton.strength}")
            print(f"The {skeleton.name} attacks while you're staring at it! ")
            skeleton.attack(createdHero, skeleton.strength)  

        
        if userChoice == 3:
            print(heroName, "cures their own wounds")
            createdHero.heal()
            print(skeleton.name, "attacks!")
            skeleton.attack(createdHero, skeleton.strength)
        
        if userChoice == 4:
            print(f"{heroName} runs away from the fight and heads home")
            break

        if skeleton.health <= 0:
            createdHero.loot(createdHero, skeleton.coins)
            print(f"You found {skeleton.coins} gold")
            print("You defeat the skeleton and return home")
            

        if createdHero.health <= 0:
            print(f"The skeleton strikes down {heroName}")

            break

def croissantFight():

    print(f"{heroName} encounters The Buttery Croissant!")
    croissant = Enemy("The Buttery Croissant", 500, 250, 200)

    while croissant.health> 0 or createdHero.health < 0:
        try:
            userChoice = ""
            userChoice = int(input(f"""


                        HP  {croissant.health} 

     ____                                    ?~~bL
    z@~ b                                    |  `U,
   ]@[  |                                   ]'  z@'
   d@~' `|, .__     _----L___----, __, .  _t'   `@j
  `@L_,   "-~ `--"~-a,           `C.  ~""O_    ._`@
   q@~'   ]P       ]@[            `Y=,   `H+z_  `a@
   `@L  _z@        d@               Ya     `-@b,_a'
    `-@d@a'       )@[               `VL      `a@@'
      aa~'   ],  .a@'                qqL  ), ./~
      @@_  _z~  _d@[                 .V@  .L_d'
       "~@@@'  ]@@@'        __      )@n@bza@-"
         `-@zzz@@@L        )@@z     ]@@=%-"
           "~~@@@@@bz_    _a@@@@z___a@K
               "~-@@@@@@@@@@@@@@@@@@~"  
                  `~~~-@~~-@@~~~~~'
                
                   {croissant.name}



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
            print(heroName, "takes a bite of the croissant")
            createdHero.attack(croissant, createdHero.strength)
            if croissant.health > 0:

                print(croissant.name, "slaps", heroName)
                croissant.attack(createdHero, croissant.strength)
                
            else:
                print("The Buttery Croissant is defeated!")
        
        if userChoice == 2:
            print(f"{createdHero.name} inspects {croissant.name} ")
            print("It's an enormous croissant that fills the air with it's buttery scent.")
            print(f"{croissant.name} Strength: {croissant.strength}")
            print(f"{croissant.name} flexes while you're staring at it! ") 

        
        if userChoice == 3:
            print(heroName, "cures their own wounds")
            createdHero.heal()
            print(croissant.name, "attacks!")
            croissant.attack(createdHero, croissant.strength)
        
        if userChoice == 4:
            print(f"{heroName} and runs away from the fight and heads home")
            break

        if croissant.health <= 0:
            createdHero.loot(createdHero, croissant.coins)
            print(f"You found {croissant.coins} gold")
            print("You somehow manage to defeat the deleicous looking croissant and return home")
            

        if createdHero.health <= 0:
            print(f"{croissant.name} destroys {heroName}")

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
            *   1. Hunt Monster         2. Rest      *
            *                                        *  
            *   3. Check Stats          4. Upgrades  *   
            *                                        *
            *   5. ???                  0. Quit Game *
            *                                        *
            ******************************************                                          
            What do you want to do? (pick a number)
            """))
        
        except ValueError  :
            print("Please enter a valid number")

        if userChoice == 1:
            if createdHero.health < 75:

                fight= [goblinFight, wolfFight]
                random.choice(fight)()

            else:
                fight = [goblinFight, wolfFight, skeletonFight]
                random.choice(fight)()

        if userChoice == 2:
            if createdHero.health == createdHero.maxHealth:
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
        
        if userChoice == 5:
            croissantFight()

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
                     _-' UPGRADE HUT '-_
                      |___|||||||||___|
                      |___|||||||||___|
                      |___|||||||o|___|
                      |___|||||||||___|
                      |___|||||||||___|
                      |___|||||||||___|



            {heroName}                             HP {createdHero.health}
            ******************************************
            *                                        *
            *   1. Upgrade Strength (100 Gold)       *
            *                                        *  
            *   2. Upgrade Health (100 Gold)         *
            *                                        *
            *   3. Leave                             *                               
            *                                        *
            ******************************************
            What do you want to do? (pick a number)
            """))
        
        except ValueError  :
            print("Please enter a valid number")

        if userChoice == 1:
            createdHero.upgradeSword(createdHero.strength, createdHero.coins)

        if userChoice == 2:
            createdHero.upgradeHealth(createdHero.maxHealth, createdHero.coins)

        if userChoice == 3:
            print("Come again!")
            break


home()