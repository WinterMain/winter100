---
layout: question
title:  如何检查JavaScript中是否存在函数？
date:   2020-03-12T08:48:04.000Z
description: 我的代码是function getID( swfID ){     if(navigator.appName.indexOf("Microsoft"...
img: 
author: 古一LEY
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码是</font></font></p>

<pre><code>function getID( swfID ){<font></font>
     if(navigator.appName.indexOf("Microsoft") != -1){<font></font>
          me = window[swfID];<font></font>
     }else{<font></font>
          me = document[swfID];<font></font>
     }<font></font>
}<font></font>
<font></font>
function js_to_as( str ){<font></font>
     me.onChange(str);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有时我</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法加载。</font><font style="vertical-align: inherit;">萤火虫错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">me.onChange不是一个函数</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想优雅地降级，因为这不是我程序中最重要的功能。</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出相同的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于如何确保它存在然后仅执行的任何建议</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（下面的任何一种方法都不能尝试抓到一件作品）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1158篇《如何检查JavaScript中是否存在函数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This will verify if the function exists, if so it will be executed</p>

<pre class="lang-js prettyprint-override"><code>me.onChange &amp;&amp; me.onChange(str);
</code></pre>

<p>Thus the error <code>TypeError: me.onChange is not a function</code> is prevent.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>And then there is this...</p>

<pre><code>( document.exitPointerLock || Function )();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>To illustrate the preceding answers, here a quick JSFiddle snippet : </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function test () {<font></font>
console.log()<font></font>
<font></font>
}<font></font>
<font></font>
console.log(typeof test) // &gt;&gt; "function"<font></font>
<font></font>
// implicit test, in javascript if an entity exist it returns implcitly true unless the element value is false as :<font></font>
// var test = false<font></font>
if(test){ console.log(true)}<font></font>
else{console.log(false)}<font></font>
<font></font>
// test by the typeof method<font></font>
if( typeof test === "function"){ console.log(true)}<font></font>
else{console.log(false)}<font></font>
<font></font>
<font></font>
// confirm that the test is effective : <font></font>
// - entity with false value<font></font>
var test2 = false<font></font>
if(test2){ console.log(true)}<font></font>
else{console.log(false)}<font></font>
<font></font>
// confirm that the test is effective :<font></font>
// - typeof entity<font></font>
if( typeof test ==="foo"){ console.log(true)}<font></font>
else{console.log(false)}<font></font>
<font></font>
/* Expected :<font></font>
function<font></font>
true <font></font>
true <font></font>
false<font></font>
false<font></font>
*/</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GOItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>    function sum(nb1,nb2){<font></font>
<font></font>
       return nb1+nb2;<font></font>
    }<font></font>
<font></font>
    try{<font></font>
<font></font>
      if(sum() != undefined){/*test if the function is defined before call it*/<font></font>
<font></font>
        sum(3,5);               /*once the function is exist you can call it */<font></font>
<font></font>
      }<font></font>
<font></font>
    }catch(e){<font></font>
<font></font>
      console.log("function not defined");/*the function is not defined or does not exists*/<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I have also been looking for an elegant solution to this problem. After much reflection, I found this approach best.</p>

<p><code>const func =  me.onChange || (str =&gt; {});
func(str)</code>;</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Put double exclamation mark i.e !! before the function name that you want to check. If it exists, it will return true.</p>

<pre><code>function abc(){<font></font>
}<font></font>
!!window.abc; // return true<font></font>
!!window.abcd; // return false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>With no conditions</p>

<pre><code>me.onChange=function(){};<font></font>
<font></font>
function getID( swfID ){<font></font>
     if(navigator.appName.indexOf("Microsoft") != -1){<font></font>
          me = window[swfID];<font></font>
     }else{<font></font>
          me = document[swfID];<font></font>
     }<font></font>
}<font></font>
<font></font>
function js_to_as( str ){<font></font>
     me.onChange(str);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I always check like this:</p>

<pre><code>if(!myFunction){return false;}
</code></pre>

<p>just place it before any code that uses this function</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>In a few words: catch the exception. </p>

<p>I am really surprised nobody answered or commented about Exception Catch on this post yet.</p>

<p>Detail: Here goes an example where I try to match a function which is prefixed by mask_ and suffixed by the form field "name". When JavaScript does not find the function, it should throw an <strong>ReferenceError</strong> which you can handle as you wish on the catch section.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function inputMask(input) {<font></font>
  try {<font></font>
    let maskedInput = eval("mask_"+input.name);<font></font>
<font></font>
    if(typeof maskedInput === "undefined")<font></font>
        return input.value;<font></font>
    else<font></font>
        return eval("mask_"+input.name)(input);<font></font>
<font></font>
  } catch(e) {<font></font>
    if (e instanceof ReferenceError) {<font></font>
      return input.value;<font></font>
    }<font></font>
  }<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This simple jQuery code should do the trick:</p>

<pre><code>if (jQuery.isFunction(functionName)) {<font></font>
    functionName();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function js_to_as( str ){<font></font>
     if (me &amp;&amp; me.onChange)<font></font>
         me.onChange(str);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小宇宙Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没看到这个建议：me.onChange &amp;&amp; me.onChange（str）;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，如果me.onChange是未定义的（如果尚未启动，它将是未定义的），则它将不执行后一部分。</font><font style="vertical-align: inherit;">如果me.onChange是一个函数，它将执行me.onChange（str）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以走得更远：</font></font></p>

<pre><code>me &amp;&amp; me.onChange &amp;&amp; me.onChange(str);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一我也是异步的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人小次郎</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这样的事情：</font></font></p>

<pre><code>if (typeof me.onChange !== "undefined") { <font></font>
    // safe to use the function<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更好（根据UpTheCreek推荐的评论）</font></font></p>

<pre><code>if (typeof me.onChange === "function") { <font></font>
    // safe to use the function<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
