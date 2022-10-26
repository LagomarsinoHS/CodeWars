const MyEmployeeFactory = require("./factory")


const employeeFactory = new MyEmployeeFactory()

const types = ['parttime', 'fulltime', 'contractor']

const employees = []
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor((Math.random(2) * types.length))
    const createdEmployees = employeeFactory.createEmployee({ type: types[randomNumber] })
    employees.push(createdEmployees)
}

employees.forEach(employee => console.log(employee.speak()))