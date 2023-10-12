---
layout: question
title:  什么时候使用React的“ componentDidUpdate”方法？
date:   2020-03-12T07:19:07.000Z
description: 我写了几十个React文件，从不使用componentDidUpdate方法。是否存在何时需要使用此方法的典型示例？我想要一些真实的例子，而不是简...
img: 
author: 小胖蛋蛋
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了几十个</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，从不使用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否存在何时需要使用此方法的典型示例？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一些真实的例子，而不是简单的演示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的回答！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1045篇《什么时候使用React的“ componentDidUpdate”方法？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Sam乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，您可能会在构造函数或componentDidMount中的props中添加状态值，当props更改但组件已经挂载时，可能需要调用setState，因此componentDidMount将不会执行，构造函数也不会执行；</font><font style="vertical-align: inherit;">在这种情况下，由于道具已更改，因此可以使用componentDidUpdate，可以在具有新道具的componentDidUpdate中调用setState。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
