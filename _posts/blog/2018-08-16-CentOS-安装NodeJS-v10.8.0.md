---
layout: post
title:  CentOS 安装NodeJS v10.8.0
date:   2018-08-16T07:43:27.000Z
description: 1. 安装wget，如果已经安装，那可以跳过yum install -y wget使用whereis指令，查看是否已经安装# whereis wgetwge...
img: https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2705713305,753084332&fm=27&gp=0.jpg
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>1. 安装wget，如果已经安装，那可以跳过</p>

<pre>
<code>yum install -y wget</code></pre>

<p>使用whereis指令，查看是否已经安装</p>

<pre>
<code>
# whereis wget
wget: /usr/bin/wget /usr/share/man/man1/wget.1.gz
</code></pre>

<p>2.&nbsp;下载nodejs，可以前往官网查看最新版本<a href="http://nodejs.cn/download/" target="_blank">NodeJS下载</a></p>

<pre>
<code>
wget https://npm.taobao.org/mirrors/node/v10.8.0/node-v10.8.0-linux-x64.tar.xz
</code></pre>

<p>3. 解压，依次执行以下指令</p>

<pre>
<code>xz -d node-v10.8.0-linux-x64.tar.xz
tar -xf node-v10.8.0-linux-x64.tar</code></pre>

<p>4. 测试是否安装成功，进入<code>node-v10.8.0-linux-x64文件夹里，可以看到有node和npm文件</code></p>

<pre>
<code>
cd node-v10.8.0-linux-x64/bin &amp;&amp; ls
node -v
v10.1.0</code></pre>

<p><code>出现了v10.1.0说明安装成功能。</code></p>

<p><code>但是此时的node和npm还不能全局使用，我们需要做个链接，与Windows里设置环境变量是一样的道理，这里必须要使用node-v10.8.0-linux-x64的绝对路径，我的是在root文件夹下的。</code></p>

<pre>
<code>
ln -s /root/node-v10.8.0-linux-x64/bin/node /usr/bin/node
ln -s /root/node-v10.8.0-linux-x64/bin/npm /usr/bin/npm</code></pre>

<p><code>现在可以在任何目录下执行node和npm命令了。</code></p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第77篇《CentOS 安装NodeJS v10.8.0》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
