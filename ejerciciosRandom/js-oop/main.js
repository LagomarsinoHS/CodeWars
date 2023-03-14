// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    }
}
const circle = createCircle(1)

/*
Cuando creamos un circulo como lo hicimos arriba, estamos diciendo explicitamente que la funcion devolvera un objeto con 1 propiedad y 1 metodo
*/

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const anotherCircle = new Circle(1)
/*
Al usar la palabra new antes de la invocación de la funcion, esto estará creando un objeto vacío inicialmente ({}).
Por eso, en la definicion de esta, usamos this, haciendo alusion a ese {} que se creo por la key "new" al llamar a la funcion
*/

//? Las 2 formas son correctas, la unica diferencia es la forma de defiminirlas

/*
Si queremos crear variables privadas que al llamar por ejemplo circle. y no me muestre sus metodos, es mas facil usarlo con el constructor function.
Para hacerlo debemos crear variables en vez de definirlas con el this, de esa manera no serán parte del objeto instanciado
*/

function NewCircle(radius) {
    this.radius = radius
    let defaultLocation = { x: 0, y: 0 } // propiedad privada, no se vera en newCircle.

    //Se puede definir un getter de la siguiente manera
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid Location.')
            }
            defaultLocation = value
        }
    })//El primer parámetro es al objeto el cual hará referencia, el 2do, es el nombre que quiero ponerle, 3ro un objeto donde defino otras propiedades, como el get o el set
}

const newCircle = new NewCircle(1)
newCircle.defaultLocation //al llamar esto, gatillará directamente el get, así evito crear un metodo llamado getAlgo y asi lo puedo crear con un mejor nombre

newCircle.defaultLocation = { x: 1, y: 2 } //Con esto se asume que llamas al set ya que se le pasa información
