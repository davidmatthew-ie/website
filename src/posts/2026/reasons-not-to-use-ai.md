---
title: Good Reasons Not to Use or Rely on Generative AI
description: An organised collection of (what I consider to be) sensible, defensible reasons not to use or rely on Generative AI.
slug: reasons-not-to-use-or-rely-on-generative-ai
date: 2026-08-03
tags:
  - x
  - AI
---
The purpose of this post is to gather as many sensible, defensible reasons against the use of (or reliance on) Generative AI as I can; for myself, really. To weed out what it is exactly that bothers me the most. The world hardly needs another AI opinion piece (destined to be gobbled up by AI itself), but in compiling these points I thought I'd share them in case other like-minded folk found them useful.

It is not a rant against every possible use of AI or a condemnation of those who use it. I occasionally use Mistral and Claude for debugging and help with very specific web searches (in large part due to the <a href="https://link.springer.com/chapter/10.1007/978-3-031-56063-7_4" target="_blank">decline in quality of search engine results</a>), but if you don't (or rarely) use AI and feel like you're being "left behind", perhaps this piece will provide some solace.

## Learning, or Lifting?

It all begins with data gathering; the foundation upon which <abbr title="Large Language Models">LLMs</abbr> and other <abbr title="Generative Pre-trained Transformers">GPTs</abbr> are built (hereafter I'll refer to both of these as Gen AI).

This first stage is rife with ethical concerns. Popular Gen AI models don't just politely scrape what's available from the public domain or the creative commons; the entire internet (and in some cases <a href="https://www.theatlantic.com/technology/2026/06/ai-music-generators-suno-google-udio/687485/" target="_blank">stolen data uploaded to the dark web</a>) is fair game to them. If it's online anywhere, they'll likely find it and feed on it.

If an individual appropriates the artistic or intellectual work of another without permission or attribution, it would be a clear case of copyright violation. When corporations do it however, and do so on a global scale, indiscriminately hoovering up all of humanity's hard-earned cultural treasures, it is exempted by governments and celebrated by proponents as fair use, even when that use is at its core primed to put the livelihoods of those it has stolen the most from at risk. Writers, artists, musicians and others who have dedicated themselves to their craft, and upon whom these Gen AI models most depend, are pilfered from without a penny's compensation.

It is difficult not to see this as cultural theft on a colossal scale.

### The Absence of Understanding

There are those who might object that this is simply how Gen AI models *learn*. However, it's more accurate to say that they sample or lift (<a href="" target="_blank">or simply copy</a>) rather than learn from their training material. To give the broad strokes, this training material is first consumed (corresponding to the pre-training phase of a GPT) then translated into statistical probabilities (corresponding to the transforming phase) from which it can later produce output (corresponding to the generative phase). <a href="https://proceedings.iclr.cc/paper_files/paper/2024/hash/ce208d95d020b023cba9e64031db2584-Abstract-Conference.html" target="_blank">It does not possess the ability to understand</a> this material, and understanding is a critical component of learning.

While a Gen AI system doesn't retrieve content from a database in any conventional sense, its source data is nonetheless retained, albeit in a highly obfuscated form. This explains why it is still possible for it to output, verbatim, copyrighted passages of text - and <a href="https://arxiv.org/abs/2601.02671" target="_blank">as recent studies have shown, entire books</a> - that it has been trained on. Turning down the "temperature" setting of a Gen AI system aligns it more closely with its source material, while turning it up creates more random departures. The latter is what can lead to novelty, but also hallucinations (and at the highest settings, pure nonsense).

## The Environment

Thanks to Gen AI, we're now sprinting rather than running towards climate disaster. And while our efforts to halt runaway climate change were despair-inducing long before Gen AI reared its energy-hungry head, it at least didn't feel like we were <a href="https://futurism.com/artificial-intelligence/pollution-ai-data-centers-severe" target="_blank">going backwards</a>.

Previously decommissioned coal and gas power plants have come back online to service the surge in demand caused by widespread Gen AI usage, and many data centre developments that were previously under pollution thresholds are now expanding and adding their own on-site diesel generators to deal with demand.

Ireland (where I live) has been cited as a "cautionary" tale in <a href="https://unu.edu/inweh/collection/environmental-cost-of-AIs-Enrgy-Use-Carbon-water-and-land-footprints" target="_blank">a UN report on the environmental impact of Gen AI</a>. Data centres here consume more electricity than all our domestic urban dwellings combined, and it's perhaps no surprise that <a href="https://www.rte.ie/news/business/2026/0506/1571946-ireland-electricity-prices/" target="_blank">we boast the highest energy prices in Europe</a>. A grim reminder of what happens when demand comically outstrips infrastructure.

AI data centres, i.e. data centres designed specifically to handle the computationally-intensive tasks of training and running Gen AI applications, have become a new scourge on society; from <a href="https://futurism.com/science-energy/county-37-data-centers-schools-conserve-power" target="_blank">competing with schools for power</a>, <a href="https://heated.world/p/data-centers-arent-just-guzzling" target="_blank">poisoning community drinking water</a>, to <a href="https://futurism.com/future-society/family-sell-home-data-center-georgia-power" target="_blank">forcing locals off their land</a> or <a href="https://futurism.com/science-energy/data-center-screeching-noise-house" target="_blank">driving them insane with the noise</a> if they stay, it's safe to say they aren't popular (further evident from the <a href="https://news.harvard.edu/gazette/story/2026/04/why-are-communities-pushing-back-against-data-centers/" target="_blank">growing pushback</a>).

### But AI Will Fix It!

There is a curious breed of magical thinking behind many positions like this. "AI will fix **X**", "AI will cure **Y**" etc. The example of the climate crisis is particularly egregious and surprisingly widespread (or perhaps not so surprisingly, considering how <a href="https://www.theguardian.com/environment/2025/jun/19/climate-misinformation-turning-crisis-into-catastrophe-ipie-report" target="_blank">widespread climate misinformation still is</a>). To fix the climate crisis we don't need some as-yet-uninvented technological solution that a super-intelligent AI from the future will bequeath to us; we already know what we need to do, we're just not doing it.

And I wouldn't even mention this point here were it not for the fact that some forms of AI (**not** Gen AI) can help make certain climate-related tech more efficient, but the same technology is also <a href="https://globalwitness.org/en/campaigns/digital-threats/enabled-emissions-how-ai-helps-to-supercharge-oil-and-gas-production/" target="_blank">supercharging the process of fossil fuel extraction</a>.

## The Trauma of Training

Human labour powers a far greater portion of the Gen AI pipeline than most people realise. After data is scraped from the web by AI crawlers, it needs to be painstakingly sorted and annotated, usually by low-paid gig workers in the global south. Approximately 80% of the time spent training AI consists of annotating datasets, which involves workers performing at a furious pace under oppressive and precarious conditions. <a href="https://www.theguardian.com/technology/article/2024/jul/06/mercy-anita-african-workers-ai-artificial-intelligence-exploitation-feeding-machine" target="_blank">As tech commentator Phil Jones puts it</a>:

> The magic of machine learning is the grind of data labelling.

But this isn't even the worst part. To ensure frontier Gen AI models aren't racist psychopaths upon their release (they're trained on the entire content of the internet after all), they need to go through an intensive moderation phase. And this involves users pushing these systems to their limits to elicit the most depraved responses imaginable (whether in the form of text, images or video). And if the models "take the bait" so to speak, ad hoc filters are put in place to suppress this content when the model is released to the public.

These are how the famously fragile "guardrails" we hear about are created, guardrails that can often be circumvented by persistent users, or <a href="https://www.forbes.com/sites/lanceeliot/2025/08/29/openai-acknowledges-that-lengthy-conversations-with-chatgpt-and-gpt-5-might-regrettably-escape-ai-guardrails/" target="_blank">can simply fall away following persistent use</a>.

Concrete examples of how content moderators push these models are truly harrowing. In the case of one of Meta's outsourcing clients Covalen, workers training their Llama models were told to "think like paedophiles" seeking out graphic and/or violent CSAM material, and others revealed how they would spend entire shifts pretending to be suicidal.

> Every day, 150 times a day, I wrote prompts asking an AI how to kill or hurt myself... You cannot imagine what that is like. Eventually - and I really think it would be the same for anyone - those thoughts started to feel normal.

This particular worker was so impacted by this that they started to self-harm in their real life, and with no previous history of this behaviour.

<a href="https://www.thejournal.ie/meta-workers-ireland-6745653-Jul2025/" target="_blank">Source: The Journal Investigates</a>

Other unfortunate workers training Open AI's ChatGPT describe how they were tasked with reviewing text and images describing and depicting the worst forms of human depravity imaginable (acts I'm afraid to even type out, so I'll just link to <a href="https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai" target="_blank">the Guardian's investigation</a>) and how their personal lives literally fell apart afterwards.

## From Sycophancy to Psychosis

During what's called the post-training phase, moderators are tasked with choosing the most optimal outputs for particular responses, and the Gen AI model parameters are then tweaked accordingly. This often involves selecting the answer that would be considered the most 'pleasing' to the end user and that encourages further engagement. In other words, Gen AI models are tuned to be sycophantic (i.e. they gain favour through flattery) and are <a href="https://www.404media.co/microsoft-wants-to-make-people-addicted-to-scout-its-new-ai-assistant-internal-documents-reveal/" target="_blank">intentionally designed to be addictive</a>.

This can, and has, lead to psychological dependence and exacerbation of mental health crises for users of AI chatbots. <a href="https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis" target="_blank">The term "AI Psychosis" has been coined to capture this phenomenon</a>, and has resulted in a steady stream of lawsuits against AI companies. Tragically, in many cases these are filed by the families of <a href="https://www.probiologists.com/article/digital-companions-real-casualties-a-commentary-on-rising-ai-related-mental-health-crises" target="_blank">users lost to suicide</a>.

The anthropomorphising at the heart of interactions with conversational AI chatbots essentially weaponises our empathy. Psychotherapists have warned of these dangers as <a href="https://www.theguardian.com/society/2025/aug/30/therapists-warn-ai-chatbots-mental-health-support" target="_blank">vulnerable individuals increasingly turn to them for emotional support</a>.

## Cognitive and Creative Decline

If there were a single reason to oppose the widespread use of Gen AI, this is a strong candidate. It's certainly the reason that gives me the most cause for concern. We're only in the early days and it's already pretty incontestable that the idea of us "augmenting" our cognitive abilities with Gen AI is for the most part wishful thinking, and at worst, downright deception on par with social media giants promising us greater connection.

It's important here not to conflate increased productivity with augmenting our cognitive abilities. Use of Gen AI can in some cases lead to increased productivity (of a rather shallow and short-sighted kind I would argue), but even given that such gains are possible, are they worth pursuing if they can do us active damage?

### Degenerative Brain Transformers

As the following sample of recent studies indicate, overuse of Gen AI can contribute to cognitive decline, particularly in areas such as memory, problem-solving and critical thinking.

- <a href="https://arxiv.org/abs/2506.08872" target="_blank">A 2025 MIT study</a> found that participants who used Gen AI to help with essay writing showed lower memory retention, weaker brain connectivity and a diminished sense of ownership over their work. These deficiencies persisted even after participants stopped using AI, suggesting long-term effects on brain activity.
- <a href="https://edsource.org/updates/students-using-artificial-intelligence-did-worse-on-tests-experiment-shows" target="_blank">A 2024 University of Pennsylvania study</a> showed that students who relied on Gen AI for practice problems performed worse on tests than those who completed the practice problems without AI assistance, and that using Gen AI as a crutch can 'substantially inhibit learning'.
- <a href="https://businessesgrow.com/2025/02/12/cognitive-decline/" target="_ blank">A 2025 survey on knowledge workers</a> conducted by Carnegie Mellon University and Microsoft found that the more workers trusted the outputs of LLMs the less cognitive effort they applied to their work, and that an over-reliance on these tools can erode critical thinking skills.
- <a href="https://www.polytechnique-insights.com/en/columns/neuroscience/generative-ai-the-risk-of-cognitive-atrophy/" target="_blank">A 2025 review of multiple studies</a> highlighted the very real risk of overall cognitive atrophy owing to Gen AI usage, citing reduced memory retention and cognitive engagement, particularly in tasks such as essay writing.

The trend is pretty clear: use it or lose it. If you were at a gym, would you be surprised at losing muscle mass if you consistently left the lifting to the machines? It's the same with your brain.

In addition to this, there's evidence to show that Gen AI makes us *feel* more confident in our opinions even as the risk of error increases. Researchers from three French and Italian universities found that <a href="https://thenextweb.com/news/ai-advice-suppresses-critical-thinking-wrong-answers-study"  target="_blank">advice from AI made people three times less accurate but more than twice as confident</a>. Specifically, AI advice suppressed judgment suspension (i.e. the ability to say "I don't know") from 44% to 3%, accuracy from 27% to 9%, while confidence rose from 30% to 76%. Socrates would truly be rolling in his grave.

> Advice from AI made people three times less accurate but more than twice as confident.

### Crippling Creativity

This deterioration of our judgement and capabilities isn't confined to the cognitive sphere. Creatively, Gen AI is more likely to cripple than enhance our skills, whether we're talking art, music or literature. 

Even in studies showing how individual creativity can be boosted (crucially, such studies only evaluate output, not creative ability, so is more of an observation on productivity), it was also found that <a href="https://knowledge.wharton.upenn.edu/article/does-ai-limit-our-creativity/" target="_blank">Gen AI reduces the collective diversity of novel content</a>. Output from users of AI clustered around the same concepts, whereas human-only groups produced more unique ideas.

This is consistent with other studies showing different Gen AI models converge on the same output across open-ended tasks, <a href="https://hechingerreport.org/proof-points-ai-similarity/" target="_blank">sometimes even using identical phrasing</a>. Jumping from model to model, therefore, is unlikely to lead to a greater diversity of output as these models are essentially consensus machines that favour the uncontroversial middle-ground (or <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1651354/full" target="_blank">generative midtended cognition</a>), so the result is a little like using different straws to drink from the same bowl.

More anecdotally, <a href="https://www.404media.co/we-are-living-in-a-chatgpt-flyer-pandemic/" target="_blank">404 Media curated a collection of AI-generated flyers</a> sent in by users that show the slovenly sameness of creative output that is invading so many small businesses. Maybe you've even seen one yourself. This might seem like a relatively harmless phenomenon but is indicative of a deeper problem: <a href="https://www.bloodinthemachine.com/p/artists-are-losing-work-wages-and" target="_blank">artists and illustrators are getting much less work than before</a> and are being given less opportunity and/or incentive to flex their artistic skills owing to the ease with which businesses can produce acceptable (or what they deem as acceptable) creative work. And even in cases where artists are employed, many report being reduced to refining or tracing over AI-generated images, rather than creating original work themselves.

This further removal of practitioners from the *process* of their craft, and the <a href="https://arxiv.org/html/2502.03940v1" target="_blank">valuing of efficiency over creative exploration</a>, isn't unique to the visual arts. Musicians and writers are also facing a similar crisis. Tasks like composing corporate jingles or backing tracks for videos, once the bread-and-butter of a budding composer, are being swallowed up by AI. The same can be said of many entry-level writing jobs; AI-generated copy for e-mail newsletters and blog posts are becoming increasingly normalised, <a href="https://www.theverge.com/ai-artificial-intelligence/967630/dave-eggers-openai-chatgpt-silencing-an-entire-generation" target="_blank">reducing the opportunities for a whole generation of writers to hone their craft and find their voice</a>.


## The Crisis in Education

Some commentators argue that generative AI <a href="https://nymag.com/intelligencer/article/openai-chatgpt-ai-cheating-education-college-students-school.html" target="_blank">challenges the entire enterprise of education</a>, its very *raison d'être*, i.e. to cultivate and develop our minds and souls (or sensibilities). The cognitive decline just covered is intimately tied into this crisis, but the problem is sufficiently severe to warrant its own section.

Gen AI is hitting education hard.

As more and more students and teachers rely on it to summarise long swathes of text, write essays and even produce educational material, <a href="https://theconversation.com/how-generative-ai-is-really-changing-education-by-outsourcing-the-production-of-knowledge-to-big-tech-263160" target="_blank">our fundamental relationship to knowledge itself is put in question</a>. Models that <a href="https://arxiv.org/abs/2508.01191v3" target="_blank">mimic reasoning</a> and <a href="https://www.science.org/doi/10.1126/science.aea3922" target="_blank">have no regard for truth</a> are increasingly relegating us to mere "thought-partners" rather than the independent thinkers that the education system should encourage us to be.

That's not to say educational institutions didn't have serious systemic issues before Gen AI came along. The latter, however, has hoisted these to new heights: <a href="https://fortune.com/2026/06/29/roberto-serrano-brown-university-massacre-ai-cheating/" target="_blank">cheating is off the charts</a>, to the point where universities are having to rethink long-established testing methods, and intellectual engagement with course material is so low that once-lively discussion groups now consist of listless students parrotting whatever points their favourite GPTs feed them in real time.

### It's Not Just Students

We can't put all the blame on the students though. There are plenty speaking out about their discontent with the impact Gen AI is having on their educations and their future, and the recent spate of <a href="https://www.theatlantic.com/ideas/2026/05/ai-graduation-speeches-booing/687266/" target="_blank">booing at both commencement and graduation speeches at the mere mention of AI</a> is indicative of this discontent.

<a href="https://www.theguardian.com/education/2025/nov/20/university-of-staffordshire-course-taught-in-large-part-by-ai-artificial-intelligence" target="_blank">Students at the University of Staffordshire</a> "felt robbed of knowledge and enjoyment" when it became evident that the course material they were being given was in large part churned out by AI, including voice-overs. A student who challenged one of the lecturers remarked that:

> If we handed in stuff that was AI-generated, we would be kicked out of the uni, but we’re being taught by an AI.

The highlights the hypocrisy of some educators that penalise students for their use of AI while feeling free to take the same shortcuts themselves.

Other educators have gone much further and outsourced teaching entirely. In so-called Alpha Schools, kids are tutored by chatbots, tightly surveilled and <a href="https://www.404media.co/students-are-being-treated-like-guinea-pigs-inside-an-ai-powered-private-school/" target="_blank">often fed faulty lesson plans containing hallucinated material</a>. Expecting any student, particularly a child, to be able to discern truth from falsity in material that they're being taught is, as some academics rightly argue, <a href="https://www.tandfonline.com/doi/full/10.1080/13562517.2025.2497263?trk=feed_main-feed-card_feed-article-content" target="_blank">pedagogically perverse</a>.

## The AI Slopademic

Also referred to as the <a href="https://redmonk.com/kholterhoff/2026/02/03/ai-slopageddon-and-the-oss-maintainers/" target="_blank">AI Slopageddon</a>, this refers to the phenomenon of AI Slop, i.e. low-effort AI-generated content, flooding the internet. The term AI Slop gained traction as soon as generative AI content began to drown out human-generated content on most social platforms. It is an issue that is supercharging the process <a href="https://web.archive.org/web/20240208152542/https://www.ft.com/content/6fb1602d-a08b-4a8c-bac0-047b7d64aba5" target="_blank">Cory Doctorow christened **Enshittification**</a>, and is so pervasive and proliferating at such a rapid pace that it's effectively <a href="https://www.404media.co/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet/" target="_blank">destroying the human internet as we know it</a>.

### Cultural Slop

Human-created content on YouTube is being increasingly sidelined by mass-produced AI-generated videos that can be churned out so quickly and with such little effort that they can more easily exploit the algorithms that govern these platforms in order to 'see what sticks' (so the most successful content is both sloppy *and* sticky). It's particularly worrying when it comes to genres like history, where <a href="https://www.404media.co/ai-generated-boring-history-videos-are-flooding-youtube-and-drowning-out-real-history/" target="_blank">AI-generated content rife with historical inaccuracies are drowning out videos by real historians</a> who take the time to carefully research their source materials in order to accurately portray the past.

In music, the rising tide of AI Slop is overwhelming popular streaming platforms like Spotify and Deezer and robbing what little revenue real musicians get (and often <a href="https://www.404media.co/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission/" target="_blank">robbing their identities too</a>). In addition to musicians being <a href="https://www.theverge.com/entertainment/907111/murphy-campbell-folk-music-ai-copyright" target="_blank">understandably up-in-arms</a> when they are impersonated and stolen from, users are also getting frustrated at finding AI slop slip into their playlists, deceiving them into thinking they're listening to real artists. Some platforms like Deezer are making efforts to label music generated by AI, but Spotify has yet to take similar measures. Sites like <a href="https://sloptracker.org/" target="_blank">sloptracker.org</a> and <a href="https://soullessmusic.com/" target="_blank">soullessmusic.com</a> have stepped in to remedy this, but such efforts, while admirable, feel rather futile when they're not being made by the platforms themselves.

Amazon is another case in point, where no efforts are being made to label the <a href="https://futurism.com/amazon-kindle-ai-ads" target="_blank">avalanche of AI Slop hitting their marketplace</a> and masquerading as original literature. Authors who take the time to write their own books and develop their own style - think Donna Tartt, who took ten years to pen The Goldfinch - are being indiscriminately copied, while others boast of belching out new books in as little as 45 minutes with AI (the same so-called novelist <a href="https://futurism.com/artificial-intelligence/ai-novelist" target="_blank">claimed to have published two hundred books in a single year</a> using several pseudonyms).

Adding insult to injury, AI companies, averse to swallowing their own slop, <a href="https://www.404media.co/ai-companies-are-buying-tons-of-old-books-because-theyre-free-of-ai-slop/" target="_blank">seek out older books (pre-2022) guaranteed to be free of it</a>, in and so doing, shred their spines and destroy them. Tragically, this includes rare and antique books.

If this doesn't epitomize the parasitic effect Gen AI has on human culture, I don't know what does; find a host, drain it for all it's worth, and when it gets too sick and slop-infested to support you, hop on to the next host.
### Work Slop

Tech bros and AI boosters are fond of making predictions of mass unemployment due to the generative AI rollout, but when put to the test, even the best Gen AI models <a href="https://www.washingtonpost.com/technology/interactive/2026/ai-jobs-automation/" target="_blank">can only complete a small percentage of real-world assignments</a>. The reality is that AI's impact on most employees is more mundane.

Many workers report being pressured to adopt it without any evidence of its efficacy for their particular role or proof that it will deliver on <a href="https://futurism.com/artificial-intelligence/ai-failing-boost-productivity" target="_blank">its productivity promises</a>, while others report encountering <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity" target="_blank">increased instances of "workslop"</a>, i.e. work that has the appearance of rigour and depth but falls apart on closer inspection, ultimately creating more work for colleagues and decreasing job satisfaction.

Vibe-coding, i.e. using AI to generate code, is having a similarly detrimental effect on software development, <a href="https://www.ox.security/blog/vibe-coding-security/" target="_blank">increasing security vulnerabilities</a>, <a href="https://www.kunalganglani.com/blog/ai-slopageddon-open-source-crisis" target="_blank">threatening the sustainability of open-source projects</a> (owing to lazy "drive-by" merge requests) and causing <a href="https://www.businessinsider.com/software-engineers-face-an-ai-identity-crisis-vc-partner-says-2026-6"  target="_blank">a crisis of meaning "bordering on depression"</a> among developers who still value the craft of writing code.

## Information Integrity

Information has never been so abundant, but we've never trusted it less. The proliferation of AI-generated content <a href="https://www.frontiersin.org/journals/political-science/articles/10.3389/fpos.2026.1811974/full" target="_blank">only adds to this problem</a> in an already-polarised online environment, where appeals to emotion and group identity often override any concern for factual accuracy.

Bastions of said factual accuracy and public record, such as libraries, museums and encyclopedias are under serious strain and in some cases existential threat as <a href="https://www.404media.co/ai-scraping-bots-are-breaking-open-libraries-archives-and-museums/" target="_blank">AI bots swarm and overwhelm their servers</a> in order to siphon off training data. Wikipedia, once open to using Gen AI, <a href="https://www.theguardian.com/technology/2026/mar/27/wikipedia-bans-ai" target="_blank">has been forced to adopt a no-tolerance policy to AI-generated articles</a> due to editors (a community of volunteers) being inundated with rising incidents of submissions containing hallucinations and other inaccuracies.

### Deepfakes and Disinformation

AI-generated deepfakes, i.e. synthetic media depicting events that never occurred, have increased in sophistication to the point where <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1155/hbe2/1833228" target="_blank">the average user of social media is unable to reliably detect them.</a> This is a gift for malicious actors of all kinds, from grifters and governments to cyber-criminals and sexual predators. <a href="https://www.theguardian.com/technology/2026/jul/27/misleading-ai-generated-doctors-public-safety-danger-tiktok" target="_blank">AI-generated doctors</a> dispensing dangerous health advice abound on Tiktok while <a href="https://www.theguardian.com/technology/2026/jan/11/google-ai-overviews-health-guardian-investigation" target="_blank">Google's AI Overviews are often guilty of the same</a>; AI-powered identity fraud <a href="https://www.prnewswire.com/news-releases/ai-generated-identity-fraud-dominates-financial-services-as-confirmed-fraud-rates-rise-across-every-sub-sector-new-au10tix-data-shows-302821547.html" target="_blank">is now the dominant threat facing financial institutions</a>; autocratic and democratic governments alike are getting in on the game and <a href="https://www.technologyreview.com/2023/10/04/1080801/generative-ai-boosting-disinformation-and-propaganda-freedom-house/" target="_blank">using AI to manipulate public opinion and crack down on internet freedom</a>, and to even <a href="https://arxiv.org/html/2405.01859v1" target="_blank">recommend military action</a>; and recent data from the Internet Watch Foundation recorded a staggering <a href="https://fortune.com/2026/04/03/internet-watch-foundation-260-fold-increase-ai-generated-csam/" target="_blank">260-fold increase in AI-generated child sexual abuse material in 2025</a> compared to 2024, as experts insist it's only the tip of the iceberg.

## Wrapping Up

Whew... That was longer than anticipated. And after that last paragraph I'm honestly too exhausted to give a summary. AI could no doubt do a decent job at that (it loves an old summary table), but I draw the line at getting it to write or indeed create anything for me. If you're looking for that <abbr title="Too Long Didn't Read">TLDR</abbr> takeaway, the table of contents will have to do!

My parting words: hold on to your humanity. Defend it against attempts to automate your inner life. Don't rely on generative AI.
