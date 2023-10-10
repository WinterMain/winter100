---
layout: question
title:  我是否应该使用CSS width / height或HTML cols / rows属性设置文本区域的大小？
date:   2020-03-23T07:09:51.000Z
description: 每次我开发包含的新表格时，textarea当我需要指定尺寸时都会遇到以下难题：使用CSS或使用textarea的属性cols以及rows？每种方法...
img: 
author: JinJin
category: question
answer: 8
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次我开发包含的新表格时，</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我需要指定尺寸时都会遇到以下难题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的属性</font></font><code>cols</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>rows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每种方法的优缺点是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这些属性的语义是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常如何做？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2892篇《我是否应该使用CSS width / height或HTML cols / rows属性设置文本区域的大小？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本区域的主要特征是它们是可扩展的。</font><font style="vertical-align: inherit;">在网页上，如果文本长度超出了您设置的空间（使用行或使用CSS的空间），这可能会导致滚动条出现在文本区域上。当用户决定打印时，尤其是使用“打印”为PDF-因此，使用条件CSS规则为打印的文本区域设置一个舒适的最小最小高度：</font></font></p>

<pre><code>@media print { <font></font>
textarea {<font></font>
min-height: 900px;  <font></font>
}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常不指定</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但指定</font></font><code>width: ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>rows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>cols</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，在我的情况下，仅</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>rows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要，文本区域相对于其他元素看起来不错。</font><font style="vertical-align: inherit;">（</font></font><code>cols</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如其他答案所述，如果有人不使用CSS，</font><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">是一个后备方法。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（（同时指定两者</font></font><code>rows</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感觉有点像我想复制数据吗？）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于文本区域，我们可以使用下面的CSS来固定大小</font></font></strong> </p>

<pre><code>    &lt;textarea  class="form-control" style=" min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" &gt;&lt;/textarea&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在angularjs和angular7中测试</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据w3c，cols和row都是textareas必需的属性。</font><font style="vertical-align: inherit;">行和列是要适合文本区域的字符数，而不是像素或其他可能的任意值。</font><font style="vertical-align: inherit;">与行/列。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是“是”。</font><font style="vertical-align: inherit;">也就是说，您应该同时使用两者。</font><font style="vertical-align: inherit;">没有行和列（即使没有显式使用它们也有默认值），如果CSS被用户样式表禁用或覆盖，则文本区域将变得很小。</font><font style="vertical-align: inherit;">始终牢记可访问性问题。</font><font style="vertical-align: inherit;">就是说，如果允许样式表控制文本区域的外观，则通常会得到看起来更好的东西，可以很好地适合整个页面设计，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以调整大小以跟上用户输入（当然，在好味道的范围内）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML集中</font></font></p>

<pre><code>&lt;textarea rows="10"&gt;&lt;/textarea&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS集中 </font></font></p>

<pre><code>textarea { height: auto; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将触发浏览器将textarea的高度精确设置为行数加上周围的填充。</font><font style="vertical-align: inherit;">将CSS高度设置为精确的像素数量会留下任意空格。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本区域的大小可以由cols和rows属性指定，甚至更好；</font><font style="vertical-align: inherit;">通过CSS的height和width属性。</font><font style="vertical-align: inherit;">所有主要浏览器均支持cols属性。</font><font style="vertical-align: inherit;">一个主要区别是</font></font><code>&lt;TEXTAREA ...&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器标记：它具有开始标记（）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议同时使用。</font><font style="vertical-align: inherit;">如果客户端不支持CSS，则行和列是必需且有用的。</font><font style="vertical-align: inherit;">但是作为一名设计师，我将它们改写成我想要的尺寸。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推荐的方法是通过外部样式表，例如</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>textarea {<font></font>
  width: 300px;<font></font>
  height: 150px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;textarea&gt; &lt;/textarea&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
