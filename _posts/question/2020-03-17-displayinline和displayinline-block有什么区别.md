---
layout: question
title:  display：inline和display：inline-block有什么区别？
date:   2020-03-17T07:48:40.000Z
description: inline和inline-block的CSS值之间到底有什么区别display？...
img: 
author: Near小胖
category: question
answer: 4
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS值</font><font style="vertical-align: inherit;">之间到底有什么区别</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1898篇《display：inline和display：inline-block有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/14033814/2164304"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splattne的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能涵盖了大多数内容，因此我不会重复同样的事情，而是：</font></font><code>inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">CSS属性的</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为有所不同</font></font><code>direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下一个代码片段中，您可以看到</font></font><code>one two</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（按顺序）已渲染，就像在LTR布局中一样。</font><font style="vertical-align: inherit;">我怀疑这里的浏览器会自动将英文部分检测为LTR文本，并从左到右进行渲染。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>body {<font></font>
  text-align: right;<font></font>
  direction: rtl;<font></font>
}<font></font>
<font></font>
h2 {<font></font>
  display: block; /* just being explicit */<font></font>
}<font></font>
<font></font>
span {<font></font>
  display: inline;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h2&gt;<font></font>
  هذا عنوان طويل<font></font>
  &lt;span&gt;one&lt;/span&gt;<font></font>
  &lt;span&gt;two&lt;/span&gt;<font></font>
&lt;/h2&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我继续将其设置</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则浏览器似乎会尊重该</font></font><code>direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，并按从右到左的顺序依次渲染元素，从而</font></font><code>two one</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染出来。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>body {<font></font>
  text-align: right;<font></font>
  direction: rtl;<font></font>
}<font></font>
<font></font>
h2 {<font></font>
  display: block; /* just being explicit */<font></font>
}<font></font>
<font></font>
span {<font></font>
  display: inline-block;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h2&gt;<font></font>
  هذا عنوان طويل<font></font>
  &lt;span&gt;one&lt;/span&gt;<font></font>
  &lt;span&gt;two&lt;/span&gt;<font></font>
&lt;/h2&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道是否还有其他怪癖，我只是在Chrome上凭经验发现了这一点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案中未提及的一件事是，内联元素可以在行之间中断，而内联块不能（显然是块）！</font><font style="vertical-align: inherit;">因此，内联元素可用于设置文本句子和其中的块的样式，但是由于无法填充它们，因此可以改用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">line-height</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div style="width: 350px"&gt;<font></font>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<font></font>
  &lt;div style="display: inline; background: #F00; color: #FFF"&gt;<font></font>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<font></font>
  &lt;/div&gt;<font></font>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<font></font>
&lt;/div&gt;<font></font>
&lt;hr/&gt;<font></font>
&lt;div style="width: 350px"&gt;<font></font>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<font></font>
  &lt;div style="display: inline-block; background: #F00; color: #FFF"&gt;<font></font>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<font></font>
  &lt;/div&gt;<font></font>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="https://i.stack.imgur.com/xXdn3.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/xXdn3.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>display: inline;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在句子中使用的显示模式。</font><font style="vertical-align: inherit;">例如，如果您有一个段落并想要突出显示一个单词，则可以执行以下操作：</font></font></p>

<pre><code>&lt;p&gt;<font></font>
    Pellentesque habitant morbi &lt;em&gt;tristique&lt;/em&gt; senectus<font></font>
    et netus et malesuada fames ac turpis egestas.<font></font>
&lt;/p&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素有一个</font></font><code>display: inline;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，因为这个标签是在一个句子总是使用。</font><font style="vertical-align: inherit;">该</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font><code>display: block;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">，因为它既不是句子也不是句子，而是句子的一部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的元素</font></font><code>display: inline;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或垂直</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有一个元素</font></font><code>display: block;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果您想将添加</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，你需要设置这个元素</font></font><code>display: inline-block;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，您可以</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在元素和其他所有块样式（的</font></font><code>block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一部分</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">添加a </font><font style="vertical-align: inherit;">，但将其放置在句子中（的</font></font><code>inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Harry路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉答案</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想象一个</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，如果您将</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素的高度设置为100px并带有红色边框，则其外观如下所示：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示：内联</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/Emf0B.png" alt="显示：内联"></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示：内联块</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/1vbks.png" alt="显示：内联块"></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示：块</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/IPf9Q.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码：</font><a href="http://jsfiddle.net/Mta2b/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/Mta2b/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/Mta2b/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><code>display:inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>display:inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">类似于</font><font style="vertical-align: inherit;">元素，但是它们可以具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">width</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">height</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这意味着您可以将inline-block元素用作块，同时在文本或其他元素中流动它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的样式的不同之处为摘要：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：只</font></font><code>margin-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>margin-right</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>padding-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>padding-right</code></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联块</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>width</code></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
