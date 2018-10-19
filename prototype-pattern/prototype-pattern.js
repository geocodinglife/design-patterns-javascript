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

class ShapeFactory {
    getShape(shapeType) {
        if (!shapeType) {
            return null
        }
        if (shapeType.toLowerCase() == 'rectangle') {
            return new Rectangle()
        } else if (shapeType.toLowerCase() == 'square') {
            return new Square()
        } else if (shapeType.toLowerCase() == 'circle') {
            return new Circle()
        }
        return null
    }
}
let shapeFactory = new ShapeFactory()
let shape1 = shapeFactory.getShape('rectangle')
let shape2 = shapeFactory.getShape('square')
let shape3 = shapeFactory.getShape('circle')

shape1.draw()
shape2.draw()
shape3.draw()