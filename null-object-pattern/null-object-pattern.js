class AbstractCustomer {
    constructor() {
        if (new.target === AbstractCustomer) {
            throw new Error("该类不能实例化");
        }
        this.name = null;
    }

    isNil() { }

    getName() { }
}

class RealCustomer extends AbstractCustomer {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    isNil() {
        return false;
    }
}

class NullCustomer extends AbstractCustomer {
    getName() {
        return "Not Available in Customer Database";
    }

    isNil() {
        return true;
    }
}

class CustomerFactory {
    static get names() {
        return ["Tom", "Robert", "Sai", "Clean"];
    }

    static getCustomer(name) {
        let index = CustomerFactory.names.indexOf(name);
        if (index > -1) {
            return new RealCustomer(name);
        }
        return new NullCustomer();
    }
}

const customer1 = CustomerFactory.getCustomer("Tome");
const customer2 = CustomerFactory.getCustomer("Tom");
const customer3 = CustomerFactory.getCustomer("Robert");
const customer4 = CustomerFactory.getCustomer("Sai");

console.log(customer1.getName());
console.log(customer2.getName());
console.log(customer3.getName());
console.log(customer4.getName());