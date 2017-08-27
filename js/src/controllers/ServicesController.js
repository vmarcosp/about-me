export default class ServicesController {

  _distance(elem) {
    var location = 0;
    if (elem.offsetParent) {
      do {
        location += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return location >= 0 ? location : 0;
  }

  _animateSvgs() {
    const $icons = document.querySelectorAll('.expertise-item svg');
    this._iterateIconsAndAnimate($icons);
    window.addEventListener('scroll', () => {
      const $svg = document.getElementById('responsive');
      if ($svg.getBoundingClientRect().top < 100 && !$svg.getAttribute('scrolled')) {
        $svg.setAttribute('scrolled', true);
        Array.from($svg.querySelectorAll('path')).forEach($path => {
          let roundedLength = Math.round($path.getTotalLength());
          $path.setAttribute('stroke-dasharray', roundedLength);
          $path.setAttribute('stroke-dashoffset', roundedLength);
        });
      }
    });
  }



  _iterateIconsAndAnimate($icons) {
    Array.from($icons).forEach($icon => {
      $icon.classList.add('animate');
      this._animatePathsFromIcon($icon);
    });
  }

  _animatePathsFromIcon() {

  }

  init() {
    this._animateSvgs();
  }
}