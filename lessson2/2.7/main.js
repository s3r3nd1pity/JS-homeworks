let time = +prompt('Введіть хвилину')
if (time >= 0 && time <= 14) {
    console.log('Число знаходиться в першій чверті')
} else if (time >= 15 && time <= 29) {
    console.log('Число знаходиться в другій чверті')
} else if (time >= 30 && time <= 44) {
    console.log('Число знаходиться в третій чверті')
} else if (time >= 45 && time <= 59) {
    console.log('Число знаходиться в четвертій чверті')
}
else  {
    console.log('???');
}
