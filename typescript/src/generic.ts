/*
Los valores genéricos me permiten no definirle en ese mismo moment el tipo, sino que decirle, por así decirlo, que al momento de asignarlo a lo que sea que le vaya a pasar, tendrá ese valor
*/

//Paso 1, genero una interfaz con <T>
interface generic<T> {
    variable: T;
}

//Paso 2, creo una variable y le asigno la interfaz, lo que va dentro de <> es el tipo de dato que será el valor
//Aqui data.variable será tipo string
const data: generic<string> = { variable: 'Hello' }
//Aqui data.variable será tipo number
const data2: generic<number> = { variable: 2 }

