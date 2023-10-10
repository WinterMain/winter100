---
layout: question
title:  redux-thunk和redux-promise有什么区别？
date:   2020-03-12T10:11:12.000Z
description: 据我所知并纠正我是否有错，redux-thunk是一个中间件，可以帮助我们在操作本身中调度异步函数并调试值，而当我使用redux-promise时，如果不...
img: 
author: 神奇乐猪猪
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知并纠正我是否有错，</font></font><a href="https://github.com/gaearon/redux-thunk"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-thunk</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个中间件，可以帮助我们在操作本身中调度异步函数并调试值，而当我使用</font></font><a href="https://github.com/acdlite/redux-promise"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-promise时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果不实现自己的方法就无法创建异步函数作为Action的机制引发仅分配纯对象的异常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个软件包之间的主要区别是什么？</font><font style="vertical-align: inherit;">在单个页面react应用程序中使用这两个软件包是否有任何好处，或者坚持redux-thunk就足够了？  </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1259篇《redux-thunk和redux-promise有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全面披露：我对Redux开发还比较陌生，我自己也很困惑这个问题。</font><font style="vertical-align: inherit;">我将解释我找到的最简洁的答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当调度动作时，ReduxPromise返回一个Promise作为有效负载，然后ReduxPromise中间件工作以解析该Promise并将结果传递给reducer。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，ReduxThunk强制操作创建者推迟将操作对象实际分发给reducer，直到调用dispatch。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在其中找到此信息的教程的链接：</font></font><a href="https://blog.tighten.co/react-101-part-4-firebase" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://blog.tighten.co/react-101-part-4-firebase" rel="noreferrer"><font style="vertical-align: inherit;">//blog.tighten.co/react-101-part-4-firebase</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会希望/需要在应用程序中一起使用。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从redux-promise开始，用于日常的产生承诺的异步任务，然后随着复杂性的增加而扩展以添加Thunk（或Sagas等）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当生活简单时，您只需要与返回单个承诺的创建者进行基本的异步工作，即可</font></font><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改善您的生活，并快速简便地简化生活。</font><font style="vertical-align: inherit;">（简而言之，redux-promise（-middleware）无需考虑在诺言解决时“解开”诺言，然后编写/分发结果，而是为您处理所有无聊的工作。）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在以下情况下，生活变得更加复杂： 

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您的动作创建者想要产生多个承诺，并希望将它们作为单独的动作分派给单独的减速器？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，在决定如何以及在何处分发结果之前，您需要管理一些复杂的预处理和条件逻辑？ </font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些情况下，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的好处</font></font><code>redux-thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是它使您可以将复杂性封装在动作创建者内部</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的Thunk产生并调度了Promise，那么您将需要同时使用这两个库</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thunk会组成原始动作并将其分派 </font></font></li>
<li><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将在解压缩器上处理Thunk生成的各个promise的解包，以避免产生样板。</font><font style="vertical-align: inherit;">（您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>promise.then(unwrapAndDispatchResult).catch(unwrapAndDispatchError)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... </font><font style="vertical-align: inherit;">在Thunks中做所有事情，</font><font style="vertical-align: inherit;">但是为什么呢？）</font></font></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结用例差异的另一种简单方法：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux操作周期的开始与结束</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恶作剧是</font><font style="vertical-align: inherit;">Redux流程</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果您需要创建复杂的动作，或者封装一些粗糙的动作创建逻辑，则将其排除在组件之外，当然也应包括在reducers中。</font></font></li>
<li><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是为了</font><font style="vertical-align: inherit;">流程</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结束</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一旦一切都简化为简单的承诺，而您只想解开它们并将其解决/拒绝的价值存储在商店中

</font></font><hr></li>
</ul>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释/参考：</font></font></h3>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font></font><code>redux-promise-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对原始想法背后的更完整和可理解的实现</font></font><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它正在积极开发中，并得到了很好的补充</font></font><code>redux-promise-reducer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他类似的中间件可用于组合/排序复杂的动作：一个非常流行的中间件是</font></font><code>redux-saga</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它与极为相似</font></font><code>redux-thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是基于生成器函数的语法。</font><font style="vertical-align: inherit;">同样，您可能会结合使用它</font></font><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇</font></font><a href="https://medium.com/react-native-training/redux-4-ways-95a130da0cdc#.plivi8f61" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很棒的文章，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接比较了各种异步组合选项，包括thunk和redux-promise-middleware。</font><font style="vertical-align: inherit;">（TL； DR：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“与其他一些选项相比，Redux Promise中间件极大地减少了样板”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> …… </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“我认为我喜欢Saga用于更复杂的应用程序</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请阅读：“用途”），</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而Redux Promise中间件则可以用于其他所有方面。”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在一个重要的情况下，您可能认为您需要调度多个动作，但实际上并不需要，并且可以使简单的事情保持简单。</font><font style="vertical-align: inherit;">那就是您只希望多个reducer对您的异步调用做出反应的地方。</font><font style="vertical-align: inherit;">但是，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根本没有理由为什么多个reducer无法监视单个动作类型。</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只想确保您的团队知道您正在使用该约定，因此他们不认为只有一个reducer（具有相关名称）可以处理给定的动作。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>redux-thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 允许您的动作创建者返回一个函数： </font></font></p>

<pre><code>function myAction(payload){<font></font>
    return function(dispatch){<font></font>
        // use dispatch as you please<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><code>redux-promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 允许他们返回承诺：</font></font></p>

<pre><code>function myAction(payload){<font></font>
    return new Promise(function(resolve, reject){<font></font>
        resolve(someData); // redux-promise will dispatch someData<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要异步或有条件地分派动作，则这两个库都非常有用。</font></font><code>redux-thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以让您在一个动作创建者内分派几次。</font><font style="vertical-align: inherit;">您选择一个，另一个还是全部取决于您的需求/风格。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
