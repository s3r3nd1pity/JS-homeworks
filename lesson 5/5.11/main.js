let sumOfNumbers = (arr)=>{
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    document.write(sum)
}
let array = [1,2,3,4]
sumOfNumbers(array)