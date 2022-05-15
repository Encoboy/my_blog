---
title: 编码规范
date: 2022-05-15 20:09:09
tags: 工作
categories: 前端
---

做项目编码的时候，要遵循一定的编程规范，这样项目在后期越来越复杂的时候，不会难以维护，更不会最后成为一座 shi 山。所以一个项目，需要定制一个好的规范，并且能让开发的人执行，是非常好的。下面是自己在开发 smart-cloud-fe 给自己约束的一些规范，以及项目的一些注释。

## 项目

主要分为 admin 端和工作台两个平台。

1. admin 端给管理员和超级管理使用，配置不同身份在工作台和 admin 端不同的权限，以及配置工作台的内容。
2. 工作台主要展示一些三方连接和应用链接。

## 启动

```bash
npm install
npm start
```

## 使用库

项目中使用到的库：

1. [Umi](https://umijs.org/zh-CN)
2. [antd](https://ant.design/components/overview-cn/)
3. [antd Pro](https://procomponents.ant.design/components/)
4. [Typescript](https://www.typescriptlang.org/)

## 自动化

项目中使用到的自动化：

1. gitlab-ci 自动化打包部署线上测试
2. openapi 执行 npm run openapi 获取 swagger 文档自动化生成接口直接使用。

## 编码规范

项目编码需要遵循的规范：

1. 命名规范：页面文件用小驼峰，组件文件用大驼峰，其他命名可以用小驼峰或者下划线。
2. 引入页面组件尽量使用相对路径(../../)，公共组件尽量使用绝对路径(@/)。
3. 提交 git，要尽量消除 git 提示的 error。
4. 引入组件的顺序：react 组件库，三方组件库，公共组件库，页面组件库，API，图片，css。
5. 备注：添加公共功能需要添加注释；css 修改 antd 的:global 样式，需要备注；新文件顶部需要备注该页面功能的名称。
