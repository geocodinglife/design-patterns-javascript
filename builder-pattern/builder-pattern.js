class Item {
    name() { }
    packing() { }
    price() { }
}


// --- packing
class Packing {
    pack() { }
}

class Wrapper extends Packing {
    pack() {
        return "Wrapper"
    }
}

class Bottle extends Packing {
    pack() {
        return "Bottle"
    }
}

// ---- item

class Burger extends Item {
    packing() {
        return new Wrapper()
    }

    price() { }
}

class ColdDrink extends Item {
    packing() {
        return new Bottle()
    }

    price() { }
}

class VegBurger extends Burger {
    price() {
        return 12.0
    }

    name() {
        return "Veg Burger"
    }
}

class ChickenBurger extends Burger {
    price() {
        return 15.0
    }

    name() {
        return "Chicken Burger"
    }
}

class Coke extends ColdDrink {
    price() {
        return 3.0
    }

    name() {
        return "Coke"
    }
}

class Pepsi extends ColdDrink {
    price() {
        return 2.0
    }

    name() {
        return "Pepsi"
    }
}

// ---- meal
class Meal {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    getCost() {
        let cost = 0.0
        for(const item of this.items) {
            cost += item.price()
        }
        return cost
    }

    showItems() {
        for(const item of this.items) {
            console.log(`Item:${item.name()}, Packing:${item.packing().pack()}, Price:${item.price()}`)
        }
    }
}

class MealBuilder {
    prepareVegMeal() {
        let meal = new Meal()
        meal.addItem(new VegBurger())
        meal.addItem(new Coke())
        return meal
    }
    prepareNonVegMeal() {
        let meal = new Meal()
        meal.addItem(new ChickenBurger())
        meal.addItem(new Pepsi())
        return meal
    }
}

let mealBuild = new MealBuilder()
console.log("Veg Meal")
let vegMeal =  mealBuild.prepareVegMeal()
vegMeal.showItems()
console.log(`Total Price:${vegMeal.getCost()}`)

console.log("\nNon Veg Meal")
let nonVegMeal = mealBuild.prepareNonVegMeal()
nonVegMeal.showItems()
console.log(`Total Price:${nonVegMeal.getCost()}`)