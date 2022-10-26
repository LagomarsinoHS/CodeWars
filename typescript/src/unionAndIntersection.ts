/*
Union :: Es cuando definimos mas de un tipo aceptado en una variable
Narrowing :: Es cuando dependiendo del tipo que entra son las opciones que da el Editor.

*/
function kgToLbns(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

//Intersection
//Es cuando creas 2 tipos o mas que se necesitan en algun objeto o tal
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

//Al crear este, se necesitan las propiedades de Draggable y Resizable
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}