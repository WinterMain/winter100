---
layout: question
title:  如何在Google Chrome JavaScript控制台中打印调试消息？
date:   2020-03-13T08:09:57.000Z
description: 如何在Google Chrome JavaScript控制台中打印调试消息？请注意，JavaScript控制台与JavaScript调试器不同；它们具...
img: 
author: 流云
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Google Chrome JavaScript控制台中打印调试消息？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，JavaScript控制台与JavaScript调试器不同；</font><font style="vertical-align: inherit;">它们具有不同的语法AFAIK，因此</font><font style="vertical-align: inherit;">JavaScript Debugger中</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">print</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令将在此处不起作用。</font><font style="vertical-align: inherit;">在JavaScript控制台中，</font></font><code>print()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会将参数发送到打印机。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1435篇《如何在Google Chrome JavaScript控制台中打印调试消息？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的</font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_7" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 7</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及以下版本的</font></font><a href="https://en.wikipedia.org/wiki/Shim_%28computing%29" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">shim</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可为其他浏览器保留行号：</font></font></p>

<pre><code>/* Console shim */<font></font>
(function () {<font></font>
    var f = function () {};<font></font>
    if (!window.console) {<font></font>
        window.console = {<font></font>
            log:f, info:f, warn:f, debug:f, error:f<font></font>
        };<font></font>
    }<font></font>
}());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步改进Delan和Andru的想法（这就是为什么此答案是经过编辑的版本）；</font><font style="vertical-align: inherit;">console.log可能存在，而其他功能可能不存在，因此默认映射到与console.log ...相同的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以编写脚本来创建控制台函数（如果不存在）：</font></font></p>

<pre><code>if (!window.console) console = {};<font></font>
console.log = console.log || function(){};<font></font>
console.warn = console.warn || console.log;  // defaults to log<font></font>
console.error = console.error || console.log; // defaults to log<font></font>
console.info = console.info || console.log; // defaults to log<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，使用以下任一方法：</font></font></p>

<pre><code>console.log(...);<font></font>
console.error(...);<font></font>
console.info(...);<font></font>
console.warn(...);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些功能将记录不同类型的项目（可以根据日志，信息，错误或警告进行过滤），并且在控制台不可用时不会导致错误。</font><font style="vertical-align: inherit;">这些功能可在Firebug和Chrome控制台中使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>console.debug("");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此方法可以在控制台中以亮蓝色打印文本。</font></font></p>

<p><a href="https://i.stack.imgur.com/KCjUx.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/KCjUx.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在使用的哪种编程软件编辑器中调试过代码，</font><font style="vertical-align: inherit;">就可以使用</font><font style="vertical-align: inherit;">，您将看到输出很可能是最适合我的编辑器（Google Chrome）。</font><font style="vertical-align: inherit;">只需按</font></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后按“控制台”选项卡。</font><font style="vertical-align: inherit;">您将看到结果。</font><font style="vertical-align: inherit;">快乐的编码。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用此功能：</font></font></p>

<pre><code>function log(message){<font></font>
    if (typeof console == "object") {<font></font>
        console.log(message);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加一个很酷的功能，许多开发人员就会错过：</font></font></p>

<pre><code>console.log("this is %o, event is %o, host is %s", this, e, location.host);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">JavaScript对象</font><font style="vertical-align: inherit;">神奇的</font></font><code>%o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转储</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可点击和可深浏览的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容。</font></font><code>%s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被显示只是为了记录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也很酷：</font></font></p>

<pre><code>console.log("%s", new Error().stack);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它给出了到</font></font><code>new Error()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">点的类Java堆栈跟踪</font><font style="vertical-align: inherit;">（包括</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件路径和行号</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双方</font></font><code>%o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>new Error().stack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome和Firefox提供！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Firefox中的堆栈跟踪，也可以使用：</font></font></p>

<pre><code>console.trace();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/console" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/API/console所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">骇客入侵！</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：一些库是由坏人编写的</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它们出于自己的目的</font><font style="vertical-align: inherit;">重新定义</font><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">要</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在加载库后</font><font style="vertical-align: inherit;">还原原始浏览器</font><font style="vertical-align: inherit;">，请使用：</font></font></p>

<pre><code>delete console.log;<font></font>
delete console.warn;<font></font>
....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅堆栈溢出问题</font></font><em><a href="https://stackoverflow.com/questions/7089443"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还原console.log（）</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个快速警告-如果您想在Internet Explorer中进行测试而不删除所有console.log（），则需要使用</font></font><a href="http://getfirebug.com/lite.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug Lite，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则会遇到一些不太友好的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或者创建您自己的console.log（），它仅返回false。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了改进Andru的想法，您可以编写一个脚本来创建控制台函数（如果不存在）：</font></font></p>

<pre><code>if (!window.console) console = {};<font></font>
console.log = console.log || function(){};<font></font>
console.warn = console.warn || function(){};<font></font>
console.error = console.error || function(){};<font></font>
console.info = console.info || function(){};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，使用以下任一方法：</font></font></p>

<pre><code>console.log(...);<font></font>
console.error(...);<font></font>
console.info(...);<font></font>
console.warn(...);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些功能将记录不同类型的项目（可以根据日志，信息，错误或警告进行过滤），并且在控制台不可用时不会导致错误。</font><font style="vertical-align: inherit;">这些功能可在Firebug和Chrome控制台中使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从浏览器地址栏中执行以下代码：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript：console.log（2）;
</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功将消息打印到Google Chrome中的“ JavaScript控制台”。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
