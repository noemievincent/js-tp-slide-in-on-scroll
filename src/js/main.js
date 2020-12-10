const app = {
  aImg: document.querySelectorAll('.slide-in'),
  options: {
    root: null,
    rootMargin: '0px',
    threshold: 1
  },
  iLoadedImg: 0,
  setUp() {
    document.body.classList.add('js-enabled');
    this.iTotalNumberOfImg = this.aImg.length;
    for (const eImg of this.aImg) {
      eImg.addEventListener('load', () => {
        this.checkLoadedImg();
      })
    }
  },
  checkLoadedImg() {
    this.iLoadedImg++;
    if (this.iLoadedImg === this.iTotalNumberOfImg) {
      this.obServeImg();
    }
  },
  obServeImg() {
    const observer = new IntersectionObserver(this.animateImg);
    for (const eImg of this.aImg) {
      observer.observe(eImg);
    }
  },
  animateImg(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    }
  }

}
app.setUp();
