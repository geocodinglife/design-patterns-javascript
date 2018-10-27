class BusinessService {
    constructor() {
        if (new.target === BusinessService) {
            throw new Error("该类不能实例化");
        }
    }
}

class CateringService extends BusinessService {
    doProcessing() {
        console.log("Processing task by invoking Catering Service.");
    }
}

class NotificationService extends BusinessService {
    doProcessing() {
        console.log("Processing task by invoking Notification Service.");
    }
}

class BusinessLookUp {
    getBusinessService(serviceType) {
        if (serviceType.toLowerCase() === "catering") {
            return new CateringService();
        } else {
            return new NotificationService();
        }
    }
}

class BusinessDelegate {
    constructor() {
        this.lookupService = new BusinessLookUp();
        this.businessService = null;
        this.serviceType = null;
    }

    setServiceType(serviceType) {
        this.serviceType = serviceType;
    }

    doTask() {
        this.businessService = this.lookupService.getBusinessService(this.serviceType);
        this.businessService.doProcessing();
    }
}

class Client {
    constructor(businessServiceDelegate) {
        this.businessServiceDelegate = businessServiceDelegate;
    }
    doTask() {
        this.businessServiceDelegate.doTask();
    }
}

const businessDelegate = new BusinessDelegate();
businessDelegate.setServiceType("Catering");

const client = new Client(businessDelegate);
client.doTask();
businessDelegate.setServiceType("Notification");
client.doTask();