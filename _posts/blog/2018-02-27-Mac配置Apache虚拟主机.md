---
layout: post
title:  Mac配置Apache虚拟主机
date:   2018-02-27T06:01:52.000Z
description: 当你想用自己特定的域名去访问本机的localhost，比如说是用yld.com代替localhost 80时，这个时候Apache配置虚拟主机，就可以完成这个目...
img: https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2680368986,2288920714&fm=26&gp=0.jpg
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>当你想用自己特定的域名去访问本机的localhost，比如说是用yld.com代替localhost:80时，这个时候Apache配置虚拟主机，就可以完成这个目的。</p>

<h2>首先打开虚拟hosts的引用，</h2>

<p>打开文件，/etc/apache2/httpd.conf，找到代码</p>

<pre>
<code>#Include /private/etc/apache2/extra/httpd-vhosts.conf</code></pre>

<p><strong>取消注释</strong>，将其这行前的注释符号＃去掉。</p>

<h2>编辑/etc/apache/extra/httpd-vhosts.conf文件</h2>

<p>在该文件中添加如下内容</p>

<pre>
<code>

&lt;VirtualHost *:80&gt;

    ServerAdmin webmaster@yld.com

    DocumentRoot &quot;/Users/website/Dev/yld.com&quot;

    ServerName yld.com

    ErrorLog &quot;/Users/website/Dev/yld.com/error_log&quot;

    CustomLog &quot;/Users/website/Dev/yld.com/access_log&quot; common

    &lt;Directory &quot;/Users/website/Dev/yld.com&quot;&gt;

                Options Indexes FollowSymLinks MultiViews

                AllowOverride None

                Require all granted

    &lt;/Directory&gt;

&lt;/VirtualHost&gt;

</code>
</pre>

<h2>重启Apache</h2>

<pre>
<code>sudo apachectl restart</code></pre>

<p>修改Hosts</p>

<p>我们是本地测试开发网站，所以还需要修改hosts文件，来将你的域名yld.com对应本地的IP。</p>

<p>打开文件/etc/hosts，在文件末尾加上</p>

<pre>
<code>127.0.0.1   yld.com</code>
</pre>

<p>完成后便可使用域名yld.com访问本地网站了。</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第47篇《Mac配置Apache虚拟主机》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
