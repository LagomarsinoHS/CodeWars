//Objects

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Humberto',
    retire: (date: Date) => {
        console.log("Date received", date);
    }
};


