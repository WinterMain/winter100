---
layout: question
title:  React渲染SVG会覆盖页面上的其他SVG
date:   2020-03-23T01:53:07.000Z
description: 使用babel-plugin-inline-react-svg从我内next.js的应用程序，我进口一些SVGs到我的阵营v16.0.0组成部分，像这样。...
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
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>babel-plugin-inline-react-svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从我内</font></font><code>next.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的应用程序，我进口一些SVGs到我的阵营</font></font><code>v16.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组成部分，像这样。</font></font></p>

<pre><code>import React from 'react';<font></font>
import Close from './close.svg';<font></font>
import Chevron from './right.svg';<font></font>
import EmptyCart from './empty.svg';<font></font>
<font></font>
const Component = props =&gt; (<font></font>
  &lt;div&gt;<font></font>
    &lt;Close /&gt;<font></font>
    &lt;EmptyCart /&gt;<font></font>
    &lt;Chevron /&gt;<font></font>
  &lt;/div&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行该代码时，页面将以3个SVG都相同的方式呈现，如下所示：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/9529/images/thumbnails/1584928260275.png" data-src="https://www.samyoc.com//uploads/users/9529/images/1584928260275.png" rel="noreferrer"><img src="https://i.stack.imgur.com/eqnhF.png" alt="重复的SVG"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先渲染的SVG似乎都接管了所有其他SVG。</font><font style="vertical-align: inherit;">如果我</font></font><code>&lt;EmptyCart /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在第一位，它们全都是购物车图标。</font><font style="vertical-align: inherit;">但是，这才是真正的关键：当我检查DOM时，SVG似乎都是正确的（它们彼此完全不同）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人看过吗？</font><font style="vertical-align: inherit;">DOM怎么可能说一件事，而浏览器却渲染另一件事？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
