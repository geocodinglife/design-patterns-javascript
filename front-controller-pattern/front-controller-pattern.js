class HomeView {
    show() {
        console.log("Display home view");
    }
}

class GalleryView {
    show() {
        console.log("Display gallery view");
    }
}

class Dispatcher {
    constructor() {
        this.homeView = new HomeView();
        this.galleryView = new GalleryView();
    }

    dispatch(request) {
        if (request.toLowerCase() === "home") {
            this.homeView.show()
        } else {
            this.galleryView.show()
        }
    }
}

class FrontController {
    constructor() {
        this.dispatcher = new Dispatcher();
    }

    isAuthenticUser() {
        console.log("User is authenticated successfully.");
        return true;
    }

    trackRequest(request) {
        console.log(`Page requested: ${request}`);
    }

    dispatchRequest(request) {
        this.trackRequest(request);
        if(this.isAuthenticUser()) {
            this.dispatcher.dispatch(request);
        }
    }
}

const frontController = new FrontController();
frontController.dispatchRequest("home");
frontController.dispatchRequest("gallery");