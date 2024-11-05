let day = +prompt('Введіть число')
if ( day >= 1 && day <=10){
    console.log('Число знаходиться в першій декаді')
} else if ( day >= 11 && day <=20){
    console.log('Число знаходиться в другій декаді')
} else if ( day >= 21 && day <=31){
    console.log('Число знаходиться в третій декаді')
} else {
    console.log('???')

}