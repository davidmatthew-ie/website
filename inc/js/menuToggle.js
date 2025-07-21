/**
 * Functionality for the navbar-toggle animations.
 */

let navToggle = document.getElementById('nav-toggle');
let menuIsHidden = true;

navToggle.addEventListener('click', function() {

  let menu = document.getElementById('mobile-menu');
  let navbarToggler = document.getElementById('nav-toggle');
  let bar1 = document.querySelector('#nav-toggle div:nth-child(1)');
  let bar2 = document.querySelector('#nav-toggle div:nth-child(2)');
  let bar3 = document.querySelector('#nav-toggle div:nth-child(3)');

  if (menuIsHidden) {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
    navbarToggler.style.transform = 'rotate(360deg)';
    bar1.style.transform = 'translateY(16px) rotate(-45deg)';
    bar2.style.opacity = '0';
    bar3.style.transform = 'translateY(-16px) rotate(45deg)';
  } else {
    menu.classList.remove('translate-x-0');
    menu.classList.add('-translate-x-full');
    navbarToggler.style.transform = 'rotate(0deg)';
    bar1.style.transform = 'translateY(0) rotate(0deg)';
    bar2.style.opacity = '1';
    bar3.style.transform = 'translateY(0) rotate(0deg)';
  }

  menuIsHidden = !menuIsHidden;
});
