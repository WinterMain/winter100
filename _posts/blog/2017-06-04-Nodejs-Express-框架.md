---
layout: post
title:  Node.js Express 框架
date:   2017-06-04T07:48:57.000Z
description: Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具...
img: https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3589619187,2148873006&fm=11&gp=0.jpg
author: Winter
category: blog
answer: 1
tags: 前端
topic: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content">##Express 简介##
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站。
*###end###*
##Express 框架核心特性##
>可以设置中间件来响应 HTTP 请求。
>定义了路由表用于执行不同的 HTTP 请求动作。
>可以通过向模板传递参数来动态渲染 HTML 页面。
*###end###*
##安装 Express##
```
$ cnpm install express --save
```
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， **node_modules** 目录下会自动创建 express 目录。
*###end###*
以下几个重要的模块是需要与 express 框架一起安装的：
>**body-parser** - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
>**cookie-parser** - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
>**multer** - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
*###end###*
安装完后，我们可以查看下 express 使用的版本号：
```
$ cnpm list express
/data/www/node
└── express@4.15.2  -> /Users/tianqixin/www/node/node_modules/.4.15.2@express
```</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2篇《Node.js Express 框架》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2017.06.14</span>
          </div>
          <div class="discuss-comment">JS IS STRONG</div>
        </div><div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment">哈哈哈</div>
            <div class="discuss-meta">
              <span class="discuss-user">OU</span>
              <span class="discuss-time">2017.06.16</span>
            </div>
          </div><div class="discuss-child">
            <div class="discuss-comment"><a id='2'>@小欧学姐</a>还可以啦</div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2017.06.16</span>
            </div>
          </div></div>
        </div>
    </div>
    {% endraw %}
  </div>
<div>
