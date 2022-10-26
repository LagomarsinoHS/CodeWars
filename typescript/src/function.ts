//Functions

function calculateTax(
    income: number,
    taxYear: number,
    optionalValue?: number) {
    if (taxYear < 2022) return income * 1.2;
    if(optionalValue)console.log('Tengo valor opcional');
    
    return income * 1.3;
}

calculateTax(10_000, 2022)
