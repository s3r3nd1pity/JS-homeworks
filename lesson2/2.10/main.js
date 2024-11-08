let number1 = +prompt("Введіть перше число")
let number2 = +prompt("Введіть друге число")
if ( number1 > number2){
    console.log('Перше число є максимальним')
}else if ( number1 < number2){
    console.log('Друге число є максимальним')
}
else if ( number1 === number2){
    console.log('Числа рівні')
}
else {
    console.log('???')
}

