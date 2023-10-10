---
layout: question
title:  如何使用Twitter Bootstrap隐藏元素并使用jQuery显示元素？
date:   2020-03-26T08:25:34.000Z
description: 假设我创建了这样的HTML元素，<div id="my-div" class="hidden">Hello, TB3</div><div id="m...
img: 
author: 西门猴子
category: question
answer: 5
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我创建了这样的HTML元素，</font></font></p>

<pre><code>&lt;div id="my-div" class="hidden"&gt;Hello, TB3&lt;/div&gt;<font></font>
&lt;div id="my-div" class="hide"&gt;Hello, TB4&lt;/div&gt;<font></font>
&lt;div id="my-div" class="d-none"&gt;Hello, TB4&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何显示和隐藏jQuery / Javascript中的HTML元素。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></strong></p>

<pre><code>$(function(){<font></font>
  $("#my-div").show();<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：（</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有任何这些）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望隐藏以上元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Bootstrap隐藏元素并使用jQuery显示元素的最简单方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3766篇《如何使用Twitter Bootstrap隐藏元素并使用jQuery显示元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在bootstrap 4中，您可以使用</font></font><code>d-none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class完全隐藏元素。
</font></font><a href="https://getbootstrap.com/docs/4.0/utilities/display/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.0/utilities/display/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hide和hidden均已弃用，以后又被删除，新版本中不再存在。</font><font style="vertical-align: inherit;">您可以根据需要使用d-none / d-sm-none / invisible等类。</font><font style="vertical-align: inherit;">删除它们的可能原因是因为CSS上下文中的隐藏/隐藏有些混乱。</font><font style="vertical-align: inherit;">在CSS中，隐藏（隐藏）用于可见性，而不是用于显示。</font><font style="vertical-align: inherit;">可见性和显示是不同的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要一个可见性类：隐藏，那么您需要可见性实用程序中的不可见类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查以下可见性和显示实用程序： </font></font></p>

<p><a href="https://getbootstrap.com/docs/4.1/utilities/visibility/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.1/utilities/visibility/</font></font></a></p>

<p><a href="https://getbootstrap.com/docs/4.1/utilities/display/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.1/utilities/display/</font></font></a>  </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><pre><code>$(function(){<font></font>
<font></font>
$("#my-div").toggle();<font></font>
<font></font>
$("#my-div").click(function(){$("#my-div").toggle()})<font></font>
<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//您甚至不必设置</font></font><code>#my-div</code> <code>.hide</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nor </font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需在事件函数中粘贴/重复该切换即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2.3升级到3.1时最近遇到了这种情况；</font><font style="vertical-align: inherit;">我们的jQuery动画（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">slideDown</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><strong><font style="vertical-align: inherit;">坏</font></strong><font style="vertical-align: inherit;">了，因为我们</font><font style="vertical-align: inherit;">在页面模板中的元素上</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了。</font><font style="vertical-align: inherit;">我们采用了创建带有空格的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！important</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则</font><font style="vertical-align: inherit;">的Bootstrap类的命名空间版本的方法</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>.rb-hide { display: none; }<font></font>
.rb-pull-left { float: left; }<font></font>
etc...<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomJinJin</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用bootstrap .collapse而不是.hidden</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稍后在JQuery中，您可以使用.show（）或.hide（）对其进行操作</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
