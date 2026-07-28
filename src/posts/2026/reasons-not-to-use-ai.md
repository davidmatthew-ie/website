---
title: Good Reasons Not to Use or Rely on Generative AI
description: An organised collection of (what I consider to be) sensible, defensible reasons not to use or rely on Generative AI.
slug: draft-1
date: 2026-07-15
tags:
  - x
  - AI
draft: true
---
The purpose of this post is to gather as many sensible, defensible reasons against the use of (or reliance on) Generative AI as I can; for myself, really. To weed out what it is exactly that bothers me the most. The world hardly needs another AI opinion piece (destined to be gobbled up by AI itself), but in compiling these points I thought I'd share them in case other like-minded folk found them useful.

It is not a rant against every possible use of AI or a condemnation of those who use it. I occasionally use Mistral and Claude for debugging and help with very specific web searches (in large part due to the <a href="https://link.springer.com/chapter/10.1007/978-3-031-56063-7_4" target="_blank">decline in quality of search engine results</a>), but if you don't (or rarely) use AI and feel like you're being "left behind", perhaps this piece will provide some solace.

## Colossal Cultural Thievery

It all begins with data gathering; the foundation upon which <abbr title="Large Language Models">LLMs</abbr> and other <abbr title="Generative Pre-trained Transformers">GPTs</abbr> are built (hereafter I'll refer to both of these as Gen AI).

This first stage is rife with ethical concerns. Popular Gen AI models don't just politely scrape what's available from the public domain or the creative commons; the entire internet (and in some cases <a href="https://www.theatlantic.com/technology/2026/06/ai-music-generators-suno-google-udio/687485/" target="_blank">stolen data uploaded to the dark web</a>) is fair game to them. If it's online anywhere, they'll likely find it and feed on it.

If an individual appropriates the artistic or intellectual work of another without permission or attribution, it would be a clear case of copyright violation. When corporations do it however, and do so on a global scale, indiscriminately hoovering up all of humanity's hard-earned cultural treasures, it is exempted by governments and celebrated by proponents as "fair use", even when that use is at its core primed to put the livelihoods of those it has stolen the most from at risk. Writers, artists, musicians and others who have dedicated themselves to their craft, and upon whom these Gen AI models most depend, are pilfered from without a penny's compensation.

It is difficult not to see this as theft, pure and simple.

### Lifting, Not Learning

There are those who might object that this is simply how Gen AI models *learn*. However, it's more accurate to say that they sample or lift (<a href="" target="_blank">or simply copy</a>) rather than learn from their training material. To give the broad strokes, this training material is first consumed (corresponding to the pre-training phase of a GPT) then translated into statistical probabilities (corresponding to the transforming phase) from which it can later produce output (corresponding to the generative phase). <a href="https://proceedings.iclr.cc/paper_files/paper/2024/hash/ce208d95d020b023cba9e64031db2584-Abstract-Conference.html" target="_blank">It does not possess the ability to understand</a> this material, and understanding is a critical component of learning.

While a Gen AI system doesn't retrieve content from a database in any conventional sense, its source data is nonetheless retained, albeit in a highly obfuscated form. This explains why it is still possible for it to output, verbatim, copyrighted passages of text - and <a href="https://arxiv.org/abs/2601.02671" target="_blank">as recent studies have shown, entire books</a> - that it has been trained on. Turning down the "temperature" setting of a Gen AI system aligns it more closely with its source material, while turning it up creates more random departures. The latter is what can lead to novelty, but also hallucinations (and at the highest settings, pure nonsense).

## The Environment

Thanks to Gen AI, we're now sprinting rather than running towards climate disaster. And while our efforts to halt runaway climate change were despair-inducing long before Gen AI reared its energy-hungry head, it at least didn't feel like we were <a href="https://futurism.com/artificial-intelligence/pollution-ai-data-centers-severe" target="_blank">going backwards</a>.

Previously decommissioned coal and gas power plants have come back online to service the surge in demand caused by widespread Gen AI usage, and many data centre developments that were previously under pollution thresholds are now expanding and adding their own on-site diesel generators to deal with demand.

Ireland (where I live) has been cited as a "cautionary" tale in <a href="https://unu.edu/inweh/collection/environmental-cost-of-AIs-Enrgy-Use-Carbon-water-and-land-footprints" target="_blank">a UN report on the environmental impact of Gen AI</a>. Data centres here consume more electricity than all our domestic urban dwellings combined, and it's perhaps no surprise that <a href="https://www.rte.ie/news/business/2026/0506/1571946-ireland-electricity-prices/" target="_blank">we boast the highest energy prices in Europe</a>. A grim reminder of what happens when demand comically outstrips infrastructure.

AI data centres, i.e. data centres designed specifically to handle the computationally-intensive tasks of training and running Gen AI applications, have become a new scourge on society; from <a href="https://futurism.com/science-energy/county-37-data-centers-schools-conserve-power" target="_blank">competing with schools for power</a>, <a href="https://heated.world/p/data-centers-arent-just-guzzling" target="_blank">poisoning community drinking water</a>, to <a href="https://futurism.com/future-society/family-sell-home-data-center-georgia-power" target="_blank">forcing locals off their land</a> or <a href="https://futurism.com/science-energy/data-center-screeching-noise-house" target="_blank">driving them insane with the noise</a> if they stay, it's safe to say they aren't popular. The good news though is that <a href="https://news.harvard.edu/gazette/story/2026/04/why-are-communities-pushing-back-against-data-centers/" target="_blank">there is growing public pushback</a>.

### But AI Will Fix It!

There is a curious breed of magical thinking behind many positions like this. "AI will fix **X**", "AI will cure **Y**" etc. The example of the climate crisis is particularly egregious and surprisingly widespread (or perhaps not so surprisingly, considering how <a href="https://www.theguardian.com/environment/2025/jun/19/climate-misinformation-turning-crisis-into-catastrophe-ipie-report" target="_blank">widespread climate misinformation still is</a>). To fix the climate crisis we don't need some as-yet-uninvented technological solution that a super-intelligent AI from the future will bequeath to us; we already know what we need to do, we're just not doing it.

And I wouldn't even mention this point here were it not for the fact that some forms of AI (**not** Gen AI) can help make certain climate-related tech more efficient, but the same technology is also <a href="https://globalwitness.org/en/campaigns/digital-threats/enabled-emissions-how-ai-helps-to-supercharge-oil-and-gas-production/" target="_blank">supercharging the process of fossil fuel extraction</a>.

## The Trauma of Training

Human labour powers a far greater portion of the Gen AI pipeline than most people realise. After data is scraped from the web by AI crawlers, it needs to be painstakingly sorted and annotated, usually by low-paid gig workers in the global south. Approximately 80% of the time spent training AI consists of annotating datasets, which involves workers performing at a furious pace under oppressive and precarious conditions. <a href="https://www.theguardian.com/technology/article/2024/jul/06/mercy-anita-african-workers-ai-artificial-intelligence-exploitation-feeding-machine" target="_blank">As tech commentator Phil Jones puts it</a>:

> The magic of machine learning is the grind of data labelling.

But this isn't even the worst part. To ensure frontier Gen AI models aren't racist psychopaths upon their release (they're trained on the entire content of the internet after all), they need to go through an intensive moderation phase. And this involves users pushing these systems to their limits in order to elicit the most depraved responses imaginable (whether in the form of text, images or video). And if the models "take the bait" so to speak, ad hoc filters are put in place to suppress this content when the model is released to the public.

These are how the famously fragile "guardrails" we hear about are created, guardrails that can often be circumvented by persistent users, or can simply fall away following persistent use.

Concrete examples of how content moderators push these models are truly harrowing. In the case of one of Meta's outsourcing clients Covalen, workers training their Llama models were told to "think like paedophiles" seeking out graphic and/or violent CSAM material, and others revealed how they would spend entire shifts pretending to be suicidal.

> Every day, 150 times a day, I wrote prompts asking an AI how to kill or hurt myself... You cannot imagine what that is like. Eventually - and I really think it would be the same for anyone - those thoughts started to feel normal.

This particular worker was so impacted by this that they started to self-harm in their real life, and with no previous history of this behaviour.

<a href="https://www.thejournal.ie/meta-workers-ireland-6745653-Jul2025/" target="_blank">Source: The Journal Investigates</a>

Other unfortunate workers training Open AI's ChatGPT describe how they were tasked with reviewing text and images describing and depicting the worst forms of human depravity imaginable (acts I'm afraid to even type out, so I'll just link to <a href="https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai" target="_blank">the Guardian's investigation</a>) and how their personal lives literally fell apart afterwards.

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

### Supercharged Enshittification

(Writing, Art, Video, Music)  
Further Enshittification of the Internet



### Workslop

The effect on employment, AI being forced on employees despite it not delivering on its productivity promises. Workers being fired and then re-hired under worse conditions (Klarna, video game artists)

### Information Integrity

Hallucinations and Lies  
Attacks on public libraries and archives, inclusion of fake articles on google scholar because they've been cited so much

====

https://www.404media.co/spotifys-ai-problem-is-so-bad-random-people-are-stepping-in-to-track-the-slop/

**Journal of Business Ethics (2026)**: This paper explores the "AI penalty," where AI-generated content is perceived as less valuable, less culturally significant, and fails to connect with audiences, undermining the meaningfulness of creative work.
[The Impacts of Generative AI on the Meaningfulness of Creative Work](https://link.springer.com/article/10.1007/s10551-026-06342-4)


“An Endless Stream of AI Slop”: The Growing Burden of AI-Assisted Software Development: https://arxiv.org/html/2603.27249v1

[AI Slopageddon: How AI-Generated Code Is Destroying Open Source](https://www.kunalganglani.com/blog/ai-slopageddon-open-source-crisis)

====






## From Sycophancy to Psychosis

Optimising for Engagement and weaponising dependence

## Deepfakes and Disinformation

## Unsorted Material


The messaging "Learn AI or get left behind" is equally ubiquitous, whether it takes the form of a LinkedIn post by a self-styled thought leader, or a new icon in the software you use every day that hops and wiggles, clamouring to be clicked. "I'm a new AI-powered feature that will 10x your productivity!" it promises.

But what really gets left behind when we use AI? And are there sensible, defensible reasons to opt out of its use (or not opt-in in the first place)?

Product over Process: AI is all about the final product, and the (much claimed) efficiency gains that come with that are at the expense of the process. Wow, ChatGPT whipped up a first draft in seconds - what a way to supercharge my productivity! Perhaps; perhaps not. Could there be value in staring at the blank page, or the blinking cursor? Could you in fact learn more during the struggle to fill out that first line?

Are you a thought leader or thought enfeebler?

The output can indeed be impressive (especially in a demo scenario), but behind every impressive and seemingly novel output hides an unfathomably massive collection of human input.




Resistance to Generative AI: Investigating the Drivers of Non-Use  
[https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/961d338d-c058-4fc8-b3e8-3753dc2f171e/content](https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/961d338d-c058-4fc8-b3e8-3753dc2f171e/content)

Ten reasons not to use AI for development and ten routes to more responsible use
[https://www.ids.ac.uk/opinions/ten-reasons-not-to-use-ai-for-development-and-ten-routes-to-more-responsible-use/](https://www.ids.ac.uk/opinions/ten-reasons-not-to-use-ai-for-development-and-ten-routes-to-more-responsible-use/)





Bots are breaking open librarires, archives and museums
[https://www.404media.co/ai-scraping-bots-are-breaking-open-libraries-archives-and-museums/](https://www.404media.co/ai-scraping-bots-are-breaking-open-libraries-archives-and-museums/)

Recent data from the  Internet Watch Foundation reveals a staggering [380% increase in reports of AI-generated CSAM](https://www.iwf.org.uk/news-media/news/new-ai-child-sexual-abuse-laws-announced-following-iwf-campaign/)  
[https://blogs.lse.ac.uk/parenting4digitalfuture/2025/06/18/the-intersection-of-ai-and-csam-a-reflection-on-the-uks-online-safety-act/](https://blogs.lse.ac.uk/parenting4digitalfuture/2025/06/18/the-intersection-of-ai-and-csam-a-reflection-on-the-uks-online-safety-act/)

The total number of deepfake videos online in 2023 was 550 percent higher than in 2019. [Deepfake pornography makes up 98 percent of all deepfake videos online](https://www.securityhero.io/state-of-deepfakes/), and 99 percent of the individuals targeted are women.  
[https://www.unwomen.org/en/articles/faqs/ai-powered-online-abuse-how-ai-is-amplifying-violence-against-women-and-what-can-stop-it](https://www.unwomen.org/en/articles/faqs/ai-powered-online-abuse-how-ai-is-amplifying-violence-against-women-and-what-can-stop-it)

‘Dangerous and alarming’: Google removes some of its AI summaries after users’ health put at risk. [https://www.theguardian.com/technology/2026/jan/11/google-ai-overviews-health-guardian-investigation](https://www.theguardian.com/technology/2026/jan/11/google-ai-overviews-health-guardian-investigation)


"The best-performing AI system successfully completed only 2.5 percent of the projects". Can AI do your job? See the results from hundreds of tests.  
[https://www.washingtonpost.com/technology/interactive/2026/ai-jobs-automation/](https://www.washingtonpost.com/technology/interactive/2026/ai-jobs-automation/)

UN report of AI environmental impact
https://news.un.org/en/story/2026/06/1167658





