---
layout: question
title:  JavaScript，Node.js：Array.forEach是否异步？
date:   2020-03-18T07:09:33.000Z
description: 我Array.forEach对JavaScript 的本机实现有疑问：它是否异步运行？例如，如果我打电话：\[many many elements\].f...
img: 
author: Harry十三
category: question
answer: 5
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>Array.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对JavaScript </font><font style="vertical-align: inherit;">的本机</font><font style="vertical-align: inherit;">实现</font><font style="vertical-align: inherit;">有疑问</font><font style="vertical-align: inherit;">：它是否异步运行？</font><font style="vertical-align: inherit;">例如，如果我打电话：</font></font></p>

<pre><code>[many many elements].forEach(function () {lots of work to do})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将是非阻塞的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1999篇《JavaScript，Node.js：Array.forEach是否异步？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西门</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至可以对这样的解决方案进行编码，例如：</font></font></p>

<pre><code> var loop = function(i, data, callback) {<font></font>
    if (i &lt; data.length) {<font></font>
        //TODO("SELECT * FROM stackoverflowUsers;", function(res) {<font></font>
            //data[i].meta = res;<font></font>
            console.log(i, data[i].title);<font></font>
            return loop(i+1, data, errors, callback);<font></font>
        //});<font></font>
    } else {<font></font>
       return callback(data);<font></font>
    }<font></font>
};<font></font>
<font></font>
loop(0, [{"title": "hello"}, {"title": "world"}], function(data) {<font></font>
    console.log("DONE\n"+data);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，它比“ for”要慢得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，出色的Async库可以做到这一点：</font><a href="https://caolan.github.io/async/docs.html#each" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://caolan.github.io/async/docs.html#each" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//caolan.github.io/async/docs.html#each</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简短的异步函数，无需第三方库即可使用</font></font></p>

<pre><code>Array.prototype.each = function (iterator, callback) {<font></font>
    var iterate = function () {<font></font>
            pointer++;<font></font>
            if (pointer &gt;= this.length) {<font></font>
                callback();<font></font>
                return;<font></font>
            }<font></font>
            iterator.call(iterator, this[pointer], iterate, pointer);<font></font>
    }.bind(this),<font></font>
        pointer = -1;<font></font>
    iterate(this);<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>Array.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着不需要等待就可以进行计算，并且在事件循环中使计算异步化是没有任何收获的（如果需要多核计算，网络工作人员可以添加多处理功能）。</font><font style="vertical-align: inherit;">如果要等待多个任务结束，请使用计数器，您可以将其包装在信号量类中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要</font></font><code>Array.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似</font><font style="vertical-align: inherit;">版本的异步友好版本，</font><font style="vertical-align: inherit;">可以在Node.js的“异步”模块中找到它们：</font></font><a href="http://github.com/caolan/async" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://github.com/caolan/async" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/caolan/async</font></a><font style="vertical-align: inherit;"> ...作为奖励，该模块还可以在浏览器中使用。</font></font></p>

<pre><code>async.each(openFiles, saveFile, function(err){<font></font>
    // if any of the saves produced an error, err would equal that error<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙米亚达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，它正在阻止。</font><font style="vertical-align: inherit;">看一下</font></font><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">算法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18" rel="noreferrer"><font style="vertical-align: inherit;">规格</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上给出了一个可能更容易理解的实现</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>if (!Array.prototype.forEach)<font></font>
{<font></font>
  Array.prototype.forEach = function(fun /*, thisp */)<font></font>
  {<font></font>
    "use strict";<font></font>
<font></font>
    if (this === void 0 || this === null)<font></font>
      throw new TypeError();<font></font>
<font></font>
    var t = Object(this);<font></font>
    var len = t.length &gt;&gt;&gt; 0;<font></font>
    if (typeof fun !== "function")<font></font>
      throw new TypeError();<font></font>
<font></font>
    var thisp = arguments[1];<font></font>
    for (var i = 0; i &lt; len; i++)<font></font>
    {<font></font>
      if (i in t)<font></font>
        fun.call(thisp, t[i], i, t);<font></font>
    }<font></font>
  };<font></font>
}<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果必须为每个元素执行很多代码，则应考虑使用其他方法：</font></font></p>

<pre><code>function processArray(items, process) {<font></font>
    var todo = items.concat();<font></font>
<font></font>
    setTimeout(function() {<font></font>
        process(todo.shift());<font></font>
        if(todo.length &gt; 0) {<font></font>
            setTimeout(arguments.callee, 25);<font></font>
        }<font></font>
    }, 25);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后调用：</font></font></p>

<pre><code>processArray([many many elements], function () {lots of work to do});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那时这将是非阻塞的。</font><font style="vertical-align: inherit;">该示例摘自</font></font><a href="https://rads.stackoverflow.com/amzn/click/com/059680279X" rel="noreferrer"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">High Performance JavaScript</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>Another option might be <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers" rel="noreferrer"><em>web workers</em></a>.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
