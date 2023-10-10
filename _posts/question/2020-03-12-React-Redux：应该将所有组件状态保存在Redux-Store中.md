---
layout: question
title:  React-Redux：应该将所有组件状态保存在Redux Store中
date:   2020-03-12T12:17:55.000Z
description: 说我有一个简单的切换：当我单击按钮时，颜色组件在红色和蓝色之间切换我可以通过执行以下操作来达到此结果。index.jsButton ...
img: 
author: 伽罗小哥
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我有一个简单的切换：</font></font></p>

<p>
</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我单击按钮时，颜色组件在红色和蓝色之间切换</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过执行以下操作来达到此结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></p>

<pre><code>Button: onClick={()=&gt;{dispatch(changeColor())}}<font></font>
Color: this.props.color ? blue : red<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">container.js</font></font></p>

<pre><code>connect(mapStateToProps)(indexPage)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">action_creator.js</font></font></p>

<pre><code>function changeColor(){<font></font>
 return {type: 'CHANGE_COLOR'}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reducer.js</font></font></p>

<pre><code>switch(){<font></font>
case 'CHANGE_COLOR':<font></font>
return {color: true}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这是很多代码的地狱，我可以用jQuery，一些类和一些CSS在5秒钟内完成一些事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想我真正要问的是，我在这里做错了什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux主要用于“应用程序状态”。</font><font style="vertical-align: inherit;">也就是说，任何与您的应用程序逻辑有关的内容。</font><font style="vertical-align: inherit;">建立在该状态之上的视图是该状态的反映，但不必为该状态所做的任何事情专门使用该状态容器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需问以下问题：该状态对应用程序的其余部分是否重要？</font><font style="vertical-align: inherit;">应用程序的其他部分是否会基于该状态而有所不同？</font><font style="vertical-align: inherit;">在许多较小的情况下，情况并非如此。</font><font style="vertical-align: inherit;">下拉菜单：打开或关闭的事实可能不会对应用程序的其他部分产生影响。</font><font style="vertical-align: inherit;">因此，将其连接到您的商店可能是过大了。</font><font style="vertical-align: inherit;">这当然是一个有效的选择，但并不能真正为您带来任何好处。</font><font style="vertical-align: inherit;">最好</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每天</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">并调用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的特定示例中，切换按钮的颜色是否会对应用程序的其他部分产生影响？</font><font style="vertical-align: inherit;">如果它是应用程序主要部分的某种全局开/关切换，则它肯定属于商店。</font><font style="vertical-align: inherit;">但是，如果您只是在单击按钮时切换按钮的颜色，则可以保留本地定义的颜色状态。</font><font style="vertical-align: inherit;">单击按钮的动作可能还具有其他需要动作分派的效果，但这与应该是什么颜色的简单问题是分开的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，请尝试使应用程序状态尽可能小。</font><font style="vertical-align: inherit;">您不必将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有东西</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都推</font><font style="vertical-align: inherit;">到那里。</font><font style="vertical-align: inherit;">在需要时执行此操作，或者将某些内容保留在其中很有意义。</font><font style="vertical-align: inherit;">或者，如果使用开发工具可以使您的生活更轻松。</font><font style="vertical-align: inherit;">但是不要过多地强调它的重要性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://redux.js.org/docs/faq/OrganizingState.html#organizing-state" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux常见问题解答：组织说明Redux</font></font></a><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
官方文档的这一部分很好地回答了您的问题。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用本地组件状态很好</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">作为开发人员，确定应用程序构成哪种状态以及每种状态应驻留的位置是您的工作。</font><font style="vertical-align: inherit;">找到一个适合您的天平，然后继续前进。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定应将哪种数据放入Redux的一些通用经验法则：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序的其他部分是否关心此数据？ </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否需要能够基于此原始数据创建其他派生数据？ </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否使用相同的数据来驱动多个组件？ </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能够将这种状态恢复到给定的时间点（例如，时间旅行调试）对您有价值吗？ </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否要缓存数据（即，使用已存在的状态而不是重新请求）？</font></font></li>
  </ul>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，值得努力</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有组件状态存储在Redux中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果这样做，您将受益于Redux的许多功能，例如时间旅行调试和可重播的错误报告。</font><font style="vertical-align: inherit;">如果您不这样做，那么这些功能可能会</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全不可用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Redux中存储组件状态更改时，该更改就会从Redux更改堆栈中完全丢失，并且您的应用程序UI将与存储不同步。</font><font style="vertical-align: inherit;">如果这对您并不重要，请问自己为什么要使用Redux？</font><font style="vertical-align: inherit;">没有它，您的应用程序将不再那么复杂！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于性能方面的考虑，您可能希望退回可</font></font><code>this.setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复执行许多操作的任何操作。</font><font style="vertical-align: inherit;">例如：每次用户键入键时，将输入字段的状态存储在Redux中可能会导致性能下降。</font><font style="vertical-align: inherit;">您可以通过将其视为事务来解决此问题：“提交”用户操作后，将最终状态保存在Redux中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的原始帖子提到Redux方式是如何“编写大量代码的”。</font><font style="vertical-align: inherit;">是的，但是您可以将抽象用于常见的模式，例如本地组件状态。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了突出显示@ AR7提供的出色链接，并且因为该链接向后移动了一段时间，所以：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将React用于短暂状态，此状态对应用程序全局无关，并且不会以复杂的方式进行更改。</font><font style="vertical-align: inherit;">例如，在某些UI元素中切换，即表单输入状态。</font><font style="vertical-align: inherit;">将Redux用于全局重要的状态或以复杂方式突变的状态。</font><font style="vertical-align: inherit;">例如，缓存的用户或后期草稿。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，您可能希望从Redux状态转换为React状态（当在Redux中存储某些内容变得笨拙时），或者反过来（当更多组件需要访问曾经是本地的某些状态时）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经验法则是：做些不太尴尬的事情。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丹·阿布拉莫夫（Dan Abramov）：</font><a href="https://github.com/reactjs/redux/issues/1287#issuecomment-175351978" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/reactjs/redux/issues/1287#issuecomment-175351978" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/reactjs/redux/issues/1287#issuecomment-175351978</font></font></a></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
