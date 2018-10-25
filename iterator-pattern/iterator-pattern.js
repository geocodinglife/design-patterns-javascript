class Iterator {
    constructor() {
        if (new.target === Iterator) {
            throw new Error('This class cannot be instantiated');
        }
    }
    hasNext() { }
    next() { }
}

class Container {
    constructor() {
        if (new.target === Container) {
            throw new Error('This class cannot be instantiated');
        }
    }
    getIterator() { }
}

class NameIterator extends Iterator {
    constructor(container) {
        super();
        this.container = container;
    }
    hasNext() {
        if (this.container.index < this.container.names.length) {
            return true;
        }
        return false;
    }

    next() {
        if (this.hasNext()) {
            return this.container.names[this.container.index++];
        }
        return null;
    }
}

class NameRepository extends Container {
    constructor() {
        super();
        this.index = null;
        this.names = ["Robert", "John", "Julie", "Lora"];
    }

    getIterator() {
        return new NameIterator(this);
    }
}

let namesRepository = new NameRepository();

for (let iter = namesRepository.getIterator(); iter.hasNext();) {
    let name = iter.next();
    console.log(`Name: ${name}`);
}