---
layout: question
title:  反应PropTypes与流量
date:   2020-03-12T07:50:41.000Z
description: PropTypes和Flow涵盖了类似的内容，但是使用的是不同的方法。PropTypes可以在运行时向您发出警告，这有助于快速找到来自服务器等的格式错误的...
img: 
author: 凯JinJin
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PropTypes和Flow涵盖了类似的内容，但是使用的是不同的方法。</font><font style="vertical-align: inherit;">PropTypes可以在运行时向您发出警告，这有助于快速找到来自服务器等的格式错误的响应。但是，Flow似乎是未来，并且泛型等概念是非常灵活的解决方案。</font><font style="vertical-align: inherit;">另外，Nuclide提供的自动补全功能对Flow来说是一大优势。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我的问题是，开始新项目时哪种方法最好。</font><font style="vertical-align: inherit;">还是同时使用Flow和PropTypes是一个好的解决方案？</font><font style="vertical-align: inherit;">使用两者的问题是您编写了大量重复的代码。</font><font style="vertical-align: inherit;">这是我编写的音乐播放器应用程序的示例：</font></font></p>

<pre><code>export const PlaylistPropType = PropTypes.shape({<font></font>
    next: ItemPropTypes,<font></font>
    current: ItemPropTypes,<font></font>
    history: PropTypes.arrayOf(ItemPropTypes).isRequired<font></font>
});<font></font>
<font></font>
export type Playlist = {<font></font>
    next: Item,<font></font>
    current: Item,<font></font>
    history: Array&lt;Item&gt;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个定义基本上都包含相同的信息，并且当更改数据类型时，两个定义都需要更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这个</font></font><a href="https://github.com/brigand/babel-plugin-flow-react-proptypes"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以将类型声明转换为PropTypes，这可能是一个解决方案。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1091篇《反应PropTypes与流量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试仅使用Flow声明道具的类型。</font><font style="vertical-align: inherit;">指定错误的类型，例如数字而不是字符串。</font><font style="vertical-align: inherit;">您会看到，这将在使用Flow感知编辑器中使用该组件的代码中进行标记。</font><font style="vertical-align: inherit;">但是，这不会导致任何测试失败，并且您的应用仍然可以运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在添加使用带有错误类型的React PropTypes。</font><font style="vertical-align: inherit;">运行该应用程序时，这将导致测试失败并在浏览器控制台中被标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于此，似乎即使正在使用Flow，也应该指定PropTypes。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信这里遗漏的一点是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flow</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态检查器，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PropTypes</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时检查器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">流</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在编码时在上游拦截错误：理论上它可以遗漏一些您不会知道的错误（例如，如果您在项目中实现的流不够，或者对象嵌套很深）</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PropTypes</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在测试时会在下游捕获它们，因此永远不会错过</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出此问题一年后，我想提供有关该问题的经验的最新信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着Flow的发展，我开始用它输入代码库，并且没有添加任何新的PropType定义。</font><font style="vertical-align: inherit;">到目前为止，我认为这是个好方法，因为如上所述，它不仅使您可以键入prop，而且还可以键入代码的其他部分。</font><font style="vertical-align: inherit;">例如，当您拥有状态中的道具副本时，这非常方便，可由用户修改。</font><font style="vertical-align: inherit;">而且，IDE中的自动完成功能是一项了不起的成就。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个方向或另一个方向的自动转换器并没有真正起飞。</font><font style="vertical-align: inherit;">因此，对于新项目，我现在真的建议使用Flow over PropTypes（以防您不想重复输入两次）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
