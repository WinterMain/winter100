---
layout: question
title:  使用现在缺少的样式部署了next.js，styles.css 404响应
date:   2020-03-24T10:32:38.000Z
description: 我正在使用next为学校项目构建一个简单的网站，并且现在设法使用了next.js应用程序的部署，但是没有应用任何样式。一切都很好，并且可以在localho...
img: 
author: LMandy宝儿
category: question
answer: 1
tags: CSS React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用next为学校项目构建一个简单的网站，并且现在设法使用了next.js应用程序的部署，但是没有应用任何样式。</font><font style="vertical-align: inherit;">一切都很好，并且可以在localhost上正常运行（看起来）很好，但不能在线运行（</font></font><a href="https://spa-ot24z7ugt.now.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://spa-ot24z7ugt.now.sh</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜想它与now.json文件有关，但是他们的文档使它看起来像是一切都可以直接使用，除了样式外，它确实是正确的。</font><font style="vertical-align: inherit;">我查看了文档，却找不到任何东西，我想知道是否有人有使用now和next.js的经验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的now.json文件：</font></font></p>

<pre><code>```{<font></font>
  "version": 2,<font></font>
  "builds": [<font></font>
    { "src": "next.config.js", "use": "@now/next" }<font></font>
  ]<font></font>
}```<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到已部署的站点：</font><a href="https://spa-ot24z7ugt.now.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://spa-ot24z7ugt.now.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//spa-ot24z7ugt.now.sh</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用“下一个/头”中的Head来生成静态CSS文件的链接。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3664篇《使用现在缺少的样式部署了next.js，styles.css 404响应》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，对我来说，解决方法是将style.css包含为静态版本：</font></font></p>

<pre><code>{<font></font>
    "version": 2,<font></font>
    "name": "wp-nextjs",<font></font>
    "public": true,<font></font>
    "builds": [<font></font>
        { "src": "package.json", "use": "@now/next" },<font></font>
        { "src": "static/css/style.css", "use": "@now/static" }<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
