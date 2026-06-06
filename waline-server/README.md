# Waline Server

这个目录是博客评论系统的 Waline Server，独立部署到 Vercel。

需要在 Vercel 项目环境变量中配置数据库和站点信息，常用项：

```sh
SITE_NAME=缓慢记录
SITE_URL=https://blog-brown-nu-53.vercel.app
SECURE_DOMAINS=blog-brown-nu-53.vercel.app
COMMENT_AUDIT=true
LOGIN=disable
```

数据库可使用 Waline 支持的 PostgreSQL、MySQL、MongoDB、LeanCloud 等方案。Vercel Storage 的 Neon PostgreSQL 可使用 `POSTGRES_*` 环境变量。
