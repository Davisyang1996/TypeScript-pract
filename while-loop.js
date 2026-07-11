//while loop that generates a random card from the cards array until we get a spade
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
let currentCount = 0
while (currentCard!=='spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

// do while loop that adds cups of sugar until we reach the needed amount
let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
  cupsAdded++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded) 

  //run with node "while-loop.js"