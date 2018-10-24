class Order {
    constructor() {
        if (new.target === Order) {
            throw new Error("不能实例化");
        }
    }
    execute() { }
}

// received
class Stock {
    constructor() {
        this._name = 'ABC';
        this._quantity = 10;
    }

    buy() {
        console.log(`Stock: [ Name: ${this._name}, Quantity: ${this._quantity}] bought`)
    }

    sell() {
        console.log(`Stock: [ Name: ${this._name}, Quantity: ${this._quantity}] sold`)
    }
}

// command
class BuyStock extends Order {
    constructor(abcStock) {
        super();
        this._abcStock = abcStock;
    }

    execute() {
        this._abcStock.buy();
    }
}

class SellStock extends Order {
    constructor(abcStock) {
        super();
        this._abcStock = abcStock;
    }

    execute() {
        this._abcStock.sell();
    }
}

// invoker
class Broker {
    constructor() {
        this._orderList = [];
    }

    takeOrder(order) {
        this._orderList.push(order);
    }

    placeOrders() {
        for (const order of this._orderList) {
            order.execute();
        }
        this._orderList = [];
    }
}

// demo
let stock = new Stock();
let buyStockOrder = new BuyStock(stock);
let sellStockOrder = new SellStock(stock);

let broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);
broker.placeOrders();