/**
 * Alter the top menu bar and logo on scroll.
 */
let topBar = document.getElementById('top-bar');
let logoLink = document.querySelector('#top-bar a');

window.addEventListener('scroll', () => {

  let thresholdReached = document.documentElement.scrollTop > 500 ? true : false;

  if (thresholdReached) {
    topBar.classList.add('py-3');
    logoLink.classList.remove('w-16', 'h-16', 'p-4');
    logoLink.classList.add('w-12', 'h-12', 'p-3');
  } else {
    topBar.classList.remove('py-3');
    logoLink.classList.remove('w-12', 'h-12', 'p-3');
    logoLink.classList.add('w-16', 'h-16', 'p-4');
  }
});
