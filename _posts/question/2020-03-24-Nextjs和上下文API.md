---
layout: question
title:  Nextjs和上下文API
date:   2020-03-24T07:53:02.000Z
description: 使用Next.js，我尝试在getInitialProps中获取数据后将数据保存在Context API状态下，以修复道具钻取。 但是由于getIni...
img: 
author: Stafan猪猪
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Next.js，我尝试在getInitialProps中获取数据后将数据保存在Context API状态下，以修复道具钻取。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是由于getInitialProps是静态方法，所以我们无法通过this.context访问它。</font><font style="vertical-align: inherit;">我设法将它们保存在componentDidMount中，但是在那种情况下，在第一页加载之前，上下文状态为空，直到填充为止。</font><font style="vertical-align: inherit;">不知道在这种情况下最佳做法是什么。</font><font style="vertical-align: inherit;">我应该在哪个生命周期中将初始数据保存到Context中，以便像传递道具一样立即使用它们？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3475篇《Nextjs和上下文API》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
