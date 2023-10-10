---
layout: question
title:  ValidationError：无效的选项对象。CSS Loader已使用与API模式不匹配的选项对象进行了初始化
date:   2020-03-24T09:29:57.000Z
description: 我\`zeit/next-css用来将css文件导入到我的组件和页面文件中，但是却抛出了这个错误./styles/navbar.css导入此css文件到...
img: 
author: 斯丁
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>@zeit/next-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来将css文件导入到我的组件和页面文件中，但是却抛出了这个错误</font></font></p>

<p><code>./styles/navbar.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入此css文件到我的</font></font><code>navbar.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in组件中，出现此错误</font></font></p>

<pre><code>ValidationError: Invalid options object. CSS Loader has been initialised using<font></font>
     an options object that does not match the API schema.<font></font>
- options has an unknown property 'minimize'. These properties are valid:<font></font>
   object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals? }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在哪里</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></p>

<pre><code>const withCSS = require("@zeit/next-css");<font></font>
module.exports = withCSS();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的包json</font></font></p>

<pre><code>{<font></font>
  "name": "transfer-to",<font></font>
  "version": "0.1.0",<font></font>
  "private": true,<font></font>
  "scripts": {<font></font>
    "dev": "next dev",<font></font>
    "build": "next build",<font></font>
    "start": "next start"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "@zeit/next-css": "^1.0.1",<font></font>
    "isomorphic-unfetch": "^3.0.0",<font></font>
    "next": "9.0.7",<font></font>
    "react": "16.10.2",<font></font>
    "react-dom": "16.10.2"<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了临时解决您的问题，请从以下软件包中删除“ ^”符号：</font></font></p>

<pre><code>"dependencies": {<font></font>
    "@zeit/next-css": "1.0.1",<font></font>
    "@zeit/next-sass": "1.0.1",<font></font>
    "next": "9.0.2",<font></font>
    "node-sass": "4.12.0"<font></font>
    ...<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些软件包的更新版本似乎有问题。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
