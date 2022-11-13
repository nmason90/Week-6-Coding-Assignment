const SUITS = ["Spade", "Heart", "Club", "Diamond"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const CARD_VALUE_MAP = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
} // assigns numerical value to each card in the Deck to be able to compare values, in particular for letter cards,
// and determine which card has the higher value


class Player { 
    constructor(name) {
        this.name = name; 
        this.score = 0; 
        this.hand = [];
    }
    playCard() {
        return this.hand.pop ()
    }
    incrementScore() {
        this.score += 1
    }
} // end Player; creates Player class to generate Player information including name, score (which is incremented with this.score +=1, 
  //and player's dealt cards which is held within the array)

class Deck { 
    constructor (cards = freshDeck()) {
        this.cards = cards
    }
    shuffleDeck () {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
    dealCards (p1, p2) {
        while (this.cards.length > 0) {
            p1.hand.push(this.cards.pop());
            p2.hand.push(this.cards.pop());
        }
    }
} //end Deck; creates Deck class which includes all cards which are generated through the freshDeck function,
  // and shuffles cards which are then dealt to each player

class Card {
    constructor (suit, value) {
        this.suit = suit
        this.value = value
    }
} //end Card; creates Card class by generating card suit and value elements 

function freshDeck () {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card (suit, value)
    })
   })
} // function condenses "suit" and "value" arrays (const listed above) and condenses them into one array to create all cards in 
  // a deck   


const playerOne = new Player ("Tiger"); // creates new Player
const playerTwo = new Player ("Vivi"); // creates new Player
const gameDeck = new Deck (); // creates Game Deck

gameDeck.shuffleDeck(); // shuffles Deck
gameDeck.dealCards (playerOne, playerTwo); // deals 26 cards into array for both players
console.log(playerOne, playerTwo); // prints out cards in each player's hand


function comparePoints (playerOne, playerTwo) {
    for (let i = 0; i < playerOne.hand.length; i++) {
        if (CARD_VALUE_MAP[playerOne.hand[i].value] > CARD_VALUE_MAP[playerTwo.hand[i].value]) {
            playerOne.score += 1;
            console.log(`${playerOne.name} is this round's winner!`);
        } else if (CARD_VALUE_MAP[playerTwo.hand[i].value] > CARD_VALUE_MAP[playerOne.hand[i].value]) {
            playerTwo.score += 1; 
            console.log(`${playerTwo.name} is this round's winner!`);
        } else {
            console.log(`It's a tie...no points for ${playerOne.name} or ${playerTwo.name}.`)
        }
    }
} //creates function to compare points, given "CARD_VALUE_MAP" that assigns numerical values to all cards, and determine
//which player has the higher point value each time players' cards are played

function finalScore (playerOne, playerTwo) {
    if (playerOne.score > playerTwo.score) {
        console.log (`${playerOne.name} is the overall winner with a score of ${playerOne.score}!`);
    } else if (playerTwo.score > playerOne.score) {
        console.log (`${playerTwo.name} is the overall winner with a score of ${playerTwo.score}!`);
    } else {
        console.log(`${playerOne.name} and ${playerTwo.name} have a tie score of ${playerOne.score} - play again to find a winner!`);
    }
} // compares overall score, which is incremented over each iteration of the comparePoints function, to determine the overall 
//winner of the game (26 iterations are expected before determining a final player)

comparePoints (playerOne, playerTwo); // prints out each round that compares point values of players' cards

finalScore (playerOne, playerTwo); // prints out overall score for winning player 
