---
layout: question
title:  Vue项目中的views和components文件夹有什么区别？
date:   2020-03-10T02:14:19.000Z
description: 我只是使用命令行（CLI）初始化Vue.js项目。在CLI创建src/components和src/views文件夹。自从我从事Vue项目以来已经有几...
img: 
author: GO阿飞
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是使用命令行（</font></font><code>CLI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）初始化Vue.js项目。</font><font style="vertical-align: inherit;">在</font></font><code>CLI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>src/views</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从我从事Vue项目以来已经有几个月了，文件夹结构对我来说似乎是新的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用生成的Vue项目中</font><font style="vertical-align: inherit;">的</font></font><code>views</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹有</font><font style="vertical-align: inherit;">什么区别</font></font><a href="https://github.com/vuejs/vue-cli" rel="noreferrer"><code>vue-cli</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常建议将可重用的视图放置在</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中。</font><font style="vertical-align: inherit;">诸如页眉，页脚，广告，网格或任何自定义控件之类的示例，如样式化的文本框或按钮。</font><font style="vertical-align: inherit;">可以在视图内部访问一个或多个组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个视图可以具有一个或多个组件，并且一个视图实际上打算由导航URL访问。</font><font style="vertical-align: inherit;">它们通常放置在中</font></font><code>src/views</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，您不受限制通过url访问组件。</font><font style="vertical-align: inherit;">您可以随意将任何组件添加到中，</font></font><code>router.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以对其进行访问。</font><font style="vertical-align: inherit;">但是，如果您打算这样做，可以将其移至</font></font><code>src/views</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是将其放置在中</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件是类似于asp.net Web表单的用户控件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是为了更好地维护和可读性而构造代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这更多是一种惯例。</font><font style="vertical-align: inherit;">可重复使用的内容可以保存在src / components文件夹中，而与路由器绑定的内容可以保存在src / views中</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
