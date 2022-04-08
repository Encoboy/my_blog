---
title: Hexo博客搭建记录
date: 2022-04-07 16:48:58
tags: 博客搭建
categories: Hexo
---

记录自己搭建博客的一个大致过程。几天前看到某个博客网站，也想着自己搭建一个来玩玩，然后就开始了三天的搭建博客的旅程。搭建博客并不难(非专业可能会有些困难:joy:)，主要是改主题还是费些时间。

### 第一步 了解

首先大概了解搭建博客的一个过程，先浏览完(<https://www.zhihu.com/column/c_1201860091307458560>)对如何搭建博客的一个过程有一个清晰的了解。

### 第二步 博客初始化

因为电脑安装有 node，自已也有 github 账号。
所以主要的操作步骤在第 5 篇文章(<https://zhuanlan.zhihu.com/p/105715224>)，这样一个初始化的博客就完成了。

### 第三步 选主题

博客主题有很多，可以直接在官网查看(<https://hexo.io/themes/>)。
主题我选择的是 hexo-theme-matery (<https://github.com/blinkfox/hexo-theme-matery>)，然后一步一步配置主题， 这个主题有个缺点就是音乐播放切换页面会停止，作者说暂时不弄这个了。
自己弄了一个下午还是弄不好，最后在 Issues 上找到了大佬对该主题进行了魔改(<https://github.com/ialoe/hexo-themes-matery-pro>)，所以直接更换了主题，但是某些脚本在切换页面之后还是没有执行，这个大概是大佬没有将细节优化到位，之后只能慢慢修改了。

### 第四步 发表文章

在官网(<https://hexo.io/zh-cn/docs/index.html>)了解 hexo 如何新建博客。
了解使用 markdown (<https://segmentfault.com/a/1190000040651943>)写文章，发布一篇文章。
可以通过命令 **hexo new page --path myblog** 新建一篇文章，新建的文章在 source 文件夹里生成一个 myblog.md 的文件。然后就可以在这个文件里写文章了。

### 第五步 使用域名和服务器

因为 github 上访问本来就很慢，也想试试自己弄个域名和服务器来玩玩。
然后在腾讯云(<https://cloud.tencent.com>)上买了个一年期限的域名 5 元和服务器 45 元。
部署参考的是(<https://www.bilibili.com/read/cv7005164>)，但是我的没有直接成功，因为我买的服务器是 centerOS 的，所以和参考文章有些不一样，然后在小伙伴的帮助下解决了，主要是服务器上的 nginx.conf 配置错了，导致访问不到页面。

这样我的博客也就全部搭建完成了，主题日后再慢慢进行修改。
