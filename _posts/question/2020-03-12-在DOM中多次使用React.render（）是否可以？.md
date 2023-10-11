---
layout: question
title:  在DOM中多次使用React.render（）是否可以？
date:   2020-03-12T07:16:57.000Z
description: 我想使用React在整个DOM中多次添加组件。这个小提琴显示了我要执行的操作，并且不会引发任何错误。这是代码：HTML：<div id="co...
img: 
author: 神乐前端
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用React在整个DOM中多次添加组件。</font></font><a href="http://jsfiddle.net/ypcrumble/gs7k1kth/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示了我要执行的操作，并且不会引发任何错误。</font><font style="vertical-align: inherit;">这是代码：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>



<pre><code>&lt;div id="container"&gt;<font></font>
    &lt;!-- This element's contents will be replaced with the first component. --&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div id="second-container"&gt;<font></font>
    &lt;!-- This element's contents will be replaced with the second component. --&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></p>

<pre><code>var Hello = React.createClass({<font></font>
    render: function() {<font></font>
        return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;<font></font>
    }<font></font>
});<font></font>
<font></font>
React.render(&lt;Hello name="World" /&gt;, document.getElementById('container'));<font></font>
<font></font>
React.render(&lt;Hello name="Second World" /&gt;, document.getElementById('second-container'));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看过</font></font><a href="https://stackoverflow.com/q/27112274/2532070"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，恐怕这样做会冒React组件相互干扰的风险。</font><font style="vertical-align: inherit;">该问题的答案建议使用服务器端渲染，这对我来说不是一个选择，因为我正在使用Django服务器端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，也许我在做什么就可以了，因为我只安装了一个React库实例（而不是多个组件调用自己的React实例）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用多个DOM实例的这种方法是使用React的一种好方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1044篇《在DOM中多次使用React.render（）是否可以？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，</font></font><code>React.render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一页面上多次</font><font style="vertical-align: inherit;">调用是完全可以的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就像您建议的那样，React库本身仅加载一次，但是每次调用</font></font><code>React.render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都会创建一个独立于其他组件的新组件实例。</font><font style="vertical-align: inherit;">（实际上，这种情况在过渡到React的站点上并不少见，其中页面的某些部分是使用生成的，</font></font><code>React.render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而另一些不是。）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
