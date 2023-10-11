---
layout: question
title:  开发时如何避免React两次被Webpack加载
date:   2020-03-24T07:45:50.000Z
description: 给定以下目录结构：my-project||-- node_modules    |    |-- react    |-- module-x...
img: 
author: GO
category: question
answer: 0
tags: npm Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定以下目录结构：</font></font></p>

<pre><code>my-project<font></font>
|<font></font>
|-- node_modules<font></font>
    |<font></font>
    |-- react<font></font>
    |-- module-x<font></font>
        |<font></font>
        |--node_modules<font></font>
            |<font></font>
            |--react<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-project</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都需要React。</font><font style="vertical-align: inherit;">我有与</font></font><a href="https://stackoverflow.com/questions/28519287/what-does-only-a-reactowner-can-have-refs-mean"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的问题</font><font style="vertical-align: inherit;">，但建议是从package.json依赖项中删除反应。</font><font style="vertical-align: inherit;">我这样做了，只要在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有安装node_modules，它就可以正常工作</font><font style="vertical-align: inherit;">，因为Webpack将使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-project中的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，如果我正在开发</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并已安装node_modules，则Webpack会同时使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-project</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有办法让Webpack确保仅使用React的一个实例，即使在两个单独的级别都需要它吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以</font><font style="vertical-align: inherit;">在开发时</font><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在一个单独的目录中，但是好像我必须先发布它，然后将其安装在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-project中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以对其进行测试，但这并不是很有效。</font><font style="vertical-align: inherit;">我考虑了一下</font></font><code>npm link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是没有运气，因为它仍然在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">module-x中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装了node_modules </font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://github.com/webpack/webpack/issues/105" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来很像我所面临的相同挑战，但似乎不是这样，</font></font><code>npm dedupe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者Webpack的重复数据删除选项可以工作。</font><font style="vertical-align: inherit;">我可能不了解一些重要的细节。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3466篇《开发时如何避免React两次被Webpack加载》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
