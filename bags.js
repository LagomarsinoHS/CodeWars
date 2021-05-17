const keys = Object.keys

function all(xs) {
    return xs.reduce(function (xss, x) {
        return [...xss, ...insert(xss, x)]
    }, [[]])
}

function insert(xss, x) {
    return xss.map(function (xs) {
        return [...xs, x]
    })
}

function total(xs) {
    return function (ys) {
        console.log("ys", ys)
        return ys.reduce(function (z, y) {
            return z + xs[y]
        }, 0)
    }
}

function max(k) {
    return function (x) {
        return x <= k
    }
}

function bags(xs, k) {
    console.log("xs", xs)
    console.log("k", k)
    let rn = total(xs)
    console.log("rn", rn)
    let pn = max(k)
    return all(keys(xs))
        .filter(function (ys) {
            return pn(rn(ys))
        })
}


console.log(
    bags({
        A: 2,
        B: 3,
        C: 4
    }, 5)
)

