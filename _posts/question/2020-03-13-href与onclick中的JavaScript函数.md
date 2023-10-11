---
layout: question
title:  href与onclick中的JavaScript函数
date:   2020-03-13T08:12:14.000Z
description: 我想在单击时运行一个简单的JavaScript函数，而无需任何重定向。将JavaScript调用放入href属性之间有什么区别或好处（如下所示：<...
img: 
author: 長ぐつをはいたネコ
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在单击时运行一个简单的JavaScript函数，而无需任何重定向。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JavaScript调用放入</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">之间有什么区别或好处</font><font style="vertical-align: inherit;">（如下所示：</font></font></p>

<pre><code>&lt;a href="javascript:my_function();window.print();"&gt;....&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）与将其放入</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性（</font><font style="vertical-align: inherit;">将其</font><font style="vertical-align: inherit;">绑定到</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件）？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1436篇《href与onclick中的JavaScript函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green留姬</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当页面嵌入Outlook的网页功能（将邮件文件夹设置为显示url）时，我遇到了javascript：hrefs不起作用的情况</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiTom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好</font><font style="vertical-align: inherit;">使用url，</font><font style="vertical-align: inherit;">因为它允许用户复制链接，在其他选项卡中打开等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下（例如，频繁更改HTML的网站），每次更新都绑定链接是不切实际的。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">典型的绑定方法</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通链接：</font></font></p>

<pre><code>&lt;a href="https://www.google.com/"&gt;Google&lt;a/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于JS来说是这样的：</font></font></p>

<pre><code>$("a").click(function (e) {<font></font>
    e.preventDefault();<font></font>
    var href = $(this).attr("href");<font></font>
    window.open(href);<font></font>
    return false;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法的好处是将标记和行为完全分开，而不必在每个链接中重复执行函数调用。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无绑定方法</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果不想每次都绑定，则可以使用onclick并传入元素和事件，例如：</font></font></p>

<pre><code>&lt;a href="https://www.google.com/" onclick="return Handler(this, event);"&gt;Google&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于JS：</font></font></p>

<pre><code>function Handler(self, e) {<font></font>
    e.preventDefault();<font></font>
    var href = $(self).attr("href");<font></font>
    window.open(href);<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法的好处是您可以随时加载新链接（例如，通过AJAX），而不必担心每次绑定。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中使用“ href”时，我注意到了另一件事：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果两次单击之间的时间差很短，则不会执行“ href”属性中的脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，尝试运行以下示例，然后双击每个链接（快速！）。</font><font style="vertical-align: inherit;">第一个链接将只执行一次。</font><font style="vertical-align: inherit;">第二个链接将执行两次。</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function myFunc() {<font></font>
    var s = 0;<font></font>
    for (var i=0; i&lt;100000; i++) {<font></font>
        s+=i;<font></font>
    }<font></font>
    console.log(s);<font></font>
}<font></font>
&lt;/script&gt;<font></font>
&lt;a href="javascript:myFunc()"&gt;href&lt;/a&gt;<font></font>
&lt;a href="#" onclick="javascript:myFunc()"&gt;onclick&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome（双击）和IE11（三次）中复制。</font><font style="vertical-align: inherit;">在Chrome中，如果您单击的速度足够快，则可以单击10次，并且只能执行1个功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox可以正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，我发现将javascript调用放在HREF标签中很烦人。</font><font style="vertical-align: inherit;">我通常并不十分注意某个内容是否为javascript链接，并且常常想在新窗口中打开内容。</font><font style="vertical-align: inherit;">当我尝试使用这些类型的链接之一执行此操作时，我得到的空白页上没有任何内容，并且我的位置栏中也没有javascript。</font><font style="vertical-align: inherit;">但是，通过使用onlick可以略过这一点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效</font></font></p>

<pre><code>&lt;a href="#" id="sampleApp" onclick="myFunction(); return false;"&gt;Click Here&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的答案是一种非常糟糕的做法，永远不要链接到一个空的哈希，因为它会在以后产生问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是将事件处理程序绑定到元素，正如其他许多人所说的那样，但是，它</font></font><code>&lt;a href="javascript:doStuff();"&gt;do stuff&lt;/a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每种现代浏览器中均能完美运行，并且在渲染模板时我广泛使用它，以避免必须为每个实例重新绑定。</font><font style="vertical-align: inherit;">在某些情况下，此方法可提供更好的性能。</font><font style="vertical-align: inherit;">青年汽车</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个有趣的小贴士...</font></font></p>

<p><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接调用javascript时有不同的行为。</font></font></p>

<p><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">上下文，而</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会，或者换句话说，</font></font><code>&lt;a href="javascript:doStuff(this)"&gt;no context&lt;/a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会</font></font><code>&lt;a onclick="javascript:doStuff(this)"&gt;no context&lt;/a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，我省略了</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">虽然不遵循规范，它会在所有的浏览器，但是，理想的应该包括</font></font><code>href="javascript:void(0);"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">良好的措施</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用以下代码对我有用： </font></font></p>

<pre><code>&lt;a id="LinkTest" title="Any Title"  href="#" onclick="Function(); return false; "&gt;text&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是：</font></font></p>

<pre><code>&lt;a href="#" onclick="someFunction(e)"&gt;&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，这将在浏览器中的页面URL末尾添加一个哈希（＃），因此要求用户单击两次“后退”按钮才能转到您的页面前。</font><font style="vertical-align: inherit;">考虑到这一点，您需要添加一些代码来停止事件传播。</font><font style="vertical-align: inherit;">大多数javascript工具包都已经具有此功能。</font><font style="vertical-align: inherit;">例如，dojo工具箱使用</font></font></p>

<pre><code>dojo.stopEvent(event);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了此处的所有内容之外，href还会显示在浏览器的状态栏中，而onclick不会显示。</font><font style="vertical-align: inherit;">我认为在此处显示javascript代码不是用户友好的。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
