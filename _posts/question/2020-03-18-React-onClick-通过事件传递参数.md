---
layout: question
title:  React onClick-通过事件传递参数
date:   2020-03-18T09:07:00.000Z
description: 没有参数function clickMe(e){  //e is the event}<button onClick={this.clickM...
img: 
author: 逆天Pro逆天
category: question
answer: 4
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有参数</font></font></em></h2>

<pre><code>function clickMe(e){<font></font>
  //e is the event<font></font>
}<font></font>
<font></font>
&lt;button onClick={this.clickMe}&gt;&lt;/button&gt;<font></font>
</code></pre>

<h2><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带参数</font></font></em></h2>

<pre><code>function clickMe(parameter){<font></font>
  //how to get the "e" ?<font></font>
}<font></font>
&lt;button onClick={() =&gt; this.clickMe(someparameter)}&gt;&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想得到</font></font><code>event</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我怎么才能得到它？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2097篇《React onClick-通过事件传递参数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Near阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完全解决造成新的回调问题，利用</font></font><code>data-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性是IMO的最佳解决方案。</font><font style="vertical-align: inherit;">从一天开始，即使您提取了一个子组件来传递参数，它仍然会创建新功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>const handleBtnClick = e =&gt; {<font></font>
  const { id } = JSON.parse(e.target.dataset.onclickparam);<font></font>
  // ...<font></font>
};<font></font>
<font></font>
&lt;button onClick={handleBtnClick} data-onclickparam={JSON.stringify({ id: 0 })}&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">属性的信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes</font></font></a><font style="vertical-align: inherit;"></font><code>data-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案1</font></font></strong>    </p>

<pre><code>function clickMe(parameter, event){<font></font>
}<font></font>
<font></font>
&lt;button onClick={(event) =&gt; {this.clickMe(someparameter, event)}&gt;&lt;/button&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
在</font><strong><font style="vertical-align: inherit;">解决方案1中，</font></strong><font style="vertical-align: inherit;">使用绑定函数比使用箭头函数更好。请注意，事件参数应该是处理函数中的最后一个参数。</font></font></p>

<pre><code>function clickMe(parameter, event){<font></font>
}<font></font>
<font></font>
&lt;button onClick={this.clickMe.bind(this, someParameter)}&gt;&lt;/button&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6，您可以像这样更短地进行操作：</font></font></p>

<pre><code>const clickMe = (parameter) =&gt; (event) =&gt; {<font></font>
    // Do something<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用它：</font></font></p>

<pre><code>&lt;button onClick={clickMe(someParameter)} /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>&lt;button onClick={(e) =&gt; {<font></font>
     this.clickMe(e, someParameter)<font></font>
}}&gt;Click Me!&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在您的职能：</font></font></p>

<pre><code>function clickMe(event, someParameter){<font></font>
     //do with event<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
