---
layout: question
title:  在按Enter键后调用onChange事件
date:   2020-03-11T02:48:17.000Z
description: 我是Bootstrap的新手，并且一直遇到这个问题。我有一个输入字段，只要输入一位数字，onChange就会调用from函数，但是我希望在输入完整个数字后...
img: 
author: A梅
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Bootstrap的新手，并且一直遇到这个问题。</font><font style="vertical-align: inherit;">我有一个输入字段，只要输入一位数字，</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就会调用</font><font style="vertical-align: inherit;">from函数</font><font style="vertical-align: inherit;">，但是我希望在输入完整个数字后按“ Enter”键才能调用它。</font><font style="vertical-align: inherit;">验证功能存在相同的问题-调用时间过早。</font></font></p>

<pre><code>var inputProcent = React.CreateElement(bootstrap.Input, {type: "text",<font></font>
  //bsStyle: this.validationInputFactor(),<font></font>
  placeholder: this.initialFactor,<font></font>
  className: "input-block-level",<font></font>
  onChange: this.handleInput,<font></font>
  block: true,<font></font>
  addonBefore: '%',<font></font>
  ref:'input',<font></font>
  hasFeedback: true<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第559篇《在按Enter键后调用onChange事件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当焦点集中在窗体控件（输入）上通常会触发</font><font style="vertical-align: inherit;">窗体本身（而不是输入）上的（onSubmit）事件</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">按</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Enter键</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>submit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便可以将您</font></font><code>this.handleInput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的窗体</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">到onSubmit上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以将其绑定到</font></font><code>blur</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（onBlur）事件，该事件在</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">焦点移开时发生（例如，跳至下一个可以获得焦点的元素）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
