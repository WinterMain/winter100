---
layout: question
title:  使用https.request忽略node.js中无效的自签名ssl证书吗？
date:   2020-03-19T01:39:18.000Z
description: 我正在开发一个登录到本地无线路由器（Linksys）的小应用程序，但是我遇到了路由器的自签名ssl证书问题。我运行wget 192.168.1.1并得...
img: 
author: 留姬
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开发一个登录到本地无线路由器（Linksys）的小应用程序，但是我遇到了路由器的自签名ssl证书问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行wget 192.168.1.1并得到：</font></font></p>

<pre><code>ERROR: cannot verify 192.168.1.1's certificate, issued by `/C=US/ST=California/L=Irvine/O=Cisco-Linksys, LLC/OU=Division/CN=Linksys/emailAddress=support@linksys.com':<font></font>
Self-signed certificate encountered.<font></font>
ERROR: certificate common name `Linksys' doesn't match requested host name `192.168.1.1'.<font></font>
To connect to 192.168.1.1 insecurely, use `--no-check-certificate'.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点中，捕获的错误是：</font></font></p>

<pre><code>{ [Error: socket hang up] code: 'ECONNRESET' }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我当前的示例代码是：</font></font></p>

<pre><code>var req = https.request({ <font></font>
    host: '192.168.1.1', <font></font>
    port: 443,<font></font>
    path: '/',<font></font>
    method: 'GET'<font></font>
<font></font>
}, function(res){<font></font>
<font></font>
    var body = [];<font></font>
    res.on('data', function(data){<font></font>
        body.push(data);<font></font>
    });<font></font>
<font></font>
    res.on('end', function(){<font></font>
        console.log( body.join('') );<font></font>
    });<font></font>
<font></font>
});<font></font>
req.end();<font></font>
<font></font>
req.on('error', function(err){<font></font>
    console.log(err);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何才能使node.js等效于“ --no-check-certificate”？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2216篇《使用https.request忽略node.js中无效的自签名ssl证书吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞A飞云</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到@Armand答案：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下环境变量：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_TLS_REJECT_UNAUTHORIZED = 0，例如导出时：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出NODE_TLS_REJECT_UNAUTHORIZED = 0（非常感谢Juanra）</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Windows上使用：</font></font></strong></p>

<pre><code>set NODE_TLS_REJECT_UNAUTHORIZED=0
</code></pre>

<p><a href="https://github.com/nodejs/node-gyp/issues/695" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢：@ weagle08</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Gil</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下环境变量：</font></font></p>

<pre><code>NODE_TLS_REJECT_UNAUTHORIZED=0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export NODE_TLS_REJECT_UNAUTHORIZED=0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（非常感谢Juanra）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">便宜又不安全的答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加</font></font></p>

<pre><code>process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码中，在调用之前 </font></font><code>https.request()</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此</font><a href="https://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100"><font style="vertical-align: inherit;">问题中</font></a><font style="vertical-align: inherit;">回答了一种更安全的方法（上述解决方案使整个节点进程不安全）</font></font><a href="https://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
