---
layout: question
title:  <input type =“ text” />中的多行输入
date:   2020-03-23T02:25:18.000Z
description: 我有以下形式的文本输入：<input type="text"       cols="40"        rows="5"        st...
img: 
author: 凯凯
category: question
answer: 7
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下形式的文本输入：</font></font></p>

<pre><code>&lt;input type="text"<font></font>
       cols="40" <font></font>
       rows="5" <font></font>
       style="width:200px; height:50px;" <font></font>
       name="Text1" <font></font>
       id="Text1" <font></font>
       value="" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图让它接受多行输入。</font><font style="vertical-align: inherit;">宽度和高度会使框变大，但用户可以输入所有想要的文本，但它只能填充一行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使输入更像文本区域？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2646篇《<input type =“ text” />中的多行输入》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入不支持多行。</font><font style="vertical-align: inherit;">您需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用文本区域</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来实现该功能。</font></font></p>

<pre><code>&lt;textarea name="Text1"&gt;&lt;/textarea&gt;
</code></pre>

<hr>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，</font><strong><font style="vertical-align: inherit;">标记中</font></strong></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是属性中：</font></font></p>
</blockquote>

<pre><code>&lt;textarea&gt;INITIAL VALUE GOES HERE&lt;/textarea&gt;
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不能自我关闭，因为： </font></font><code>&lt;textarea/&gt;</code></p>
</blockquote>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参阅</font></font><a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.7" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该使用它</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来支持多行输入。</font></font></p>

<pre><code>&lt;textarea rows="4" cols="50"&gt;<font></font>
Here you can write some text to display in the textarea as the default text<font></font>
&lt;/textarea&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYMandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过赋予</font></font><code>word-break: break-word;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，</font><font style="vertical-align: inherit;">可以使文本输入多行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（仅在Chrome中对此进行测试）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用文本区域进行多行处理。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;textarea name="Text1" cols="40" rows="5"&gt;&lt;/textarea&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查一下：</font></font></p>

<ul>
<li><a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.7" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/html401/interact/forms.html#h-17.7</font></font></a></li>
</ul>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TEXTAREA元素创建多行文本输入控件</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用文本区域 </font></font></p>

<pre><code>&lt;textarea name="textarea" style="width:250px;height:150px;"&gt;&lt;/textarea&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始和结束标记之间不要留任何空格。否则，这会留一些空行或空格。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你不能 </font><font style="vertical-align: inherit;">在撰写本文时，唯一设计为多行的HTML表单元素是</font></font><a href="https://developer.mozilla.org/en/HTML/Element/textarea" rel="nofollow noreferrer"><code>&lt;textarea&gt;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
