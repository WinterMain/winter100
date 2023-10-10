---
layout: question
title:  React vs ReactDOM？
date:   2020-03-11T02:53:28.000Z
description: 我有点新反应。我看到我们必须导入两件事才能开始，React并且ReactDOM，谁能解释其中的区别。我正在阅读React文档，但没有说。...
img: 
author: A小宇宙
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有点新反应。</font><font style="vertical-align: inherit;">我看到我们必须导入两件事才能开始，</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>ReactDOM</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，谁能解释其中的区别。</font><font style="vertical-align: inherit;">我正在阅读</font></font><a href="http://facebook.github.io/react/docs/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但没有说。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>react package</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保持</font></font><code>react source</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为组件，状态，道具和一切反应的代码。</font></font></p>

<p>The <code>react-dom</code> package as the name implies is the <code>glue between React and the DOM</code>. Often, you will only use it for one single thing: <code>mounting your application to the index.html file with ReactDOM.render()</code>.</p>

<p><strong>Why separate them?</strong></p>

<p>The <code>reason</code> React and ReactDOM were split into two libraries was due to the arrival of <code>React Native (A react platform for mobile development)</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v0.14 Beta发布公告</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们看到像包</font></font><a href="https://facebook.github.io/react-native/" rel="nofollow noreferrer"><code>react-native</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/reactjs/react-art" rel="nofollow noreferrer"><code>react-art</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/Flipboard/react-canvas" rel="nofollow noreferrer"><code>react-canvas</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><a href="https://github.com/Izzimach/react-three" rel="nofollow noreferrer"><code>react-three</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它很清楚，美和本质作出反应无关，与浏览器或DOM。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更清楚地说明这一点，并使其更易于构建更多React可以渲染的环境，我们将主要的react包分为两个部分：react和react-dom。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从根本上讲，React的想法与浏览器无关，它们恰好是将组件树呈现到其中的众多目标之一。</font><font style="vertical-align: inherit;">ReactDOM包允许开发人员从React包中删除所有不必要的代码，并将其移至更合适的存储库中。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包中包含</font></font><code>React.createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>React.createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>React.PropTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>React.Children</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和与元件和组件类的其它辅助函数。</font><font style="vertical-align: inherit;">我们将它们视为</font><font style="vertical-align: inherit;">构建组件所需</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同构或通用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助器。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>react-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包包括</font></font><code>ReactDOM.render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>ReactDOM.unmountComponentAtNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ReactDOM.findDOMNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>react-dom/server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有服务器端渲染的支持</font></font><code>ReactDOMServer.renderToString</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ReactDOMServer.renderToStaticMarkup</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两段说明了核心API方法从何而来</font></font><code>v0.13</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React和ReactDOM直到最近才被拆分为两个不同的库。</font><font style="vertical-align: inherit;">在v0.14之前，所有ReactDOM功能都是React的一部分。</font><font style="vertical-align: inherit;">这可能会引起混乱，因为任何过时的文档都不会提及React / ReactDOM的区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顾名思义，ReactDOM是React和DOM之间的粘合剂。</font><font style="vertical-align: inherit;">通常，您只会将其用于一件事情：使用进行安装</font></font><code>ReactDOM.render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">ReactDOM的另一个有用功能是</font></font><code>ReactDOM.findDOMNode()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以用来直接访问DOM元素。</font><font style="vertical-align: inherit;">（有些事情您应该在React应用程序中谨慎使用，但是可能有必要。）如果您的应用程序是“同构的”，那么您还可以</font></font><code>ReactDOM.renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在后端代码中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于其他所有内容，都有React。</font><font style="vertical-align: inherit;">您可以使用React定义和创建生命周期挂钩等元素，即React应用程序的内胆。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React和ReactDOM被分成两个库的原因是由于React Native的到来。</font><font style="vertical-align: inherit;">React包含Web和移动应用程序中使用的功能。</font><font style="vertical-align: inherit;">ReactDOM功能仅在Web应用程序中使用。</font><font style="vertical-align: inherit;">[ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过进一步的研究，很明显我对React Native的无知正在显示。</font><font style="vertical-align: inherit;">对于Web和移动设备而言，拥有React程序包似乎比现在现实更令人向往。</font><font style="vertical-align: inherit;">目前，React Native是一个完全不同的软件包。]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅宣布v0.14版本的博客文章：</font><a href="https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://facebook.github.io/react/blog/2015/10/07/react-v0.14.html
</font></font><a href="https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更简洁，react用于组件，而react-dom用于呈现DOM中的组件。</font><font style="vertical-align: inherit;">“反应域”充当组件和DOM之间的粘合剂。</font><font style="vertical-align: inherit;">您将使用react-dom的render（）方法来渲染DOM中的组件，而这就是您从开始时就需要知道的一切。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactDOM模块公开了特定于DOM的方法，而React具有旨在由React在不同平台（例如React Native）上共享的核心工具。</font></font></p>

<p><a href="http://facebook.github.io/react/docs/tutorial.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://facebook.github.io/react/docs/tutorial.html</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
