# Goblin Game

This is a simple game made by using python. The user's character is created after entering a name and will have the option to fight monsters. Every part of the game requires the user to choose from a set of choices displayed in a menu. The game ends when either a menu selection from the user, or if the user's health is depleted.

## How the stats work

The game uses classes to setup the stats for the user's character and each of the enemies fought. Below is how the class for the user character is made.

```
class Hero:
    def __init__(self,name,health, maxHealth, strength, coins = 0):
        self.name = name
        self.health = health
        self.maxHealth = maxHealth
        self.strength = strength
        self.coins = coins
```

The enemy class inherits the Hero class, but with different values depending on what's being fought

## The menus

After the user character is created, every screen that the user is on will involve a menu being displayed with options to choose from. Below is an example of the home menu.
All of the ASCII art was used from https://www.asciiart.eu/, except for the menu itself.

```
                          ____||____
                        ///////////\\
                        ///////////  \\
                        |    _    |  |
                        |[] | | []|[]|
                        |   | |   |  |


            ******************************************
            *                                        *
            *   1. Hunt Monster         2. Rest      *
            *                                        *
            *   3. Check Stats          4. Upgrades  *
            *                                        *
            *   5. ???                  0. Quit Game *
            *                                        *
            ******************************************
```

Each menu is a while loop that will call a function or method depending on the user's choice.

## The home menu

The home menu is a function that is called immediately after the user character is created. Each of the options has a function or method called depending on the user's choice. The Hunt Monster choice will use the random.choice() function to randomize what the user fights.

```
        if userChoice == 1:
            if createdHero.health < 75:

                fight= [goblinFight, wolfFight]
                random.choice(fight)()

            else:
                fight = [goblinFight, wolfFight, skeletonFight]
                random.choice(fight)()
```

Each monster fight function was placed in a list to make this possible. The third monster requires the user's health to be above a certain amount before it appears. The ??? option from the menu is a super boss the user can fight if they believe they are strong enough.

## How the fights work

Each monster fought is stored in a function with their own while loop and the option to attack, inspect, heal, or run away. The loop ends if the monster's or user's health is depleted. The monster's health and user's health will always be displayed during each fight. The user wil receive coins if they win the fight.

```

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
```

- The attack option call the attack method, which will take the user character's strength and subtract it from the monster's health. The enemy uses the same method to attack the user.

- The inspect enemy function will give a description of the enemy and display it's strength

- The heal method will allow the user to heal themself, but the enemy will always attack after that method is called

- The run option will break the user out of the fight loop to retun to the starting menu/home menu.

## The upgrade store

The upgrade store is a function accessed from the home menu. The user spends their coins to upgrade their health and/or strength. Each upgrade is a method called to increase one of those stats permanently.

```
    def upgradeHealth(self, health, coins):
        if self.coins <= 99:
            print("You don't have enough gold to do this")
        else:
            print("You feel healthier")
            self.maxHealth += 25
            self.coins  -= 100
            self.health = self.maxHealth
```

The health upgrade uses two different health variables. The max health variable was made for the user's ability to heal, without exceeding what their max health stat is. The regular health stat is what gets lowered during fights.

Here's a link to the medium article written about this program:
https://medium.com/@sg21894/digitalcrafts-rpg-project-915784667647
