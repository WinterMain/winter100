---
layout: question
title:  搜索引擎如何处理AngularJS应用程序？
date:   2020-03-17T09:53:55.000Z
description: 我看到了有关搜索引擎和SEO的AngularJS应用程序两个问题：1）自定义标签会怎样？搜索引擎会忽略这些标签中的全部内容吗？即假设我有<cust...
img: 
author: Mandy伽罗神无
category: question
answer: 11
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了有关搜索引擎和SEO的AngularJS应用程序两个问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）自定义标签会怎样？</font><font style="vertical-align: inherit;">搜索引擎会忽略这些标签中的全部内容吗？</font><font style="vertical-align: inherit;">即假设我有</font></font></p>

<pre><code>&lt;custom&gt;<font></font>
  &lt;h1&gt;Hey, this title is important&lt;/h1&gt;<font></font>
&lt;/custom&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>&lt;h1&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管位于自定义标签中</font><font style="vertical-align: inherit;">仍会</font><font style="vertical-align: inherit;">被索引？</font></font></p>

<p><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）有没有一种方法可以避免搜索引擎将{{}}编入索引的字面绑定？</font><font style="vertical-align: inherit;">即</font></font></p>

<pre><code>&lt;h2&gt;{{title}}&lt;/h2&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以做类似的事情</font></font></p>

<pre><code>&lt;h2 ng-bind="title"&gt;&lt;/h2&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我想让搜寻器“看到”标题怎么办？</font><font style="vertical-align: inherit;">服务器端渲染是唯一的解决方案吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1947篇《搜索引擎如何处理AngularJS应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪梅宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜寻器不需要功能丰富且风格漂亮的gui，它们只想查看内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此您无需为它们提供为人类构建的页面的快照。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案：为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜寻器提供所需的内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须考虑爬虫想要什么，并且只给他。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示不要弄乱背面。</font><font style="vertical-align: inherit;">只需使用相同的API添加一点服务器端的前视图</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿LEY理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">爬网程序（或漫游器）旨在爬网网页的HTML内容，但是由于AJAX用于异步数据提取的操作，这成为一个问题，因为它需要一些时间来呈现页面并在其上显示动态内容。</font><font style="vertical-align: inherit;">同样，</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也请使用异步模型，这会对Google搜寻器造成问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些开发人员使用实际数据创建基本的html页面，并在进行爬网时从服务器端提供这些页面。</font><font style="vertical-align: inherit;">我们可以</font></font><code>PhantomJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务端</font><font style="vertical-align: inherit;">渲染具有相同页面的内容</font></font><code>_escaped_fragment_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为Google </font></font><code>#!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我们的网站网址中</font><font style="vertical-align: inherit;">查找</font><font style="vertical-align: inherit;">，然后在后面获取所有内容</font></font><code>#!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其添加到</font></font><code>_escaped_fragment_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询参数中）。</font><font style="vertical-align: inherit;">有关更多详细信息，请阅读此</font></font><a href="http://www.tothenew.com/blog/angular-seo/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Angular Universal，您可以为应用程序生成看上去像完整应用程序的登录页面，然后将Angular应用程序加载到其后。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular Universal生成纯HTML，意味着在服务器端没有JavaScript页面，并且无需延迟即可将其提供给用户。</font><font style="vertical-align: inherit;">因此，您可以与任何爬虫，机器人和用户（已经具有较低的CPU和网络速度）打交道，然后可以通过链接/按钮将它们重定向到已在其后面加载的实际角度应用程序。</font><font style="vertical-align: inherit;">该解决方案是官方网站推荐的。</font></font><a href="https://angular.io/docs/ts/latest/guide/universal.html#!#seo-no-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-有关SEO和Angular Universal的更多信息-</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用类似PreRender之类的方法，它可以使您的站点成为静态页面，以便搜索引擎可以对其进行索引。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里您可以找到可用的平台：</font><a href="https://prerender.io/documentation/install-middleware#asp-net" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://prerender.io/documentation/install-middleware#asp-net" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//prerender.io/documentation/install-middleware#asp-net</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenItachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处其他答案中所引用的Google的Crawlable Ajax Spec基本上就是答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对其他搜索引擎和社交机器人如何处理相同的问题感兴趣，请在此处写下最新技术水平：</font><a href="http://blog.ajaxsnapshots.com/2013/11/googles-crawlable-ajax-specification.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://blog.ajaxsnapshots.com/2013/11/googles-crawlable-ajax-specification.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.ajaxsnapshots.com/2013/11/googles-crawlable-ajax-specification.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为</font></font><a href="https://ajaxsnapshots.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ajaxsnapshots.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font><font style="vertical-align: inherit;">，该公司将Crawlable Ajax Spec作为服务实施-该报告中的信息基于我们日志中的观察结果。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村宝儿Itachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至目前，Google已更改了其AJAX抓取建议。</font></font></p>

<blockquote>
  <p><a href="http://googlewebmastercentral.blogspot.is/2015/10/deprecating-our-ajax-crawling-scheme.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时代变了。</font><font style="vertical-align: inherit;">今天，只要您不阻止Googlebot抓取JavaScript或CSS文件，我们通常就可以像现代浏览器一样呈现和理解您的网页。</font></font></a></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tl; dr：[Google]不再推荐早在2009年提出的AJAX爬网建议[Google]。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阿飞</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在这里找到一个好的做法：</font></font></p>

<p><a href="http://scotch.io/tutorials/javascript/angularjs-seo-with-prerender-io?_escaped_fragment_=tag"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://scotch.io/tutorials/javascript/angularjs-seo-with-prerender-io?_escaped_fragment_=tag</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular自己的网站为搜索引擎提供了简化的内容：</font><a href="http://docs.angularjs.org/?_escaped_fragment_=/tutorial/step_09"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font><a href="http://docs.angularjs.org/?_escaped_fragment_=/tutorial/step_09"><font style="vertical-align: inherit;">//docs.angularjs.org/?</font></a><font style="vertical-align: inherit;"> _escaped_fragment_=/ </font></font><a href="http://docs.angularjs.org/?_escaped_fragment_=/tutorial/step_09"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tutorial/step_09</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您的Angular应用正在使用Node.js / Express驱动的JSON api，例如</font></font><code>/api/path/to/resource</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也许您可以将任何请求重定向</font></font><code>?_escaped_fragment_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>/api/path/to/resource.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并使用</font></font><a href="http://expressjs.com/api.html#res.format"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容协商</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来呈现</font><a href="http://expressjs.com/api.html#res.format"><font style="vertical-align: inherit;">内容</font></a><font style="vertical-align: inherit;">的HTML模板，而不是返回JSON数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的是，您的Angular路由需要与REST API匹配1：1。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：我意识到这有可能使您的REST api变得更加混乱，我不建议您在非常简单的用例之外自然地适应它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，您可以对机器人友好的内容使用一组完全不同的路由和控制器。</font><font style="vertical-align: inherit;">但是，然后您在Node / Express中复制了所有AngularJS路由和控制器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经决定使用无头浏览器生成快照，尽管我觉得这比理想情况要差一些。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从提出这个问题以来，事情已经发生了很大的变化。</font><font style="vertical-align: inherit;">现在有一些选项可以让Google为您的AngularJS网站建立索引。</font><font style="vertical-align: inherit;">我发现最简单的选择是使用</font></font><strong><a href="http://prerender.io" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://prerender.io</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费服务，该服务将为您生成可破解的页面并将其提供给搜索引擎。</font><font style="vertical-align: inherit;">几乎所有服务器端Web平台都支持它。</font><font style="vertical-align: inherit;">我最近开始使用它们，并且支持也很棒。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我与他们没有任何从属关系，这来自一个愉快的用户。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该在moo博客这一年真正查看有关构建SEO友好的AngularJS网站的教程。</font><font style="vertical-align: inherit;">他将带您完成Angular文档中概述的所有步骤。</font></font><a href="http://www.yearofmoo.com/2012/11/angularjs-and-seo.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.yearofmoo.com/2012/11/angularjs-and-seo.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此技术，搜索引擎将看到展开的HTML而不是自定义标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这已经彻底改变了。</font></font></p>

<p><a href="http://searchengineland.com/bing-offers-recommendations-for-seo-friendly-ajax-suggests-html5-pushstate-152946"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://searchengineland.com/bing-offers-recommendations-for-seo-friendly-ajax-suggests-html5-pushstate-152946</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用：$ locationProvider.html5Mode（true）; </font><font style="vertical-align: inherit;">你已经定了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有更多的渲染页面。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
