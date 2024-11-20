class Costumers {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let arrayOfCostumers = [
    new Costumers(1, 'John', 'Doe', 'john.doe@example.com', '123456789', [
        { product: 'Apple', price: '2$' },
    ]),
    new Costumers(2, 'Jane', 'Smith', 'jane.smith@example.com', '987654321', [
        { product: 'Orange', price: '3$' },
        { product: 'Grapes', price: '5$' },
    ]),
    new Costumers(3, 'Alex', 'Brown', 'alex.brown@example.com', '555666777', [
        { product: 'Tomato', price: '4$' },
    ]),
    new Costumers(4, 'Emily', 'Clark', 'emily.clark@example.com', '444555666', [
        { product: 'Milk', price: '1.5$' },
        { product: 'Bread', price: '1$' },
        { product: 'Butter', price: '2.5$' },
    ]),
    new Costumers(5, 'Michael', 'Johnson', 'michael.j@example.com', '333444555', [
        { product: 'Eggs', price: '2.5$' },
    ]),
    new Costumers(6, 'Sarah', 'Williams', 'sarah.w@example.com', '222333444', [
        { product: 'Yogurt', price: '1$' },
        { product: 'Juice', price: '2$' },
    ]),
    new Costumers(7, 'Chris', 'Davis', 'chris.d@example.com', '111222333', [
        { product: 'Coffee', price: '4$' },
        { product: 'Tea', price: '2$' },
        { product: 'Sugar', price: '1.5$' },
        { product: 'Milk', price: '1.5$' },
    ]),
    new Costumers(8, 'Laura', 'Taylor', 'laura.t@example.com', '999888777', [
        { product: 'Butter', price: '2.5$' },
    ]),
    new Costumers(9, 'Robert', 'Moore', 'robert.m@example.com', '888777666', [
        { product: 'Rice', price: '5$' },
        { product: 'Pasta', price: '3$' },
    ]),
    new Costumers(10, 'Anna', 'Lee', 'anna.lee@example.com', '777666555', [
        { product: 'Chicken', price: '6$' },
        { product: 'Fish', price: '8$' },
        { product: 'Shrimp', price: '12$' },
    ])
]
console.log(arrayOfCostumers.sort((costumer1, costumer2) => costumer1.order.length - costumer2.order.length));