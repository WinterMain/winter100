---
layout: question
title:  如何使用Webpack导入Chart.js
date:   2020-03-19T02:13:56.000Z
description: 我有一个使用Webpack的Vue JS项目，需要导入Chart.js。我试过了// import Chart from 'chart.js/Char...
img: 
author: 十三蛋蛋
category: question
answer: 1
tags: webpack Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用Webpack的Vue JS项目，需要导入Chart.js。</font><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre><code>// import Chart from 'chart.js/Chart.min.js'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用该库时，这会导致js错误。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2262篇《如何使用Webpack导入Chart.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如</font></font><a href="https://github.com/valor-software/ng2-charts/issues/526" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题所示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您使用Angular CLI，则只需将其添加到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-cli.json中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的scripts数组中</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"../node_modules/chart.js/dist/Chart.bundle.min.js"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动您的应用程序，实时重新加载不会成功。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
