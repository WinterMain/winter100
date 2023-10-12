---
layout: question
title:  如何将Vue.js与Flask结合使用？
date:   2020-03-19T06:36:35.000Z
description: 我想同时使用Vue.js和Flask：Vue.js用于动态前端，而Flask用于后端。我怎样才能做到这一点？...
img: 
author: 理查德小胖Harry
category: question
answer: 1
tags: 烧瓶 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想同时使用Vue.js和Flask：Vue.js用于动态前端，而Flask用于后端。</font><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2404篇《如何将Vue.js与Flask结合使用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙小哥</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用vue-cli或Webpack时，可以简化过程。</font><font style="vertical-align: inherit;">只需创建</font></font></p>

<p><code>vue.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的Vue项目中，请参阅：</font></font><a href="https://cli.vuejs.org/config/#outputdir" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue配置</font></font></a></p>

<pre><code>module.exports = {<font></font>
    outputDir: "../dist",<font></font>
<font></font>
    // relative to outputDir<font></font>
    assetsDir: "static" <font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后配置烧瓶应用程序：</font></font></p>

<p><code>app.py</code></p>

<pre class="lang-py prettyprint-override"><code>from flask import Flask, render_template<font></font>
<font></font>
app = Flask(__name__,<font></font>
            static_folder = "./dist/static",<font></font>
            template_folder = "./dist")<font></font>
<font></font>
<font></font>
@app.route('/')<font></font>
def index():<font></font>
    return render_template("index.html")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意，在烧瓶</font></font><code>static_folder</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>template_folder</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能相同。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
