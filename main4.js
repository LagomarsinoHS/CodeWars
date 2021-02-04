const motors = [
    { model: "r8", cylinder: 2 },
    { model: "r5", cylinder: 4 },
    { model: "mustang", cylinder: 6 },
    { model: "fusion", cylinder: 8 }
];
const cars = [
    { make: "audi", model: "r8", year: "2012", another: false },
    { make: "audi", model: "r5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" }
];

const newCars = cars.reduce((acc, cur) => {
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

const newCars2 = cars.reduce((acc, cur) => ({
    ...acc,
    [cur.make]: acc.hasOwnProperty(cur.make)
        ? acc[cur.make].concat({ model: cur.model, year: cur.year })
        : [{ model: cur.model, year: cur.year }]
}), {});
