---
layout: question
title:  在react.js中加载DOM时的回调
date:   2020-03-19T02:10:02.000Z
description: 当它的DOM元素（包括所有子节点）实际加载到页面上并准备就绪时，我想在我的react.js组件上调用一个回调。具体来说，我有两个要渲染相同大小的组件，选择...
img: 
author: 番长Green
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当它的DOM元素（包括所有子节点）实际加载到页面上并准备就绪时，我想在我的react.js组件上调用一个回调。</font><font style="vertical-align: inherit;">具体来说，我有两个要渲染相同大小的组件，选择具有自然尺寸的任何一个组件的最大值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是我真正想要的，因为每个组件仅被调用一次，但是我希望在组件完成渲染后再次调用我的回调。</font><font style="vertical-align: inherit;">我以为可以将</font></font><code>onLoad</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到顶级DOM元素中，但是我想这仅适用于某些元素，例如</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2247篇《在react.js中加载DOM时的回调》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长Stafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将componentDidUpdate应用于表以使所有列都具有相同的高度。</font><font style="vertical-align: inherit;">它与jquery中的$（window）.load（）相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>componentDidUpdate: function() {<font></font>
        $(".tbl-tr").height($(".tbl-tr ").height());<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Green</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来像的组合</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会完成这项工作。</font><font style="vertical-align: inherit;">当DOM可用时，第一个调用在初始渲染之后调用，一旦更新的DOM可用，则在任何后续渲染之后调用第二个调用。</font><font style="vertical-align: inherit;">就我而言，我都让他们委托一个共同的职能来做同样的事情。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代浏览器中，它应该像 </font></font></p>

<pre><code>try() {<font></font>
     if (!$("#element").size()) {<font></font>
       window.requestAnimationFrame(try);<font></font>
     } else {<font></font>
       // do your stuff<font></font>
     }<font></font>
};<font></font>
<font></font>
componentDidMount(){<font></font>
     this.try();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙阳光</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现在这简单的包装代码</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该浏览器的DOM已与阵营执行前的变化更新，0毫秒，确保时间</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>componentDidMount() {<font></font>
    setTimeout(() =&gt; {<font></font>
        $("myclass") //  $ is available here<font></font>
    }, 0)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会将匿名函数放在JS事件队列中，以在当前运行的React堆栈框架完成后立即运行。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
