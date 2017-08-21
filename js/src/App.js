import BannerController from './controllers/BannerController';

class App {
  constructor() {
    this.bannerController = new BannerController();
  }

  init() {
    this.bannerController.init();
  }
}

export default App;