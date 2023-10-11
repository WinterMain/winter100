---
layout: question
title:  如何使用webpack设置内嵌svg
date:   2020-03-24T09:29:02.000Z
description: 我想知道如何使用webpack设置内嵌svg？ 我正在关注react-webpack-cookbook。我已经使用文件加载器正确设置了webpac...
img: 
author: 小卤蛋
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道如何使用webpack设置内嵌svg？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在关注</font></font><a href="https://github.com/christianalfoni/react-webpack-cookbook/wiki/Loading-SVG" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-webpack-cookbook</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font><font style="vertical-align: inherit;">使用</font><strong><font style="vertical-align: inherit;">文件加载器</font></strong><font style="vertical-align: inherit;">正确设置了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是该示例显示了使用这样的背景图像： </font></font></p>

<pre><code>.icon {<font></font>
   background-image: url(./logo.svg);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个工作正常，但是我想要一个内嵌svg图像，该如何</font><font style="vertical-align: inherit;">在我的react组件中内嵌</font><font style="vertical-align: inherit;">我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">logo.svg</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内嵌</font><font style="vertical-align: inherit;">图像</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>import React, { Component } from 'react'<font></font>
<font></font>
class Header extends Component {<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
        &lt;div className='header'&gt;<font></font>
            &lt;img src={'./logo.svg'} /&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
};<font></font>
<font></font>
export default Header<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3559篇《如何使用webpack设置内嵌svg》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
