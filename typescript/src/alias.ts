//Alias
//Se usa para generar un tipo definido para un objeto

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employees: Employee = {
    id: 1,
    name: 'Humberto',
    retire: (date: Date) => {
        console.log("Date received", date);
    }
};

//Literal Type
//Es cuando quiero especificar un valor especifico en una variable o tipo

let edadPermitida: 50 = 50;

type MayorDeEdad = 18 | 21;
let mayorDeEdad: MayorDeEdad = 21