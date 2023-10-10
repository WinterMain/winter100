---
layout: question
title:  Twitter Bootstrap-如何将元素水平或垂直居中
date:   2020-03-24T01:18:09.000Z
description: 有什么办法可以在主要父级中垂直或水平居中html元素？...
img: 
author: 樱小胖Mandy
category: question
answer: 11
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以在主要父级中垂直或水平居中html元素？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Bootstrap 4中发现可以执行以下操作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心水平</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实是</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一流的</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心垂直，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是使用引导程序类添加了两者，</font></font><code>mb-auto mt-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此margin-top和marginbottom被设置为auto。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用bootstrap 4，您可以使用flex</font></font></p>

<pre><code>&lt;div class="d-flex justify-content-center align-items-center"&gt;<font></font>
    &lt;button type="submit" class="btn btn-primary"&gt;Create&lt;/button&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="https://getbootstrap.com/docs/4.1/utilities/flex/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap 4.1</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap 4 + Flex解​​决此问题 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="d-flex justify-content-center align-items-center"&gt;<font></font>
    &lt;button type="submit" class="btn btn-primary"&gt;Create&lt;/button&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该居中水平和垂直居中 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢类似问题的解决方案。</font></font><a href="https://stackoverflow.com/a/25036303/2364401"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/25036303/2364401</font></font></a><font style="vertical-align: inherit;"></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实际的表数据</font></font><code>&lt;td&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和表头</font></font><code>&lt;th&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用bootstraps </font><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以</font></font></p>

<p><code>&lt;td class="text-center"&gt;Cell data&lt;/td&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<p><code>&lt;th class="text-center"&gt;Header cell data&lt;/th&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于水平居中，您可以具有以下内容：</font></font></p>

<pre><code>.centering{<font></font>
float:none;<font></font>
margin:0 auto<font></font>
}<font></font>
<font></font>
 &lt;div class="span8 centering"&gt;&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样直接写入您的css文件： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.content {<font></font>
  position: absolute;<font></font>
  top: 50%;<font></font>
  left:50%;<font></font>
  transform: translate(-50%,-50%);<font></font>
  }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class = "content" &gt;<font></font>
  <font></font>
   &lt;p&gt; some text &lt;/p&gt;<font></font>
  &lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这个问题的未来访客：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试将div中的图像居中，但该图像无法居中，则可以描述您的问题：</font></font></p>

<p><a href="https://jsfiddle.net/e0cr1nL2/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle DEMO的问题</font></font></a></p>

<pre><code>&lt;div class="col-sm-4 text-center"&gt;<font></font>
    &lt;img class="img-responsive text-center" src="myPic.jpg" /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>img-responsive</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类添加</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到图像标签，其停止指令</font></font><code>text-align:center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从工作类）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></p>

<pre><code>&lt;div class="col-sm-4"&gt;<font></font>
    &lt;img class="img-responsive center-block" src="myPic.jpg" /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><kbd><a href="https://jsfiddle.net/e0cr1nL2/1/" rel="nofollow noreferrer"><strong>jsFiddle of the solution</strong></a></kbd></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类将覆盖</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>img-responsive</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类所</font><font style="vertical-align: inherit;">放置</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">指令</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><code>img-responsive</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">课程，图像将仅通过添加</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">课程而居中</font></font></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您应该了解</font></font><a href="https://medium.com/codingthesmartway-com-blog/introduction-to-bootstrap-4-flex-layout-flexbox-for-bootstrap-f85405ce5ebf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flexbox</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的基础知识</font><font style="vertical-align: inherit;">以及如何使用它，因为</font></font><a href="https://www.w3schools.com/bootstrap4/bootstrap_flex.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap4现在可以原生使用它了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><a href="https://www.youtube.com/watch?v=k32voqQhODc" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Brad Schiff</font></a><font style="vertical-align: inherit;">精彩的快节奏</font></font><a href="https://www.youtube.com/watch?v=k32voqQhODc" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视频教程</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很棒的</font></font><a href="https://yoksel.github.io/flex-cheatsheet/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备忘单</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个 </font></font></p>

<pre><code>&lt;style&gt;<font></font>
    html, body {<font></font>
        height: 100%;<font></font>
        margin: 0;<font></font>
        padding: 0 0;<font></font>
    }<font></font>
<font></font>
    .container-fluid {<font></font>
        height: 100%;<font></font>
        display: table;<font></font>
        width: 100%;<font></font>
        padding-right: 0;<font></font>
        padding-left: 0;<font></font>
    }<font></font>
<font></font>
    .row-fluid {<font></font>
        height: 100%;<font></font>
        display: table-cell;<font></font>
        vertical-align: middle;<font></font>
        width: 100%;<font></font>
    }<font></font>
<font></font>
    .centering {<font></font>
        float: none;<font></font>
        margin: 0 auto;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div class="container-fluid"&gt;<font></font>
        &lt;div class="row-fluid"&gt;<font></font>
            &lt;div class="offset3 span6 centering"&gt;<font></font>
                content here<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://getbootstrap.com/css/#helper-classes-center" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将元素设置为</font></font><code>display: block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并通过居中</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可作为mixin和class。</font></font></p>
</blockquote>

<pre><code>&lt;div class="center-block"&gt;...&lt;/div&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新于2018</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定心</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法已经改变..</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BS4中的水平中心</font></font></strong></p>

<ul>
<li><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍用于</font></font><code>display:inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font></li>
<li><code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取代</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心</font></font><code>display:flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">儿童</font></font></li>
<li><code>offset-*</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></em> <code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于居中网格列</font></font></li>
</ul>

<p><code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（自动x轴边距）将围绕</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>display:flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有一元件</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">限定的宽度</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，（ ，</font><font style="vertical-align: inherit;">，</font></font><code>%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> </font><font style="vertical-align: inherit;">等。）。</font><strong><font style="vertical-align: inherit;">默认情况下，</font></strong><font style="vertical-align: inherit;">在网格列上</font><strong><font style="vertical-align: inherit;">使用Flexbox</font></strong><font style="vertical-align: inherit;">，因此还有多种flexbox居中方法。</font></font><code>vw</code><font style="vertical-align: inherit;"></font><code>px</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><a href="http://www.codeply.com/go/SOSvvKpLOc" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Bootstrap 4水平居中</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关BS4中的垂直居中的信息，请参见</font></font></strong> <a href="https://stackoverflow.com/a/41464397/171456"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/41464397/171456</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：虽然这个答案早在2013年初就可能是正确的，但现在不应该再使用。</font><font style="vertical-align: inherit;">正确的解决方案</font></font><a href="https://stackoverflow.com/a/40002430/1729885"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用offsets</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于其他用户的建议，也可以使用本机引导程序类，例如：</font></font></p>

<pre><code>class="text-center"<font></font>
class="pagination-centered"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢@Henning和@trejder</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
