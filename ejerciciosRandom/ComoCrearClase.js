class Persona {
    #nombre;
    #apellido;
    #edad;
    constructor(nom, ape, ed) {
        this.#nombre = nom
        this.#apellido = ape
        this.#edad = ed
    }

    getInfo() {
        return `${this.#nombre} ${this.#apellido}, ${this.#edad} años`
    };
    getNombre = () => this.#nombre;
    getApellido = () => this.apellido;
    getEdad = () => this.#edad;


    setNombre(nom) {
        this.nombre = nom
    };
    setApellido = (ape) => this.#apellido = ape;
    setEdad = (ed) => this.#edad = ed;

}

let bob = new Persona("Bob", "Ross", 31)

console.log(bob.getEdad())

/*
Para declarar una clase
1.- class Nombre {}
2.- Definimos las variables que serán privadas con #nombreVariable;
3.- Creamos el constructor si es que necesita uno 
constructor (variable1,variable2){
    this.#nombreVariable = variable1
}
4.- Creamos los métodos que queramos ej: getInfo=()=>{}
4.1 .- Si es de forma antigua es getInfo(){}

*/