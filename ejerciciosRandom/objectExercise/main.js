/*
Introduction
Flattening a nested object into a single-level object is a common coding interview problem. 
In this blog, we'll walk through a practical example of flattening a nested object in JavaScript, including an explanation of the code and how it works.

The Problem
Given a nested object, we need to convert it into a flat object where nested keys are combined into a single key. For instance, given the following object:
Input
const obj  = {
    country: "USA",
    state: {
        name: "California",
        code: "CA",
        cities: {
            SanFrancisco: {
                pincode: 94101,
                population: 870000
            }
        }
    },
    state2: {
        name: "New York",
        code: "NY",
        cities: {
            NewYorkCity: {
                pincode: 10001,
                population: 8000000
            }
        }
    }
};
Output:
{
    country: "USA",
    state_name: "California",
    state_code: "CA",
    state_cities_SanFrancisco_pincode: 94101,
    state_cities_SanFrancisco_population: 870000,
    state2_name: "New York",
    state2_code: "NY",
    state2_cities_NewYorkCity_pincode: 10001,
    state2_cities_NewYorkCity_population: 800000
}

*/

function flattenObj(obj, keyName = "") {
  const res = {}

  for (const key in obj) {
    const value = obj[key]

    // Si es un objeto, hago algo
    if (typeof value === 'object' && value !== null) {
      const fullkey = keyName ? `${keyName}_${key}` : key

      Object.assign(res, flattenObj(value, fullkey))
    }

    // Si es un valor, lo agrego directo al objeto
    else {
      const fullkey = keyName ? `${keyName}_${key}` : key
      res[fullkey] = value;
    }
  }

  return res
}

const obj = {
  country: "USA",
  state: {
    name: "California",
    code: "CA",
    cities: {
      SanFrancisco: {
        pincode: 94101,
        population: 870000
      }
    }
  },
  state2: {
    name: "New York",
    code: "NY",
    cities: {
      NewYorkCity: {
        pincode: 10001,
        population: 8000000
      }
    }
  },
  superPower: "dream"
}
const res = flattenObj(obj)
console.log(res)


function countWords(string) {
  const map = new Map()
  const words = string.match(/\b\w+\b/gi);

  for (const word of words) {
    const newWord = word.toLowerCase();
    map.set(newWord, (map.get(newWord) || 0) + 1)
  }

  let longestWord = ""
  let prevCount = 0

  for (const [word, number] of map) {
    if (number > prevCount) {
      longestWord = word
      prevCount = number
    }
  }
  return longestWord
}

const res2 = countWords("hola, soy Natalia. Me dicen Nat, natalia, NataLia, y cuando se enojan. Me gritan Natalia!")
console.log(res2)