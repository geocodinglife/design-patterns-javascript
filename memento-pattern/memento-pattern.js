class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Originator {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    saveStateToMemento() {
        return new Memento(this.state);
    }

    getStateFromMemento(memento) {
        this.state = memento.getState();
    }
}

class CareTaker {
    constructor() {
        this.mementoList = [];
    }

    add(memento) {
        this.mementoList.push(memento);
    }

    get(index) {
        return this.mementoList[index];
    }
}

const originator = new Originator();
const careTaker = new CareTaker();
originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #3");
originator.setState("State #haha");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #4");

console.log(`Current state: ${originator.getState()}`);
careTaker.add(originator.getStateFromMemento(careTaker.get(0)));
console.log(`First saved state: ${originator.getState()}`);
careTaker.add(originator.getStateFromMemento(careTaker.get(1)));
console.log(`Second saved state: ${originator.getState()}`);