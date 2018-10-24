class AbstractLogger {
    constructor() {
        if (new.target === AbstractLogger) {
            throw new Error("不能被实例化");
        }
        this.level = null;
        this.nextLogger = null;
    }

    // https://stackoverflow.com/questions/22528967/es6-class-variable-alternatives
    static get INFO() {
        return 1;
    }

    static get DEBUG() {
        return 2;
    }

    static get ERROR() {
        return 3;
    }

    setNextLogger(nextLogger) {
        this.nextLogger = nextLogger;
    }

    logMessage(level, message) {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger != null) {
            this.nextLogger.logMessage(level, message);
        }
    }

    write(message) { }
}

class ConsoleLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }

    write(message) {
        console.log(`Console: ${message}`);
    }
}

class ErrorLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }

    write(message) {
        console.log(`Error: ${message}`);
    }
}

class FileLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }

    write(message) {
        console.log(`File: ${message}`);
    }
}
function getChainOfLoggers() {
    let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
}

let loggerChain = getChainOfLoggers();
loggerChain.logMessage(AbstractLogger.INFO, 'hehe');
loggerChain.logMessage(AbstractLogger.DEBUG, 'lala');
loggerChain.logMessage(AbstractLogger.ERROR, 'didi');