---
title: "The Canvas API, Part 3: A Retina-Ready, Responsive Canvas"
permalink: /the-canvas-api-part-3-a-retina-ready-responsive-canvas/
date: 2021-02-13
tags: ["Canvas", "JavaScript"]
---

This is part 3 in [a series on the Canvas API](/tag/canvas/).

## Resolution

In [part 1 of this series](/the-canvas-api-part-1-the-background/) I mentioned that the `<canvas>` element is bitmap-based, and thus resolution-dependent. Anything rendered as a bitmap (also known as a raster) image is stored as a series of tiny dots called pixels, which are then 'mapped' directly to your display, making up the image you see. How crisp (or blurry) the resultant image appears depends on how tightly-packed these pixels are.

By default, the `<canvas>` element doesn't automatically adapt to screens that have a high PPI (pixels-per-inch) ratio, so what looks fine on a run-of-the-mill desktop screen might appear disappointingly fuzzy on a phone or tablet. It is in this sense that we speak of the resolution-dependence of the `<canvas>` (in contrast to the resolution-independence of [a vector format like SVG](https://css-tricks.com/lodge/svg/)).

## Sharpening those Shapes

So how do we fix this? Essentially what we need to do is squeeze our pixels into a tighter space, so that they appear to come into a sharper, more finely-edged focus.

If you've been following along with [the previous tutorial](/the-canvas-api-part-2-basic-shapes-and-the-2d-context/), you should have all your HTML, JavaScript and CSS in the one `index.html` document. Before we fix our shapes, we're going to break up our code into separate files.

Create a new blank file called `style.css`, removing the styles and style tags from the `index.html` file (we'll re-add some styling later). Cut and paste the JavaScript into a file called `main.js`. Then reference the CSS and JavaScript files like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Your CSS link below -->
  <link rel="stylesheet" href="style.css">
  <title>Canvas Starter</title>
</head>
<body>
  <main>
    <canvas></canvas>
  </main>       
	<!-- Your JavaScript link below --> 
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

You can of course name your files anything you like; the important thing is to reference them correctly. If you see the same result as before when you open the `index.html` file in your browser, you'll know the references are working correctly.

Next, we need to determine the device pixel ratio; this will be unique to the device you're using. Once we know that, we can adapt our canvas to display at an optimum resolution and make it truly future-proof.

Create a function called `setPixelDensity`, which takes the canvas as its sole argument. The aim of this function will be to return a modified canvas context, which we will then use as the context with which to begin our script. I'll break it into steps, and then show you the code.

1. Determine the device pixel ratio.
2. Determine the actual size of the canvas as it's displayed on screen.
3. Multiply the canvas screen size by the pixel ratio to increase the amount of pixels we'll be working with.
4. Shrink the screen size of the canvas back down, compressing the pixels down to a density directly related to the device pixel ratio.
5. Get the context and scale it by the pixel ratio. This last step prevents us having to worry about the fact that we're working with more pixels than before. If we didn't do this, our shapes would appear smaller (unless we calculated them with values that were relative to the canvas size; this is something we'll actually get to later).

```js
/**
 * Set the pixel density of our <canvas>.
 * 
 * @param {object} canvas Our target <canvas> element.
 */
function setPixelDensity(canvas) {

    // Get the device pixel ratio.
    let pixelRatio = window.devicePixelRatio;
	
    // Optionally print it to the console (if interested).
		console.log(`Device Pixel Ratio: ${pixelRatio}`);

    // Get the actual screen (or CSS) size of the canvas.
    let sizeOnScreen = canvas.getBoundingClientRect();

    // Set our canvas size equal to that of the screen size x the pixel ratio.
    canvas.width = sizeOnScreen.width * pixelRatio;
    canvas.height = sizeOnScreen.height * pixelRatio;

    // Shrink back down the canvas CSS size by the pixel ratio, thereby 'compressing' the pixels.
    canvas.style.width = (canvas.width / pixelRatio) + 'px';
    canvas.style.height = (canvas.height / pixelRatio) + 'px';
    
    // Fetch the context.
    let context = canvas.getContext('2d');

    // Scale all canvas operations by the pixelRatio, so you don't have to calculate these manually.
    context.scale(pixelRatio, pixelRatio);

    // Return the modified context.
    return context;
}
```

More info on [the devicePixelRatio property here](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio), and the [getBoundingClientRect() method here](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

Next, change the line near the top of our script that retrieves our context, substituting it for the result of the function, like so:

```js
const c = setPixelDensity(cnv)
```

Et voilá! You should now see sharper shapes than before (assuming your screen doesn't have a 1:1 pixel ratio).

## A Responsive Canvas

Ok, so we don't have to worry about fuzzy shapes going forward, but wouldn't it be nice to have a canvas adapt its dimensions to the size of the screen it's displayed on too? I.e. wouldn't it be nice to have it display responsively?

First let's get rid of the page margin, which in most cases will default to `8px`. Add this to your CSS:

```css
body {
  margin: 0;
}
```

Then create a function called `responsiveCanvas`, which, like `setPixelRatio`, takes our canvas element as its sole argument.

This is going to be a simpler function. The approach I'm going to take is to have a square canvas at the maximum possible size, irrespective of screen size or aspect ratio.

On a desktop or laptop screen, which would typically have a landscape aspect ratio, the canvas will stretch to the full height, and make the width the same as the height. On a smartphone or tablet, which would typically have a portrait aspect ratio, the canvas will stretch to the full width, and then set the height equal to the width.

```js
/**
 * Make our <canvas> responsive.
 * 
 * @param {object} canvas Our target <canvas> element.
 */
function responsiveCanvas(canvas) {
  const size = Math.min(window.innerHeight, window.innerWidth);
  canvas.width = size;
  canvas.height = size;
}
```

To see this in action, we need to do a few more things. We'll completely fill our canvas with a black rectangle, call the responsiveCanvas function before we call the context, and add some flexbox properties to our canvas container via CSS, to keep it centered.

Add the following CSS:

```css
main {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
```

Now adjust the top of your script to look like this:

```js
// Get the HTML5 <canvas> element.
const cnv = document.querySelector('main canvas');

// Make the <canvas> responsive.
responsiveCanvas(cnv);

// Create the context and adapt it to the device pixel ratio.
const c = setPixelDensity(cnv);

// Create a black square the size of the canvas, to illustrate the responsiveness.
c.fillRect(0, 0, cnv.width, cnv.height);
```

Now when you save and refresh your browser, you should see a big black square centered on your screen. This will serve as our base going forward. Please feel free to adjust or simplify the above according to your preference. For example, if you want a full-screen canvas no matter the device or dimensions you encounter, you shouldn't need the above function or indeed any of the CSS. Instead of using the responsiveCanvas function, you could just replace it with the following:

```js
// Make the <canvas> full size.
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
```

There is one more thing we could do here; you'll notice that if you resize the browser window yourself after running the script, the canvas won't resize responsively until you refresh the page again. This is because there is no event set up to listen for a change in the window size.

If you're feeling like a challenge, you could have a go populating the below event listener method, which will trigger every time the browser detects a change in the window size:

```js
window.addEventListener('resize', function() {
  // Your code here.
});
```

## What's Next?

In the [next part of the series](/the-canvas-api-part-4-points-paths-and-colours/), we'll finally start to make some fun stuff. I'll introduce paths (the real way to make shapes) and colours. Lots of colours. :)
