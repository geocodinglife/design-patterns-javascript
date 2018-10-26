class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notifyAllObservers() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}

class Observer {
    constructor() {
        this.subject = null;
    }
    update() { }
}

class BinaryObserver extends Observer {
    constructor() {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log(`Binary String: ${this.subject.getState().toString(2)}`);
    }
}

class OctalObserver extends Observer {
    constructor() {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log(`Octal String: ${this.subject.getState().toString(10)}`);
    }
}

class HexObserver extends Observer {
    constructor() {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log(`Hex String: ${this.subject.getState().toString(16).toUpperCase()}`);
    }
}

const subject = new Subject();
new BinaryObserver(subject);
new OctalObserver(subject);
new HexObserver(subject);

console.log("First state change: 15");
subject.setState(15);
console.log("\nSecond state change: 9");
subject.setState(9);