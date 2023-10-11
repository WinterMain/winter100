---
layout: question
title:  找不到或不可读的导入文件：引导程序（引导程序，Rails，Sass错误）
date:   2020-03-24T09:15:06.000Z
description: 这是我的 application.css.scss/\* \*= require_self \*= require_tree . \*= require...
img: 
author: 乐
category: question
answer: 1
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>application.css.scss</code></p>

<pre><code>/*<font></font>
 *= require_self<font></font>
 *= require_tree .<font></font>
 *= require social-share-button<font></font>
 */<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用这个宝石-https: </font></font><a href="https://github.com/twbs/bootstrap-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/twbs/bootstrap-sass</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照说明，这是</font></font><code>:assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Gemfile中的小组：</font></font></p>

<pre><code>group :assets do<font></font>
  gem 'sass-rails', '~&gt; 4.0.3'<font></font>
  gem 'uglifier', '&gt;= 1.3.0'<font></font>
  gem 'coffee-rails', '~&gt; 4.0.0'<font></font>
  gem "font-awesome-rails"<font></font>
  gem 'bootstrap-sass', '~&gt; 3.2.0'<font></font>
  gem 'autoprefixer-rails'<font></font>
end<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个名为的文件</font></font><code>bootstrap_and_overrides.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">具有以下内容：</font></font></p>

<pre><code>@import "bootstrap-sprockets";<font></font>
@import "bootstrap";<font></font>
@import "bootstrap-responsive";<font></font>
@import "font-awesome";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是错误：</font></font></p>

<pre><code>Sass::SyntaxError at /<font></font>
File to import not found or unreadable: bootstrap-sprockets.<font></font>
/app/assets/stylesheets/bootstrap_and_overrides.css.scss:1)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>application.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>//= require jquery<font></font>
//= require jquery_ujs<font></font>
//= require turbolinks<font></font>
//= require bootstrap<font></font>
//= require bootstrap-sprockets<font></font>
//= require social-share-button<font></font>
//= require_tree .<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经多次重启服务器，并从隐身窗口查看了我的应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Rails 4.1.1和Ruby 2.1.1。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议么？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新1：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于它的价值，这就是我的</font></font><code>app/assets/stylesheets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样子：</font></font></p>

<pre><code>$ ls<font></font>
application.css.scss            bootstrap.css               font-awesome.min.css<font></font>
bootstrap-social.css            bootstrap.min.css           locations.css.scss<font></font>
bootstrap-theme.css         bootstrap_and_overrides.css.scss    main.css<font></font>
bootstrap-theme.min.css         font-awesome.css            posts.css.scss<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3539篇《找不到或不可读的导入文件：引导程序（引导程序，Rails，Sass错误）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚遇到同样的问题</font></font></p>

<pre><code>File to import not found or unreadable: bootstrap-sprockets
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试重新启动开发服务器并再次运行“ rails s”，它工作正常！</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
