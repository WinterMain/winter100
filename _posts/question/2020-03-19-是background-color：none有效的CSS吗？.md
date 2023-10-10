---
layout: question
title:  是background-color：none有效的CSS吗？
date:   2020-03-19T04:09:34.000Z
description: 谁能告诉我以下CSS是否有效？.class {    background-color none;}...
img: 
author: 蛋蛋Itachi
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能告诉我以下CSS是否有效？</font></font></p>

<pre><code>.class {<font></font>
    background-color:none;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2347篇《是background-color：none有效的CSS吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我想解释一下我必须使用此解决方案的情况。</font><font style="vertical-align: inherit;">基本上，我想撤消另一个CSS设置的background-color属性。</font><font style="vertical-align: inherit;">预期的最终结果是使它看起来好像原始CSS从未应用background-color属性。</font><font style="vertical-align: inherit;">设置</font></font><code>background-color:transparent;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使之有效。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYHarryHarry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是不。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不正确的</font></font></h2>

<pre><code>.class {<font></font>
    background-color: none; /* do not do this */<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font></font></h2>

<pre><code>.class {<font></font>
    background-color: transparent;<font></font>
}<font></font>
</code></pre>

<p><code>background-color: transparent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成与您想做的事情</font></font><code>background-color: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小LDavaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，</font></font><code>transparent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您将其更改</font><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">无效，</font><font style="vertical-align: inherit;">请</font><font style="vertical-align: inherit;">在此示例中</font><font style="vertical-align: inherit;">查看</font></font><a href="http://jsfiddle.net/89Cqe/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例</font></font><code>transparent</code><font style="vertical-align: inherit;"></font><code>none</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用像 </font></font><code>.class { background-color:transparent; }</code></p>

<p></p><hr><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.class</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
在哪里</font><font style="vertical-align: inherit;">，您将命名透明类。</font></font><p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猪猪</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS级别3指定</font></font><code>unset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性值。</font><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/unset" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未设置CSS关键字是initial关键字和Inherited关键字的组合。</font><font style="vertical-align: inherit;">像其他两个CSS级关键字一样，它可以应用于任何CSS属性，包括全部的CSS缩写。</font><font style="vertical-align: inherit;">如果该属性从其父级继承，则将属性重置为其继承的值，否则，将其重置为初始值。</font><font style="vertical-align: inherit;">换句话说，在第一种情况下，它的行为类似于Inherit关键字，在第二种情况下，其行为与initial关键字类似。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，当前所有浏览器（包括IE，Safari和Opera）都不支持该值。</font><font style="vertical-align: inherit;">我建议</font></font><code>transparent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暂时使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>.class {<font></font>
    background-color:none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是有效的属性。</font><font style="vertical-align: inherit;">W3C验证器将显示以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值错误：background-color none不是背景颜色值：none</font></font></p>
</blockquote>

<p><code>transparent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发CSS规范时，</font><font style="vertical-align: inherit;">可能选择了更好的术语代替</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">otaku若</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写这个：   </font></font></p>

<pre><code>.class {<font></font>
background-color:transparent;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙GilMandy</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能想要</font></font><code>transparent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.w3.org/TR/CSS2/colors.html#propdef-background-color" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS 2.1规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规定了以下</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特性：</font></font></p>

<blockquote>
  <p><code>Value:   &lt;color&gt; | transparent | inherit</code></p>
</blockquote>

<p><code>&lt;color&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是关键字，也可以是颜色的数字表示。</font></font><a href="http://www.w3.org/TR/CSS2/syndata.html#value-def-color" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的</font></font><code>color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浅绿色，黑色，蓝色，紫红色，灰色，绿色，石灰，栗色，海军，橄榄色，橙色，紫色，红色，银色，蓝绿色，白色和黄色</font></font></p>
</blockquote>

<p><code>transparent</code> and <code>inherit</code> are valid keywords in their own right, but <code>none</code> is not.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
