---
layout: question
title:  如何正确捕获React.js中文本输入的change / focusOut事件？
date:   2020-03-19T06:29:23.000Z
description: 我有一个表单，我想在其中处理文本输入的更改事件，但是React onChange在按下键时触发（与本机JS相反，当输入字段失焦时会触发更改事件）。有R...
img: 
author: TomL
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个表单，我想在其中处理</font><font style="vertical-align: inherit;">文本输入的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件，但是React </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onChange</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按下键时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发</font><font style="vertical-align: inherit;">（与本机JS相反，</font><font style="vertical-align: inherit;">当输入字段</font><strong><font style="vertical-align: inherit;">失焦</font></strong><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">会触发</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">）。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React的方式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来做我想要的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2392篇《如何正确捕获React.js中文本输入的change / focusOut事件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太晚了，但值得您注意的是，在浏览器级别上，focusin和focusout事件的实现存在一些差异，并且对合成onFocus和onBlur做出反应。</font><font style="vertical-align: inherit;">focusin和focusout实际上会冒泡，而onFocus和onBlur不会。</font><font style="vertical-align: inherit;">因此，到目前为止，对于reactin和focusout还没有完全相同的实现。</font><font style="vertical-align: inherit;">无论如何，大多数情况将在onFocus和onBlur中涵盖。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小小</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要小心，因为</font></font><code>onBlur</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE11有一些警告（</font></font><a href="https://stackoverflow.com/questions/41298948/how-to-use-relatedtarget-or-equivalent-in-ie"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在IE中使用relatedTarget（或同等功能？？）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https：//developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">） 。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>onFocusOut</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，在React中</font><font style="vertical-align: inherit;">没有任何方法可以使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果需要更多信息，</font><font style="vertical-align: inherit;">请参阅他们的github </font></font><a href="https://github.com/facebook/react/issues/6410" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebook/react/issues/6410</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只想在输入失去焦点时触发验证，则可以使用</font></font><a href="https://facebook.github.io/react/docs/events.html#focus-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onBlur</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
