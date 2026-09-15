---
title: How to Create a Dependency-Free Development Environment for GLSL Shaders
description: A step-by-step guide to setting up your own local dev environment for Shadertoy-esque GLSL sketches, no dependencies needed.
slug: glsl-shaders-dependency-free-development
date: 2026-09-15
tags:
  - x
  - Creative Coding
  - Shaders
  - JavaScript
---

WebGL has always felt like wizardry to me, in large part due to the intriguing little language called GLSL. WebGL stands for Web Graphics Library, the online-ready counterpart to the more comprehensive OpenGL spec (specifically, WebGL mirrors the lighter OpenGL ES spec). And GLSL stands for (Open)GL Shading Language.

GLSL is a wonderful tool for any creative coder. In the hands of a master, it can lead to truly mesmerising graphics; for those getting started though, it can be intimidating. GLSL relies on WebGL to piece everything together into a program that can run on the GPU, and WebGL is also quite intimidating. It is a verbose API. The amount of code it takes to get a colour up on the screen with WebGL is orders of magnitude more than it would be using the likes of the 2D Canvas API (<a href="/the-canvas-api-part-1-the-background/" target="_blank">which I've covered here</a>) or SVG (which I've <a href="/generative-art-javascript-svg/" target="_blank">devoted a whole book to</a>, but for an ultra simple example <a href="/creative-coding-with-svg-circles-rectangles-viewbox/#first-strokes" target="_blank">see here</a>).

## Why Not Use a Library?

We could of course use a library like <a href="https://threejs.org/" target="_blank">Three.js</a>, or the lesser known and more minimal <a href="https://twgljs.org/" target="_blank">TWGL.js</a> (written by Gregg Tavares who also runs the <a href="https://webgl2fundamentals.org/" target="_blank">WebGL Fundamentals</a> websites), and this is what many people do; get a library to do the grunt work and move on. And this is fine.

But what if, like me, you're not too comfortable depending on a library? For one, it'll often ship with far more dependencies than you need. You also need to keep step with its development, and there's no guarantee that this development will continue indefinitely. But most importantly, *not* using a library will generally encourage deeper understanding, and can ultimately be more rewarding and freeing.

There is always the option to revert to using a library once you've grappled with the fundamentals yourself (<a href="https://twgljs.org/" target="_blank">TWGL.js</a> is particularly suitable for this) but in this post I want to show you how you can run your own GLSL shaders (Shadertoy-style) without any such dependency. And hopefully you'll see that behind that verbosity, WebGL is actually quite a small API that really just rasterises what you give it.

## Setting up a Local Environment

The first thing you'll need is a code editor, which, if you're here, I'll assume you already have. I'd recommend <a href="https://code.visualstudio.com/" target="_blank">VS Code</a> (or <a href="https://vscodium.com/" target="_blank">VS Codium</a>, a version free of Microsoft's tracking/telemetry) as it has a great GLSL extension called <a href="https://marketplace.visualstudio.com/items?itemName=raczzalan.webgl-glsl-editor" target="_blank">WebGL GLSL Editor</a>. This offers a number of useful features for GLSL development, such as general code <a href="https://code.visualstudio.com/docs/editing/intellisense" target="_blank">intellisense</a>, offline documentation and syntax highlighting support for standalone files, script elements and template strings.

The next thing you'll need is a web server. You could go with the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server extension</a>, or simply install `live-server` on your machine via `npm` (which is what I do):

```
npm install -g live-server
```

As an extra step, I'd recommend setting up a <a href="https://code.visualstudio.com/docs/configure/profiles" target="_blank">dedicated profile in VS Code</a> for GLSL development. I find profiles great for managing custom settings and extensions for different languages and frameworks and automatically linking them with specific project folders.

Here's how I'd recommend you organise your files and folders within your project/top-level folder (which I've called `glsl-starter`):

```
└── glsl-starter
    ├── main.js
    ├── style.css
    └── shaders
        └── 000-starter-template
            ├── fragment.glsl
            ├── index.html
            ├── vertex.glsl
```

The idea here is to keep things extremely simple. The `000-starter-template` folder can act as a base template that you can copy as you need to, as your collection of sketches grows. You can name these folders however you like but it's important (as we'll see later) to keep the names of the three files `fragment.glsl`, `index.html` and `vertex.glsl` the same.

## Markup and Styling

The markup for the `index.html` file you can find below. Remember, this should be located in the `000-starter-template` folder rather than the root. Each sketch will have its own `index.html` that should only differ by `<title>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../style.css">
  <title>Starter Template | GLSL</title>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script src="../../main.js"></script>
</body>
</html>
```

The content of the `style.css` file is shown below. This is a root-level file referenced by each sketch, and it sets the canvas to the width and height of the user's screen, with no margins or padding.

```css
html, body {
  margin: 0;
  padding: 0;
}

#canvas {
  display: block;
  width: 100%;
  height: 100dvh;
  background-color: #000;
}
```

## Shader Starter Templates

This tutorial won't cover any of the complexities of shaders themselves; the focus will be on the code to get them up and running. We'll therefore stick with very rudimentary examples.

### Vertex Shader Code

The vertex shader handles vertex attribute data, and the only attribute we'll be interested in is the `position` attribute which we'll set up later in our `main.js` file. We'll also be using WebGL 2, so we'll need a version definition at the top of both of our shader files that specifies the corresponding version of GLSL to use (which, to confuse things a little, is version `3.00`).

Here's the content that should go into the `vertex.glsl` file:

```glsl
#version 300 es ->

in vec4 position;

void main() -> {
  gl_Position = position;
}
```

### Fragment Shader Code

The fragment shader runs per pixel, and its job is to set the output colour of the current pixel. In the following code, we're animating the colour using two uniforms, `time` and `resolution`. We'll need to prepare these for the fragment shader in our `main.js` file.

```glsl
#version 300 es
precision highp float;

out vec4 colour;
uniform vec2 resolution;
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  colour = vec4(uv.x, uv.y, sin(time) / 2.0 + 1.0, 1);
}
```

## The Main Function

We'll be loading our shaders asynchronously from their respective `.glsl` files, so the main function in our `main.js` file needs to support this. We'll set it up as an anonymous wrapper function that automatically fires, so we don't have to call it manually by name after defining it:

```js
(async () => {

  // Most of our code will go here.

})();
```

The first few lines of the main function will retrieve the `<canvas>` element we set up previously, and then get its WebGL context. Note here that we're using `webgl2` rather than `webgl`.

```js
(async () => {
  // Get the canvas element.
  const canvas = document.getElementById("canvas");

  // Get the WebGL context from the canvas.
  const gl = canvas.getContext("webgl2");
})();
```

## Setting up the Shaders

Next, we need to set up our shaders. The code to do so will be near-identical for both the vertex and fragment shaders, so quite often you'll see this boilerplate abstracted into a separate function. However seeing as we're only doing this twice here, there's no real harm in the repetition; quite the opposite in fact. It can aid learning and keep our focus on the actual API.

### Creating and Compiling

Creating a shader involves a few steps:

- Defining the type of shader you want
- Getting its source code
- Compiling it

We'll create and compile our vertex shader first. We can do this using three WebGL methods: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader" target="_blank">`createShader()`</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource" target="_blank">`shaderSource()`</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader" target="_blank">`compileShader()`</a>.

```js
// Create and compile the vertex shader.
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, await loadShader('./vertex.glsl'));
gl.compileShader(vertexShader);
```

After the compile step, it's always a good idea to do some error checking. We'll check the compile status using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter" target="_blank">`getShaderParameter()`</a> method, and if it doesn't return `true` we throw an error and include information from the shader's log.

```js
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog);
}
```

Now we can repeat the same steps for the fragment shader.

```js
// Create and compile the fragment shader.
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, await loadShader('./fragment.glsl'));
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  throw new Error(gl.getShaderInfoLog);
}
```

### The loadShader() Function

When we set the shader source, we used a `loadShader()` function we hadn't yet defined. It's a relatively simple async function that uses the native `fetch` API to get the `text` content of the `url` we feed it (the relative path to the shader files in our case). If the response doesn't have a status of `ok` we throw an error with some `status` info. This will be the only code that sits outside the main wrapper function.

```js
/**
 * Fetch a shader from a URL or relative path.
 *
 * @param {URL} url
 * @returns {string} The text of the shader script.
 */
async function loadShader(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.text();
}
```

## Creating the Program

Once the shaders are ready, they can be attached to a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram" target="_blank">`program`</a>. From then on the `program` is our means of interfacing with the shaders, and is how we supply them with attributes and uniforms.

First we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram" target="_blank">`createProgram()`</a> method, and then the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader" target="_blank">`attachShader()`</a> method for each shader. After that the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram" target="_blank">`linkProgram()`</a> method can be used to link the program to the attached shaders.

```js
// Create a program to link the two shaders.
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
```

As with the shaders, it's also a good idea to run some error checking after this, this time using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter" target="_blank">`getProgramParameter()`</a> method to check the link status. If this doesn't return `true`, we'll throw an error with information from the program log.

```js
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program));
}
```

At this point, the program is ready to use. I like to call the `useProgram()` method now rather than later, as it must be called *before* we finalise any uniform values (the same doesn't hold true for attributes as they're not tied to the program state in the same way).

```js
// Now use the program. This must happen before any uniforms are set.
gl.useProgram(program);
```

## Setting up the Vertices

This section is where the verbosity of WebGL will become particularly apparent. What we basically want to do is create a rectangle covering the entirety of our screen. This rectangle will need vertices (i.e. points), from which we can derive the `position` attribute the vertex shader requires.

### The Position Buffer

First we'll define the vertices. As we're dealing with clipspace, the range for these vertices will be between -1 and 1, where the vertex `(-1, -1)` represents the bottom left of our rectangle and `(1, 1)` the top right. And because WebGL breaks everything down into triangles under the hood, we'll supply it with two adjacent triangles to form this rectangle.

```js
// Create an array of 2d positions to form a rectangle (two triangles).
const positions = new Float32Array([
  -1, -1,
   1, -1,
  -1,  1,
  -1,  1,
   1, -1,
   1,  1
]);
```

We'll also set up a `componentsPerPosition` variable that defines how the positions array should be interpreted. We'll need this later.

```js
// The positions array should be read as [x1, y1, x2, y2 ... etc].
const componentsPerPosition = 2;
```

Next we'll use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer" target="_blank">`createBuffer()`</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer" target="_blank">`bindBuffer()`</a> methods to create the buffer to store the positions and bind it to the GPU's array buffer (`gl.ARRAY_BUFFER`) for vertex data.

```js
// Create a buffer where we can store our positions.
const positionBuffer = gl.createBuffer();

// Bind the position buffer to the GPU buffer for vertex data.
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
```

Now that we've associated the positions buffer with the GPU's array buffer, it's time to tell the array buffer what data to store in it. This is where we insert the `positions` array we created earlier. The `gl.STATIC_DRAW` argument of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData" target="_blank">`bufferData()`</a> method really just tells the GPU that we intend to draw these vertices the one time.

```js
// Supply the positions to the GPU and specify the intended usage.
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
```

### Activating the Position Attribute

In order to actually use an attribute like `position` in our shader code, we have to explicitly define how to pull it out of the buffer first. This involves several steps, the first of which is to create a vertex array object using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createVertexArray" target="_blank">`createVertexArray()`</a> method. This will be used to point to the vertex array data, to which we bind it using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindVertexArray" target="_blank">`bindVertexArray()`</a> method.

```js
// Create and bind a vertex array object to point to the vertex data.
const vertexArrayObj = gl.createVertexArray();
gl.bindVertexArray(vertexArrayObj);
```

The next step is to look up the position attribute location (i.e. its index) using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation" target="_blank">`getAttribLocation()`</a> method. We then 'switch on' or activate the functionality that enables data retrieval for this attribute, using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray" target="_blank">`enableVertexAttribArray()`</a> method.

```js
// Look up the position attribute index supplied to the vertex shader.
const positionAttributeIndex = gl.getAttribLocation(program, 'position');
  
// Enable data retrieval from the buffer for this attribute.
gl.enableVertexAttribArray(positionAttributeIndex);
```

Now we are ready for the final step of this section, which defines how to pull the position data out of the buffer. For this we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer" target="_blank">`vertexAttribPointer()`</a> method which has six parameters:

- `index` which specifies the index of the vertex attribute to be modified (which in our case is the `positionAttributeIndex`).
- `size` which specifies the number of components per vertex attribute (this is where we insert the `componentsPerPosition` variable we defined earlier).
- `type` which specifies the data type of each component of the array (`gl.FLOAT` in our case).
- `normalized` which specifies whether integer values should be normalized when being cast to a float. Has no effect in our case so we'll set it to `false`.
- The last two parameters `stride` and `offset` we'll leave at zero, as they're only relevant when handling multiple attributes in the same array.

```js
// Now specify how to pull the position data out of the buffer.
gl.vertexAttribPointer(
  positionAttributeIndex,
  componentsPerPosition,
  gl.FLOAT,
  false,
  0,
  0
);
```

## Keeping the Canvas Sharp

In our CSS above, the `#canvas` is displayed to fill the user's viewport. However that isn't enough to ensure the sharpness of the rendered graphics within the canvas itself. We need to take into account the user's device pixel ratio, and use that to 'scale up' the internal resolution (or drawing buffer) of the canvas element.

Some devices will have a very high device pixel ratio, so we'll want to set an upper limit on that to avoid unnecessary performance hits. A device pixel ratio of `2.5` is a good sweet spot between performance and perceptual sharpness, so we'll set it at that. We'll then set width and height variables that contain the product of multiplying the client width and height (i.e. the CSS display size in pixels) by the device pixel ratio. We'll use variables later within the render loop.

```js
// Get the device pixel ratio but set an upper limit on it.
const dpr = Math.min(window.devicePixelRatio, 2.5);

// Get the size the canvas should be displayed at, in integers.
const width = parseInt(canvas.clientWidth * dpr);
const height = parseInt(canvas.clientHeight * dpr);
```

## Preparing the Uniforms

Uniforms, i.e. values that remain unchanged for all vertices of a single draw call, are easier to prepare than attributes. The two values we want to pass in to our fragment shader are time and resolution, two very commonly used uniforms. We first look up their index using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniformLocation" target="_blank">`getUniformLocation()`</a> method.

```js
// Prepare resolution and time as uniforms and look up their index.
const resolutionUniformIndex = gl.getUniformLocation(program, 'resolution');

const timeUniformIndex = gl.getUniformLocation(program, 'time');
```

The setting of their values we'll leave until we're inside the render loop.

## The Render Loop

Not all shaders will require a render loop, but we want things to change over time. For this we can use the window's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" target="_blank">`requestAnimationFrame()`</a> method recursively inside a custom `render()` function. The `requestAnimationFrame()` method automatically passes the elapsed time in milliseconds to any callback function it receives, so we can define `time` as a parameter for our `render()` function.

```js
// Render this for each frame refresh.
const render = (time) => {
  // The remaining code will go here.
}

requestAnimationFrame(render);
```

Inside the `render()` function, we can now set the `time` uniform. We set uniforms by using a method named according to the uniform's type. Our `time` uniform will be a single float value, so that means we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform" target="_blank">`uniform1f()`</a> method (the `1f` suffix indicates the single float value). We pass in `timeUniformIndex` as the first argument, and the second is the value itself. We want the `time` in seconds rather than milliseconds, so we multiply it by `0.001`.

```js
// Set the time uniform, converting from milliseconds to seconds.
gl.uniform1f(timeUniformIndex, time * 0.001);
```

Next we can set the `resolution` uniform. This will take the `resolutionUniformIndex` as the first argument, and `resolution` itself will be comprised of two floating point values passed in as the second and third arguments: `canvas.width` and `canvas.height`. It will therefore use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform" target="_blank">`uniform2f()`</a> method.

Before we call this method however we need to ensure the `canvas.width` and `canvas.height` line up with the `width` and `height` variables we defined earlier. We also need to ensure the WebGL `viewport` matches these dimensions. The following code takes care of all this.

```js
// Resize canvas if CSS display size doesn't match drawing buffer.
if (width !== canvas.width || height !== canvas.height) {
  canvas.width = width;
  canvas.height = height;
}

// Ensure the viewport matches the canvas size.
gl.viewport(0, 0, canvas.width, canvas.height);

// Set the resolution uniform.
gl.uniform2f(resolutionUniformIndex, canvas.width, canvas.height);
```

We're nearly done now: three more steps to go. The first is to clear the canvas (i.e. the contents of the previous frame) so that the rendering isn't cumulative. The next (and perhaps most significant) step is to make the draw call itself using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays" target="_blank">`drawArrays()`</a> method. This takes three arguments: 

- `mode` which specifies the how to draw the vertices. This we'll set to `gl.TRIANGLES`, as we've set up our vertices to form two adjacent triangles.
- `first` which specifies which vertex we should start at. We'll leave this at `0`.
- `count` which specifies the number of vertices to render. This can be calculated by dividing the `positions` array by the `componentsPerPosition` (it works out at `6`).

And as the final step, we recursively call `render` within the `requestAnimationFrame()` method.

```js
// Clear the last frame.
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Draw the quad vertices to the buffer.
gl.drawArrays(gl.TRIANGLES, 0, positions.length / componentsPerPosition);

// Recursively call the render function.
requestAnimationFrame(render);
```

And here's the result:

<iframe height="450" style="width: 100%;" scrolling="no" title="GLSL Starter" src="https://codepen.io/editor/davidmatthew/embed/preview/01a0a6a3-c0d9-7492-903e-10bc66d3a819?default-tab=result&editable=true&theme-id=-2" frameborder="no" loading="lazy" allowtransparency="true">
  See the Pen <a href="https://codepen.io/editor/davidmatthew/pen/01a0a6a3-c0d9-7492-903e-10bc66d3a819">
  GLSL Starter</a> by David Matthew (<a href="https://codepen.io/davidmatthew">@davidmatthew</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Wrapping Up

This was a long one! And a lot of code just to get an animated gradient up on the screen. But this boilerplate can empower you to do a lot more: explore the world of GLSL, unencumbered by dependencies. You can <a href="https://github.com/davidmatthew-ie/glsl-starter" target="_blank">inspect the full code on github</a>, and if you find it helpful please drop me a message and let me know!