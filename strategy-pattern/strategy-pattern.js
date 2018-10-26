class Strategy {
    constructor() {
        if (new.target === Strategy) {
            throw new Error("该类不能实例化");
        }
    }

    doOperation(num1, num2) { }
}

class OperationAdd extends Strategy {
    doOperation(num1, num2) {
        return num1 + num2;
    }
}

class OperationSubtract extends Strategy {
    doOperation(num1, num2) {
        return num1 - num2;
    }
}

class OperationMultiply extends Strategy {
    doOperation(num1, num2) {
        return num1 * num2;
    }
}

class OperationDivide extends Strategy {
    doOperation(num1, num2) {
        return num1 / num2;
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    changeStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1, num2) {
        return this.strategy.doOperation(num1, num2);
    }
}

const context = new Context(new OperationDivide());
console.log(`10 / 2 = ${context.executeStrategy(10, 2)}`);
context.changeStrategy(new OperationAdd());
console.log(`10 + 2 = ${context.executeStrategy(10, 2)}`);
context.changeStrategy(new OperationMultiply());
console.log(`10 * 2 = ${context.executeStrategy(10, 2)}`);
context.changeStrategy(new OperationSubtract());
console.log(`10 - 2 = ${context.executeStrategy(10, 2)}`);