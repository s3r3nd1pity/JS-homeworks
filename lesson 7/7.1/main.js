function User(id, name, surname, email, phone) {
this.id=id;
this.name=name;
this.surname=surname;
this.email=email;
this.phone=phone;
}
let arrayOfUsers = []
let user1 = new User(12, 'Anna', 'Smith', 'anna.smith1@gmail.com', '+10000001234');
let user2 = new User(11, 'John', 'Doe', 'john.doe2@gmail.com', '+10000002345');
let user3 = new User(10, 'Emily', 'Johnson', 'emily.johnson3@gmail.com', '+10000003456');
let user4 = new User(9, 'Michael', 'Williams', 'michael.williams4@gmail.com', '+10000004567');
let user5 = new User(22, 'Sophia', 'Brown', 'sophia.brown5@gmail.com', '+10000005678');
let user6 = new User(16, 'James', 'Davis', 'james.davis6@gmail.com', '+10000006789');
let user7 = new User(35, 'Olivia', 'Miller', 'olivia.miller7@gmail.com', '+10000007890');
let user8 = new User(160, 'Liam', 'Garcia', 'liam.garcia8@gmail.com', '+10000008901');
let user9 = new User(5, 'Isabella', 'Martinez', 'isabella.martinez9@gmail.com', '+10000009012');
let user10 = new User(2, 'Noah', 'Hernandez', 'noah.hernandez10@gmail.com', '+10000010123');
arrayOfUsers.push(user1)
arrayOfUsers.push(user2)
arrayOfUsers.push(user3)
arrayOfUsers.push(user4)
arrayOfUsers.push(user5)
arrayOfUsers.push(user6)
arrayOfUsers.push(user7)
arrayOfUsers.push(user8)
arrayOfUsers.push(user9)
arrayOfUsers.push(user10)
console.log(arrayOfUsers)
