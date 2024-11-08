let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write('True status')
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status ){
        document.write( `<li>${user.name} ${user.status}</li>`)
    }}
document.write('False status')
for (let i = 0; i < users.length; i++) {
    const user = users[i];
if (!user.status){
    document.write(`<div><li>${user.name} ${user.status}</li></div>`)
}}
document.write('Age more 30')
for (let i = 0; i < users.length; i++) {
    const user = users[i];
if (user.age > 30){
    document.write(`<li>${user.name} ${user.age}</li>`)
}}
