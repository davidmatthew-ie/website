import { minify } from 'terser';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ 'inc/fonts': '/fonts' });
  eleventyConfig.addPassthroughCopy({ 'inc/img': '/img' });
  eleventyConfig.addPassthroughCopy({ 'content/media': '/media' });

  eleventyConfig.addFilter('jsmin', async function (code) {
    const minified = await minify(code);
    return minified.code;
  });

  eleventyConfig.addFilter('format_date', (date) => {
    return date.toLocaleDateString('en-IE', {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter('filter_tags', (tags) => {
    return (tags || []).filter(tag => ['x', 'post'].indexOf(tag) === -1);
  });

  eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
    if (data.draft) return false;
  });

  eleventyConfig.addShortcode('get_year', () => {
    const date = new Date();
    return date.getFullYear();
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'content',
      output: 'dist',
      includes: '../inc',
      data: '../data'
    }
  };
};

