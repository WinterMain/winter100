---
layout: question
title:  无法使用JSON.stringify将错误字符串化吗？
date:   2020-03-18T10:10:55.000Z
description: 重现问题尝试使用Web套接字传递错误消息时遇到问题。我可以复制自己遇到的问题JSON.stringify以迎合更广泛的受众：// node v0....
img: 
author: Sam老丝
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重现问题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用Web套接字传递错误消息时遇到问题。</font><font style="vertical-align: inherit;">我可以复制自己遇到的问题</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以迎合更广泛的受众：</font></font></p>

<pre class="lang-js prettyprint-override"><code>// node v0.10.15<font></font>
&gt; var error = new Error('simple error message');<font></font>
    undefined<font></font>
<font></font>
&gt; error<font></font>
    [Error: simple error message]<font></font>
<font></font>
&gt; Object.getOwnPropertyNames(error);<font></font>
    [ 'stack', 'arguments', 'type', 'message' ]<font></font>
<font></font>
&gt; JSON.stringify(error);<font></font>
    '{}'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我最终得到一个空对象。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先尝试离开node.js并在各种浏览器中运行它。</font><font style="vertical-align: inherit;">Chrome版本28给出了相同的结果，有趣的是，Firefox至少尝试了一次，但忽略了以下信息：</font></font></p>

<pre class="lang-js prettyprint-override"><code>&gt;&gt;&gt; JSON.stringify(error); // Firebug, Firefox 23<font></font>
{"fileName":"debug eval code","lineNumber":1,"stack":"@debug eval code:1\n"}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代功能</font></font></strong></p>

<p>I then looked at the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype?redirectlocale=en-US&amp;redirectslug=JavaScript/Reference/Global_Objects/Error/prototype" rel="noreferrer">Error.prototype</a>. It shows that the prototype contains methods such as <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString?redirectlocale=en-US&amp;redirectslug=JavaScript/Reference/Global_Objects/Error/toString" rel="noreferrer">toString</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource?redirectlocale=en-US&amp;redirectslug=JavaScript/Reference/Global_Objects/Error/toSource" rel="noreferrer">toSource</a>. Knowing that functions can't be stringified, I included a <a href="https://developer.mozilla.org/en-US/docs/Using_native_JSON#The_replacer_parameter" rel="noreferrer">replacer function</a> when calling JSON.stringify to remove all functions, but then realized that it too had some weird behavior:</p>

<pre class="lang-js prettyprint-override"><code>var error = new Error('simple error message');<font></font>
JSON.stringify(error, function(key, value) {<font></font>
    console.log(key === ''); // true (?)<font></font>
    console.log(value === error); // true (?)<font></font>
});<font></font>
</code></pre>

<p>It doesn't seem to loop over the object as it normally would, and therefore I can't check if the key is a function and ignore it.</p>

<h2>The Question</h2>

<p>Is there any way to stringify native Error messages with <code>JSON.stringify</code>? If not, why does this behavior occur?</p>

<h3>Methods of getting around this</h3>

<ul>
<li>Stick with simple string-based error messages, or create personal error objects and don't rely on the native Error object.</li>
<li>Pull properties: <code>JSON.stringify({ message: error.message, stack: error.stack })</code></li>
</ul>

<h3>Updates</h3>

<p><a href="https://stackoverflow.com/users/831878/ray-toal"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Ray Toal</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在评论中建议我看一下</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor?redirectlocale=en-US&amp;redirectslug=JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性描述符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在很清楚为什么它不起作用：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var error = new Error('simple error message');<font></font>
var propertyNames = Object.getOwnPropertyNames(error);<font></font>
var descriptor;<font></font>
for (var property, i = 0, len = propertyNames.length; i &lt; len; ++i) {<font></font>
    property = propertyNames[i];<font></font>
    descriptor = Object.getOwnPropertyDescriptor(error, property);<font></font>
    console.log(property, descriptor);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre class="lang-js prettyprint-override"><code>stack { get: [Function],<font></font>
  set: [Function],<font></font>
  enumerable: false,<font></font>
  configurable: true }<font></font>
arguments { value: undefined,<font></font>
  writable: true,<font></font>
  enumerable: false,<font></font>
  configurable: true }<font></font>
type { value: undefined,<font></font>
  writable: true,<font></font>
  enumerable: false,<font></font>
  configurable: true }<font></font>
message { value: 'simple error message',<font></font>
  writable: true,<font></font>
  enumerable: false,<font></font>
  configurable: true }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键：</font></font><code>enumerable: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案提供了解决此问题的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2136篇《无法使用JSON.stringify将错误字符串化吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为日志追加程序处理JSON格式，最终在这里试图解决类似的问题。</font><font style="vertical-align: inherit;">过了一会儿，我意识到我可以让Node来工作：</font></font></p>

<pre><code>const util = require("util");<font></font>
...<font></font>
return JSON.stringify(obj, (name, value) =&gt; {<font></font>
    if (value instanceOf Error) {<font></font>
        return util.format(value);<font></font>
    } else {<font></font>
        return value;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙神奇</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>JSON.stringify(err, Object.getOwnPropertyNames(err))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎有效</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[ </font></font><a href="http://www.reddit.com/r/javascript/comments/17i5wz/what_you_might_not_know_about_jsonstringify/c866r2a?context=1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘自/ u / ub3rgeek在/ r / javascript上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的评论]和felixfbecker的评论（下方）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁AJinJin</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个伟大的Node.js包为：</font></font><code>serialize-error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它甚至可以很好地处理嵌套的Error对象，这实际上是我在项目中急需的。</font></font></p>

<p><a href="https://www.npmjs.com/package/serialize-error" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/serialize-error</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
