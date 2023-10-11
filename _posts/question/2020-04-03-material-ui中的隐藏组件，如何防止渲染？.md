---
layout: question
title:  material-ui中的隐藏组件，如何防止渲染？
date:   2020-04-03T02:52:56.000Z
description: 到目前为止，我一直在使用nextJS和material-ui取得巨大成功。但是，最近我遇到了一个概念性的问题：每当应用程序在服务器上呈现时，我都不希望...
img: 
author: 凯西里
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我一直在使用nextJS和material-ui取得巨大成功。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是，最近我遇到了一个概念性的问题：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
每当应用程序在服务器上呈现时，我都不希望它在到达客户端时就重排。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
由于我在台式机和移动设备之间渲染布局的方式有所不同，因此我一直在使用组件来分离</font></font><code>&lt;Hidden implementation='css'/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件。</font><font style="vertical-align: inherit;">我</font></font><code>implementation=css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">是因为我不能依赖窗口宽度，因为它在服务器上将不可用。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我今天的主要问题是，即使在屏幕上显示了正确的版本，也呈现了桌面版本和移动版本，这会导致不必要的逻辑执行（尤其是api调用）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我认为我做错了什么，但不知道如何解决。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
'理想'的方式将是一个类似的组件，</font></font><code>&lt;Hidden/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不仅仅是隐藏一个已经渲染的组件，它根本不会渲染它……而且</font></font><code>window.innerWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我关心SSR，我当然</font><font style="vertical-align: inherit;">不能使用它</font><font style="vertical-align: inherit;">……  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人有想法，我将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3931篇《material-ui中的隐藏组件，如何防止渲染？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
