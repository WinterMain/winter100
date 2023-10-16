---
layout: question
title:  在Heroku上托管使用Wepback构建的量产React应用
date:   2020-06-02T01:54:15.000Z
description: 每次我按下heroku时，它只会说“未找到”。我假设是因为webpack无法运行？我尝试了各种脚本："scripts"  {  "clean" ...
img: 
author: 神乐小哥Near
category: question
answer: 1
tags: Heroku Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次我按下heroku时，它只会说“未找到”。</font><font style="vertical-align: inherit;">我假设是因为webpack无法运行？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了各种脚本：</font></font></p>

<pre><code>"scripts": {<font></font>
  "clean": "rimraf dist",<font></font>
  "build": "npm run clean &amp;&amp; NODE_ENV=production &amp;&amp; webpack -p --progress",<font></font>
  "postinstall": "npm run builds",<font></font>
  "serve": "webpack-dev-server"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个，只是没有安装后。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有postinstall的安装程序会给我一个错误，说未安装webpack（保存在我的devDependencies下）。</font><font style="vertical-align: inherit;">在第二个页面中，我在Heroku日志上获得了成功的构建，但在加载页面时显示“未找到”。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4248篇《在Heroku上托管使用Wepback构建的量产React应用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将webpack（以及Heroku上需要的任何其他依赖项）放在package.json中的“ dependencies”下，而不是“ devDependencies”下。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
