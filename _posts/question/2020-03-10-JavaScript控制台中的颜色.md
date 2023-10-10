---
layout: question
title:  JavaScript控制台中的颜色
date:   2020-03-10T02:32:01.000Z
description: Chrome的内置JavaScript控制台可以显示颜色吗？我想要红色错误，橙色警告和console.log绿色。那可能吗？...
img: 
author: 飞云泡芙
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome的内置JavaScript控制台可以显示颜色吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要红色错误，橙色警告和</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绿色。</font><font style="vertical-align: inherit;">那可能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第430篇《JavaScript控制台中的颜色》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Check this out:</p>

<p>Animation in console, plus CSS</p>

<pre><code>(function() {<font></font>
  var frame = 0;<font></font>
  var frames = [<font></font>
    "This",<font></font>
    "is",<font></font>
    "SPARTA!",<font></font>
    " ",<font></font>
    "SPARTA!",<font></font>
    " ",<font></font>
    "SPARTA!",<font></font>
    " ",<font></font>
    "SPARTA!",<font></font>
    " ",<font></font>
    "SPARTA!",<font></font>
    " ",<font></font>
    "SPARTA!"<font></font>
  ];<font></font>
  var showNext = () =&gt; {<font></font>
    console.clear();<font></font>
    console.log(<font></font>
      `%c `,<font></font>
      "background: red; color: white; font-size: 15px; padding: 3px 41%;"<font></font>
    );<font></font>
    console.log(<font></font>
      `%c ${frames[frame]}`,<font></font>
      "background: red; color: white; font-size: 25px; padding: 3px 40%;"<font></font>
    );<font></font>
    console.log(<font></font>
      `%c `,<font></font>
      "background: red; color: white; font-size: 15px; padding: 3px 41%;"<font></font>
    );<font></font>
    setTimeout(<font></font>
      showNext,<font></font>
      frames[frame] === "SPARTA!" || frames[frame] === " " ? 100 : 1500<font></font>
    );<font></font>
    // next frame and loop<font></font>
    frame++;<font></font>
    if (frame &gt;= frames.length) {<font></font>
      frame = 0;<font></font>
    }<font></font>
  };<font></font>
  showNext();<font></font>
})();<font></font>
</code></pre>

<p><a href="https://jsfiddle.net/a8y3jhfL/" rel="noreferrer">https://jsfiddle.net/a8y3jhfL/</a></p>

<p>you can paste ASCII in each frame to watch an ASCII animation</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>from Chrome 60, they removed the facility of blue text color while writing <em>console.info</em> and does many much changes in console API.</p>

<p>if you write a string literal in the es6 pattern, using the backticks `` as the identifier (called as template string ) in <strong>console.log()</strong> then below way can colorize the console output.</p>

<pre><code>console.log(`%cToday date=&gt;%c${new Date()}`,`color:#F74C2F`, `color:green`);<font></font>
// output :Today date (in red color) =&gt; Date (in green color)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子宝儿神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Google has documented this
<a href="https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css" rel="noreferrer">https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css</a>. </p>

<blockquote>
  <p>The CSS format specifier allows you to customize the display in the console. Start the string with the specifier and give the style you wish to apply as the second parameter.</p>
</blockquote>

<p>One example:</p>

<pre><code>console.log("%cThis will be formatted with large, blue text", "color: blue; font-size: x-large");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道现在回答有点晚了，但是由于OP要求在控制台中为不同的选项获取自定义颜色消息。</font><font style="vertical-align: inherit;">每个人都在每个</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句中</font><font style="vertical-align: inherit;">传递颜色样式属性，</font><font style="vertical-align: inherit;">这会在代码中造成复杂性，从而使读者感到困惑，还会损害代码的整体外观。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议编写一个带有很少的预定颜色（例如，成功，错误，信息，警告，默认颜色）的函数，这些颜色将根据传递给该函数的参数来应用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它提高了可读性并降低了代码的复杂性。</font><font style="vertical-align: inherit;">它太容易维护，无法根据您的需要进一步扩展。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面提供的是一个JavaScript函数，您必须编写一次，然后才能一次又一次地使用它。</font></font></p>

<pre><code>function colorLog(message, color) {<font></font>
<font></font>
    color = color || "black";<font></font>
<font></font>
    switch (color) {<font></font>
        case "success":  <font></font>
             color = "Green"; <font></font>
             break;<font></font>
        case "info":     <font></font>
                color = "DodgerBlue";  <font></font>
             break;<font></font>
        case "error":   <font></font>
             color = "Red";     <font></font>
             break;<font></font>
        case "warning":  <font></font>
             color = "Orange";   <font></font>
             break;<font></font>
        default: <font></font>
             color = color;<font></font>
    }<font></font>
<font></font>
    console.log("%c" + message, "color:" + color);<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></h2>

<p><a href="https://i.stack.imgur.com/b0J3l.png" rel="noreferrer"><img src="https://i.stack.imgur.com/b0J3l.png" alt="在此处输入图片说明"></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认颜色是黑色，在这种情况下，您不必传递任何关键字作为参数。</font><font style="vertical-align: inherit;">在其他情况下，您应该传递</font></font><code>success, error, warning, or info</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字以获得期望的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是工作的</font></font><strong><a href="https://jsfiddle.net/suhaibjanjua/h8yc0px8/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在浏览器的控制台中查看输出。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个库很棒：</font></font></p>

<p><a href="https://github.com/adamschwartz/log" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/adamschwartz/log</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Markdown记录日志消息。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用自定义样式表为调试器着色。</font></font><code>C:\Documents and Settings\&lt;User Name&gt;\Local Settings\Application Data\Google\Chrome\User Data\Default\User StyleSheets\Custom.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是WinXP，则</font><font style="vertical-align: inherit;">可以输入此代码</font><font style="vertical-align: inherit;">，但是目录因操作系统而异。</font></font></p>

<pre><code>.console-error-level .console-message-text{<font></font>
    color: red;<font></font>
}<font></font>
<font></font>
.console-warning-level .console-message-text {<font></font>
    color: orange;<font></font>
}<font></font>
<font></font>
.console-log-level .console-message-text {<font></font>
    color:green;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
