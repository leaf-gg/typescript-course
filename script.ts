/*
// button

const button = document.querySelector('button');

function handleClick(event: MouseEvent) {
  console.log(event, 'event');
}

button?.addEventListener('click', handleClick);

// scroll

function handleScroll(event: Event) {
  console.log(event);
}
window.addEventListener('scroll', handleScroll);

function enableMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}
document.documentElement.addEventListener('mousedown', enableMenu);
document.documentElement.addEventListener('touchstart', enableMenu);
window.addEventListener('keydown', enableMenu);



const button = document.querySelector('button');
function handleClick(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this);
}


*/

const button = document.querySelector('button');
function handleClick(event: MouseEvent) {
  const el = event.currentTarget;
  if (el instanceof HTMLElement) {
    console.log(el.innerText);
  }
}

button?.addEventListener('click', handleClick);
