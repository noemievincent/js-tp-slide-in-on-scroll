// Made with love by Domy 👌
const ui = {
  init() {
    document.body.removeChild(document.querySelector('.no-js__message'));
    document.querySelector('.site-wrap').style.margin = '0';
    this.images = document.querySelectorAll('.slide-in');
    this.countLoadedImages = 0;
    this.countImages = this.images.length;
    this.checkImagesLoaded();
  },

  checkImagesLoaded() {
    this.images.forEach(image => {
      image.addEventListener('load', loadEvt => {
        this.countLoadedImages++;
        if (this.countLoadedImages === this.countImages) {
          ob.init(this.images);
        }
      });
    });
  },
};

const ob = {
  init(images) {
    images.forEach(image => {
      new IntersectionObserver(this.updateClassList).observe(image);
    });
  },

  updateClassList(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
};

ui.init();
