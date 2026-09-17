/**
 * Shopping Calculation
 * Kyu: 6
 *
 * console.log(countDevelopers([
 * { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
 * { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
 * { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
 * { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
 * ]))
 * /
 * console.log(balance(`1000.00!=
 * 125 Market !=:125.45
 * 126 Hardware =34.95
 * 127 Video! 7.45
 * 128 Book :14.32
 * 129 Gasoline ::16.10
 * `))
 * /
 */

export function shoppingCalculation(input) {
  let fruits = input.reduce((acc, ele) => {
    if (ele.includes("is")) {
      let [fruta, , valor] = ele.split(" ")
      acc[fruta.toLowerCase()] = valor.replace(/\D/gi, "")
    }
    return acc
  }, {})

  let persons = input.reduce((acc, ele) => {
    if (ele.includes("has")) {
      let [nombre, , dinero] = ele.split(" ")
      if (!acc.hasOwnProperty(nombre)) acc[nombre] = {}
      acc[nombre] = { dinero: dinero.replace(/\D/gi, "") }
    }
    return acc
  }, {})


  let compras = {};
  input.forEach(ele => {
    if (ele.includes("buys")) {
      let [name, , qty, product] = ele.split(" ")
      if (!compras.hasOwnProperty(name)) compras[name] = []
      compras[name].push({ qty, product: product.replace(/\W/gi, "") })
    }
  })

  let parcial = []
  for (let nombre in compras) {
    let personBuy = []
    compras[nombre].forEach((x) => {
      let qty = x.qty
      let prod = x.product[x.product.length - 1] == "s" ? x.product.slice(0, -1) : x.product
      personBuy.includes(nombre) ? personBuy.push(prod + " " + qty) : personBuy.push(nombre, prod + " " + qty)
    })
    parcial.push(personBuy)
  }
  let res = []
  console.log(fruits)
  parcial.forEach(per => {
    let [nombre, ...produ] = per
    let totalDinero = persons[nombre].dinero
    let prods = []
    produ.forEach(sin => {
      let [fruit, qty] = sin.split(" ")
      let precioFruta = fruits[fruit]
      totalDinero -= precioFruta * qty
      prods.push(qty + " " + fruit)
    })
    res.push([nombre, "$" + totalDinero])

    let idxNombre = 0;
    res.forEach((x, idx) => {
      if (x.includes(nombre)) {
        idxNombre = idx
      }
    })
    console.log(idxNombre)


  })
  console.log(res)
}

export function shoppingCalculation(input) {
  const object = input.reduce((acc, ele) => {
    if (ele.split(" ").includes('has')) {
      const [name, money] = ele.split(' has').map(x => x.trim().replace('.', ''))
      acc[name] = {
        money: +money.replace("$", ''),
        product: []
      }
    }
    return acc
  }, {})

  const prices = input.reduce((acc, ele) => {
    if (ele.split(" ").includes('is')) {
      const [fruit, price] = ele.split('is').map(x => x.trim().replace('.', ''))
      acc[fruit.toLowerCase()] = price.replace('$', '')
    }
    return acc
  }, {})

  input.forEach(inp => {
    if (inp.includes('buys')) {
      const name = inp.split(" ")[0]
      const product = inp.split(" ").pop().replace('.', '')
      const arr = inp.split(" ")
      const qty = arr[arr.length - 2]

      object[name].product.push({ qty, product })
    }
  })

  const result = []
  for (const name in object) {
    let money = object[name].money
    const products = object[name].product
    let items = ''

    products.forEach(prod => {
      const { qty, product } = prod
      const priceProd = prices[product.endsWith('s') ? product.slice(0, -1) : product]
      money = money - (priceProd * qty)
      items += `${qty} ${product}, `
    })


    result.push(
      [name, '$' + money, items.trim().substring(0, items.length - 2)]
    )
  }

  console.log(result);
  return result
}

export function shoppingCalculation2(input) {
  const prices = {}
  const people = {}
  const buys = []

  function cleanPrice(price) {
    return +price.substring(1, price.length - 1)
  }

  function cleanPrice(price) {
    return +price.substring(1, price.length - 1)
  }

  for (let command of input) {
    let [name, operator, price] = command.split(" ")
    if (operator === 'is') {
      prices[name.toLowerCase()] = cleanPrice(price)
    }
    else if (operator === 'has') {
      people[name] = { money: cleanPrice(price), products: [] }
    }
    else {
      buys.push(command)
    }
  }

  for (let command of buys) {
    let [name, operator, amount, product] = command.split(" ")
    const clean_product = cleanProduct(product)
    const cost = prices[clean_product] * amount
    people[name].money -= cost
    const product_str = amount > 1 ? `${amount} ${clean_product}s` : `${amount} ${clean_product}`
    people[name].products = [...people[name].products, product_str]
  }

  const result = []

  for (let name in people) {
    result.push(
      [name, `$${people[name].money}`, people[name].products.join(", ")]
    )
  }


  return result
}
