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
console.log(cards)
console.log('Spade ace')
console.log(cards.find((card) => card.suit === 'spade' && card.value === 'ace'))
console.log('6')
console.log(cards.filter((card) => card.value === '6'))
console.log('Red cards')
console.log(cards.filter((card) => card.color === 'red'))
console.log('Diamond suit')
console.log(cards.filter((card) => card.suit === 'diamond'))
console.log('Clubs with 9+ value')
console.log(cards.filter((card) => card.suit === 'clubs' && card.value !== '6' && card.value !== '8' && card.value !== '7'))




