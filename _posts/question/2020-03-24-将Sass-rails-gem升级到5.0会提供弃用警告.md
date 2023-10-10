---
layout: question
title:  将Sass-rails gem升级到5.0会提供弃用警告
date:   2020-03-24T09:14:25.000Z
description: 我们已升级到sass-rails版本5.0.0，并收到以下弃用警告：DEPRECATION WARNING  Extra .css in SCSS f...
img: 
author: 卡卡西
category: question
answer: 1
tags: Ruby on Rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已升级到sass-rails版本5.0.0，并收到以下弃用警告：</font></font></p>

<pre><code>DEPRECATION WARNING: Extra .css in SCSS file is unnecessary. Rename /Users/foo/Projects/foo/app/assets/stylesheets/foo.css.scss to /Users/foo/Projects/foo/app/assets/stylesheets/foo.scss. (called from _app_views_layouts_application_html_erb__1560597815210891605_70190441246060 at /Users/foo/Projects/foo/app/views/layouts/application.html.erb:13)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道这是怎么回事吗？</font><font style="vertical-align: inherit;">gem是否真的希望我从以下位置重命名所有样式表资源：</font></font></p>

<pre><code>app/assets/stylesheets/foo.css.scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至：</font></font></p>

<pre><code>app/assets/stylesheets/foo.scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来似乎违反了多年的Rails惯例。</font><font style="vertical-align: inherit;">也许有一种方法可以抑制过时警告？   </font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我处理了它：</font></font></p>

<pre><code>#!/bin/sh<font></font>
for file in $(find ./app/assets/stylesheets/ -name "*.css.scss")<font></font>
do<font></font>
    git mv $file `echo $file | sed s/\.css//`<font></font>
done<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
