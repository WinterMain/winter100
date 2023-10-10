---
layout: question
title:  为什么说React的Virtual DOM概念比脏模型检查更有效？
date:   2020-03-09T17:05:22.000Z
description: 我在（Pete Hunt：React：Rethinking Best Practices-JSConf EU 2013）上看到了一个React开发人员的演...
img: 
author: 西门泡芙Jim
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在（</font><a href="http://www.youtube.com/watch?v=x7cQ3mrcKaY" rel="noreferrer"><font style="vertical-align: inherit;">Pete Hunt：React：Rethinking Best Practices-JSConf EU 2013</font></a><font style="vertical-align: inherit;">）上</font><font style="vertical-align: inherit;">看到了一个</font></font><a href="http://facebook.github.io/react/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员的演讲，</font><font style="vertical-align: inherit;">演讲者提到对模型进行脏检查可能很慢。</font><font style="vertical-align: inherit;">但是，由于虚拟DOM在大多数情况下应该比模型更大，难道计算虚拟DOM之间的差异实际上还没有表现得更好吗？</font></font><a href="http://www.youtube.com/watch?v=x7cQ3mrcKaY" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真的很喜欢Virtual DOM（尤其是服务器端渲染）的潜在功能，但是我想知道所有的优点和缺点。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第394篇《为什么说React的Virtual DOM概念比脏模型检查更有效？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小胖蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以阅读这篇文章（</font></font><a href="https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Virtual DOM和DOM之间的区别</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）以了解Real DOM和Virtual DOM。</font><font style="vertical-align: inherit;">希望对您有所帮助！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是React团队成员SebastianMarkbåge的评论，阐明了一些观点：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React对输出进行区分（这是已知的可序列化格式，DOM属性）。</font><font style="vertical-align: inherit;">这意味着源数据可以是任何格式。</font><font style="vertical-align: inherit;">它可以是不可变的数据结构，也可以是闭包内部的状态。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular模型不会保留参照透明性，因此本质上是可变的。</font><font style="vertical-align: inherit;">您可以对现有模型进行变异以跟踪更改。</font><font style="vertical-align: inherit;">如果您的数据源每次都是不可变数据或新的数据结构（例如JSON响应）怎么办？</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脏检查和Object.observe在关闭范围状态下不起作用。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，这两件事非常限制了功能模式。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，当模型复杂度增加时，进行脏跟踪变得越来越昂贵。</font><font style="vertical-align: inherit;">但是，如果您仅在视觉树上做差异，例如React，那么它就不会增长太多，因为您可以在任何给定点在屏幕上显示的数据量受到UI的限制。</font><font style="vertical-align: inherit;">皮特（Pete）的上面的链接涵盖了更多的性能好处。</font></font></p>
</blockquote>

<p><a href="https://news.ycombinator.com/item?id=6937668" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://news.ycombinator.com/item?id=6937668</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近在这里阅读了有关React差异算法的详细文章：</font></font><a href="http://calendar.perfplanet.com/2013/diff/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://calendar.perfplanet.com/2013/diff/" rel="noreferrer"><font style="vertical-align: inherit;">//calendar.perfplanet.com/2013/diff/</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">据我了解，使React快速的原因是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">批量DOM读/写操作。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅有效更新子树。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与脏检查相比，IMO的主要区别在于：</font></font></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模型脏检查</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：每次</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">React组件时，显式设置为脏</font><font style="vertical-align: inherit;">，因此这里不需要（数据）比较。</font><font style="vertical-align: inherit;">对于脏检查，（模型的）比较总是在每个摘要循环中进行。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：DOM操作非常昂贵，因为修改DOM还将应用并计算CSS样式，布局。</font><font style="vertical-align: inherit;">不必要的DOM修改所节省的时间可能比扩散虚拟DOM所花费的时间更长。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于非平凡的模型（例如具有大量字段或大量列表的模型），第二点更为重要。</font><font style="vertical-align: inherit;">复杂模型的一个字段更改将仅导致涉及该字段的DOM元素所需的操作，而不是整个视图/模板。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
