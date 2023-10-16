---
layout: question
title:  AngularJS是否仅用于单页应用程序（SPA）？
date:   2020-03-23T07:27:52.000Z
description: 我们正在寻找构建正在创建的应用程序前端的选项，并正在尝试评估一种对我们有用的工具，并为我们提供前进的最佳平台。这是一个Node.js项目。我们最初的计...
img: 
author: 十三
category: question
answer: 5
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在寻找构建正在创建的应用程序前端的选项，并正在尝试评估一种对我们有用的工具，并为我们提供前进的最佳平台。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="http://en.wikipedia.org/wiki/Node.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目。</font><font style="vertical-align: inherit;">我们最初的计划是使用Express并沿这条路线走，但是我们决定在开始此阶段之前，最好回顾一下那里的内容。</font><font style="vertical-align: inherit;">我们的应用程序有几个我们认为不适合单页模型的领域，因为它们是从应用程序的角度关联的，而不是从一个角度来看的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经看到了一些可用于构建客户端的框架，例如</font></font><a href="https://en.wikipedia.org/wiki/Backbone.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://en.wikipedia.org/wiki/Meteor_%28web_framework%29"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Meteor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等，以及AngularJS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是一个非常明显的问题，但是我们似乎无法解读AngularJS是纯粹用于单页应用程序还是可以用于多页应用程序（例如Express）。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2013年7月17日更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
为了让大家保持联系，我将在整个过程中更新这个问题。</font><font style="vertical-align: inherit;">现在，我们将一起构建所有内容，然后我们将看到效果如何。</font><font style="vertical-align: inherit;">我们已经联系了几位比我们更胜任AngularJS的人员，并提出了有关拆分共享上下文但在单个页面上可能太大的大型应用程序的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">共识是我们可以提供多个静态页面，并创建仅与那些页面一起使用的AngularJS应用程序，从而有效地创建了SPA的集合，并使用标准链接将这些应用程序链接在一起。</font><font style="vertical-align: inherit;">现在，我们的用例非常具体，因为我们的解决方案有多个应用程序，并且正如我所说，我们将首先尝试单个代码库并从那里进行优化。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2016年6月18日更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目跌入悬崖，所以我们从来没有回避太多的事情。</font><font style="vertical-align: inherit;">我们最近再次选择了它，但是不再使用angular而是使用React。</font><font style="vertical-align: inherit;">我们仍在使用上一个更新中概述的架构，其中我们使用Express和自包含应用程序，因此，例如，我们</font></font><code>/chat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Express中</font><font style="vertical-align: inherit;">有一条</font><font style="vertical-align: inherit;">路线可以服务我们的React聊天应用程序，而在另一条路线中</font></font><code>/projects</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以服务项目应用程序，以此类推。</font><font style="vertical-align: inherit;">我们从某种角度看待它的方式是，每个应用程序在其功能集方面都是一个聚合根，它需要能够独立运行，才能将其本身视为一个应用程序。</font><font style="vertical-align: inherit;">从技术上讲，所有信息都在那里，它只是基本表达，以及您想要使用的客户端应用程序构建优势的任何形式。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2911篇《AngularJS是否仅用于单页应用程序（SPA）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想说的是，如果您只是想开发SPA，Angular实在是太过分了。</font><font style="vertical-align: inherit;">当然，如果您已经习惯了使用它进行开发，请继续。</font><font style="vertical-align: inherit;">但是，如果您是该框架的新手，只需要开发SPA，那么我会考虑一些更简单的方法，并附带一些自己的特权。</font><font style="vertical-align: inherit;">我建议研究</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Aurelia.io</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用双向数据绑定，MVVM，可重用组件，简单快捷的提取，更少的代码编写等。它结合了Angular和React的一些最佳功能。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老实说</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我对</font><strong><font style="vertical-align: inherit;">Aurelia.io</font></strong><font style="vertical-align: inherit;">并不了解。</font><font style="vertical-align: inherit;">但是我偷看了一下，似乎与上面类似，值得研究。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接：</font></font><br>
<a href="https://vuejs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https </font></font></a><font style="vertical-align: inherit;"><a href="http://aurelia.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">：</font></a><font style="vertical-align: inherit;"> //vuejs.org/http：</font></font><br>
<a href="http://aurelia.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//aurelia.io/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一点也不。</font><font style="vertical-align: inherit;">您可以使用Angular来构建各种应用程序。</font><font style="vertical-align: inherit;">客户端路由只是其中的一小部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将拥有大量的功能，这些功能将使您受益于客户端路由之外的其他功能：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双向绑定</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板化</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">货币格式</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多元化</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可重用控件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RESTful API处理</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AJAX处理</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块化</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖注入</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认为所有这些“只能在单个页面应用程序中使用”是很疯狂的。</font><font style="vertical-align: inherit;">当然不是..这就像说“ Jquery仅用于带有动画的项目”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果适合您的项目，请使用它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我的经验对某人有用。</font><font style="vertical-align: inherit;">我们按照逻辑划分项目。</font><font style="vertical-align: inherit;">我们将其中一个SPA用于提要，将另一个SPA用于地图，将另一个SPA用于编辑用户个人资料等。例如，我们有三个应用程序：提要，用户和地图。</font><font style="vertical-align: inherit;">我在分隔的网址中使用它，如下所示：</font></font></p>

<pre><code>https://host/feed/#/top/<font></font>
https://host/user/#/edit/1/<font></font>
https://host/map/favorites/#/add/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些应用程序中的每一个在应用程序中的状态之间都有自己的本地路由映射。</font><font style="vertical-align: inherit;">我认为这是一个好习惯，因为每个应用程序只能使用其自己真正需要的上下文和负载依赖项。</font><font style="vertical-align: inherit;">同样，它对于调试和集成过程非常有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您可以非常轻松地混合使用SPA应用程序，例如，供稿将使用angularjs应用程序作为url，将用户应用程序与reactjs结合使用，并映射到ribs.js应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">针对您的问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular不仅适用于SPA，而且Angular对于SPA应用程序起着良好而快速的作用，但没人会费心去构建各种SPA应用程序的MPA应用程序。</font><font style="vertical-align: inherit;">但是考虑您的URL架构时，请不要忘记应用程序的SEO可用性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也支持这个想法：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目和应用之间有什么区别？</font><font style="vertical-align: inherit;">应用程序是执行某项操作的Web应用程序，例如Weblog系统，公共记录数据库或简单的民意调查应用程序。</font><font style="vertical-align: inherit;">项目是特定网站的配置和应用程序的集合。</font><font style="vertical-align: inherit;">一个项目可以包含多个应用程序。</font><font style="vertical-align: inherit;">一个应用程序可以在多个项目中。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只需要几个带有客户端数据绑定的页面，那么我将使用Knockout和Javascript Namespacing。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">淘汰赛很棒，特别是如果您需要简单的向后兼容性并具有相当简单的页面。</font><font style="vertical-align: inherit;">如果您使用的是第三方组件，则Knockout的自定义绑定非常简单易用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript命名空间可让您保持代码独立和可管理。 </font></font></p>

<pre><code>var myCo = myCo || {};<font></font>
myCo.page = {<font></font>
    init: function(){ ... },<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在加载其他脚本后在脚本标签中</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    myCo.init();<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键是，您可以在需要时使用所需的任何工具。</font><font style="vertical-align: inherit;">需要数据绑定吗？</font><font style="vertical-align: inherit;">淘汰赛（或您喜欢的任何东西）。</font><font style="vertical-align: inherit;">需要路由吗？</font><font style="vertical-align: inherit;">sammy.js（或您喜欢的任何内容）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端代码可以根据需要简单或复杂。</font><font style="vertical-align: inherit;">我试图用现有的专有框架将Angular集成到一个非常复杂的站点中，这是一场噩梦。</font><font style="vertical-align: inherit;">如果您刚开始学习，Angular很棒，但是它具有学习曲线，使您陷入非常紧张的工作流程。</font><font style="vertical-align: inherit;">如果您不遵循它，那么您的代码可能会很快陷入混乱。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一开始，我也对Angular的“方式”感到困惑。</font><font style="vertical-align: inherit;">然后有一天我突然意识到：“这仍然是javascript”。</font><font style="vertical-align: inherit;">关于Angular的来龙去脉有很多示例（我最喜欢的示例之一，还有这本书</font></font><a href="https://github.com/angular-app/angular-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular-app/angular-app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">要记住的最大事情是像在其他任何项目中一样加载js文件。</font><font style="vertical-align: inherit;">您要做的就是确保不同的页面引用正确的Angular对象（控制器，视图等），并且您已启动并正在运行。</font><font style="vertical-align: inherit;">我希望这是有道理的，但是答案是如此简单，以至于我忽略了它。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
