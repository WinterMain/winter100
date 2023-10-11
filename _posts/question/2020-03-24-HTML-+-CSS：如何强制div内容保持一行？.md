---
layout: question
title:  HTML + CSS：如何强制div内容保持一行？
date:   2020-03-24T08:22:30.000Z
description: 我在a中有一个长文本，其中div包含definewidth：HTML：<div>Stack Overflow is the BEST \!\!\!</d...
img: 
author: 阿飞
category: question
answer: 10
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><a href="http://jsfiddle.net/NXchy/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在a中有一个长文本，其中</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含define</font></font><code>width</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div&gt;Stack Overflow is the BEST !!!&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>div {<font></font>
    border: 1px solid black;<font></font>
    width: 70px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎么能迫使字符串停留在一行（即在“溢出”的中间被切断）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><code>overflow: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但没有帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3509篇《HTML + CSS：如何强制div内容保持一行？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>div {<font></font>
    display: flex;<font></font>
    flex-direction: row; <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是对我有用的解决方案。</font><font style="vertical-align: inherit;">在某些情况下，</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">-lists。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些替代的方向值可以</font></font><code>row-reverse, column, column-reverse, unset, initial, inherit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
完成您期望他们做的事情</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到您的div</font></font></p>

<pre><code>white-space: nowrap;
</code></pre>

<p><a href="http://jsfiddle.net/NXchy/1/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/NXchy/1/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试设置高度，以使块无法增长以容纳您的文本，并保留</font></font><code>overflow: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这是您可能需要显示两行高的示例：</font></font></p>

<pre><code>div {<font></font>
    border: 1px solid black;<font></font>
    width: 70px;<font></font>
    height: 2.2em;<font></font>
    overflow: hidden;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我跳到这里寻找同样的东西，但没有一个对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，无论您做什么工作，都取决于系统（Oracle Designer：Oracle 11g-PL / SQL），div总是跳到下一行，在这种情况下，您应该使用span标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我创造了奇迹。</font></font></p>

<pre class="lang-css prettyprint-override"><code>&lt;span float: left; white-space: nowrap; overflow: hidden; onmouseover="rollOverImageSectionFiveThreeOne(this)"&gt;<font></font>
    &lt;input type="radio" id="radio4" name="p_verify_type" value="SomeValue"  /&gt;<font></font>
&lt;/span&gt; <font></font>
Just Your Text || <font></font>
&lt;span id="headerFiveThreeOneHelpText" float: left; white-space: nowrap; overflow: hidden;&gt;&lt;/span&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的CSS使用 </font></font><code>white-space:nowrap;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>div {<font></font>
    border: 1px solid black;<font></font>
    width: 70px;<font></font>
    overflow: hidden;<font></font>
    white-space: nowrap;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个人都跳了！！！</font><font style="vertical-align: inherit;">我也弄了个小提琴：</font></font></p>

<p><a href="http://jsfiddle.net/audetwebdesign/kh4aR/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/audetwebdesign/kh4aR/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RobAgar </font></font><code>white-space:nowrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先</font><font style="vertical-align: inherit;">指出要点</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font><code>overflow: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些</font><font style="vertical-align: inherit;">事情，</font><font style="vertical-align: inherit;">如果您不想看到多余的字符插入您的布局中，则需要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，如前所述，您可以使用</font></font><code>white-space: pre</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅EnderMB）牢记，它</font></font><code>pre</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会折叠空白，而</font></font><code>white-space: nowrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只会</font><font style="vertical-align: inherit;">折叠空白</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试看。</font><font style="vertical-align: inherit;">它使用</font></font><code>pre</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>nowrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想您希望它与之类似运行，</font></font><code>&lt;pre&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是两者都可以正常工作：</font></font></p>

<pre><code>div {<font></font>
    border: 1px solid black;<font></font>
    max-width: 70px;<font></font>
    white-space:pre;<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/NXchy/11/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/NXchy/11/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>white-space:nowrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>overflow:hidden</code></p>

<p><a href="http://jsfiddle.net/NXchy/8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/NXchy/8/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的HTML代码：
 </font></font><code>&lt;div&gt;Stack Overflow is the BEST !!!&lt;/div&gt;</code><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
CSS：</font></font></p>

<pre><code>div {<font></font>
    width: 100px;<font></font>
    white-space:nowrap;<font></font>
    overflow:hidden;<font></font>
    text-overflow:ellipsis;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的结果应该是：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈溢出</font></font></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
