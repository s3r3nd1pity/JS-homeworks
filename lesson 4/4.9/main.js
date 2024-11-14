function f(users) {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)

    }

}
 let a = [
    {id:12, name:'lorem', age:45},
    {id:12, name:'lorem', age:45},
    {id:12, name:'lorem', age:45},
    {id:12, name:'lorem', age:45},
]
f(a)