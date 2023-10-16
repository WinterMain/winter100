---
layout: question
title:  angular-route和angular-ui-router有什么区别？
date:   2020-03-09T16:55:16.000Z
description: 我打算在大型应用程序中使用AngularJS。所以我正在寻找合适的模块来使用。是什么区别（角route.js）ngRoute和UI的路由器（角-UI-...
img: 
author: 
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我打算在大型应用程序中使用AngularJS。</font><font style="vertical-align: inherit;">所以我正在寻找合适的模块来使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么区别</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（角route.js）ngRoute</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UI的路由器（角-UI-router.js）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在许多</font><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章中</font><font style="vertical-align: inherit;">，route是使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ routeProvider</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，当与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router一起使用时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，route是使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ stateProvider和$ urlRouterProvider</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该使用哪个模块以获得更好的可管理性和可扩展性？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第388篇《angular-route和angular-ui-router有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿L</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>ng-View</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（由AngularJS团队开发）每页只能使用一次，而</font></font><code>ui-View</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（第三方模块）每页只能使用多次。</font></font></p>

<p><code>ui-View</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 因此是最佳选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1- ngRoute是由angular团队开发的，而ui-router是第3方模块。</font><font style="vertical-align: inherit;">2- ngRoute根据路由URL实现路由，而ui-router根据应用程序的状态实现路由。</font><font style="vertical-align: inherit;">3- ui-router提供了ng-route提供的所有功能，以及一些其他功能，例如嵌套状态和多个命名视图。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">橙ぺo痕</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须了解的基本知识：ng-router使用</font></font><code>$location.path()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和ui-router使用</font></font><code>$state.go</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们休息所有功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularUI Router是AngularJS的路由框架，它允许您将接口的各个部分组织到状态机中。</font><font style="vertical-align: inherit;">与Angular ngRoute模块中的$ route服务围绕URL路由进行组织不同，UI-Router围绕状态进行组织，状态可以有选择地附加了路由以及其他行为。</font></font></p>

<p><a href="https://github.com/angular-ui/ui-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular-ui/ui-router</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute是Angular.js团队开发的模块，该模块是Angular核心的早期部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router是一个在Angular.js项目之外制作的框架，用于改善和增强路由功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui路由器让您的生活更轻松！</font><font style="vertical-align: inherit;">您可以通过将其注入到您的应用程序中，将其添加到您的AngularJS应用程序中。</font></font></p>

<p><code>ng-route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 作为核心AngularJS的一部分提供，因此它更简单，并且为您提供更少的选择...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看此处以更好地了解ng-route：</font><a href="https://docs.angularjs.org/api/ngRoute" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.angularjs.org/api/ngRoute" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.angularjs.org/api/ngRoute</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在使用它时，请不要忘记使用：ngView ..</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-ui-router不同，但：</font></font></p>

<p><a href="https://github.com/angular-ui/ui-router" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular-ui/ui-router，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但为您提供了更多选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute是一个基本的路由库，您可以在其中为任何路由指定一个视图和控制器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ui-router，您可以指定多个视图，包括并行视图和嵌套视图。</font><font style="vertical-align: inherit;">因此，如果您的应用程序需要（或将来可能需要）任何类型的复杂路由/视图，请继续使用ui-router。</font></font></p>

<p><a href="http://www.ng-newsletter.com/posts/angular-ui-router.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是AngularUI路由器的最佳入门指南。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，ui-router在状态机制上工作...可以通过一个简单的示例来理解：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有一个音乐库的大型应用程序（例如..gaana或saavan或其他任何文件）。</font><font style="vertical-align: inherit;">在页面底部，您拥有一个音乐播放器，该音乐播放器在页面的所有状态之间共享。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，假设您只需单击一些歌曲即可播放。</font><font style="vertical-align: inherit;">在这种情况下，仅该音乐播放器状态应更改，而不是重新加载整个页面。</font><font style="vertical-align: inherit;">这可以通过ui-router轻松处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ngRoute中，我们只是附加视图和控制器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门LEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute是AngularJS核心框架的一部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router是创建的社区库，旨在尝试改进默认路由功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇有关配置/设置ui-router的好文章：</font></font></p>

<p><a href="http://www.ng-newsletter.com/posts/angular-ui-router.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.ng-newsletter.com/posts/angular-ui-router.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/angular-ui/ui-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个第三方模块，功能非常强大。</font><font style="vertical-align: inherit;">它支持常规ngRoute可以执行的所有操作以及许多其他功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是在ngRoute上选择ui-router的一些常见原因：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router允许</font></font><a href="https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套视图</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多个命名视图</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这对于较大的应用程序非常有用，在大型应用程序中，您的页面可能会继承自其他部分。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router允许您基于状态名称在状态之间进行强类型链接。</font><font style="vertical-align: inherit;">当您使用建立链接时，在一个位置更改url会将每个链接更新为该状态</font></font><a href="http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref" rel="noreferrer"><code>ui-sref</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于可能会更改URL的大型项目非常有用。</font></font></p></li>
<li><p>There is also the concept of the <a href="http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_decorator" rel="noreferrer">decorator</a> which could be used to allow your routes to be dynamically created based on the URL that is trying to be accessed. This could mean that you will not need to specify all of your routes before hand.</p></li>
<li><p><a href="https://github.com/angular-ui/ui-router/wiki#state-manager" rel="noreferrer">states</a> allow you to map and access different information about different states and you can easily pass information between states via <a href="https://github.com/angular-ui/ui-router/wiki/URL-Routing#stateparams-service" rel="noreferrer"><code>$stateParams</code></a>.</p></li>
<li><p>You can easily determine if you are in a state or parent of a state to adjust UI element (highlighting the navigation of the current state) within your templates via <a href="http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state" rel="noreferrer"><code>$state</code></a> provided by ui-router which you can expose via setting it in <code>$rootScope</code> on <code>run</code>.</p></li>
</ul>

<p>In essence, ui-router is ngRouter with more features, under the sheets it is quite different. These additional features are very useful for larger applications.</p>

<p>More Information:</p>

<ul>
<li>Github: <a href="https://github.com/angular-ui/ui-router" rel="noreferrer">https://github.com/angular-ui/ui-router</a></li>
<li>Documentation:

<ul>
<li>API Reference: <a href="http://angular-ui.github.io/ui-router/site/#/api" rel="noreferrer">http://angular-ui.github.io/ui-router/site/#/api</a></li>
<li>Guide: <a href="https://github.com/angular-ui/ui-router/wiki" rel="noreferrer">https://github.com/angular-ui/ui-router/wiki</a></li>
</ul></li>
<li>FAQs: <a href="https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions" rel="noreferrer">https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions</a></li>
<li>Sample Application: <a href="http://angular-ui.github.io/ui-router/sample/#/" rel="noreferrer">http://angular-ui.github.io/ui-router/sample/#/</a> </li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要利用ngRoute范例中实现的嵌套视图功能，请尝试</font></font><a href="http://angular-route-segment.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-route-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> segment-它旨在扩展ngRoute而不是替换它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗达蒙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute是一个有角度的核心模块，适用于基本情况。</font><font style="vertical-align: inherit;">我相信他们将在即将发布的版本中添加更强大的功能。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址：</font><a href="https://docs.angularjs.org/api/ngRoute" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://docs.angularjs.org/api/ngRoute" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.angularjs.org/api/ngRoute</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ui-router是一个有助于解决ngRoute问题的贡献模块。</font><font style="vertical-align: inherit;">主要是嵌套/复杂视图。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址：</font><a href="https://github.com/angular-ui/ui-router" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/angular-ui/ui-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/angular-ui/ui-router</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router和ngRoute之间的一些区别</font></font></p>

<p><a href="http://www.amasik.com/angularjs-ngroute-vs-ui-router/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.amasik.com/angularjs-ngroute-vs-ui-router/</font></font></a></p>

<p><img src="https://i.stack.imgur.com/PkUq0.png" alt="在此处输入图片说明"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">菏以飘落</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngRoute</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是AngularJS团队开发的模块，该模块是AngularJS核心的早期组成部分。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个在AngularJS项目之外制作的框架，用于改善和增强路由功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ui-router </font></font><a href="https://github.com/angular-ui/ui-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularUI Router是AngularJS的路由框架，它允许您将接口的各个部分组织到状态机中。</font><font style="vertical-align: inherit;">不同于Angular核心中的$ route服务是围绕URL路由组织的，UI-Router是围绕状态组织的，状态可以有选择地附加路由以及其他行为。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态绑定到命名视图，嵌套视图和并行视图，从而使您可以有效地管理应用程序的界面。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们都不是更好的选择，您将必须选择最适合您的项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您打算在应用程序中使用复杂的视图，并且希望处理“ $ state”概念。</font><font style="vertical-align: inherit;">我建议您选择ui-router。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
