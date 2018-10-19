// 细胞分裂


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
        this.id = null
        this.type = null
    }
    getType() { }
    getId() { }
    setId() { }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(orig)), orig)
    }
}

class Rectangle extends Shape {
    constructor() {
        super()
        this.type = 'Rectangle'
    }
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class Square extends Shape {
    constructor() {
        super()
        this.type = 'Square'
    }
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class Circle extends Shape {
    constructor() {
        super()
        this.type = 'Circle'
    }
    draw() {
        console.log('draw:' + this.constructor.name)
    }
}

class ShapeCache {
    static getShape(shapeId) { }

    static loadCache() { }
}
