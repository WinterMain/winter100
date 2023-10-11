---
layout: question
title:  带有Django的ReactJS-实际用法
date:   2020-03-14T10:17:54.000Z
description: 我对React有点困惑，我很喜欢它。它比Angular更为冗长（使用| filter的ng-repeat是无价的），但是还可以。让我烦恼的是，我应该如...
img: 
author: 逆天飞云
category: question
answer: 2
tags: Django
topic: Django
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对React有点困惑，我很喜欢它。</font><font style="vertical-align: inherit;">它比Angular更为冗长（使用| filter的ng-repeat是无价的），但是还可以。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我烦恼的是，我应该如何将React与Django模板一起使用。</font><font style="vertical-align: inherit;">我是否应该将所有JavaScript连同“ HTML”标记一起放入模板中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施Angular非常无缝。</font><font style="vertical-align: inherit;">我只是将一些属性放入template / django表单类中，然后在单独的文件中编写了javascript。</font><font style="vertical-align: inherit;">包括该文件，就完成了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何对“使用”做出反应？</font><font style="vertical-align: inherit;">正确的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1603篇《带有Django的ReactJS-实际用法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实现了与您所要求的类似的东西。</font><font style="vertical-align: inherit;">我的前端完全在使用webpack编译的reactjs上，而我的模板是在Django中创建的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我这样做：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用react-router并进行响应以创建.jsx / .js代码。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack进行编译。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/owais/django-webpack-loader" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">django-webpack</font></font></a></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，django-webpack的工作原理非常好，并且可以帮助您在django之外隔离编译，以使想法以一种可扩展的好方式工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将前端和后端视为两个不同的独立实体怎么办？</font><font style="vertical-align: inherit;">我的意思是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Django应该只是一个API，并以json数据作为响应</font></font></li>
<li><a href="https://github.com/mxstbr/react-boilerplate/blob/master/app/.nginx.conf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端只能是nginx服务的静态文件</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要处理</font></font><a href="https://www.google.com/search?q=CORS&amp;oq=CORS&amp;aqs=chrome..69i57j0l5.971j0j7&amp;sourceid=chrome&amp;ie=UTF-8" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CORS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以便允许两者之间进行通信。</font><font style="vertical-align: inherit;">一种选择是允许来自您的前端的预检请求，另一种选择是设置nginx代理。</font><font style="vertical-align: inherit;">这是一个单独的问题，如果需要更多详细信息，则应进行搜索。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这种体系结构使您可以将事物分开，而不处理它们的集成。</font><font style="vertical-align: inherit;">在前端/ React生态系统上事情已经太复杂了，因此我认为必须考虑配置的简单性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也很想知道部署过程将如何寻找该体系结构（使用什么工具？），因此，如果您有建议，请添加注释，我将相应地更新响应以为将来的读者提供有用的信息。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
