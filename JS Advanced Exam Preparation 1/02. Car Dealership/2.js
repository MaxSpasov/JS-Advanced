class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (typeof model !== "string" || model === "") {
            throw new Error("Invalid input!");
        }
        if (typeof horsepower !== "number" || horsepower <= 0) {
            throw new Error("Invalid input!");
        }
        if (typeof price !== "number" || price <= 0) {
            throw new Error("Invalid input!");
        }
        if (typeof mileage !== "number" || mileage <= 0) {
            throw new Error("Invalid input!");
        }
        const car = {
            model,
            horsepower,
            price,
            mileage,
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex((car) => car.model === model);
        if (carIndex === -1) {
            throw new Error(`${model} was not found!`);
        }
        const car = this.availableCars[carIndex];
        if (car.mileage <= desiredMileage) {
            var soldPrice = car.price.toFixed(2);
        } else if (car.mileage - desiredMileage <= 40000) {
            var soldPrice = (car.price * 0.95).toFixed(2);
        } else {
            var soldPrice = (car.price * 0.9).toFixed(2);
        }
        this.totalIncome += Number(soldPrice);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice,
        });
        return `${model} was sold for ${soldPrice}$`;
    }

    currentCars() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let carsInfo = "-Available cars:\n";
        this.availableCars.forEach((car) => {
            carsInfo += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        });
        return carsInfo.trim();
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        const sortedCars = this.soldCars.sort((a, b) => {
            if (criteria === "horsepower") {
                return b.horsepower - a.horsepower;
            } else {
                return a.model.localeCompare(b.model);
            }
        });
        let carsInfo = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        carsInfo += `${this.soldCars.length} cars sold:\n`;
        sortedCars.forEach((car) => {
            carsInfo += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice}$\n`;
        });
        return carsInfo.trim();
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));