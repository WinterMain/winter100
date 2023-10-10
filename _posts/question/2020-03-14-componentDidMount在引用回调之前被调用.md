---
layout: question
title:  componentDidMount在引用回调之前被调用
date:   2020-03-14T10:16:41.000Z
description: 问题我正在ref使用内联函数定义设置反应render = () => {    return (        <div className=...
img: 
author: 猪猪飞云
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><a href="https://facebook.github.io/react/docs/refs-and-the-dom.html" rel="noreferrer"><code>ref</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用内联函数定义</font><font style="vertical-align: inherit;">设置反应</font></font></p>

<pre><code>render = () =&gt; {<font></font>
    return (<font></font>
        &lt;div className="drawer" ref={drawer =&gt; this.drawerRef = drawer}&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM引用中未设置</font></font></p>

<pre><code>componentDidMount = () =&gt; {<font></font>
    // this.drawerRef is not defined<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是，</font></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调应该在安装期间运行，但是</font><font style="vertical-align: inherit;">在ref回调函数</font><strong><font style="vertical-align: inherit;">之前</font></strong><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">添加</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句揭示</font><font style="vertical-align: inherit;">。</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看过的其他代码示例（例如，</font><font style="vertical-align: inherit;">在github上的</font></font><a href="https://github.com/facebook/react/issues/6249" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">讨论）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表明了相同的假设，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应在中</font><font style="vertical-align: inherit;">定义的</font><font style="vertical-align: inherit;">任何</font><font style="vertical-align: inherit;">回调</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font></strong><font style="vertical-align: inherit;"></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，甚至</font><a href="https://github.com/facebook/react/issues/6249#issuecomment-272026401" rel="noreferrer"><font style="vertical-align: inherit;">在对话中</font></a><font style="vertical-align: inherit;">也要</font></font><a href="https://github.com/facebook/react/issues/6249#issuecomment-272026401" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></a></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么在所有的ref回调都执行完之后，componentDidMount是否被触发？</font></font></p>
  </blockquote>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用反应</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">15.4.1</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的其他事情</font></font></strong></p>

<p>To verify the <code>ref</code> function was being called, I tried defining it on the class as such</p>

<pre><code>setDrawerRef = (drawer) =&gt; {<font></font>
  this.drawerRef = drawer;<font></font>
}<font></font>
</code></pre>

<p>then in <code>render</code></p>

<pre><code>&lt;div className="drawer" ref={this.setDrawerRef}&gt;
</code></pre>

<p>Console logging in this case reveals the callback is indeed being called <strong>after</strong> <code>componentDidMount</code></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在componentDidMount中，可以在浏览器DOM中找到ref元素（div.drawer）吗？</font><font style="vertical-align: inherit;">如果没有，您将无法获得其参考。</font><font style="vertical-align: inherit;">由于问题是在另一个更大的代码中找到的，原因可能是未呈现ref元素（div.drawer）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
