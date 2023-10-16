---
layout: question
title:  如何在JavaScript中检查“未定义”？\[重复\]
date:   2020-03-09T09:51:06.000Z
description:                                                                          ...
img: 
author: 达蒙
category: question
answer: 6
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
                            <a href="/questions/27509/detecting-an-undefined-object-property" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检测未定义的对象属性</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （43个答案）
                                </font></font></span>
                        </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/858181/how-to-check-a-not-defined-variable-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中检查未定义的变量</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （14个答案）
                                </font></font></span>
                        </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/1984721/how-to-handle-undefined-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何处理javascript中的“未定义” [重复] </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （3个答案）
                                </font></font></span>
                        </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/5879319/how-to-check-if-a-variable-exist-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查javascript中是否存在变量？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （8个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-10-10 13：59：07Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试JavaScript中是否未定义变量的最合适方法是什么？</font><font style="vertical-align: inherit;">我已经看到了几种可能的方法：</font></font></p>

<pre><code>if (window.myVariable)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>if (typeof(myVariable) != "undefined")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>if (myVariable) //This throws an error if undefined. Should this be in Try/Catch?
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第188篇《如何在JavaScript中检查“未定义”？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I use it as a function parameter and exclude it on function execution that way I get the "real" undefined. Although it does require you to put your code inside a function. I found this while reading the jQuery source.</p>

<pre><code>undefined = 2;<font></font>
<font></font>
(function (undefined) {<font></font>
   console.log(undefined); // prints out undefined<font></font>
   // and for comparison:<font></font>
   if (undeclaredvar === undefined) console.log("it works!")<font></font>
})()<font></font>
</code></pre>

<p>Of course you could just use <code>typeof</code> though. But all my code is usually inside a containing function anyways, so using this method probably saves me a few bytes here and there.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，我始终使用以下内容：</font></font></p>

<pre><code>var x;<font></font>
if( x === undefined) {<font></font>
    //Do something here<font></font>
}<font></font>
else {<font></font>
   //Do something else here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有现代浏览器（JavaScript 1.8.5或更高版本）中，window.undefined属性都是不可写的。</font><font style="vertical-align: inherit;">从Mozilla的文档中：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" rel="noreferrer"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined</font></a><font style="vertical-align: inherit;">，我看到了：使用typeof（）的一个原因是，如果出现以下情况，它不会引发错误：该变量尚未定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢有使用的方法</font></font></p>

<pre><code>x === undefined 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它失败了并且炸毁了我的脸，而不是在以前没有声明x的情况下默默地通过/失败。</font><font style="vertical-align: inherit;">这提醒我未声明x。</font><font style="vertical-align: inherit;">我相信应该声明JavaScript中使用的所有变量。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://flippinawesome.org/2013/12/09/exploring-the-abyss-of-null-and-undefined-in-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读到这样的框架</font></font><a href="https://en.wikipedia.org/wiki/Underscore.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此功能：</font></font></p>

<pre><code>function isUndefined(obj){<font></font>
    return obj === void 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>if (typeof something != "undefined") {<font></font>
    // ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未定义，则它将不等于包含字符“ undefined”的字符串，因为该字符串不是未定义的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以检查变量的类型：</font></font></p>

<pre><code>if (typeof(something) != "undefined") ...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，您甚至不必检查类型。</font><font style="vertical-align: inherit;">如果设置后变量的值不能为假（例如，如果它是一个函数），则可以对变量进行求值。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>if (something) {<font></font>
  something(param);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我的偏爱。</font><font style="vertical-align: inherit;">在从未声明过变量的情况下它将起作用，这与与</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符进行</font><font style="vertical-align: inherit;">任何比较，</font><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">使用进行类型强制转换不同</font></font><code>if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同于</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也可能会在ECMAScript 3环境中重新定义，因此比较起来不可靠，尽管现在几乎所有常见环境都符合ECMAScript 5或更高版本）。</font></font></p>

<pre><code>if (typeof someUndeclaredVariable == "undefined") {<font></font>
    // Works<font></font>
}<font></font>
<font></font>
if (someUndeclaredVariable === undefined) { <font></font>
    // Throws an error<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
