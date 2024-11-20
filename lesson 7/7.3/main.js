function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayOfUsers = [
    new User(12, 'Anna', 'Smith', 'anna.smith1@gmail.com', '+10000001234'),
    new User(11, 'John', 'Doe', 'john.doe2@gmail.com', '+10000002345'),
    new User(10, 'Emily', 'Johnson', 'emily.johnson3@gmail.com', '+10000003456'),
    new User(9, 'Michael', 'Williams', 'michael.williams4@gmail.com', '+10000004567'),
    new User(22, 'Sophia', 'Brown', 'sophia.brown5@gmail.com', '+10000005678'),
    new User(16, 'James', 'Davis', 'james.davis6@gmail.com', '+10000006789'),
    new User(35, 'Olivia', 'Miller', 'olivia.miller7@gmail.com', '+10000007890'),
    new User(160, 'Liam', 'Garcia', 'liam.garcia8@gmail.com', '+10000008901'),
    new User(5, 'Isabella', 'Martinez', 'isabella.martinez9@gmail.com', '+10000009012'),
    new User(2, 'Noah', 'Hernandez', 'noah.hernandez10@gmail.com', '+10000010123'),
]
console.log(arrayOfUsers.sort((user1, user2)=> user1.id-user2.id));