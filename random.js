const data = [
    { idGame: 34321, playerName: 'Zael', points: 6 },
    { idGame: 34321, playerName: 'Lucho', points: 12 },
    { idGame: 34321, playerName: 'Miguel', points: 2 },
    { idGame: 45125, playerName: 'Ignacio', points: 4 },
    { idGame: 45125, playerName: 'Fran', points: 2 },
    { idGame: 34321, playerName: 'Javier', points: 1 },
    { idGame: 45125, playerName: 'Amanda', points: 3 },
    { idGame: 34321, playerName: 'Raton', points: 7 },
    { idGame: 85474, playerName: 'Gato', points: 8 },
    { idGame: 85474, playerName: 'Medel', points: 9 },
    { idGame: 85474, playerName: 'Zfsaa', points: 11 },
    { idGame: 21512, playerName: 'Paolo', points: 13 },
    { idGame: 21512, playerName: 'Macri', points: 16 },
    { idGame: 34321, playerName: 'Oliver', points: 15 },
    { idGame: 21512, playerName: 'Isabel', points: 15 },
    { idGame: 34321, playerName: 'Diego', points: 14 },
    { idGame: 21512, playerName: 'Pepa', points: 6 },
    { idGame: 34321, playerName: 'Tumor', points: 19 },
    { idGame: 11458, playerName: 'Vaca', points: 18 },
    { idGame: 11458, playerName: 'MasHora', points: 17 },
    { idGame: 11458, playerName: 'NoName', points: 17 },
    { idGame: 11458, playerName: 'GuauGuidou', points: 20 },
    { idGame: 34321, playerName: 'Pele', points: 20 },
]



const makeObject = arr => {
    const listo = []
    return arr.reduce((acc, ele, idx, self) => {
        if (listo.includes(ele.idGame)) return acc
        const insert = {
            idGame: ele.idGame,
            top: [{ playerName: ele.playerName, points: ele.points }]
        }

        self.forEach(({ idGame, ...rest } = {}) => idGame === ele.idGame ? insert.top.push(rest) : "")
        insert.top.sort((a, b) => b.points - a.points)
        acc.push(insert)
        listo.push(ele.idGame)
        return acc
    }, [])
}

const makeObject2 = arr => {
    const first = arr.reduce((acc, ele) => {
        //if (!acc.hasOwnProperty(ele.idGame)) acc[ele.idGame] = []
        //acc[ele.idGame] ??= []
        acc[ele.idGame].push({ playerName: ele.playerName, points: ele.points })
        return acc
    }, {})

    for (const obj in first) {
        first[obj].sort((a, b) => b.points - a.points)
    }
    return first
}

//let res = makeObject2(data)
//console.log(JSON.stringify(res, null, 2));

const dbDeNombres = ['Javi', 'Carlos', 'Mario']

const encontrar = arrNombres => {
    return arrNombres.every(nombre => dbDeNombres.includes(nombre))
}
//console.log(encontrar(['Javi', 'Carlos']))

const orders = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'cancelled' },
    { id: 4, status: 'cancelled' },
    { id: 5, status: 'cancelled' },
    { id: 6, status: 'cancelled' },
    { id: 7, status: 'shipper' }
]

const countOrders = arr => {
    return arr.reduce((acc, ele) => {
        if (!acc.hasOwnProperty(ele.status)) acc[ele.status] = 0
        acc[ele.status]++
        return acc
    }, {})
}

const countOrders2 = arr => {
    return arr.reduce((acc, ele) => ({ ...acc, [ele.status]: (acc[ele.status] || 0) + 1 }), {})
}
//console.log(countOrders2(orders));

const longLiveTheKing = (col, row) => {
    const edges = {
        upL: [1, 8],
        upR: [8, 8],
        downL: [1, 1],
        downR: [8, 1]//Podria omitirse este
    }

    for (const edge in edges) {
        const edgeValue = edges[edge]
        if ([col, row].every(num => edgeValue.includes(num))) return 3
    }
    if (col == 1 && row !== 1 || row == 1 && col !== 1) return 5
    if (col !== 1 && row !== 1) return 8
}

console.log(longLiveTheKing(8, 1))
console.log(longLiveTheKing(3, 2))
console.log(longLiveTheKing(2, 1))
console.log(longLiveTheKing(7, 7))
console.log(longLiveTheKing(8, 7))
console.log(longLiveTheKing(1, 6))
console.clear();
console.log('-----------------------------');


