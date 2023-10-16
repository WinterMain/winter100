---
layout: question
title:  bundle exec jekyll serve运行报错
date:   2019-11-19T03:27:07.000Z
description: -bash  /usr/local/bin/bundle  /System/Library/Frameworks/Ruby.framework/Versions...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>-bash: /usr/local/bin/bundle: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby: bad interpreter: No such file or directory<br>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1574134025421.png"></figure></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第127篇《bundle exec jekyll serve运行报错》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.11.19</span>
          </div>
          <div class="discuss-comment"><p>在你的shell的配置加入或直接执行：export PATH=/usr/local/opt/ruby/bin:$PATH</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
