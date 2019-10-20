// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"];

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}


writeCards(names);

function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }