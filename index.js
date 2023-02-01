// Code your solutions in this file
 

function writeCards(cards, event) {
    const newArray = []
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return newArray;
}

function countDown(number) {
        while (number >= 0){
        console.log(number--);
        }
}
