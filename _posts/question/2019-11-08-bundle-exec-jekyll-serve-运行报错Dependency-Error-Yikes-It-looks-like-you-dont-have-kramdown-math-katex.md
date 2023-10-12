---
layout: question
title:  bundle exec jekyll serve 运行报错Dependency Error  Yikes\! It looks like you don't have kramdown-math-katex
date:   2019-11-08T02:43:06.000Z
description: ​​​​​​​安装完jekyll后，运行指令bundle exec jekyll serve后报了如下错误：Dependency Error  Yike...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><br>安装完jekyll后，运行指令bundle exec jekyll serve后报了如下错误：</p><p><br>Dependency Error: Yikes! It looks like you don't have kramdown-math-katex or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. If you've run Jekyll with `bundle exec`, ensure that you have included the kramdown-math-katex gem in your Gemfile as well. The full error message from Ruby is: 'cannot load such file -- kramdown-math-katex' If you run into trouble, you can find helpful resources at https://jekyllrb.com/help/!<br>&nbsp;Conversion error: Jekyll::Converters::Markdown encountered an error while converting '_posts/2019-08-06-this-is-yld.md':<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;kramdown-math-katex<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ERROR: YOUR SITE COULD NOT BE BUILT:<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;------------------------------------<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;kramdown-math-katex<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;------------------------------------------------<br>&nbsp; &nbsp; &nbsp;Jekyll 4.0.0 &nbsp; Please append `--trace` to the `serve` command<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for any additional information or backtrace.<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;------------------------------------------------<br><br><br>&nbsp;</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1573180974925.png"><figcaption><br>&nbsp;</figcaption></figure><p>image widget</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第126篇《bundle exec jekyll serve 运行报错Dependency Error  Yikes\! It looks like you don't have kramdown-math-katex》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.11.08</span>
          </div>
          <div class="discuss-comment"><p>首先在你的项目中找到Gemfile文件，然后在代码中添加</p><p>gem&nbsp;"kramdown-math-katex"</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1573181182945.png"></figure></div>
        </div></div>
    {% endraw %}
  </div>
<div>
