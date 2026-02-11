---
title: An Interactive MusicXML Element Tree
permalink: /musicxml-tree/
date: 2026-02-06
tags: ['Music', 'MusicXML']
---

When writing my <a href="/tag/musicxml">tutorial series on MusicXML</a>, I found myself regularly clicking around the MusicXML element tree <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/element-tree/" target="_blank">on the W3C docs site</a>, dearly wishing I could individually expand and collapse the elements to better explore the spec and get a feel of how everything fit together. Once you're a few levels deep it's easy to lose your conceptual grasp on where you are and how the elements (the many many elements!) relate to each other.

In response I've put together the below prototype, which I'm hopeful will eventually makes its way into the official documentation, which I will be involved in helping re-design and develop. If you've stumbled upon this and are interested in exploring the spec, I hope you find it helpful!
<style>
  #musicxml-tree ul { list-style-type: none }
  #musicxml-tree h2, #musicxml-tree h3 {
    margin: 0;
    font-size: var(--text-xl);
    display: inline;
    font-weight: normal;
  }
  #musicxml-tree a {
    text-decoration: none;
    color: var(--color-teal-400);
    font-weight: normal;
  }
  #musicxml-tree a:hover { color: var(--color-teal-200) }
  #musicxml-tree a .br { color: #ccc }
</style>
<div class="bg-zinc-900 rounded-md py-1 relative">
  <button id="collapse-all" class="flex items-center w-fit absolute top-9 left-48 px-2 border-2 border-purple-500 rounded-xl hover:bg-purple-900 active:bg-purple-950 cursor-pointer transition">collapse/expand all</button>
  <ul id="musicxml-tree">
    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-partwise/" target="_blank"><span class="br">&lt;</span><h2>score-partwise</h2><span class="br">&gt;</span></a>
    <ul>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit/" target="_blank"><span class="br">&lt;</span><h3>credit</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bookmark/" target="_blank"><span class="br">&lt;</span>bookmark<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-image/" target="_blank"><span class="br">&lt;</span>credit-image<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-symbol/" target="_blank"><span class="br">&lt;</span>credit-symbol<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-type/" target="_blank"><span class="br">&lt;</span>credit-type<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-words/" target="_blank"><span class="br">&lt;</span>credit-words<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/link/" target="_blank"><span class="br">&lt;</span>link<span class="br">&gt;</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/defaults/" target="_blank"><span class="br">&lt;</span><h3>defaults</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/appearance/" target="_blank"><span class="br">&lt;</span>appearance<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/distance/" target="_blank"><span class="br">&lt;</span>distance<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glyph/" target="_blank"><span class="br">&lt;</span>glyph<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-width/" target="_blank"><span class="br">&lt;</span>line-width<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/note-size/" target="_blank"><span class="br">&lt;</span>note-size<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-appearance/" target="_blank"><span class="br">&lt;</span>other-appearance<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/concert-score/" target="_blank"><span class="br">&lt;</span>concert-score<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric-font/" target="_blank"><span class="br">&lt;</span>lyric-font<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric-language/" target="_blank"><span class="br">&lt;</span>lyric-language<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/music-font/" target="_blank"><span class="br">&lt;</span>music-font<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-layout/" target="_blank"><span class="br">&lt;</span>page-layout<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-height/" target="_blank"><span class="br">&lt;</span>page-height<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-margins/" target="_blank"><span class="br">&lt;</span>page-margins<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bottom-margin/" target="_blank"><span class="br">&lt;</span>bottom-margin<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin/" target="_blank"><span class="br">&lt;</span>left-margin<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin/" target="_blank"><span class="br">&lt;</span>right-margin<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-margin/" target="_blank"><span class="br">&lt;</span>top-margin<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-width/" target="_blank"><span class="br">&lt;</span>page-width<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scaling/" target="_blank"><span class="br">&lt;</span>scaling<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/millimeters/" target="_blank"><span class="br">&lt;</span>millimeters<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tenths/" target="_blank"><span class="br">&lt;</span>tenths<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-layout/" target="_blank"><span class="br">&lt;</span>staff-layout<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-distance/" target="_blank"><span class="br">&lt;</span>staff-distance<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-layout/" target="_blank"><span class="br">&lt;</span>system-layout<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-distance/" target="_blank"><span class="br">&lt;</span>system-distance<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-dividers/" target="_blank"><span class="br">&lt;</span>system-dividers<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-divider/" target="_blank"><span class="br">&lt;</span>left-divider<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-divider/" target="_blank"><span class="br">&lt;</span>right-divider<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-margins/" target="_blank"><span class="br">&lt;</span>system-margins<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin/" target="_blank"><span class="br">&lt;</span>left-margin<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin/" target="_blank"><span class="br">&lt;</span>right-margin<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-system-distance/" target="_blank"><span class="br">&lt;</span>top-system-distance<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/word-font/" target="_blank"><span class="br">&lt;</span>word-font<span class="br">&gt;</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/identification/" target="_blank"><span class="br">&lt;</span><h3>identification</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/creator/" target="_blank"><span class="br">&lt;</span>creator<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding/" target="_blank"><span class="br">&lt;</span>encoding<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoder/" target="_blank"><span class="br">&lt;</span>encoder<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-date/" target="_blank"><span class="br">&lt;</span>encoding-date<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-description/" target="_blank"><span class="br">&lt;</span>encoding-description<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/software/" target="_blank"><span class="br">&lt;</span>software<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/supports/" target="_blank"><span class="br">&lt;</span>supports<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous/" target="_blank"><span class="br">&lt;</span>miscellaneous<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous-field/" target="_blank"><span class="br">&lt;</span>miscellaneous-field<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/relation/" target="_blank"><span class="br">&lt;</span>relation<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rights/" target="_blank"><span class="br">&lt;</span>rights<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/source/" target="_blank"><span class="br">&lt;</span>source<span class="br">&gt;</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-number/" target="_blank"><span class="br">&lt;</span><h3>movement-number</h3><span class="br">&gt;</span></a>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-title/" target="_blank"><span class="br">&lt;</span><h3>movement-title</h3><span class="br">&gt;</span></a>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-partwise/" target="_blank"><span class="br">&lt;</span><h3>part</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-partwise/" target="_blank"><span class="br">&lt;</span>measure<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/attributes/" target="_blank"><span class="br">&lt;</span>attributes<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef/" target="_blank"><span class="br">&lt;</span>clef<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef-octave-change/" target="_blank"><span class="br">&lt;</span>clef-octave-change<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line/" target="_blank"><span class="br">&lt;</span>line<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sign/" target="_blank"><span class="br">&lt;</span>sign<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/directive/" target="_blank"><span class="br">&lt;</span>directive<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/divisions/" target="_blank"><span class="br">&lt;</span>divisions<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/for-part/" target="_blank"><span class="br">&lt;</span>for-part<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-clef/" target="_blank"><span class="br">&lt;</span>part-clef<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef-octave-change/" target="_blank"><span class="br">&lt;</span>clef-octave-change<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line/" target="_blank"><span class="br">&lt;</span>line<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sign/" target="_blank"><span class="br">&lt;</span>sign<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-transpose/" target="_blank"><span class="br">&lt;</span>part-transpose<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/chromatic/" target="_blank"><span class="br">&lt;</span>chromatic<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/diatonic/" target="_blank"><span class="br">&lt;</span>diatonic<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double/" target="_blank"><span class="br">&lt;</span>double<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave-change/" target="_blank"><span class="br">&lt;</span>octave-change<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instruments/" target="_blank"><span class="br">&lt;</span>instruments<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key/" target="_blank"><span class="br">&lt;</span>key<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/cancel/" target="_blank"><span class="br">&lt;</span>cancel<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fifths/" target="_blank"><span class="br">&lt;</span>fifths<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-accidental/" target="_blank"><span class="br">&lt;</span>key-accidental<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-alter/" target="_blank"><span class="br">&lt;</span>key-alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-octave/" target="_blank"><span class="br">&lt;</span>key-octave<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-step/" target="_blank"><span class="br">&lt;</span>key-step<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mode/" target="_blank"><span class="br">&lt;</span>mode<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-style/" target="_blank"><span class="br">&lt;</span>measure-style<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-repeat/" target="_blank"><span class="br">&lt;</span>beat-repeat<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/except-voice/" target="_blank"><span class="br">&lt;</span>except-voice<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-dot/" target="_blank"><span class="br">&lt;</span>slash-dot<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-type/" target="_blank"><span class="br">&lt;</span>slash-type<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-repeat/" target="_blank"><span class="br">&lt;</span>measure-repeat<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/multiple-rest/" target="_blank"><span class="br">&lt;</span>multiple-rest<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash/" target="_blank"><span class="br">&lt;</span>slash<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/except-voice/" target="_blank"><span class="br">&lt;</span>except-voice<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-dot/" target="_blank"><span class="br">&lt;</span>slash-dot<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-type/" target="_blank"><span class="br">&lt;</span>slash-type<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-symbol/" target="_blank"><span class="br">&lt;</span>part-symbol<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-details/" target="_blank"><span class="br">&lt;</span>staff-details<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/capo/" target="_blank"><span class="br">&lt;</span>capo<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-detail/" target="_blank"><span class="br">&lt;</span>line-detail<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-lines/" target="_blank"><span class="br">&lt;</span>staff-lines<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-size/" target="_blank"><span class="br">&lt;</span>staff-size<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-tuning/" target="_blank"><span class="br">&lt;</span>staff-tuning<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-alter/" target="_blank"><span class="br">&lt;</span>tuning-alter<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-octave/" target="_blank"><span class="br">&lt;</span>tuning-octave<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-step/" target="_blank"><span class="br">&lt;</span>tuning-step<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-type/" target="_blank"><span class="br">&lt;</span>staff-type<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staves/" target="_blank"><span class="br">&lt;</span>staves<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time/" target="_blank"><span class="br">&lt;</span>time<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-type/" target="_blank"><span class="br">&lt;</span>beat-type<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beats/" target="_blank"><span class="br">&lt;</span>beats<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/interchangeable/" target="_blank"><span class="br">&lt;</span>interchangeable<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-type/" target="_blank"><span class="br">&lt;</span>beat-type<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beats/" target="_blank"><span class="br">&lt;</span>beats<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time-relation/" target="_blank"><span class="br">&lt;</span>time-relation<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/senza-misura/" target="_blank"><span class="br">&lt;</span>senza-misura<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/transpose/" target="_blank"><span class="br">&lt;</span>transpose<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/chromatic/" target="_blank"><span class="br">&lt;</span>chromatic<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/diatonic/" target="_blank"><span class="br">&lt;</span>diatonic<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double/" target="_blank"><span class="br">&lt;</span>double<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave-change/" target="_blank"><span class="br">&lt;</span>octave-change<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/backup/" target="_blank"><span class="br">&lt;</span>backup<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/duration/" target="_blank"><span class="br">&lt;</span>duration<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/barline/" target="_blank"><span class="br">&lt;</span>barline<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bar-style/" target="_blank"><span class="br">&lt;</span>bar-style<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/coda/" target="_blank"><span class="br">&lt;</span>coda<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ending/" target="_blank"><span class="br">&lt;</span>ending<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fermata/" target="_blank"><span class="br">&lt;</span>fermata<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/repeat/" target="_blank"><span class="br">&lt;</span>repeat<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/segno/" target="_blank"><span class="br">&lt;</span>segno<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wavy-line/" target="_blank"><span class="br">&lt;</span>wavy-line<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bookmark/" target="_blank"><span class="br">&lt;</span>bookmark<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/direction/" target="_blank"><span class="br">&lt;</span>direction<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/direction-type/" target="_blank"><span class="br">&lt;</span>direction-type<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-registration/" target="_blank"><span class="br">&lt;</span>accordion-registration<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-high/" target="_blank"><span class="br">&lt;</span>accordion-high<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-low/" target="_blank"><span class="br">&lt;</span>accordion-low<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-middle/" target="_blank"><span class="br">&lt;</span>accordion-middle<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bracket/" target="_blank"><span class="br">&lt;</span>bracket<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/coda/" target="_blank"><span class="br">&lt;</span>coda<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp/" target="_blank"><span class="br">&lt;</span>damp<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp-all/" target="_blank"><span class="br">&lt;</span>damp-all<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dashes/" target="_blank"><span class="br">&lt;</span>dashes<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dynamics/" target="_blank"><span class="br">&lt;</span>dynamics<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/f/" target="_blank"><span class="br">&lt;</span>f<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ff/" target="_blank"><span class="br">&lt;</span>ff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fff/" target="_blank"><span class="br">&lt;</span>fff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffff/" target="_blank"><span class="br">&lt;</span>ffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fffff/" target="_blank"><span class="br">&lt;</span>fffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffffff/" target="_blank"><span class="br">&lt;</span>ffffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fp/" target="_blank"><span class="br">&lt;</span>fp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fz/" target="_blank"><span class="br">&lt;</span>fz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mf/" target="_blank"><span class="br">&lt;</span>mf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mp/" target="_blank"><span class="br">&lt;</span>mp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/n/" target="_blank"><span class="br">&lt;</span>n<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-dynamics/" target="_blank"><span class="br">&lt;</span>other-dynamics<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/p/" target="_blank"><span class="br">&lt;</span>p<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pf/" target="_blank"><span class="br">&lt;</span>pf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pp/" target="_blank"><span class="br">&lt;</span>pp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppp/" target="_blank"><span class="br">&lt;</span>ppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppp/" target="_blank"><span class="br">&lt;</span>pppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppppp/" target="_blank"><span class="br">&lt;</span>ppppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppppp/" target="_blank"><span class="br">&lt;</span>pppppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rf/" target="_blank"><span class="br">&lt;</span>rf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rfz/" target="_blank"><span class="br">&lt;</span>rfz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sf/" target="_blank"><span class="br">&lt;</span>sf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sffz/" target="_blank"><span class="br">&lt;</span>sffz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfp/" target="_blank"><span class="br">&lt;</span>sfp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfpp/" target="_blank"><span class="br">&lt;</span>sfpp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfz/" target="_blank"><span class="br">&lt;</span>sfz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfzp/" target="_blank"><span class="br">&lt;</span>sfzp<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/eyeglasses/" target="_blank"><span class="br">&lt;</span>eyeglasses<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harp-pedals/" target="_blank"><span class="br">&lt;</span>harp-pedals<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-tuning/" target="_blank"><span class="br">&lt;</span>pedal-tuning<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-alter/" target="_blank"><span class="br">&lt;</span>pedal-alter<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-step/" target="_blank"><span class="br">&lt;</span>pedal-step<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/image/" target="_blank"><span class="br">&lt;</span>image<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome/" target="_blank"><span class="br">&lt;</span>metronome<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit/" target="_blank"><span class="br">&lt;</span>beat-unit<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit-dot/" target="_blank"><span class="br">&lt;</span>beat-unit-dot<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit-tied/" target="_blank"><span class="br">&lt;</span>beat-unit-tied<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit/" target="_blank"><span class="br">&lt;</span>beat-unit<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit-dot/" target="_blank"><span class="br">&lt;</span>beat-unit-dot<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-arrows/" target="_blank"><span class="br">&lt;</span>metronome-arrows<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-note/" target="_blank"><span class="br">&lt;</span>metronome-note<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-beam/" target="_blank"><span class="br">&lt;</span>metronome-beam<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-dot/" target="_blank"><span class="br">&lt;</span>metronome-dot<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-tied/" target="_blank"><span class="br">&lt;</span>metronome-tied<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-tuplet/" target="_blank"><span class="br">&lt;</span>metronome-tuplet<span class="br">&gt;</span></a>
                                <ul>
                                  <li>
                                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/actual-notes/" target="_blank"><span class="br">&lt;</span>actual-notes<span class="br">&gt;</span></a>
                                  </li>
                                  <li>
                                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-dot/" target="_blank"><span class="br">&lt;</span>normal-dot<span class="br">&gt;</span></a>
                                  </li>
                                  <li>
                                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-notes/" target="_blank"><span class="br">&lt;</span>normal-notes<span class="br">&gt;</span></a>
                                  </li>
                                  <li>
                                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-type/" target="_blank"><span class="br">&lt;</span>normal-type<span class="br">&gt;</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-type/" target="_blank"><span class="br">&lt;</span>metronome-type<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-relation/" target="_blank"><span class="br">&lt;</span>metronome-relation<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/per-minute/" target="_blank"><span class="br">&lt;</span>per-minute<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave-shift/" target="_blank"><span class="br">&lt;</span>octave-shift<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-direction/" target="_blank"><span class="br">&lt;</span>other-direction<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal/" target="_blank"><span class="br">&lt;</span>pedal<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/percussion/" target="_blank"><span class="br">&lt;</span>percussion<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beater/" target="_blank"><span class="br">&lt;</span>beater<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/effect/" target="_blank"><span class="br">&lt;</span>effect<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glass/" target="_blank"><span class="br">&lt;</span>glass<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/membrane/" target="_blank"><span class="br">&lt;</span>membrane<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metal/" target="_blank"><span class="br">&lt;</span>metal<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-percussion/" target="_blank"><span class="br">&lt;</span>other-percussion<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitched/" target="_blank"><span class="br">&lt;</span>pitched<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick/" target="_blank"><span class="br">&lt;</span>stick<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-material/" target="_blank"><span class="br">&lt;</span>stick-material<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-type/" target="_blank"><span class="br">&lt;</span>stick-type<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-location/" target="_blank"><span class="br">&lt;</span>stick-location<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/timpani/" target="_blank"><span class="br">&lt;</span>timpani<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wood/" target="_blank"><span class="br">&lt;</span>wood<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/principal-voice/" target="_blank"><span class="br">&lt;</span>principal-voice<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rehearsal/" target="_blank"><span class="br">&lt;</span>rehearsal<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scordatura/" target="_blank"><span class="br">&lt;</span>scordatura<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accord/" target="_blank"><span class="br">&lt;</span>accord<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-alter/" target="_blank"><span class="br">&lt;</span>tuning-alter<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-octave/" target="_blank"><span class="br">&lt;</span>tuning-octave<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-step/" target="_blank"><span class="br">&lt;</span>tuning-step<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/segno/" target="_blank"><span class="br">&lt;</span>segno<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-divide/" target="_blank"><span class="br">&lt;</span>staff-divide<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string-mute/" target="_blank"><span class="br">&lt;</span>string-mute<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/symbol/" target="_blank"><span class="br">&lt;</span>symbol<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wedge/" target="_blank"><span class="br">&lt;</span>wedge<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/words/" target="_blank"><span class="br">&lt;</span>words<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/listening/" target="_blank"><span class="br">&lt;</span>listening<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listening/" target="_blank"><span class="br">&lt;</span>other-listening<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sync/" target="_blank"><span class="br">&lt;</span>sync<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sound/" target="_blank"><span class="br">&lt;</span>sound<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-change/" target="_blank"><span class="br">&lt;</span>instrument-change<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ensemble/" target="_blank"><span class="br">&lt;</span>ensemble<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-sound/" target="_blank"><span class="br">&lt;</span>instrument-sound<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/solo/" target="_blank"><span class="br">&lt;</span>solo<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-instrument/" target="_blank"><span class="br">&lt;</span>virtual-instrument<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-library/" target="_blank"><span class="br">&lt;</span>virtual-library<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-name/" target="_blank"><span class="br">&lt;</span>virtual-name<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-device/" target="_blank"><span class="br">&lt;</span>midi-device<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-instrument/" target="_blank"><span class="br">&lt;</span>midi-instrument<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elevation/" target="_blank"><span class="br">&lt;</span>elevation<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-bank/" target="_blank"><span class="br">&lt;</span>midi-bank<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-channel/" target="_blank"><span class="br">&lt;</span>midi-channel<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-name/" target="_blank"><span class="br">&lt;</span>midi-name<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-program/" target="_blank"><span class="br">&lt;</span>midi-program<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-unpitched/" target="_blank"><span class="br">&lt;</span>midi-unpitched<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pan/" target="_blank"><span class="br">&lt;</span>pan<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/volume/" target="_blank"><span class="br">&lt;</span>volume<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/play/" target="_blank"><span class="br">&lt;</span>play<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ipa/" target="_blank"><span class="br">&lt;</span>ipa<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mute/" target="_blank"><span class="br">&lt;</span>mute<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-play/" target="_blank"><span class="br">&lt;</span>other-play<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/semi-pitched/" target="_blank"><span class="br">&lt;</span>semi-pitched<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing/" target="_blank"><span class="br">&lt;</span>swing<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first/" target="_blank"><span class="br">&lt;</span>first<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/second/" target="_blank"><span class="br">&lt;</span>second<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/straight/" target="_blank"><span class="br">&lt;</span>straight<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-style/" target="_blank"><span class="br">&lt;</span>swing-style<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-type/" target="_blank"><span class="br">&lt;</span>swing-type<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff/" target="_blank"><span class="br">&lt;</span>staff<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/voice/" target="_blank"><span class="br">&lt;</span>voice<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figured-bass/" target="_blank"><span class="br">&lt;</span>figured-bass<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/duration/" target="_blank"><span class="br">&lt;</span>duration<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figure/" target="_blank"><span class="br">&lt;</span>figure<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/extend/" target="_blank"><span class="br">&lt;</span>extend<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figure-number/" target="_blank"><span class="br">&lt;</span>figure-number<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/prefix/" target="_blank"><span class="br">&lt;</span>prefix<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/suffix/" target="_blank"><span class="br">&lt;</span>suffix<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/forward/" target="_blank"><span class="br">&lt;</span>forward<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/duration/" target="_blank"><span class="br">&lt;</span>duration<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff/" target="_blank"><span class="br">&lt;</span>staff<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/voice/" target="_blank"><span class="br">&lt;</span>voice<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/grouping/" target="_blank"><span class="br">&lt;</span>grouping<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/feature/" target="_blank"><span class="br">&lt;</span>feature<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmony/" target="_blank"><span class="br">&lt;</span>harmony<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass/" target="_blank"><span class="br">&lt;</span>bass<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-alter/" target="_blank"><span class="br">&lt;</span>bass-alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-separator/" target="_blank"><span class="br">&lt;</span>bass-separator<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-step/" target="_blank"><span class="br">&lt;</span>bass-step<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree/" target="_blank"><span class="br">&lt;</span>degree<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-alter/" target="_blank"><span class="br">&lt;</span>degree-alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-type/" target="_blank"><span class="br">&lt;</span>degree-type<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-value/" target="_blank"><span class="br">&lt;</span>degree-value<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame/" target="_blank"><span class="br">&lt;</span>frame<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first-fret/" target="_blank"><span class="br">&lt;</span>first-fret<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-frets/" target="_blank"><span class="br">&lt;</span>frame-frets<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-note/" target="_blank"><span class="br">&lt;</span>frame-note<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/barre/" target="_blank"><span class="br">&lt;</span>barre<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingering/" target="_blank"><span class="br">&lt;</span>fingering<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fret/" target="_blank"><span class="br">&lt;</span>fret<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string/" target="_blank"><span class="br">&lt;</span>string<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-strings/" target="_blank"><span class="br">&lt;</span>frame-strings<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/function/" target="_blank"><span class="br">&lt;</span>function<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inversion/" target="_blank"><span class="br">&lt;</span>inversion<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/kind/" target="_blank"><span class="br">&lt;</span>kind<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral/" target="_blank"><span class="br">&lt;</span>numeral<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-alter/" target="_blank"><span class="br">&lt;</span>numeral-alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-key/" target="_blank"><span class="br">&lt;</span>numeral-key<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-fifths/" target="_blank"><span class="br">&lt;</span>numeral-fifths<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-mode/" target="_blank"><span class="br">&lt;</span>numeral-mode<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-root/" target="_blank"><span class="br">&lt;</span>numeral-root<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root/" target="_blank"><span class="br">&lt;</span>root<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root-alter/" target="_blank"><span class="br">&lt;</span>root-alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root-step/" target="_blank"><span class="br">&lt;</span>root-step<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff/" target="_blank"><span class="br">&lt;</span>staff<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/link/" target="_blank"><span class="br">&lt;</span>link<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/listening/" target="_blank"><span class="br">&lt;</span>listening<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listening/" target="_blank"><span class="br">&lt;</span>other-listening<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sync/" target="_blank"><span class="br">&lt;</span>sync<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/note/" target="_blank"><span class="br">&lt;</span>note<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental/" target="_blank"><span class="br">&lt;</span>accidental<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beam/" target="_blank"><span class="br">&lt;</span>beam<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/chord/" target="_blank"><span class="br">&lt;</span>chord<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/cue/" target="_blank"><span class="br">&lt;</span>cue<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dot/" target="_blank"><span class="br">&lt;</span>dot<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/duration/" target="_blank"><span class="br">&lt;</span>duration<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/grace/" target="_blank"><span class="br">&lt;</span>grace<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument/" target="_blank"><span class="br">&lt;</span>instrument<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/listen/" target="_blank"><span class="br">&lt;</span>listen<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/assess/" target="_blank"><span class="br">&lt;</span>assess<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listen/" target="_blank"><span class="br">&lt;</span>other-listen<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wait/" target="_blank"><span class="br">&lt;</span>wait<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric/" target="_blank"><span class="br">&lt;</span>lyric<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elision/" target="_blank"><span class="br">&lt;</span>elision<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/end-line/" target="_blank"><span class="br">&lt;</span>end-line<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/end-paragraph/" target="_blank"><span class="br">&lt;</span>end-paragraph<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/extend/" target="_blank"><span class="br">&lt;</span>extend<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/humming/" target="_blank"><span class="br">&lt;</span>humming<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/laughing/" target="_blank"><span class="br">&lt;</span>laughing<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/syllabic/" target="_blank"><span class="br">&lt;</span>syllabic<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/text/" target="_blank"><span class="br">&lt;</span>text<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notations/" target="_blank"><span class="br">&lt;</span>notations<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-mark/" target="_blank"><span class="br">&lt;</span>accidental-mark<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arpeggiate/" target="_blank"><span class="br">&lt;</span>arpeggiate<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/articulations/" target="_blank"><span class="br">&lt;</span>articulations<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accent/" target="_blank"><span class="br">&lt;</span>accent<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/breath-mark/" target="_blank"><span class="br">&lt;</span>breath-mark<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/caesura/" target="_blank"><span class="br">&lt;</span>caesura<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/detached-legato/" target="_blank"><span class="br">&lt;</span>detached-legato<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/doit/" target="_blank"><span class="br">&lt;</span>doit<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/falloff/" target="_blank"><span class="br">&lt;</span>falloff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-articulation/" target="_blank"><span class="br">&lt;</span>other-articulation<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/plop/" target="_blank"><span class="br">&lt;</span>plop<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scoop/" target="_blank"><span class="br">&lt;</span>scoop<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/soft-accent/" target="_blank"><span class="br">&lt;</span>soft-accent<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/spiccato/" target="_blank"><span class="br">&lt;</span>spiccato<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staccatissimo/" target="_blank"><span class="br">&lt;</span>staccatissimo<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staccato/" target="_blank"><span class="br">&lt;</span>staccato<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stress/" target="_blank"><span class="br">&lt;</span>stress<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/strong-accent/" target="_blank"><span class="br">&lt;</span>strong-accent<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tenuto/" target="_blank"><span class="br">&lt;</span>tenuto<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/unstress/" target="_blank"><span class="br">&lt;</span>unstress<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dynamics/" target="_blank"><span class="br">&lt;</span>dynamics<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/f/" target="_blank"><span class="br">&lt;</span>f<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ff/" target="_blank"><span class="br">&lt;</span>ff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fff/" target="_blank"><span class="br">&lt;</span>fff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffff/" target="_blank"><span class="br">&lt;</span>ffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fffff/" target="_blank"><span class="br">&lt;</span>fffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffffff/" target="_blank"><span class="br">&lt;</span>ffffff<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fp/" target="_blank"><span class="br">&lt;</span>fp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fz/" target="_blank"><span class="br">&lt;</span>fz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mf/" target="_blank"><span class="br">&lt;</span>mf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mp/" target="_blank"><span class="br">&lt;</span>mp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/n/" target="_blank"><span class="br">&lt;</span>n<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-dynamics/" target="_blank"><span class="br">&lt;</span>other-dynamics<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/p/" target="_blank"><span class="br">&lt;</span>p<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pf/" target="_blank"><span class="br">&lt;</span>pf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pp/" target="_blank"><span class="br">&lt;</span>pp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppp/" target="_blank"><span class="br">&lt;</span>ppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppp/" target="_blank"><span class="br">&lt;</span>pppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppppp/" target="_blank"><span class="br">&lt;</span>ppppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppppp/" target="_blank"><span class="br">&lt;</span>pppppp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rf/" target="_blank"><span class="br">&lt;</span>rf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rfz/" target="_blank"><span class="br">&lt;</span>rfz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sf/" target="_blank"><span class="br">&lt;</span>sf<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sffz/" target="_blank"><span class="br">&lt;</span>sffz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfp/" target="_blank"><span class="br">&lt;</span>sfp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfpp/" target="_blank"><span class="br">&lt;</span>sfpp<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfz/" target="_blank"><span class="br">&lt;</span>sfz<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfzp/" target="_blank"><span class="br">&lt;</span>sfzp<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fermata/" target="_blank"><span class="br">&lt;</span>fermata<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glissando/" target="_blank"><span class="br">&lt;</span>glissando<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/non-arpeggiate/" target="_blank"><span class="br">&lt;</span>non-arpeggiate<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ornaments/" target="_blank"><span class="br">&lt;</span>ornaments<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-mark/" target="_blank"><span class="br">&lt;</span>accidental-mark<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/delayed-inverted-turn/" target="_blank"><span class="br">&lt;</span>delayed-inverted-turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/delayed-turn/" target="_blank"><span class="br">&lt;</span>delayed-turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/haydn/" target="_blank"><span class="br">&lt;</span>haydn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-mordent/" target="_blank"><span class="br">&lt;</span>inverted-mordent<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-turn/" target="_blank"><span class="br">&lt;</span>inverted-turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-vertical-turn/" target="_blank"><span class="br">&lt;</span>inverted-vertical-turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mordent/" target="_blank"><span class="br">&lt;</span>mordent<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-ornament/" target="_blank"><span class="br">&lt;</span>other-ornament<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/schleifer/" target="_blank"><span class="br">&lt;</span>schleifer<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/shake/" target="_blank"><span class="br">&lt;</span>shake<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tremolo/" target="_blank"><span class="br">&lt;</span>tremolo<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/trill-mark/" target="_blank"><span class="br">&lt;</span>trill-mark<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/turn/" target="_blank"><span class="br">&lt;</span>turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/vertical-turn/" target="_blank"><span class="br">&lt;</span>vertical-turn<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wavy-line/" target="_blank"><span class="br">&lt;</span>wavy-line<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-notation/" target="_blank"><span class="br">&lt;</span>other-notation<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slide/" target="_blank"><span class="br">&lt;</span>slide<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slur/" target="_blank"><span class="br">&lt;</span>slur<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/technical/" target="_blank"><span class="br">&lt;</span>technical<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow/" target="_blank"><span class="br">&lt;</span>arrow<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-direction/" target="_blank"><span class="br">&lt;</span>arrow-direction<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-style/" target="_blank"><span class="br">&lt;</span>arrow-style<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrowhead/" target="_blank"><span class="br">&lt;</span>arrowhead<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/circular-arrow/" target="_blank"><span class="br">&lt;</span>circular-arrow<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bend/" target="_blank"><span class="br">&lt;</span>bend<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bend-alter/" target="_blank"><span class="br">&lt;</span>bend-alter<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pre-bend/" target="_blank"><span class="br">&lt;</span>pre-bend<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/release/" target="_blank"><span class="br">&lt;</span>release<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/with-bar/" target="_blank"><span class="br">&lt;</span>with-bar<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/brass-bend/" target="_blank"><span class="br">&lt;</span>brass-bend<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double-tongue/" target="_blank"><span class="br">&lt;</span>double-tongue<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/down-bow/" target="_blank"><span class="br">&lt;</span>down-bow<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingering/" target="_blank"><span class="br">&lt;</span>fingering<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingernails/" target="_blank"><span class="br">&lt;</span>fingernails<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/flip/" target="_blank"><span class="br">&lt;</span>flip<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fret/" target="_blank"><span class="br">&lt;</span>fret<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/golpe/" target="_blank"><span class="br">&lt;</span>golpe<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/half-muted/" target="_blank"><span class="br">&lt;</span>half-muted<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hammer-on/" target="_blank"><span class="br">&lt;</span>hammer-on<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/handbell/" target="_blank"><span class="br">&lt;</span>handbell<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-mute/" target="_blank"><span class="br">&lt;</span>harmon-mute<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-closed/" target="_blank"><span class="br">&lt;</span>harmon-closed<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmonic/" target="_blank"><span class="br">&lt;</span>harmonic<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/artificial/" target="_blank"><span class="br">&lt;</span>artificial<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/base-pitch/" target="_blank"><span class="br">&lt;</span>base-pitch<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/natural/" target="_blank"><span class="br">&lt;</span>natural<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sounding-pitch/" target="_blank"><span class="br">&lt;</span>sounding-pitch<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/touching-pitch/" target="_blank"><span class="br">&lt;</span>touching-pitch<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/heel/" target="_blank"><span class="br">&lt;</span>heel<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole/" target="_blank"><span class="br">&lt;</span>hole<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-closed/" target="_blank"><span class="br">&lt;</span>hole-closed<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-shape/" target="_blank"><span class="br">&lt;</span>hole-shape<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-type/" target="_blank"><span class="br">&lt;</span>hole-type<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/open/" target="_blank"><span class="br">&lt;</span>open<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/open-string/" target="_blank"><span class="br">&lt;</span>open-string<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-technical/" target="_blank"><span class="br">&lt;</span>other-technical<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pluck/" target="_blank"><span class="br">&lt;</span>pluck<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pull-off/" target="_blank"><span class="br">&lt;</span>pull-off<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/smear/" target="_blank"><span class="br">&lt;</span>smear<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/snap-pizzicato/" target="_blank"><span class="br">&lt;</span>snap-pizzicato<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stopped/" target="_blank"><span class="br">&lt;</span>stopped<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string/" target="_blank"><span class="br">&lt;</span>string<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tap/" target="_blank"><span class="br">&lt;</span>tap<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/thumb-position/" target="_blank"><span class="br">&lt;</span>thumb-position<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/toe/" target="_blank"><span class="br">&lt;</span>toe<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/triple-tongue/" target="_blank"><span class="br">&lt;</span>triple-tongue<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/up-bow/" target="_blank"><span class="br">&lt;</span>up-bow<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tied/" target="_blank"><span class="br">&lt;</span>tied<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet/" target="_blank"><span class="br">&lt;</span>tuplet<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-actual/" target="_blank"><span class="br">&lt;</span>tuplet-actual<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-dot/" target="_blank"><span class="br">&lt;</span>tuplet-dot<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-number/" target="_blank"><span class="br">&lt;</span>tuplet-number<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-type/" target="_blank"><span class="br">&lt;</span>tuplet-type<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-normal/" target="_blank"><span class="br">&lt;</span>tuplet-normal<span class="br">&gt;</span></a>
                            <ul>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-dot/" target="_blank"><span class="br">&lt;</span>tuplet-dot<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-number/" target="_blank"><span class="br">&lt;</span>tuplet-number<span class="br">&gt;</span></a>
                              </li>
                              <li>
                                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-type/" target="_blank"><span class="br">&lt;</span>tuplet-type<span class="br">&gt;</span></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notehead/" target="_blank"><span class="br">&lt;</span>notehead<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notehead-text/" target="_blank"><span class="br">&lt;</span>notehead-text<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitch/" target="_blank"><span class="br">&lt;</span>pitch<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/alter/" target="_blank"><span class="br">&lt;</span>alter<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave/" target="_blank"><span class="br">&lt;</span>octave<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/step/" target="_blank"><span class="br">&lt;</span>step<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/play/" target="_blank"><span class="br">&lt;</span>play<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ipa/" target="_blank"><span class="br">&lt;</span>ipa<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mute/" target="_blank"><span class="br">&lt;</span>mute<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-play/" target="_blank"><span class="br">&lt;</span>other-play<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/semi-pitched/" target="_blank"><span class="br">&lt;</span>semi-pitched<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rest/" target="_blank"><span class="br">&lt;</span>rest<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-octave/" target="_blank"><span class="br">&lt;</span>display-octave<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-step/" target="_blank"><span class="br">&lt;</span>display-step<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff/" target="_blank"><span class="br">&lt;</span>staff<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stem/" target="_blank"><span class="br">&lt;</span>stem<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tie/" target="_blank"><span class="br">&lt;</span>tie<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time-modification/" target="_blank"><span class="br">&lt;</span>time-modification<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/actual-notes/" target="_blank"><span class="br">&lt;</span>actual-notes<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-dot/" target="_blank"><span class="br">&lt;</span>normal-dot<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-notes/" target="_blank"><span class="br">&lt;</span>normal-notes<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-type/" target="_blank"><span class="br">&lt;</span>normal-type<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/type/" target="_blank"><span class="br">&lt;</span>type<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/unpitched/" target="_blank"><span class="br">&lt;</span>unpitched<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-octave/" target="_blank"><span class="br">&lt;</span>display-octave<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-step/" target="_blank"><span class="br">&lt;</span>display-step<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/voice/" target="_blank"><span class="br">&lt;</span>voice<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/print/" target="_blank"><span class="br">&lt;</span>print<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-layout/" target="_blank"><span class="br">&lt;</span>measure-layout<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-distance/" target="_blank"><span class="br">&lt;</span>measure-distance<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-numbering/" target="_blank"><span class="br">&lt;</span>measure-numbering<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-layout/" target="_blank"><span class="br">&lt;</span>page-layout<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-height/" target="_blank"><span class="br">&lt;</span>page-height<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-margins/" target="_blank"><span class="br">&lt;</span>page-margins<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bottom-margin/" target="_blank"><span class="br">&lt;</span>bottom-margin<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin/" target="_blank"><span class="br">&lt;</span>left-margin<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin/" target="_blank"><span class="br">&lt;</span>right-margin<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-margin/" target="_blank"><span class="br">&lt;</span>top-margin<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-width/" target="_blank"><span class="br">&lt;</span>page-width<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-abbreviation-display/" target="_blank"><span class="br">&lt;</span>part-abbreviation-display<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-name-display/" target="_blank"><span class="br">&lt;</span>part-name-display<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-layout/" target="_blank"><span class="br">&lt;</span>staff-layout<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-distance/" target="_blank"><span class="br">&lt;</span>staff-distance<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-layout/" target="_blank"><span class="br">&lt;</span>system-layout<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-distance/" target="_blank"><span class="br">&lt;</span>system-distance<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-dividers/" target="_blank"><span class="br">&lt;</span>system-dividers<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-divider/" target="_blank"><span class="br">&lt;</span>left-divider<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-divider/" target="_blank"><span class="br">&lt;</span>right-divider<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-margins/" target="_blank"><span class="br">&lt;</span>system-margins<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin/" target="_blank"><span class="br">&lt;</span>left-margin<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin/" target="_blank"><span class="br">&lt;</span>right-margin<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-system-distance/" target="_blank"><span class="br">&lt;</span>top-system-distance<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sound/" target="_blank"><span class="br">&lt;</span>sound<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-change/" target="_blank"><span class="br">&lt;</span>instrument-change<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ensemble/" target="_blank"><span class="br">&lt;</span>ensemble<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-sound/" target="_blank"><span class="br">&lt;</span>instrument-sound<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/solo/" target="_blank"><span class="br">&lt;</span>solo<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-instrument/" target="_blank"><span class="br">&lt;</span>virtual-instrument<span class="br">&gt;</span></a>
                        <ul>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-library/" target="_blank"><span class="br">&lt;</span>virtual-library<span class="br">&gt;</span></a>
                          </li>
                          <li>
                            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-name/" target="_blank"><span class="br">&lt;</span>virtual-name<span class="br">&gt;</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-device/" target="_blank"><span class="br">&lt;</span>midi-device<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-instrument/" target="_blank"><span class="br">&lt;</span>midi-instrument<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elevation/" target="_blank"><span class="br">&lt;</span>elevation<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-bank/" target="_blank"><span class="br">&lt;</span>midi-bank<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-channel/" target="_blank"><span class="br">&lt;</span>midi-channel<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-name/" target="_blank"><span class="br">&lt;</span>midi-name<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-program/" target="_blank"><span class="br">&lt;</span>midi-program<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-unpitched/" target="_blank"><span class="br">&lt;</span>midi-unpitched<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pan/" target="_blank"><span class="br">&lt;</span>pan<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/volume/" target="_blank"><span class="br">&lt;</span>volume<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset/" target="_blank"><span class="br">&lt;</span>offset<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/play/" target="_blank"><span class="br">&lt;</span>play<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ipa/" target="_blank"><span class="br">&lt;</span>ipa<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mute/" target="_blank"><span class="br">&lt;</span>mute<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-play/" target="_blank"><span class="br">&lt;</span>other-play<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/semi-pitched/" target="_blank"><span class="br">&lt;</span>semi-pitched<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing/" target="_blank"><span class="br">&lt;</span>swing<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first/" target="_blank"><span class="br">&lt;</span>first<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/second/" target="_blank"><span class="br">&lt;</span>second<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/straight/" target="_blank"><span class="br">&lt;</span>straight<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-style/" target="_blank"><span class="br">&lt;</span>swing-style<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-type/" target="_blank"><span class="br">&lt;</span>swing-type<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-list/" target="_blank"><span class="br">&lt;</span><h3>part-list</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-group/" target="_blank"><span class="br">&lt;</span>part-group<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote/" target="_blank"><span class="br">&lt;</span>footnote<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-abbreviation/" target="_blank"><span class="br">&lt;</span>group-abbreviation<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-abbreviation-display/" target="_blank"><span class="br">&lt;</span>group-abbreviation-display<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-barline/" target="_blank"><span class="br">&lt;</span>group-barline<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name/" target="_blank"><span class="br">&lt;</span>group-name<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name-display/" target="_blank"><span class="br">&lt;</span>group-name-display<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-symbol/" target="_blank"><span class="br">&lt;</span>group-symbol<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-time/" target="_blank"><span class="br">&lt;</span>group-time<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level/" target="_blank"><span class="br">&lt;</span>level<span class="br">&gt;</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-part/" target="_blank"><span class="br">&lt;</span>score-part<span class="br">&gt;</span></a>
            <ul>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group/" target="_blank"><span class="br">&lt;</span>group<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/identification/" target="_blank"><span class="br">&lt;</span>identification<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/creator/" target="_blank"><span class="br">&lt;</span>creator<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding/" target="_blank"><span class="br">&lt;</span>encoding<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoder/" target="_blank"><span class="br">&lt;</span>encoder<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-date/" target="_blank"><span class="br">&lt;</span>encoding-date<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-description/" target="_blank"><span class="br">&lt;</span>encoding-description<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/software/" target="_blank"><span class="br">&lt;</span>software<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/supports/" target="_blank"><span class="br">&lt;</span>supports<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous/" target="_blank"><span class="br">&lt;</span>miscellaneous<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous-field/" target="_blank"><span class="br">&lt;</span>miscellaneous-field<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/relation/" target="_blank"><span class="br">&lt;</span>relation<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rights/" target="_blank"><span class="br">&lt;</span>rights<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/source/" target="_blank"><span class="br">&lt;</span>source<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-device/" target="_blank"><span class="br">&lt;</span>midi-device<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-instrument/" target="_blank"><span class="br">&lt;</span>midi-instrument<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elevation/" target="_blank"><span class="br">&lt;</span>elevation<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-bank/" target="_blank"><span class="br">&lt;</span>midi-bank<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-channel/" target="_blank"><span class="br">&lt;</span>midi-channel<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-name/" target="_blank"><span class="br">&lt;</span>midi-name<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-program/" target="_blank"><span class="br">&lt;</span>midi-program<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-unpitched/" target="_blank"><span class="br">&lt;</span>midi-unpitched<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pan/" target="_blank"><span class="br">&lt;</span>pan<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/volume/" target="_blank"><span class="br">&lt;</span>volume<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-abbreviation/" target="_blank"><span class="br">&lt;</span>part-abbreviation<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-abbreviation-display/" target="_blank"><span class="br">&lt;</span>part-abbreviation-display<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-link/" target="_blank"><span class="br">&lt;</span>part-link<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-link/" target="_blank"><span class="br">&lt;</span>group-link<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-link/" target="_blank"><span class="br">&lt;</span>instrument-link<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-name/" target="_blank"><span class="br">&lt;</span>part-name<span class="br">&gt;</span></a>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-name-display/" target="_blank"><span class="br">&lt;</span>part-name-display<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text/" target="_blank"><span class="br">&lt;</span>accidental-text<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text/" target="_blank"><span class="br">&lt;</span>display-text<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player/" target="_blank"><span class="br">&lt;</span>player<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player-name/" target="_blank"><span class="br">&lt;</span>player-name<span class="br">&gt;</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-instrument/" target="_blank"><span class="br">&lt;</span>score-instrument<span class="br">&gt;</span></a>
                <ul>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ensemble/" target="_blank"><span class="br">&lt;</span>ensemble<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-abbreviation/" target="_blank"><span class="br">&lt;</span>instrument-abbreviation<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-name/" target="_blank"><span class="br">&lt;</span>instrument-name<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-sound/" target="_blank"><span class="br">&lt;</span>instrument-sound<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/solo/" target="_blank"><span class="br">&lt;</span>solo<span class="br">&gt;</span></a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-instrument/" target="_blank"><span class="br">&lt;</span>virtual-instrument<span class="br">&gt;</span></a>
                    <ul>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-library/" target="_blank"><span class="br">&lt;</span>virtual-library<span class="br">&gt;</span></a>
                      </li>
                      <li>
                        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-name/" target="_blank"><span class="br">&lt;</span>virtual-name<span class="br">&gt;</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work/" target="_blank"><span class="br">&lt;</span><h3>work</h3><span class="br">&gt;</span></a>
        <ul>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/opus-reference/" target="_blank"><span class="br">&lt;</span>opus<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-number/" target="_blank"><span class="br">&lt;</span>work-number<span class="br">&gt;</span></a>
          </li>
          <li>
            <a href="https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-title/" target="_blank"><span class="br">&lt;</span>work-title<span class="br">&gt;</span></a>
          </li>
        </ul>
      </li>
    </ul>
  </ul>
</div>

{% set js %}
  {% include '../../../inc/js/musicxmlTree.js' %}
{% endset %}

<script type="module">{{ js | safe }}</script>


