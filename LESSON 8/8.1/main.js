function deepCopy(object) {
    let functionsSave = []
    for (const objectKey in object) {
        if (typeof object[objectKey] === 'function'){
            let copyFunction = object[objectKey].bind({})
            functionsSave.push({copyFunction,objectKey})
        }

    }
let cloneObject =  JSON.parse(JSON.stringify(object))
    for (const f of functionsSave) {
        cloneObject[f.objectKey] = f.copyFunction
    }
    return cloneObject
}
let obj = {lorem(){console.log('lorem')}, cat:'cat', number:1}
console.log(obj)
obj.lorem()
console.log(deepCopy(obj));
deepCopy(obj).lorem()
console.log(obj.cat === deepCopy(obj).cat)



