---
layout: question
title:  如何在Node.js中创建HTTPS服务器？
date:   2020-03-18T07:26:54.000Z
description: 给定一个SSL密钥和证书，如何创建HTTPS服务？...
img: 
author: 神奇飞云
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个SSL密钥和证书，如何创建HTTPS服务？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2008篇《如何在Node.js中创建HTTPS服务器？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三StafanEva</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从此处下载用于openssl设置的rar文件：</font><a href="https://indy.fulgan.com/SSL/openssl-0.9.8r-i386-win32-rev2.zip" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://indy.fulgan.com/SSL/openssl-0.9.8r-i386-win32-rev2.zip" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//indy.fulgan.com/SSL/openssl-0.9.8r-i386-win32-rev2.zip</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将您的文件夹复制到c驱动器中即可。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建openssl.cnf文件并从以下位置下载其内容：</font></font><a href="http://web.mit.edu/crypto/openssl.cnf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http:</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
//web.mit.edu/crypto/openssl.cnf openssl.cnf可以放在任何地方，但在命令提示符下输入正确的路径时，路径应该正确。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开命令propmt并设置openssl.cnf路径C：\ set OPENSSL_CONF = d：/openssl.cnf 5.在cmd中运行此命令：C：\ openssl-0.9.8r-i386-win32-rev2&gt; openssl.exe</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行OpenSSL&gt; genrsa -des3 -out server.enc.key 1024</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将要求输入密码：输入4到11个字符作为您的证书密码</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行此Openssl&gt; req -new -key server.enc.key -out server.csr</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将询问一些详细信息，例如国家/地区代码州名称等，然后自由填写。</font><font style="vertical-align: inherit;">10。</font><font style="vertical-align: inherit;">然后运行Openssl&gt; rsa -in server.enc.key -out server.key</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行此OpenSSL&gt; x509 -req -days 365 -in server.csr -signkey server.key -out server.crt，然后使用堆栈溢出的先前代码，谢谢</font></font></li>
</ol></div>
        </div></div>
    {% endraw %}
  </div>
<div>
