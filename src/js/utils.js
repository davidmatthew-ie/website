/**
 * Create a URL-friendly string.
 *
 * @param { string } str 
 * @returns { string }
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

/**
 * Return an appropriately formatted date.
 *
 * @param { date } date 
 * @returns { date }
 */
export function formatDate(date) {
  return date.toLocaleDateString('en-IE', {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Filter and format an array of tags.
 *
 * @param { array } tags 
 * @returns { string }
 */
export function formatTags(tags) {
  tags = (tags || []).filter(tag => ['x'].indexOf(tag) === -1);
  return tags.join(', ');
}
