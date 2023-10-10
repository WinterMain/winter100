---
layout: question
title:  有没有更好的方法在JavaScript中执行可选函数参数？\[重复\]
date:   2020-03-10T06:21:01.000Z
description:                                                                          ...
img: 
author: ProTony
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/894860/set-a-default-parameter-value-for-a-javascript-function" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为JavaScript函数设置默认参数值</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （26个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-11-25 18：15：17Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直像这样处理JavaScript中的可选参数：</font></font></p>

<pre><code>function myFunc(requiredArg, optionalArg){<font></font>
  optionalArg = optionalArg || 'defaultValue';<font></font>
<font></font>
  // Do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有更好的方法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有在这种情况下使用</font></font><code>||</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会失败的情况？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>function foo(requiredArg){<font></font>
  if(arguments.length&gt;1) var optionalArg = arguments[1];<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇乐猪猪</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>function Default(variable, new_value)<font></font>
{<font></font>
    if(new_value === undefined) { return (variable === undefined) ? null : variable; }<font></font>
    return (variable === undefined) ? new_value : variable;<font></font>
}<font></font>
<font></font>
var a = 2, b = "hello", c = true, d;<font></font>
<font></font>
var test = Default(a, 0),<font></font>
test2 = Default(b, "Hi"),<font></font>
test3 = Default(c, false),<font></font>
test4 = Default(d, "Hello world");<font></font>
<font></font>
window.alert(test + "\n" + test2 + "\n" + test3 + "\n" + test4);<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/mq60hqrf/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/mq60hqrf/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对undefined的测试是不必要的，并且没有那么健壮，因为如user568458所指出的，如果传递null或false，则提供的解决方案将失败。</font><font style="vertical-align: inherit;">API的用户可能会认为false或null将迫使该方法避免使用该参数。</font></font></p>

<pre><code>function PaulDixonSolution(required, optionalArg){<font></font>
   optionalArg = (typeof optionalArg === "undefined") ? "defaultValue" : optionalArg;<font></font>
   console.log(optionalArg);<font></font>
};<font></font>
PaulDixonSolution("required");<font></font>
PaulDixonSolution("required", "provided");<font></font>
PaulDixonSolution("required", null);<font></font>
PaulDixonSolution("required", false);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是：</font></font></p>

<pre><code>defaultValue<font></font>
provided<font></font>
null<font></font>
false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后两个可能不好。</font><font style="vertical-align: inherit;">而是尝试：</font></font></p>

<pre><code>function bulletproof(required, optionalArg){<font></font>
   optionalArg = optionalArg ? optionalArg : "defaultValue";;<font></font>
   console.log(optionalArg);<font></font>
};<font></font>
bulletproof("required");<font></font>
bulletproof("required", "provided");<font></font>
bulletproof("required", null);<font></font>
bulletproof("required", false);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是：</font></font></p>

<pre><code>defaultValue<font></font>
provided<font></font>
defaultValue<font></font>
defaultValue<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一不理想的情况是，当您实际上具有旨在为布尔值或故意为null的可选参数时。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">落到</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题上，</font><strong><font style="vertical-align: inherit;">在EcmaScript 2015中</font></strong><font style="vertical-align: inherit;">搜索</font><strong><font style="vertical-align: inherit;">默认参数</font></strong><font style="vertical-align: inherit;">，因此仅提及...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以执行</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认参数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function doSomething(optionalParam = "defaultValue"){<font></font>
    console.log(optionalParam);//not required to check for falsy values<font></font>
}<font></font>
<font></font>
doSomething(); //"defaultValue"<font></font>
doSomething("myvalue"); //"myvalue"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LPro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我习惯于在处理可选变量上看到一些基本的变化。</font><font style="vertical-align: inherit;">有时，宽松版本很有用。</font></font></p>

<pre><code>function foo(a, b, c) {<font></font>
  a = a || "default";   // Matches 0, "", null, undefined, NaN, false.<font></font>
  a || (a = "default"); // Matches 0, "", null, undefined, NaN, false.<font></font>
<font></font>
  if (b == null) { b = "default"; } // Matches null, undefined.<font></font>
<font></font>
  if (typeof c === "undefined") { c = "default"; } // Matches undefined.<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">与变量一起使用的默认值</font><font style="vertical-align: inherit;">在</font></font><a href="https://en.wikipedia.org/wiki/Backbone.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.js中得到了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">广泛使用</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
