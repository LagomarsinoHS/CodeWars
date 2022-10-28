//ReadOnly
interface Imamifero {
    patas: number;
    tamaño: 'Large' | 'Medium' | 'Small'
}

/*
A la interfaz que le pongamos esto, no nos permitirá cambiar sus valores, solo de lectura
*/
const gato: Readonly<Imamifero> = {
    patas: 4,
    tamaño: "Small"
}

//gato.patas=5 // <-- ❌