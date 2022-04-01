/*
Point free o programación tácita se refiere a cuando la definición de una funcion no incluye información sobre sus argumentos
*/

//Normalmente al hacer una funcion con un callback la hacemos directamente en la función.
["ejemplo"].map(x=>({
    //codigo a ejecutar
}))

//Esto es una "mala practica" ya que dificulta la posibilidad de hacer Test unitarios sobre esto, por ende un mejor acercamiento sería así;

const suma2 = num=>num+2
[1,2,3].map(suma2)

