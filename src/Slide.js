export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.showSlide(this.index);
        this.init();
    }
    hide(el) {
        el.classList.remove('active');
    }
    showSlide(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach(el => this.hide(el));
        this.slide.classList.add('active');
    }
    prev() {
        const prev = (this.index > 0 ? this.index - 1 : this.slides.length - 1);
        this.showSlide(prev);
    }
    next() {
        const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
        this.showSlide(next);
    }
    addControls() {
        const prevBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        this.controls.appendChild(prevBtn);
        this.controls.appendChild(nextBtn);
        prevBtn.innerText = "Previous Slide";
        nextBtn.innerHTML = "Next Slide";
        prevBtn.addEventListener("pointerup", () => this.prev());
        nextBtn.addEventListener("pointerup", () => this.next());
    }
    init() {
        this.addControls();
        this.showSlide(this.index);
    }
}
