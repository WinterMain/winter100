---
layout: question
title:  与NextJS和Next-CSS交互：您可能需要适当的加载器来处理此文件类型
date:   2020-03-23T01:49:43.000Z
description: 使用NextJS构建一个React-App 要使用css文件，我使用next-css plugin来做到这一点。但是当我构建我的应用程序时，出现以下错误：...
img: 
author: Green老丝
category: question
answer: 0
tags: css React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用NextJS构建一个React-App </font><font style="vertical-align: inherit;">要使用css文件，我使用</font></font><code>next-css plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来做到这一点。</font><font style="vertical-align: inherit;">但是当我构建我的应用程序时，出现以下错误：</font></font></p>

<pre><code>Module parse failed: Unexpected token (1:0)<font></font>
You may need an appropriate loader to handle this file type.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件如下所示：</font></font></p>

<pre><code>// next.config.js<font></font>
const withCSS = require('@zeit/next-css')<font></font>
module.exports = withCSS({<font></font>
  cssModules: false,<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在组件中导入并使用.css文件，如下所示：</font></font></p>

<pre><code>import '../style.css'<font></font>
export default () =&gt; &lt;div className="example"&gt;Hello World!&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的css文件看起来像这样：</font></font></p>

<pre><code>.example {<font></font>
  color: red;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题在哪里？</font><font style="vertical-align: inherit;">谁能帮我解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2621篇《与NextJS和Next-CSS交互：您可能需要适当的加载器来处理此文件类型》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
