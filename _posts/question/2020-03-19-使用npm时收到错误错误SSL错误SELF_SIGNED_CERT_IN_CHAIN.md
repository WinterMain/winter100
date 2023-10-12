---
layout: question
title:  使用npm时收到错误：“错误：SSL错误：SELF_SIGNED_CERT_IN_CHAIN”
date:   2020-03-19T03:09:56.000Z
description: 我在ubuntu上使用npm v1.0.104 / node 0.6.12-我在尝试通过npm安装任何新模块时收到以下复制的错误（我之前使用http而不是...
img: 
author: Stafan阿飞
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在ubuntu上使用npm v1.0.104 / node 0.6.12-我在尝试通过npm安装任何新模块时收到以下复制的错误（我之前使用http而不是https测试了socket.io，但我想知道是否可以导致npm / unsigned证书出现问题）。</font><font style="vertical-align: inherit;">一旦npm尝试解析“ </font></font><a href="https://registry.npmjs.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://registry.npmjs.org</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ” URL，</font><font style="vertical-align: inherit;">该错误就会弹出</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">无论如何，我可以忽略该错误，或​​者定位/将证书添加到受信任的存储中以便继续使用npm。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于解决该问题需要采取的措施的任何见解将不胜感激（我更愿意通过配置解决问题，而不是尽可能重新安装）。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：“错误：SSL错误：SELF_SIGNED_CERT_IN_CHAIN”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整讯息：</font></font></p>

<pre><code>npm ERR! Error: SSL Error: SELF_SIGNED_CERT_IN_CHAIN<font></font>
npm ERR!     at ClientRequest.&lt;anonymous&gt; (/usr/lib/node_modules/npm/node_modules/request/main.js:252:28)<font></font>
npm ERR!     at ClientRequest.emit (events.js:67:17)<font></font>
npm ERR!     at HTTPParser.onIncoming (http.js:1261:11)<font></font>
npm ERR!     at HTTPParser.onHeadersComplete (http.js:102:31)<font></font>
npm ERR!     at CleartextStream.ondata (http.js:1150:24)<font></font>
npm ERR!     at CleartextStream._push (tls.js:375:27)<font></font>
npm ERR!     at SecurePair.cycle (tls.js:734:20)<font></font>
npm ERR!     at EncryptedStream.write (tls.js:130:13)<font></font>
npm ERR!     at Socket.ondata (stream.js:38:26)<font></font>
npm ERR!     at Socket.emit (events.js:67:17)<font></font>
npm ERR! Report this *entire* log at:<font></font>
npm ERR!     &lt;http://github.com/isaacs/npm/issues&gt;<font></font>
npm ERR! or email it to:<font></font>
npm ERR!     &lt;npm-@googlegroups.com&gt;<font></font>
npm ERR! <font></font>
npm ERR! System Linux 2.6.38-13-generic<font></font>
npm ERR! command "node" "/usr/bin/npm" "install" "jed"<font></font>
npm ERR! node -v v0.6.12<font></font>
npm ERR! npm -v 1.0.104<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2286篇《使用npm时收到错误：“错误：SSL错误：SELF_SIGNED_CERT_IN_CHAIN”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYStafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭SSL似乎是一个非常糟糕的主意。</font></font><a href="http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm的博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释说，他们不再支持其自签名证书。</font><font style="vertical-align: inherit;">他们建议通过升级npm </font></font><code>npm install npm -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我当然也遇到了同样的SELF_SIGNED_CERT_IN_CHAIN错误。</font><font style="vertical-align: inherit;">因此，我只是更新了节点，它同时更新了npm。</font><font style="vertical-align: inherit;">确切过程取决于首先安装节点的方式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐西里</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速干净的解决方案（已通过linux测试）（2014年2月27日生效）</font></font></strong></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载npm</font></font></strong></p>

<pre><code>npm rm npm -g
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（新的URL是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">www.npmjs.org</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmjs.org</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>curl https://www.npmjs.org/install.sh | sh
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如何在Linux中安装node.js </font></font><a href="https://stackoverflow.com/a/22099363/333061"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/22099363/333061</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载NPM，然后重新安装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自2014年2月27日起，npm不再支持其自签名证书。
</font></font><a href="http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的链接建议使用NPM升级NPM。</font><font style="vertical-align: inherit;">这也会因SELF_SIGNED_CERT_IN_CHAIN而失败...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GONear</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储库不再支持自签名证书。</font><font style="vertical-align: inherit;">您需要升级</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>// Disable the certificate temporarily in order to do the upgrade<font></font>
npm config set ca ""<font></font>
<font></font>
// Upgrade npm. -g (global) means you need root permissions; be root <font></font>
// or prepend `sudo`<font></font>
sudo npm install npm -g<font></font>
<font></font>
// Undo the previous config change<font></font>
npm config delete ca<font></font>
<font></font>
// For Ubuntu/Debian-sid/Mint, node package is renamed to nodejs which <font></font>
// npm cannot find. Fix this:<font></font>
sudo ln -s /usr/bin/nodejs /usr/bin/node<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要打开一个新的终端会话才能使用更新的</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这最初是对</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jnylen</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案</font><font style="vertical-align: inherit;">的编辑</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管指南中说</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“我们欢迎所有有建设性的修改，但请对其进行实质性的修改”，但</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“此修改在原始帖子中的更改太大；该帖子的原始含义或意图会丢失” </font></font></em><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">，因此</font></em><font style="vertical-align: inherit;">该编辑被拒绝</font><em><font style="vertical-align: inherit;">。</font></em><font style="vertical-align: inherit;">我想社区更喜欢一个单独的答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mac</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上存在相同问题并通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">homebrew</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装npm的用户</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>brew uninstall npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font></p>

<pre><code>brew install npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在osx（10.9.1）上为我工作</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您可能需要</font></font><code>brew update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装npm之前。</font><font style="vertical-align: inherit;">您也可以</font></font><code>brew upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更新自制软件后</font><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">。</font></font><code>brew doctor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您遇到其他任何问题，</font><font style="vertical-align: inherit;">也可能会有所帮助</font><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其放在命令之前似乎可行</font></font><code>NODE_TLS_REJECT_UNAUTHORIZED=0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font><code>NODE_TLS_REJECT_UNAUTHORIZED=0 npm ...</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好弄清楚如何使节点将自签名证书视为有效。</font><font style="vertical-align: inherit;">出于某些原因，上面的strict-ssl建议对我不起作用。</font><font style="vertical-align: inherit;">如果您了解安全隐患并且需要临时快速修复，这就是我</font><font style="vertical-align: inherit;">在Google搜索错误期间的</font><font style="vertical-align: inherit;">一些</font></font><a href="https://github.com/apigee/microgateway-core/issues/9#issuecomment-248728735" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随机github问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">发现</font><font style="vertical-align: inherit;">的内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小胖</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要升级npm。</font></font></p>

<pre><code>// Do this first, or the upgrade will fail<font></font>
npm config set ca ""<font></font>
<font></font>
npm install npm -g<font></font>
<font></font>
// Undo the previous config change<font></font>
npm config delete ca<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要为这些命令加上前缀</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下命令有助于解决此问题：</font></font></p>

<pre><code>npm config set strict-ssl false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前无法评论它是否会引起任何其他问题。</font><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门前端A</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>npm config set strict-ssl false -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局保存 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我只是将注册表URL从https切换为http。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>npm config set registry="http://registry.npmjs.org/"
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
