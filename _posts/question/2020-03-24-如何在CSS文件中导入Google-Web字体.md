---
layout: question
title:  如何在CSS文件中导入Google Web字体？
date:   2020-03-24T08:08:42.000Z
description: 我正在使用CMS，但我只能访问CSS文件。因此，我不能在文档的标题中包含任何内容。我想知道是否可以从CSS文件中导入Web字体？...
img: 
author: 宝儿逆天
category: question
answer: 5
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用CMS，但我只能访问CSS文件。</font><font style="vertical-align: inherit;">因此，我不能在文档的标题中包含任何内容。</font><font style="vertical-align: inherit;">我想知道是否可以从CSS文件中导入Web字体？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3499篇《如何在CSS文件中导入Google Web字体？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以在css3中轻松地做到这一点。</font><font style="vertical-align: inherit;">我们必须简单地使用@import语句。</font><font style="vertical-align: inherit;">以下视频轻松地描述了如何做到这一点。</font><font style="vertical-align: inherit;">所以请继续注意。</font></font></p>

<p><a href="https://www.youtube.com/watch?v=wlPr6EF6GAo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.youtube.com/watch?v=wlPr6EF6GAo</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用@ font-face链接到URL。
</font></font><a href="http://www.css3.info/preview/web-fonts-with-font-face/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.css3.info/preview/web-fonts-with-font-face/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CMS是否支持iframe？</font><font style="vertical-align: inherit;">您也可以将iframe放入内容的顶部。</font><font style="vertical-align: inherit;">这可能会比较慢-最好将其包含在CSS中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;link href="https://fonts.googleapis.com/css?family=(any font of your <font></font>
choice)" rel="stylesheet" type="text/css"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要选择字体，您可以访问以下链接：</font><strong><a href="https://fonts.google.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a></strong><font style="vertical-align: inherit;"> : </font></font><strong><a href="https://fonts.google.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//fonts.google.com</font></font></a></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在网站上写下您选择的字体名称（不包括方括号）。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您选择龙虾作为您选择的字体，</font></font></p>

<pre><code>&lt;link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" <font></font>
type="text/css"&gt;<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以在整个HTML / CSS文件中正常使用它作为字体系列。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></strong></p>

<pre><code>&lt;h2 style="Lobster"&gt;Please Like This Answer&lt;/h2&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;amp;lang=en" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好不要使用@import。</font><font style="vertical-align: inherit;">只需在布局的头部使用link元素（如上所示）即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需转到</font></font><a href="https://fonts.google.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fonts.google.com/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font><strong><font style="vertical-align: inherit;">+</font></strong><font style="vertical-align: inherit;">添加字体</font></font><strong><font style="vertical-align: inherit;"></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到选定的字体&gt;嵌入&gt; @IMPORT&gt;复制URL，然后将其粘贴到body标签上方的.css文件中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成。</font></font></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
