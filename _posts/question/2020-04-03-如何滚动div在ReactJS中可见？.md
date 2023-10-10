---
layout: question
title:  如何滚动div在ReactJS中可见？
date:   2020-04-03T03:39:04.000Z
description: 我有一个弹出列表，其中div包含子divs 的垂直列表。我添加了向上/向下键盘导航来更改当前突出显示的哪个孩子。现在，如果我按下向下键的次数足够多，突...
img: 
author: 猿十三
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个弹出列表，其中</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含子</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s </font><font style="vertical-align: inherit;">的垂直列表</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我添加了向上/向下键盘导航来更改当前突出显示的哪个孩子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果我按下向下键的次数足够多，突出显示的项目将不再可见。</font><font style="vertical-align: inherit;">如果滚动视图，则向上键也会发生相同的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中自动将孩子滚动</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到视图中</font><font style="vertical-align: inherit;">的正确方法是什么</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是为其他人在React中搜索Scroll-To功能添加了一点信息。</font><font style="vertical-align: inherit;">我已经绑定了几个库来为我的应用程序执行Scroll-To，在我找到用例卷轴之前，都没有用到我的用例，所以我以为我会继续下去。</font></font><a href="https://github.com/bySabi/react-scrollchor" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/bySabi/react-scrollchor</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在keyup / down处理程序中，您只需要设置</font></font><code>scrollTop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要滚动的div </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性即可使其向下（或向上）滚动。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX： </font></font></p>

<p><code>&lt;div ref="foo"&gt;{content}&lt;/div&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上/下键盘处理程序：</font></font></p>

<p><code>this.refs.foo.getDOMNode().scrollTop += 10</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您执行与上述类似的操作，则div将向下滚动10个像素（假设div设置为溢出</font></font><code>auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>scroll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中，并且您的内容当然在溢出）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要对此进行扩展，以找到要向下滚动div的滚动div内元素的偏移量，然后修改</font></font><code>scrollTop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其滚动足够远以根据其高度显示元素。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下MDN的scrollTop和offsetTop定义：</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop</font></font></a></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要以@Michelle Tilley的答案为基础，如果用户的选择发生更改，我有时想滚动，因此我触发</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我还做了一些数学运算来弄清楚滚动的距离以及是否需要滚动，对我来说，这类似于以下内容：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>  componentDidUpdate() {<font></font>
    let panel, node;<font></font>
    if (this.refs.selectedSection &amp;&amp; this.refs.selectedItem) {<font></font>
      // This is the container you want to scroll.          <font></font>
      panel = this.refs.listPanel;<font></font>
      // This is the element you want to make visible w/i the container<font></font>
      // Note: You can nest refs here if you want an item w/i the selected item          <font></font>
      node = ReactDOM.findDOMNode(this.refs.selectedItem);<font></font>
    }<font></font>
<font></font>
    if (panel &amp;&amp; node &amp;&amp;<font></font>
      (node.offsetTop &gt; panel.scrollTop + panel.offsetHeight || node.offsetTop &lt; panel.scrollTop)) {<font></font>
      panel.scrollTop = node.offsetTop - panel.offsetTop;<font></font>
    }<font></font>
  }</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
