class DrawAPI {
    drawCircle(radius, x, y) { }
}

class RedCircle {
    drawCircle(radius, x, y) {
        console.log(`drawCircle-red: radius=${radius}, x=${x}, y=${y}`);
    }
}

class GreenCircle {
    drawCircle(radius, x, y) {
        console.log(`drawCircle-green: radius=${radius}, x=${x}, y=${y}`);
    }
}

// ---- shape
class Shape {
    constructor(drawAPI) {
        this.drawAPI = drawAPI;
    }

    draw() { }
}

class Circle extends Shape {
    constructor(x, y, radius, drawAPI) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.drawAPI.drawCircle(this.radius, this.x, this.y);
    }
}

// ----
let redCircle = new Circle(10, 10, 100, new RedCircle());
let greenCircle = new Circle(110, 10, 100, new GreenCircle());

redCircle.draw();
greenCircle.draw();