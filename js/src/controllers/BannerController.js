
class BannerController {

    constructor() {
        this.buttonMobile = document.getElementsByClassName('mobile-button')[0];
        this.menu = document.getElementsByClassName('navbar')[0];
    }

    _toggleMenu() {
        this.buttonMobile.addEventListener('click', (event) => {
            if (this._isMenuActive()) {
                this.buttonMobile.classList.remove('active');
                this.menu.classList.remove('active');
            } else {
                this.buttonMobile.classList.add('active');
                this.menu.classList.add('active');
            }
        });
    }

    _isMenuActive() {
        return this.menu.classList.contains('active') && this.buttonMobile.classList.contains('active');
    }

    init() {
        this._toggleMenu();
    }

}

export default BannerController;