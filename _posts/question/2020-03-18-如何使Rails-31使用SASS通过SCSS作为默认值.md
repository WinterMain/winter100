---
layout: question
title:  如何使Rails 3.1使用SASS（通过SCSS）作为默认值？
date:   2020-03-18T10:32:40.000Z
description: 很难弄清楚如何使SASS（而不是SCSS）成为样式表的默认样式。我试着sass_config.rb用这个文件：Sass  Plugin.optio...
img: 
author: 路易村村
category: question
answer: 4
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很难弄清楚如何使SASS（而不是SCSS）成为样式表的默认样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试着</font></font><code>sass_config.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用这个文件：</font></font></p>

<pre><code>Sass::Plugin.options[:syntax] = :sass<font></font>
Sass::Plugin.options[:style] = :compressed<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试将其添加到environment.rb文件中。</font><font style="vertical-align: inherit;">无论哪种方式，我都会收到此错误：</font></font></p>

<pre><code>.../config/environment.rb:7:in `&lt;top (required)&gt;': <font></font>
  uninitialized constant Sass::Plugin (NameError)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2155篇《如何使Rails 3.1使用SASS（通过SCSS）作为默认值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将以下内容添加到</font></font><code>config/environments/development.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>config.sass.preferred_syntax = :sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做到了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小宇宙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我绝对也喜欢sass而不是scss-您是否考虑过仅将</font></font><a href="https://github.com/chriseppstein/compass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罗盘gem</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于所有CSS，并添加</font></font><code>preferred_syntax = :sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到config / compass.rb中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有在Rails 3.1上进行过测试，但是它在3.0.7中有效</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为故障排除步骤，当您仅从sass_config.rb中删除第一行代码，使其仅包含第二行代码时，会发生什么？</font><font style="vertical-align: inherit;">这两条线都会导致错误吗？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@krainboltgreene所评论的那样，将以下行添加到 </font></font><code>config/application.rb</code></p>

<pre><code>config.generators.stylesheet_engine = :sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使得</font></font><code>sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于样式表生成的默认格式。</font><font style="vertical-align: inherit;">但是，由于Rails 3.1.beta1不支持它，因此会收到以下错误消息</font></font></p>

<pre><code>$ rails g scaffold user name:string<font></font>
...<font></font>
Could not find "scaffold.css.sass" in any of your source paths. Your current source paths are:<font></font>
.../gems/railties-3.1.0.beta1/lib/rails/generators/rails/scaffold/templates<font></font>
...<font></font>
<font></font>
$ rails g controller users<font></font>
...<font></font>
Could not find "stylesheet.css.sass" in any of your source paths. Your current source paths are: <font></font>
.../gems/railties-3.1.0.beta1/lib/rails/generators/rails/assets/templates<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，如果不中断生成器，就无法更改默认格式。</font><font style="vertical-align: inherit;">相反，您可以手动创建额外的* .css.sass文件，无论是否使用scss文件，它们都可以正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于rails 3.1.rc4，可以设置配置：</font></font></p>

<pre><code>config.sass.preferred_syntax = :sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>application.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
