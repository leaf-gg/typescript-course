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


const button = document.querySelector('button');
function handleClick(event: MouseEvent) {
  const el = event.currentTarget;
  if (el instanceof HTMLElement) {
    console.log(el.innerText);
  }
}

button?.addEventListener('click', handleClick);

*/

const menuState = document.getElementById('btn-mobile');
console.log(menuState);
function handleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

menuState?.addEventListener('click', handleMenu);
