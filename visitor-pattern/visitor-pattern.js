class ComputePart {
    accept(computerPartVisitor) { }
}

class Keyboard extends ComputePart {
    accept(computerPartVisitor) {
        computerPartVisitor.visit(this);
    }
}

class Monitor extends ComputePart {
    accept(computerPartVisitor) {
        computerPartVisitor.visit(this);
    }
}

class Mouse extends ComputePart {
    accept(computerPartVisitor) {
        computerPartVisitor.visit(this);
    }
}

class Computer extends ComputePart {
    constructor() {
        super();
        this.parts = [new Mouse(), new Keyboard(), new Monitor()];
    }
    accept(computerPartVisitor) {
        for (const visitor of this.parts) {
            visitor.accept(computerPartVisitor);
        }
        computerPartVisitor.visit(this);
    }
}

class ComputerPartVisitor {
    visit(part) {
        switch (part.constructor.name) {
            case "Computer": {
                break;
            }
            case "Mouse": {
                break;
            }
            case "Keyboard": {
                break;
            }
            case "Monitor": {
                break;
            }

            default:
                break;
        }
    }
}

class ComputerPartDisplayVisitor extends ComputerPartVisitor {
    visit(part) {
        switch (part.constructor.name) {
            case "Computer": {
                console.log(`Displaying ${part.constructor.name}.`);
                break;
            }
            case "Mouse": {
                console.log(`Displaying ${part.constructor.name}.`);
                break;
            }
            case "Keyboard": {
                console.log(`Displaying ${part.constructor.name}.`);
                break;
            }
            case "Monitor": {
                console.log(`Displaying ${part.constructor.name}.`);
                break;
            }

            default:
                break;
        }
    }
}

const computer = new Computer();
computer.accept(new ComputerPartDisplayVisitor());