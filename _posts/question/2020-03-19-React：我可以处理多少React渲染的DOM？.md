---
layout: question
title:  React：我可以处理多少React渲染的DOM？
date:   2020-03-19T03:40:40.000Z
description: 这就是我在做什么：jsfiddle 关键部分是：position  function() {  var container = $(this.g...
img: 
author: 小胖Pro
category: question
answer: 1
tags: dom React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我在做什么：</font></font><a href="http://jsfiddle.net/iamnoah/pTrrw/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键部分是：</font></font></p>

<pre><code>position: function() {<font></font>
  var container = $(this.getDOMNode());<font></font>
  this._menu = $(this.refs.menu.getDOMNode());<font></font>
  this._menu.appendTo(document.body).<font></font>
      offset({<font></font>
          top: container.offset().top + <font></font>
              container.outerHeight(),<font></font>
          left: container.offset().left<font></font>
      });<font></font>
},<font></font>
restore: function() {<font></font>
  this._menu.appendTo(this.getDOMNode());      <font></font>
},<font></font>
componentWillUpdate: function() {<font></font>
  this.restore();<font></font>
},<font></font>
componentDidUpdate: function() {<font></font>
  this.position();<font></font>
},<font></font>
componentDidMount: function() {<font></font>
  this.position();<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这很好用。</font><font style="vertical-align: inherit;">我在组件更新之前将内容放回原处，并假设React在每次更新之间都留有DOM，并且不会错过它。</font><font style="vertical-align: inherit;">实际上，React似乎可以移动内容（如果我删除</font></font><code>componentWillUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则定位的元素仍会更新！）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是得到的假设中有多少是安全的（即，如果我假设这些事情，我的代码会在React的未来版本中中断吗？）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要您将DOM放回原处，React就不会在更新之间移动DOM </font></font><code>componentWillUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React事件处理程序仍将对已移动的元素起作用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React会将您要求的任何内联样式与元素上已经存在的样式合并（即使它没有设置它们）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您将DOM移动到文档中的其他位置，React也会更新它已经渲染的DOM！</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我来说，最后一个似乎有些极端和不可思议，但如果成立的话，它会产生一些重大影响。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2312篇《React：我可以处理多少React渲染的DOM？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿村村</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React开发人员 </font><font style="vertical-align: inherit;">我将回答您的每个问题：</font></font></p>

<hr>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要您将DOM重新放回componentWillUpdate中，React就不会在更新之间移动DOM。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确-除事件处理程序外，React除了更新时不会查看DOM：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React事件处理程序仍将对已移动的元素起作用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会依靠这一点，而且我不确定现在是否如此。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React会将您要求的任何内联样式与元素上已经存在的样式合并（即使它没有设置它们）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也不会依赖它-现在React设置了单个属性，但是我可以很容易地想象它的设置</font></font><code>el.style.cssText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否更快，这会破坏您所做的单个更改。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您将DOM移动到文档中的其他位置，React也会更新它已经渲染的DOM！</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为目前这是真的，您也不应该依赖于此。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">广义上讲，您不应该手动操作React创建的DOM。</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中</font><font style="vertical-align: inherit;">创建一个空白</font><font style="vertical-align: inherit;">并手动填充</font><font style="vertical-align: inherit;">是100％的粗略操作</font><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">只要您以后不尝试在React中更改其属性（使React进行DOM更新），甚至可以修改React呈现的元素的属性，但是如果您移动一个元素，React可能会寻找并找不到时会感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能有所帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
