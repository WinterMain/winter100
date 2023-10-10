---
layout: question
title:  ng-include的正确语法是什么？
date:   2020-03-23T02:22:19.000Z
description: I’m trying to include an HTML snippet inside of an ng-repeat, but I can’t get...
img: 
author: 神乐小哥Near
category: question
answer: 0
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I’m trying to include an HTML snippet inside of an <code>ng-repeat</code>, but I can’t get the include to work. It seems the current syntax of <code>ng-include</code> is different than what it was previously: I see many examples using</p>

<pre><code>&lt;div ng-include src="path/file.html"&gt;&lt;/div&gt;
</code></pre>

<p>But in the <a href="https://code.angularjs.org/1.1.0/docs/api/ng.directive:ngInclude#Usage" rel="nofollow noreferrer">official docs</a>, it says to use</p>

<pre><code>&lt;div ng-include="path/file.html"&gt;&lt;/div&gt;
</code></pre>

<p>But then <a href="https://code.angularjs.org/1.1.0/docs/api/ng.directive:ngInclude#Example" rel="nofollow noreferrer">down the page</a> it is shown as</p>

<pre><code>&lt;div ng-include src="path/file.html"&gt;&lt;/div&gt;
</code></pre>

<p>Regardless, I tried</p>

<pre class="lang-html prettyprint-override"><code>&lt;div ng-include="views/sidepanel.html"&gt;&lt;/div&gt;
</code></pre>

<pre class="lang-html prettyprint-override"><code>&lt;div ng-include src="views/sidepanel.html"&gt;&lt;/div&gt;
</code></pre>

<pre class="lang-html prettyprint-override"><code>&lt;ng-include src="views/sidepanel.html"&gt;&lt;/ng-include&gt;
</code></pre>

<pre class="lang-html prettyprint-override"><code>&lt;ng-include="views/sidepanel.html"&gt;&lt;/ng-include&gt;
</code></pre>

<pre class="lang-html prettyprint-override"><code>&lt;ng:include src="views/sidepanel.html"&gt;&lt;/ng:include&gt;
</code></pre>

<p>My snippet is not very much code, but it’s got a lot going on; I read in <a href="https://stackoverflow.com/questions/12361680/">Dynamically load template inside <code>ng-repeat</code></a> that that could cause a problem, so I replaced the content of <code>sidepanel.html</code> with just the word <code>foo</code>, and still nothing.</p>

<p>I also tried declaring the template directly in the page like this:</p>

<pre><code>&lt;script type="text/ng-template" id="tmpl"&gt;<font></font>
    foo<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>And running through all the variations of <code>ng-include</code> referencing the script’s <code>id</code>, and still nothing.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的页面还有很多内容，但是现在我将其简化为：</font></font></p>

<pre><code>&lt;!-- index.html --&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;!-- angular includes --&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body ng-view="views/main.html"&gt; &lt;!-- view is actually set in the router --&gt;<font></font>
    &lt;!-- views/main.html --&gt;<font></font>
    &lt;header&gt;<font></font>
        &lt;h2&gt;Blah&lt;/h2&gt;<font></font>
    &lt;/header&gt;<font></font>
    &lt;article id="sidepanel"&gt;<font></font>
        &lt;section class="panel"&gt; &lt;!-- will have ng-repeat="panel in panels" --&gt;<font></font>
            &lt;div ng-include src="views/sidepanel.html"&gt;&lt;/div&gt;<font></font>
        &lt;/section&gt;<font></font>
    &lt;/article&gt;<font></font>
&lt;!-- index.html --&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头会呈现，但是我的模板不会呈现。</font><font style="vertical-align: inherit;">我在控制台中或从Node中都没有收到任何错误，如果单击</font></font><code>src="views/sidepanel.html"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发工具中</font><font style="vertical-align: inherit;">的链接</font><font style="vertical-align: inherit;">，它将带我到模板（并显示</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2643篇《ng-include的正确语法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
