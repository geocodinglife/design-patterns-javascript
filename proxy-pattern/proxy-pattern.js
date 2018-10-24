class Image {
    constructor() {
        if (new.target === Image) {
            throw new Error("不能实例化");
        }
    }
    display() { }
}

class RealImage extends Image {
    constructor(fileName) {
        super();
        this._fileName = fileName;
        this.loadFromDisk(this._fileName);
    }

    display() {
        console.log(`Displaying ${this._fileName}`);
    }

    loadFromDisk(fileName) {
        console.log(`Loading ${fileName}`);
    }
}

class ProxyImage extends Image {
    constructor(fileName) {
        super();
        this._fileName = fileName;
    }

    display() {
        if (!this._realImage) {
            this._realImage = new RealImage(this._fileName);
        }
        this._realImage.display();
    }
}

let image = new ProxyImage('hehe.png');
image.display();
image.display();