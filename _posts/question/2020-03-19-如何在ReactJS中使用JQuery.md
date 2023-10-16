---
layout: question
title:  如何在ReactJS中使用JQuery
date:   2020-03-19T06:36:21.000Z
description: 我是ReactJS的新手。以前，我使用jQuery设置所需的任何动画或功能。但是现在我正在尝试使用ReactJS并最小化jQuery的使用。我的情况是...
img: 
author: 老丝小哥梅
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是ReactJS的新手。</font><font style="vertical-align: inherit;">以前，我使用jQuery设置所需的任何动画或功能。</font><font style="vertical-align: inherit;">但是现在我正在尝试使用ReactJS并最小化jQuery的使用。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况是：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用ReactJS构建手风琴。</font></font></p>

<pre><code>&lt;div class="accor"&gt;<font></font>
   &lt;div class="head"&gt;Head 1&lt;/div&gt;<font></font>
   &lt;div class="body hide"&gt;Body 1&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="accor"&gt;<font></font>
   &lt;div class="head"&gt;Head 1&lt;/div&gt;<font></font>
   &lt;div class="body hide"&gt;Body 1&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="accor"&gt;<font></font>
   &lt;div class="head"&gt;Head 1&lt;/div&gt;<font></font>
   &lt;div class="body hide"&gt;Body 1&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JQuery</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><br></p>

<pre><code>$('.accor &gt; .head').on('click', function(){<font></font>
   $('.accor &gt; .body').slideUp();<font></font>
   $(this).next().slideDown();<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何使用ReactJS？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2403篇《如何在ReactJS中使用JQuery》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该尝试避免在ReactJS中使用jQuery。</font><font style="vertical-align: inherit;">但是，如果您真的想使用它，则可以将其放入组件的componentDidMount（）生命周期函数中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>class App extends React.Component {<font></font>
  componentDidMount() {<font></font>
    // Jquery here $(...)...<font></font>
  }<font></font>
<font></font>
  // ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，您想创建一个可重用的手风琴组件。</font><font style="vertical-align: inherit;">为此，您可以使用Jquery，也可以仅使用普通的javascript + CSS。</font></font></p>

<pre><code>class Accordion extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this._handleClick = this._handleClick.bind(this);<font></font>
  }<font></font>
<font></font>
  componentDidMount() {<font></font>
    this._handleClick();<font></font>
  }<font></font>
<font></font>
  _handleClick() {<font></font>
    const acc = this._acc.children;<font></font>
    for (let i = 0; i &lt; acc.length; i++) {<font></font>
      let a = acc[i];<font></font>
      a.onclick = () =&gt; a.classList.toggle("active");<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div <font></font>
        ref={a =&gt; this._acc = a} <font></font>
        onClick={this._handleClick}&gt;<font></font>
        {this.props.children}<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以在任何组件中使用它，如下所示：</font></font></p>

<pre><code>class App extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Accordion&gt;<font></font>
          &lt;div className="accor"&gt;<font></font>
            &lt;div className="head"&gt;Head 1&lt;/div&gt;<font></font>
            &lt;div className="body"&gt;&lt;/div&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/Accordion&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>Codepen link here: <a href="https://codepen.io/***mm/pen/JKLwEA?editors=0110" rel="noreferrer">https://codepen.io/***mm/pen/JKLwEA?editors=0110</a>
(I changed this link to https ^)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前，我在将</font><strong><font style="vertical-align: inherit;">React</font></strong><font style="vertical-align: inherit;">与</font><strong><font style="vertical-align: inherit;">js</font></strong><font style="vertical-align: inherit;">一起</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jquery</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font><font style="vertical-align: inherit;">，因此我按照以下步骤进行操作，</font></font></p>

<ol>
<li><p><code>npm install jquery --save</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后， </font></font><code>import $ from "jquery";</code></p>

<p><a href="https://i.stack.imgur.com/SBcH3.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看这里</font></font></a> </p></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
