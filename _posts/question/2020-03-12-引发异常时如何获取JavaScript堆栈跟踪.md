---
layout: question
title:  引发异常时如何获取JavaScript堆栈跟踪？
date:   2020-03-12T09:26:44.000Z
description: 如果我自己抛出JavaScript异常（例如throw "AArrggg"），如何获得堆栈跟踪（在Firebug中还是其他方式）？现在我才收到消息。编...
img: 
author: 老丝
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我自己抛出JavaScript异常（例如</font></font><code>throw "AArrggg"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），如何获得堆栈跟踪（在Firebug中还是其他方式）？</font><font style="vertical-align: inherit;">现在我才收到消息。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：正如下面很多人都贴出来，就可以得到一个堆栈跟踪</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript异常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我希望得到一个堆栈跟踪</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异常。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>function foo() {<font></font>
    bar(2);<font></font>
}<font></font>
function bar(n) {<font></font>
    if (n &lt; 2)<font></font>
        throw "Oh no! 'n' is too small!"<font></font>
    bar(n-1);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用时，我希望得到一个堆栈跟踪，其中包括在两个电话</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1207篇《引发异常时如何获取JavaScript堆栈跟踪？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Using <code>console.error(e.stack)</code> Firefox only shows the stacktrace in logs,
Chrome also shows the message.
This can be a bad surprise if the message contains vital information. Always log both.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I had to investigate an endless recursion in smartgwt with IE11, so in order to investigate deeper, I needed a stack trace. The problem was, that I was unable to use the dev console, because the reproduction was more difficult that way.<br>
Use the following in a javascript method:</p>

<pre><code>try{ null.toString(); } catch(e) { alert(e.stack); }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能：</font></font></p>

<pre><code>function print_call_stack(err) {<font></font>
    var stack = err.stack;<font></font>
    console.error(stack);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用例：</font></font></p>

<pre><code>     try{<font></font>
         aaa.bbb;//error throw here<font></font>
     }<font></font>
     catch (err){<font></font>
         print_call_stack(err); <font></font>
     }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eugene答案的更新：必须抛出错误对象，以便IE（特定版本？）填充</font></font><code>stack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">以下内容应比其当前示例更好，并且应避免</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE中</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function stackTrace() {<font></font>
  try {<font></font>
    var err = new Error();<font></font>
    throw err;<font></font>
  } catch (err) {<font></font>
    return err.stack;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注1：这种事情仅应在调试时完成，而在实时运行时应禁用，尤其是在频繁调用时。</font><font style="vertical-align: inherit;">注意2：可能无法在所有浏览器中使用，但似乎可以在FF和IE 11中使用，正好适合我的需求。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此polyfill代码可在现代（2017）浏览器（IE11，Opera，Chrome，FireFox，Yandex）中运行：</font></font></p>

<pre><code>printStackTrace: function () {<font></font>
    var err = new Error();<font></font>
    var stack = err.stack || /*old opera*/ err.stacktrace || ( /*IE11*/ console.trace ? console.trace() : "no stack info");<font></font>
    return stack;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案： </font></font></p>

<pre><code>function stackTrace() {<font></font>
  var err = new Error();<font></font>
  return err.stack;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE 11中无法使用！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">arguments.callee.caller-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何浏览器中都不能在严格模式下使用！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome浏览器中，您可以使用以下</font></font><code>console.trace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font><a href="https://developer.chrome.com/devtools/docs/console-api#consoletraceobject" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.chrome.com/devtools/docs/console-api#consoletraceobject" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.chrome.com/devtools/docs/console-api#consoletraceobject</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox中，似乎不需要引发异常。</font><font style="vertical-align: inherit;">做就足够了</font></font></p>

<pre><code>e = new Error();<font></font>
console.log(e.stack);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，chrome / chrome（其他使用V8的浏览器）以及Firefox确实具有方便的界面，可通过</font><em><font style="vertical-align: inherit;">Error</font></em><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">stack</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">获取stacktrace </font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<pre><code>try {<font></font>
   // Code throwing an exception<font></font>
} catch(e) {<font></font>
  console.log(e.stack);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于基本异常以及您自己抛出的异常。</font><font style="vertical-align: inherit;">（考虑使用Error类，这是一个好习惯）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看有关</font><a href="https://v8.dev/docs/stack-trace-api" rel="nofollow noreferrer"><font style="vertical-align: inherit;">V8文档的</font></a><font style="vertical-align: inherit;">详细信息</font></font><a href="https://v8.dev/docs/stack-trace-api" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以访问</font><font style="vertical-align: inherit;">实例</font><font style="vertical-align: inherit;">的</font></font><code>stack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>stacktrace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Opera中）属性，</font></font><code>Error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您将其扔了也可以。</font><font style="vertical-align: inherit;">关键是，您需要确保使用</font></font><code>throw new Error(string)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不要忘记使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>throw string</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>try {<font></font>
    0++;<font></font>
} catch (e) {<font></font>
    var myStackTrace = e.stack || e.stacktrace || "";<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为您可以使用任何内置功能，但是我确实找到了很多人在做自己的事情的例子。</font></font></p>

<ul>
<li><a href="http://helephant.com/2007/05/diy-javascript-stack-trace/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DIY JavaScript堆栈跟踪</font></font></a></li>
<li><a href="http://eriwen.com/javascript/js-stack-trace/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何浏览器中的Javascript stacktrace</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有萤火虫，则脚本标签中的所有错误选项都会中断。</font><font style="vertical-align: inherit;">脚本到达断点后，您可以查看firebug的堆栈窗口：</font></font></p>

<p><img src="https://i.stack.imgur.com/XA8Bf.png" alt="屏幕截图"></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
