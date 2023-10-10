---
layout: question
title:  如何使用JavaScript获取文本输入字段的值？
date:   2020-03-10T03:52:06.000Z
description: 我正在使用JavaScript进行搜索。我会使用一种表格，但是它弄乱了我页面上的其他内容。我有此输入文本字段：<input name="searchT...
img: 
author: 乐米亚
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用JavaScript进行搜索。</font><font style="vertical-align: inherit;">我会使用一种表格，但是它弄乱了我页面上的其他内容。</font><font style="vertical-align: inherit;">我有此输入文本字段：</font></font></p>

<pre><code>&lt;input name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的JavaScript代码：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
  function searchURL(){<font></font>
    window.location = "http://www.myurl.com/search/" + (input text value);<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从文本字段获取值到JavaScript？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第463篇《如何使用JavaScript获取文本输入字段的值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery，然后使用插件formInteract，则只需执行以下操作：</font></font></p>

<pre><code>// Just keep the HTML as it is.<font></font>
<font></font>
&lt;input name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面底部，仅包含此插件文件并编写以下代码：</font></font></p>

<pre><code>// Initialize one time at the bottom of the page.<font></font>
var search= $("#searchTxt).formInteract();<font></font>
<font></font>
search.getAjax("http://www.myurl.com/search/", function(rsp){<font></font>
    // Now do whatever you want to with your response<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果使用参数化的URL，请使用以下命令：</font></font></p>

<pre><code>$.get("http://www.myurl.com/search/"+search.get().searchTxt, {}, function(rsp){<font></font>
    // Now do work with your response;<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是项目链接</font></font><a href="https://bitbucket.org/ranjeet1985/forminteract" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bitbucket.org/ranjeet1985/forminteract</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将此插件用于许多目的，例如获取表单的值，将值放入表单，表单的验证等等。</font><font style="vertical-align: inherit;">您可以在项目的index.html文件中看到一些代码示例。</font></font></p>

<p>Of course I am the author of this project and all are welcome to make it better.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;input id="new" &gt;<font></font>
    &lt;button  onselect="myFunction()"&gt;it&lt;/button&gt;    <font></font>
    &lt;script&gt;<font></font>
        function myFunction() {<font></font>
            document.getElementById("new").value = "a";    <font></font>
        }<font></font>
    &lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过读取值</font></font></p>

<pre><code>searchTxt.value
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function searchURL() {<font></font>
   console.log( searchTxt.value )<font></font>
   //...<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/&gt;<font></font>
&lt;button onclick="searchURL()"&gt;search&lt;/button&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用form.elements获取表单中的所有元素。</font><font style="vertical-align: inherit;">如果元素具有ID，则可以使用.namedItem（“ id”）找到它。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var myForm = document.getElementById("form1");<font></font>
var text = myForm.elements.namedItem("searchTxt").value;<font></font>
var url = "http://www.myurl.com/search/" + text;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://www.w3schools.com/jsref/coll_form_elements.asp" rel="nofollow noreferrer" title="w3schools"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3schools</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC38880545</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>//creates a listener for when you press a key<font></font>
window.onkeyup = keyup;<font></font>
<font></font>
//creates a global Javascript variable<font></font>
var inputTextValue;<font></font>
<font></font>
function keyup(e) {<font></font>
  //setting your input text to the global Javascript Variable for every key press<font></font>
  inputTextValue = e.target.value;<font></font>
<font></font>
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box<font></font>
  if (e.keyCode == 13) {<font></font>
    window.location = "http://www.myurl.com/search/" + inputTextValue;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><a href="http://codepen.io/maudulus/pen/yVEOJL" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见Codepen中的此功能。</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，您也可以按标签名称进行调用，如下所示：</font></font><code>form_name.input_name.value;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这样，您将以特定的形式获得确定的输入的特定值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Eva</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该可以输入：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var input = document.getElementById("searchTxt");<font></font>
<font></font>
function searchURL() {<font></font>
     window.location = "http://www.myurl.com/search/" + input.value;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我敢肯定，有更好的方法可以做到这一点，但是这种方法似乎可以在所有浏览器上正常工作，并且它对JavaScript的理解，编写，改进和编辑都需要极少的了解。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个</font></font></p>

<pre><code>&lt;input type="text" onkeyup="trackChange(this.value)" id="myInput"&gt;<font></font>
&lt;script&gt;<font></font>
function trackChange(value) {<font></font>
    window.open("http://www.google.com/search?output=search&amp;q=" + value)<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将创建一个变量来存储输入，如下所示：</font></font></p>

<pre><code>var input = document.getElementById("input_id").value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将使用变量将输入值添加到字符串中。</font></font></p>

<p><code>= "Your string" + input;</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
