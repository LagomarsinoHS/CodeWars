let useState = {
    nombre: "Oliver",
    apellido: "Prada",
    edad: 18,
    estatura: "2.10",
    paisActual: "Colombia",
    hijos: 2,
    sueldo: 5_000_000
}

const initializeState = state => {
    for (const prop in state) {
        if (typeof state[prop] == "string") state[prop] = ""
        if (typeof state[prop] == "number") state[prop] = 0
    }
    return state
}

console.log("State Inicial", useState);
console.log('-----------------------------');
console.log("State Final", initializeState(useState));