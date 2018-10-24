class Expression {
    constructor() {
        if (new.target === Expression) {
            throw new Error('本类不能实例化');
        }
    }
    interpret(context) { }
}

class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this._data = data;
    }

    interpret(context) {
        if (context.indexOf(this._data) > -1) {
            return true;
        }
        return false;
    }
}

class OrExpression extends Expression {
    constructor(expr1, expr2) {
        super();
        this._expr1 = expr1;
        this._expr2 = expr2;
    }

    interpret(context) {
        return this._expr1.interpret(context) || this._expr2.interpret(context);
    }
}

class AndExpression extends Expression {
    constructor(expr1, expr2) {
        super();
        this._expr1 = expr1;
        this._expr2 = expr2;
    }

    interpret(context) {
        return this._expr1.interpret(context) && this._expr2.interpret(context);
    }
}

function getMaleExpression() {
    let robert = new TerminalExpression('Robert');
    let john = new TerminalExpression('John');
    return new OrExpression(robert, john);
}

function getMarriedWomanExpression() {
    let married = new TerminalExpression('Married');
    let julie = new TerminalExpression('Julie');
    return new AndExpression(married, julie);
}

let isMale = getMaleExpression();
let isMarriedWoman = getMarriedWomanExpression();

console.log(`John is Male? ${isMale.interpret('John')}`);
console.log(`Julie is a married women? ${isMarriedWoman.interpret('Married Julie')}`);
console.log(`Jane is a married women? ${isMarriedWoman.interpret('Jane')}`);