type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0
        ? null
        : { birthday: new Date() }
}

/*
Como la funcion getCustomer le estoy indicando que puede ser Customer o null, si luego hago un console.log de customer.birthday no me lo permite, porque dice que puede tal vez ser null. Por eso le encadena el optional chaining
*/
let customer = getCustomer(0);
console.log(customer?.birthday);

