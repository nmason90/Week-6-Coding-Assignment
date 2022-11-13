class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
    playCard () {
        return this.hand.pop()
    }
    incrementScore() {
        this.score += 1
    }
} // end Player

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    describe() {
        return `${this.value} of ${this.suit}`
    }
} // end Card

class Deck {
    constructor () {
        this.cards = []
    }
    shuffleDeck () {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }
    dealCards (p1, p2) {
        while(this.cards.length > 0) {
            p1.hand.push(this.cards.pop());
            p2.hand.push(this.cards.pop());
        }
    }
} // end Deck 

const playerOne = new Player(prompt("Please enter player one's name: "));
const playerTwo = new Player(prompt("Please enter player two's name: "))
console.log(playerOne, playerTwo); 
playerOne.incrementScore();
playerTwo.incrementScore();
console.log(playerOne.score, playerTwo.score);

const gameDeck = new Deck();

const suits = ["spades", "hearts", "diamonds", "clubs"];
 
suits.forEach( ( suit )=> {
   for ( let i = 2; i <= 14; i++ ) {
        gameDeck.cards.push(new Card(i, `${i} of ${suit}`));
   }
});

gameDeck.shuffleDeck();
gameDeck.dealCards(playerOne, playerTwo);
console.log(playerOne, playerTwo);

while (playerOne.hand.length > 0) {
    let p1CurrentCard = playerOne.playCard();
    let p2CurrentCard = playerTwo.playCard(); 
    console.log(p1CurrentCard, p2CurrentCard);
}
//will use some classes, some code; even if have class game play, still have to create gameplay = new object, 
//then kick off ; card, deck, player - good ones to start with, then clean up how you want game pplay to flow 