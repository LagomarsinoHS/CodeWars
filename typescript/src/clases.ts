abstract class Vehiculo {
    protected numeroPuertas: number;
    protected velocidad: number;
    protected marca: string;

    constructor(numeroPuertas: number, velocidad: number, marca: string) {
        this.numeroPuertas = numeroPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }
}

class Auto extends Vehiculo {
    private cantidadRuedas: number;

    constructor(numeroPuertas: number, velocidad: number, marca: string, cantidadRuedas: number) {
        super(numeroPuertas, velocidad, marca)
        this.cantidadRuedas = cantidadRuedas
    }

    getCantidadRuedas() {
        return this.cantidadRuedas;
    }
}

const ferrari = new Auto(2, 300, 'Ferrari', 4)
console.log(ferrari);
