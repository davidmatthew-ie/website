import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { minify } from "terser";

export default async function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("jsmin", async function (code) {
    const minified = await minify(code);
    return minified.code;
  });

  return {
    dir: {
      input: 'content',
      output: 'dist',
      includes: '../inc',
      data: '../data'
    }
  };
};

