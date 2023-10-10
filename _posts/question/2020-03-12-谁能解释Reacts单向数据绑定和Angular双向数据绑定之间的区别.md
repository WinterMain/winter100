---
layout: question
title:  谁能解释Reacts单向数据绑定和Angular双向数据绑定之间的区别
date:   2020-03-12T06:36:55.000Z
description: 我对这些概念有些模糊，如果我完全在AngularJS和ReactJS中构建相同的ToDo应用程序，那么，什么使React ToDo使用单向数据绑定而不是A...
img: 
author: 
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对这些概念有些模糊，如果我完全在AngularJS和ReactJS中构建相同的ToDo应用程序，那么，什么使React ToDo使用单向数据绑定而不是AngularJS的双向数据绑定？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解React之类的作品 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染（数据）---&gt; UI。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与Angular有何不同？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第998篇《谁能解释Reacts单向数据绑定和Angular双向数据绑定之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了一点画。</font><font style="vertical-align: inherit;">我希望它足够清楚。</font><font style="vertical-align: inherit;">让我知道是否不是！</font></font></p>

<p><a href="https://i.stack.imgur.com/iz4Hs.png"><img src="https://i.stack.imgur.com/iz4Hs.png" alt="2路数据绑定VS 1路数据绑定"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双向数据绑定提供了获取属性值并将其显示在视图上的能力，同时还具有输入以自动更新模型中的值。</font><font style="vertical-align: inherit;">例如，您可以在视图上显示属性“任务”，然后将文本框值绑定到同一属性。</font><font style="vertical-align: inherit;">因此，如果用户更新文本框的值，则视图将自动更新，并且此参数的值也将在控制器中更新。</font><font style="vertical-align: inherit;">相反，一种方式绑定仅将模型的值绑定到视图，而没有其他观察者来确定用户是否更改了视图中的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于React.js，它并不是真正为双向数据绑定而设计的，但是，您仍然可以通过添加一些其他逻辑来手动实现双向绑定，例如参见this </font></font><a href="http://voidcanvas.com/react-tutorial-two-way-data-binding/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">link</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在Angular.JS中，双向绑定是头等公民，因此无需添加此附加逻辑。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
