---
layout: question
title:  在React中，onChange和onInput有什么区别？
date:   2020-03-17T06:59:56.000Z
description: 我已经尝试过寻找答案，但是其中大多数都在React的上下文之外，而后者onChange会在模糊时触发。在执行各种测试时，我似乎无法分辨出这两个事件有何...
img: 
author: 斯丁Jim
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试过寻找答案，但是其中大多数都在React的上下文之外，而后者</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会在模糊时触发。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在执行各种测试时，我似乎无法分辨出这两个事件有何不同（应用于文本区域时）。</font><font style="vertical-align: inherit;">谁能对此有所启发？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi达蒙Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您在此处的各种评论中所见，React将onChange和onInput视为相同，因此，无需辩论此决定的优缺点。</font><font style="vertical-align: inherit;">这是解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想在完成用户编辑之前对其进行处理，请使用onBlur。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil启人</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近我遇到一个错误，该错误</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不允许在IE11的输入字段中进行复制和粘贴。</font><font style="vertical-align: inherit;">而该</font></font><code>onInput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件将允许该行为。</font><font style="vertical-align: inherit;">我在文档中找不到任何描述此内容的文档，但这确实表明两者之间存在差异（预期与否）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎没有真正的区别</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，React将侦听器附加</font></font><code>Component.onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到DOM </font></font><code>element.oninput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font><font style="vertical-align: inherit;">请参阅表单文档中的注释：</font></font></p>

<p><strong><a href="https://facebook.github.io/react/docs/forms.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Docs-表格</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有更多的人对此行为感到惊讶。</font><font style="vertical-align: inherit;">有关更多详细信息，请在React问题跟踪器上参考此问题：</font></font></p>

<p><strong><a href="https://github.com/facebook/react/issues/3964" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记录React的onChange与onInput＃3964的关系</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用关于该问题的评论：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不明白为什么React选择使onChange表现得像onInput一样。</font><font style="vertical-align: inherit;">据我所知，我们无法恢复旧的onChange行为。</font><font style="vertical-align: inherit;">Docs声称这是一个“错误用语”，但事实并非如此，它会在发生更改时触发，只是直到输入也失去焦点为止。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了进行验证，有时我们不希望在输入完毕后显示验证错误。</font><font style="vertical-align: inherit;">或者，也许我们只是不想在每次击键时都重新渲染。</font><font style="vertical-align: inherit;">现在唯一的方法是使用onBlur，但现在我们还需要检查该值是否已手动更改。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没什么大不了的，但是在我看来，React抛弃了一个有用的事件，并且在已经有一个事件可以执行时却偏离了标准行为。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意100％的评论...但是我想现在更改它会带来比解决方案更多的问题，因为已经编写了太多依赖此行为的代码（并且它也已复制到其他框架，例如</font></font><a href="https://preactjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Preact</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">） 。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React不是官方Web API集合的一部分</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管React是基于JS构建的，并且已经获得了巨大的采用率，但是作为一种技术，React存在于其自己的（相当小的）API下隐藏了很多功能。</font><font style="vertical-align: inherit;">一旦这在事件系统中很明显，那么在地下发生的事情实际上与标准DOM事件系统有很大的不同。</font><font style="vertical-align: inherit;">不仅根据哪个事件执行了什么操作，还根据何时允许数据保留在事件处理的哪个阶段。</font><font style="vertical-align: inherit;">您可以在这里阅读更多有关此的内容：</font></font></p>

<p><strong><a href="https://facebook.github.io/react/docs/events.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应事件系统</font></font></a></strong></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
