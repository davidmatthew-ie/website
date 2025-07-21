document.addEventListener('DOMContentLoaded', () => {
  // Enable scroll progress functioanlity if the element is present.
  if (document.getElementById('progress')) scrollProgress();

  // Only add page navigation if the element exists and there are h2 headings.
  if (document.getElementById('page-nav') && document.querySelectorAll('h2').length > 0) pageNav();
});
