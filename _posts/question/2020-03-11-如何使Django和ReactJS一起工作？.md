---
layout: question
title:  如何使Django和ReactJS一起工作？
date:   2020-03-11T09:20:14.000Z
description: Django的新手，甚至是ReactJS的新手。我一直在研究AngularJS和ReactJS，但是决定使用ReactJS。尽管AngularJS拥有更多...
img: 
author: 神奇Jim
category: question
answer: 5
tags: Django
topic: Django
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django的新手，甚至是ReactJS的新手。</font><font style="vertical-align: inherit;">我一直在研究AngularJS和ReactJS，但是决定使用ReactJS。</font><font style="vertical-align: inherit;">尽管AngularJS拥有更多的市场份额，但它似乎正在逐步超越AngularJS的知名度，并且据说ReactJS更快地被接受。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">撇开所有垃圾，我开始学习Udemy的课程，看完几段视频后，了解它与Django的集成程度似乎很重要。</font><font style="vertical-align: inherit;">那就是当我不可避免地碰壁只是要启动并运行时，那里准备了什么样的文档，以便使我几个小时和几个晚上都不会打转轮子。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到</font><font style="vertical-align: inherit;">的确没有任何全面的教程或</font><font style="vertical-align: inherit;">软件包。</font><font style="vertical-align: inherit;">例如，我碰到的那几个没用或已过时</font></font><code>pyreact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾经想过只是将ReactJS完全分开，但是要考虑要让ReactJS组件呈现的类和ID。将单独的ReactJS组件编译成单个ES5文件后，只需将该单个文件导入Django模板。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为当我从Django模型进行渲染时，这会很快崩溃，尽管Django Rest Framework听起来似乎很复杂。</font><font style="vertical-align: inherit;">甚至还不足以了解Redux如何影响所有这一切。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，有人有明确的方式使用他们愿意共享的Django和ReactJS吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，文档和教程对于AngularJS和Django来说是足够的，因此很容易采取这种方法来开始使用任何前端框架……这不是最好的原因。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也开始让Django和React.js一起工作，这让您感到痛苦。</font><font style="vertical-align: inherit;">做了两个Django项目，我认为React.js非常适合Django。</font><font style="vertical-align: inherit;">但是，开始可能会令人生畏。</font><font style="vertical-align: inherit;">我们在这里站在巨人的肩膀上；）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的想法是这样，它们都可以一起工作（大图，如果我错了，请有人纠正我）。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一侧（后端）上的Django及其数据库（我更喜欢Postgres）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django Rest框架提供了与外界的接口（即，Mobile Apps和React等）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一端（前端）上有Reactjs，Nodejs，Webpack，Redux（或者可能是MobX？）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django和“前端”之间的通信是通过Rest框架完成的。</font><font style="vertical-align: inherit;">确保获得适当的Rest框架授权和权限。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为这种情况找到了一个好的锅炉模板，它可以直接使用。</font><font style="vertical-align: inherit;">只需遵循自述文件</font></font><a href="https://github.com/scottwoodall/django-react-template" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/scottwoodall/django-react-template</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一旦完成，您将运行一个非常漂亮的Django Reactjs项目。</font><font style="vertical-align: inherit;">这绝不是为了生产而设计的，而是让您深入了解事物之间如何联系和工作的一种方式！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想建议的一个小变化是：在进入第二步设置后端之前，请遵循设置说明，但要设置后端（Django在此处</font></font><a href="https://github.com/scottwoodall/django-react-template/blob/master/backend/README.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/scottwoodall/django-react-template/blob/master /backend/README.md</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），更改设置的需求文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在/backend/requirements/common.pip中的项目中找到该文件。</font></font></p>

<pre><code>appdirs==1.4.0<font></font>
Django==1.10.5<font></font>
django-autofixture==0.12.0<font></font>
django-extensions==1.6.1<font></font>
django-filter==1.0.1<font></font>
djangorestframework==3.5.3<font></font>
psycopg2==2.6.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将为您提供Django及其Rest框架的最新稳定版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神无前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试以下教程，它可以帮助您继续前进：</font></font></p>

<p><a href="https://medium.com/hackernoon/serving-react-and-django-together-2089645046e4" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起服务React和Django</font></font></a>  </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖A</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这已经晚了几年了，但是我准备把它发布给下一个人。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与DjangoRESTFramework相比，GraphQL很有帮助，而且方法也更简单。</font><font style="vertical-align: inherit;">就您得到的答复而言，它也更加灵活。</font><font style="vertical-align: inherit;">您可以得到所需的内容，而不必通过响应进行筛选就可以得到所需的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在服务器端使用Graphene Django，并在React + Apollo / Relay中使用...。您可以对其进行研究，因为这不是您的问题。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可接受的答案使我相信，无论如何，将Django后端和React Frontend分离都是正确的方法。</font><font style="vertical-align: inherit;">实际上，有一些方法可以将React和Django耦合在一起，这可能更适合于特定情况。</font></font></p>

<p><a href="https://www.valentinog.com/blog/drf/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此进行了很好的解释。</font><font style="vertical-align: inherit;">尤其是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到以下模式（几乎每个Web框架都通用）：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-在其自己的“前端” Django应用程序中进行反应：加载单个HTML模板，然后让React管理前端（难度：中等）</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-作为独立API的Django REST +作为独立SPA的React（困难：困难，它涉及JWT进行身份验证）</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-混合并匹配：Django模板中的迷你React应用程序（难度：简单）</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有Django的经验，但是从前端到后端以及从前端框架到框架的概念是相同的。</font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React将使用您的</font></font><a href="http://www.django-rest-framework.org/tutorial/quickstart/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django REST API</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">前端和后端没有任何连接。</font><font style="vertical-align: inherit;">React将向您的REST API发出HTTP请求，以获取和设置数据。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack（模块捆绑器）和Babel（transpiler）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的帮助下</font><font style="vertical-align: inherit;">，将Javascript捆绑并打包为单个或多个文件，这些文件将放置在入口HTML页面中。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学习Webpack，Babel，Javascript以及React和Redux（状态容器）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相信</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不会使用Django模板，而是允许React渲染前端。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呈现此页面时，React将使用API​​来获取数据，以便React可以呈现它。</font><font style="vertical-align: inherit;">在这里，您对</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP请求，Javascript（ES6），Promise，中间件和React的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理解</font><font style="vertical-align: inherit;">至关重要。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是我在网络上发现了几件事情</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助（基于一个快速谷歌搜索）：</font></font></p>

<ul>
<li><a href="https://www.youtube.com/watch?v=CxjJ7siCK44" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django和React API Youtube教程</font></font></a></li>
<li><a href="https://web.archive.org/web/20171207032005/http://geezhawk.github.io/using-react-with-django-rest-framework" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用React设置Django</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用archive.org链接替换损坏的链接）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用上面的粗体字词搜索其他资源。</font><font style="vertical-align: inherit;">首先尝试“ Django React Webpack”。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会指引您正确的方向！</font><font style="vertical-align: inherit;">祝好运！</font><font style="vertical-align: inherit;">希望其他专门研究Django的人可以加入我的回复。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
