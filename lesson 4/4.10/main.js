function swap(arr,index1,index2) {
if (index1<arr.length && index2<arr.length ){
    let temp = arr[index1]

    arr[index1] = arr[index2]
    arr[index2]=temp

}

return arr
}
 console.log(swap([1,2,3,4], 0,1 ))