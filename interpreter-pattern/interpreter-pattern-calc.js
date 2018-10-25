// https://www.cnblogs.com/zhou-yi/p/5462663.html
class Context {
    constructor() {
        this.variable = {};
    }
}

// Abstract
class Expression {
    constructor() {
        if (new.target === Expression) {
            throw new Error('本类不能实例化');
        }
    }
    interpret(context) { }
}

// Terminal expression
class VariableExpression extends Expression {
    constructor(key) {
        super();
        this.key = key;
    }

    interpret(context) {
        return context.variable[this.key];
    }
}

// nonterminal expression
class OperatorExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
}

class AddExpression extends OperatorExpression {
    interpret(context) {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

class SubExpression extends OperatorExpression {
    interpret(context) {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

class MulExpression extends OperatorExpression {
    interpret(context) {
        return this.left.interpret(context) * this.right.interpret(context);
    }
}

class DivExpression extends OperatorExpression {
    interpret(context) {
        return this.left.interpret(context) / this.right.interpret(context);
    }
}

class Calculator {
    constructor(expression) {
        this.expression = expression.replace(/ /g, '');
        this.context = new Context();
    }

    calculate() {
        console.log(this.expression);
        let chars = this.expression.split('');
        for (const char of chars) {
            if (char == '+' || char == '-' || char == '*' || char == '/') {
                continue;
            }
            if (!this.context.variable[char]) {
                this.context.variable[char] = Math.floor(Math.random() * 10);
                console.log(`${char}=${this.context.variable[char]}`);
            }
        }
        let left = new VariableExpression(chars[0]);
        let right = null;
        let stack = [];
        stack.push(left);

        for (let i = 1; i < chars.length; i += 2) {
            left = stack.shift();
            right = new VariableExpression(chars[i + 1]);

            switch (chars[i]) {
                case '+': {
                    stack.push(new AddExpression(left, right));
                    break;
                }
                case '-': {
                    stack.push(new SubExpression(left, right));
                    break;
                }
                case '*': {
                    stack.push(new MulExpression(left, right));
                    break;
                }
                case '/': {
                    stack.push(new DivExpression(left, right));
                    break;
                }
                default:
                    break;
            }
        }
        let value = stack.shift().interpret(this.context);
        return value;
    }
}

let calc = new Calculator('a*b/c*a');

console.log(calc.calculate());