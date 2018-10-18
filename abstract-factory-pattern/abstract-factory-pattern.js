// --- shape
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
    draw() {

    }
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

// --- color

class Color {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
    fill() {

    }
}

class Red extends Color {
    fill() {
        console.log('fill:' + this.constructor.name)
    }
}

class Green extends Color {
    fill() {
        console.log('fill:' + this.constructor.name)
    }
}

class Blue extends Color {
    fill() {
        console.log('fill:' + this.constructor.name)
    }
}

class AbstractFactory {
    getColor() {

    }

    getShape() {

    }
}

class ShapeFactory extends AbstractFactory {
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

    getColor(color) {
        return null
    }
}

class ColorFactory extends AbstractFactory {
    getShape(shapeType) {
        return null
    }

    getColor(color) {
        if (!color) {
            return null
        }
        if (color.toLowerCase() == 'red') {
            return new Red()
        } else if (color.toLowerCase() == 'green') {
            return new Green()
        } else if (color.toLowerCase() == 'blue') {
            return new Blue()
        }
        return null
    }
}

class FactoryProducer {
    static getFactory(choice) {
        if (!choice) {
            return null
        }
        if (choice.toLowerCase() == 'shape') {
            return new ShapeFactory()
        } else if (choice.toLowerCase() == 'color') {
            return new ColorFactory()
        }
        return null
    }
}

let shapeFactory = FactoryProducer.getFactory('shape')
let shape1 = shapeFactory.getShape('rectangle')
let shape2 = shapeFactory.getShape('square')
let shape3 = shapeFactory.getShape('circle')

shape1.draw()
shape2.draw()
shape3.draw()


let colorFactory = FactoryProducer.getFactory('color')
let color1 = colorFactory.getColor('red')
let color2 = colorFactory.getColor('green')
let color3 = colorFactory.getColor('blue')

color1.fill()
color2.fill()
color3.fill()