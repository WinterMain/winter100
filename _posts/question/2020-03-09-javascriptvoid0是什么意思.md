---
layout: question
title:  “ javascript：void（0）”是什么意思？
date:   2020-03-09T13:26:37.000Z
description: <a href="javascript void(0)" id="loginlink">login</a>我已经看过href很多次了，但是我不知道那...
img: 
author: 阿飞小卤蛋
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>&lt;a href="javascript:void(0)" id="loginlink"&gt;login&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看过</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多次了，但是我不知道那是什么意思。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第275篇《“ javascript：void（0）”是什么意思？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEY米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web开发人员</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">它，是因为它是防止</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">默认行为的最简单方法</font><font style="vertical-align: inherit;">。</font></font><code>void(*anything*)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个虚假的值。</font><font style="vertical-align: inherit;">并且返回假值就像</font></font><code>return false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">标记</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件中</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阻止其默认行为一样。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我认为这</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是防止</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">默认行为的最简单方法</font><font style="vertical-align: inherit;">。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符计算给定表达式，然后返回未定义。</font><font style="vertical-align: inherit;">这样可以避免刷新页面。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To understand this concept one should first understand the void operator in JavaScript.</p>

<p>The syntax for the void operator is: <code>void «expr»</code> which evaluates expr and returns undefined.</p>

<p>If you implement void as a function, it looks as follows:</p>

<pre><code>function myVoid(expr) {<font></font>
    return undefined;<font></font>
}<font></font>
</code></pre>

<p>This void operator has one important usage that is - discarding the result of an expression.</p>

<p>In some situations, it is important to return undefined as opposed to the result of an expression. Then void can be used to discard that result. One such situation involves javascript: URLs, which should be avoided for links, but are useful for bookmarklets. When you visit one of those URLs, many browsers replace the current document with the result of evaluating the URLs “content”, but only if the result isn’t undefined. Hence, if you want to open a new window without changing the currently displayed content, you can do the following:</p>

<pre><code>javascript:void window.open("http://example.com/")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法的使用</font></font><code>javascript:void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着HTML的作者滥用了anchor元素而不是button元素。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将href设置为“＃”或“ javascript：void（0）”来防止页面刷新，锚点标记通常会与onclick事件一起使用以创建伪按钮。</font><font style="vertical-align: inherit;">当复制/拖动链接，在新选项卡/窗口中打开链接，添加书签以及JavaScript仍在下载，错误输出或被禁用时，这些值会导致意外行为。</font><font style="vertical-align: inherit;">这也将不正确的语义传达给辅助技术（例如屏幕阅读器）。</font><font style="vertical-align: inherit;">在这种情况下，建议改用a </font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通常，您只应使用锚来使用正确的URL进行导航。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN的</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Page</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，在检查undefined时有时会看到void 0，这仅仅是因为它需要较少的字符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>something === undefined
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>something === void 0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，某些缩小方法会将undefined替换为void 0。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是将JavaScript函数添加到HTML链接的一种非常流行的方法。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font><code>[Print]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在许多网页上看到</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">链接是这样写的：</font></font></p>

<pre><code>&lt;a href="javascript:void(0)" onclick="callPrintFunction()"&gt;Print&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我们需要</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消磨</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独可以完成这项工作？</font><font style="vertical-align: inherit;">因为当用户将鼠标悬停在“打印”文本上时</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，光标将变为尖号（ꕯ）而不是指针（👆）。</font><font style="vertical-align: inherit;">仅</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签上才会将其验证为超链接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的替代方法</font></font><code>href="javascript:void(0);"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使用</font></font><code>href="#"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此替代方法不需要在用户浏览器中打开JavaScript，因此更加兼容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">上应始终带有href </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">调用返回“ undefined”的JavaScript函数就可以了。</font><font style="vertical-align: inherit;">因此将链接到“＃”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 6中没有href的锚标记不会</font></font><code>a:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这是可怕的轻微危害人类罪，但Internet Explorer 6也是这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 6实际上是危害人类的主要罪行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“＃”与javascript：void的行为存在巨大差异</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“＃”将您滚动到页面的顶部，而“ javascript：void（0）;” </font><font style="vertical-align: inherit;">才不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要编码动态页面，这非常重要。</font><font style="vertical-align: inherit;">用户不希望仅单击页面上的链接就返回顶部。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符计算给定表达式，然后返回</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作者经常被用来仅获取</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始值，通常使用“ </font></font><code>void(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”（这是相当于“ </font></font><code>void 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”）。</font><font style="vertical-align: inherit;">在这些情况下，</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/undefined" rel="noreferrer"><code>undefined</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  可以改用</font><font style="vertical-align: inherit;">全局变量</font><font style="vertical-align: inherit;">（假设尚未将其分配给非默认值）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里提供了一个解释：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void" rel="noreferrer"><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">operator</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>The reason you’d want to do this with the <code>href</code> of a link is that normally, a <code>javascript:</code> URL will redirect the browser to a plain text version of the result of evaluating that JavaScript. But if the result is <code>undefined</code>, then the browser stays on the same page. <code>void(0)</code> is just a short and simple script that evaluates to <code>undefined</code>.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
