//Partial


interface Ipersona {
    nombre: string;
    edad: number;
    dni: string;
}

const persona: Ipersona = {
    nombre: 'Humberto',
    edad: 32,
    dni: '111111'
}

const partialPersona: Partial<Ipersona> = {
    edad: 13
}

/*
Partial<interface>
Esto permite que al asignar la interfaz a algo, esta no te oblique a tener todo lo que esta necesite, solo los valores que tu quieres ponerle, mientras que estas existan en la interfaz claro
*/


//Required

interface Ianimal {
    patas: number;
    raza: string;
    edad?: number;
}

/*
Podemos ver que en la interfaz Animal edad esta como opcional, pero al poner algo como Required<interfaz> obligamos a que este todo
*/
const requiredPerro: Required<Ianimal> = {
    patas: 4,
    raza: 'Labrador',
    edad: 14
}