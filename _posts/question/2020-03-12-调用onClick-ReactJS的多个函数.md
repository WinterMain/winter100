---
layout: question
title:  调用onClick ReactJS的多个函数
date:   2020-03-12T07:45:11.000Z
description: 我知道在香草js中，我们可以做到onclick="f1();f2()"在ReactJS中进行两个函数onClick的等效操作是什么？我知道调...
img: 
author: 乐米亚
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道在香草js中，我们可以做到</font></font></p>

<pre><code>onclick="f1();f2()"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ReactJS中进行两个函数onClick的等效操作是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道调用一个函数是这样的： </font></font></p>

<pre><code>onClick={f1}
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您可以使用箭头函数（ES6 +）或简单的旧函数声明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通函数声明类型（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非ES6 +</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>&lt;link href="#" onClick={function(event){ func1(event); func2();}}&gt;Trigger here&lt;/link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名功能或箭头功能类型（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6 +</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>&lt;link href="#" onClick={(event) =&gt; { func1(event); func2();}}&gt;Trigger here&lt;/link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二条是我所知道的最短的道路。</font><font style="vertical-align: inherit;">希望对您有帮助！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将两个函数的调用包装在另一个函数/方法中。</font><font style="vertical-align: inherit;">这是该想法的几个变体：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）分开的方法</font></font></strong></p>

<pre><code>var Test = React.createClass({<font></font>
   onClick: function(event){<font></font>
      func1();<font></font>
      func2();<font></font>
   },<font></font>
   render: function(){<font></font>
      return (<font></font>
         &lt;a href="#" onClick={this.onClick}&gt;Test Link&lt;/a&gt;<font></font>
      );<font></font>
   }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用ES6类：</font></font></p>

<pre><code>class Test extends React.Component {<font></font>
   onClick(event) {<font></font>
      func1();<font></font>
      func2();<font></font>
   }<font></font>
   render() {<font></font>
      return (<font></font>
         &lt;a href="#" onClick={this.onClick}&gt;Test Link&lt;/a&gt;<font></font>
      );<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）内联</font></font></strong></p>

<pre><code>&lt;a href="#" onClick={function(event){ func1(); func2()}}&gt;Test Link&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或等效于ES6：</font></font></p>

<pre><code>&lt;a href="#" onClick={() =&gt; { func1(); func2();}}&gt;Test Link&lt;/a&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
