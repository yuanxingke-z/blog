const tagDescriptions: Record<string, string> = {
  博客: "关于个人博客、写作系统、内容发布和小站运营的记录。",
  建站: "记录域名、部署、托管、DNS、评论系统和网站优化相关折腾。",
  程序员: "关于程序员日常、开发经验、工具使用和技术生活的随笔。",
  随笔: "一些日常观察、生活片段、阅读感受和不那么严肃的想法。",
};

export function getTagDescription(tag: string) {
  return tagDescriptions[tag] ?? `围绕 ${tag} 这个主题整理的文章合集。`;
}
