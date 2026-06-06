# 缓慢记录

一个基于 Astro 的个人生活随笔博客。文章使用 Markdown 管理，适合部署到 Vercel。

## 常用命令

```sh
npm install
npm run dev
npm run build
npm run preview
```

## 写新文章

在 `src/content/posts/` 下新增 `.md` 文件，并填写 frontmatter：

```md
---
title: "文章标题"
description: "文章摘要"
pubDate: 2026-06-06
tags: ["日常"]
cover: "/images/example.svg"
featured: false
---
```

## 站点配置

站点名称、简介、作者和导航在 `src/site.config.ts` 中维护。

## 评论功能

评论使用 Waline。博客前端只读取公开服务地址，不保存评论数据。

本地开发时新建 `.env`，填入你的 Waline Server 地址：

```sh
PUBLIC_WALINE_SERVER_URL=https://your-waline-server.vercel.app
```

部署到 Vercel 时，在 Project Settings -> Environment Variables 中添加同名变量。

部署到阿里云 ESA 时，也需要在 ESA 的构建环境变量中添加同名变量；如果是本地构建后上传 `dist`，则需要在本地 `.env.production` 或构建命令环境中提供：

```sh
PUBLIC_WALINE_SERVER_URL=https://your-waline-server.example.com
```

`PUBLIC_WALINE_SERVER_URL` 是前端公开变量，不是密钥。缺少它时，静态页面会显示“评论服务尚未配置”。

如果国内直连 Vercel 上的 Waline Server 不稳定，建议给 Waline Server 绑定一个独立评论域名（例如 `https://comments.example.com`），并把 `PUBLIC_WALINE_SERVER_URL` 指向该域名；仍不稳定时，将 Waline Server 迁移到国内可直连的平台。

Waline Server 需要单独部署，并在服务端开启评论审核。建议配置为游客可评论、昵称必填、评论先审后显。
