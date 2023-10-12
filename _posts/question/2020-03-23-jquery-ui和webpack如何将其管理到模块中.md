---
layout: question
title:  jquery-ui和webpack，如何将其管理到模块中？
date:   2020-03-23T07:48:37.000Z
description: 知道如何处理吗？我的意思是jquery-ui似乎不是amd，而且我不知道该如何管理，知道吗？...
img: 
author: 泡芙
category: question
answer: 1
tags: jquery-ui Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道如何处理吗？</font><font style="vertical-align: inherit;">我的意思是jquery-ui似乎不是amd，而且我不知道该如何管理，知道吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2940篇《jquery-ui和webpack，如何将其管理到模块中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>jquery-ui-dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>jquery-ui-bundle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎不由jquery-ui团队维护。</font><font style="vertical-align: inherit;">在jquery-ui </font></font><code>jquery-ui</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v1.12 </font><font style="vertical-align: inherit;">之后，可以将</font><font style="vertical-align: inherit;">npm中</font><font style="vertical-align: inherit;">的官方</font><font style="vertical-align: inherit;">包与webpack一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">将jquery-ui更新到1.12 </font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样每个小部件。</font></font></p>

<pre><code>require("jquery-ui/ui/widgets/autocomplete");<font></font>
require("jquery-ui/ui/widgets/draggable");<font></font>
</code></pre>

<p>If you have used <code>require("jquery-ui")</code> before you need to replace it with separate imports for each widget. I think the new way is better because it will bundle only the code for the widget we need to use.</p>

<p>See <a href="https://jqueryui.com/upgrade-guide/1.12/#official-package-on-npm" rel="noreferrer">documentation</a> on using the 1.12 official npm package.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
