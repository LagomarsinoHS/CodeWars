
const generaNumerosPorLetra = letra => {
    const objLetra = {
        B: "1-15",
        I: "16-30",
        N: "31-45",
        G: "46-60",
        O: "61-75"
    }

    let res = []
    const cantidad = letra == "N" ? 4 : 5 //Decide cuantas veces iterar el for, si es N la letras, iterará 4 veces
    for (let index = 1; index <= cantidad; index++) {
        const [min, max] = objLetra[letra].split("-").map(Number) //Busco el rango de numeros en mi "objLetra"
        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * (max + 1 - min) + min); //Consigo un numero aleatorio, en el caso de q ese numero ya se encuentre en res, vuelvo a conseguir otro
        } while (res.includes(numeroAleatorio));
        res.push(numeroAleatorio)//Lo agrego a la respuesta
    }
    return res //retorno el arreglo con 5 o 4 numeros dependiendo
}

const generaNumeros = () => {
    let numerosEnLetra = {
        B: [],
        I: [],
        N: [],
        G: [],
        O: []
    }
    const rangoLetras = {
        B: "1-15",
        I: "16-30",
        N: "31-45",
        G: "46-60",
        O: "61-75"
    }
    for (let i = 0; i < Object.keys(numerosEnLetra).length; i++) { //Itero por la cantidad de propiedades de "numerosEnLetra"
        const letraIterada = Object.keys(numerosEnLetra)[i] //Tomo la letra iterada en ese momento
        const [min, max] = rangoLetras[letraIterada].split("-").map(Number) //saco el rango min y max de la letra

        const cantidad = letraIterada == "N" ? 4 : 5 //Decido cuantas veces iteraré
        for (let j = 1; j <= cantidad; j++) {
            let numeroAleatorio;
            do {
                numeroAleatorio = Math.floor(Math.random() * (max + 1 - min) + min);//Saco un numero aleatorio
            } while (numerosEnLetra[letraIterada].includes(numeroAleatorio));//Si ya se encuentra en numerosEnLetra[LetraIterada], consigo otro

            numerosEnLetra[letraIterada].push(numeroAleatorio)//Inserto en el array correspondiente
        }
    }

    return numerosEnLetra//Devuelvo un objeto con los numeros aleatorios de cada letra

}


//Opcion 1; al momento que necesites los numeros, le pasas la letra que necesites
const res = generaNumerosPorLetra("B")
console.log(res);

//Opcion 2; llamas la funcion y esta te retorna un objeto con un array de X cantidades dependiendo de la letra
const res2 = generaNumeros()
console.log(res2);


