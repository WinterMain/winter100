---
layout: question
title:  与React-Router的活动链接？
date:   2020-03-16T04:14:39.000Z
description: 我正在尝试React-Router（v4），但从Nav开始让Linkbe 之一出现问题active。如果我单击任何Link标签，则活动的东西开始工作。但是...
img: 
author: 飞云Pro
category: question
answer: 1
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试React-Router（v4），但从Nav开始让</font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">be </font><font style="vertical-align: inherit;">之一</font><font style="vertical-align: inherit;">出现问题</font></font><code>active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果我单击任何</font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，则活动的东西开始工作。</font><font style="vertical-align: inherit;">但是，我希望Home </font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在应用启动后立即启动，因为那是在</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线</font><font style="vertical-align: inherit;">上加载的组件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有什么办法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前的代码：</font></font></p>

<pre><code>const Router = () =&gt; (<font></font>
  &lt;BrowserRouter&gt;<font></font>
    &lt;div&gt;<font></font>
      &lt;Nav&gt;<font></font>
        &lt;Link activeClassName='is-active' to='/'&gt;Home&lt;/Link&gt; {/* I want this to start off as active */}<font></font>
        &lt;Link activeClassName='is-active' to='/about'&gt;About&lt;/Link&gt;<font></font>
      &lt;/Nav&gt;<font></font>
<font></font>
      &lt;Match pattern='/' exactly component={Home} /&gt;<font></font>
      &lt;Match pattern='/about' exactly component={About} /&gt;<font></font>
      &lt;Miss component={NoMatch} /&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/BrowserRouter&gt;<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1714篇《与React-Router的活动链接？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我参加聚会有点晚了，但是我可以通过设置内联样式来处理此问题 
     </font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（无论您的样式是什么），我都会处理大多数内联样式，但是我很确定这也可以在常规样式表中使用。</font><font style="vertical-align: inherit;">只是使用</font></font></p>

<pre><code>:focus
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p>

<pre><code>:active
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于种种原因（大部分是嵌入式软件），我无法使用CSS样式表。</font><font style="vertical-align: inherit;">因此，我已经开始喜欢内联样式（与观点相反，内联样式在包含8000行代码，跨越37个文件的项目中效果很好，而对性能没有影响）。</font><font style="vertical-align: inherit;">但是不幸的</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，当像这样内联使用选择器时，它会出错，因此我使用了上面的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的另一种方法是，因为我知道内联样式有点被忽略了，是</font></font><code>active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用所需的nav-element样式</font><font style="vertical-align: inherit;">创建一个CSS </font><font style="vertical-align: inherit;">类，并保留一个状态变量来跟踪当前页面的高度。范围（最好是根组件），并在用户导航到另一个页面时进行更新。</font><font style="vertical-align: inherit;">这可以通过包装</font></font><code>&lt;Redirect/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;Link to={}/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用处理更新状态和导航的功能组件</font><font style="vertical-align: inherit;">来完成</font><font style="vertical-align: inherit;">，然后在导航组件中检查渲染的导航元素是否与当前页面匹配，如果是，则将</font></font><code>active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS类</font><font style="vertical-align: inherit;">附加到当前页面</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
