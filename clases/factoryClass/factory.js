class Employee {
    speak() {
        return `I am a ${this.type} employee`
    }
}

class PartTimeEmployee extends Employee {
    type = 'Part-Time'
    constructor() {
        super()        
    }
}

class FullTimeEmployee extends Employee {
    type = "Full-Time"
    constructor() {
        super()
    }
}

class ContractorEmployee extends Employee {
    type = 'Contractor'
    constructor() {
        super()
    }
}

class MyEmployeeFactory {

    createEmployee(data) {
        if (data.type === 'parttime') return new PartTimeEmployee()
        if (data.type === 'fulltime') return new FullTimeEmployee()
        if (data.type === 'contractor') return new ContractorEmployee()
    }
}

module.exports = MyEmployeeFactory