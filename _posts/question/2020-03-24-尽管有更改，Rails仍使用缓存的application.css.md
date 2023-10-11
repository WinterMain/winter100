---
layout: question
title:  尽管有更改，Rails仍使用缓存的application.css
date:   2020-03-24T03:01:49.000Z
description: 我有一个使用SASS的Rails 3.1应用程序。该application.css.scss文件如下所示：\`import 'reset.css';\`...
img: 
author: 西里神奇
category: question
answer: 4
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用SASS的Rails 3.1应用程序。</font><font style="vertical-align: inherit;">该</font></font><code>application.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件如下所示：</font></font></p>

<pre><code>@import 'reset.css';<font></font>
@import '960.css';<font></font>
@import 'pages/master.css.scss';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个监视脚本，</font></font><code>application.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要更改@imported文件之一，</font><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">就会</font><font style="vertical-align: inherit;">触动</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一阵子，这种设置工作正常。</font><font style="vertical-align: inherit;">自上周以来（我不确定为什么），Rails一直在</font></font><code>application.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为网页</font><font style="vertical-align: inherit;">提取缓存版本，</font><font style="vertical-align: inherit;">尽管我曾尝试重新启动应用程序，进行润饰</font></font><code>application.css.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等。我也删除</font></font><code>.sass-cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3268篇《尽管有更改，Rails仍使用缓存的application.css》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随机我遇到了与使用Twitter Bootstrap和application.css.scss有关的缓存问题。</font><font style="vertical-align: inherit;">基本上，我将application.css.scss更改为普通的application.css并解决了我的问题。</font><font style="vertical-align: inherit;">也许这可以帮助您？</font><font style="vertical-align: inherit;">如果您还没有弄清楚。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要清除资产管道缓存，只需使用rm -rf tmp / *即可。</font><font style="vertical-align: inherit;">在我的经验中，这当然已经解决了一些原本无法解释的CSS和JavaScript故障。</font><font style="vertical-align: inherit;">作为预防措施，在升级gem或更改资产管道配置后清除缓存也可能是一个好主意，尽管这可能只是迷信。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，如果您正在开发环境中试验rake asset：precompile（在后面的文章中对此有更多介绍），则还需要在以后对rm -rf public / assets / *进行清理。</font></font></p>
</blockquote>

<p><a href="http://blog.55minutes.com/2012/02/untangling-the-rails-asset-pipeline-part-1-caches-and-compass/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.55minutes.com/2012/02/untangling-the-rails-asset-pipeline-part-1-caches-and-compass/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到过同样的问题。</font><font style="vertical-align: inherit;">我停止了服务器，执行了</font></font><code>rm -fr tmp/cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的css文件终于被重建了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYMandyStafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>rake assets:precompile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发中</font><font style="vertical-align: inherit;">运行后，我遇到了类似的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也许Rails正在从中提供预编译资产</font></font><code>public/assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">尝试清理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需在开发中接触aplication.css.scss，只要@included文件之一发生更改，rails就应提供新内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请确保您在 </font></font><code>config/environments/development.rb</code></p>

<pre><code># Do not compress assets<font></font>
config.assets.compress = false<font></font>
<font></font>
# Expands the lines which load the assets<font></font>
config.assets.debug = true<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
