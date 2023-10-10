---
layout: question
title:  将SASS变量传递给javascript的行业标准方法是什么？
date:   2020-03-24T11:17:06.000Z
description: 我环顾四周，并且看到一种解决方案，在您的html中，您有一个专用于将sass变量传递给javascript的标记。我说的是第二个答案有没有办法将变量从...
img: 
author: 番长猴子
category: question
answer: 0
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我环顾四周，并且看到一种解决方案，在您的html中，您有一个专用于将sass变量传递给javascript的标记。</font><font style="vertical-align: inherit;">我说的是第二个答案</font></font></p>

<p><a href="https://stackoverflow.com/questions/9354319/is-there-a-way-to-import-variables-from-javascript-to-sass-or-vice-versa"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法将变量从javascript导入到sass，反之亦然？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试使用html</font></font></p>

<pre><code>&lt;div class="selector"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与CSS</font></font></p>

<pre><code>.selector { content: "stuff"; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在开发人员工具中查看dom时，即使我们可以在呈现的页面上看到它，也不会添加它，因此我无法使用javascript来拾取它</font></font></p>

<pre><code>$('.selector').text()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大家如何做？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
