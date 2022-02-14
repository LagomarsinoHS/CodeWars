const data = require("./data.json")

//MAP
//Get an array of all names
getAllNames = data.map(ele => ele.name)
console.log("Todos los nombres", getAllNames);
console.log('-----------------------------');

//Get an array of all heights
getAllHeights = data.map(ele => ele.height)
console.log("Todos las estaturas", getAllHeights);
console.log('-----------------------------');

//Get an array of objects with just name and height properties
getNameAndHeight = data.map(ele => ({ name: ele.name, height: ele.height }))
console.log("Objeto con solo nombre y altura", getNameAndHeight);
console.log('-----------------------------');

//Get an array of all first names
getAllFirstName = data.map(ele => ele.name.split(" ")[0])
console.log("Array con solo el primer nombre", getAllFirstName);
console.log('-----------------------------');

//REDUCE
//Get the total mass of all characters
getTotalMass = data.reduce((acc, ele) => acc + parseInt(ele.mass), 0)
console.log("Total de mass", getTotalMass);
console.log('-----------------------------');

//Get the total height of all characters
getTotalHeight = data.reduce((acc, ele) => acc + parseInt(ele.height), 0)
console.log("Total height", getTotalHeight);
console.log('-----------------------------');

//Get the total number of characters in all the character names
getTotalNumberOfCharacters = data.reduce(acc => acc + 1, 0)
console.log("Total number of characters", getTotalNumberOfCharacters);
console.log('-----------------------------');

//Get the total number of characters by eye color (hint. a map of eye color to count)
getCharactersByEyeColor = data.reduce((acc, ele) => {
    if (!acc.hasOwnProperty(ele.eye_color)) acc[ele.eye_color] = 0
    acc[ele.eye_color]++
    return acc
}, {})
console.log("Total characters by eye color", getCharactersByEyeColor);
console.log('-----------------------------');

//FILTER
//Get characters with mass greater than 100
GetCharsWithMassOver100 = data.filter(ele => ele.mass > 100)
console.log("Characters with mass over 100", GetCharsWithMassOver100);
console.log('-----------------------------');

//Get characters with height less than 200
GetCharsWithHeightLess100 = data.filter(ele => ele.height < 200)
console.log("Characters with height less 100", GetCharsWithHeightLess100);
console.log('-----------------------------');

//Get all male characters
GetAllMaleCharacters = data.filter(ele => ele.gender === 'male')
console.log("Get Male Characters", GetAllMaleCharacters);
console.log('-----------------------------');

//Get all female characters
GetAllFemaleCharacters = data.filter(ele => ele.gender === 'female')
console.log("Get Female Characters", GetAllFemaleCharacters);
console.log('-----------------------------');

//SORT
//Sort by name
SortByName = data.sort((a, b) => a.name < b.name ? -1 : 1)
console.log("Sort by name", SortByName);
console.log('-----------------------------');

//Sort by mass
SortByMass = data.sort((a, b) => a.mass - b.mass)
console.log("Sort by mass", SortByMass);
console.log('-----------------------------');

//Sort by height
SortByHeight = data.sort((a, b) => a.height - b.height)
console.log("Sort by height", SortByHeight);
console.log('-----------------------------');

//Sort by gender
SortByGender = data.sort((a, b) => a.gender - b.gender)
console.log("Sort by gender", SortByGender);
console.log('-----------------------------');

//EVERY
//Does every character have blue eyes?
EveryHasBlueAyes = data.every(person => person.eye_color === 'blue');
console.log("Every has Blue eyes", EveryHasBlueAyes);
console.log('-----------------------------');

//Does every character have mass more than 40?
everyHasMoreThan40Mass = data.every(person => +person.mass > 40);
console.log("Every has more than 40 mass", everyHasMoreThan40Mass);
console.log('-----------------------------');

//Is every character shorter than 200?
everyIsShortherThan200 = data.every(person => +person.height < 200);
console.log("Every Is shorter than 200", everyHasMoreThan40Mass);
console.log('-----------------------------');

//Is every character male?
everyAreMale = data.every(person => person.gender === 'male');
console.log("Every are male", everyAreMale);
console.log('-----------------------------');

//SOME
//Is there at least one male character?
someAreMale = data.some(person => person.gender === 'male');
console.log("Some are male", someAreMale);
console.log('-----------------------------');

//Is there at least one character with blue eyes?
someWithBlueAyes = data.every(person => person.eye_color === 'blue');
console.log("Some with blue eyes", someWithBlueAyes);
console.log('-----------------------------');

//Is there at least one character taller than 200?
someTallerThan200 = data.every(person => +person.height > 200);
console.log("Some taller than 200", someTallerThan200);
console.log('-----------------------------');

//Is there at least one character that has mass less than 50?
someWithMassLessThan50 = data.some(person => +person.mass < 50);
console.log("Some with mass less than 50", someWithMassLessThan50);
console.log('-----------------------------');