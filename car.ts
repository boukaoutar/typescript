interface MyParameters {color: string, brand: string};

abstract class Car implements MyParameters{
    color: string;
    brand: string;
    state = false;

    constructor(parametrs: MyParameters){
        this.color = parametrs.color;
        this.brand = parametrs.brand;
    }

    start(): void {
        this.state = true;
    }

    getState(): void {
        console.log(this.state);
    }
}

class blueCar extends Car {
    stop(): boolean {
        this.state = false;
        return this.state
    }
}

let car = new blueCar({
    color: 'red',
    brand: "BMW"
});

car.getState()
car.start()
car.getState()
car.stop()