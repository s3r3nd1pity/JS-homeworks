
let listOfUsers = (users) => {
    for (const user of users) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age}</div>`)

    }
}
let users = [
    {id: 25, name: 'Olex', age: 28},
    {id: 62, name: 'Olha', age: 35},
    {id: 1, name: 'Mana', age: 15},
    {id: 51, name: 'Thi', age: 40},]
listOfUsers(users)