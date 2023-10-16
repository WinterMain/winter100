---
layout: question
title:  如何在Sass中使用Ruby / Rails变量？
date:   2020-03-24T01:54:50.000Z
description: 有没有办法在Sass文件中使用我的Ruby应用程序中的变量？...
img: 
author: 小小乐
category: question
answer: 1
tags: 的Ruby-on-轨道 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法在Sass文件中使用我的Ruby应用程序中的变量？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3184篇《如何在Sass中使用Ruby / Rails变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在.sass文件中添加.erb扩展名，然后像在常规.erb文件中一样添加变量：</font></font></p>

<pre><code>&lt;%= APP_CONFIG[:yourkey] %&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息：</font></font></p>

<ul>
<li><a href="http://guides.rubyonrails.org/asset_pipeline.html#preprocessing"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://guides.rubyonrails.org/asset_pipeline.html#preprocessing</font></font></a></li>
<li><a href="http://guides.rubyonrails.org/asset_pipeline.html#coding-links-to-assets"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://guides.rubyonrails.org/asset_pipeline.html#coding-links-to-assets</font></font></a></li>
<li><a href="http://rwilcox.tumblr.com/post/9038701675/sass-variables-and-the-rails-3-1-asset-pipeline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://rwilcox.tumblr.com/post/9038701675/sass-variables-and-the-rails-3-1-asset-pipeline</font></font></a></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
