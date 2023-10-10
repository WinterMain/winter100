---
layout: question
title:  从文本JavaScript中删除HTML
date:   2020-03-11T12:32:18.000Z
description: 有没有一种简单的方法可以在JavaScript中获取html字符串并去除html？ ...
img: 
author: 达蒙小胖
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种简单的方法可以在JavaScript中获取html字符串并去除html？ </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第812篇《从文本JavaScript中删除HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>For escape characters also this will work using pattern matching:</p>

<pre><code>myString.replace(/((&amp;lt)|(&lt;)(?:.|\n)*?(&amp;gt)|(&gt;))/gm, '');
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The accepted answer works fine mostly, however in IE if the <code>html</code> string is <code>null</code> you get the <code>"null"</code> (instead of ''). Fixed: </p>

<pre><code>function strip(html)<font></font>
{<font></font>
   if (html == null) return "";<font></font>
   var tmp = document.createElement("DIV");<font></font>
   tmp.innerHTML = html;<font></font>
   return tmp.textContent || tmp.innerText || "";<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I have created a working regular expression myself:</p>

<pre><code>str=str.replace(/(&lt;\?[a-z]*(\s[^&gt;]*)?\?(&gt;|$)|&lt;!\[[a-z]*\[|\]\]&gt;|&lt;!DOCTYPE[^&gt;]*?(&gt;|$)|&lt;!--[\s\S]*?(--&gt;|$)|&lt;[a-z?!\/]([a-z0-9_:.])*(\s[^&gt;]*)?(&gt;|$))/gi, ''); 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY乐伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I just needed to strip out the <code>&lt;a&gt;</code> tags and replace them with the text of the link.</p>

<p>This seems to work great.</p>

<pre><code>htmlContent= htmlContent.replace(/&lt;a.*href="(.*?)"&gt;/g, '');<font></font>
htmlContent= htmlContent.replace(/&lt;\/a&gt;/g, '');<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>simple 2 line jquery to strip the html.</p>

<pre><code> var content = "&lt;p&gt;checking the html source&amp;nbsp;&lt;/p&gt;&lt;p&gt;&amp;nbsp;<font></font>
  &lt;/p&gt;&lt;p&gt;with&amp;nbsp;&lt;/p&gt;&lt;p&gt;all&lt;/p&gt;&lt;p&gt;the html&amp;nbsp;&lt;/p&gt;&lt;p&gt;content&lt;/p&gt;";<font></font>
<font></font>
 var text = $(content).text();//It gets you the plain text<font></font>
 console.log(text);//check the data in your console<font></font>
<font></font>
 cj("#text_area_id").val(text);//set your content to text area using text_area_id<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱LEY神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function stripHTML(my_string){<font></font>
    var charArr   = my_string.split(''),<font></font>
        resultArr = [],<font></font>
        htmlZone  = 0,<font></font>
        quoteZone = 0;<font></font>
    for( x=0; x &lt; charArr.length; x++ ){<font></font>
     switch( charArr[x] + htmlZone + quoteZone ){<font></font>
       case "&lt;00" : htmlZone  = 1;break;<font></font>
       case "&gt;10" : htmlZone  = 0;resultArr.push(' ');break;<font></font>
       case '"10' : quoteZone = 1;break;<font></font>
       case "'10" : quoteZone = 2;break;<font></font>
       case '"11' : <font></font>
       case "'12" : quoteZone = 0;break;<font></font>
       default    : if(!htmlZone){ resultArr.push(charArr[x]); }<font></font>
     }<font></font>
    }<font></font>
    return resultArr.join('');<font></font>
}<font></font>
</code></pre>

<p>Accounts for &gt; inside attributes and <code>&lt;img onerror="javascript"&gt;</code> in newly created dom elements.</p>

<p>usage:</p>

<pre><code>clean_string = stripHTML("string with &lt;html&gt; in it")
</code></pre>

<p>demo:</p>

<p><a href="https://jsfiddle.net/gaby_de_wilde/pqayphzd/" rel="nofollow">https://jsfiddle.net/gaby_de_wilde/pqayphzd/</a></p>

<p>demo of top answer doing the terrible things:</p>

<p><a href="https://jsfiddle.net/gaby_de_wilde/6f0jymL6/1/" rel="nofollow">https://jsfiddle.net/gaby_de_wilde/6f0jymL6/1/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you want to keep the links and the structure of the content (h1, h2, etc) then you should check out <a href="http://textversionjs.com/" rel="noreferrer">TextVersionJS</a> You can use it with any HTML, although it was created to convert an HTML email to plain text.</p>

<p>The usage is very simple. For example in node.js:</p>

<pre><code>var createTextVersion = require("textversionjs");<font></font>
var yourHtml = "&lt;h1&gt;Your HTML&lt;/h1&gt;&lt;ul&gt;&lt;li&gt;goes&lt;/li&gt;&lt;li&gt;here.&lt;/li&gt;&lt;/ul&gt;";<font></font>
<font></font>
var textVersion = createTextVersion(yourHtml);<font></font>
</code></pre>

<p>Or in the browser with pure js:</p>

<pre><code>&lt;script src="textversion.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
  var yourHtml = "&lt;h1&gt;Your HTML&lt;/h1&gt;&lt;ul&gt;&lt;li&gt;goes&lt;/li&gt;&lt;li&gt;here.&lt;/li&gt;&lt;/ul&gt;";<font></font>
  var textVersion = createTextVersion(yourHtml);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>It also works with require.js:</p>

<pre><code>define(["textversionjs"], function(createTextVersion) {<font></font>
  var yourHtml = "&lt;h1&gt;Your HTML&lt;/h1&gt;&lt;ul&gt;&lt;li&gt;goes&lt;/li&gt;&lt;li&gt;here.&lt;/li&gt;&lt;/ul&gt;";<font></font>
  var textVersion = createTextVersion(yourHtml);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">entaseven</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This should do the work on any Javascript environment (NodeJS included).</p>

<pre><code>const text = `<font></font>
&lt;html lang="en"&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;style type="text/css"&gt;*{color:red}&lt;/style&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;&lt;b&gt;This is some text&lt;/b&gt;&lt;br/&gt;&lt;body&gt;<font></font>
&lt;/html&gt;`;<font></font>
<font></font>
// Rule to remove inline CSS.<font></font>
text.replace(/&lt;style[^&gt;]*&gt;.*&lt;\/style&gt;/gm, '')<font></font>
// Rule to remove all opening, closing and orphan HTML tags.<font></font>
    .replace(/&lt;[^&gt;]+&gt;/gm, '')<font></font>
// Rule to remove leading spaces and repeated CR/LF.<font></font>
    .replace(/([\r\n]+ +)+/gm, '');<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>myString.replace(/&lt;[^&gt;]*&gt;?/gm, '');
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法：</font></font></p>

<pre><code>jQuery(html).text();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将从html字符串中检索所有文本。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在浏览器中运行，那么最简单的方法就是</font></font><a href="http://jsfiddle.net/8JSZX/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让浏览器为您完成...</font></font></a></p>

<pre><code>function stripHtml(html)<font></font>
{<font></font>
   var tmp = document.createElement("DIV");<font></font>
   tmp.innerHTML = html;<font></font>
   return tmp.textContent || tmp.innerText || "";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：正如人们在评论中所指出的那样，如果您不控制HTML的源代码（例如，请勿在可能来自用户输入的任何内容上运行此代码），则最好避免这种情况。</font><font style="vertical-align: inherit;">对于这些情况，您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">让浏览器为您完成工作- </font></font><a href="https://stackoverflow.com/questions/822452/strip-html-from-text-javascript/47140708#47140708"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅Saba关于使用现在广泛使用的DOMParser的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
