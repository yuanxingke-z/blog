const host = "blog.zhoub2.top";
const key = "b01dc2c5a3ca42efbf9b45a707b6c88a";
const site = `https://${host}`;

const urlList = [
  "/",
  "/posts/",
  "/posts/blog-birth/",
  "/tags/",
  "/tags/博客/",
  "/tags/建站/",
  "/tags/程序员/",
  "/tags/随笔/",
  "/rss.xml",
  "/sitemap-index.xml",
].map((path) => new URL(path, site).toString());

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${site}/${key}.txt`,
    urlList,
  }),
});

const text = await response.text();

if (!response.ok) {
  throw new Error(`IndexNow submission failed: ${response.status} ${text}`);
}

console.log(`Submitted ${urlList.length} URLs to IndexNow.`);
