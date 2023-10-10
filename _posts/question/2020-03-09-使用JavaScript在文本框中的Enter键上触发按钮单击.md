---
layout: question
title:  使用JavaScript在文本框中的Enter键上触发按钮单击
date:   2020-03-09T14:01:03.000Z
description: 我有一个文本输入和一个按钮（请参阅下文）。当在文本框中按下键时，如何使用JavaScript 触发按钮的click事件Enter？当前页面上已经有一个...
img: 
author: ItachiSam
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个文本输入和一个按钮（请参阅下文）。</font><font style="vertical-align: inherit;">当</font><font style="vertical-align: inherit;">在文本框中按下键</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">如何使用JavaScript </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发按钮的click事件</font></font></strong><font style="vertical-align: inherit;"></font><kbd>Enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前页面上已经有一个不同的“提交”按钮，因此我不能简单地将该按钮设为“提交”按钮。</font><font style="vertical-align: inherit;">而且，如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只</font></font></em><font style="vertical-align: inherit;"></font><kbd>Enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从该一个文本框中按下该按钮</font><font style="vertical-align: inherit;">，我</font><em><font style="vertical-align: inherit;">只</font></em><font style="vertical-align: inherit;">希望</font><font style="vertical-align: inherit;">按键单击此特定按钮，没有其他选择。</font></font></p>

<pre><code>&lt;input type="text" id="txtSearch" /&gt;<font></font>
&lt;input type="button" id="btnSearch" value="Search" onclick="doSomething();" /&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第295篇《使用JavaScript在文本框中的Enter键上触发按钮单击》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个小的JavaScript函数也可能会有所帮助，该函数可以正常工作：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
function blank(a) { if(a.value == a.defaultValue) a.value = ""; }<font></font>
<font></font>
function unblank(a) { if(a.value == "") a.value = a.defaultValue; }<font></font>
&lt;/script&gt; <font></font>
&lt;input type="text" value="email goes here" onfocus="blank(this)" onblur="unblank(this)" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题已经解决，但是我发现了一些对其他人有帮助的东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经开发了自定义javascript，只需添加类即可实现此功能</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font><code>&lt;button type="button" class="ctrl-p"&gt;Custom Print&lt;/button&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看</font></font><a href="https://jsfiddle.net/RaviMakwana/k6zL1q9t/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a>  <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
-或- </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
查看运行示例
 </font></font><a href="https://stackoverflow.com/a/58010042/6631280"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/58010042/6631280</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：在当前逻辑上，您需要按</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+
  </font></font><kbd>Enter</kbd></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用jQuery，请执行以下操作：</font></font></p>

<pre><code>$("#txtSearch").on("keyup", function (event) {<font></font>
    if (event.keyCode==13) {<font></font>
        $("#btnSearch").get(0).click();<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用普通的JavaScript做到这一点：</font></font></p>

<pre><code>document.getElementById("txtSearch").addEventListener("keyup", function (event) {<font></font>
    if (event.keyCode==13) { <font></font>
        document.getElementById("#btnSearch").click();<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>document.onkeypress = function (e) {<font></font>
 e = e || window.event;<font></font>
 var charCode = (typeof e.which == "number") ? e.which : e.keyCode;<font></font>
 if (charCode == 13) {<font></font>
<font></font>
        // Do something here<font></font>
        printResult();<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的两分钱。</font><font style="vertical-align: inherit;">我正在为Windows 8开发一个应用程序，并希望在按下Enter按钮时该按钮注册一个点击事件。</font><font style="vertical-align: inherit;">我在JS中执行此操作。</font><font style="vertical-align: inherit;">我尝试了一些建议，但遇到了问题。</font><font style="vertical-align: inherit;">这很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>event.returnValue = false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在处理事件时或在事件处理程序调用的函数中使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它至少可以在Internet Explorer和Opera中工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这次</font></font><strong><a href="https://developer.mozilla.org/en/DOM/element.onchange" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onchange</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试已经结束，但是对于浏览器来说，然后再向前（在Safari 4.0.5和Firefox 3.6.3上）表现不佳，因此最终我不推荐这样做。</font></font></p>

<pre><code>&lt;input type="text" id="txtSearch" onchange="doSomething();" /&gt;<font></font>
&lt;input type="button" id="btnSearch" value="Search" onclick="doSomething();" /&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然，我很确定只要表单中只有一个字段和一个提交按钮，即使页面上还有另一种表单，按回车键也应提交表单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用js捕获onsubmit表单，并执行所需的任何验证或回调。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular2中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>(keyup.enter)="doSomething()"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望按钮中有任何视觉反馈，那么最好不要引用按钮而是直接调用控制器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，不需要id-在视图和模型之间进行分离的另一种NG2方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>keypress</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>event.key === "Enter"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拥有现代化的JS！</font></font></h1>

<pre><code>const textbox = document.getElementById("txtSearch");<font></font>
textbox.addEventListener("keypress", function onEvent(event) {<font></font>
    if (event.key === "Enter") {<font></font>
        document.getElementById("btnSearch").click();<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla文件</font></font></a></p>

<p><a href="http://caniuse.com/#feat=keyboardevent-key" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的浏览器</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用的一个基本技巧，但我尚未完全提及。</font><font style="vertical-align: inherit;">如果要执行ajax动作或Enter上的其他工作，但又不想实际提交表单，可以执行以下操作：</font></font></p>

<pre><code>&lt;form onsubmit="Search();" action="javascript:void(0);"&gt;<font></font>
    &lt;input type="text" id="searchCriteria" placeholder="Search Criteria"/&gt;<font></font>
    &lt;input type="button" onclick="Search();" value="Search" id="searchBtn"/&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置action =“ javascript：void（0）;” </font><font style="vertical-align: inherit;">像这样，这是从本质上防止默认行为的捷径。</font><font style="vertical-align: inherit;">在这种情况下，无论您是按Enter还是单击按钮都将调用一个方法，并进行ajax调用以加载一些数据。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Monkey洋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于没有人使用过</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此这里是我的版本。</font><font style="vertical-align: inherit;">给定元素：</font></font></p>

<pre><code>&lt;input type = "text" id = "txt" /&gt;<font></font>
&lt;input type = "button" id = "go" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用以下内容：</font></font></p>

<pre><code>var go = document.getElementById("go");<font></font>
var txt = document.getElementById("txt");<font></font>
<font></font>
txt.addEventListener("keypress", function(event) {<font></font>
    event.preventDefault();<font></font>
    if (event.keyCode == 13)<font></font>
        go.click();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使您可以在保持HTML干净的同时分别更改事件类型和操作。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能有必要确保此操作不在a之内，</font></font><code>&lt;form&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为当我将这些元素封装在其中时，按Enter即可提交表单并重新加载页面。</font><font style="vertical-align: inherit;">让我眨了眨眼才发现。</font></font></p>
  
  <blockquote>
    <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附录</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：感谢@ruffin的评论，我添加了缺少的事件处理程序和，</font></font><code>preventDefault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以允许此代码（大概）也可以在表单内工作。</font><font style="vertical-align: inherit;">（我将对此进行测试，这时将删除括号中的内容。）</font></font></p>
  </blockquote>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将按钮设为Submit元素，因此它将是自动的。</font></font></p>

<pre><code>&lt;input type = "submit"<font></font>
       id = "btnSearch"<font></font>
       value = "Search"<font></font>
       onclick = "return doSomething();"<font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您需要一个</font></font><code>&lt;form&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含输入字段</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">元素来完成这项工作（感谢Sergey Ilinsky）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新定义标准行为不是一个好习惯，</font></font><kbd>Enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">密钥应始终调用表单上的“提交”按钮。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在纯JavaScript中，</font></font></p>

<pre><code>if (document.layers) {<font></font>
  document.captureEvents(Event.KEYDOWN);<font></font>
}<font></font>
<font></font>
document.onkeydown = function (evt) {<font></font>
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;<font></font>
  if (keyCode == 13) {<font></font>
    // For Enter.<font></font>
    // Your function here.<font></font>
  }<font></font>
  if (keyCode == 27) {<font></font>
    // For Escape.<font></font>
    // Your function here.<font></font>
  } else {<font></font>
    return true;<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到答复仅在jQuery中给出，因此我想也以普通JavaScript给出一些内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery中，以下将起作用：</font></font></p>

<pre><code>$("#id_of_textbox").keyup(function(event) {<font></font>
    if (event.keyCode === 13) {<font></font>
        $("#id_of_button").click();<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$("#pw").keyup(function(event) {<font></font>
    if (event.keyCode === 13) {<font></font>
        $("#myButton").click();<font></font>
    }<font></font>
});<font></font>
<font></font>
$("#myButton").click(function() {<font></font>
  alert("Button code executed.");<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
Username:&lt;input id="username" type="text"&gt;&lt;br&gt;<font></font>
Password:&amp;nbsp;&lt;input id="pw" type="password"&gt;&lt;br&gt;<font></font>
&lt;button id="myButton"&gt;Submit&lt;/button&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在纯JavaScript中，以下方法将起作用：</font></font></p>

<pre><code>document.getElementById("id_of_textbox")<font></font>
    .addEventListener("keyup", function(event) {<font></font>
    event.preventDefault();<font></font>
    if (event.keyCode === 13) {<font></font>
        document.getElementById("id_of_button").click();<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>document.getElementById("pw")<font></font>
    .addEventListener("keyup", function(event) {<font></font>
    event.preventDefault();<font></font>
    if (event.keyCode === 13) {<font></font>
        document.getElementById("myButton").click();<font></font>
    }<font></font>
});<font></font>
<font></font>
function buttonCode()<font></font>
{<font></font>
  alert("Button code executed.");<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
Username:&lt;input id="username" type="text"&gt;&lt;br&gt;<font></font>
Password:&amp;nbsp;&lt;input id="pw" type="password"&gt;&lt;br&gt;<font></font>
&lt;button id="myButton" onclick="buttonCode()"&gt;Submit&lt;/button&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
