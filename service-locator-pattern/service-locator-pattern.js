class Service {
    constructor() {
        if (new.target === Service) {
            throw new Error('本类不能实例化');
        }
    }
    getName() { }
    execute() { }
}

class Service1 extends Service {
    execute() {
        console.log(`Execute service: ${this.constructor.name}`);
    }
    getName() {
        return this.constructor.name;
    }
}

class Service2 extends Service {
    execute() {
        console.log(`Execute service: ${this.constructor.name}`);
    }
    getName() {
        return this.constructor.name;
    }
}

class InitialContext {
    lookup(jndiName) {
        if (jndiName.toLowerCase() === "service1") {
            console.log("Looking up and creating a new Service1 object");
            return new Service1();
        } else if (jndiName.toLowerCase() === "service2") {
            console.log("Looking up and creating a new Service2 object");
            return new Service2();
        }
        return null;
    }
}

class Cache {
    constructor() {
        this.services = [];
    }

    getService(serviceName) {
        for (const service of this.services) {
            if (service.getName().toLowerCase()===serviceName) {
                console.log(`Returning cached ${serviceName} object`);
                return service;
            }
        }

        return null;
    }

    addService(newService) {
        let exists = false;
        for (const service of this.services) {
            if (service.getName()===newService.getName()) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            this.services.push(newService);
        }
    }
}

class ServiceLocator {
    static getService(jndiName) {
        const service = ServiceLocator.cache.getService(jndiName);
        if (service) {
            return service;
        }

        const context = new InitialContext();
        const service1 = context.lookup(jndiName);
        ServiceLocator.cache.addService(service1);
        return service1;
    }
}
ServiceLocator.cache = new Cache();

let service = ServiceLocator.getService("service1");
service.execute();
service = ServiceLocator.getService("service1");
service.execute();
service = ServiceLocator.getService("service2");
service.execute();
service = ServiceLocator.getService("service1");
service.execute();
service = ServiceLocator.getService("service1");
service.execute();
service = ServiceLocator.getService("service2");
service.execute();