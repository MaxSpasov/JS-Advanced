const assert = require('chai').assert;
const rentCar = require('./rentCar');
describe("Tests for rentCar object", function () {
    describe("searchCar", function () {
        it("should return the number of matching elements and the model of the car in the message", function () {
            const shop = ["Volkswagen", "BMW", "Audi"];
            const model = "BMW";
            const expected = "There is 1 car of model BMW in the catalog!";
            const result = rentCar.searchCar(shop, model);
            assert.strictEqual(result, expected);
        });

        it("should throw an error if there are no matching elements", function () {
            const shop = ["Volkswagen", "BMW", "Audi"];
            const model = "Toyota";
            assert.throws(() => rentCar.searchCar(shop, model), Error, "There are no such models in the catalog!");
        });

        it("should throw an error if the input is invalid", function () {
            const shop = ["Volkswagen", "BMW", "Audi"];
            const model = 123;
            assert.throws(() => rentCar.searchCar(shop, model), Error, "Invalid input!");
        });
    });

    describe("calculatePriceOfCar", function () {
        it("should return the model and the price it will cost for renting a car for the given days", function () {
            const model = "Audi";
            const days = 5;
            const expected = "You choose Audi and it will cost $180!";
            const result = rentCar.calculatePriceOfCar(model, days);
            assert.strictEqual(result, expected);
        });

        it("should throw an error if there is no such model", function () {
            const model = "Toyota";
            const days = 5;
            assert.throws(() => rentCar.calculatePriceOfCar(model, days), Error, "No such model in the catalog!");
        });

        it("should throw an error if the input is invalid", function () {
            const model = "Audi";
            const days = "five";
            assert.throws(() => rentCar.calculatePriceOfCar(model, days), Error, "Invalid input!");
        });
    });

    describe("checkBudget", function () {
        it("should return 'You rent a car!' if the budget is bigger or equal to cost", function () {
            const costPerDay = 20;
            const days = 5;
            const budget = 120;
            const expected = "You rent a car!";
            const result = rentCar.checkBudget(costPerDay, days, budget);
            assert.strictEqual(result, expected);
        });

        it("should return 'You need a bigger budget!' if the budget is less than cost", function () {
            const costPerDay = 20;
            const days = 5;
            const budget = 90;
            const expected = "You need a bigger budget!";
            const result = rentCar.checkBudget(costPerDay, days, budget);
            assert.strictEqual(result, expected);
        });

        it("should throw an error if the input is invalid", function () {
            const costPerDay = 20;
            const days = "five";
            const budget = 90;
            assert.throws(() => rentCar.checkBudget(costPerDay, days, budget), Error, "Invalid input!");
        });
    });
});
