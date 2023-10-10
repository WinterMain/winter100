---
layout: question
title:  webpack：同一模块中的import + module.exports导致错误
date:   2020-03-24T07:35:22.000Z
description: 我正在使用webpack开发一个网站。当我有这样的代码时：import $ from 'jquery';function foo() {};mod...
img: 
author: 神乐凯神无
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack开发一个网站。</font><font style="vertical-align: inherit;">当我有这样的代码时：</font></font></p>

<pre><code>import $ from 'jquery';<font></font>
function foo() {};<font></font>
module.exports = foo;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我弄错了</font></font><code>Uncaught TypeError: Cannot assign to read only property 'exports' of object '#&lt;Object&gt;'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实证明，改变</font></font><code>import $ from 'jquery'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>var $ = require('jquery')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不行导致任何错误。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么使用module.exports导入会导致此错误？</font><font style="vertical-align: inherit;">使用require代替有什么问题吗？</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3453篇《webpack：同一模块中的import + module.exports导致错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你不能混用</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">世界上，您需要导出东西。</font></font></p>

<pre><code>// Change this<font></font>
module.exports = foo;<font></font>
<font></font>
// To this<font></font>
export default foo;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
