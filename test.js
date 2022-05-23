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

const indexedMotors = motors.reduce((acc, { cylinder, model }) => ({
    ...acc,
    [model]: cylinder
}), {})
console.log(indexedMotors);

const expected = cars.reduce((acc, { make, ...car }) => {
    if (!acc[make]) acc[make] = []
    const cylinder = indexedMotors[car.model]
    acc[make].push({ ...car, cylinder: cylinder ?? 'Unknown' })
    return acc
}, {})
console.log(expected);