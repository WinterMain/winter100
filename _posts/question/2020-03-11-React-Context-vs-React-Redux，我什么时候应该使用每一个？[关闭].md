---
layout: question
title:  React Context vs React Redux，我什么时候应该使用每一个？\[关闭\]
date:   2020-03-11T03:46:54.000Z
description:                                                                          ...
img: 
author: 神无宝儿达蒙
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/49568073/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2018-12-17 15：43：33Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16.3.0已发布</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font></font><a href="https://reactjs.org/docs/context.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Context</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API不再是实验功能。</font><font style="vertical-align: inherit;">Dan Abramov（Redux的创建者）</font></font><a href="https://stackoverflow.com/questions/36428355/react-with-redux-what-about-the-context-issue"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此发表了很好的评论</font><font style="vertical-align: inherit;">，但是Context仍然是实验性功能已经有两年了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是，根据您的看法/经验，何时应该</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">React Redux上</font></strong><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Context</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">反之亦然？</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <ul>
  <li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要将中间件用于各种目的。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，记录操作，错误报告，根据服务器的响应调度其他请求等。</font></font></li>
  <li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当来自多个端点的数据影响单个组件/视图时。</font></font></strong></li>
  <li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您想更好地控制应用程序中的操作时。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux可以跟踪动作和数据更改，从而极大地简化了调试。</font></font></li>
  <li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望服务器响应直接更改应用程序的状态。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux添加了一层，您可以在其中决定如何，何时以及是否应应用此数据。</font><font style="vertical-align: inherit;">观察者模式。</font><font style="vertical-align: inherit;">您只需将组件连接到Redux商店，而不是在整个应用程序中创建多个发布者和订阅者。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font></font><a href="https://ideamotive.co/blog/redux-vs-context-api/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时使用Redux？</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LA</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅在使用Redux以避免将props传递到深度嵌套的组件中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用</font></font><code>Context</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API </font><font style="vertical-align: inherit;">替换Redux </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">正是针对此用例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将Redux用于其他所有功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（具有可预测的状态容器，在组件外部处理应用程序的逻辑，集中应用程序的状态，使用</font></font><a href="https://github.com/zalmoxisus/redux-devtools-extension" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux DevTools</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来跟踪何时，何地，原因以及应用程序的状态更改，或使用诸如</font></font><a href="https://github.com/erikras/redux-form/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux Form</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/redux-saga/redux-saga" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux Saga</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/omnidan/redux-undo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux Undo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/rt2zz/redux-persist" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux Persist</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/evgenyrodionov/redux-logger" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux Logger</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等之类的</font><font style="vertical-align: inherit;">插件</font><font style="vertical-align: inherit;">），那么您绝对没有理由放弃Redux。</font><font style="vertical-align: inherit;">该</font></font><code>Context</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API不提供任何这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人认为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux DevTools扩展</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个了不起的，被低估的调试工具，它本身证明继续使用Redux是合理的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些参考：</font></font></p>

<ul>
<li><a href="http://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux还没有死！</font></font></a></li>
<li><a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不需要Redux</font></font></a></li>
<li><a href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Hook可以代替Redux吗？</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢将redux与redux-thunk一起使用来进行API调用（也使用Axios）并将响应分配给reducer。</font><font style="vertical-align: inherit;">它很干净而且易于理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文API专门针对react-redux部分，介绍如何将React组件连接到商店。</font><font style="vertical-align: inherit;">为此，react-redux很好。</font><font style="vertical-align: inherit;">但是，如果您愿意，由于正式支持Context，则可以使用Context API代替r​​eact-redux。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，问题应该是Context API vs react-redux，而不是Context API vs redux。</font><font style="vertical-align: inherit;">另外，这个问题有些人自以为是。</font><font style="vertical-align: inherit;">由于我熟悉react-redux并将其在所有项目中使用，因此我将继续使用它。</font><font style="vertical-align: inherit;">（我没有动力去改变）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您只是在今天学习redux，并且没有在任何地方使用过，那么值得一试Context API，并用您的自定义Context API代码替换react-redux。</font><font style="vertical-align: inherit;">也许，这样更清洁。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，这是一个熟悉的问题。</font><font style="vertical-align: inherit;">没有明显的理由选择一个，因为它们是等效的。</font><font style="vertical-align: inherit;">而且在内部，react-redux仍然使用Context。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我使用Redux的唯一原因是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要一个全局状态对象（出于各种原因，例如可调试性，持久性...）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的应用规模很大或将会很大，并且应该可以扩展到许多开发人员：在这种情况下，您可能需要一定程度的间接（即事件系统）：您触发事件（过去），然后在您不认识的人中组织实际上可以听他们的</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不需要整个应用程序的间接级别，因此可以混合使用样式，并同时使用本地状态/上下文和Redux。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
