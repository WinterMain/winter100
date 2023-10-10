---
layout: question
title:  如何让Ruby on Rails输出Bootstrap v3脚手架？
date:   2020-04-07T03:42:00.000Z
description: 我希望能够在自己的项目中使用Bootstrap 3和Sass，RoR并使脚手架生成器输出Bootstrap 3HTML。我正在将Ruby 2与Rails ...
img: 
author: 西门
category: question
answer: 0
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够</font><font style="vertical-align: inherit;">在自己的</font><font style="vertical-align: inherit;">项目中</font><font style="vertical-align: inherit;">使用</font></font><code>Bootstrap 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>RoR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使脚手架生成器输出</font></font><code>Bootstrap 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML。</font><font style="vertical-align: inherit;">我正在将Ruby 2与Rails 4一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没什么花哨的-大多数只是让表单按钮具有适当的CSS类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了</font></font><a href="https://github.com/railstutorial/sample_app_rails_4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rails教程示例应用程序（第4版）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为包含</font></font><code>bootstrap-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gem的基础-但是当我使用生成器时，HTML没有适当的引导程序类-例如，按钮没有</font></font><code>btn btn-default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到，脚手架的行为与设计相符，它是基础，应进行自定义（或替换），但似乎也很容易将生成的HTML也变为“ Bootstrap Ready”</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24088/images/thumbnails/1586230793243.png" data-src="https://www.samyoc.com//uploads/users/24088/images/1586230793243.png" rel="noreferrer"><img src="https://i.stack.imgur.com/7YrOz.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个相关的问题不得不如果有人提到，编辑文件目录中的一个答案</font></font><code>lib/erb/scaffold</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样</font></font><code>edit.html.erb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-会覆盖Rails会使用脚手架默认模板。</font><font style="vertical-align: inherit;">我不反对这一点，但我希望可能已经有类似的东西了</font></font><code>gem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>I like using the <code>bootstrap-sass</code> gem and I hope that there is a solution that would be compatible with it - I'd rather use <code>scss</code> than <code>less</code></p>

<p>Seems like there should be several gems to do this.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4097篇《如何让Ruby on Rails输出Bootstrap v3脚手架？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
