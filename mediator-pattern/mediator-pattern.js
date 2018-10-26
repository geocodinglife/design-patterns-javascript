class ChatRoom {
    static showMessage(user, message) {
        console.log(`${(new Date()).toLocaleString()} ${user.getName()}:${message}`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sendMessage(message) {
        ChatRoom.showMessage(this, message);
    }
}

const tom = new User('Tom');
const haha = new User('Haha');
const robert = new User('Robert');

tom.sendMessage("I'm tom");
haha.sendMessage("Haha~ I'm Haha!");
robert.sendMessage("I'm newer!");