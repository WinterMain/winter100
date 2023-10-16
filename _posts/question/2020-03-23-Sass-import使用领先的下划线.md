---
layout: question
title:  Sass \`import使用领先的下划线
date:   2020-03-23T02:41:24.000Z
description: 我知道最好的做法是不使用前划线就导入SASS / SCSS局部。例如\`import 'normalize-scss/normalize'; // t...
img: 
author: 斯丁前端
category: question
answer: 1
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道最好的做法是不使用前划线就导入SASS / SCSS局部。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>@import 'normalize-scss/normalize'; <font></font>
// this imports ./normalize-scss/_normalize.scss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对书呆子完整性的问题是，如果使用下划线导入文件，会产生任何后果吗？</font></font></p>

<pre><code>@import 'normalize-scss/_normalize';
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2672篇《Sass \`import使用领先的下划线》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>If you add an underscore to the start of the file name, Sass won’t compile it. So, if you don’t want <code>colors.scss</code> to compile to <code>colors.css</code>, name the file <code>_colors.scss</code> instead. Files named this way are called partials in Sass terminology. </p>

<p>More about import feature in Sass you can find <a href="https://kolosek.com/sass-import/" rel="noreferrer">here</a> </p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
