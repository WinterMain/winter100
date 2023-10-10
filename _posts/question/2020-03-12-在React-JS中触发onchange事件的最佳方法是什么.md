---
layout: question
title:  在React JS中触发onchange事件的最佳方法是什么
date:   2020-03-12T08:29:44.000Z
description: 我们使用Backbone + ReactJS捆绑包来构建客户端应用程序。严重依赖臭名昭著的是，valueLink我们通过自己的支持ReactJS接口进行双...
img: 
author: 小哥达蒙卡卡西
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们使用Backbone + ReactJS捆绑包来构建客户端应用程序。</font><font style="vertical-align: inherit;">严重依赖臭名昭著的是，</font></font><code>valueLink</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们通过自己的支持ReactJS接口进行双向绑定的包装器将值直接传播到模型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我们面对这个问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有一个</font></font><code>jquery.mask.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件，可以通过编程方式格式化输入值，因此不会触发React事件。</font><font style="vertical-align: inherit;">当模型</font><font style="vertical-align: inherit;">从用户输入中</font><font style="vertical-align: inherit;">接收</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未格式化的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值而</font><font style="vertical-align: inherit;">从插件中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丢失格式化的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">时，所有这些都会导致情况</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎React取决于浏览器有很多事件处理策略。</font><font style="vertical-align: inherit;">有什么通用的方法可以触发特定DOM元素的更改事件，以便React可以听到吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1134篇《在React JS中触发onchange事件的最佳方法是什么》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://facebook.github.io/react/docs/test-utils.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactTestUtils</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模拟事件，</font><font style="vertical-align: inherit;">但这是为单元测试而设计的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议在这种情况下不使用valueLink，而只是侦听插件触发的更改事件并作为响应更新输入的状态。</font><font style="vertical-align: inherit;">双向绑定实用程序更像是一个演示程序；</font><font style="vertical-align: inherit;">它们包含在附加组件中只是为了强调以下事实：纯双向绑定不适用于大多数应用程序，并且您通常需要更多的应用程序逻辑来描述应用程序中的交互。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
