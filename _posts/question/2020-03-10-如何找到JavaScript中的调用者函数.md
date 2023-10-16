---
layout: question
title:  如何找到JavaScript中的调用者函数？
date:   2020-03-10T02:34:28.000Z
description: function main(){   Hello();}function Hello(){  // How do you find out ...
img: 
author: Harry逆天
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>function main()<font></font>
{<font></font>
   Hello();<font></font>
}<font></font>
<font></font>
function Hello()<font></font>
{<font></font>
  // How do you find out the caller function is 'main'?<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法找出调用堆栈？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第431篇《如何找到JavaScript中的调用者函数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>As none of previous answers works like what I was looking for(getting just the last function caller not a function as a string or callstack) I post my solution here for those who are like me and hope this will work for them:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function getCallerName(func)<font></font>
{<font></font>
  if (!func) return "anonymous";<font></font>
  let caller = func.caller;<font></font>
  if (!caller) return "anonymous";<font></font>
  caller = caller.toString();<font></font>
  if (!caller.trim().startsWith("function")) return "anonymous";<font></font>
  return caller.substring(0, caller.indexOf("(")).replace("function","");<font></font>
}<font></font>
<font></font>
<font></font>
//  Example of how to use "getCallerName" function<font></font>
<font></font>
function Hello(){<font></font>
console.log("ex1  =&gt;  " + getCallerName(Hello));<font></font>
}<font></font>
<font></font>
function Main(){<font></font>
Hello();<font></font>
<font></font>
// another example<font></font>
console.log("ex3  =&gt;  " + getCallerName(Main));<font></font>
}<font></font>
<font></font>
Main();</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>If you really need the functionality for some reason and want it to be cross-browser compatible and not worry for strict stuff and be forward compatible then pass a this reference:</p>

<pre><code>function main()<font></font>
{<font></font>
   Hello(this);<font></font>
}<font></font>
<font></font>
function Hello(caller)<font></font>
{<font></font>
    // caller will be the object that called Hello. boom like that... <font></font>
    // you can add an undefined check code if the function Hello <font></font>
    // will be called without parameters from somewhere else<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村老丝</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Another way around this problem is to simply pass the name of the calling function as a parameter. </p>

<p>For example:</p>

<pre><code>function reformatString(string, callerName) {<font></font>
<font></font>
    if (callerName === "uid") {<font></font>
        string = string.toUpperCase();<font></font>
    }<font></font>
<font></font>
    return string;<font></font>
}<font></font>
</code></pre>

<p>Now, you could call the function like this:</p>

<pre><code>function uid(){<font></font>
    var myString = "apples";<font></font>
<font></font>
    reformatString(myString, function.name);<font></font>
}<font></font>
</code></pre>

<p>My example uses a hard coded check of the function name, but you could easily use a switch statement or some other logic to do what you want there.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A村村</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Try the following code:</p>

<pre><code>function getStackTrace(){<font></font>
  var f = arguments.callee;<font></font>
  var ret = [];<font></font>
  var item = {};<font></font>
  var iter = 0;<font></font>
<font></font>
  while ( f = f.caller ){<font></font>
      // Initialize<font></font>
    item = {<font></font>
      name: f.name || null,<font></font>
      args: [], // Empty array = no arguments passed<font></font>
      callback: f<font></font>
    };<font></font>
<font></font>
      // Function arguments<font></font>
    if ( f.arguments ){<font></font>
      for ( iter = 0; iter&lt;f.arguments.length; iter++ ){<font></font>
        item.args[iter] = f.arguments[iter];<font></font>
      }<font></font>
    } else {<font></font>
      item.args = null; // null = argument listing not supported<font></font>
    }<font></font>
<font></font>
    ret.push( item );<font></font>
  }<font></font>
  return ret;<font></font>
}<font></font>
</code></pre>

<p>Worked for me in Firefox-21 and Chromium-25.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞古一A</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>In both ES6 and Strict mode, use the following to get the Caller function</p>

<pre><code>console.log((new Error()).stack.split("\n")[2].trim().split(" ")[1])
</code></pre>

<p>Please note that, the above line will throw an exception, if there is no caller or no previous stack. Use accordingly.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Just want to let you know that on <strong>PhoneGap/Android</strong> the <code>name</code> doesnt seem to be working. But <code>arguments.callee.caller.toString()</code> will do the trick.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user"> ....</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Try accessing this:</p>

<pre><code>arguments.callee.caller.name
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProSam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>*arguments.callee.caller</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>arguments.caller</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弃用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此使用</font><font style="vertical-align: inherit;">起来</font><font style="vertical-align: inherit;">更安全</font><font style="vertical-align: inherit;">...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>function Hello() {<font></font>
    alert(Hello.caller);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猴子</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会这样做：</font></font></p>

<pre><code>function Hello() {<font></font>
  console.trace();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常</font></font><code>(new Error()).stack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">令人高兴的是，这还为您提供了调用方调用该函数的行号。</font><font style="vertical-align: inherit;">缺点是它将堆栈的长度限制为10，这就是为什么我首先来到此页面的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我正在使用它在执行期间收集低级构造函数中的调用堆栈，以供日后查看和调试，因此设置断点是没有用的，因为它会被击中数千次）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Function.Caller来获取调用函数。</font><font style="vertical-align: inherit;">使用arguments.caller的旧方法被认为已过时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码说明了其用法：</font></font></p>

<pre><code>function Hello() { return Hello.caller;}<font></font>
<font></font>
Hello2 = function NamedFunc() { return NamedFunc.caller; };<font></font>
<font></font>
function main()<font></font>
{<font></font>
   Hello();  //both return main()<font></font>
   Hello2();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关过时的arguments.caller的说明：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :   </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意Function.caller是非标准的：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猪猪</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不打算在IE &lt;11中运行它，那么</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/trace" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console.trace（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将很适合。</font></font></p>

<pre><code>function main() {<font></font>
    Hello();<font></font>
}<font></font>
<font></font>
function Hello() {<font></font>
    console.trace()<font></font>
}<font></font>
<font></font>
main()<font></font>
// Hello @ VM261:9<font></font>
// main @ VM261:4<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅JinJin十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以获得完整的堆栈跟踪：</font></font></p>

<pre><code>arguments.callee.caller<font></font>
arguments.callee.caller.caller<font></font>
arguments.callee.caller.caller.caller<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到来电者是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这会在递归函数上造成无限循环。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道您提到过“用Java语言编写”，但是如果目的是调试，我认为仅使用浏览器的开发人员工具会更容易。</font><font style="vertical-align: inherit;">在Chrome中是这样的：
 </font></font><img src="https://i.stack.imgur.com/aBtUp.png" alt="在此处输入图片说明"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
只需将调试器放在要调查堆栈的位置即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回顾（并使其更加清晰）...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码： </font></font></p>

<pre><code>function Hello() {<font></font>
    alert("caller is " + arguments.callee.caller.toString());<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效于此： </font></font></p>

<pre><code>function Hello() {<font></font>
    alert("caller is " + Hello.caller.toString());<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，第一位操作员更易于移植，因为您可以更改函数的名称，例如从“ Hello”更改为“ Ciao”​​，仍然可以使整个过程正常进行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在后者中，如果您决定重构被调用函数的名称（Hello），则必须更改其所有出现的位置：( </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>function Hello()<font></font>
{<font></font>
    alert("caller is " + Hello.caller);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此功能是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非标准的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，来自</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller" rel="noreferrer"><code>Function.caller</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非标准</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  此功能是非标准的，不在标准范围内。</font><font style="vertical-align: inherit;">不要在面向Web的生产站点上使用它：它不适用于每个用户。</font><font style="vertical-align: inherit;">实现之间也可能存在很大的不兼容性，并且将来的行为可能会更改。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是2008年的旧答案，现代Javascript不再支持该答案：</font></font></p>

<pre><code>function Hello()<font></font>
{<font></font>
    alert("caller is " + arguments.callee.caller.toString());<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
