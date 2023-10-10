---
layout: question
title:  在React构造函数中调用super（）有什么作用？
date:   2020-03-18T09:06:48.000Z
description: 从文档中学习React 并遇到以下示例：class Square extends React.Component {  constructor() ...
img: 
author: 伽罗西门小胖
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://facebook.github.io/react/tutorial/tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学习React </font><font style="vertical-align: inherit;">并遇到以下示例：</font></font></p>

<pre><code>class Square extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this.state = {<font></font>
      value: null,<font></font>
    };<font></font>
  }<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说法</font><font style="vertical-align: inherit;">，super允许您</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构造函数中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">是否有其他原因可以单独使用</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我知道</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以访问父类的方法），但是使用React时，是否还有其他</font><font style="vertical-align: inherit;">单独</font><font style="vertical-align: inherit;">使用的用例</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字，我们应该在</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字之前</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">它。</font><font style="vertical-align: inherit;">为什么？</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于调用父类的</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在为什么我们需要打电话给父母的</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">答案是初始化我们通过</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">引用的属性值</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实现的构造函数时</font></font><code>React.Component subclass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，应先调用</font></font><code>super(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他语句。</font><font style="vertical-align: inherit;">否则，</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构造函数中，这可能导致错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得补充的</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是超类构造器的缩写，</font><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">是</font></font><a href="https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继承</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的概念</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，该类</font></font><code>Square</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从其超</font><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">继承构造函数</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过声明新</font></font><code>constructor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">来覆盖继承的构造函数</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要扩展而不是覆盖超类构造函数，则必须使用显式调用它</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
