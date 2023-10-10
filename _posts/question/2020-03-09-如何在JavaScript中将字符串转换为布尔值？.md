---
layout: question
title:  如何在JavaScript中将字符串转换为布尔值？
date:   2020-03-09T09:24:38.000Z
description: 我可以将表示布尔值（例如，“ true”，“ false”）的字符串转换为JavaScript中的固有类型吗？我有一个隐藏的HTML表单，可根据用户在...
img: 
author: 老丝村村Stafan
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以将表示布尔值（例如，“ true”，“ false”）的字符串转换为JavaScript中的固有类型吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个隐藏的HTML表单，可根据用户在列表中的选择进行更新。</font><font style="vertical-align: inherit;">此表单包含一些表示布尔值的字段，并使用内部布尔值动态填充。</font><font style="vertical-align: inherit;">但是，一旦将此值放入隐藏的输入字段中，它将成为一个字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定字段的布尔值（将其转换为字符串后）的唯一方法是依赖于其字符串表示形式的文字值。</font></font></p>

<pre><code>var myValue = document.myForm.IS_TRUE.value;<font></font>
var isTrueSet = myValue == 'true';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更好的方法可以做到这一点？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Holy god some of these answers are just wild.  I love JS and its infinite number of ways to skin a bool.</p>

<p>My preference, which I was shocked not to see already, is:</p>

<pre><code>testVar = testVar.toString().match(/^(true|[1-9][0-9]*|[0-9]*[1-9]+|yes)$/i) ? true : false;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>My take on this question is that it aims to satisfy three objectives:</p>

<ul>
<li>Return true/false for truthy and falsey values, but also return true/false for multiple string values that would be truthy or falsey if they were Booleans instead of strings.</li>
<li>Second, provide a resilient interface so that values other than those specified will not fail, but rather return a default value</li>
<li>Third, do all this with as little code as possible.</li>
</ul>

<p>The problem with using JSON is that it fails by causing a Javascript error. This solution is not resilient (though it satisfies 1 and 3):</p>

<pre><code>JSON.parse("FALSE") // fails
</code></pre>

<p>This solution is not concise enough:</p>

<pre><code>if(value === "TRUE" || value === "yes" || ...) { return true; }
</code></pre>

<p>I am working on solving this exact problem for <a href="http://typecastjs.org" rel="noreferrer">Typecast.js</a>. And the best solution to all three objectives is this one:</p>

<pre><code>return /^true$/i.test(v);
</code></pre>

<p>It works for many cases, does not fail when values like {} are passed in, and is very concise. Also it returns false as the default value rather than undefined or throwing an Error, which is more useful in loosely-typed Javascript development. Bravo to the other answers that suggested it!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To convert both string("true", "false") and boolean to boolean</p>

<pre><code>('' + flag) === "true"
</code></pre>

<p>Where <code>flag</code> can be </p>

<pre><code> var flag = true<font></font>
 var flag = "true"<font></font>
 var flag = false<font></font>
 var flag = "false"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>Boolean.parse = function (str) {<font></font>
  switch (str.toLowerCase ()) {<font></font>
    case "true":<font></font>
      return true;<font></font>
    case "false":<font></font>
      return false;<font></font>
    default:<font></font>
      throw new Error ("Boolean.parse: Cannot convert string to boolean.");<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I use the following:</p>

<pre><code>function parseBool(b) {<font></font>
    return !(/^(false|0)$/i).test(b) &amp;&amp; !!b;<font></font>
}<font></font>
</code></pre>

<p>This function performs the usual Boolean coercion with the exception of the strings "false" (case insensitive) and "0".</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Universal solution with JSON parse:</p>

<pre><code>function getBool(val) {<font></font>
    return !!JSON.parse(String(val).toLowerCase());<font></font>
}<font></font>
<font></font>
getBool("1"); //true<font></font>
getBool("0"); //false<font></font>
getBool("true"); //true<font></font>
getBool("false"); //false<font></font>
getBool("TRUE"); //true<font></font>
getBool("FALSE"); //false<font></font>
</code></pre>

<p>UPDATE (without JSON):</p>

<pre><code>function getBool(val){ <font></font>
    var num = +val;<font></font>
    return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0,'');<font></font>
}<font></font>
</code></pre>

<p>I also created fiddle to test it <a href="http://jsfiddle.net/remunda/2GRhG/">http://jsfiddle.net/remunda/2GRhG/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>stringToBoolean: function(string){<font></font>
    switch(string.toLowerCase().trim()){<font></font>
        case "true": case "yes": case "1": return true;<font></font>
        case "false": case "no": case "0": case null: return false;<font></font>
        default: return Boolean(string);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这很普遍：</font></font></p>

<p><code>if (String(a) == "true")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它去了：</font></font></p>

<pre><code>String(true) == "true"     //returns true<font></font>
String(false) == "true"    //returns false<font></font>
String("true") == "true"   //returns true<font></font>
String("false") == "true"  //returns false<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从技术上来说，这个极受推崇的旧式答案是正确的，但仅适用于特定情况，即您的字符串值为EXACTLY </font></font><code>"true"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"false"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的函数中传递的无效json字符串</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将引发异常</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么样？</font></font></p>

<pre><code>JSON.parse("True".toLowerCase());
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或与jQuery</font></font></p>

<pre><code>$.parseJSON("TRUE".toLowerCase());
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
