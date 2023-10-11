---
layout: question
title:  使用redux时应该使用this.setState（）吗？
date:   2020-03-12T06:36:19.000Z
description: this.setState()使用redux时应该使用吗？还是应该一直在派遣行动并依靠道具？...
img: 
author: Harry小胖古一
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>this.setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用redux时</font><font style="vertical-align: inherit;">应该</font><font style="vertical-align: inherit;">使用吗？</font><font style="vertical-align: inherit;">还是应该一直在派遣行动并依靠道具？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第996篇《使用redux时应该使用this.setState（）吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确使用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会用于具有本地显示状态但与全局应用程序无关的UI组件。</font><font style="vertical-align: inherit;">例如，表示特定下拉菜单是否处于活动状态的布尔值不需要处于全局状态，因此可以通过菜单组件的状态更方便地对其进行控制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他示例可能包括层次结构的手风琴显示中线条的折叠/展开状态。</font><font style="vertical-align: inherit;">或选项卡导航中当前选择的选项卡。</font><font style="vertical-align: inherit;">但是，在这两个示例中，您仍可能选择全局处理UI状态。</font><font style="vertical-align: inherit;">例如，如果您想将扩展/折叠状态保留在浏览器存储中，以便通过页面刷新来保存它，则将是必需的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，通常最简单的方法是使用局部状态实现此类UI元素，然后根据需要将其重构为全局状态。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
