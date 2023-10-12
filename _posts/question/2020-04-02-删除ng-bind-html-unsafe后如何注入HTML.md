---
layout: question
title:  删除ng-bind-html-unsafe后，如何注入HTML？
date:   2020-04-02T09:34:47.000Z
description: 我正在尝试使用$sanitizeprovider和ng-bind-htm-unsafe指令来允许我的控制器将HTML注入DIV。但是，我无法使其正常工...
img: 
author: 小小
category: question
answer: 3
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><code>$sanitize</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">provider和</font></font><code>ng-bind-htm-unsafe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令来允许我的控制器将HTML注入DIV。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我无法使其正常工作。</font></font></p>

<pre><code>&lt;div ng-bind-html-unsafe="{{preview_data.preview.embed.html}}"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这是因为它已从AngularJS中删除（谢谢）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有</font></font><code>ng-bind-html-unsafe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我得到这个错误：</font></font><br></p>

<p><a href="http://errors.angularjs.org/undefined/$sce/unsafe" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://errors.angularjs.org/undefined/$sce/unsafe</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3882篇《删除ng-bind-html-unsafe后，如何注入HTML？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ANear</span>
            <span class="discuss-time">2020.04.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题。</font><font style="vertical-align: inherit;">仍然无法从托管在github上的markdown文件中获取内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在app.js中的$ sceDelegateProvider中设置了白名单（添加了github域）后，它的工作就像一个魅力。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述：如果您从其他网址加载内容，请使用白名单而不是包装为受信任的内容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Docs：</font></font></strong> <a href="http://docs.angularjs.org/api/ng.%24sceDelegateProvider" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ sceDelegateProvider</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://docs.angularjs.org/api/ng.directive%3angInclude" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngInclude</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用于获取，编译和包括外部HTML片段）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.04.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需在ng-bind-html-unsafe中使用{{}}：</font></font></p>

<pre><code>&lt;div ng-bind-html-unsafe="preview_data.preview.embed.html"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例：</font><a href="http://plnkr.co/edit/R7JmGIo4xcJoBc1v4iki?p=preview" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://plnkr.co/edit/R7JmGIo4xcJoBc1v4iki?p=preview" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//plnkr.co/edit/R7JmGIo4xcJoBc1v4iki?p=preview</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{}}运算符本质上只是ng-bind的简写，因此您尝试的操作等于绑定内的绑定，这是行不通的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.04.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，最简单，最灵活的解决方案是：</font></font></p>

<pre><code>&lt;div ng-bind-html="to_trusted(preview_data.preview.embed.html)"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将功能添加到您的控制器：</font></font></p>

<pre><code>$scope.to_trusted = function(html_code) {<font></font>
    return $sce.trustAsHtml(html_code);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记添加</font></font><code>$sce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到控制器的初始化中。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
