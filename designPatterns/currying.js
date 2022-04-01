/*
### CURRYING ###

Currying es cuando una función de N argumentos es transformada en funciones unitarias, es decir, solo contiene 1 argumento y retorna una funcion
que acepta otro argumento y así.
Normalmente se utiliza para composición
*/

const saludo = saludo => {
	return (nombre) => {
		return `${saludo}, ${nombre}`
	}
}

const buenosDías = saludo('Buenos días')
const buenosDíasPedro = buenosDías('Pedro')

console.log(buenosDíasPedro);
//Como se puede ver, pude crear una función que generará un saludo de buenos días y al llamarla necesito un nombre para generar el saludo completo
