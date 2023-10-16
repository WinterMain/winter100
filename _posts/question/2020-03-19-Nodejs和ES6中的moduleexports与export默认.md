---
layout: question
title:  Node.js和ES6中的module.exports与export默认
date:   2020-03-19T03:07:43.000Z
description: Node module.exports和ES6 之间有什么区别export default？我试图弄清楚为什么export default在Node.js...
img: 
author: 逆天Davaid
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node </font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和ES6 </font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我试图弄清楚为什么</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Node.js 6.2.2中</font><font style="vertical-align: inherit;">尝试出现“ __不是构造函数”错误</font><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么有效</font></font></h3>

<pre><code>'use strict'<font></font>
class SlimShady {<font></font>
  constructor(options) {<font></font>
    this._options = options<font></font>
  }<font></font>
<font></font>
  sayName() {<font></font>
    return 'My name is Slim Shady.'<font></font>
  }<font></font>
}<font></font>
<font></font>
// This works<font></font>
module.exports = SlimShady<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font></font></h3>

<pre><code>'use strict'<font></font>
class SlimShady {<font></font>
  constructor(options) {<font></font>
    this._options = options<font></font>
  }<font></font>
<font></font>
  sayName() {<font></font>
    return 'My name is Slim Shady.'<font></font>
  }<font></font>
}<font></font>
<font></font>
// This will cause the "SlimShady is not a constructor" error<font></font>
// if in another file I try `let marshall = new SlimShady()`<font></font>
export default SlimShady<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2283篇《Node.js和ES6中的module.exports与export默认》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要在项目中正确配置babel以使用export default和export const foo </font></font></p>

<pre><code>npm install --save-dev @babel/plugin-proposal-export-default-from
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在.babelrc中添加以下配置</font></font></p>

<pre><code>"plugins": [ <font></font>
       "@babel/plugin-proposal-export-default-from"<font></font>
      ]<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
