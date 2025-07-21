/**
 * Control the width of the progress bar at the top of the page on scroll.
 */
function scrollProgress() {

  window.addEventListener('scroll', () => {

    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let percentScrolled = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress").style.width = `${percentScrolled}%`;
  });
}
