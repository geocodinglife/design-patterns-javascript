class Hero {
    constructor() {
        if (new.target === Hero) {
            throw new Error("不能被实例化");
        }
    }
    init() { }
}

class Ahri extends Hero {
    draw() {
        console.log("Hero: Ahri");
    }
}

class Vi extends Hero {
    draw() {
        console.log("Hero: Vi");
    }
}

class SkinDecorator extends Hero {
    constructor(decoratedHero) {
        super();
        this.decoratedHero = decoratedHero;
    }

    draw() {
        this.decoratedHero.draw();
    }
}

class VoiceDecorator extends Hero {
    constructor(decoratedHero) {
        super();
        this.decoratedHero = decoratedHero;
    }

    draw() {
        this.decoratedHero.draw();
    }
}

class MagicalGirlDecorator extends SkinDecorator {
    draw() {
        this.decoratedHero.draw();
        this.setSkin();
    }
    setSkin() {
        console.log("Skin: Magical Girl");
    }
}

class ProjectOriginDecorator extends SkinDecorator {
    draw() {
        this.decoratedHero.draw();
        this.setSkin();
    }
    setSkin() {
        console.log("Skin: Project Origin");
    }
}

class ProjectOriginVoiceDecorator extends VoiceDecorator {
    draw() {
        this.decoratedHero.draw();
        this.setVoice();
    }
    setVoice() {
        console.log("Voice: Project Origin");
    }
}



let heroAhri = new Ahri();
let heroVi = new Vi();

let magicalGirlAhri = new MagicalGirlDecorator(new Ahri());
let projectOriginVi = new ProjectOriginVoiceDecorator(new ProjectOriginDecorator(new Vi()));

console.log("Ahri with normal skin.");
heroAhri.draw();

console.log("\nVi with normal skin.");
heroVi.draw();

console.log("\nAhri of magical girl skin.");
magicalGirlAhri.draw();

console.log("\nVi of project origin skin.");
projectOriginVi.draw();

