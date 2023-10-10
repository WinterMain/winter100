---
layout: question
title:  ElementUI中Form表单中按回车会发生提交事件， 并刷新页面
date:   2020-07-30T06:11:33.000Z
description: VUE ElementUI的Form表单问题。有一个现象是当Form表单只有一个输入框的时候，在该form表单的区域内按下回车的时候会提交表单，但是其实这个提交...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>VUE ElementUI的Form表单问题。有一个现象是当Form表单只有一个输入框的时候，在该form表单的区域内按下回车的时候会提交表单，但是其实这个提交动作，我们在项目开发的过程中，可能是不需要的。所以如何避免这个问题呢。</p><p>查了下官方文档发现。</p><p>W3C 标准中有如下<a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">规定</a>：</p><blockquote><p><i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i></p></blockquote><p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <code>&lt;el-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4265篇《ElementUI中Form表单中按回车会发生提交事件， 并刷新页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.07.30</span>
          </div>
          <div class="discuss-comment"><p>所以要解决这个问题就是在 <code>&lt;el-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
