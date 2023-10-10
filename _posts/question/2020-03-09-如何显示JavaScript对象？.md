---
layout: question
title:  如何显示JavaScript对象？
date:   2020-03-09T12:31:11.000Z
description: 如何像alert使用变量一样以字符串格式显示JavaScript对象的内容？我要显示对象的格式相同。...
img: 
author: 猴子Near
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何像</font></font><code>alert</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用变量</font><font style="vertical-align: inherit;">一样以字符串格式显示JavaScript对象的内容</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要显示对象的格式相同。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var list = function(object) {<font></font>
   for(var key in object) {<font></font>
     console.log(key);<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p>where <code>object</code> is your object</p>

<p>or you can use this in chrome dev tools, "console" tab:</p>

<p><code>console.log(object);</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Javascript Function</strong></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    function print_r(theObj){ <font></font>
       if(theObj.constructor == Array || theObj.constructor == Object){ <font></font>
          document.write("&lt;ul&gt;") <font></font>
          for(var p in theObj){ <font></font>
             if(theObj[p].constructor == Array || theObj[p].constructor == Object){ <font></font>
                document.write("&lt;li&gt;["+p+"] =&gt; "+typeof(theObj)+"&lt;/li&gt;"); <font></font>
                document.write("&lt;ul&gt;") <font></font>
                print_r(theObj[p]); <font></font>
                document.write("&lt;/ul&gt;") <font></font>
             } else { <font></font>
                document.write("&lt;li&gt;["+p+"] =&gt; "+theObj[p]+"&lt;/li&gt;"); <font></font>
             } <font></font>
          } <font></font>
          document.write("&lt;/ul&gt;") <font></font>
       } <font></font>
    } <font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong>Printing Object</strong></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
print_r(JAVACRIPT_ARRAY_OR_OBJECT);<font></font>
&lt;/script&gt; <font></font>
</code></pre>

<p>via <a href="http://blog.chapagain.com.np/print_r-in-javascript/" rel="noreferrer">print_r in Javascript</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Another way of displaying objects within the console is with <code>JSON.stringify</code>. Checkout the below example:</p>

<pre><code>var gandalf = {<font></font>
  "real name": "Gandalf",<font></font>
  "age (est)": 11000,<font></font>
  "race": "Maia",<font></font>
  "haveRetirementPlan": true,<font></font>
  "aliases": [<font></font>
    "Greyhame",<font></font>
    "Stormcrow",<font></font>
    "Mithrandir",<font></font>
    "Gandalf the Grey",<font></font>
    "Gandalf the White"<font></font>
  ]<font></font>
};<font></font>
//to console log object, we cannot use console.log("Object gandalf: " + gandalf);<font></font>
console.log("Object gandalf: ");<font></font>
//this will show object gandalf ONLY in Google Chrome NOT in IE<font></font>
console.log(gandalf);<font></font>
//this will show object gandalf IN ALL BROWSERS!<font></font>
console.log(JSON.stringify(gandalf));<font></font>
//this will show object gandalf IN ALL BROWSERS! with beautiful indent<font></font>
console.log(JSON.stringify(gandalf, null, 4));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>As it was said before best and most simply way i found was </p>

<pre><code>var getPrintObject=function(object)<font></font>
{<font></font>
    return JSON.stringify(object);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simply use </p>

<pre><code>JSON.stringify(obj)
</code></pre>

<p>Example</p>

<pre><code>var args_string = JSON.stringify(obj);<font></font>
console.log(args_string);<font></font>
</code></pre>

<p>Or </p>

<pre><code>alert(args_string);
</code></pre>

<p>Also, note in javascript functions are considered as objects.</p>

<p>As an extra note :</p>

<p>Actually you can assign new property like this and access it console.log or display it in alert</p>

<pre><code>foo.moo = "stackoverflow";<font></font>
console.log(foo.moo);<font></font>
alert(foo.moo);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2>try this :</h2>

<pre><code>console.log(JSON.stringify(obj))
</code></pre>

<p>This will print the stringify version of object. So instead of <code>[object]</code> as an output you will get the content of object.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you want to use alert, to print your object, you can do this:</p>

<p><code>alert("myObject is " + myObject.toSource());</code></p>

<p>It should print each property and its corresponding value in string format.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>console.dir(object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示指定JavaScript对象的属性的交互式列表。</font><font style="vertical-align: inherit;">此清单使您可以使用显示三角形检查子对象的内容。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，该</font></font><code>console.dir()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能是非标准的。</font><font style="vertical-align: inherit;">查看</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dir" rel="noreferrer" title="标题"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN网络文档</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用本机</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">与嵌套对象一起使用，并且所有主流浏览器都</font></font><a href="http://caniuse.com/#search=json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法。</font></font></p>

<pre><code>str = JSON.stringify(obj);<font></font>
str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.<font></font>
console.log(str); // Logs output to dev tools console.<font></font>
alert(str); // Displays output using window.alert()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla API参考</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他示例。</font></font></p>

<pre><code>obj = JSON.parse(str); // Reverses above operation (Just in case if needed.)
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到此Javascript错误，</font><font style="vertical-align: inherit;">请使用自定义</font></font><a href="https://stackoverflow.com/a/11616993/218857"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON.stringify替换程序</font></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>"Uncaught TypeError: Converting circular structure to JSON"
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
