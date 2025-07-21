---
title: "Should I Use p5js or Plain JavaScript (HTML Canvas)?"
permalink: /p5js-vs-html-canvas/
date: 2021-08-12
tags: ["Canvas", "Generative Art", "JavaScript"]
---

![p5js vs HTML Canvas](images/p5-v-canvas.svg "The p5js pink")

This is a question I gave quite a lot of thought before embarking on [my Canvas API tutorials](/tag/canvas/), so I'll try to offer as comprehensive (but concise) a comparison as I can.

- [What is p5js?](#l1)
- [Pros of p5js](#l2)
- [Cons of p5js](#l3)
- [Pros of HTML Canvas](#l4)
- [Cons of HTML Canvas](#l5)
- [Alternatives](#l6)
- [Summary](#l7)

## What is p5js?

First of all, what is [p5js](https://p5js.org/)? Simply put, it is a JavaScript library for creative coding. Creative coding can sometimes go by other names, like code art, generative art, generative design, or algorithmic art. p5js is based on the original Java library [Processing](https://processing.org/), created by Ben Fry and Casey Reas back in 2001. In 2013, Lauren McCarthy ported it to the web, and since then its community and contributors have grown considerably.

From the get-go, both Processing and p5js (both part of the umbrella [Processing Foundation](https://processingfoundation.org/)) were designed to be approachable to artists, designers, educators and anyone else at the start of their coding journey.

## Pros of p5js

- **Beginner-friendly:** It definitely achieved its goal of being approachable to the uninitiated.
- **Large community:** Several forums exist where you can get help and advice, and it has an [active github repository](https://github.com/processing/p5.js) with lots of contributors.
- **Resources:** Lots of high-quality books and tutorials are readily available. In particular, check out Dan Shiffman's [infectiously enthusiastic video tutorials](https://www.youtube.com/watch?v=yPWkPOfnGsw), Lauren McCarthy's [Getting Started with P5.Js](https://www.goodreads.com/book/show/26451798-getting-started-with-p5-js) or Tariq Rashid's [Make Your Own Algorithmic Art](https://www.goodreads.com/book/show/39570016-make-your-own-algorithmic-art).
- **Documentation:** the [p5js website](http://p5js.org) has a very comprehensive and well laid-out reference with lots of examples.
- **Convenience:** It's easy to get up and running quickly; sites like [openprocessing.org](http://openprocessing.org) and the main p5js website have editors with built-in support and syntax highlighting.
- **Hides complexity:** Simplifies many drawing operations that would otherwise be trickier to master.

## Cons of p5js

- **Hides complexity!** Sometimes simplifying isn't necessary, and knowing the functions that p5js relies on under the hood gives you more control.
- **Size:** By any standards, it's a large library (minified and without the add-ons, the core clocks in at nearly 800kb).
- **Speed:** Its size makes it significantly slower than vanilla JavaScript, particularly for large sketches.
- **Some bad practices:** the use of global variables, for instance, isn't a good programming practice.
- **Compatibility:** due to said global variables, it doesn't play well with other libraries.
- **Prototyping:** While it might be good for prototyping, it would be an inefficient for inclusion in a web application.

Now, let's get to pure (or vanilla) JavaScript. More specifically, let's outline the pros and cons of the HTML Canvas API, which is the underlying set of native JavaScript drawing functions that p5js actually uses.

## Pros of HTML Canvas

- **Speed:** JavaScript is fast. And while p5js might seem fast enough (for simple sketches you'd be hard-pressed to tell the difference), at scale, that can change.
- **Deeper understanding:** it's often better (if not necessarily more convenient) to know how things work under the hood if you're really interested in a technology.
- **Power:** I don't mean this in the 'mmmwhahahaha' sense of the word (well, maybe I do a bit) but once you know the Canvas API, you have a powerful and efficient set of tools at your disposal for any web project.
- **Future-proof:** although p5js doesn't show signs of going away any time soon, libraries do come and go. The HTML Canvas however is a [W3C](https://www.w3.org/) web standard, which is about as future-proof as things can get in the fast-paced world of the web.
- **Documentation:** being a web standard, Canvas doesn't come up short in the documentation department, the [Mozilla site](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) offering the most comprehensive resources.
- **Satisfaction:** this might be a more subjective reason, but you can't deny that it is often more satisfying to program something without the use of libraries.

## Cons of HTML Canvas

- **Difficulty:** its steeper learning curve means it's not quite as beginner-friendly.
- **Verbosity:** Sometimes it can be a little long-winded compared to p5js for the same visual result (but the same could be said versus any library).
- **Less focused resources:** while there are certainly lots of videos, books and tutorials, there's less of a roadmap if your interest is creative coding specifically.

## Alternatives

What if you find yourself in an uncertain middle ground, where p5js seems too bulky and slow for your purposes, but diving into pure JavaScript seems a little intimidating? Well, there are some alternatives.

- [Pixi.js](https://www.pixijs.com/): a small and fast library with a very efficient rendering engine.
- [Easel.js](https://www.createjs.com/easeljs): part of the CreateJS suite, it was designed to make it easier to work with the HTML Canvas, while also keeping things performant.

## Summary

In the end, whether you opt for p5js or plain JavaScript will depend on your purposes. While p5js is certainly beginner-friendly, seasoned coders also appreciate its convenience and expressive power. If you stray too far from self-contained creative coding environments however, or want to port your generative art skills to a web project or online game, you're better off getting to grips with the HTML Canvas API.
