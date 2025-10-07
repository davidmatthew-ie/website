---
title: "A MusicXML Tutorial, Part 3 - Rests, Ties, Tuplets, Beams and Barlines"
permalink: /a-musicxml-tutorial-part-3-rests-ties-tuplets-beams-barlines/
date: 2025-10-07
tags: ['x', 'Music', 'MusicXML'] 
---

{% from 'macros/codepen.njk' import codepen %}

In part three of [this series](/tag/musicxml/), we'll bring this first example score to completion and explore rests, ties, tuplets, beams and barlines in the process.

Intended audience: web developers or other coders with an interest in music and/or developing musical applications.

## A Quick Recap

Our score so far has featured a number of important MusicXML elements: parts, measures, notes (including pitches, steps, chords and voices), attributes (such as divisions, time and key signatures), backups, and different types of musical directions. This is how it appeared at the close of the last tutorial, and we can use this as our starting point:

{{ codepen('MusicXML Tutorial Part 2.4', 'azbLGZo', 520) }}

## Rests

Most of the time when you place a `<note>` element in your score, you'll be handling pitches and steps that correspond to specific tones. But sometimes you need a way to indicate the absence of tonality or indeed of any sound, i.e. silence. For this we use the `<rest>` element, and counter-intuitive as it may seem at first, this is nested within the `<note>` element.

We'll insert a `<rest>` into the base clef, between the `D#` and `F`. At the moment there isn't any 'room' for it, so to speak, as the existing pitches max out the available duration. So first we'll change the `D#` from a minim to a crotchet, which will free up the beat in between. We do this by changing its `<duration>` from 4 to 2, and its `<type>` from half to quarter.

```diff-xml
 <note>
   <pitch>
     <step>D</step>
     <alter>1</alter>
     <octave>3</octave>
   </pitch>
-  <duration>2</duration>
-  <type>quarter</type>
+  <duration>2</duration>
+  <type>quarter</type>
   <accidental>sharp</accidental>
   <staff>2</staff>
 </note>
```

Next up, the rest itself. This is a very simple element that is usually self-closing, but does allow some customisation via `<display-step>` and `<display-octave>` if needed. We don't need to alter these, so using `<rest/>` on its own will suffice.

A rest actually shares quite a lot in common with a pitch; it has an associated duration, type and staff. With this in mind it's easier to see why it's nested within the `<note>` element. In our case we need a crotchet rest on the base clef, so we would set its duration to 2, its type to quarter and its staff to 2. The below we would insert directly after the `D#` above.

```xml
<note>
  <rest/>
  <duration>2</duration>
  <type>quarter</type>
  <staff>2</staff>
</note>
```

## Ties

Ties are a way of extending the duration of a note by tying it to a succeeding note of the same pitch. To demonstrate how to do this in MusicXML, we'll turn an existing note - the `D#` in the first bar of the treble clef - into a tied note. To do this, we use the `<tied>` element, which can be of four types: 

* `start`
* `continue`
* `stop`
* `let-ring`

The last one is the least common type and indicates when an instrument should be undamped. The other three types are more self-explanatory and indicate where a tie begins, continues and ends.

The type is set as an attribute of the `<tied>` element, and the `<tied>` element needs to be nested within a `<notations>` element, like so:

```xml
<notations>
  <tied type="[start/continue/stop/let-ring]"/>
</notations>
```

We're beginning our tie on the aforementioned `D#`, so it takes a type of `start`. Updating it would therefore look like this:

```diff-xml
 <note>
   <pitch>
     <step>D</step>
     <alter>1</alter>
     <octave>4</octave>
   </pitch>
   <duration>2</duration>
   <type>quarter</type>
   <accidental>sharp</accidental>
   <voice>2</voice>
   <staff>1</staff>
+  <notations>
+    <tied type="start"/>
+  </notations>
 </note>
```

No tie will appear in the score at this point, as a `start` tie needs a corresponding `stop` tie to connect to on a note of the same pitch. The note immediately following the `D#` is an `F` however, so we need to fix that first. The most straightforward way to do this is to simply copy and paste the `D#` and overwrite the `F`. We then only have to update the tied type as follows:

```diff-xml
   <notations>
-    <tied type="start"/>
+    <tied type="stop"/>
   </notations>
```

With the tie and rest both added, here's how our updated score should look:

{{ codepen('MusicXML Tutorial 3.1', 'azvMJda', 550) }}

### Tied vs Tie

MusicXML can represent both how a piece of music should be notated, and also how it should sound. We've mainly been focused on the former, but we have encountered some of the latter. The `<divisions>` element for instance specifies how finely to divide up quarters notes, which isn't strictly necessary to determine how the music appears. It does however ensure more accurate playback if a MusicXML score is later converted to a MIDI file.

The `<tied>` element we've just covered concerns how a tie is notated, but there is also a `<tie>` element which represents its sonic realisation. This might seem excessive, but there are times when it is useful. For example, a notated tie spanning several notes would have several corresponding `<tied>` elements starting and stopping, but to accurate portray just the sound, only one `<tie>` element of type `start` and one of type `stop` would be required.

It's best practice in MusicXML to include as much known information about the musical piece as possible, so if we want to ensure our tie appears *and sounds* as we intend it to, it's recommended to include both elements.

```diff-xml
 <note>
   ...
+  <tie type="start"/>
   <notations>
     <tied type="start"/>
   </notations>
 </note>
 <note>
   ...
+  <tie type="stop"/>
   <notations>
     <tied type="stop"/>
   </notations>
 </note>
```

## Beams

Beams visually connect the stems of notes of less than a quarter (crotchet) beat's duration. They are a more complex part of the MusicXML spec, due to the sheer number of variations that are possible (think different durations, dotted notes, fanned beams etc), and the fact that beams can also span more than a single staff.

We'll keep things relatively simple and beam together a couple of quavers (eighth notes). We actually don't have any quavers in our score, so first we'll convert an existing note - the `A` in the treble clef at the end of the first measure - from a quarter note to an eighth note.

```diff-xml
 <note>
   <pitch>
     <step>A</step>
     <octave>4</octave>
   </pitch>
-  <duration>2</duration>
+  <duration>1</duration>
   <voice>1</voice>
-  <type>quarter</type>
+  <type>eighth</type>
   <staff>1</staff>
 </note>
```

This frees up an eighth note's duration at the end of the first measure, which we'll fill as follows (to be added directly after the `A` above): 

```xml
<note>
  <pitch>
    <step>F</step>
    <octave>4</octave>
    <alter>1</alter>
  </pitch>
  <duration>1</duration>
  <voice>1</voice>
  <type>eighth</type>
  <staff>1</staff>
</note>
```

Now we have two quavers at the end of the first measure, but they're not yet beamed together. Beams share much in common with ties; they connect notes to each other, and can begin, continue and end. The terms they use differ; beams `begin` and `end` rather than `start` and `stop`, and these values are inserted as content rather than as attributes. For example:

```xml
<tied type="start" />
<!-- vs -->
<beam>begin</beam>
```

It's not always clear why some MusicXML features take the form of attribute values rather than element content, and why terms like 'begin' and 'start' aren't standardised to simply use a single term when their meanings are the same. This is just something to be aware of when working with MusicXML; consistency isn't always its forte, if you'll pardon the pun.

Anyway, minor gripes aside, let the beams begin! Beams also take a `number` attribute, to indicate the level of the beam we're currently working with. The top level beam is indicated by the value `1`, the second level by the value `2` etc. As eighth notes only have a single top level beam, we just need a single beam with a `number` of `1`. If we were connecting sixteenth (semiquaver) notes, we'd have an additional beam element with the `number` set to `2`. For example:

```xml
<!-- How an eighth note beam begins -->
<beam number="1">begin</beam>

<!-- How a sixteenth note beam begins -->
<beam number="1">begin</beam>
<beam number="2">begin</beam>
```

We'll connect the `A` to the just created `F` with these simple additions:

```diff-xml
 <note>
   <pitch>
     <step>A</step>
     ...
   <staff>1</staff>
+  <beam number="1">begin</beam>
 </note>
 <note>
   <pitch>
     <step>F</step>
     ...
   <staff>1</staff>
+  <beam number="1">end</beam>
 </note>
```

Now the notes should be beamed together like so:

{{ codepen('MusicXML Tutorial 3.1', 'ogbYwVL', 550) }}

## Tuplets

Let's take our beam one step further and turn it into a tuplet. A tuplet is any rhythmic grouping wherein the notes are subdivided in a way that can't normally be accommodated by the time signature. For example, each quarter note in our 3/4 time signature could be further divided into two eighth notes, four sixteenth notes or eight thirty-second notes etc. But what if we wanted to divide a quarter note into three eighth notes instead? We'd use a tuplet.

To fit three eighth notes into the space that two would normally occupy, we'd use a tuplet of the triplet variety (the most common). First let's squeeze in a `G` between the `A` and `F` we just beamed together. We want this `G` to be part of the existing beam, so we'd set its beam content to `continue`.

```xml
<note>
  <pitch>
    <step>G</step>
    <octave>4</octave>
  </pitch>
  <duration>1</duration>
  <voice>1</voice>
  <type>eighth</type>
  <staff>1</staff>
  <beam number="1">continue</beam>
</note>
```

As things stand, this 'violates' the time signature, but MusicXML won't penalise us for this. If it's valid syntax, MusicXML will allow it; it's up to us to know enough music theory to spot the error (and demonstrating erroneous notation also has its uses).

The `<tuplet>` element is nested within the `<notations>` element, and it has one required `type` attribute, which may be either `start` or `stop`. It's also best to specify the `placement` (`above` or `below`) and whether or not to include a `bracket` (`yes` or `no`). Our tuplet notation we want to place above the notes starting on the `A`, and we don't need a bracket as the notes are already beamed together. 

```diff-xml
 <note>
   <pitch>
     <step>A</step>
     <octave>4</octave>
   </pitch>
   ...
+  <notations>
+    <tuplet type="start" bracket="no" placement="above" />
+  </notations>
 </note>
```

Updating the `F`, where our tuplet comes to a close, is more straightforward:

```diff-xml
 <note>
   <pitch>
     <step>F</step>
     <octave>4</octave>
     <alter>1</alter>
   </pitch>
   ...
+  <notations>
+    <tuplet type="stop" />
+  </notations>
 </note>
```

If you inspect the rendered score at this point, you'll notice that the tuplet isn't yet showing. We're still missing something important.

### Time Modifications

The `<time-modification>` element needs to accompany the tuplet for it to display properly. Like the `<tie>` element, the `<time-modification>` element is concerned with how the music should sound, but unlike the `<tie>` element, it contains some information required to render our notation in this case.

It contains two required elements (rather than attributes); `<actual-notes>` and `<normal-notes>`. We want three notes to play in the time normally allocated for two, so we would modify the time as follows:

```xml
<time-modification>
  <actual-notes>3</actual-notes>
  <normal-notes>2</normal-notes>
</time-modification>
```

This markup needs to be present in all notes contained in the tuplet - the `A`, `G` and `F`. Here's how it looks copied into the `A` (for brevity's sake I won't include the other two notes, as the addition is identical):

```diff-xml
 <note>
   <pitch>
     <step>A</step>
     <octave>4</octave>
   </pitch>
   ...
   <beam number="1">begin</beam>
+  <time-modification>
+    <actual-notes>3</actual-notes>
+    <normal-notes>2</normal-notes>
+  </time-modification>
   <notations>
     <tuplet type="start" bracket="no" placement="above" />
   </notations>
 </note>
```

Once copied into all three notes the tuplet should show, so we've fixed that problem. Something isn't quite right yet though; the notes of the two voices in the treble clef aren't properly aligned. The reason for this is that we have an extra note's `<duration>` in the first voice unaccounted for by the `<backup>` element (the one directly following the `F`). So we need update that as follows:

```diff-xml
 <backup>
-  <duration>6</duration>
+  <duration>7</duration>
 </backup>
```

Now the tuplet should look right.

{{ codepen('MusicXML Tutorial 3.4', 'MYKboRx', 550) }}

## Barlines

When one measure ends and another begins, a standard single barline is implied. For any other kind of barline, we need to define it using the `<barline>` element. Barlines can become quite elaborate; <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/bar-style/" target="_blank">many different styles</a> are possible, and repeats, endings and other elements like segnos and codas can also be defined here.

We want to create a barline to end the piece. The `<barline>` element takes a `location` attribute, which can be either `right`, `middle` or `left`. And we want to define the style too, which is done via a child element, `<bar-style>`. Our barline will be on the right, and it will have a style of `light-heavy` (indicating the stroke weight of the two lines). So at the very end of the second measure, we'd insert the following markup:

```xml
<barline location="right">
  <bar-style>light-heavy</bar-style>
</barline>
```

And that concludes our example score!

{{ codepen('MusicXML Tutorial 3.4', 'xbZqBvB', 550) }}

## Summary

In this tutorial we explored rests, ties, tuplets, beams and barlines, and the difference between elements intended to describe the notated music, and elements intended to represent its sonic realisation. In the next part of the series, we'll start a new example score and show how MusicXML can handle non-Western music notation.