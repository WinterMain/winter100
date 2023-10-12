---
layout: question
title:  错误：Windows的SASS安装
date:   2020-03-19T01:50:00.000Z
description: 在安装ruby后尝试安装sass，但是iam出现以下错误，请帮助我修复此问题    maradhak\`WW730VW7X1688 /c/softwar...
img: 
author: 斯丁Sam斯丁
category: question
answer: 10
tags: 红宝石 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装ruby后尝试安装sass，但是iam出现以下错误，请帮助我修复此问题</font></font></p>

<pre><code>    maradhak@WW730VW7X1688 /c/softwares<font></font>
    $ gem -v<font></font>
    2.2.2<font></font>
<font></font>
    maradhak@WW730VW7X1688 /c/softwares<font></font>
    $ gem install sass<font></font>
    ERROR:  Could not find a valid gem 'sass' (&gt;= 0), here is why:<font></font>
              Unable to download data from https://rubygems.org/ - SSL_connect retur<font></font>
    ned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (<font></font>
    https://rubygems.org/latest_specs.4.8.gz)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2226篇《错误：Windows的SASS安装》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小Tom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从http更改为https使您的计算机容易受到黑客的攻击</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里的答案中解释了一些解决方案：</font><a href="https://stackoverflow.com/a/40075753/845413"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/40075753/845413"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/40075753/845413</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过搜索发现了此错误，并且正在</font><strong><font style="vertical-align: inherit;">OSX</font></strong><font style="vertical-align: inherit;">上使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RVM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请</font><font style="vertical-align: inherit;">运行。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>rvm osx-ssl-certs update all
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bundler在其疑难解答指南中针对该错误概述了其他一些解决方案：</font><a href="http://bundler.io/v1.16/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://bundler.io/v1.16/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//bundler.io/v1.16/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包括...</font></font></p>

<pre><code>gem install bundler<font></font>
gem update --system<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您可以简单地手动重新安装RVM或rubygems。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动安装Ruby gem：</font><a href="https://rubygems.org/pages/download" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://rubygems.org/pages/download" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//rubygems.org/pages/download</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动安装RVM（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推荐</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font><a href="http://rvm.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://rvm.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//rvm.io/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEva神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Ruby和Sass的新手。</font><font style="vertical-align: inherit;">我不想冒险冒险，而且我使用的是Windows计算机。</font><font style="vertical-align: inherit;">我已经安装了最新的ruby，但是在尝试</font></font><code>gem install sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令提示符下</font><font style="vertical-align: inherit;">运行时，始终收到与OP相同的错误消息</font><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为我解决问题的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到：</font></font><a href="https://rubygems.org/pages/download" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://rubygems.org/pages/download" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//rubygems.org/pages/download</font></a><font style="vertical-align: inherit;">并按照从此处开始的页面上的说明进行操作（用于手动安装）：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有安装任何RubyGems，仍然可以使用pre-gem方法来获取软件，并手动进行：</font></font></strong></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上方下载（上方网址）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解压缩/解压缩到目录</font></font><code>cd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中（然后将其</font><font style="vertical-align: inherit;">解压缩到目录中</font><font style="vertical-align: inherit;">）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下</font></font><code>ruby setup.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">安装：（</font><font style="vertical-align: inherit;">在命令行中键入该命令。您可能需要admin / root特权）</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装ruby gems之后，我打开了Ruby命令提示符（</font><font style="vertical-align: inherit;">从开始菜单</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Ruby的Start Command Prompt</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并运行了该命令</font></font><code>gem install sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它的工作原理是：</font></font></p>

<pre><code>C:\Users\chris&gt;gem install sass<font></font>
Fetching: sass-3.4.22.gem (100%)<font></font>
Successfully installed sass-3.4.22<font></font>
Parsing documentation for sass-3.4.22<font></font>
Installing ri documentation for sass-3.4.22<font></font>
Done installing documentation for sass after 36 seconds<font></font>
1 gem installed<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要为像我这样的其他新手尽可能地详细介绍它。</font><font style="vertical-align: inherit;">希望这对某人有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅阳光</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上安装完整的Cygwin，ssh支持很好。</font><font style="vertical-align: inherit;">您应该能够轻松安装它，我一直都很好。</font><font style="vertical-align: inherit;">实际上，一旦安装了Cygwin，就几乎不会使用命令提示符了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva千羽</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需禁用SSH或降级您的ruby版本，只需简单地手动安装SASS gem。</font><font style="vertical-align: inherit;">方法如下：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上，首先为Windows安装Ruby安装程序。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从此处下载最新版本的gem：</font></font><a href="https://rubygems.org/gems/sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
 </font><a href="https://rubygems.org/gems/sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//rubygems.org/gems/sass</font></a><font style="vertical-align: inherit;">单击最新版本，然后在屏幕右侧（在“链接”部分中）单击“下载”链接以下载原始版本。宝石文件（</font></font><code>sass-*.*.*.gem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，将下载的gem文件粘贴到安装ruby的目录中： </font></font><code>C:\Ruby22-x64\bin\sass-*.*.*.gem</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令提示符中，运行以下命令：</font></font><br>
<code>cd C:Ruby22-x64/bin</code><br>
<code>gem install sass-*.*.*.gem1</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您可能还需要</font><font style="vertical-align: inherit;">在安装gem时</font><font style="vertical-align: inherit;">调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志：</font></font><code>gem install --local C:Ruby22-x64/bin/sass-*.*.*.gem</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖TonyLEY</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一步到Rubygems（</font></font><a href="http://rubygems.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://rubygems.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后在sass（</font></font><a href="http://rubygems.org/gems/sass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://rubygems.org/gems/sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">上下载sass </font><font style="vertical-align: inherit;">：npm install</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这是一个代理问题。</font><font style="vertical-align: inherit;">当我将代理详细信息附加到gem install命令后，它就起作用了。</font></font></p>

<pre><code>gem install sass --http-proxy=http://&lt;yourproxy&gt;:&lt;port&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下对我有用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除https源临时文件，运行gem update --system，然后切换回https。</font></font></p>

<pre><code>gem sources --remove https://rubygems.org/<font></font>
gem sources --add http://rubygems.org<font></font>
gem update --system<font></font>
gem sources --remove http://rubygems.org<font></font>
gem sources --add https://rubygems.org<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://github.com/rubygems/rubygems/issues/1736" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/rubygems/rubygems/issues/1736" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/rubygems/rubygems/issues/1736</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢您的建议，就像你们所说的，这似乎是SSH更新问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将我的RUBY版本从“ 2.1.5”降级到“ 1.8”，而gem版本是“ 1.8.29”，就解决了这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我就可以安装SASS</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短答案：</font></font></p>

<pre><code>gem sources -a http://rubygems.org/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确认一下，因为您信任rubygems.org，所以您实际上并不关心该特定警告。</font><font style="vertical-align: inherit;">然后：</font></font></p>

<pre><code>gem install sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙Pro</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该错误与易受Poodle SSL错误有关，因此不会被验证。</font><font style="vertical-align: inherit;">如果有办法升级到更好的证书，但是在编写此答案时，我找不到升级的证书。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我改用了非SSL主机，尽管我应该注意这不是最好的也不是永久的解决方案，它缺乏安全性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的命令： </font></font></p>

<pre><code>gem source -a http://rubygems.org/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此主题的讨论可以在这里找到：</font><a href="https://github.com/rubygems/rubygems/issues/515#issuecomment-65326585"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/rubygems/rubygems/issues/515#issuecomment-65326585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/rubygems/rubygems/issues/515#issuecomment-65326585</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：现在似乎有一个永久性的解决方案，用适当的受保护证书代替证书。</font><font style="vertical-align: inherit;">可以在以下URL上找到，该页面中包含一个教程。
</font></font><a href="https://gist.github.com/luislavena/f064211759ee0f806c88#installing-using-update-packages-new"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/luislavena/f064211759ee0f806c88#installing-using-update-packages-new</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
