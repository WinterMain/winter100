---
layout: question
title:  在React / Nextjs的文件夹中导入多个文件
date:   2020-04-03T02:51:59.000Z
description: 我正在尝试在文件夹中导入具有特定扩展名的多个文件：const allEntries = require.context('../static/blog...
img: 
author: 番长樱梅
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在文件夹中导入具有特定扩展名的多个文件：</font></font></p>

<pre><code>const allEntries = require.context('../static/blog', true, '/\.md/')
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我得到：</font></font></p>

<pre><code>Unhandled Rejection (TypeError): __webpack_require__(...).context is not a function
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/zeit/next.js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nextjs，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且需要页面之一中的文件。</font><font style="vertical-align: inherit;">这里似乎有东西吗？</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不一定需要通过这样做，</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想能够一次导入/需要多个文件而无需知道文件名或文件夹中有多少文件。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3929篇《在React / Nextjs的文件夹中导入多个文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
