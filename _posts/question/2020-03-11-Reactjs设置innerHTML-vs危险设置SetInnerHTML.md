---
layout: question
title:  React.js：设置innerHTML vs危险设置SetInnerHTML
date:   2020-03-11T04:20:13.000Z
description: 在元素上设置元素的innerHTML与在元素上设置危险地设置InnerHTML属性有什么“幕后”区别？假设为简单起见，我正在对事物进行适当的消毒。例：...
img: 
author: 理查德Itachi
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在元素上设置元素的innerHTML与在元素上设置危险地设置InnerHTML属性有什么“幕后”区别？</font><font style="vertical-align: inherit;">假设为简单起见，我正在对事物进行适当的消毒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var test = React.createClass({<font></font>
  render: function(){<font></font>
    return (<font></font>
      &lt;div contentEditable='true' dangerouslySetInnerHTML={{ __html: "Hello" }}&gt;&lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>var test = React.createClass({<font></font>
  componentDidUpdate: function(prevProp, prevState){<font></font>
    this.refs.test.innerHTML = "Hello";<font></font>
  },<font></font>
  render: function(){<font></font>
    return (<font></font>
      &lt;div contentEditable='true' ref='test'&gt;&lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做的事情比上面的示例复杂一些，但总体思路是相同的</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第654篇《React.js：设置innerHTML vs危险设置SetInnerHTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于（</font></font><a href="https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">危险地为SetInnerHTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一款完全可以满足您需求的道具。</font><font style="vertical-align: inherit;">但是，它们的名称表示要谨慎使用</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
