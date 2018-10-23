class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
    draw() { }
}

class Circle extends Shape {
    constructor(color) {
        super();
        this._color = color;
    }

    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    setRadius(radius) {
        this._radius = radius;
    }

    draw() {
        console.log(`Draw: Circle {color: ${this._color}, x: ${this._x}, y: ${this._y}, radius: ${this._radius}}`);
    }
}

class ShapeFactory {
    constructor() {
        this._circleMap = {};
    }
    getCircle(color) {
        let circle = this._circleMap[color];
        if(!circle) {
            circle = new Circle(color);
            this._circleMap[color] = circle;
            console.log(`Creating circle of color ${color}.`);
        }
        return circle;
    }
}

const colors = ['pink', 'red', 'blue', 'pinkish-red']
let shapeFactory = new ShapeFactory();

for (let i = 0; i < 20; i++) {
    let circle = shapeFactory.getCircle(getRandomColor());
    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(50);
    circle.draw();
}


function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}
function getRandomX() {
    return Math.floor(Math.random()*100);
}
function getRandomY() {
    return Math.floor(Math.random()*100);
}

