---
layout: question
title:  Rails 3.1资产管道无法接收对\`import的工作表所做的更改
date:   2020-03-24T03:01:35.000Z
description: 我使用\`import'd部分工作表来组织我的CSS / SASS：/app  /assets    /stylesheets      _con...
img: 
author: Itachi
category: question
answer: 2
tags: 进口 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'d部分工作表来组织我的CSS / SASS：</font></font></p>

<pre><code>/app<font></font>
  /assets<font></font>
    /stylesheets<font></font>
      _constants.sass<font></font>
      _layout.sass<font></font>
      ...<font></font>
      app.css.sass<font></font>
<font></font>
app.css.sass:<font></font>
  @import _constants.sass<font></font>
  // basic styles<font></font>
  @import _layout.sass<font></font>
  @import ...<font></font>
</code></pre>

<p><code>app.css.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">规则</font></font><code>_layout.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它使我可以在原始sass文件之间共享混合和变量。</font></font><code>app.css</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，Rails无法识别对</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'dpartials（</font></font><code>_layout.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font><code>app.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的更改，并且在我对实际</font></font><code>app.css.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件本身</font><font style="vertical-align: inherit;">进行更改之前</font><font style="vertical-align: inherit;">不会重新生成</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这大大减慢了我的工作流程，意味着我必须添加/删除空白行</font></font><code>app.css.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能看到更改。</font><font style="vertical-align: inherit;">在3.0中从来没有这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以强制Sass资产在开发中的每个服务器请求上重新生成？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3267篇《Rails 3.1资产管道无法接收对\`import的工作表所做的更改》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nanothief的回答将我引向了解决方案（谢谢！），但是以间接的方式。</font><font style="vertical-align: inherit;">一旦我终于找到时间回到这里并查找引用的帖子，它就被更新为不再需要此修复程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">果然，看来此错误已在Rails 3.1.0中用3.1.0的sass-rails修复。</font><font style="vertical-align: inherit;">这么好！</font><font style="vertical-align: inherit;">我已经确认，通过几个应用程序测试，更新gem确实可以使所有内容恢复正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>depend_on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令可以满足您的要求。</font><font style="vertical-align: inherit;">这使给定文件成为基本文件的依赖项（因此，当依赖项更改时，将重新生成基本文件），但不将其包括在捆绑软件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>/*<font></font>
*= depend_on _layout.sass<font></font>
*= depend_on _constants.sass<font></font>
*/<font></font>
@import _layout.sass<font></font>
@import _constants.sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此</font></font><a href="http://rule52.com/2011/06/sass-and-sprockets-for-rails-31/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass and sprockets博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><a href="https://github.com/sstephenson/sprockets"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sprockets文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尤其是“指令”部分）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
