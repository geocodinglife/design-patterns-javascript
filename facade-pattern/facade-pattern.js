class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
    draw() { }
}

class Rectangle extends Shape {
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class Square extends Shape {
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class Circle extends Shape {
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class ShapeMaker {
    constructor() {
        this._circle = new Circle();
        this._square = new Square();
        this._rectangle = new Rectangle();
    }

    drawCircle() {
        this._circle.draw();
    }

    drawSquare() {
        this._square.draw();
    }

    drawRectangle() {
        this._rectangle.draw();
    }
}

let shapeMaker = new ShapeMaker();

shapeMaker.drawCircle();
shapeMaker.drawRectangle();
shapeMaker.drawSquare();
