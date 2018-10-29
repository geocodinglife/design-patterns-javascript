class Filter {
    constructor() {
        if (new.target === Filter) {
            throw new Error('本类不能实例化');
        }
    }
    execute(request) { }
}

class AuthenticationFilter extends Filter {
    execute(request) {
        console.log(`Authenticating request: ${request}`);
    }
}

class DebugFilter extends Filter {
    execute(request) {
        console.log(`Request log: ${request}`);
    }
}

class Target {
    execute(request) {
        console.log(`Executing request: ${request}`);
    }
}

class FilterChain {
    constructor() {
        this.filters = [];
        this.target = null;
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    execute(request) {
        for (const filter of this.filters) {
            filter.execute(request);
        }
        this.target.execute(request);
    }

    setTarget(target) {
        this.target = target;
    }
}

class FilterManager {
    constructor(target) {
        this.filterChain = new FilterChain();
        this.filterChain.setTarget(target);
    }

    setFilter(filter) {
        this.filterChain.addFilter(filter);
    }

    filterRequest(request) {
        this.filterChain.execute(request);
    }
}

class Client {
    constructor() {
        this.filterManager = null;
    }

    setFilterManager(filterManager) {
        this.filterManager = filterManager;
    }

    sendRequest(request) {
        this.filterManager.filterRequest(request);
    }
}

const filterManager = new FilterManager(new Target());
filterManager.setFilter(new AuthenticationFilter());
filterManager.setFilter(new DebugFilter());

const client = new Client();
client.setFilterManager(filterManager);
client.sendRequest('HAHA');