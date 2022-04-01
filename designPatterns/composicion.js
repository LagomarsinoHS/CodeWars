/*
### Composición ###
Cuando generamos pequeñas funciones que terminan creando una estructura especifica que definimos, en otras palabras, es crear mini funciones
con una tarea en particular, que luego, al unirse todas o algunas, >componen< algo en particular
*/

const personas = [
    { edad: 20, nombre: 'Pedro', apellido: 'Perez' },
    { edad: 25, nombre: 'Alice', apellido: 'Alvarado' },
    { edad: 30, nombre: 'Juan', apellido: 'Gutierrez' },
    { edad: 10, nombre: 'Katherine', apellido: 'Gomez' },
    { edad: 1, nombre: 'María José', apellido: 'Estrada' }
]

const head = array => array[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})

const formatoFinal = (data) => `${data.nombreCompleto} tiene ${data.edad} año(s)`

const traerPrimerInfante = array => formatoFinal(formateo(head((array.filter(persona => persona.edad < 2)))));
console.log(traerPrimerInfante(personas))

//Para evitar tener tantas funciones en el codigo como en la línea 23, podemos generar una funcion componedora de funciones
const compose = (...fns) => (input) => fns.reduceRight((accFns, fn) => fn(accFns), input)//de derecha a izq
const pipe = (...fns) => (input) => fns.reduce((accFns, fn) => fn(accFns), input)//de izq a derecha
//Para ir viendo que va pasando en cada paso
const trace = message => originalValue => {
    console.log(message, originalValue);
    return originalValue;
};

const traerPrimerInfanteNuevo = pipe(
    arr => arr.filter(persona => persona.edad < 2),
    trace('despues del filter'),
    head,
    trace('despues del head'),
    formateo,
    trace('despues del formateo'),
    formatoFinal,
    trace('despues del formato final')
)

console.log(traerPrimerInfanteNuevo(personas))