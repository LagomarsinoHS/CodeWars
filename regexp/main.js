/*
^ -> Con esto indico que la frase DEBE iniciar con lo siguiente
ej: /^a/
*/
console.log("Operador ^, Debe iniciar con algo específico");
console.log(/^a/.test("a") ? "Inicia con A" : "No inicia con A")
console.log('-----------------------------');

/*
$ -> Le indico que debe terminar con lo siguiente
ej: /^an$/
*/
console.log("Operador $, Debe finalizar con algo específico");
console.log(/b$/.test("asdab") ? "Termina con B" : "No termina con B");
console.log('-----------------------------');

// ### CUANTIFICADORES ###
//* -> busca que lo siguiente sea de 0 a infinito
//ej: /a*/
console.log("Operador *, Puede no contener o contener algo infinitamente");
console.log(/^a*/.test("eaaaaaaaaae") ? "Debe iniciar con a y tener 0 o mas" : "No cumple")
console.log('-----------------------------');

//+ -> busca que lo siguiente sea de 1 a infinito
//ej: /a+/
console.log("Operador +, Debe contener 1 o mas de algo en paarticular");
console.log(/^ae+/.test("aeeee") ? "Debe tener 1 o mas e" : "No cumple")
console.log('-----------------------------');

//? -> busca que lo siguiente venga o no, pero si viene tiene que venir 1
//ej: /a?/
console.log("Operador ?, Busca algo en particular, si lo encuentra solo debe venir 1 vez");
console.log(/^ae?w/.test("aew") ? "Viene e y viene 1 sola" : "No cumple")
console.log('-----------------------------');

//{1,2} -> busca un rango de ocurrencias, el 2 inclusivo
//ej: /ac{5,8}/ Esto quiere decir que la c puede venir 5 o mas veces veces
console.log("Operador {}, Genera un rango de ocurrencias");
console.log(/^ac{1,2}/.test("acccc") ? "viene c 1 o 2 (como min))" : "No cumple")
console.log('-----------------------------');


// ### MATCH ###
//Con esto puedo generar un patron y buscarlo en un texto largo, esto me daria un array de 2 posiciones con las cervezas. Esto se produce debido a que aplicamos el cuantificador "?" y la g, esto indica que cada vez que encuentra ese patron, sera uno efectivo y seguira avanzando en el texto
console.log("Match(), para conseguir ocurrencias en base a un texto y un patron");
const regex = /<beer>.*?<\/beer>/g;
const text = `<beer>Escudo</beer><beer>Corona</beer>`
console.log(text.match(regex));
console.log('-----------------------------');

//### Grupos y Rangos ###

//Or
console.log("Operador |, para que tome una u otra opcion")
console.log(/cerveza|vino/.test("vino") ? "Cumple con traer cerveza O vino" : "No cumple")
console.log('-----------------------------');

//Grupo
console.log("Operador (), permite definir un grupo para que cumpla una estructura");
console.log(/^(\w| )+(cerveza|piscola)/.test('Me gusta la piscola'));
console.log('-----------------------------');

//Rango
console.log("Operador [], permite definir un rango");
console.log(/^[a-d]+$/.test('ad') ? "Cumple con ser un texto entre A a D" : "No cumple");
console.log('-----------------------------');

//Asercion condicionante
//Esto permite indicarle que para que una estructura sea valida debe cumplir lo siguiente, en este caso lo que esta en (=? xxx). En este caso será encontrado por match mientras que cumpla "vino o piscola" y contenga algo despues de eso
const regex2 = /(Vino|Piscola)(=? \w+)/g
const text2 = `Vino blanco, Vino Tinto, Piscola negra, Cerveza Rubia`
console.log(text2.match(regex2));
console.log('-----------------------------');

//Asercion condicionante negativa
//Esto permite lo mismo que la anterior pero que NO cumpla. En este caso buscamos que la frase diga Java, espacio y un numero que no sea 8 u 9
console.log(/Java (?!8|9)/.test("Java 7"));
console.log('-----------------------------');
