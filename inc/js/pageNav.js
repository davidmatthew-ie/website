/**
 * Create the dynamic sidebar containing internal page navigation links.
 */
function pageNav() {

  // Get the main page heading and page nav area.
  const pageHeading = document.querySelector('h1');
  const pageNav = document.getElementById('page-nav');

  // Create the required elements.
  const list = document.createElement('ul');
  const listHeading = document.createElement('h4');
  const listHeadingLink = document.createElement('a');

  // Create a link to the main page heading.
  pageHeading.id = pageHeading.innerText.toLowerCase();
  listHeadingLink.href = `#${pageHeading.id}`;

  // Add styling and text.
  pageNav.classList.add('text-zinc-300');
  list.classList.add('ml-1', 'my-0', 'px-0', 'list-none', 'leading-none');
  listHeading.classList.add('text-xl', 'mt-0', 'mb-1');
  listHeadingLink.classList.add('font-bold', 'no-underline', 'text-zinc-300');
  listHeadingLink.innerText = 'Contents';
  
  // Append the elements.
  listHeading.appendChild(listHeadingLink);
  pageNav.appendChild(listHeading);
  pageNav.appendChild(list);
  
  // Get all the h2 and h3 headings.
  const subheadings = document.querySelectorAll('h2, h3');

  // For each heading...
  subheadings.forEach((heading) => {

    // Run for all the h2 and h3 headings that haven't opted out.
    if (heading.dataset.pageNav != 'false') {

      // Create a list item and link.
      const listItem = document.createElement('li');
      const link = document.createElement('a');

      // Apply an id to the heading if one doesn't already exist.
      if (!heading.hasAttribute('id')) {
        heading.id = heading.innerText.replace(/\s+/g, '-').toLowerCase();
      }

      // Create the internal link to the heading and style it.
      link.href = `#${heading.id}`;
      link.classList.add('no-underline', 'font-normal', 'text-inherit', 'visited:text-inherit')

      // Get the heading text and style it appropriately.
      link.innerText = heading.innerText;
      listItem.classList.add('my-0', 'pb-1', 'text-lg', 'border-l-2', 'border-zinc-600');
      if (heading.tagName.toLowerCase() === 'h2') {
        listItem.classList.add('pl-3');
      } else {
        listItem.classList.add('pl-5', 'text-base', 'text-zinc-400');
      }

      // Append the elements.
      listItem.appendChild(link);
      list.appendChild(listItem);
    }
  });
}

