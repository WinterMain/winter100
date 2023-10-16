---
layout: question
title:  在生产中找不到文件“ twitter / bootstrap”
date:   2020-03-24T06:18:42.000Z
description: 我正在使用Twitter的Bootstrap转换为SCSS文件。它可以在本地开发中工作，但是当我预编译并推送到Heroku（使用Cedar堆栈）时，我得到...
img: 
author: 小胖Gil
category: question
answer: 5
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Twitter的Bootstrap转换为SCSS文件。</font><font style="vertical-align: inherit;">它可以在本地开发中工作，但是当我预编译并推送到Heroku（使用Cedar堆栈）时，我得到了：</font></font></p>

<pre><code>&gt; Started GET "/" for 74.57.16.130 at 2012-01-28 17:16:36 +0000 <font></font>
&gt; Processing by StaticPagesController#home as HTML  Rendered<font></font>
&gt; static_pages/home.html.erb within layouts/application (0.7ms) <font></font>
&gt; Completed 500 Internal Server Error in 4ms<font></font>
&gt; <font></font>
&gt;  ActionView::Template::Error (couldn't find file 'twitter/bootstrap'  <font></font>
&gt; (in /app/app/assets/stylesheets/application.scss.css:11)):<font></font>
&gt;      8: &lt;/head&gt;<font></font>
&gt;      6:   &lt;%= javascript_include_tag "application" %&gt;<font></font>
&gt;      4:   &lt;title&gt;&lt;%= full_title(yield(:title)) %&gt;&lt;/title&gt;<font></font>
&gt;      2: &lt;html&gt;<font></font>
&gt;      5:   &lt;%= stylesheet_link_tag    "application", :media =&gt; "all" %&gt;        <font></font>
app/views/layouts/application.html.erb:5:in<font></font>
&gt; `_app_views_layouts_application_html_erb___288948710373692320_32137840'<font></font>
&gt;      3: &lt;head&gt;    cache: [GET /] miss<font></font>
&gt; <font></font>
&gt;      7:   &lt;%= csrf_meta_tags %&gt;  cache: [GET /favicon.ico] miss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是Rails 3.2.0，在添加SASS文件之前，该应用程序一直在Heroku上运行。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3360篇《在生产中找不到文件“ twitter / bootstrap”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将rails应用程序部署到heroku.com时看到类似这样的内容</font></font></p>

<pre><code>Precompiling assets failed, enabling runtime asset compilation<font></font>
...<font></font>
could not connect to server: Connection refused<font></font>
Is the server running on host "127.0.0.1" and accepting<font></font>
TCP/IP connections on port xxxx?<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将其添加到config / application.rb</font></font></p>

<pre><code>config.assets.initialize_on_precompile = false
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将其放入您的gemfile</font></font></p>

<pre><code>gem "twitter-bootstrap-rails", "~&gt; 2.0rc0"
</code></pre>

<p><a href="https://github.com/twitter/bootstrap/issues/1395" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BootStrap 2.0中存在无效的CSS，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会导致SCSS编译失败</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过查看输出来验证这一点 </font></font></p>

<pre><code>git push heroku master 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该看到一些错误，例如：</font></font></p>

<pre><code>-----&gt; Preparing app for Rails asset pipeline<font></font>
       Running: rake assets:precompile<font></font>
       rake aborted!<font></font>
       Invalid CSS after "...er-radius:0 \0/": expected expression (e.g. 1px, bold), was ";}"<font></font>
       (in /tmp/build_1k8ugei34dpcw/app/assets/stylesheets/application.css)<font></font>
<font></font>
       Tasks: TOP =&gt; assets:precompile:primary<font></font>
       (See full trace by running task with --trace)<font></font>
       Precompiling assets failed, enabling runtime asset compilation<font></font>
       Injecting rails31_enable_runtime_asset_compilation<font></font>
       Please see this article for troubleshooting help:<font></font>
       http://devcenter.heroku.com/articles/rails31_heroku_cedar#troubleshooting<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保在config / environments / production.rb中，您有...</font></font></p>

<pre><code>config.serve_static_assets = true
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>config/environments/production.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加此行：</font></font></p>

<p><code>config.assets.precompile = [/^[-_a-zA-Z0-9]*\..*/]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的猜测是它不会添加您的所有资产。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德神无Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在使用宝石吗？</font><font style="vertical-align: inherit;">确保您的宝石不属于资产组，并且可以在生产中访问。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从GemFile</font></font></h3>

<pre><code># Gems used only for assets and not in production environments by default.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，只需将宝石移到任何组之外，就可以了。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
