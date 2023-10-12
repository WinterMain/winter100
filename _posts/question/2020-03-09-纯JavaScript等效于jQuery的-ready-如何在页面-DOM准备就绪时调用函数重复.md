---
layout: question
title:  纯JavaScript等效于jQuery的$ .ready（）-如何在页面/ DOM准备就绪时调用函数\[重复\]
date:   2020-03-09T13:41:33.000Z
description:                                                                          ...
img: 
author: Pro小卤蛋
category: question
answer: 4
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
                            <a href="/questions/799981/document-ready-equivalent-without-jquery" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$（document）.ready等同于不带jQuery </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （36个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-11-16 14：33：17Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，这可能只是一个愚蠢的问题，尽管我敢肯定会有很多其他人不时问同样的问题。</font><font style="vertical-align: inherit;">我，我只是想以任何一种方式100％确定它。</font><font style="vertical-align: inherit;">有了jQuery，我们都知道精彩之处</font></font></p>

<pre><code>$('document').ready(function(){});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，假设我要运行一个用标准JavaScript编写且没有库支持的函数，并且我想在页面准备就绪后立即启动一个函数。</font><font style="vertical-align: inherit;">解决这个问题的正确方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以做：</font></font></p>

<pre><code>window.onload="myFunction()";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...或者我可以使用</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记：</font></font></p>

<pre><code>&lt;body onload="myFunction()"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...或者我什至可以尝试在页面底部输入所有内容，但结尾</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记类似：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
   myFunction();<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是跨浏览器（旧/新）兼容方法以jQuery的方式发布一个或多个函数</font></font><code>$.ready()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第284篇《纯JavaScript等效于jQuery的$ .ready（）-如何在页面/ DOM准备就绪时调用函数\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>document.ondomcontentready=function(){}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 应该可以解决问题，但是它不具有完全的浏览器兼容性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎您应该只使用jQuery min</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的方法（将脚本放在结束body标签之前）</font></font></p>

<pre><code>&lt;script&gt;<font></font>
   myFunction()<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是支持新旧浏览器的可靠方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Sam宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不太确定您要问什么，但这也许可以帮助您：</font></font></p>

<pre><code>window.onload = function(){<font></font>
    // Code. . .<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></p>

<pre><code>window.onload = main;<font></font>
<font></font>
function main(){<font></font>
    // Code. . .<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要</font><strong><font style="vertical-align: inherit;">使用</font></strong><font style="vertical-align: inherit;">不带jQuery的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VANILLA</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则必须使用（Internet Explorer 9或更高版本）：</font></font></p>

<pre><code>document.addEventListener("DOMContentLoaded", function(event) {<font></font>
    // Your code to run since DOM is loaded and ready<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上相当于jQuery </font></font><code>.ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$(document).ready(function() {<font></font>
    console.log("Ready!");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个还可以像这样简短地编写，哪个jQuery将在ready甚至</font></font><a href="https://stackoverflow.com/q/7614574/32453"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后运行</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$(function() {<font></font>
    console.log("ready!");<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要与以下混淆</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这并不意味着要准备DOM）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请勿使用</font><font style="vertical-align: inherit;">这种会自行执行</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code> Example:<font></font>
<font></font>
(function() {<font></font>
   // Your page initialization code here  - WRONG<font></font>
   // The DOM will be available here   - WRONG<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该IIFE不会等待您的DOM加载。</font><font style="vertical-align: inherit;">（我什至在谈论最新版本的Chrome浏览器！）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
