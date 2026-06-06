import { SITE } from "../site.config";
import { getPublishedPosts } from "../utils/posts";

export async function GET() {
  const posts = await getPublishedPosts();

  return new Response(
    JSON.stringify(
      {
        version: "https://jsonfeed.org/version/1.1",
        title: SITE.title,
        home_page_url: SITE.url,
        feed_url: new URL("/feed.json", SITE.url).toString(),
        description: SITE.description,
        language: "zh-CN",
        authors: [{ name: SITE.author, url: SITE.url }],
        items: posts.map((post) => {
          const url = new URL(`/posts/${post.id}/`, SITE.url).toString();

          return {
            id: url,
            url,
            title: post.data.title,
            summary: post.data.description,
            date_published: post.data.pubDate.toISOString(),
            tags: post.data.tags,
            image: post.data.cover ? new URL(post.data.cover, SITE.url).toString() : undefined,
          };
        }),
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/feed+json; charset=utf-8",
      },
    },
  );
}
