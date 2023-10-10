---
layout: question
title:  使用JavaScript在下拉列表中获取选定的值
date:   2020-03-09T11:49:33.000Z
description: 如何使用JavaScript从下拉列表中获取选定的值？我尝试了下面的方法，但是它们都返回选择的索引而不是值：var as = document.f...
img: 
author: 梅A飞云
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript从下拉列表中获取选定的值？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了下面的方法，但是它们都返回选择的索引而不是值：</font></font></p>

<pre><code>var as = document.form1.ddlViewBy.value;<font></font>
var e = document.getElementById("ddlViewBy");<font></font>
var strUser = e.options[e.selectedIndex].value;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try</p>

<pre><code>ddlViewBy.value
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log( ddlViewBy.value );<font></font>
<font></font>
console.log( ddlViewBy.selectedOptions[0].text );</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select id="ddlViewBy"&gt;<font></font>
  &lt;option value="1"&gt;Happy&lt;/option&gt;<font></font>
  &lt;option value="2"&gt;Tree&lt;/option&gt;<font></font>
  &lt;option value="3"  selected="selected"&gt;Friends&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is a JavaScript code line:</p>

<pre><code>var x = document.form1.list.value;
</code></pre>

<p>Assuming that the dropdown menu named list <code>name="list"</code> and included in a form with name attribute <code>name="form1"</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In 2015, in <a href="http://en.wikipedia.org/wiki/Mozilla_Firefox" rel="nofollow">Firefox</a>, the following also works.</p>

<blockquote>
  <p>e.<strong>options</strong>.selectedIndex</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;select id="Ultra" onchange="alert(this.value)"&gt; <font></font>
 &lt;option value="0"&gt;Select&lt;/option&gt;<font></font>
 &lt;option value="8"&gt;text1&lt;/option&gt;<font></font>
 &lt;option value="5"&gt;text2&lt;/option&gt;<font></font>
 &lt;option value="4"&gt;text3&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p>Any input/form field can use a “this” keyword when you are  accessing it from inside the element. This eliminates the need for locating a form in the dom tree and then locating this element inside the form.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var selectedValue = document.getElementById("ddlViewBy").value;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您曾经运行过纯粹为Internet Explorer编写的代码，则可能会看到以下内容：</font></font></p>

<pre><code>var e = document.getElementById("ddlViewBy");<font></font>
var strUser = e.options(e.selectedIndex).value;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox等中运行上述命令将给您一个“不是函数”错误，因为Internet Explorer允许您摆脱使用（）而不是[]的麻烦：</font></font></p>

<pre><code>var e = document.getElementById("ddlViewBy");<font></font>
var strUser = e.options[e.selectedIndex].value;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是使用方括号。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码展示了与使用JavaScript从输入/选择字段获取/输入值有关的各种示例。</font></font></p>

<p><strong><a href="http://www.freakyjolly.com/how-to-get-selected-value-in-dropdown-list-using-jquery-javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源链接</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作的</font></font><a href="https://freakyjolly.com/demo/getDropDownValue_JavaScript_jQuery.html" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript和jQuery演示</font></font></strong></a></p>

<p><a href="https://i.stack.imgur.com/8LJas.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/8LJas.jpg" alt="在此处输入图片说明"></a></p>

<p><a href="https://i.stack.imgur.com/GnfKD.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/GnfKD.jpg" alt="在此处输入图片说明"></a></p>

<pre><code> &lt;select id="Ultra" onchange="run()"&gt;  &lt;!--Call run() function--&gt;<font></font>
     &lt;option value="0"&gt;Select&lt;/option&gt;<font></font>
     &lt;option value="8"&gt;text1&lt;/option&gt;<font></font>
     &lt;option value="5"&gt;text2&lt;/option&gt;<font></font>
     &lt;option value="4"&gt;text3&lt;/option&gt;<font></font>
&lt;/select&gt;&lt;br&gt;&lt;br&gt;<font></font>
TextBox1&lt;br&gt;<font></font>
&lt;input type="text" id="srt" placeholder="get value on option select"&gt;&lt;br&gt;<font></font>
TextBox2&lt;br&gt;<font></font>
&lt;input type="text" id="rtt"  placeholder="Write Something !" onkeyup="up()"&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下脚本获取所选选项的值并将其放在文本框1中</font></font></strong></p>

<pre><code>&lt;script&gt;<font></font>
    function run() {<font></font>
        document.getElementById("srt").value = document.getElementById("Ultra").value;<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下脚本从文本框2获取值并使用其值进行警报</font></font></strong></p>

<pre><code>&lt;script&gt;<font></font>
    function up() {<font></font>
        //if (document.getElementById("srt").value != "") {<font></font>
            var dop = document.getElementById("srt").value;<font></font>
        //}<font></font>
        alert(dop);<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下脚本正在从函数调用函数</font></font></strong></p>

<pre><code>&lt;script&gt;<font></font>
    function up() {<font></font>
        var dop = document.getElementById("srt").value;<font></font>
        pop(dop); // Calling function pop<font></font>
    }<font></font>
<font></font>
    function pop(val) {<font></font>
        alert(val);<font></font>
    }?<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var strUser = e.options[e.selectedIndex].value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是正确的，应该会给您带来价值。</font><font style="vertical-align: inherit;">是您要的文字吗？</font></font></p>

<pre><code>var strUser = e.options[e.selectedIndex].text;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以您在术语上很清楚：</font></font></p>

<pre><code>&lt;select&gt;<font></font>
    &lt;option value="hello"&gt;Hello World&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该选项具有：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引= 0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值=你好</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字= Hello World</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有一个如下所示的select元素：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;select id="ddlViewBy"&gt;<font></font>
  &lt;option value="1"&gt;test1&lt;/option&gt;<font></font>
  &lt;option value="2" selected="selected"&gt;test2&lt;/option&gt;<font></font>
  &lt;option value="3"&gt;test3&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行此代码：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var e = document.getElementById("ddlViewBy");<font></font>
var strUser = e.options[e.selectedIndex].value;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>strUser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成为</font></font><code>2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您真正想要的是</font></font><code>test2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请执行以下操作：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var e = document.getElementById("ddlViewBy");<font></font>
var strUser = e.options[e.selectedIndex].text;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将</font></font><code>strUser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成为</font></font><code>test2</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
