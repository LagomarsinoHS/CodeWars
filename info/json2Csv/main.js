
const myData = require('./fufPrograms298.json')
const { parse } = require('json2csv');

const fields = [
  'title', //puedes agarrar directo desde la key del json

  // Tambien se puede definir un objeto, con 2 propiedades label: El nombre que saldra en la row, value: De donde debe sacar el valor
  {
    label: 'wiwi',
    value: 'academicPartner.name'
  }];
  
const opts = { fields };

try {
  const csv = parse(myData, opts);
  console.log(csv);
} catch (err) {
  console.error(err);
}