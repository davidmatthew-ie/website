---
title: "How to use Parcel and Tailwind with WordPress"
permalink: /how-to-use-parcel-and-tailwind-with-wordpress/
date: 2022-06-30
updated: 2025-07-01
tags: ['CSS', 'JavaScript', 'WordPress']
---

I’m a big fan of the [ParcelJS bundler](https://parceljs.org/).* It’s simpler and offers much more out-of-the-box functionality than its main competitor [WebPack](https://webpack.js.org/), and for those relatively new to working in a NodeJS environment (many WordPress developers may fall into this camp), it is far less intimidating. With the increased emphasis on JavaScript and React in the modern WordPress workflow, it’s becoming ever more incumbent on WordPress developers to get to grips with the often complex and configuration-heavy world of front-end tooling.

This is where Parcel can help. It minimises the effort needed to get a front-end workflow up and running, and integrating popular libraries and frameworks is very straightforward. [Tailwind](https://tailwindcss.com/) is one such library, so by way of example I will show you how to use Parcel and the popular Tailwind CSS library together with WordPress. And hopefully in the process you’ll see that WordPress development can be fun again!

## Starting with a (Very) Basic Theme

I’m assuming from the get-go that you have a local development environment running WordPress already set up. If this is not the case, I’d urge you to check out [LocalWP](https://localwp.com/).

Once you have WordPress running, create a new folder called `parcel` in the `wp-content/themes` directory and then open it up with your code editor of choice. We’re going to create a very minimal theme in this folder, starting with the following 2 files:

- style.css
- index.php

Our `style.css` file will be extremely simple. Just the one line will do here:

```css
/*
 * Theme Name: Parcel
 */
```

Our `index.php` file is a little more involved; we need to construct a full page template, so we’ll stick with the very basics in terms of content, such as showing the site name and description, and showing some blog posts if present. It’s far from a complete template file but it will suffice for our demo.

```php
<!DOCTYPE html>
<html>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
</head>
<body>
    <h1><?php bloginfo( 'name' ); ?></h1>
    
    <h2><?php bloginfo( 'description' ); ?></h2>
    
    <?php
    
    if ( have_posts() ) :
        
        while ( have_posts() ) :
        
            the_post();
    
            the_title('<h3>', '</h3>');
        
            the_content();
        
        endwhile;
    
    endif; 
    
    wp_footer();

    ?>
</body>
</html>
```

The theme should now be ready to activate - if you’re following along, go ahead and do that now.

## Installing Node and Parcel

If you don’t already have NodeJS installed, go grab it [here](https://nodejs.org/). Once the installer has completed, run the following in your terminal to verify it all went ok:

```js
node -v && npm -v
```

You should see the versions of both node and its package manager npm printed to the console. What we need next is to initialize npm with a `package.json` file, which is where will we manage our dependencies (Parcel and Tailwind). To do this, run:

```js
npm init -y
```

The `-y` flag just tells npm to accept all defaults when generating the file; we can always adjust these later if needed.

Looking at your `package.json` file now, you should see something like the following:

```json
{
  "name": "parcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Delete the fourth line down beginning with `"main"` and keep the rest as is for now. The next step is to install parcel itself. To do this, run:

```js
npm install parcel --save-dev
```

Parcel is going to be a development/build dependency, which is why we add the `--save-dev` flag. This means it is something we depend on during development, but not in the deployed application.

Installing will take a minute or two, depending on your connection. Once it’s done, you’ll see a `node-modules` folder appear, and your `package.json` file should be updated with something like this:

```json
"devDependencies": {
  "parcel": "^2.9.3"
}
```

## Configuring Parcel and Enqueuing Scripts

To get Parcel working with WordPress, we have a bit more work to do (but not too much). It mainly involves setting up certain default files and folders that Parcel expects to find, adjusting our `package.json` file and creating a WordPress `functions.php` file to enqueue the scripts and styles that Parcel will build.

First, let’s set up the new files and folders as follows (you can leave their content blank for now):

```text
dist/
 -- empty for now
src/
 -- index.js
 -- index.css
functions.php
```

Next, we’ll update the `scripts` section of our `package.json` in order to associate our node commands (think of these as shortcuts) with certain Parcel actions. This is usually how I’d set up my scripts (I use an additional `clean` command to periodically empty out the `dist` folder):

```json
"scripts": {
  "clean": "rm -r dist/",
  "start": "parcel watch src/index.js",
  "build": "parcel build src/index.js"
}
```

When you’re running Parcel for a front-end web app or something similar, you might use `parcel serve` rather than `parcel watch`. The reason we’re using `parcel watch` is because we don’t need to use Parcel’s built-in server; Local is taking care of the development server for us. So when we run `npm run start` (or just `npm start`) it will trigger the command `parcel watch src/index.js`. Try it out! You should see the `dist` folder populate with the built scripts.

Parcel also understands SCSS out of the box, so if you simply rename your .css files to .scss they'll be automatically compiled to your `dist` folder. The same goes for TypeScript; rename your JavaScript files from .js to .ts and they'll be compiled accordingly.

## Enqueuing the Scripts

These built scripts aren’t much good to us yet, because WordPress isn’t being instructed to load them. To rectify this, let’s open up our `functions.php` file and use the WordPress `wp_enqueue_scripts` hook to add a function that will load our Parcel-generated JavaScript and CSS files.

First we make sure our file starts with the `<?php` directive (otherwise it’ll go straight into HTML output mode). Then we use the WordPress `add_action` function, and use the hook we mentioned earlier, `wp_equeue_scripts`, as the first argument. This tells WordPress when to trigger the function (or where to ‘hook it in’, hence the names hooks). The second argument is the function itself.

```php
<?php

/**
 * Load our custom parcel-built CSS and JavaScript.
 */
add_action( 'wp_enqueue_scripts', function() {
    // Load our custom CSS.
    wp_enqueue_style( 'parcel', get_stylesheet_directory_uri() . '/dist/index.css', array(), '1.0' );

    // Load our custom scripts.
    wp_enqueue_script( 'parcel', get_stylesheet_directory_uri() . '/dist/index.js', array(), '1.0', true );
} );
```

If you’re not familiar with the contents of the above function, I’d encourage you to look into the [`wp_enqueue_style()`](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) and [`wp_enqueue_script()`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) documentation. All we’re doing here is loading our two main files - `index.css` and `index.js`. Let’s test to see if it’s working.

Try adding the following into your index.js file:

```js
import './index.css';

console.log('Parcel is Working!');
```

And add this to your `index.css` file:

```css
h1 {
  color: red;
}
```

If it’s working, you should see the success message printed to the console, and the main site title change colour from black to red.

## Installing and Configuring Tailwind

Finally, to give a more real-world-application feel to what we’re doing, let’s install the popular Tailwind CSS library (this tutorial focuses on version 3). If you haven’t used Tailwind before, I urge you to try it out in any new projects you build - it’s fun, refreshing and quite revolutionary in its approach. It also allows you to use just the bits you need and grow as you go, without burdening you with the decision of what to include in advance.

To get it working with Parcel is straightforward enough - start with the below command:

```js
npm install tailwindcss postcss --save-dev
```

The next step is to initialise Tailwind. This is similar to how we initialise Node - we run a command that creates a config file. In the case of Tailwind, we use `npx` rather than `npm` (for the difference between the two, see [here](https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx)):

```js
npx tailwindcss init
```

This command creates a `tailwind.config.js` file. In this file, you’ll notice a line beginning with `content`. This is what tells Tailwind what files to check for CSS classes. In the case of WordPress, we only want it to scan `php` files, so we can update `tailwind.config.js` as follows:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.php"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Finally, we need to tell Parcel that we’re using Tailwind as a plugin (which is how they work together so well). Create a `.postcssrc` file in the root of the project (where your `package.json` file lives) and enable the `tailwindcss` plugin as follows:

```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

## Taking Tailwind for a Test-Run

Now it’s time to test things. In our `src/index.css` file, add the following directives for each of Tailwind’s layers:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind should now be ready to go. We just need to run our start script:

```js
npm start
```

Once this runs, you should see some change to the appearance of the homepage. Tailwind’s CSS reset should have kicked in, stripping out a lot of default browsing styling (such as all the heading font sizes). Node may also have warned you that `No utility classes were detected in your source files`. This is fine, as we haven’t added any CSS classes to our PHP yet. To confirm that these will be picked up by Tailwind, update the `<h1>` and `<h2>` elements in the `index.php` file as follows:

```php
<h1 class="text-6xl font-bold my-3"><?php bloginfo( 'name' ); ?></h1>
    
<h2 class="text-3xl italic my-2"><?php bloginfo( 'description' ); ?></h2>
```

This should transform the headings on the homepage quite dramatically (aesthetically not so much - that I’ll leave up to you!).

## Conclusion

With this setup in place, writing markup for WordPress themes can become fast, fluid and fun again. Not to mention efficient - with Parcel, all your scripts and styles can be packaged into optimised bundles and your dependencies elegantly managed. And with Tailwind, the toil of writing and maintaining CSS can be transformed into a pleasurable, creative pursuit, where the focus is back on the design.

I hope you’ve found this helpful, and if you have any questions or comments please do get in touch.

<small id="asterisk">\* Update 2025: I have actually since switched to Vite as my bundler of choice, but still do rate Parcel highly!</small>
