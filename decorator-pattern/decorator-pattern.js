class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("不能被实例化");
        }
    }
    draw() { }
}

class Circle extends Shape {
    draw() {
        console.log("Shape: Circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Shape: Rectangle");
    }
}

class ShapeDecorator extends Shape {
    constructor(decoratedShape) {
        super();
        this.decoratedShape = decoratedShape;
    }

    draw() {
        this.decoratedShape.draw();
    }
}

class RedShapeDecorator extends ShapeDecorator {
    draw() {
        this.decoratedShape.draw();
        this.setRedBorder();
    }
    setRedBorder() {
        console.log("Border Color: Red");
    }
}

let circle = new Circle();
let redCircle = new RedShapeDecorator(new Circle());
let redRectangle = new RedShapeDecorator(new Rectangle());

console.log("Circle with normal border.");
circle.draw();

console.log("\nCircle of red border.");
redCircle.draw();

console.log("\nRectangle of red border.");
redRectangle.draw();

