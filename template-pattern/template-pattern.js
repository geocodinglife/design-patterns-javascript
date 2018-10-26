class Game {
    constructor() {
        if (new.target === Game) {
            throw new Error("该类不能实例化");
        }
    }

    play() {
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
    initialize() { }
    endPlay() { }
    startPlay() { }
}

class Cricket extends Game {
    initialize() {
        console.log("Criket Game Initialized! Start playing.");
    }
    endPlay() {
        console.log("Criket Game Finished!");
    }
    startPlay() {
        console.log("Criket Game Started! Enjoy the game!");
    }
}

class Football extends Game {
    initialize() {
        console.log("Football Game Initialized! Start playing.");
    }
    endPlay() {
        console.log("Football Game Finished!");
    }
    startPlay() {
        console.log("Football Game Started! Enjoy the game!");
    }
}

let game = new Cricket();
game.play();

game = new Football();
game.play();