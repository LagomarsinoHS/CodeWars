//Uso Reduce

const mascotas = [
    { nombre: "Pelusa", edad: 12, tipo: "gato" },
    { nombre: "Puchini", edad: 12, tipo: "perro" },
    { nombre: "Pulga", edad: 12, tipo: "perro" },
    { nombre: "Chanchito Feliz", edad: 12, tipo: "perro" }
]

//Cuando hay un arreglo de millones de datos, hacer un find o iterar sobre cada uno buscando un dato arruina la performance, entonces lo que se suele o es buena idea hacer es indexar estos elementos en base a una PK, en este caso usaremos el nombre para eso

const indexed = mascotas.reduce((acc, ele) => ({
    ...acc,
    [ele.nombre]: ele
}), {})
//el reduce retorna un objeto pero dentro de ese objeto habran objetos con nombre:elemento
const indexed2 = mascotas.reduce((acc, ele) => {
    return { ...acc, [ele.nombre]: ele }
}, {})
console.log(indexed2)

//Con esto devolvemos un objeto que como key tiene el nombre y value el registro completo que itera en ese momento



//Para devolver un arreglo plano cuando hay uno con multiples arreglos dentro
let arregloNoPlano = [1, 2, [3, 4], 5, [6]]

let arregloPlano = arregloNoPlano.reduce((acc, num) => acc.concat(num), [])
console.log(arregloPlano)


//Recursividad
//2 formas de hacerlo

function cuentaRegresiva(num) {
    if (num < 0) return
    console.log(num)
    return cuentaRegresiva(num - 1)
}
console.log(cuentaRegresiva(10))

function cuentaRegresiva2(num) {
    return num == 0 ? num : cuentaRegresiva2(num - 1)
}
console.log(cuentaRegresiva(5))

//Esto tiene un limite de stacks


/*
Lo pediste:
Javascript siempre está alojado en algún entorno, normalmente está alojado en un navegador que es Google Chrome, Firefox, Safari, etc. Javascript se ejecutará en este entorno, pero no se limita a esto, también puede ejecutarse en otros hosts como el servidor web Nodejs o alguna aplicación. que acepta la entrada de código JS.
Cuando escribes tu Javascript y lo ejecutas, hay muchas cosas detrás. En el navegador, tenemos un motor Javascript que toma el código y lo ejecuta. Cada navegador tiene su propio motor javascript. Google Chrome tiene un motor V8, Firefox tiene Spider Monkey y Safari tiene un motor Nitro, por lo que cada navegador tendrá un motor JS.
Dentro del motor, el primer paso es analizar el código mediante un analizador, leerá el código línea por línea y comprobará que la sintaxis sea correcta. El analizador conocerá las reglas de JS para garantizar esto. Si encuentra algún error, arrojará un error y la ejecución se detendrá.
Si todo está correcto, el analizador producirá una estructura de datos que se llama Árbol de sintaxis abstracta y que luego se convierte en código de máquina, el código de máquina es ejecutado directamente por el procesador de la computadora y ahí es donde se ejecuta nuestro código. Son diferencias sutiles en los pasos, pero estos son los pasos principales para todos.
* Contexto de ejecución global (GEC):
Es el contexto predeterminado. Código que no está dentro de ninguna función. GEC no puede ser más de uno. El valor de esto no está definido si el código está en modo estricto; de lo contrario, nos dará un objeto de ventana si está escrito en un contexto global.
Todo el código que no está dentro de ninguna función está en GEC. Entonces, cualquier variable o función que no esté dentro de la función está en GEC. GEC es un objeto que en el caso de un navegador será un objeto de ventana, todo lo que declares en un contexto global se adjuntará al objeto de ventana.
* Pila de ejecución:
Si el código no está dentro de una función, está en GEC, pero si el código está dentro de la función, la respuesta es muy simple, obtiene su nuevo contexto de ejecución.
La pila de ejecución es una estructura de datos de pila en la que el nuevo contexto de ejecución se coloca encima del contexto de ejecución global. Si dentro del nuevo contexto de ejecución (que es básicamente una función) se llama a una nueva función, se creará un nuevo contexto de ejecución y ese nuevo contexto de ejecución se colocará encima del contexto de ejecución anterior.
Entonces, ahora que todo se inserta en nuestra Pila de ejecución, cuando aparecen los elementos de la Pila de ejecución. Aparece siempre que el contexto de ejecución superior (que es básicamente una función) finaliza su ejecución.
Déjame explicarte con un ejemplo
var a = 'apple'
one()
function one() {
var b = 'ball'
var c = a + b
two()
}
function two() {
var d = 'dog'
var e = a + d
}
En la Línea 1, se coloca un GEC en la pila. En la Línea 2, cuando se llama a la función uno, crea un nuevo contexto de ejecución y se coloca encima del GEC anterior en la línea 6, se crea un nuevo contexto de ejecución y se inserta sobre el nuevo contexto anterior. Después de que la función dos () finalice su ejecución. Muestra su contexto de ejecución y, después de esa función, one () finaliza su ejecución y muestra su contexto de ejecución.
* Contextos de ejecución en detalle: fases de creación y ejecución y elevación
En la sección anterior, hablamos sobre cuándo se crea el contexto de ejecución y ahora hablaremos sobre cómo se crea. Un contexto de ejecución se puede considerar como un objeto y este objeto tiene tres propiedades.
* Objeto variable (VO):
Contendrá argumento de función, declaración de función, declaración de función interna y variable interna o declaración de variable. La declaración de función, que apunta a la función y la declaración de variable, se denominan comúnmente Elevación.
* Cadena de alcance:
Contiene sus propios objetos variables, así como el objeto de variables de su padre.
* "this" variable:
Según la cadena de alcance, se inicializa el valor de esto. Si esto es un poco confuso, no se preocupe, una vez que explique la cadena de alcance, "esto" será mucho más claro.
Cuando se llama a una función dentro de una función, se crea un nuevo contexto de ejecución para ella y se coloca en la parte superior de la pila de ejecución, como se explicó antes, este paso ocurre en dos fases, la fase de creación y la fase de ejecución.
Las tres propiedades VO, Scope Chain y “determinar el valor de esto” se realiza en la fase de Creación. Después de eso, en la fase de ejecución, el código generado en el contexto de ejecución actual se ejecuta línea por línea.
* “HOISTING”
La función y las variables están disponibles antes de que comience la fase de ejecución. Las funciones y variables se elevan de manera diferente, las funciones ya están definidas antes de que comience la fase de ejecución mientras que las variables están configuradas como indefinidas y solo se definirán en la fase de ejecución.
Analicemos la elevación con ejemplos prácticos.
testHoisting()
function testHoisting() {
console.log('function is hoisted')
}
El código anterior funcionará, en la fase de creación del contexto de ejecución en este es un Contexto de Ejecución Global (GEC) la declaración de función testHoisting se almacena en un Objeto Variable (VO) antes de que se ejecute el código, así que cuando entramos en la fase de ejecución la función testHoisting ya está disponible. Entonces podemos declarar la función más tarde y usarla primero en nuestro código.
Esto solo funciona para la declaración de funciones como se mencionó anteriormente, pero no para las variables, hay otra cosa llamada expresiones de función.
testHoisting()
var testHoisting = function() {
console.log('function is not hoisted')
}
El código anterior arrojará un error, porque esta no es una declaración de función, sino una expresión de función y la elevación solo funcionará con declaraciones de función.
Anteriormente trabajamos en funciones, ahora probémoslo con variables.
console.log(a)
var a = 23
console.log(a)
El código anterior se imprimirá undefined y 23. Esto sucede porque en la fase de creación del objeto variable, las variables se escanean en busca de declaraciones de variables y se establecen en undefined.
console.log(a)
// var a = 23
El código anterior nos dará un ReferenceError de a no está definido, porque no tenemos ninguna definición que javascript no conozca sobre la variable.
var a = 23
function something() {
var a = 62
console.log(a)
}
something()
El código anterior imprimirá 62 porque alguna función tiene su propio contexto de ejecución y si escribimos console.log (a) arriba de la línea 3, obtendremos indefinido.
Todo eso será para izar y una ventaja para izar es que podemos usar la declaración de funciones antes de declararlas en nuestro código.
*/