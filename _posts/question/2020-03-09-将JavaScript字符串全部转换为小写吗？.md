---
layout: question
title:  将JavaScript字符串全部转换为小写吗？
date:   2020-03-09T13:59:25.000Z
description: 如何将JavaScript字符串值转换为所有小写字母？示例：从“您的姓名”到“您的姓名”...
img: 
author: 梅西里
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将JavaScript字符串值转换为所有小写字母？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：从“您的姓名”到“您的姓名”</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第294篇《将JavaScript字符串全部转换为小写吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try</p>

<pre><code>&lt;input type="text" style="text-transform: uppercase"&gt;  //uppercase<font></font>
&lt;input type="text" style="text-transform: lowercase"&gt;  //lowercase<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/oneofthelions/z45ygobL/" rel="nofollow">Demo - JSFiddle</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>you can use the in built .toLowerCase() method on javascript strings. ex: var x = "Hello"; x.toLowerCase();</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In case you want to build it yourself:</p>

<pre><code>function toLowerCase(string) {<font></font>
<font></font>
let lowerCaseString = "";<font></font>
<font></font>
for (let i = 0; i &lt; string.length; i++) {<font></font>
    //find ASCII charcode<font></font>
    let charcode = string.charCodeAt(i);<font></font>
<font></font>
    //if uppercase<font></font>
    if (charcode &gt; 64 &amp;&amp; charcode &lt; 97){<font></font>
        //convert to lowercase<font></font>
        charcode = charcode + 32<font></font>
    }<font></font>
<font></font>
    //back to char<font></font>
    let lowercase = String.fromCharCode(charcode);<font></font>
<font></font>
    //append<font></font>
    lowerCaseString = lowerCaseString.concat(lowercase);<font></font>
}<font></font>
<font></font>
return lowerCaseString<font></font>
</code></pre>

<p>}</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simply use JS <code>toLowerCase()</code><br>
<code>let v = "Your Name"
 let u = v.toLowerCase();</code> or<br>
<code>let u = "Your Name".toLowerCase();</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Tray this short way</p>

<pre><code>  document.write((a+"").toUpperCase());
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Method or Function:     toLowerCase(),     toUpperCase()</p>

<p>Description: These methods are used to cover a string or alphabet from lower case to upper case or vice versa. e.g: "and" to "AND".</p>

<p>Converting to Upper Case:-
Example Code:-</p>

<pre><code>&lt;script language=javascript&gt;<font></font>
var ss = " testing case conversion method ";<font></font>
var result = ss.toUpperCase();<font></font>
document.write(result);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>Result: TESTING CASE CONVERSION METHOD</p>

<p>Converting to Lower Case:- 
Example Code:</p>

<pre><code>&lt;script language=javascript&gt;<font></font>
var ss = " TESTING LOWERCASE CONVERT FUNCTION ";<font></font>
var result = ss.toLowerCase();<font></font>
document.write(result);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>Result: testing lowercase convert function</p>

<p>Explanation: In the above examples,</p>

<pre><code>toUpperCase() method converts any string to "UPPER" case letters.<font></font>
toLowerCase() method converts any string to "lower" case letters.<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Opt 1 : using toLowerCase();</strong></p>

<pre><code>var x = "ABC";<font></font>
x=x.toLowerCase();<font></font>
</code></pre>

<p><strong>Opt 2 : Using your own function</strong></p>

<pre><code> function convertToLowerCase(str) {<font></font>
      var result = ''<font></font>
<font></font>
      for (var i = 0; i &lt; str.length; i++) {<font></font>
        var code = str.charCodeAt(i)<font></font>
        if (code &gt; 64 &amp;&amp; code &lt; 91) {<font></font>
          result += String.fromCharCode(code + 32)<font></font>
        } else {<font></font>
          result += str.charAt(i)<font></font>
        }<font></font>
      }<font></font>
      return result<font></font>
    }<font></font>
</code></pre>

<p>Call it as:</p>

<pre><code>x= convertToLowerCase(x);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿蛋蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Note that the function will ONLY work on STRING objects.</p>

<p>For instance, I was consuming a plugin, and was confused why I was getting a 
"extension.tolowercase is not a function" JS error.</p>

<pre><code> onChange: function(file, extension)<font></font>
    {<font></font>
      alert("extension.toLowerCase()=&gt;" + extension.toLowerCase() + "&lt;=");<font></font>
</code></pre>

<p>Which produced the error "extension.toLowerCase is not a function"
So I tried this piece of code, which revealed the problem!</p>

<pre><code>alert("(typeof extension)=&gt;" + (typeof extension) + "&lt;=");;
</code></pre>

<p>The output was"(typeof extension)=&gt;object&lt;=" - so AhHa, I was NOT getting a string var for my input.  The fix is straight forward though - just force the darn thing into a String!:</p>

<pre><code>var extension = String(extension);
</code></pre>

<p>After the cast, the extension.toLowerCase() function worked fine.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var lowerCaseName = "Your Name".toLowerCase();
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
