---
layout: question
title:  Koa / Co / Bluebird或Q / Generators / Promises / Thunks互动？（Node.js）\[关闭\]
date:   2020-03-30T09:14:30.000Z
description:                                                                          ...
img: 
author: Gil
category: question
answer: 0
tags: node.js KoaJS
topic: KoaJS
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/23099855/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-04-16 08：29：12Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在研究部分使用Koa构建Web应用程序的方法，但是我对如何在-和应用-支持“使异步操作更容易”的技术/方法（包括下面列出）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总体而言，网上关于该主题的不同指导仍然使事情变得模糊，尤其是在不断发展的最佳实践或至少更好的最佳实践以及在什么情况下。</font><font style="vertical-align: inherit;">在网络上几乎没有或没有任何东西可以将其全部置于上下文中。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望对这个大屁股的帖子的反应可以纠正这个问题</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">同样，也许以下问题可以激发某人撰写详尽的博客文章或类似内容以解决此问题。</font><font style="vertical-align: inherit;">我的感觉是，我什至没有一个可以从中受益的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果聪明的社区可以帮助回答以下有关以下所列技术的问题（以下以粗体显示），我将感到高兴：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-a）它们如何以及在什么情况下（如适用）相互补充，补充，替代和/或重叠的解决方案？ </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-b）在速度性能，错误处理的简便性和调试的简易性方面，它们的权衡取舍是什么？  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-c）什么时候，在哪里以及为什么使用“这种”技术与“那种”技术，技术组合和/或方法更好？  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-d）哪些技术或方法（如有）可能是“暗淡的星星”。</font></font></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（希望可以很好地解释答案的观点。）</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">==============================</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术： </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*柯阿*</font></font></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解：</font></font></em> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koa是构建Node应用程序的最小基础，这些应用程序旨在利用ECMAScript-6功能，尤其是生成器。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*合作*</font></font></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解：</font></font></em> </p>

<blockquote>
  <p>-- Co is a library of utilites for running ECMAScript-6 generators (which are native to Node .011 harmony), with the goal to allieve some/much(?) of the need to write boilerplate code for running and managing generators.  </p>
  
  <p>-- Co is intrinsically part of Koa(?). </p>
</blockquote>

<p><em>Specific questions:</em></p>

<blockquote>
  <p>-- If and how does one use Co differently in Koa than in a non-Koa context.  In other words, does Koa wholly facade Co?</p>
  
  <p>-- Could Co be replaced in Koa with some other like generator library if there is/was a better one?  Are there any?</p>
</blockquote>

<p><strong>* Promise Libraries such as "Q" and Bluebird *</strong></p>

<p><em>My understanding:</em> </p>

<blockquote>
  <p>-- They are in a sense "polyfills" for implmententing the Promises/A+ spec, if and until Node natively runs that spec.<br>
  -- They have some further non-spec convenience utilities for facilitating the use promises, such as Bluebird's promisfyAll utility. </p>
</blockquote>

<p><em>Specific questions:</em></p>

<blockquote>
  <p>-- My understanding is the ECMAScript-6 spec does/will largely reflect the Promises/A+ spec, but even so, Node 0.11v harmony does not natively implement Promises.  (Is this correct?)  However when it does, will technologies such as Q and Bluebird be on their way out?</p>
  
  <p>-- I've read something to the effect that "Q" and Bluebird support generators.  What does this mean?  Does it mean in part that, for example, they to some degree provided the same utility as Co, and if so to what degree?</p>
</blockquote>

<p><strong>* Thunks and Promises  *</strong></p>

<blockquote>
  <p>I think I have an fair handle on what they are, but hoping someone can provide a succinct and clear "elevator pitch" definition on what each is, and of course, as asked above, to explain when to use one versus the other -- in a Koa context and not in it.</p>
</blockquote>

<p><em>Specific questions:</em></p>

<blockquote>
  <p>-- Pro and cons to using something like Bluebird's promisfy, versus say using Thunkify (github com/visionmedia/node-thunkify)?</p>
</blockquote>

<p>==============================</p>

<p><em>To give some further context to this post and its questions</em>, it might be interesting if Koa techniques presented in the following webpages could be discussed and contrasted (especiallly on a pros vs cons basis):</p>

<blockquote>
  <p>-- a) www.marcusoft . net/2014/03/koaintro.html  (Where's the thunks or promises, or am I not seeing something?)</p>
  
  <p>-- b) strongloop . com/strongblog/node-js-express-introduction-koa-js-zone  (Again, where's the thunks or promises?)</p>
  
  <p>-- c) github . com/koajs/koa/blob/master/docs/guide.md  (What does the "next" argument equate to, and what set it and where?)</p>
  
  <p>-- d) blog.peterdecroos . com/blog/2014/01/22/javascript-generators-first-impressions  (Not in a Koa context, but presents the use of Co with a promise library (Bluebird), so I'm assuming the technique/pattern presented here lends itself to usage in Koa(?). If so, then how well?</p>
</blockquote>

<p>Thanks all!</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
