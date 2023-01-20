const artisByGender = {
    jazz: ['Myles Davis', 'Jhon Coltrane'],
    rock: {
        classic: ['Bob Seger', 'The Eagles'],
        hair: ['Def Leppard', 'WhiteSnake', 'Poison'],
        alt: {
            classic: ['Pearl Jam', 'The Killers'],
            current: ['Joywave', 'Sir Sly']
        }
    },
    unclassified: {
        new: ['Caamp', 'Neil young'],
        classic: ['Seal', 'Morcheeba', 'Chris Stapleton']
    }
}

function getArtistNames(obj, data = []) {
    Object.values(obj).forEach(value => {
        if (Array.isArray(value)) {
            data.push(...value)
        } else {
            getArtistNames(value, data)
        }
    })
    return data
}
const res = getArtistNames(artisByGender)
console.log(res);