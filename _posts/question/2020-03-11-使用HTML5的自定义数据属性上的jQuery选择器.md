---
layout: question
title:  使用HTML5的自定义数据属性上的jQuery选择器
date:   2020-03-11T12:35:06.000Z
description: 我想知道HTML5随附的这些数据属性有哪些选择器。以这段HTML为例：<ul data-group="Companies">  <li data...
img: 
author: JinJinNear
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道HTML5随附的这些数据属性有哪些选择器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以这段HTML为例：</font></font></p>

<pre><code>&lt;ul data-group="Companies"&gt;<font></font>
  &lt;li data-company="Microsoft"&gt;&lt;/li&gt;<font></font>
  &lt;li data-company="Google"&gt;&lt;/li&gt;<font></font>
  &lt;li data-company ="Facebook"&gt;&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有选择器获得：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与所有元素</font></font><code>data-company="Microsoft"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下方</font></font><code>"Companies"</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与所有元素</font></font><code>data-company!="Microsoft"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下方</font></font><code>"Companies"</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其他情况下，可以使用其他选择器，例如“包含，小于，大于，等等...”。</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第814篇《使用HTML5的自定义数据属性上的jQuery选择器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>jQuery UI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><a href="http://api.jqueryui.com/data-selector/" rel="noreferrer"><code>:data()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也可以使用。</font><font style="vertical-align: inherit;">从</font></font><a href="http://jqueryui.com/changelog/1.7/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.7.0版开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就出现了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样使用它：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取具有</font></font><code>data-company</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性的</font><font style="vertical-align: inherit;">所有元素</font></font></strong></p>

<pre><code>var companyElements = $("ul:data(group) li:data(company)");
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取</font></font><code>data-company</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于的</font><font style="vertical-align: inherit;">所有元素</font></font><code>Microsoft</code></strong></p>

<pre><code>var microsoft = $("ul:data(group) li:data(company)")<font></font>
                    .filter(function () {<font></font>
                        return $(this).data("company") == "Microsoft";<font></font>
                    });<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取所有</font></font><code>data-company</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不相等的</font><font style="vertical-align: inherit;">元素</font></font><code>Microsoft</code></strong></p>

<pre><code>var notMicrosoft = $("ul:data(group) li:data(company)")<font></font>
                       .filter(function () {<font></font>
                           return $(this).data("company") != "Microsoft";<font></font>
                       });<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等...</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新</font></font><code>:data()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器的</font><font style="vertical-align: inherit;">一个警告</font><font style="vertical-align: inherit;">是，必须</font><em><font style="vertical-align: inherit;">通过代码</font></em><font style="vertical-align: inherit;">设置</font></font><code>data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">才能选择它。</font><font style="vertical-align: inherit;">这意味着，要使以上内容起作用，仅以</font><font style="vertical-align: inherit;">HTML </font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">是不够的。</font><font style="vertical-align: inherit;">您必须首先执行以下操作：</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><code>data</code><font style="vertical-align: inherit;"></font></p>

<pre><code>$("li").first().data("company", "Microsoft");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您可能以</font></font><code>$(...).data("datakey", "value")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方式或类似方式</font><font style="vertical-align: inherit;">使用的单页应用程序来说，这很好</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
