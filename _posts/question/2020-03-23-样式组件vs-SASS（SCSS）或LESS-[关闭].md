---
layout: question
title:  样式组件vs SASS（SCSS）或LESS \[关闭\]
date:   2020-03-23T02:39:20.000Z
description:                                                                          ...
img: 
author: 村村
category: question
answer: 1
tags: CSS
topic: CSS
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题需要更加</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/46747038/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2019-10-17 02：50：01Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了一个React样板，该样板具有很好的代表并且是社区驱动的。</font><font style="vertical-align: inherit;">样式部分将重点放在样式化组件CSS上，但从未停止转而使用常规CSS样式方法。</font><font style="vertical-align: inherit;">尽管这吸引了我的兴趣，但使Styled-Component CSS脱颖而出的原因以及为什么需要采用它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对</font></font><a href="https://www.styled-components.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式化组件CSS的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理解</font><font style="vertical-align: inherit;">：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件驱动的思想。</font><font style="vertical-align: inherit;">现在，您的CSS也是一个组件。</font><font style="vertical-align: inherit;">- </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太酷了！</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载所需的内容，并在需要时加载惰性CSS</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主题提供程序，外观，模块化和动态-这也可以通过其他库来实现</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件DOM及其样式的服务器端构造。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：</font></font></strong></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器已经发展为可以将CSS与Javascript解析分开解析，为什么我们要尝试与此背离而又完全适合Javascript？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式化组件CSS将其javascript库发送到客户端，该库实际上在运行时解析样式，并</font></font><code>&lt;style
/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个组件按需加载</font><font style="vertical-align: inherit;">时放入</font><font style="vertical-align: inherit;">标记中。</font><font style="vertical-align: inherit;">这意味着额外的负载和逻辑最终会导致浏览器的执行周期增加。</font><font style="vertical-align: inherit;">为什么需要这个？</font></font></p>

<p><em>(By the above question i mean for every component loaded, corresponding CSS is computed, created and inserted in head  via <code>style</code> tag / Multiple style tags - Re-inventing CSS interpreters)</em></p></li>
<li><p>Does continuous computed style text banging via <code>&lt;style /&gt;</code> in the
head tag cause browser reflow/repaint ?</p></li>
<li><p>What are the performance advantages i get from this?</p></li>
<li><p>With add-on libraries / options like <a href="https://postcss.org/" rel="noreferrer">Post-CSS</a> &amp; <a href="https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/545" rel="noreferrer">SCSS classname hashing</a> for dynamic classnames which pretty much solves the problem that everyone states. Why SC still ?</p></li>
</ol>

<p><em>Community, please clear the air for me or correct me if i am wrong.</em> </p>

<hr>

<p>Some good articles that talks about repaint or DOM re-flow how it is performance expensive for browser when CSS styles are modified.</p>

<ul>
<li><a href="https://developers.google.com/speed/articles/reflow" rel="noreferrer">https://developers.google.com/speed/articles/reflow</a></li>
<li><a href="http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/</font></font></a></li>
<li><a href="https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/</font></font></a></li>
<li><a href="https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information</font></font></a></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2663篇《样式组件vs SASS（SCSS）或LESS \[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器已经发展为可以将CSS与Javascript解析分开解析，为什么我们要尝试与此背离而又完全适合Javascript？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您同时混合使用Javascript和HTML（即JSX）和CSS（JSS或其他）时，您会将组件变成一个可放入单个文件的实体模块。</font><font style="vertical-align: inherit;">您不再需要将样式保存在单独的文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，发生了功能上的魔术：由于JSX是返回“ HTML”的原始数据的纯函数（不是真的），所以CSS-in-JS是返回“ CSS”的纯函数或原始数据（也不是真的） ）。</font><font style="vertical-align: inherit;">从这一点来看，我认为值得</font></font><a href="https://reactjs.org/docs/jsx-in-depth.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关JSX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS-in-JS的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式化组件CSS将其javascript库发送到客户端，该库实际上在运行时解析样式，并</font></font><code>&lt;style /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个组件按需加载</font><font style="vertical-align: inherit;">时放入</font><font style="vertical-align: inherit;">标记中。</font><font style="vertical-align: inherit;">这意味着额外的负载和逻辑最终会导致浏览器的执行周期增加。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不仅在运行时。</font><font style="vertical-align: inherit;">由于CSS-in-JSS只是返回CSS的数据功能，因此您可以在任何平台上使用它。</font><font style="vertical-align: inherit;">以Node为例，添加</font></font><a href="https://reactjs.org/docs/react-dom-server.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SSR</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您便</font></font><code>style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在响应正文中将元素交付给浏览器，因此将其解析，就像原始交付CSS的情况一样。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么需要这个？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它像React或Redux，jQuery以及其他任何lib一样在开发中很方便，所以它付出了网络负载和浏览器性能的代价。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您选择图书馆是因为它可以解决问题。</font><font style="vertical-align: inherit;">如果似乎没有问题，为什么还要使用库，对吗？</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"></font><code>&lt;style /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在head标签中</font><font style="vertical-align: inherit;">连续计算的样式文本敲打是否</font><font style="vertical-align: inherit;">会导致浏览器重排/重画？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><a href="https://gist.github.com/paulirish/5d52fb081b3570c81e3a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太多的事情迫使回流</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器很聪明。</font><font style="vertical-align: inherit;">如果样式没有更改，他们甚至不会尝试重绘。</font><font style="vertical-align: inherit;">这并不意味着他们不计算差值，这会花费CPU时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><a href="https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式（重新）计算的范围和复杂性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很好的介绍</font><font style="vertical-align: inherit;">，深入了解该主题确实值得一读。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
