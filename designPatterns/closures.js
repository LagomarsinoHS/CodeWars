/*
Cuando se habla de closure se refiere al alcance lexico de una función, es decir, las funciones de dentro siempre tendrán alcance a las variables de fuera
pero no al revez, esto es util para poder crear modelos de algo en particular y asi evitar repetir codigo
*/

//Crear un objeto base con propiedades por defecto

const propiedadesBase = {
    name: 'Developer',
    departamento: 'Talent Pool',
    fechaIngreso: new Date()
}
const trabajador = (defaultProps) => {
    return (newProps) => ({
        ...defaultProps,
        ...newProps
    })
}

const createWorker1 = trabajador(propiedadesBase)
const worker1 = createWorker1({ skills: ['JavaScript', 'GIT'] })

console.log(worker1);

//De esta manera se crea un trabajador con propiedades por defecto que es el name, departamento y fecha ingreso, pero al crear el trabajador con la funcion
//que esta retorna, puedo agregarle nuevos parámetros o redefinir los que ya tenía definidos