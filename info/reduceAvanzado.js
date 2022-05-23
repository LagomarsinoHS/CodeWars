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
const expected = cars.reduce((acc, { make, model, year }) => {
    if (!acc[make]) acc[make] = []
    acc[make].push({ model, year })
    return acc
}, {})


const expected2 = cars.reduce((acc, { make, model, year }) => ({
    ...acc,
    [make]: acc[make]
        ? acc[make].concat({ model, year })
        : acc[make] = [{ model, year }]
}), {})


//------------------------------------------
const motors = [
    { model: "r8", cylinder: 2 },
    { model: "r5", cylinder: 4 },
    { model: "mustang", cylinder: 6 },
    { model: "fusion", cylinder: 8 }
];
const cars2 = [
    { make: "audi", model: "r8", year: "2012", another: false },
    { make: "audi", model: "r5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" }
];

const newCars = cars2.reduce((acc, cur) => {
    const { make, ...car } = cur;
    if (!acc.hasOwnProperty(make)) {
        acc[make] = [];
    }
    acc[make].push({
        ...car,
        cylinder: motors.find((m) => m.model === car.model)?.cylinder ?? "unknown"
    });
    return acc;
}, {});

const newCars2 = cars2.reduce((acc, cur) => ({
    ...acc,
    [cur.make]: acc.hasOwnProperty(cur.make)
        ? acc[cur.make].concat({ model: cur.model, year: cur.year })
        : [{ model: cur.model, year: cur.year }]
}), {});
