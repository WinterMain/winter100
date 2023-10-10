---
layout: question
title:  从iojs升级到Nodejs v4.4.4后，自签名SSL不起作用
date:   2020-04-07T03:55:29.000Z
description: 我在应用程序中使用iojs和koa，最近我决定将iojs更新为nodejs v4.4.4。更新非常顺利，我的应用程序立即运行。问题是我在开发机器上使用了自...
img: 
author: Itachi
category: question
answer: 4
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在应用程序中使用iojs和koa，最近我决定将iojs更新为nodejs v4.4.4。</font><font style="vertical-align: inherit;">更新非常顺利，我的应用程序立即运行。</font><font style="vertical-align: inherit;">问题是我在开发机器上使用了自签名SSL证书，更新到nodejs后，当我尝试访问网站时收到以下消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该网站无法提供安全的连接 </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地主机使用不受支持的协议。 </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ERR_SSL_VERSION_OR_CIPHER_MISMATCH </font></font></p>
  
  <p>The client and server don't support a common SSL protocol version or
  cipher suite. This is likely to be caused when the server needs RC4,
  which is no longer considered secure.</p>
</blockquote>

<p>I am using <code>nvm</code> so I tried switching to iojs and the website was working again.</p>

<p>After some reading I found out that I have to update the <code>openssl</code> to version <code>1.0.2g</code> instead of the <code>1.0.1g</code> that I used to create the <code>.key</code> and <code>.crt</code> files. So I updated <code>openssl</code> and generated new key and certificate files like this:</p>

<p><code>sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt</code></p>

<p>Sadly this did not resolve the issue.</p>

<p>This is the code that I use to setup the https on the server:</p>

<pre><code>let sslOptions = {<font></font>
            key: fs.readFileSync('/etc/apache2/ssl/apache.key'),<font></font>
            cert: fs.readFileSync('/etc/apache2/ssl/apache.crt')<font></font>
                 };<font></font>
<font></font>
let server = require('https').createServer(sslOptions, app.callback())<font></font>
</code></pre>

<p>Am I doing something wrong? Why does it work with iojs and does not work with nodejs?</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4142篇《从iojs升级到Nodejs v4.4.4后，自签名SSL不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的回答！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我所怀疑的那样，问题出在与openssl无关的东西上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序中，我有一个</font></font><code>config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有应用程序配置</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">在其中，我正在读取证书文件，并将其添加到javascript对象中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，我正在使用该</font></font><code>lodash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块合并2个javascript对象（其中一个包含证书文件）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是</font></font><code>lodash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">的旧版本，</font><font style="vertical-align: inherit;">看来它使用</font></font><code>Buffer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来合并文件。</font><font style="vertical-align: inherit;">该</font></font><code>Buffer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本中的</font></font><code>Buffer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现与新</font></font><code>Node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本</font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">实现</font><font style="vertical-align: inherit;">不匹配</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这导致证书文件的错误合并，并导致</font></font><code>ERR_SSL_VERSION_OR_CIPHER_MISMATCH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长话短说，将</font></font><code>lodash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">到最新版本后，证书开始按预期工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是NodeJS专家。</font><font style="vertical-align: inherit;">但是似乎您需要在节点服务器上禁用RC4。</font><font style="vertical-align: inherit;">我认为这就是问题所在。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将有一个信任库（密钥库）文件，其中需要注册所有受信任的证书。</font><font style="vertical-align: inherit;">您将必须在此注册此新创建的证书。</font><font style="vertical-align: inherit;">客户端使用该信任库文件来检查证书是否可以信任。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，您可以从以下链接获取参考：-</font></font></p>

<p><a href="http://blogs.techcushions.com/2016/12/creating-self-signed-certificates.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建自签名证书（openssl和keytool）</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据错误消息判断，自签名证书没有问题。</font><font style="vertical-align: inherit;">但是提供ssl连接的“服务器”不支持协议版本和密码套件的适当组合。</font></font></p>

<pre><code>openssl s_client -connect localhost:443
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更详细 </font></font></p>

<pre><code>openssl s_client -connect localhost:443 -debug
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会告诉您ssl握手期间出了什么问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以找出称为sslscan的工具提供了哪些组合</font></font></p>

<pre><code>apt-get install sslscan<font></font>
sslscan localhost:443<font></font>
sslscan localhost:443 | grep Accepted<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您将需要通过提供更多ssloptions配置您的https服务器提供的密码套件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这里</font></font><a href="https://certsimple.com/blog/a-plus-node-js-ssl" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://certsimple.com/blog/a-plus-node-js-ssl</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
