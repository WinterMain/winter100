---
layout: question
title:  nextjs-在开发模式下使用_error.js
date:   2020-03-24T03:17:17.000Z
description: 因此，我在nextjs应用程序上创建了一个自定义错误页面。按照文档进行操作后，我创建了一个_error.js带有视图的文件（在中React）我的问题是...
img: 
author: 蛋蛋猿
category: question
answer: 2
tags: 错误处理 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我在nextjs应用程序上创建了一个自定义错误页面。</font><font style="vertical-align: inherit;">按照文档进行操作后，我创建了一个</font></font><code>_error.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有视图</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件（在中</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是，当我处于开发人员模式时，我的</font></font><code>_error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面将被完全忽略（即使它通过</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">该</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数似乎被忽略，而是</font></font><code>nextjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用其内部</font></font><code>error-debug</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我是对的，那么这</font></font><a href="https://github.com/zeit/next.js/blob/9ec81c00fad040154df571701b73cb6e3b1b86fa/server/render.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是仓库中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">（当前版本的第84行）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我以</font></font><code>production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">env编译时，没问题，我的自定义错误页面被选中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于如何在开发人员模式下呈现自定义错误页面的任何想法？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3297篇《nextjs-在开发模式下使用_error.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更轻松地调试，您可以在中创建新脚本</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>...<font></font>
<font></font>
  "scripts": {<font></font>
     "dev": "next",<font></font>
     "build": "next build",<font></font>
     "start": "NODE_ENV=production next start",<font></font>
     "prod": "npm run build; npm run start", // combine build and start in order to have easier debugging<font></font>
  }<font></font>
<font></font>
...<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确将节点环境设置为生产环境。</font><font style="vertical-align: inherit;">在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下脚本中，在dev命令之前添加</font></font><code>NODE_ENV=production ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是我的猜测。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
