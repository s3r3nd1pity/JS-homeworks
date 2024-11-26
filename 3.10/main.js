let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
console.log('WHILE')
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i++;

}
console.log('FOR')
for (let i2 = 0; i2 < numbers.length; i2++) {
    console.log(numbers[i2])
}
console.log('WHILE непарні індекси')
let i3 = 0

while (i3 < numbers.length) {
    if (i3 % 2 === 0) {
        console.log()
    } else {
        console.log(numbers[i3])
    }
    i3++;

}
console.log('FOR непарні індекси')
for (let i4 = 0; i4 < numbers.length; i4++) {
    if ([i4] % 2 === 0) {
        console.log()
    } else {
        console.log(numbers[i4])
    }
}
console.log('WHILE парні')
let i5 = 0
while (i5 < numbers.length) {
    if (numbers[i5] % 2 === 0) {
        console.log(numbers[i5])
    } else {
        console.log()
    }
    i5++;

}
console.log('FOR парні')
for (let i6 = 0; i6 < numbers.length; i6++) {
    if (numbers[i6] % 2 === 0) {
        console.log(numbers[i6])
    } else {
        console.log()
    }
}
console.log('Кратне трьом замінити на okten')
for (let i7 = 0; i7 < numbers.length; i7++) {
    if (numbers[i7] % 3 === 0) {
        console.log('okten')
    } else {
        console.log(numbers[i7])
    }
}
console.log( 'В зворотньому порядку')
for (let i8 =numbers.length-1 ; i8 >=0; i8--) {
    console.log(numbers[i8])
}
