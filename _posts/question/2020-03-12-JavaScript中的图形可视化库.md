---
layout: question
title:  JavaScript中的图形可视化库
date:   2020-03-12T08:10:27.000Z
description:                                                                          ...
img: 
author: 猴子NearJinJin
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
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个表示有向图的数据结构，我想在HTML页面上动态呈现它。</font><font style="vertical-align: inherit;">这些图通常只是几个节点，在最高端可能只有十个节点，因此我猜测性能并不重要。</font><font style="vertical-align: inherit;">理想情况下，我希望能够将其与jQuery挂钩，以便用户可以通过拖动节点来手动调整布局。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我不是在寻找图表库。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1111篇《JavaScript中的图形可视化库》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一老丝宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在商业场景中，可以肯定的是，认真的竞争者是</font></font><a href="https://www.yworks.com/yfileshtml" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">yFiles for HTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它提供：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义数据（</font></font><a href="http://live.yworks.com/yfiles-for-html/2.0/databinding/graphbuilder/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此交互式在线演示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎可以完全满足OP的要求）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">交互式编辑，用于通过用户手势创建和操作图（请参见完整的</font></font><a href="https://www.yworks.com/products/yed-live" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">庞大的</font></font><a href="http://docs.yworks.com/yfileshtml/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编程API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可自定义库的各个方面</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分组</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（既可交互，也可通过布局算法）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不依赖于特定的UI工具包，但是支持</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到几乎所有现有的Javascript工具包中（请参阅</font></font><a href="http://live.yworks.com/yfiles-for-html/2.0/#integration" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“集成”演示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动布局（各种样式，例如“分层”，“有机”，“正交”，“树”，“圆形”，“径向”等）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动进行复杂的边缘铣削（具有避障功能的正交和有机边缘铣削）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增量和部分布局（添加和删除元素，仅略微改变或根本不改变其余图）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持分组和嵌套（既可交互，也可通过布局算法）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的实施方式中</font></font><a href="http://live.yworks.com/yfiles-for-html/2.0/#analysis" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图形分析算法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（路径，中心性，网络流等）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用诸如SVG + CSS和Canvas之类的HTML 5技术以及利用属性和其他更多ES5和ES6功能的现代Javascript（但出于同样的原因，将无法在IE 8及更低版本中运行）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用模块化API，可以使用UMD加载程序按需加载</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是显示大多数所需功能的示例渲染：</font></font></p>

<p><img src="https://i.stack.imgur.com/9RrCz.png" alt="BPMN演示创建的示例渲染的屏幕快照。"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全面披露：我为yWorks工作，但是在Stackoverflow上我不代表我的雇主。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.jsviz.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JsVIS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当不错，但是随着较大的图形速度变慢，并且自2007年以来已被放弃。</font></font></p>

<p><a href="https://github.com/prefuse/Prefuse" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prefuse</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是用于在Java中创建丰富的交互式数据可视化</font><a href="https://github.com/prefuse/Prefuse" rel="nofollow noreferrer"><font style="vertical-align: inherit;">效果</font></a><font style="vertical-align: inherit;">的一组软件工具。</font></font><a href="https://github.com/prefuse/Flare" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flare</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   是一个ActionScript库，用于创建可在Adobe Flash Player中运行的可视化效果，该功能自2012年以来已被废弃。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanMandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如guruz所提到的，</font></font><a href="http://philogb.github.io/jit/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JIT</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有几种可爱的图形/树布局，包括颇具吸引力的RGraph和HyperTree可视化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我刚刚</font></font><a href="http://github.com/jackrusher/jssvggraph" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在github上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出了一个基于SVG的超级简单的</font><a href="http://github.com/jackrusher/jssvggraph" rel="nofollow noreferrer"><font style="vertical-align: inherit;">实现</font></a><font style="vertical-align: inherit;">（无依赖项，〜125 LOC），对于在现代浏览器中显示的小图来说应该足够好了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我是Cytoscape.js的开发人员</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cytoscape.js是HTML5图形可视化库。</font><font style="vertical-align: inherit;">该API非常复杂，并遵循jQuery约定，包括</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于查询和过滤的选择器（可以</font></font><code>cy.elements("node[weight &gt;= 50].someClass")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成很多工作），</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接（例如</font></font><code>cy.nodes().unselect().trigger("mycustomevent")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似jQuery的用于绑定事件的函数，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素作为集合（例如jQuery具有HTMLDomElements的集合），</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可扩展性（可以添加自定义布局，UI，核心和集合功能等），</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和更多。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在考虑使用图形构建严肃的Web应用程序，则至少应考虑Cytoscape.js。</font><font style="vertical-align: inherit;">它是免费和开源的：</font></font></p>

<p><a href="http://js.cytoscape.org"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://js.cytoscape.org</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
