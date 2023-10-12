---
layout: question
title:  html中的data-reactid属性是什么？
date:   2020-03-12T09:31:08.000Z
description: 当我浏览某些页面的HTML时，我注意到其中一些页面使用此属性“ data-reactid”，例如：  <a data-reactid="......"...
img: 
author: 小宇宙十三
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我浏览某些页面的HTML时，我注意到其中一些页面使用此属性“ data-reactid”，例如： </font></font></p>

<pre><code> &lt;a data-reactid="......" &gt;&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该属性是什么，其功能是什么？  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1214篇《html中的data-reactid属性是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个自定义html属性，但在这种情况下，可能由Facebook React JS库使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看：</font><a href="http://facebook.github.io/react/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://facebook.github.io/react/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是HTML数据属性。</font><font style="vertical-align: inherit;">详情请参见：</font><a href="http://html5doctor.com/html5-custom-data-attributes/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://html5doctor.com/html5-custom-data-attributes/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//html5doctor.com/html5-custom-data-attributes/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，它只是您的自定义数据的容器，同时仍使HTML有效。</font><font style="vertical-align: inherit;">它</font></font><code>data-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加上一些唯一的标识符。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据属性通常用于各种交互。</font><font style="vertical-align: inherit;">通常通过javascript。</font><font style="vertical-align: inherit;">它们不会影响任何有关站点行为的内容，并且可以作为方便的方法出于任何目的传递数据。</font><font style="vertical-align: inherit;">这是一篇可能会解决问题的文章：</font></font></p>

<p><a href="http://ejohn.org/blog/html-5-data-attributes/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ejohn.org/blog/html-5-data-attributes/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过在</font></font><code>data-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何标准属性安全字符串（不带空格或特殊字符的字母数字）之前</font><font style="vertical-align: inherit;">添加前缀</font><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">创建数据属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，</font></font><code>data-id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font></font><code>data-reactid</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://html5doctor.com/html5-custom-data-attributes/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中的</font><a href="http://html5doctor.com/html5-custom-data-attributes/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;">自定义数据属性</font></strong></a></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的回答中引用伊恩的评论：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是元素上的一个属性（有效值），可用于存储有关它的数据/信息。 </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，此代码稍后在事件处理程序中对其进行检索，并使用它来查找目标输出元素。</font><font style="vertical-align: inherit;">它有效地存储应在其文本输出的div的类。</font></font></p>
</blockquote>

<p><code>reactid</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个后缀，您可以在此处使用任何名称，例如：</font></font><code>data-Ayman</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想找到区别，请在此</font></font><a href="https://stackoverflow.com/a/17573494/1671639"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SO答案和评论中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查小提琴</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
