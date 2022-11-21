const csv = require('csvtojson');

(async function main() {
    // Consigue la información del csv y lo pasa a un array de objetos
    const jsonArray = await csv().fromFile('./IdsTecmilenio.csv');

})()