---
layout: question
title:  JavaScript中的.trim（）在IE中不起作用
date:   2020-03-13T08:45:44.000Z
description: 我试图.trim()在我的一个JavaScript程序中应用一个字符串。在Mozilla下它可以正常工作，但是当我在IE8中尝试时会显示错误。有人知道这是...
img: 
author: GOItachi老丝
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/trim" rel="noreferrer"><code>.trim()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的一个JavaScript程序中</font><font style="vertical-align: inherit;">应用</font><font style="vertical-align: inherit;">一个字符串。</font><font style="vertical-align: inherit;">在Mozilla下它可以正常工作，但是当我在IE8中尝试时会显示错误。</font><font style="vertical-align: inherit;">有人知道这是怎么回事吗？</font><font style="vertical-align: inherit;">无论如何，我可以使其在IE中工作吗？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></h3>

<pre><code>var ID = document.getElementByID('rep_id').value.trim();
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误显示：</font></font></h3>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息：对象不支持此属性或方法</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
线：604</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
字符：2</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
代码：0</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
URI：http：//test.localhost/test.js</font></font></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1438篇《JavaScript中的.trim（）在IE中不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚发现IE不再支持</font></font><code>trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能是在最近的Windows更新之后。</font><font style="vertical-align: inherit;">如果您使用dojo，则可以使用</font></font><code>dojo.string.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以跨平台工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题可能是由IE在Intranet站点上使用兼容模式引起的。</font><font style="vertical-align: inherit;">有两种方法可以解决此问题，您可以将IE更新为不在本地计算机上使用兼容模式（在IE11中：工具-&gt;兼容性视图设置-&gt;取消选中在兼容性视图中显示Intranet站点）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的是，您可以更新网页中的meta标签。</font><font style="vertical-align: inherit;">加入：</font></font></p>

<pre><code>...<font></font>
&lt;head&gt;<font></font>
   &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<font></font>
&lt;/head&gt;<font></font>
...<font></font>
</code></pre>

<p>What does this mean? It is telling IE to use the latest compatibility mode. More information is available in <a href="https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx" rel="nofollow">MSDN: Specifying legacy document modes</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是由于拼写错误getElementBy </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID引起的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将其更改为getElementById</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC67350214</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>var res = function(str){<font></font>
    var ob; var oe;<font></font>
    for(var i = 0; i &lt; str.length; i++){<font></font>
        if(str.charAt(i) != " " &amp;&amp; ob == undefined){ob = i;}<font></font>
        if(str.charAt(i) != " "){oe = i;}<font></font>
    }<font></font>
    return str.substring(ob,oe+1);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ASam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><code>trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript标准中</font><font style="vertical-align: inherit;">没有本地</font><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">也许Mozilla提供了一种，但是如果您想在IE中使用一种，则需要自己编写。</font></font><a href="http://blog.stevenlevithan.com/archives/faster-trim-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上有几个版本</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在IE9中遇到了同样的问题，但是当我在 </font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;HTML&gt;<font></font>
&lt;HEAD&gt;...<font></font>
.<font></font>
.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题已解决。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，没有对trim（）的跨浏览器JavaScript支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用jQuery（具有.trim（）方法），则可以使用以下方法为字符串添加修剪支持：</font></font></p>

<pre><code>String.prototype.trim = function() {<font></font>
    return this.replace(/^\s+|\s+$/g,"");<font></font>
}<font></font>
String.prototype.ltrim = function() {<font></font>
    return this.replace(/^\s+/,"");<font></font>
}<font></font>
String.prototype.rtrim = function() {<font></font>
    return this.replace(/\s+$/,"");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试从输入中修剪值然后询问它是否等于零时，我遇到了类似的问题：</font></font></p>

<pre><code>if ($(this).val().trim() == "")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这在IE6-8中投入了麻烦。够烦人的是，我试图像这样修改它： </font></font></p>

<pre><code>   var originalValue = $(this).val();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，使用jQuery的trim方法在所有浏览器中都非常适合我。</font></font></p>

<pre><code>var originalValueTrimmed = $.trim($(this).val());              <font></font>
            if (originalValueTrimmed  == "") { ... }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的：</font></font></p>

<pre><code>$.trim( $("#mycomment").val() );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人使用，</font></font><code>$("#mycomment").val().trim();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这在IE上不起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经编写了一些代码来实现修剪功能。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LTRIM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（向左修剪）：</font></font></p>

<pre><code>function ltrim(s)<font></font>
{<font></font>
    var l=0;<font></font>
    while(l &lt; s.length &amp;&amp; s[l] == ' ')<font></font>
    {   l++; }<font></font>
    return s.substring(l, s.length);<font></font>
} <font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RTRIM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（修剪右）：</font></font></p>

<pre><code>function rtrim(s)<font></font>
{<font></font>
    var r=s.length -1;<font></font>
    while(r &gt; 0 &amp;&amp; s[r] == ' ')<font></font>
    {   r-=1;   }<font></font>
    return s.substring(0, r+1);<font></font>
 }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TRIM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（修剪两侧）：</font></font></p>

<pre><code>function trim(s)<font></font>
{<font></font>
    return rtrim(ltrim(s));<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们也可以使用正则表达式。</font></font></p>

<pre><code>function trimStr(str) {<font></font>
  return str.replace(/^\s+|\s+$/g, '');<font></font>
}<font></font>
</code></pre>

<p><a href="https://stackoverflow.com/a/3387111/168175"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用的解释</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/String/Trim" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/String/Trim</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是javascript的新增功能，IE不支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来该功能未在IE中实现。</font><font style="vertical-align: inherit;">如果您使用的是jQuery，则可以</font></font><code>$.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用（</font></font><a href="http://api.jquery.com/jQuery.trim/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery.trim/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
