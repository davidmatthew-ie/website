---
title: Life After Eleventy - My Experience Migrating to Astro
description: I recently rewrote the code for my website, moving from Eleventy to Astro. Here's what I learned.
date: 2026-07-12
slug: to-astro-from-11ty
tags: ['x', 'Astro', 'Eleventy', 'JavaScript']
---

My website was previously written using Eleventy (11ty), a flexible and framework-agnostic JavaScript static site generator. It was great, and I would happily wax lyrical about it to anybody who'd listen. But then things changed, and I moved to Astro.

Here's why, and what I learned along the way.

## What Motivated the Move

I'm a fan of the Font Awesome team and their quirky humour, but when they acquired Eleventy and rechristened it **Build Awesome**, my first reaction could be best summed up as:

> Emm, what the actual f\*ck?

I really liked the Eleventy name. What things are called matters to me, perhaps more than it should. But I could get over that, right?

There was more to it than just a name change unfortunately. I won't write an entire essay about the backstory and why, historically, these kinds acquisitions haven't gone well; if you're interested, Brennan K. Brown's article <a href="https://brennan.day/the-end-of-eleventy/" target="_blank">The End of Eleventy</a> does an excellent job addressing this.

What I will say is that this rebrand, and the accompanying future roadmap of Build Awesome, were decided behind closed doors with no community input whatsoever, despite Eleventy having been, up until that point at least, a decidedly community-driven endeavour. To me this signals a deeper departure from what existing users want, towards what prospective users *might* want. 

And what they *might* want, according to the folks at Font Awesome, is a CMS-powered static site generator. Very much a might, in my opinion. The only people I know who are likely to opt for a static site generator in the first place are developers, and their input wasn't sought. And had their input been sought, I sincerely doubt a CMS backend would have been the ask. This really erodes my confidence in the entire project.

Besides which, the pivot from community to corporate interests is rather blatant; Build Awesome now exists to turn a profit. And while that in itself isn't a crime, for me it was time to look elsewhere.


## Astro Advocate

Enter Astro. I had considered it previously, but left its lovely-looking landing page with the mistaken impression that, like Next, it forced the adoption of a frontend framework. I didn't look closely enough however, and said landing page has since been made much clearer. While `*.astro` files do boast a very React-like syntax, out of the box Astro works beautifully with web components and native JavaScript and/or TypeScript.

While there are numerous other reasons to advocate for Astro (and indeed I did successfully advocate for its use in the <a href="https://github.com/w3c-cg/musicxml/commit/5a3d27a6f2c374e3c5530e14751c1ebfa1c502af" target="_blank">full rewrite of the MusicXML website</a>) here I just want to focus on the specific challenges I encountered moving my site from Eleventy to Astro.

## Tooling and TypeScript-Focus

The first significant differences I noticed when diving into Astro was its comprehensive tooling and TypeScript-first focus. More opinionated than Eleventy? Sure. Slightly steeper learning curve? Likely. But much more is taken care of under the hood.

With Eleventy, I had set up Tailwind and Terser independently to handle styles and scripts, and optimised my images manually. With Astro, these are all bundled and optimised automagically.

The TypeScript-focus was timely for me too, as I was making my way through Stefan Baumgartner's book <a href="https://typescript-book.com/" target="_blank">TypeScript in 50 Lessons</a>, determined to finally learn the language.

## Templating Languages

Speaking of languages, when you adopt Astro, gone are the plethora of templating language options offered by Eleventy: Liquid, Nunjucks, EJS, Pug, Handlebars, Mustache, even Twig (with a bit of tweaking, <a href="/11twyg-eleventy-with-twig-and-yaml/">as I explain in this post</a>) and more.

Honestly though, this particular feature of Eleventy always felt a little unfocused and for me it had the effect of diluting the effectiveness of the documentation in many cases. Astro's JSX-like syntax felt more modern, cleaner and closer to the DOM and native JavaScript.

## Components and Nesting

In Astro, everything is a component. Even layouts. And you compose with components in much the same way you would in component-first frameworks like React. Layouts in Eleventy however are a little different - more like WordPress templates.

This was what I was used to, and calling files and nesting them was predictable and straightforward. With Astro I encountered some gotchas here, specifically the occasional stripping out of CSS classes on wrapper elements. One of the reasons this can happen is related to the fact that HTML attributes like `class` don't pass through to child components automatically.

The Astro docs (which are generally very good, if a little light on addressing newcomer issues) recommend that you accept a `class` prop in the child component and apply it to the root element. And as `class` is a reserved word in JavaScript, when destructuring from `Astro.props` you rename it like so:

```js
---
const { class: className } = Astro.props;
---

<div class={className}>
  <slot/>
</div>
```

See <a href="https://docs.astro.build/en/guides/styling/#passing-a-class-to-a-child-component" target="_blank">Passing a class to a child component</a> for more.

## The Data Cascade and Default Layouts

One thing absent from Astro is a data cascade of the sort Eleventy boasts, which is a very handy feature of Eleventy (yes, I'll continue to call it Eleventy) once you know how to take advantage of it. It works very similarly to CSS, meaning specificity always trumps generality.

One prominent way my site leaned on this functionality was by declaring a default layout. This was as simple as setting up a `posts.json` file in the `/posts` parent directory with the following content:

```json
{ "layout": "..layouts/post.njk" }
```

Once that's set, all posts within any sub-directories (e.g. `2025`, `2026`, or however you organise your posts) inherit that layout. No need to set the layout in the frontmatter of each post, which was the solution I was initially faced with when working with Astro. I did find a different solution, but it involved jumping into the deep end of Astro's waters when I only expected a waist-high wading in, if you will. In other words, it was more involved than I expected.

The solution I opted for was to create a file called `[...slug].astro` with a special rest parameter naming convention (the `[...]` part) that tells Astro that this file should handle dynamic routing of non-specified URL paths. Seeing as nearly all the pages on my site are blog posts, I used a `<Post>` layout component here to wrap the content. In case it helps developers who also encountered this difficulty, here's the code:

```js
---
import { getCollection, render } from 'astro:content';
import Post from '../layouts/Post.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post }
  }));
}

const { post } = Astro.props;
const { Content, headings } = await render(post);
---

<Post frontmatter={ post.data } headings={ headings }>
  <Content />
</Post>
```

## Where'd My Excerpt Go?

Another curious omission from Astro's (albeit impressive) feature set is post excerpts. These come as standard with Eleventy's frontmatter and are straightforward to customise and override when needed. With Astro, you need to either write the functionality yourself (as <a href="https://chenhuijing.com/blog/creating-excerpts-in-astro/" target="_blank">Chen Hui Jing shows you how to do in this post</a>) or use a <a href="https://github.com/igorskyflyer/npm-astro-post-excerpt" target="_blank">community-developed integration</a>.

I actually did neither. I had a look over my old posts and for the vast majority I had chosen to override the default excerpt with my own short description. So I decided to just make `description` a mandatory frontmatter entry for my post collection going forward, renouncing the need for excerpts altogether.

## Macros and Markdown

One thing I liked about Eleventy was the fact that vanilla markdown could be mixed with macros (the 'functions' of the templating language world) without any extra work. Macros served as my Eleventy components, and one I used frequently was a `codepen` macro, which (unsurprisingly) rendered an iframe containing a CodePen sketch.

This wasn't a complicated component by any means, but it was handy. The following would render a CodePen iframe with a height of `400px`, with the included title and id.

```js
{{ codepen('MusicXML Tutorial 4.1', 'ogbdJLg', 400) }}
```

I had hoped that I could replicate this in Astro using something like the following:

```js
<Codepen title="MusicXML Tutorial 4.1" id="ogbdJLg" height="400" />
```

And after wiring up a component in Astro to work just like this, I tried it and... no dice. In plain markdown it just doesn't work. However, it *can* work like this, but it would mean moving to MDX.

No problem. I moved to MDX, and all was fine, initially. Until I rewrote my page navigation component (the thing over there on the right that shows the page headings) and realised that moving to MDX meant losing the automatically generated page headings included in Astro's `props`.

I weighed up the pros and cons and decided to revert to plain markdown; the headings were more important to me than replicating the macro functionality. This resulted in less concise CodePen embeds but felt more maintainable overall.

## Wrapping Up

Now that I've moved to Astro, do I miss Eleventy? 

Not exactly... I do miss what Eleventy once was, but I don't miss working with it as compared to Astro.

I do value the role it played for me though; it rescued me from messy world of  WordPress and was my gateway drug to the more scenic lands of static site generators.

I hope I'm wrong about the fate of Eleventy under the guise of Build Awesome, but I don't want to wait around to find out. Instead, I'll wish the guys at Font Awesome luck from afar aboard Astro, safely out of their orbit.

