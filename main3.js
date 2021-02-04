let cars = [
    { make: "audi", model: "r8", year: "2012" },
    { make: "audi", model: "r5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" }
]

/* //Esperado
let cars ={
    audi:[
        {model:"r8", year:2012},
        {model:"r5", year:2013}
    ],
    ford:[
        {model:"Mustang", year: 2012}
        {model:"fusion", year:2015}
    ],
    kia:[
        {model:"optima", year: 2012}
    ]
}
*/
let newCars = cars.reduce((acc, ele) => {
    acc[ele.make] ? acc[ele.make].push({ "model": ele.model, "year": ele.year }) : acc[ele.make] = []
    return acc
}, [])
/* let newCars = cars.reduce((acc, ele) => ({
    ...acc,
    acc[ele.make]? acc[ele.make].push({ "model": ele.model, "year": ele.year }) : acc[ele.make] = []

}), []) */

console.log(newCars)