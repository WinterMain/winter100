---
layout: question
title:  在VueJS中访问$ route.params
date:   2020-03-19T06:36:44.000Z
description: 浏览本文档：https   //router.vuejs.org/en/essentials/navigation.html看起来您可以绑定<rou...
img: 
author: Itachi逆天
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览本文档：</font><a href="https://router.vuejs.org/en/essentials/navigation.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://router.vuejs.org/en/essentials/navigation.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//router.vuejs.org/en/essentials/navigation.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来您可以绑定</font></font><code>&lt;router-link :to="variableName"&gt;Link Text&lt;/routerlink&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">which，这很漂亮；</font><font style="vertical-align: inherit;">但是，尝试访问要构建的组件内部的路由参数时遇到了一些麻烦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我用这个：</font></font></p>

<pre><code>&lt;router-link :to="permalink"&gt;Title of thing&lt;/router-link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后指向路由器视图以拉出论坛主题。</font><font style="vertical-align: inherit;">在路由器中使用它：</font></font></p>

<pre><code>import ForumThread from './views/barracks/forumThreadSingle';<font></font>
<font></font>
// Other routes...<font></font>
let routes = [<font></font>
    {<font></font>
        path: '/barracks/th/:id',<font></font>
        component: ForumThread,<font></font>
    } <font></font>
]; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以在forumthread组件中看到$ route.params.id也正在传递。</font><font style="vertical-align: inherit;">但是，当我尝试像这样访问它时：</font></font></p>

<pre><code>console.log('The id is: ' + $route.params.id);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法找到对象的params部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueJS和JavaScript本身对我来说都是很新的。</font><font style="vertical-align: inherit;">我所看到的所有示例均显示模板与路由器文件内联，这是我试图防止这样做的原因，以帮助保持代码的可读性和整洁性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以进行哪些调整，以便可以将属性传递给模板文件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2405篇《在VueJS中访问$ route.params》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
