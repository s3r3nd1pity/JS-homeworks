let minOfNumbers = (numbers) => {
    let min = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {

            min = numbers[i]
        }

    }
    document.write(min)
}
let numbers = [-5, -6, 1, 4, -10, 100]
minOfNumbers(numbers)
