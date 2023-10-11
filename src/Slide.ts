import Timeout from "./Timeout.js";

export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    timeout: Timeout | null;
    
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.index = 0;
    this.slide = this.slides[this.index];
    this.showSlide(this.index)
    this.timeout = null;
    this.init()
  }

  hide(el: Element){
    el.classList.remove('active')
  }

  showSlide(index: number){
    this.index = index;
    this.slide = this.slides[this.index]
    this.slides.forEach(el => this.hide(el))
    this.slide.classList.add('active')
    this.auto(this.time)
  }

  auto(time: number){
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
    // const id = setTimeout(() => this.next(), time);
    // clearTimeout(id)
  }

  prev(){
    const prev = (this.index > 0 ? this.index - 1 : this.slides.length - 1);
    this.showSlide(prev)
  }

  next(){
    const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
    this.showSlide(next)
  }

  private addControls(){
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    this.controls.appendChild(prevBtn)
    this.controls.appendChild(nextBtn)
    prevBtn.innerText = "Previous Slide";
    nextBtn.innerHTML = "Next Slide"
    
    prevBtn.addEventListener("pointerup", () => this.prev())
    nextBtn.addEventListener("pointerup", () => this.next())
  }
  
  private init(){
    this.addControls();
    this.showSlide(this.index);
  }

}
