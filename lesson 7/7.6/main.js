function CarsMaker(model, manufacturer, yearManufacture, maxSpeed, engineCapacity) {
    this.Model = model
    this.Manufacturer = manufacturer
    this.YearManufacture = yearManufacture
    this.MaxSpeed = maxSpeed
    this.EngineCapacity = engineCapacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`);
    }
    this.info = function () {
        for (const option in this) {
            if (typeof this[option] !== 'function') {
                console.log(`${option} - ${this[option]}`);
            }


        }

    }
    this.increaseMaxSpeed = function (newSpeed) {

        if (newSpeed > -this.MaxSpeed) {
            this.MaxSpeed = this.MaxSpeed + newSpeed
        }

    }
    this.changeYear = function (newValue) {
        if (newValue > -this.YearManufacture) {
            this.YearManufacture = this.YearManufacture + newValue
        }


    }
    this.newDriver = function (driver) {
        this.driver = driver

    }
}

let car = new CarsMaker("Camry", "Toyota", 2021, 220, 2.5)
let driver= {
    name: "Alice",
    age: 28
}
car.increaseMaxSpeed(-4)
car.newDriver(driver)
car.changeYear(20)
car.info()
car.drive()

console.log(car)