---
layout: question
title:  为什么通过Facebook Flux使用Redux？\[关闭\]
date:   2020-03-09T14:31:23.000Z
description:                                                                          ...
img: 
author: Green卡卡西
category: question
answer: 6
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
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2019-04-11 14：34：53Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">11个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
        <aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已锁定</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该问题及其答案被</font></font><a href="/help/locked-posts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">锁定，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为该问题是题外话，但具有历史意义。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了</font></font><a href="https://stackoverflow.com/questions/32021763/what-could-be-the-downsides-of-using-redux-instead-of-flux"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://redux.js.org/docs/recipes/ReducingBoilerplate.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减少了样板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看了几个GitHub示例，甚至尝试了一点redux（待办事项应用程序）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，</font><font style="vertical-align: inherit;">与传统的MVC架构相比</font><font style="vertical-align: inherit;">，</font></font><a href="http://redux.js.org/docs/introduction/Motivation.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方的redux doc动机</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了很多优点。</font><font style="vertical-align: inherit;">但是它没有提供以下问题的答案：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要通过Facebook Flux使用Redux？</font></font></strong> </p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅仅是编程风格的一个问题：功能性还是非功能性？</font><font style="vertical-align: inherit;">还是问题出在redux方法之后的abilities / dev-tools中？</font><font style="vertical-align: inherit;">也许缩放？</font><font style="vertical-align: inherit;">还是测试？</font></font></em></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我说redux对于来自函数式语言的人们来说是一种变化，那我是对的吗？</font></font></em> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了回答这个问题，您可以比较实现Redux在通量和Redux上的动机点的复杂性。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是来自</font></font><a href="http://redux.js.org/docs/introduction/Motivation.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方redux doc动机的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动机点</font><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li>Handling optimistic updates (<em>as I understand, it hardly depends on 5th point. Is it hard to implement it in facebook flux?</em>)</li>
<li>Rendering on the server (<em>facebook flux also can do this. Any benefits comparing to redux?</em>)</li>
<li>Fetching data before performing route transitions (<em>Why it can't be achieved in facebook flux? What's the benefits?</em>)</li>
<li>Hot reload (<em>It's possible with <a href="http://gaearon.github.io/react-hot-loader/" rel="noreferrer">React Hot Reload</a>. Why do we need redux?</em>)</li>
<li>Undo/Redo functionality</li>
<li>Any other points? Like persisting state...</li>
</ol></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据这篇文章：</font><a href="https://medium.freecodecamp.org/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://medium.freecodecamp.org/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.freecodecamp.org/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您最好使用MobX来管理应用程序中的数据以获得更好的性能，而不是Redux。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimDavaid卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自2018年中期从ExtJS（几年）迁移的新React / redux采用者： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向后滑下redux学习曲线后，我遇到了相同的问题，并认为纯通量将像OP一样简单。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很快看到了以上答案中提到的redux相对于flux的好处，并且正在将其用于我的第一个应用程序。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在再次掌握样板时，我尝试了一些</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态管理库，发现的最好是</font></font><a href="https://github.com/rematch/rematch#getting-started" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rematch</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> vanilla redux更加直观，它减少了90％的样板，减少了我在redux上花费的时间的75％（我认为是图书馆应该做的事情），我能够得到一些企业应用程序马上去。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还使用相同的redux工具运行。</font><font style="vertical-align: inherit;">这是一篇</font></font><a href="https://hackernoon.com/redesigning-redux-b2baee8b8a38" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，涵盖了一些好处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于到达此SO职位搜索“更简单的redux”的任何人，我建议尝试使用它作为redux的一种简单替代方法，它具有所有优点和1/4的样板。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是早期采用者，并使用Facebook Flux库实现了中型单页应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在谈话中有点晚了，我只想指出，尽管我最大的希望是，Facebook似乎将Flux的实现视为概念的证明，并且从未受到应有的重视。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我鼓励您使用它，因为它展示了Flux架构的更多内部工作，这是很有教益的，但是同时，它没有像Redux这样的库提供许多好处（这些没有对于小型项目来说很重要，但对于大型项目则变得非常有价值）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经决定继续前进，我们将搬到Redux，我建议您这样做;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猿LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您最好从阅读Dan Abramov的这篇文章开始，在他撰写redux时他讨论Flux的各种实现及其折衷：
 </font></font><a href="https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flux Frameworks的演变。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，您链接到的动机页面并没有真正讨论Redux的动机，而是讨论Flux（和React）背后的动机。</font><font style="vertical-align: inherit;">尽管仍然没有解决与标准Flux架构的实现差异，但</font><font style="vertical-align: inherit;">“ </font></font><a href="https://redux.js.org/docs/introduction/ThreePrinciples.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三项原则”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是针对Redux的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，Flux具有多个存储，这些存储可响应于与组件的UI / API交互来计算状态更改，并将这些更改作为组件可以订阅的事件进行广播。</font><font style="vertical-align: inherit;">在Redux中，每个组件都只能订阅一个存储。</font><font style="vertical-align: inherit;">IMO至少感觉到Redux通过统一（或减少，如Redux所说的）流回组件的数据流来进一步简化和统一数据流-而Flux则集中于统一数据流的另一端-模型。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村凯宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Redux over Flux的简单说明。</font><font style="vertical-align: inherit;">Redux没有调度程序，它依赖于称为reducers的纯函数。</font><font style="vertical-align: inherit;">它不需要调度程序。</font><font style="vertical-align: inherit;">每个动作由一个或多个reduce处理，以更新单个存储。</font><font style="vertical-align: inherit;">由于数据是不可变的，reduces返回一个新的更新状态来更新存储</font></font><a href="https://i.stack.imgur.com/uaoem.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/uaoem.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，</font></font><a href="http://www.prathapkudupublog.com/2017/04/flux-vs-redux.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flux vs Redux</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Flux工作了很长时间，现在在Redux中工作了很长时间。</font><font style="vertical-align: inherit;">正如Dan所指出的，两种架构都没有太大不同。</font><font style="vertical-align: inherit;">事实是Redux使事情变得更简单，更清洁。</font><font style="vertical-align: inherit;">它教会了您有关Flux的一些知识。</font><font style="vertical-align: inherit;">例如，Flux是单向数据流的完美示例。</font><font style="vertical-align: inherit;">关注点分离在我们拥有数据的地方，其操作和视图层是分离的。</font><font style="vertical-align: inherit;">在Redux中，我们有相同的东西，但我们还学习了不变性和纯函数。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
