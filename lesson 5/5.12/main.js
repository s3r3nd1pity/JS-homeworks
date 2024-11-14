let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let index = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = index
        document.write(arr)
    }
    else {
        document.write(arr)
    }

}
let array = [1,2,3,4]
swap(array, 0,1)