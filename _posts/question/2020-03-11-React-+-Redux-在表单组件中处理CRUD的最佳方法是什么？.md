---
layout: question
title:  React + Redux-在表单组件中处理CRUD的最佳方法是什么？
date:   2020-03-11T09:55:25.000Z
description: 我得到了一种用于创建，读取，更新和删除的表单。我用相同的形式创建了3个组件，但是我给它们传递了不同的道具。我得到了CreateForm.js，ViewFo...
img: 
author: 宝儿LEY理查德
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了一种用于创建，读取，更新和删除的表单。</font><font style="vertical-align: inherit;">我用相同的形式创建了3个组件，但是我给它们传递了不同的道具。</font><font style="vertical-align: inherit;">我得到了CreateForm.js，ViewForm.js（带有删除按钮的只读）和UpdateForm.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾经使用过PHP，所以我总是以一种形式来完成这些工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用React和Redux来管理商店。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我进入CreateForm组件时，我将这些道具传递给子组件，</font></font><code>createForm={true}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使其不使用值填充输入并且不禁用它们。</font><font style="vertical-align: inherit;">在我的ViewForm组件中，我传递了props </font></font><code>readonly="readonly"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且我遇到了一个文本区域，该区域充满了一个值并且无法更新。</font></font><a href="https://stackoverflow.com/questions/33221338/react-textarea-with-value-is-readonly-but-need-to-be-updated?noredirect=1#comment54258878_33221338"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有值的React textarea是只读的，但需要更新</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有一个组件来处理表单的这些不同状态的最佳结构是什么？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有什么建议，教程，视频，演示可以分享吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第787篇《React + Redux-在表单组件中处理CRUD的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
