---
title: "A MusicXML Tutorial, Part 1 - Musical Markup for the Web"
permalink: /a-musicxml-tutorial-part-1-musical-markup-for-the-web/
date: 2025-02-11
updated: 2025-04-09
tags: ['x', 'Music', 'MusicXML']
---

{% from 'macros/codepen.njk' import codepen %}

In this blog series, we're exploring the musical markup language that is MusicXML and how to get started using it on the web.

Intended audience: web developers or other coders with an interest in music and/or developing musical applications. [Impatient to see the final result? Click here](#summary).

## Why MusicXML?

MusicXML is the de-facto format for the interchange of digital sheet music online and between music applications. It has been maturing for more than two decades, so is a true stalwart where open standards are concerned. It is used by market leaders in the music notation space such as Sibelius, Finale, Dorico, Notion, Flat, MuseScore and more ([see the full list here](https://www.musicxml.com/software/)), and most professional DAW's (digital audio workstations) like Cubase and Logic can work with MusicXML out of the box.

All this to say: if you are developing applications that have a musical component, knowing MusicXML is a must. So let's get started.

## What We'll Be Creating

While we won't settle for a simple "Middle C and we're done" demonstration of MusicXML (the equivalent of a "Hello World" program in most other languages), neither will we aim for a musical masterpiece. Instead, we'll be creating the below arpeggiated sequence of notes that act as a cadence for the chord that follows.

![Final Output](/media/2025/final-output.svg)

## Setting up the Renderer

Before we write any markup, we'll need a way to render the results as musical notation. Unlike HTML, MusicXML isn't natively understood by browsers, so to remedy this we'll use the [OpenSheetMusicDisplay](https://opensheetmusicdisplay.org/) (OSMD) JavaScript library. This takes MusicXML as input and uses the popular JavaScript engraver [Vexflow](https://vexflow.com/) to display it.

We'll start off with some HTML boilerplate, which will contain a couple of empty `<div>` elements: one for the rendered notation (to which we'll assign an `id` of `osmd`), and the other for our MusicXML (to which we'll assign an `id` of `score`). We'll style the first one so that the notation is centered on the page and doesn't exceed `440px`, and the second one we'll hide completely, as it will simply be a container for our MusicXML markup.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MusicXML Tutorial Part 1</title>
</head>
<body>
  <div id="osmd" style="margin: 0 auto; max-width: 440px"></div>
  <div id="score" style="display: none"></div>
</body>
</html>
```

Next we'll insert a couple of scripts just above the closing `<body>` tag: the first will pull in the latest build of OSMD, and the second will pull in our local `index.js` file.

```html
<script src="https://www.unpkg.com/opensheetmusicdisplay@latest/build/opensheetmusicdisplay.min.js"></script>
<script src="index.js"></script>
```

The `index.js` file will contain just three lines. The first creates an `OpenSheetMusicDisplay` instance, passing it the id of the element where we want the notation to render (the `<div>` we created earlier with an `id` of `osmd`). We then grab the element which will contain our MusicXML markup (the `<div>` with an `id` of `score`), before loading it into the `OpenSheetMusicDisplay` instance.

```js
const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd");
const score = document.getElementById('score');
osmd.load(score).then(() => osmd.render());
```

Now that the renderer is ready, it's time to move on to the markup.

## Partwise vs Timewise

We'll start with the XML and doctype declarations. Here however we're already faced with a decision; namely, whether to represent our score in a timewise fashion (as parts within measures) or in a partwise fashion (as measures within parts).

What practical difference does this make? Well, if we go with the first approach, `<score-timewise>` becomes the root element and its individual measures contain parts (i.e. instruments). If we go with the second approach, `<score-partwise>` becomes the root element and its individual parts contain measures.

There's no 'correct' choice here; these are simply two different ways to conceptualise a score's hierarchical structure, and the same piece of music could be represented in either partwise or timewise form. We'll stick with the partwise representation, simply because it's the most widespread and well-supported of the two.

Inside our `<div>` with the `id` of `score`, include the below XML declaration and the MusicXML document type definition (DTD):

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
```

It's worth noting here that the DTD has actually been deprecated as of version 4 of MusicXML, so if backwards compatibility isn't a major concern you can omit it and just set the XML declaration, leaving out the standalone attribute as it has no meaning without a DTD:

```xml
<?xml version="1.0"?>
```

Next we have the `<score-partwise>` root element, where all our subsequent elements will be nested. The version attribute is optional, but it's good practice to include it.

```xml
<score-partwise version="4.0"></score-partwise>
```

## Parts and Measures

To give our renderer something to work with, we'll set up the most minimal example possible: an empty bar. Not very exciting (no disrespect to John Cage fans), but it will allow us to get our groundwork in place. Our first mandatory element is the part list, which must contain score parts with valid id attributes. Because our piece will be for a single instrument we'll only need to list the one score part, and we'll set its `id` to `p1`.

```xml
<part-list>
  <score-part id="p1"></score-part>
</part-list>
```

Next, we'll set up the part we referenced above, making sure to use the same `id` (unlike HTML, a duplicate id attribute isn't a conflict in MusicXML). We'll also include an empty measure, setting its `number` attribute to `1`.

```xml
<part id="p1">
  <measure number="1"></measure>
</part>
```

You should now see something like the below (feel free to inspect/edit the code if you want to troubleshoot or just play around):

{{ codepen('MusicXML Tutorial Part 1.1', 'zYeQaaq', 375, 'html') }}

## Time and Key Signatures

Our empty bar was automatically rendered with a meter of 4/4 and a key signature of C major/A minor (i.e. with no sharps or flats). What we want however is a meter of 3/4 in the key of E minor (with one sharp). To go about changing this, we use the `<attributes>` element, which is a direct descendant (or child) of the `<measure>` element (and not to be confused with an attribute _of_ an element).

We'll update the key signature first. MusicXML identifies key signatures via the `<key>` and `<fifths>` elements as follows:

```xml
<key>
  <fifths>[NUMBER]</fifths>
</key>
```

The number in the `<fifths>` element defines the amount of sharps or flats the signature contains; it is positive for sharps (as they're raised a semitone) and negative for flats (as they're lowered a semitone). This number also corresponds with the key's placement within the Circle of Fifths (hence the element name).

E minor contains one sharp, but so does G major, so we can explicitly define the `<mode>` to make our intended key signature clear. The mode isn't mandatory however; only the `<fifths>` element is required.

```xml
<key>
  <fifths>1</fifths>
  <mode>minor</mode>
</key>
```

We set the time signature by declaring within the `<attributes>` element a `<time>` element, where we define the number of `<beats>` and the `<beat-type>`. As we want a 3/4 meter, i.e. three beats of the quarter note variety, we'd write it as follows:

```xml
<time>
  <beats>3</beats>
  <beat-type>4</beat-type>
</time>
```

We're not quite done yet though; we also need to define the number of `<divisions>` per quarter note (or crochet). You can think of this as the score's temporal _resolution_, i.e. how finely do we chop up the duration? The quarter note is used as the reference note type but the divisions effect all notes. For example, if we divided a quarter note into four divisions, a half note would span eight divisions, and an eighth note would span two. For our example four divisions will do, but in practice it's best to allow for a sufficiently high resolution such that sixty-fourth notes, dotted notes etc can be accommodated.

At this point, our `<measure>` markup looks like this:

```xml
<measure number="1">
  <attributes>
    <key>
      <fifths>1</fifths>
    </key>
    <divisions>4</divisions>
    <time>
      <beats>3</beats>
      <beat-type>4</beat-type>
    </time>
  </attributes>
</measure>
```

{{ codepen('MusicXML Tutorial Part 1.2', 'gbYJybg', 375, 'html') }}

## Notes and Pitches

Next up, notes. Notes are defined via the `<note>` element, on the same level as the `<attributes>` element. A note is typically comprised of a `<duration>`, a `<type>`, and either a `<pitch>` or a `<rest>` element. Our first note is of `<type>` quarter, and as we previously settled on four divisions per quarter, this translates to a `<duration>` of `4`.

The pitch is a B in the third octave, so within the `<pitch>` element we use a `<step>` element (standing for a step of the diatonic scale) and an `<octave>` element with these respective values. Our note now looks like this:

```xml
<note>
  <pitch>
    <step>B</step>
    <octave>3</octave>
  </pitch>
  <duration>4</duration>
  <type>quarter</type>
</note>
```

Our next note is an accidental: the raised 7th of the harmomic minor scale, in this case a sharpened D. We sharpen or flatten notes using the `<alter>` element within the `<pitch>` element, and as with key signatures, we use negative numbers for flats and positive numbers for sharps. As we're sharpening by just the one semitone we use `1` to define the alteration.

```xml
<note>
  <pitch>
    <step>D</step>
    <octave>4</octave>
    <alter>1</alter>
  </pitch>
  <duration>4</duration>
  <type>quarter</type>
</note>
```

The following note is an F sharp (as per the key signature), but it isn't an accidental so it doesn't show as sharpened in the actual notation. This is as expected. Under the hood however MusicXML still considers it an alteration, as it uses absolute pitch steps that (in simplified terms) correspond to the white keys on a piano. As the F sharp is a black note, it it is deemed chromatically altered.

(As an aside, there is an `<accidental>` element, but delving in to the difference between this and the `<alter>` element at this stage is beyond the scope of this introduction: suffice to say, in MusicXML there are elements that have more to do with how a piece appears than how it sounds.)

To get back to our F sharp, its markup is nearly identical to the note before it; we simply swap out the D and we're done with measure one.

```xml
<note>
  <pitch>
    <step>F</step>
    <octave>4</octave>
    <alter>1</alter>
  </pitch>
  <duration>4</duration>
  <type>quarter</type>
</note>
```

{{ codepen('MusicXML Tutorial Part 1.3', 'mydbBWw', 375, 'html') }}

## Chords and Dotted Notes

In measure two we also have three notes, but they're played together as a chord (or a triad). They're also dotted, so we'll have to work out the new duration. We'll start with the chord's base note, a B, which is the first element in the new measure. The key and time signatures set up in the first measure carry over, so because we're not updating these no attributes section is required.

To designate a note as dotted, you simply include a self-closing `<dot />` element within the `<note>` element (after the other elements - [order can matter](https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/note/)). The note type is a half note (or minim), which is double the duration of a quarter note. This would translate to a duration of `8`, but because the note is dotted and MusicXML doesn't perform any automatic calculations for us, we need to account for the dotted duration ourselves. In this case it's `12` (`8 * 1.5`).

```xml
<measure number="2">
  <note>
    <pitch>
      <step>B</step>
      <octave>3</octave>
    </pitch>
    <duration>12</duration>
    <type>half</type>
    <dot />
  </note>
</measure>
```

Chords are identified using the `<chord />` element, but the first note in a chord doesn't need to be defined as such; it's only the subsequent notes that need this treatment. This is because the `<chord />` element essentially instructs the MusicXML parser to 'pause', i.e. layer the note on top of the last one rather than move forward in time. Once you understand this, creating chords is very straightforward. Here's how the rest of the triad looks:

```xml
<note>
  <pitch>
    <step>E</step>
    <octave>4</octave>
  </pitch>
  <duration>12</duration>
  <type>half</type>
  <chord />
</note>
<note>
  <pitch>
    <step>G</step>
    <octave>4</octave>
  </pitch>
  <duration>12</duration>
  <type>half</type>
  <chord />
</note>
```

Note that the `<dot />` element isn't required for the remaining notes in the chord.

## Finishing Touches

Now all we need to do is give the piece a proper title and hide the part label (which defaults to its `id`). To do this, we navigate back up to where we defined the `<part-list>` element, and update this section as follows:

```xml
<score-partwise version="4.0">
  <work>
    <work-title>A MusicXML Tutorial</work-title>
  </work>
  <part-list>
    <score-part id="p1">
      <part-name print-object="no"></part-name>
    </score-part>
  </part-list>
  <part id="p1">
  ...
</score-partwise>
```

Setting the `<work>` and `<work-title>` is self-explanatory, hiding the part label a little less so. We need to add a `<part-name>` element to the `<score-part>` first and then set its `print-object` attribute to `no`. This hides the `p1` part label, leaving us with the finished example we set out to create.

{{ codepen('MusicXML Tutorial Part 1.4', 'ZYEzgXv', 375, 'html') }}

## Summary

We covered quite a lot in this tutorial - the general structure of MusicXML, how to set up parts and measures, define divisions and duration, handle attributes like time and key signatures, and how to create single notes and chords. In the next tutorial we'll expand on the example piece and add in extra staves, voices and musical dynamics.
