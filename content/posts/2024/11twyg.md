---
title: "11twyg - Eleventy with Twig and YAML"
permalink: /11twyg-eleventy-with-twig-and-yaml/
date: 2024-05-28
tags: ['Eleventy', 'JavaScript']
---

[Eleventy](https://www.11ty.dev/) is an elegant static site generator that I've become a little obsessed with lately. It's light, fast, flexible and its relatively gentle learning curve (zero-config, no JS frameworks required) and generous templating language support (Liquid, Nunjucks, HAML, Handlebars, Mustache, Markdown and more) means you'll likely be comfortable composing templates and writing content out-of-the-box.

What's more, if these defaults fall short, chances are that you'll still be able to customise Eleventy to your liking. For example, if you needed to integrate/work closely with a CMS like Drupal, it would be preferable to use Twig for templating and YAML to handle data files (where JSON is the default). Can Eleventy be extended to accommodate these formats?

Yes, it can, and in this tutorial I'll show you how. (If you just came for the code you can [grab it from the 11twyg repository here](https://github.com/davidmatthew-ie/11twyg)).

## Installing and Running Eleventy

We'll start with the most minimal setup possible, dependency-free. First, create a new directory and then navigate to it:

```bash
mkdir my-11ty && cd my-11ty
```

To initialise our project, we'll need a `package.json` file. To create one, run:

```bash
npm init -y
```

We're now ready to install Eleventy. Running the following shortcut commands will install it (`i`) and save it as a development dependency (`-D`):

```bash
npm i -D @11ty/eleventy
```

Before we run Eleventy, we need to give it some content to serve. Create an `index.html` file in the project root and populate it with the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11twig</title>
</head>
<body>
  <h1>11twig - Eleventy with Twig and YAML</h1>
</body>
</html>
```

We'll make this content more interesting later. For now we have enough to actually run Eleventy. To do this, type:

```bash
npx @11ty/eleventy --serve
```

This should build a `_site` folder and boot up a server at [localhost:8080/](http://localhost:8080/), where we can preview the file we just created.

It would get tedious to type out the above `npx` command every time we wanted to boot up our site, so let's add it as a script, along with a couple of others to build and clean out our site contents (Eleventy doesn't automatically purge previously generated files when re-building). Open up your `package.json` file and add these three commands in the scripts section:

```json
"scripts": {
  "clean": "rm -r _site",
  "start": "npx @11ty/eleventy --serve",
  "build": "npx @11ty/eleventy"
}
```

Now when you type `npm run start` (or just `npm start`) Eleventy will serve up your site.

## Getting Twiggy with It

We're going to install Twig the manual way. There is a third-party plugin that adds Twig support to Eleventy, but I found it easier to just configure Twig myself. That said, I did find [the repo](https://github.com/factorial-io/eleventy-plugin-twig) a useful reference.

The first thing we need is the `twig.js` library, which is a port of the original PHP. Add it to our project as a development dependency:

```bash
npm i -D twig
```

By default, Eleventy is zero-configuration, meaning it'll get to work without a config file. In practice though you'll almost always need one. Create a file called `.eleventy.js`, and at the top of the file, call the `twig` library and store it in a variable.

```js
const twig = require('twig');
```

We need to do three things in this config file:

- Add Twig as a template format
- Add the `.twig` extension
- Set twig as the template engine used to render HTML and Markdown

The below code will accomplish this. It is a combination of following the Eleventy docs on custom template languages, the twig.js docs on github, and peeking under the hood of the factorial twig plugin (for sanity checks).

```js
module.exports = function(eleventyConfig) {

  eleventyConfig.addTemplateFormats('twig');

  eleventyConfig.addExtension('twig', {
    compile: async (inputContent, inputPath) => {
      const template = twig.twig({
        data: inputContent,
        path: `./${inputPath}`
      });
      return async (data) => {
        return template.render(data);
      };
    },
  });

  return {
    markdownTemplateEngine: 'twig',
    htmlTemplateEngine: 'twig',
    templateFormats: ['twig', 'html', 'md']
  };
};
```

With this in place we should be able to take Twig for a test run.

### Testing Tags and Variables

Update the `index.html` file with a couple of variables using the `set` syntax, which is Twig-specific. If you run Eleventy now (`npm start`) and see any headings appear, that means Twig is working.

```twig
{% verbatim %}{% set title = '11twyg' %}
{% set tagline = 'Eleventy with Twig and YAML Support' %}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ title }}</h1>
  <h2>{{ tagline }}</h2>
</body>
</html>
{% endverbatim %}
```

Variables will only get us so far though. Let's test the commonly-used `include` tag, which will allow us to call other files and templates. Create a new file called `header.html`. We'll extract our `title` and `tagline` headings and put them in this file, wrapping them in a `<header>` tag like so:

```twig
{% verbatim %}<header>
  <h1>{{ title }}</h1>
  <h2>{{ tagline }}</h2>
</header>
{% endverbatim %}
```

Update the `index.html` so that the variables and placeholders are removed, and replace the body content with an `include` tag to call the new header. The `include` tag supports arguments using the `with` syntax, which allows us to populate the placeholders inside the `header.html` file. Your `index.html` should now look like:

```twig
{% verbatim %}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11twyg</title>
</head>
<body>
  {% include 'header.html' with {
    title: '11twyg',
    tagline: 'Eleventy with Twig and YAML Support'
  } %}
</body>
</html>
{% endverbatim %}
```

### Cache-Busting

The `twig.js` library comes with caching already enabled, which may mean that sometimes, when you update your code, you won't the changes immediately reflected. To disable this behaviour, add this line to your `.eleventy.js` config file, anywhere inside the `module.exports` function:

```js
twig.cache(false);
```

This should result in the expected hot-reload functionality that Eleventy provides.

### Adding Shortcode Functionality

Another feature that I needed not long after configuring Twig was shortcode support, or the equivalent thereof. Shortcodes are easy to add when using the likes of Liquid or Nunjucks, by using Eleventy's own `addShortcode` function. If you try this with Twig, it won't work. But you can achieve something very similar with Twig's built-in `extendFunction` feature. Here's a quick example of how it works.

Say you want to pull in the current year as part of some copyright text in the footer, a pretty common use case. In your `.eleventy.js` config file, you would use `extendFunction` like so (anywhere inside the `module.exports` function):

```js
twig.extendFunction('getYear', () => {
  let date = new Date();
  return date.getFullYear();
});
```

And then in your template, you could call the custom `getYear()` function as follows:

```twig
{% verbatim %}<footer>
  Copyright © Whoever {{ getYear() }}
</footer>
{% endverbatim %}
```

One limitation I've found so far is the inability to add [paired shortcodes](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes), so if you regularly rely on those you may need cook up something more custom yourself (or not use Twig).

## Adding YAML Support

If you've previously used Twig, there's a high likelihood you're also familiar with YAML, a concise data serialisation format commonly used for configuration files. Drupal uses them, as do many other frameworks.

Adding YAML support to Eleventy is more straightforward. First we install the `js-yaml` dependency:

```bash
npm i -D js-yaml
```

Then add the following requirement at the top of your `.eleventy.js` config:

```js
const yaml = require('js-yaml');
```

Next, inside the `module.exports` function, create the following `addDataExtension` function:

```js
eleventyConfig.addDataExtension('yml, yaml', (contents) => {
  return yaml.load(contents);
});
```

This will allow you to use both `.yml` and `.yaml` files in your [Eleventy data cascade](https://www.11ty.dev/docs/data-cascade/).

To test the integration, create a folder called `_data`, and inside it, create a `site.yml` file. Add the following lines to this file:

```js
name: 11twyg
tagline: Eleventy with Twig and YAML Support
```

Now back in your `index.html` file, update it like so (I'll provide the full file contents here for reference):

```twig
{% verbatim %}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.name }}</title>
</head>
<body>
  {% include 'header.html' with {
    title: site.name,
    tagline: site.tagline
  } %}
  <footer>
    Copyright © Whoever {{ getYear() }}
  </footer>
</body>
</html>
{% endverbatim %}
```

### Conclusion

And that's how you add Twig and YAML to Eleventy. If you run up against any problems, have any feedback, or indeed if you've used this or a similar setup for a static site of your own, please leave a comment or get in touch!
