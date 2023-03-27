var Car = /** @class */ (function () {
    function Car(color, brand) {
        this.state = false;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.start = function () {
        this.state = true;
    };
    Car.prototype.getState = function () {
        console.log(this.state);
    };
    return Car;
}());
var car = new Car('blue', "BMW");
car.getState();
car.start();
car.getState();
