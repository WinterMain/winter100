---
layout: question
title:  我可以使用CoffeeScript代替JS来开发Node.js吗？
date:   2020-03-23T13:44:03.000Z
description: 如果我想编码node.js并使用CoffeeScript，我有哪些限制？我可以做一些我在JS中可以做的事情吗？...
img: 
author: Itachi
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想编码node.js并使用CoffeeScript，我有哪些限制？</font><font style="vertical-align: inherit;">我可以做一些我在JS中可以做的事情吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3089篇《我可以使用CoffeeScript代替JS来开发Node.js吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Coffeescript + ExpressJS + Couchdb + Redis + Auth：</font></font></p>

<p><a href="https://gist.github.com/652819"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/652819</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://github.com/TrevorBurnham/Jitter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jitter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是CoffeeScript的简单连续编译。</font></font></p>

<pre><code>npm install -g jitter
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您在coffee目录中有一堆* .coffee文件，并希望将它们编译到js目录中。</font><font style="vertical-align: inherit;">然后运行：</font></font></p>

<pre><code>jitter coffee js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抖动会在后台运行，直到您终止它（Ctrl + C），然后观察新的变化。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影片教学</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看过</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pedro Teixeira</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">撰写的精彩教程系列</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">他一直在建立关于节点教程的整个系列。</font><font style="vertical-align: inherit;">他包括对nodemon的引用，用于自动检测以及编译和重新加载已编辑的.coffee文件。</font></font></p>

<ol>
<li><a href="http://vimeo.com/18429839" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Coffeescript和Node.js</font></font></a></li>
<li><a href="http://vimeo.com/18125866" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nodemon</font></font></a></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，CoffeeScript可以简单地编译为纯JS，使其与node.js完全兼容。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在节点上运行CoffeeScripts，您可以：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font><code>coffee -c example.coffee</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要编译的代码，然后</font></font><code>node example.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行已编译的JS。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需输入 </font></font><code>coffee example.coffee</code></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
