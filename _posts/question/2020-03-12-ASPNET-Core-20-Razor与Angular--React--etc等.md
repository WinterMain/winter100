---
layout: question
title:  ASP.NET Core 2.0 Razor与Angular / React / etc等
date:   2020-03-12T10:10:05.000Z
description: 我和我的团队已经获得了用于开发企业级Web应用程序的资金（不会详细介绍其功能）。该应用程序将有许多单独的网页，但其中两个页面更加集中且非常繁琐-就像许多用...
img: 
author: 逆天A前端
category: question
answer: 3
tags: asp.net Asp.net
topic: Asp.net
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我和我的团队已经获得了用于开发企业级Web应用程序的资金（不会详细介绍其功能）。</font><font style="vertical-align: inherit;">该应用程序将有许多单独的网页，但其中两个页面更加集中且非常繁琐-就像许多用户交互，显示大量数据的模式，Websocket连接，聊天等一样繁重。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已被任命为该项目的首席架构师，所以我正在对最新的Web框架进行一些研究。</font><font style="vertical-align: inherit;">对于后端，我们已经进行了一些测试，并决定使用Azure SQL平台。</font><font style="vertical-align: inherit;">到目前为止，我喜欢ASP.NET Core 2.0所做的改进。</font><font style="vertical-align: inherit;">特别是Razor引擎，它是ASP.NET MVC早期版本的基础。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想对“新” Razor vs. Angular / React之类的东西获得一些专家意见。</font><font style="vertical-align: inherit;">我特别关注性能。</font><font style="vertical-align: inherit;">Core 2.0 Razor如何支持客户端渲染框架？</font><font style="vertical-align: inherit;">差异可以忽略不计吗？</font><font style="vertical-align: inherit;">我们的应用程序定位到潜在的1,000,000用户（大约100,000个并发用户）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1256篇《ASP.NET Core 2.0 Razor与Angular / React / etc等》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在服务器端对api使用Angular / React：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您消除了在服务器端生成HTML的过程，并节省了CPU</font></font></li>
<li>api produces small payload (json) and Razor (html) of a course would be much larger in size, constant full page reloads and postback round trip. so api and spa save bandwidth</li>
<li>api and spa could have different versioning, scaling and deployment scenarios</li>
<li>By using api you can support mobile app too and if you start by Razor you may need api in future</li>
</ul>

<p>but by using Angular/React you should be worry about clients. </p>

<ul>
<li>client must enable javascript</li>
<li>client must have modern browsers</li>
<li>client must have enough powerful hardware</li>
<li>SEO</li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有基准。</font><font style="vertical-align: inherit;">但是，我有几个运行JQuery，Razor，.NET MVC（C＃），AJAX的项目。</font><font style="vertical-align: inherit;">没有达到您要解决的规模。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忠告..请务必仔细考虑并遵循最佳实践。</font><font style="vertical-align: inherit;">为了保持事物的可维护性，请确保将控制器，视图，模型分成较小的有意义的组。</font><font style="vertical-align: inherit;">当我开始时，我犯了一个错误，那就是将所有内容放入一个Home控制器中，并在共享文件夹中放置了大量视图。</font><font style="vertical-align: inherit;">刚开始时还不错，但是当功能蠕变开始时，它变得一团糟，很难回去重新设计。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也使用Linq2SQL。</font><font style="vertical-align: inherit;">我犯了为所有内容创建模型的错误，然后意识到我可以将查询中的结果集作为模型返回。</font><font style="vertical-align: inherit;">h</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用.NET MVC并关注性能，那么这些就是我遇到的事情：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要返回会创建大量HTML的部分视图！</font><font style="vertical-align: inherit;">确保最小化所有内容。</font><font style="vertical-align: inherit;">摆脱所有空白。</font><font style="vertical-align: inherit;">使用较小的ID名称。</font><font style="vertical-align: inherit;">花时间创建尽可能轻的html。</font><font style="vertical-align: inherit;">返回JSON并让客户端完成一些工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发CSS时要小心。</font><font style="vertical-align: inherit;">不要使用大量内联样式，请花一些时间将其合并到CSS文件中，以便日后将其最小化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的客户端JS也是如此。</font><font style="vertical-align: inherit;">将JS放入部分视图中是很诱人的。</font><font style="vertical-align: inherit;">使事情井井有条。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE上渲染很可怕。</font><font style="vertical-align: inherit;">特别是在有很多图像的情况下。</font><font style="vertical-align: inherit;">确保在不损失质量的情况下尽可能地压缩图像。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天A前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们最终使用Azure SQL开发了Angular前端和ASP.NET Core API后端。</font><font style="vertical-align: inherit;">我们测试了Core Razor，尽管比传统的Razor更好，但最终Angular对我们而言要快得多。</font><font style="vertical-align: inherit;">就用户体验而言，Angular（或React）在性能方面要优越得多。</font><font style="vertical-align: inherit;">我们发现Angular的模型绑定方面是服务器端渲染的巨大优势。</font><font style="vertical-align: inherit;">但是，使用Razor（或通常的服务器端渲染）确实可以在数据传输方面更好地提高整体完整性，并且可以更好地将数据从前端过渡到后端。</font><font style="vertical-align: inherit;">前端框架和API之间确实存在脱节。</font><font style="vertical-align: inherit;">传递给服务器的所有数据都必须转换为类型化的对象-这意味着您必须管理两个单独的POCO模型集。</font><font style="vertical-align: inherit;">如果服务器对象和前端对象未对齐，则可能导致问题。</font><font style="vertical-align: inherit;">目前，Entity Framework Core还不是很成熟，因此我们在更新对象，查询对象（包括子对象）等方面存在问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总体而言，到目前为止，此设置对我们来说非常有用！</font><font style="vertical-align: inherit;">我想如果您更喜欢React，它将是Angular的类似替代品。</font><font style="vertical-align: inherit;">我必须学习Angular，这是一个非常简单的过渡，现在我喜欢它！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
