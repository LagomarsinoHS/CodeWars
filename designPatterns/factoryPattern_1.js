/*
El patron factory finalmente se utiliza para centralizar un lugar donde se hace toda la creacion, asi evitamos estar haciendo tantas instancias de un objeto
con la palabra New, aquí creamos 2 clases y en vez de crear cada uno por separado delegamos a la factory que decida como crear y hacia quien las instancias
de clase
*/

//Creo una clase Car
class Car {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "silver";
    }
}

//Creo una clase Truck
class Truck {
    constructor(options) {
        this.wheels = options?.wheels || 6;
        this.doors = options?.doors || 2;
        this.color = options?.color || "red";
    }
}

//Creo mi clase factory la cual se encargara de crear dependiendo de que le paso

class Factory {

    //Metodo de creación EN factory
    create = (vehicleType, options) => {

        if (!vehicleType) return "unable to make vehicle. Please specify a vehicle type and tryagain!"


        let vehicle;
        if (vehicleType === "car") {
            vehicle = new Car(options);
        } else if (vehicleType === "truck") {
            vehicle = new Truck(options);
        }

        //Defino el tipo
        vehicle.vehicleType = vehicleType;

        //Defino los metodos que tendrá el vehiculo
        vehicle.startEngine = () => console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = () => console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = () => console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }

};

const vehicleFactory = new Factory();

const car = vehicleFactory.create("car", {
    wheels: 4,
    doors: 2,
    color: "black",
});

console.log(car)
console.log(car.startEngine())
console.log(car.driveVehicle())

// prints:
//Car {
//  wheels: 4,
//  doors: 4,
//  color: 'silver',
//  vehicleType: 'car',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving car engine
// Driving car...

const truck = vehicleFactory.create("truck", {
    wheels: 4,
    doors: 2,
    color: "yellow",
})

console.log(truck)
console.log(truck.startEngine())
console.log(truck.stopEngine())
// prints
//Truck {
//  wheels: 4,
//  doors: 2,
//  color: 'yellow',
//  vehicleType: 'truck',
//  startEngine: [Function],
//  driveVehicle: [Function],
//  stopEngine: [Function]
//}

// Reving truck engine
// Stop truck engine

