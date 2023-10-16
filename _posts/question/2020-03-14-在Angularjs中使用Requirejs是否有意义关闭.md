---
layout: question
title:  在Angular.js中使用Require.js是否有意义？\[关闭\]
date:   2020-03-14T04:51:21.000Z
description:                                                                          ...
img: 
author: 樱小胖Mandy
category: question
answer: 12
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/12529083/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-06-30 11：56：00Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Angular.js的新手，试图了解它与Backbone.js的区别...我们以前在使用Backbone时使用Require.js管理我们的软件包依赖项。</font><font style="vertical-align: inherit;">用Angular.js做同样的事情有意义吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1581篇《在Angular.js中使用Require.js是否有意义？\[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">nosebug</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这取决于您的项目复杂性，因为angular几乎是模块化的。</font><font style="vertical-align: inherit;">您的控制器可以被映射，您只需在index.html页面中导入这些JavaScript类即可。</font></font></p>

<p>But in case your project get bigger. Or you anticipates such scenario, you should integrate angular with requirejs. In <a href="http://angularcorner.blogspot.co.il/" rel="nofollow">this</a> article you can see a demo app for such integration. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Davaid斯丁</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布莱恩·福特的回答</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS拥有自己的模块系统，通常不需要RJS之类的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://github.com/yeoman/generator-angular/issues/40" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/yeoman/generator-angular/issues/40" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/yeoman/generator-angular/issues/40</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您计划延迟加载控制器和指令等，则可以将requirejs与angularjs结合使用，同时还将多个延迟依赖项组合到单个脚本文件中，以实现更快的延迟加载。</font><font style="vertical-align: inherit;">RequireJS具有</font></font><a href="http://requirejs.org/docs/optimization.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优化工具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使合并变得容易。</font><font style="vertical-align: inherit;">参见</font></font><a href="http://ify.io/using-requirejs-with-optimisation-for-lazy-loading-angularjs-artefacts/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ify.io/using-requirejs-with-optimisation-for-lazy-loading-angularjs-artefacts/</font></font></a>   </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会避免使用Require.js。</font><font style="vertical-align: inherit;">我见过的应用程序可以完成多种类型的模块模式架构。</font><font style="vertical-align: inherit;">AMD，Revealing，IIFE的不同口味等。还有其他按需加载的方式，例如</font></font><a href="https://github.com/AndyGrom/loadOnDemand" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">loadOnDemand Angular mod</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">添加其他内容只会使您的代码充满混乱，并产生</font></font><a href="http://java.dzone.com/articles/whats-your-signal-noise-ratio" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">低信噪比</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并使您的代码难以阅读。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanJinJin</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的方法：</font><a href="http://thaiat.github.io/blog/2014/02/26/angularjs-and-requirejs-for-very-large-applications/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://thaiat.github.io/blog/2014/02/26/angularjs-and-requirejs-for-very-large-applications/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//thaiat.github.io/blog/2014/02/26/angularjs-and-requirejs-for-very-large-applications/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该页面显示了AngularJS + RequireJS的可能实现，其中代码按功能和组件类型划分。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，它确实适用于大型SPA。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，RequireJS是必须的。</font><font style="vertical-align: inherit;">例如，我使用AngularJS开发PhoneGap应用程序，该应用程序也使用Google Map API。</font><font style="vertical-align: inherit;">如果没有诸如RequireJS之类的AMD加载器，该应用将在离线时启动时崩溃，因为它无法获取Google Map API脚本。</font><font style="vertical-align: inherit;">AMD加载器使我有机会向用户显示错误消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，AngularJS和RequireJS之间的集成有些棘手。</font><font style="vertical-align: inherit;">我创建了angularAMD来简化此过程：</font></font></p>

<p><a href="http://marcoslin.github.io/angularAMD/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://marcoslin.github.io/angularAMD/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙米亚达蒙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短的答案是，这很有意义。</font><font style="vertical-align: inherit;">最近在ng-conf 2014中对此进行了讨论。这是关于此主题的演讲：</font></font></p>

<p><a href="http://www.youtube.com/watch?v=4yulGISBF8w"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.youtube.com/watch?v=4yulGISBF8w</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，将requireJS与Angular一起使用是有意义的，我花了几天时间测试了几种技术解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在服务器端使用RequireJS制作了一个Angular Seed。</font><font style="vertical-align: inherit;">很简单的一个。</font><font style="vertical-align: inherit;">我将SHIM表示法用于没有AMD模块而不是AMD的原因，因为我认为处理两种不同的依赖注入系统非常困难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用grunt和r.js在服务器上串联js文件，具体取决于SHIM配置（依赖项）文件。</font><font style="vertical-align: inherit;">所以我只在我的应用程序中引用一个js文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请访问我的github Angular Seed：</font><a href="https://github.com/matohawk/angular-seed-requirejs"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/matohawk/angular-seed-requirejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/matohawk/angular-seed-requirejs</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@ganaraj提到的那样，AngularJS的核心是依赖注入。</font><font style="vertical-align: inherit;">在使用和不使用RequireJS的情况下构建玩具种子应用程序时，我个人发现RequireJS对于大多数用例而言可能是过大的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不意味着RequireJS对它的脚本加载功能以及在开发过程中保持代码库干净无用。</font><font style="vertical-align: inherit;">将r.js优化器（</font></font><a href="https://github.com/jrburke/r.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jrburke/r.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）与杏仁（</font></font><a href="https://github.com/jrburke/almond" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jrburke/almond</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）结合可以创建一个非常苗条的脚本加载故事。</font><font style="vertical-align: inherit;">但是，由于它的依赖关系管理功能对于应用程序核心中的angular并不那么重要，因此您还可以评估其他客户端（HeadJS，LABjs等）甚至服务器端（MVC4 Bundler等）脚本加载解决方案针对您的特定应用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猿泡芙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这很有道理。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular模块不会尝试解决脚本加载顺序或延迟脚本获取的问题。</font><font style="vertical-align: inherit;">这些目标是正交的，两个模块系统都可以并存并实现其目标。</font></font></p>
  
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="http://docs.angularjs.org/tutorial/step_07" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular JS官方网站</font></font></a></em></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神无</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，</font></font><code>angular.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>require.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>require.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件模块化</font><font style="vertical-align: inherit;">一起</font><font style="vertical-align: inherit;">使用时，是有意义的</font><font style="vertical-align: inherit;">。</font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/tnajdek/angular-requirejs-seed" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">种子项目</font></font></a><font style="vertical-align: inherit;"></font><code>both angular.js and require.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一个主观问题，因此我将提供我的主观意见。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular具有内置的模块化机制。创建应用程序时，要做的第一件事是 </font></font></p>

<pre><code>var app = angular.module("myApp");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着</font></font></p>

<pre><code>app.directive(...);<font></font>
<font></font>
app.controller(...);<font></font>
<font></font>
app.service(...);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您看一下角度种子，它是用于角度的整洁的入门应用程序，则他们将指令，服务，控制器等分离到不同的模块中，然后将这些模块作为依赖项加载到主应用程序中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是 ：</font></font></p>

<pre><code>var app = angular.module("myApp",["Directives","Controllers","Services"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular还懒惰地将这些模块（而不是脚本文件）加载到内存中。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于延迟加载脚本文件而言，坦率地说，除非您要编写的东西很大，否则这将是一个过大的杀伤力，因为从本质上讲，角度化会减少您编写的代码量。</font><font style="vertical-align: inherit;">如果以角度编写，使用大多数其他框架编写的典型应用程序的LOC可能会降低30-50％。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
