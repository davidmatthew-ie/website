---
title: "A MusicXML Tutorial, Part 4 - Microtonal and Non-Western Notation"
permalink: /a-musicxml-tutorial-part-4-non-western-notation/
date: 2025-11-11
tags: ['x', 'Music', 'MusicXML']
---

{% from 'macros/codepen.njk' import codepen %}

In part four of [this series](/tag/musicxml/) we'll explore some of the ways MusicXML can accommodate non-Western notation. We'll cover key signatures, microtonal tunings of individual pitches, quarter-tone accidentals, and a non-English lyric language.

Intended audience: web developers or other coders with an interest in music and/or developing musical applications.

## The Bias Baked In

When MusicXML was originally developed in 2001, it wasn't envisioned as a format to represent all manner of world musics, from modern to ancient and from east to west. Rather, it was intended as an interchange format for common Western music notation, specifically from the 17th century onwards. This in itself is no small feat, and it has been remarkably successful in this respect. But it's important to remember that this Western bias is very much baked in from its beginnings.

Insofar as MusicXML *can* cater for music beyond the Western classical music canon, we'll try to cover the basics here, and we'll do so by creating a single measure loosely based on a transcript of an old Irish vocal lament (or <a href="http://www.keeningwake.com/keening-tradition/" target="_blank">keening</a>).

## Setting up the Score

We'll start off by resetting our score to a blank staff consisting of a single empty measure.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="4.0">
  <part-list>
    <score-part id="p1">
      <part-name print-object="no"></part-name>
    </score-part>
  </part-list>
  <part id="p1">
    <measure number="1">
    </measure>
  </part>
</score-partwise>
```

As you'll recall if you've been following the other tutorials, we're using [OpenSheetMusicDisplay](https://opensheetmusicdisplay.org/) (OSMD) to render the notation. By default, OSMD includes a time signature of 4/4 if we don't include one, but on this occasion we don't want a time signature to display as the piece this measure is based on doesn't have a strict meter.

OSMD allows us to modify some of its engraving rules via its `rules` class properties. Setting `RenderTimeSignatures` to `false` will ensure no time signature displays. Update the JavaScript as follows:

```diff-javascript
  const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd");
+ osmd.rules.RenderTimeSignatures = false;
  osmd.load('score.musicxml').then(() => osmd.render());
```

This should leave us with our intended starting point.

{{ codepen('MusicXML Tutorial 4.1', 'ogbdJLg', 400) }}

## Unconventional Keys

A non-standard key signature is basically one that doesn't fit neatly into the circle of fifths, either because it contains a pattern that doesn't exist (e.g. a single flat that isn't a B) or because it contains entirely different accidentals beyond simple sharps and flats (e.g. quarter tones).

<figure>
<a href="https://commons.wikimedia.org/wiki/File:Circle_of_fifths_deluxe_4.svg" target="_blank" ><img alt="Circle of fifths" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Circle_of_fifths_deluxe_4.svg"></a>
<figcaption>The Circle of Fifths (courtesy of Wikimedia Commons)</figcaption>
</figure>


And while there may be <a href="https://music.stackexchange.com/a/126892" target="_blank">good reasons *not* to use non-standard key signatures</a> when given the choice (and to stick with notating accidentals instead), we'll show how it can be done in MusicXML.

Let's go for a key signature that contains two quarter tones; the first, an A quarter tone flat, and the second a C three-quarter tone sharp. It's not a key signature you'll likely encounter in the wild, but it's useful to know how to represent these kind of microtonal accidentals if needed.

### Key Step, Alter and Accidental

To represent each accidental in a key signature like this, three elements are required (nested within the attribute section's `<key>` element, as normal):

* `<key-step>`: this indicates the pitch step to be altered (A and C in our case).

* `<key-alter>`: this is a decimal indicating the amount to raise our lower the pitch by semitone; negative for flats, positive for sharps. A standard sharp takes a value of 1, so a half sharp would be 0.5, and three-quarters sharp would be 1.5. The same applies to flats in the opposite direction.

* `<key-accidental>`: this is the actual symbol to use as the accidental. MusicXML natively supports <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/accidental-value/" target="_blank">40 different accidental values</a>, but as world musics vary greatly a wider selection of <a href="https://w3c.github.io/smufl/latest/index.html" target="_blank">SMuFL (Standard Music Font Layout) glyphs</a> are available using the `@smufl` attribute with an accidental of type `other` if required.

Here's how our non-standard key signature would look:

```xml
<attributes>
  <key>
    <key-step>A</key-step>
    <key-alter>-0.5</key-alter>
    <key-accidental>quarter-flat</key-accidental>
    <key-step>C</key-step>
    <key-alter>1.5</key-alter>
    <key-accidental>three-quarters-sharp</key-accidental>
  </key>
</attributes>
```

And here it is rendered:

![Non-Standard Key Signature](/media/2025/non-standard-key-signature.svg)

However, there's an important caveat here - OSMD did not render this! I had to call on <a href="https://musescore.org" target="_blank">MuseScore</a> for this. OSMD uses the <a href="https://vexflow.com/" target="_blank">Vexflow engraving engine</a> under the hood, which does not support non-traditional (i.e. non-Western) key signatures. And <a href="https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1360" target="_blank">there is currently no plan to support such key signatures</a>, from the OSMD side at least. 

This brings us to an important point about MusicXML: **in terms of the range of musics it is able to express, it is often well ahead of the actual software and engravers that claim to support the standard**. It is a huge spec so it isn't necessarily a criticism of third party developers that they don't support every single feature, but it does further exacerbate this Western bias when the tools themselves trail behind.

## Back to Accidentals

So for our example piece, we'll revert to accidentals (which was my plan all along, but I do hope the detour was educational!). We'll start the piece on an F, and make it a quarter-flat.

Here's how the measure begins, including a short attributes section where we designate four divisions per quarter beat. Recall that the way we create the accidental on a per-note basis is different from how we'd set it via the key signature: the step and the alter go together, but with an individual note the accidental stands on its own, i.e. it isn't a sibling of the alter and step elements.

```xml
<measure number="1">
  <attributes>
    <divisions>4</divisions>
  </attributes>
  <note>
    <pitch>
      <step>F</step>
      <alter>-0.5</alter>
      <octave>4</octave>
    </pitch>
    <accidental>quarter-flat</accidental>
    <duration>2</duration>
    <type>eighth</type>
  </note>
  <note>
    <pitch>
      <step>G</step>
      <octave>4</octave>
    </pitch>
    <duration>1</duration>
    <type>quarter</type>
  </note>
</measure>
```

### Fine-Tuning

In the above we've made the first note a quarter flat, altering it by `-0.5` and setting the accidental accordingly. But it's worth mentioning here that the `<alter>` element can support values as finely-tuned as a hundredth of a semitone (known as a 'cent'). For example, the following alteration would mean lowering the note by 45 hundredths of a semitone:

```xml
<alter>-0.45</alter>
```


Dividing it by half (`0.5`) to accommodate microtones assumes 24 tones spread equidistantly within a given octave (otherwise known as 'equal temperament'). Not all scales are going to divide neatly in this manner however. The Turkish makam is a good example, where the same note may be tuned slightly differently depending on whether the preceding note is ascending or descending.

Getting back to our piece, let's pad out the measure with some supporting notes and a rest.

```xml
<note>
  <pitch>
    <step>F</step>
    <alter>1</alter>
    <octave>4</octave>
  </pitch>
  <accidental>sharp</accidental>
  <duration>2</duration>
  <type>eighth</type>
</note>
<note>
  <pitch>
    <step>G</step>
    <octave>4</octave>
  </pitch>
  <duration>2</duration>
  <type>eighth</type>
  <beam number="1">begin</beam>
</note>
<note>
  <pitch>
    <step>A</step>
    <octave>4</octave>
  </pitch>
  <duration>2</duration>
  <type>eighth</type>
  <beam number="1">end</beam>
</note>
<note>
  <rest/>
  <duration>2</duration>
  <type>quarter</type>
</note>
```

At this point, we should have something that looks like this:

{{ codepen('MusicXML Tutorial 4.1', 'jEWeVwx', 400) }}

## Non-English Languages

This piece isn't in English, but in Irish (or 'as Gaeilge'), and we'd like to be able to set the language accordingly.

### Lyric Language

MusicXML allows us to define a `<lyric-language>` element within the `<defaults>`, which is a global section preceding any individual parts or measures.
The language is set via an `xml:lang` attribute, which takes a value of an <a href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes" target="_blank">ISO 639 Language Code</a>. The code in our case is `ga`, for **Gaeilge**. 

```diff-xml
 <?xml version="1.0" encoding="UTF-8"?>
 <score-partwise version="4.0">
+  <defaults>
+    <lyric-language xml:lang="ga" />
+  </defaults>
   <part-list>
     <score-part id="p1">
...
```

Now that the language is set let's give the piece a title of 'Ar Shiúl Uaim' (which translates to 'Gone from Me'). We'll insert this after the defaults element:

```diff-xml
   </defaults>
+  <work>
+    <work-title>Ar Shiúl Uaim</work-title>
+  </work>
   <part-list>
```

### Lyrics

We haven't covered lyrics yet in [this series](/tag/musicxml/), so now is an opportune time. We don't have much in the way of space in our little measure, but a single word should suffice to demonstrate the most salient points when it comes to representing lyrics.

The word we're going to add is 'Airiú', which is an exclamation of grief in Irish roughly akin to 'Alas' in English. It has two syllables, each of which will be placed on different notes. The `<lyric>` element, a child of the `<note>` element, facilitates this as follows:

* The `<lyric>` `<text>` element contains the actual written syllable/word.
* The `<lyric>` `<syllabic>` element defines whether this text is for a single-syllable word (`single`), a word's initial syllable (`begin`), its closing syllable (`end`) or somewhere in between (`middle`).

The first syllable ('Ai') we'll add beneath the opening F, using the `begin` syllabic type:

```diff-xml
 <note>
   <pitch>
     <step>F</step>
     <alter>-0.5</alter>
     <octave>4</octave>
   </pitch>
   <accidental>quarter-flat</accidental>
   <duration>2</duration>
   <type>eighth</type>
+  <lyric>
+    <text>Ai</text>
+    <syllabic>begin</syllabic>
+  </lyric>
 </note>
```

And the second syllable ('riú') we'll insert into the second last note of the measure. This time we'll use the `end` syllabic type, which will tie the two syllables together with a dash between the interceding notes.

```diff-xml
 <note>
   <pitch>
     <step>G</step>
     <octave>4</octave>
   </pitch>
   <duration>2</duration>
   <type>eighth</type>
   <beam number="1">begin</beam>
+  <lyric>
+    <text>riú</text>
+    <syllabic>end</syllabic>
+  </lyric>
 </note>
```

We should now have some lyrical content and a title, which concludes our modest microtonal example.

{{ codepen('MusicXML Tutorial 4.1', 'ZYQwJWz', 400) }}

## Missing Pieces

While writing this tutorial I got excellent guidance from an expert in this area, <a href="https://blog.karimratib.me/about/" target="_blank">Karim Ratib</a>, who is actively working on extending MusicXML to accommodate a wider range of music. Specifically, he is working on:

* Support for tuning that applies to all notes in a score (rather than having to re-tune each note separately).
* Support for multiple accidentals per note.

This would indeed make MusicXML more universal, and it's great to have people like Karim so involved in the community. I interviewed him for [the conclusion to this series](/musicxml-tips-thoughts-karim-ratib/) to get his insights on the future of MusicXML, and tips for developers working with the standard.

## Summary

In this final practical part of the series, we covered non-traditional key signatures, quarter-tone accidentals, microtonal pitch alterations and we also worked in some Irish language lyrics. I hope you've found this useful, and if you're interested check out [Karim's thoughts and tips for working with MusicXML](/musicxml-tips-thoughts-karim-ratib/).