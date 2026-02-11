/**
 * Functionality for the MusicXML tree.
 */

// All elements are initially expanded.
let expanded = true;

// For each link, create a button to expand/collapse its list sibling.
document.querySelectorAll('#musicxml-tree a').forEach((link, index) => {

  // If the link has a list sibling. Ignore root list (index 0).
  if (link.nextElementSibling && link.nextElementSibling.nodeName == 'UL' && index !== 0) {

    // Get the list and assign it an id.
    const list = link.nextElementSibling;
    list.id = `list-${index}`;

    // Create a button and tie its aria attributes to the list.
    const button = document.createElement('button');
    button.setAttribute('aria-controls', list.id);
    button.setAttribute('aria-expanded', 'true');
    button.classList.add('cursor-pointer', 'w-16', 'group')
    button.title = 'Expand/Collapse';
    
    // Append an SVG and retrieve it for transformation.
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 p-0.5 rounded-full fill-yellow-400 ml-1.5 relative top-1 group-hover:bg-yellow-500 group-hover:fill-zinc-900 group-active:bg-yellow-600 transition origin-center">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7061 11.7928C19.0966 12.1833 19.0966 12.8165 18.7061 13.207L12.7061 19.207C12.3156 19.5975 11.6825 19.5975 11.2919 19.207L5.29188 13.207C4.90135 12.8165 4.90135 12.1834 5.29187 11.7928C5.68239 11.4023 6.31555 11.4023 6.70608 11.7928L11.999 17.0857L17.2919 11.7928C17.6824 11.4022 18.3156 11.4022 18.7061 11.7928Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7064 4.7924C19.0969 5.18293 19.097 5.81609 18.7064 6.20662L12.7065 12.2066C12.316 12.5971 11.6828 12.5971 11.2923 12.2066L5.29222 6.20667C4.90169 5.81615 4.90169 5.18298 5.29221 4.79246C5.68273 4.40193 6.31589 4.40192 6.70642 4.79245L11.9994 10.0853L17.2922 4.79241C17.6827 4.40188 18.3159 4.40188 18.7064 4.7924Z" />
      </svg>`;
    const svg = button.getElementsByTagName('svg')[0];
    link.after(button);

    // Toggle the list visibility on click.
    button.addEventListener('click', () => {
      if (button.getAttribute('aria-expanded') == 'true') {
        list.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        svg.style.rotate = '-90deg';
      } else {
        list.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
        svg.style.rotate = '';
      }
    });
  }
});

// Functionality for the collapse/expand all button.
document.getElementById('collapse-all').addEventListener('click', () => {
  const buttons = document.querySelectorAll('#musicxml-tree button');

  // Simulate a click event.
  buttons.forEach((button) => {
    let expandedStateMatch = expanded && button.getAttribute('aria-expanded') == 'true';
    let collapsedStateMatch = !expanded && button.getAttribute('aria-expanded') == 'false';
    if (expandedStateMatch || collapsedStateMatch) button.click();
  });

  expanded = !expanded;
});
