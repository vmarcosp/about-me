import BannerController from './controllers/BannerController';
import ServicesController from './controllers/ServicesController';

class App {
  constructor() {
    this.bannerController = new BannerController();
    this.servicesController = new ServicesController();
  }

  init() {
    this.bannerController.init();
    this.servicesController.init();
  }
}

export default App;