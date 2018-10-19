const singleton = Symbol()
const singletonEnforcer = Symbol()

class SingleObject {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw 'Cannot constructor singleton'
        }
    }
    static get instance() {
        if(!this[singleton]) {
            this[singleton] = new SingleObject(singletonEnforcer)
        }
        return this[singleton]
    }

    showMessage() {
        console.log('hehe')
    }
}

let obj = SingleObject.instance
let obj1 = SingleObject.instance

console.log(obj1 === obj)

obj.showMessage()