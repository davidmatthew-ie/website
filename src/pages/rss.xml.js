import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	// Filter drafts out of production and sort posts by date.
	const posts = (await getCollection('posts'))
		.filter((post) => !import.meta.env.PROD || post.data.draft !== true)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()
	);
  return rss({
    title: 'David Matthew | Music, Creative Coding, Web Development',
    description: 'The RSS feed of the Irish musician, technical author and web developer David Matthew.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.id}/`,
    }))
  });
}