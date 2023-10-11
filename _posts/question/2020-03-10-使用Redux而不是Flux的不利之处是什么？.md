---
layout: question
title:  使用Redux而不是Flux的不利之处是什么？
date:   2020-03-10T05:35:49.000Z
description:                                                                          ...
img: 
author: 伽罗
category: question
answer: 4
tags: reactjs React.js
topic: React.js
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/32021763/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2019-04-17 20：05：49Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">11个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近才发现</font></font><a href="https://github.com/reactjs/redux" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一切看起来不错。</font><font style="vertical-align: inherit;">在Redux上使用Redux是否有缺点，陷阱或妥协？</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第477篇《使用Redux而不是Flux的不利之处是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他Flux替代品相比，使用Redux的最大好处之一是它具有将您的思维重新定向到更实用的方法的能力。</font><font style="vertical-align: inherit;">一旦了解了所有电线的连接方式，您就会意识到其惊人的优雅和简洁的设计，再也回不去了。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux要求纪律性不变。</font><font style="vertical-align: inherit;">我可以推荐的是ng-freeze，让您知道任何意外的状态突变。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux和Flux都需要大量的样板代码来覆盖许多常见的模式，尤其是那些涉及异步数据获取的模式。</font><font style="vertical-align: inherit;">Redux文档已经包含了一些减少样板的示例：</font></font><a href="http://redux.js.org/docs/recipes/ReducingBoilerplate.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://redux.js.org/docs/recipes/ReducingBoilerplate.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//redux.js.org/docs/recipes/ReducingBoilerplate.html</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以从Flux库（例如Alt或Fluxxor）中获得所需的一切，但是Redux宁愿自由而不是功能。</font><font style="vertical-align: inherit;">对于某些开发人员来说，这可能是不利的一面，因为Redux对您的状态做出了某些假设，而这些假设可能会无意间被忽略。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正回答问题的唯一方法是，如果可以的话，可以尝试在个人项目中尝试Redux。</font><font style="vertical-align: inherit;">Redux之所以出现是因为需要更好的开发人员体验，并且偏向于函数式编程。</font><font style="vertical-align: inherit;">如果您不熟悉诸如reducers和function composition之类的功能概念，那么您可能会放慢速度，但只会稍微放慢速度。</font><font style="vertical-align: inherit;">在数据流中包含这些想法的好处是更容易测试和可预测。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我从Flummox（一种流行的Flux实现）迁移到Redux，其优点远大于缺点。</font><font style="vertical-align: inherit;">我更喜欢代码中的魔术。</font><font style="vertical-align: inherit;">更少的魔术花费了更多的样板，但付出的代价却很小。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，redux是受通量启发的。</font><font style="vertical-align: inherit;">Flux是类似于MVC（模型视图控制器）的体系结构。</font><font style="vertical-align: inherit;">由于使用MVC时，由于可伸缩性问题，facebook引入了变化。</font><font style="vertical-align: inherit;">因此，flux不是实现，而只是一个概念。</font><font style="vertical-align: inherit;">实际上，redux是通量的实现。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
