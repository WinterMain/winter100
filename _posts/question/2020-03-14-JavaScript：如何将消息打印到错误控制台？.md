---
layout: question
title:  JavaScript：如何将消息打印到错误控制台？
date:   2020-03-14T10:10:34.000Z
description: 如何将消息（最好包括变量）打印到错误控制台？ 例如，类似：print('x=%d', x);...
img: 
author: 理查德逆天
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将消息（最好包括变量）打印到错误控制台？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，类似：</font></font></p>

<pre><code>print('x=%d', x);
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>To answer your question you can use ES6 features,</p>

<pre><code>var var=10;<font></font>
console.log(`var=${var}`);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>With es6 syntax you can use:</p>

<pre><code>console.log(`x = ${x}`);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>This does not print to the Console, but will open you an alert Popup with your message which might be useful for some debugging:</p>

<p>just do:</p>

<pre><code>alert("message");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐逆天</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>The simplest way to do this is:</p>

<pre><code>console.warn("Text to print on console");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问</font></font><a href="https://developer.chrome.com/devtools/docs/console-api" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.chrome.com/devtools/docs/console-api</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取完整的控制台API参考</font></font></p>

<pre><code>    console.error(object[Obj,....])\
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，object将是您的错误字符串</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Harry</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与往常一样，Internet Explorer是旱冰鞋中的大大象，仅使您停止使用即可</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://plugins.jquery.com/files/jquery.log.js_0.txt" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的日志</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以很容易地修改，但是很难在任何地方添加它。</font><font style="vertical-align: inherit;">如果您使用的是jQuery，则一种解决方案是将其放在最后的jQuery文件中（首先缩小）：</font></font></p>

<pre><code>function log()<font></font>
{<font></font>
    if (arguments.length &gt; 0)<font></font>
    {<font></font>
        // Join for graceful degregation<font></font>
        var args = (arguments.length &gt; 1) ? Array.prototype.join.call(arguments, " ") : arguments[0];<font></font>
<font></font>
        // This is the standard; Firebug and newer WebKit browsers support this.<font></font>
        try {<font></font>
            console.log(args);<font></font>
            return true;<font></font>
        } catch(e) {<font></font>
            // Newer Opera browsers support posting erros to their consoles.<font></font>
            try {<font></font>
                opera.postError(args);<font></font>
                return true;<font></font>
            } <font></font>
            catch(e) <font></font>
            {<font></font>
            }<font></font>
        }<font></font>
<font></font>
        // Catch all; a good old alert box.<font></font>
        alert(args);<font></font>
        return false;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络督察还支持</font></font><a href="http://en.wikipedia.org/wiki/Firebug" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台API（只是一个小除了</font></font><a href="https://stackoverflow.com/questions/164397/javascript-how-do-i-print-a-message-to-the-error-console/164408#164408"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丹的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><a href="http://getfirebug.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且还需要支持IE，Safari或Opera，则</font></font><a href="http://getfirebug.com/lite.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug Lite</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会向这些浏览器添加console.log（）支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以编写</font></font></p>

<pre><code>console.log("your message here");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将显示在浏览器的控制台上。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Eva</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><a href="http://www.sitepoint.com/debugging-javascript-throw-away-your-alerts/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试JavaScript中</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">概述了一种实现跨浏览器工作的好方法</font><em><a href="http://www.sitepoint.com/debugging-javascript-throw-away-your-alerts/" rel="noreferrer"><font style="vertical-align: inherit;">：丢掉警报！</font></a></em><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗阳光</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="http://en.wikipedia.org/wiki/Firebug_(software)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后可以使用</font></font><code>console.log(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>console.debug(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等（</font><font style="vertical-align: inherit;">有关更多信息</font><font style="vertical-align: inherit;">，请参见</font></font><a href="http://getfirebug.com/wiki/index.php/Console_Panel#Message_types" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
