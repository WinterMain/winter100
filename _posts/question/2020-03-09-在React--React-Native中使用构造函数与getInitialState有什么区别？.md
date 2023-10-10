---
layout: question
title:  在React / React Native中使用构造函数与getInitialState有什么区别？
date:   2020-03-09T14:46:12.000Z
description: 我已经看到两者可以互换使用。    两者的主要用例是什么？有优点/缺点吗？是更好的做法吗？...
img: 
author: Green神乐
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看到两者可以互换使用。    </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者的主要用例是什么？</font><font style="vertical-align: inherit;">有优点/缺点吗？</font><font style="vertical-align: inherit;">是更好的做法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，我们不必在组件内部调用构造函数-我们可以直接调用</font></font><code>state={something:""}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，否则以前我们首先要声明具有的构造函数</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以继承</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类中的</font><font style="vertical-align: inherit;">所有内容，</font><font style="vertical-align: inherit;">然后在构造函数内部初始化状态。</font></font></p>

<p>If using <code>React.createClass</code> then define initialize state with the <code>getInitialState</code> method.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两种方法不可互换。</font><font style="vertical-align: inherit;">使用ES6类时，应在构造函数中初始化状态，使用时应定义</font></font><code>getInitialState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>React.createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://facebook.github.io/react/docs/reusable-components.html#es6-classes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅关于ES6类的官方React文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>class MyComponent extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = { /* initial state */ };<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于 </font></font></p>

<pre class="lang-js prettyprint-override"><code>var MyComponent = React.createClass({<font></font>
  getInitialState() {<font></font>
    return { /* initial state */ };<font></font>
  },<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
