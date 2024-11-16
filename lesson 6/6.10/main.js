let cardSuits = [
    {name: 'spade', color: 'black'},
    {name: 'diamond', color: 'red'},
    {name: 'heart', color: 'red'},
    {name: 'clubs', color: 'black'}]
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']

let cards = []

for (let cardSuit of cardSuits) {
    for (let value of values) {
        cards.push({value: value, suit: cardSuit.name, color: cardSuit.color})
    }
}
let sortedCards = cards.reduce((accum, card)=> {
    switch (card.suit) {
        case 'spade':
            accum.spades.push(card)
            break
        case 'diamond':
            accum.diamonds.push(card)
            break
        case 'heart':
            accum.hearts.push(card)
            break
        case 'clubs':
            accum.clubs.push(card)
            break

    }
    return accum
}, {
    spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
})
console.log(sortedCards)