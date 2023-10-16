---
layout: question
title:  在Vue.js中处理Enter键
date:   2020-03-11T02:26:50.000Z
description: 我正在学习Vue.js。在Vue中，我有一个文本字段和一个按钮。默认情况下，当有人按下键盘上的Enter键时，此按钮将提交表单。当有人在文本字段中键入内容...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在学习Vue.js。</font><font style="vertical-align: inherit;">在Vue中，我有一个文本字段和一个按钮。</font><font style="vertical-align: inherit;">默认情况下，当有人按下键盘上的Enter键时，此按钮将提交表单。</font><font style="vertical-align: inherit;">当有人在文本字段中键入内容时，我想捕获每个按下的键。</font><font style="vertical-align: inherit;">如果键是“ @”符号，我想做一些特别的事情。</font><font style="vertical-align: inherit;">如果按下的键是“ Enter”键，那么我也想做一些特别的事情。</font><font style="vertical-align: inherit;">后者是给我挑战的人。</font><font style="vertical-align: inherit;">目前，我有这个</font></font><a href="https://jsfiddle.net/ffgvw3yr/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含以下代码：</font></font></p>

<pre><code>new Vue({<font></font>
  el: '#myApp',<font></font>
  data: {<font></font>
    emailAddress: '',<font></font>
    log: ''<font></font>
  },<font></font>
  methods: {<font></font>
    validateEmailAddress: function(e) {<font></font>
      if (e.keyCode === 13) {<font></font>
        alert('Enter was pressed');<font></font>
      } else if (e.keyCode === 50) {<font></font>
        alert('@ was pressed');<font></font>
      }      <font></font>
      this.log += e.key;<font></font>
    },<font></font>
<font></font>
    postEmailAddress: function() {<font></font>
      this.log += '\n\nPosting';<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的示例中，如果没有提交表单，我似乎无法按下“ Enter”键。</font><font style="vertical-align: inherit;">但是，我希望该</font></font><code>validateEmailAddress</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能至少先触发才能捕获它。</font><font style="vertical-align: inherit;">但是，这似乎没有发生。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第538篇《在Vue.js中处理Enter键》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此事件对我有用：</font></font></p>

<pre><code>@keyup.enter.native="onEnter".
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
