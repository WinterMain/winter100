---
layout: question
title:  ：before是否不适用于img元素？
date:   2020-03-24T07:01:49.000Z
description: 我正在尝试使用 before选择器将图像放置在另一个图像上，但是我发现将图像放置在一个img元素之前（仅在其他某个元素之前）根本不起作用。具体来说，我的风...
img: 
author: 小哥阳光
category: question
answer: 7
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器将图像放置在另一个图像上，但是我发现将图像放置在一个</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">（仅在其他</font><font style="vertical-align: inherit;">某个</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">之前）根本不起作用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">具体来说，我的风格是：</font></font></p>

<pre><code>.container<font></font>
{<font></font>
   position: relative;<font></font>
   display: block;<font></font>
}<font></font>
<font></font>
.overlay:before<font></font>
{<font></font>
    content: url(images/[someimage].png);<font></font>
    position: absolute;<font></font>
    left:-20px;<font></font>
    top: -20px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这很好用：</font></font></p>

<pre><code>&lt;a href="[url]" class="container"&gt;<font></font>
  &lt;span class="overlay"/&gt;<font></font>
  &lt;img width="200" src="[url]"/&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不是：</font></font></p>

<pre><code>&lt;a href="[url]" class="container"&gt;<font></font>
  &lt;img width="200" src="[url]" class="overlay"/&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素代替它</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，浏览器可以将我的图像正确地覆盖在该</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素中</font><font style="vertical-align: inherit;">的图像上</font><font style="vertical-align: inherit;">，但是如果我将overlay类应用于</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自身，则无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这项工作能够正常进行，因为这会让我感到不</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">舒服，但更重要的是，我有大约100个我想修改的博客文章，如果可以修改样式表，我可以一口气做到这一点，但是如果我必须返回并</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">之间</font><font style="vertical-align: inherit;">添加一个额外</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">元素，这将需要做更多的工作。  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3415篇《：before是否不适用于img元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：  </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html</font></font></strong></p>

<pre><code>&lt;ul&gt;<font></font>
    &lt;li&gt; name here &lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>ul li::before {<font></font>
    content: url(../images/check.png);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在前一个元素上</font><font style="vertical-align: inherit;">尝试</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:: after</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:: before和:: after生成的伪元素包含在元素的格式框中，因此不适用于替换的元素（例如img）或br元素。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::after" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/CSS/ ::之后</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>::after</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图像的后备</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图像</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见下面的示例，前两个</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记指向断开的网址。</font><font style="vertical-align: inherit;">但是第二个显示的是备用图片，而不是浏览器中默认的损坏徽标。</font><font style="vertical-align: inherit;">但是，我不确定这是否可行，我觉得要使其正常工作有点棘手。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>img {<font></font>
  position: relative;<font></font>
  display: inline-block;<font></font>
  width: 300px;<font></font>
  height: 200px;<font></font>
  vertical-align: top;<font></font>
}<font></font>
img:not(:first-child)::after {<font></font>
  position: absolute;<font></font>
  left: 0; top: 0; right: 0; bottom: 0;<font></font>
  content: "&lt;" attr(alt) "&gt; NOT FOUND";<font></font>
  border: 1px dashed #999;<font></font>
  background: url(https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg) center/100%;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;img src="https://source.unsplash.com/random/100/75" alt="logo"&gt;<font></font>
&lt;img src="https://source.unsplash.com/random/100/75" alt="logo"&gt;<font></font>
&lt;img src="https://source.unsplash.com/random/100x75" alt="logo"&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，查看为什么此方法无效的最佳方法是：before和：after在将它们应用到标签内的内容之前或之后插入它们的内容。</font><font style="vertical-align: inherit;">因此，它可以与div或spans（或大多数其他标签）一起使用，因为您可以将内容放入其中。</font></font></p>

<pre><code>&lt;div&gt;<font></font>
:before<font></font>
Content<font></font>
:after<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，img是一个自包含的，自动关闭的标签，并且由于它没有单独的关闭标签，因此您不能在其中添加任何内容。</font><font style="vertical-align: inherit;">（这看起来应该像</font></font><code>&lt;img&gt;Content&lt;/img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是当然不起作用。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个老话题，但是它首先出现在Google上，因此希望它可以帮助其他人学习。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Pro逆天</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前和之后的伪选择器不会插入HTML元素，而是在目标元素的现有内容之前或之后插入文本。</font><font style="vertical-align: inherit;">由于图像元素不包含文本或有后代，既不</font></font><code>img:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>img:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将你带来任何好处。</font><font style="vertical-align: inherit;">这也是相同的元件的情况下</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;hr&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于同样的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖LEY西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><a href="https://www.w3.org/TR/html50/embedded-content-0.html#the-img-element" rel="noreferrer"><code>&lt;img&gt;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换元素</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的性质</font><font style="vertical-align: inherit;">，文档样式不会影响它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何要引用它，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" rel="noreferrer"><code>&lt;picture&gt;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了一个理想的本地包装器，可以在其上附加伪元素，如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>img:after, picture:after{<font></font>
    content:"\1F63B";<font></font>
    font-size:larger;<font></font>
    margin:-1em;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;img src="//placekitten.com/110/80"&gt;<font></font>
<font></font>
&lt;picture&gt;<font></font>
    &lt;img src="//placekitten.com/110/80"&gt;<font></font>
&lt;/picture&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
