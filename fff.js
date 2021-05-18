let rotate = s => {

    return s.slice(1) + s.slice(0, 1);
}

console.log(rotate("12345"))

console.log("12345".slice(1))