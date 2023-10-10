---
layout: question
title:  使用npm命令时SSL错误：CERT_UNTRUSTED
date:   2020-03-24T11:09:56.000Z
description: 我正在尝试使用npm命令安装Express Framework，但出现以下错误。 错误消息是 E \myFindings\nodejs_progr...
img: 
author: Pro小宇宙
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用npm命令安装Express Framework，但出现以下错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息是 </font></font></p>

<pre><code>E:\myFindings\nodejs_programs\node&gt;npm install -g express<font></font>
npm http GET https://registry.npmjs.org/express<font></font>
npm ERR! Error: SSL Error: CERT_UNTRUSTED<font></font>
npm ERR!     at ClientRequest.&lt;anonymous&gt; (C:\Program Files\nodejs\node_modules\npm\node_modules\request\main.js:409:26)<font></font>
npm ERR!     at ClientRequest.g (events.js:185:14)<font></font>
npm ERR!     at ClientRequest.EventEmitter.emit (events.js:88:17)<font></font>
npm ERR!     at HTTPParser.parserOnIncomingClient [as onIncoming] (http.js:1445:7)<font></font>
npm ERR!     at HTTPParser.parserOnHeadersComplete [as onHeadersComplete] (http.js:111:23)<font></font>
npm ERR!     at CleartextStream.socketOnData [as ondata] (http.js:1356:20)<font></font>
npm ERR!     at CleartextStream.CryptoStream._push (tls.js:396:27)<font></font>
npm ERR!     at SecurePair.cycle (tls.js:751:20)<font></font>
npm ERR!     at EncryptedStream.CryptoStream.write (tls.js:131:13)<font></font>
npm ERR!     at Socket.ondata (stream.js:38:26)<font></font>
npm ERR!  [Error: SSL Error: CERT_UNTRUSTED]<font></font>
npm ERR! You may report this log at:<font></font>
npm ERR!     &lt;http://github.com/isaacs/npm/issues&gt;<font></font>
npm ERR! or email it to:<font></font>
npm ERR!     &lt;npm-@googlegroups.com&gt;<font></font>
<font></font>
npm ERR! System Windows_NT 6.1.7601<font></font>
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "-g" "express"<font></font>
npm ERR! cwd E:\myFindings\nodejs_programs\node<font></font>
npm ERR! node -v v0.8.0<font></font>
npm ERR! npm -v 1.1.32<font></font>
npm ERR! message SSL Error: CERT_UNTRUSTED<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     E:\myFindings\nodejs_programs\node\npm-debug.log<font></font>
npm ERR! not ok code 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮我整理一下</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearHarry</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装节点，然后更新npm。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先我删除了节点</font></font></p>

<pre><code>apt-get purge node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后根据分布情况安装节点。</font><font style="vertical-align: inherit;">文档</font></font><a href="https://github.com/nodesource/distributions#debinstall" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后 </font></font></p>

<pre><code>npm install npm@latest -g
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我通过Google偶然发现了该帖子：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用</font></font><code>npm ci</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它远不止于此</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从手册中：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，使用npm install和npm ci之间的主要区别是：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该项目必须具有现有的package-lock.json或npm-shrinkwrap.json。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果程序包锁定中的依赖项与package.json中的依赖项不匹配，则npm ci将退出并显示错误，而不是更新程序包锁定。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm ci一次只能安装整个项目：不能使用此命令添加单个依赖项。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果已经存在node_modules，它将在npm ci开始安装之前自动删除。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将永远不会写入package.json或任何包锁：安装实际上是冻结的。</font></font></li>
  </ul>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>npm ERR! node -v v0.8.0<font></font>
npm ERR! npm -v 1.1.32<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新您的node.js安装。以下命令应执行此操作（从</font></font><a href="http://davidwalsh.name/upgrade-nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：好的，如果您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有充分的理由运行软件的旧版本，</font></font><code>npm set ca null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将解决此问题。</font><font style="vertical-align: inherit;">发生了，因为内置的npm证书已过期多年。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，最后我知道我的节点版本很旧。</font><font style="vertical-align: inherit;">例如，您可以通过以下步骤在Ubuntu中安装当前的活动LTS节点版本：</font></font></p>

<pre><code>sudo apt-get update<font></font>
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -<font></font>
sudo apt-get install nodejs -y<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可在以下链接中找到更多版本和系统的安装说明：</font></font></p>

<p><a href="https://github.com/nodesource/distributions/blob/master/README.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nodesource/distributions/blob/master/README.md</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我有上述错误的原因。</font><font style="vertical-align: inherit;">它是为了在客户端网络中工作而提供的公司代理（虚拟专用网络）。</font><font style="vertical-align: inherit;">没有这种连接，我经常会遇到相同的问题，无论是maven build还是npm install。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您落后于公司代理，请尝试使用公司代理的npm进行以下设置：</font></font></p>

<pre><code>npm --https-proxy=http://proxy.company.com install express -g
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下命令绕过https：</font></font></p>

<pre><code>npm config set strict-ssl false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或从https或http设置注册表URL，如下所示：</font></font></p>

<pre><code>npm config set registry="http://registry.npmjs.org/"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我个人认为绕过https不是真正的解决方案，但是我们可以将其用作解决方法。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
