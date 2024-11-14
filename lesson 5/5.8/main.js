// function list(items) { document.write(`<ul>`)
//     for (const item of items) {
//         document.write(`<li>${item}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// list ([1,2,4,true,'meow',5,6,false,'hi'])
let list = (items)=>{document.write(`<ul>`)
    for (const item of items) {
       document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
let itemsArray = [1,2,4,true,'meow',5,6,false,'hi']
list(itemsArray)
