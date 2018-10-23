class Employee {
    constructor(name, dept, salary) {
        this._name = name;
        this._dept = dept;
        this._salary = salary;
        this._subordinates = [];
    }

    add(e) {
        this._subordinates.push(e);
    }

    remove(e) {
        let index = this._subordinates.indexOf(e);
        this._subordinates.splice(index, 1);
    }

    getSubordinates() {
        return this._subordinates;
    }

    toString() {
        return `Employee: {name: ${this._name}, dept: ${this._dept}, salary: ${this._salary}}`;
    }
}

let CEO = new Employee('Jane', 'CEO', 30000);
let headSales = new Employee('Joson', 'Head Sales', 20000);
let headMarketing = new Employee('Joson', 'Head Marketing', 20000);

let clerk1 = new Employee('Robert', 'Marketing', 10000);
let clerk2 = new Employee('Hoking', 'Marketing', 10000);

let salesExecutive1 = new Employee('Mary', 'Sales', 10000);
let salesExecutive2 = new Employee('Brook', 'Sales', 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

console.log(CEO.toString());
for (const headEmployee of CEO.getSubordinates()) {
    console.log(headEmployee.toString());
    for (const employee of headEmployee.getSubordinates()) {
        console.log(employee.toString());
    }
}