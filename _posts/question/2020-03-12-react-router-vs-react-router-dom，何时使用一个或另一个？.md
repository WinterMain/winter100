---
layout: question
title:  react-router vs react-router-dom，何时使用一个或另一个？
date:   2020-03-12T06:33:39.000Z
description: 两者都有路由，链接等。何时使用一个或另一个？我真的很困惑在哪里使用每个。服务器端？客户端？https //reacttraining.com/reac...
img: 
author: JimGreen
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都有路由，链接等。何时使用一个或另一个？</font><font style="vertical-align: inherit;">我真的很困惑在哪里使用每个。</font><font style="vertical-align: inherit;">服务器端？</font><font style="vertical-align: inherit;">客户端？</font></font></p>

<p><a href="https://reacttraining.com/react-router/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reacttraining.com/react-router/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些示例中，您需要传递历史记录，而在其他示例中则不需要。</font><font style="vertical-align: inherit;">该怎么办？</font></font></p>

<pre><code>&lt;Router history={browserHistory}&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>&lt;Router&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时使用一个或另一个非常令人困惑，任何帮助都值得赞赏。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第990篇《react-router vs react-router-dom，何时使用一个或另一个？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在v4中，react-router导出核心组件和功能。</font><font style="vertical-align: inherit;">react-router-dom导出DOM感知组件，例如</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（渲染</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和（与浏览器的window.history交互）。</font></font></p>

<p><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新导出react-router的所有导出，因此您只需要从</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目中</font><font style="vertical-align: inherit;">导入</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry蛋蛋Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-dom是一个</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></p>

<ul>
<li><p><code>&lt;BrowserRouter&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 这是
</font></font><code>&lt;Router history={browserNativeHistoryApiWrapper}/&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">证明：</font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/BrowserRouter.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/BrowserRouter.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/BrowserRouter.js</font></font></a></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器的某些链接改进</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">证明：</font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js</font></font></a></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用</font></font><code>&lt;NavLink&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">—包装器知道它是否“活动”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">证明：</font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js</font></font></a></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全部导出</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">GitHub答案上的链接（</font><a href="https://github.com/ReactTraining/react-router/issues/4648" rel="nofollow noreferrer"><font style="vertical-align: inherit;">＆</font></a><a href="https://github.com/ReactTraining/react-router/issues/4648" rel="nofollow noreferrer"><font style="vertical-align: inherit;">？</font></a></font><a href="https://github.com/ReactTraining/react-router/issues/4648" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间的区别是</font><font style="vertical-align: inherit;">什么</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"></font><code>react-router</code><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-dom</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-native</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间的所有公共组件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">什么时候应该使用另一个？</font><font style="vertical-align: inherit;">如果您在网络上，则</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-dom</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该具有所需的一切，因为它还可以导出所需的常用组件。</font><font style="vertical-align: inherit;">如果您使用的是React Native，则</font><font style="vertical-align: inherit;">出于相同的原因</font><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-native</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该具有所需的一切。</font><font style="vertical-align: inherit;">因此，您可能永远不必直接从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入任何内容</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就当你使用</font></font></p>

<pre><code>&lt;Router history={browserHistory}&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>&lt;Router&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在RRv4中，您无需传递浏览器历史记录，仅用于路由器的早期版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您仍然感到困惑，可以在</font><a href="https://github.com/ReactTraining/react-router/tree/master/packages" rel="noreferrer"><font style="vertical-align: inherit;">此处查看</font></a><font style="vertical-align: inherit;">每个包装的详细信息</font></font><a href="https://github.com/ReactTraining/react-router/tree/master/packages" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
