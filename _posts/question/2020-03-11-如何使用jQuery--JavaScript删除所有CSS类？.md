---
layout: question
title:  如何使用jQuery / JavaScript删除所有CSS类？
date:   2020-03-11T02:35:15.000Z
description: 除了可以单独调用$("#item").removeClass()一个元素可能没有的每个类之外，还有一个可以调用的函数可以从给定元素中删除所有CSS类吗？...
img: 
author: 阿飞十三
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了可以单独调用</font></font><code>$("#item").removeClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个元素可能没有的每个类之外，还有一个可以调用的函数可以从给定元素中删除所有CSS类吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery和原始JavaScript都可以使用。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题。</font><font style="vertical-align: inherit;">在我的禁用元素上应用了aspNetDisabled类，并且所有禁用控件的颜色都不正确。</font><font style="vertical-align: inherit;">因此，我使用jquery删除了我不会使用的每个元素/控件上的此类，并且一切正常，现在看起来很棒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我删除aspNetDisabled类的代码：</font></font></p>

<pre><code>$(document).ready(function () {<font></font>
<font></font>
    $("span").removeClass("aspNetDisabled");<font></font>
    $("select").removeClass("aspNetDisabled");<font></font>
    $("input").removeClass("aspNetDisabled");<font></font>
<font></font>
}); <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙小小米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于并非所有版本的jQuery都是相同的，因此您可能会遇到与我相同的问题，即调用$（“＃item”）。removeClass（）;。</font><font style="vertical-align: inherit;">实际上不会删除该类。</font><font style="vertical-align: inherit;">（可能是一个错误）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种更可靠的方法是简单地使用原始JavaScript并完全删除class属性。</font></font></p>

<pre><code>document.getElementById("item").removeAttribute("class");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试 </font></font><code>removeClass</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var nameClass=document.getElementsByClassName("clase1");<font></font>
console.log("after", nameClass[0]);<font></font>
$(".clase1").removeClass();<font></font>
var nameClass=document.getElementsByClassName("clase1");<font></font>
console.log("before", nameClass[0]);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div class="clase1"&gt;I am Div with class="clase1"&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等，如果未指定任何特定内容，removeClass（）是否默认不删除所有类？</font><font style="vertical-align: inherit;">所以</font></font></p>

<pre><code>$("#item").removeClass();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会自己做...</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
