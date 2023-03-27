abstract class Car {
    color: string;
    brand: string;
    state = false;

    constructor(color: string, brand: string){
        this.color = color;
        this.brand = brand;
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

let car = new blueCar('blue',"BMW");

car.getState()
car.start()
car.getState()
car.stop()