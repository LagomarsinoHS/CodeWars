/*
Las funciones generadoras permite mantener un estado "congelado" hasta que nosotros utilicemos la palabra next para que siga recorriendo el codigo dentro de esta.
Es decir, tenemos cierta logica y utilizamos la palabra "yield" para retornar un resultado.

En el caso de que el lugar en donde llamamos esta funcion utilice la palabra next, esta seguira el curso de la funcion en donde se quedó, 
ejecutando su logica de ese momento y retornando el valor con su yield.


La respuesta que entrega esta funcion en un objeto con 2 propiedades
{
    value: valor que le retornas con yield
    done: true|false 
}
donde False significa que SI hay mas info dentro
True indica que termino toda la logica

esta funcion se crea
function* nombrefuncion(){}
*/

function* funcionGeneradora(a) {
    console.log("Valor entrante", a)
    yield a * 2
    console.log("Ahora el valor es");
    yield a - 5
    console.log("Ahora es");
    yield a * 10
}

let fg = funcionGeneradora(2)


console.log(fg.next());
console.log(fg.next());
console.log(fg.next());
console.log(fg.next());
