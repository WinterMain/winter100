---
layout: question
title:  Chrome扩展程序中的Vue.js
date:   2020-03-12T02:29:53.000Z
description: Chrome扩展程序中的Vue.js嗨！我正在尝试使用Vue.js制作Chrome扩展程序，但是当我写<input v-model="email"...
img: 
author: 小胖Gil
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome扩展程序中的Vue.js</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨！</font><font style="vertical-align: inherit;">我正在尝试使用Vue.js制作Chrome扩展程序，但是当我写</font></font></p>

<pre><code>&lt;input v-model="email" type="email" class="form-control" placeholder="Email"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome删除了代码的v-model-part并使其</font></font></p>

<pre><code>&lt;input type="email" class="form-control" placeholder="Email"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有办法防止这种情况吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第892篇《Chrome扩展程序中的Vue.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐LEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有csp版本（Vue.js v1）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符合CSP的版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些环境（例如Google Chrome Apps）强制执行内容安全策略（CSP），并且不允许使用新的Function（）来评估表达式。</font><font style="vertical-align: inherit;">在这些情况下，您可以改用符合CSP的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Vue.js v1）</font></font><a href="http://v1.vuejs.org/guide/installation.html#CSP-compliant-build" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://v1.vuejs.org/guide/installation.html#CSP-compatible-build</font></font></a></p>

<pre><code>npm install vue@csp --save<font></font>
<font></font>
"dependencies": {<font></font>
  "vue": "1.0.26-csp"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本（Vue.js v2）</font></font><a href="https://vuejs.org/v2/guide/installation.html#CSP-environments" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuejs.org/v2/guide/installation.html#CSP-environments</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些环境（例如Google Chrome Apps）强制执行内容安全政策（CSP），该政策禁止使用新的Function（）来评估表达式。</font><font style="vertical-align: inherit;">独立构建依赖于此功能来编译模板，因此在这些环境中不可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是有一个解决方案。</font><font style="vertical-align: inherit;">在具有Webpack + vue-loader或Browserify + vueify的构建系统中使用Vue时，您的模板将被预编译为渲染功能，这些功能可以在CSP环境中完美运行。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
