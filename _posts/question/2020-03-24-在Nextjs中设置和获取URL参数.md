---
layout: question
title:  在Next.js中设置和获取URL参数
date:   2020-03-24T07:53:38.000Z
description: 我想知道如何将ID附加到Next.js中URL的末尾，以及如何在目标页面中像这样检索ID ...<Link href={\`/about/${id}\`}...
img: 
author: 斯丁
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道如何将ID附加到Next.js中URL的末尾，以及如何在目标页面中像这样检索ID ...</font></font></p>

<pre><code>&lt;Link href={`/about/${id}`}&gt;&lt;a&gt;About&lt;/a&gt;&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样...</font></font></p>

<pre><code>/about/256983649012
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在关于页面中检索它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且请记住，我已经意识到了这种方法...</font></font></p>

<pre><code>&lt;Link href={{ pathname: 'about', query: { id: id }}}&gt;&lt;a&gt;About&lt;/a&gt;&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我真的不希望链接像这样 </font></font><code>about?id=256983649012</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3477篇《在Next.js中设置和获取URL参数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
