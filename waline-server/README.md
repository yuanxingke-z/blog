# Waline Server

这个目录是博客评论系统的 Waline Server，独立部署到 Vercel。

需要在 Vercel 项目环境变量中配置数据库和站点信息，常用项：

```sh
SITE_NAME=缓慢记录
SITE_URL=https://blog.zhoub2.top
SERVER_URL=https://blog-waline-server-olive.vercel.app
SECURE_DOMAINS=blog.zhoub2.top,blog-brown-nu-53.vercel.app,blog-waline-server.vercel.app,blog-waline-server-olive.vercel.app,localhost,127.0.0.1
COMMENT_AUDIT=true
LOGIN=disable
```

其中：

- `SERVER_URL` 填 Waline Server 对外访问地址，建议使用独立评论域名。
- `SECURE_DOMAINS` 需要包含所有会加载评论组件的站点域名，以及 Waline Server 自身域名。
- 修改 Vercel 环境变量后必须重新部署 Waline Server 才会生效。

数据库可使用 Waline 支持的 PostgreSQL、MySQL、MongoDB、LeanCloud 等方案。Vercel Storage 的 Neon PostgreSQL 可使用 `POSTGRES_*` 环境变量。
