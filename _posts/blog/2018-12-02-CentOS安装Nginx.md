---
layout: post
title:  CentOS安装Nginx
date:   2018-12-02T07:56:38.000Z
description: Nginx (engine x) 是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。Nginx是一款轻量级的网页服务器、反向代理服...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1543737328263.jpg
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><em>Nginx</em>&nbsp;(engine x) 是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。Nginx是一款轻量级的网页服务器、反向代理服务器。</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1543737372401.jpg" style="max-width:100%" /></p>

<p>首先先确认你的服务器中是否已经有Nginx了，使用如下指令</p>

<pre>
<code>
whereis nginx
</code></pre>

<p>如果你发现什么都没有，那说明你是没有装的，那么可以开始下面的步骤来安装了。</p>

<hr />
<p>在Centos下，yum源不提供nginx的安装，可以通过切换yum源的方法获取安装。也可以通过直接下载安装包的方法，<strong>以下命令均需root权限执行</strong>：</p>

<pre>
<code>
cd /usr/local/
wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.42.tar.gz
tar -zxvf pcre-8.42.tar.gz 
cd pcre-8.42
./configure
</code></pre>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1543735407044.png" style="max-width:100%" /></p>

<p>如果遇到了这个错误，那说明是没有安装c++ compiler。使用如下命令安装</p>

<pre>
<code>
yum install -y gcc gcc-c++
然后再执行
./configure
make
make install
</code></pre>

<h2>2.安装zlib库</h2>

<pre>
<code>
cd /usr/local/
wget http://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
./configure
make
make install
</code></pre>

<h2>3.安装ssl</h2>

<pre>
<code>
cd /usr/local/
wget http://www.openssl.org/source/openssl-1.1.0j.tar.gz
tar -zxvf openssl-1.1.0j.tar.gz
cd openssl-1.1.0j
./config
make
make install
</code></pre>

<h2>4.安装nginx</h2>

<pre>
<code>
cd /usr/local/
wget http://nginx.org/download/nginx-1.15.7.tar.gz
tar -zxvf nginx-1.15.7.tar.gz
cd nginx-1.15.7
./configure --prefix=/usr/local/nginx --with-pcre=/usr/local/pcre-8.42 --with-zlib=/usr/local/zlib-1.2.11
make
make install
</code></pre>

<h2>最后</h2>

<p>启动nginx</p>

<pre>
<code>
/usr/local/nginx/sbin/nginx
</code></pre>

<p>使用你的ip在浏览器访问。</p>

<p>如果页面出现了，如下提示那说明安装成功了</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1543737190455.png" style="max-width:100%" /></p>

<p>Nginx其他命令</p>

<pre>
<code>
重启：
$ /usr/local/nginx/sbin/nginx &ndash;s reload

停止：
$ /usr/local/nginx/sbin/nginx &ndash;s stop

测试配置文件是否正常：
$ /usr/local/nginx/sbin/nginx &ndash;t

强制关闭：
$ pkill nginx
</code></pre>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第108篇《CentOS安装Nginx》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
