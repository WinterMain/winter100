---
layout: question
title:  npm ERR！代码UNABLE_TO_GET_ISSUER_CERT_LOCALLY
date:   2020-03-12T07:49:10.000Z
description: 我正在尝试创建反应应用程序的所有方法。我已经尝试过使用Maven，现在我正在尝试使用来自Facebook Incubators的crate-react-a...
img: 
author: 小宇宙Pro
category: question
answer: 8
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试创建反应应用程序的所有方法。</font><font style="vertical-align: inherit;">我已经尝试过使用Maven，现在我正在尝试使用来自Facebook Incubators的crate-react-app构建系统。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试</font></font><code>create-react-app my-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在npm环境中</font><font style="vertical-align: inherit;">运行该命令</font><font style="vertical-align: inherit;">时，它在我的个人系统上正常工作，没有任何问题。</font><font style="vertical-align: inherit;">但是，当我在工作环境中尝试相同的命令时，在命令提示符下遇到此错误</font></font></p>

<pre><code>npm ERR! node v6.10.2<font></font>
npm ERR! npm  v3.10.10<font></font>
npm ERR! code UNABLE_TO_GET_ISSUER_CERT_LOCALLY<font></font>
<font></font>
npm ERR! unable to get local issuer certificate<font></font>
npm ERR!<font></font>
npm ERR! If you need help, you may report this error at:<font></font>
npm ERR!     &lt;https://github.com/npm/npm/issues&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1088篇《npm ERR！代码UNABLE_TO_GET_ISSUER_CERT_LOCALLY》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试了所有解决方案之后，我可以找到：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭严格的SSL： </font></font><code>npm config set strict-ssl=false</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将注册表更改为http而不是https： </font></font><code>npm config set registry http://registry.npmjs.org/</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改我的cafile设置： </font></font><code>npm config set cafile /path/to/your/cert.pem</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">停止拒绝未知的CA： </font></font><code>set NODE_TLS_REJECT_UNAUTHORIZED=0</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在看来对我来说最有效的解决方案是使用</font></font><a href="https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_EXTRA_CA_CERTS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量，该变量扩展了现有的CA，而不是用.npmrc文件中的cafile选项替换它们。</font><font style="vertical-align: inherit;">您可以通过在终端中输入以下内容进行设置：</font></font><code>NODE_EXTRA_CA_CERTS=path/to/your/cert.pem</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，每次设置此变量都会很烦人，因此我将其添加到bash配置文件中，以便每次打开终端时都将对其进行设置。</font><font style="vertical-align: inherit;">如果您还没有</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，请创建一个。</font><font style="vertical-align: inherit;">然后在该文件的末尾添加</font></font><code>export NODE_EXTRA_CA_CERTS=path/to/your/cert.pem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，删除.npmrc中的cafile设置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码非常适合我，这里使http只代替https </font></font></p>

<pre><code>npm config set registry http://registry.npmjs.org/  
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相信我，这将为您工作： </font></font></p>

<pre><code>    npm config set registry http://registry.npmjs.org/  
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生了同样的错误。</font><font style="vertical-align: inherit;">看起来它与SSL证书有关。</font><font style="vertical-align: inherit;">如果您将NPM用于公共软件包（不需要HTTPS的安全性），则可以使用以下命令关闭严格的SSL密钥验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是想一次安装一些公开可用的软件包，这可能是最简单的修复方法。</font></font></p>

<pre><code>npm config set strict-ssl=false
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试更新npm时出现此错误，但是在AWS Linux中从yum安装了一个非常老的版本（1.3.6！）。</font><font style="vertical-align: inherit;">我能够手动安装较新的npm版本，并且一切都已得到纠正。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能发生的情况是您的公司解密了某些流量，并使用其证书（您的钥匙串或受信任的根证书中可能已经包含的证书）对其进行了重新加密</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是节点7或更高版本，我发现此修复程序与node和node-gyp兼容（对于Windows，您需要以不同的方式进行此操作，但基本上只需要添加此环境变量即可）：</font></font></p>

<p><code>export NODE_EXTRA_CA_CERTS="absolute_path_to_your_certificates.pem"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （在Windows中，您可能需要删除引号-参见注释）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pem文件可以具有多个证书：</font><a href="https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//nodejs.org/api/cli.html#cli_node_extra_ca_certs_file</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您的证书采用正确的pem格式（您需要真正的换行符而不是文字</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎无法使其与相对路径（</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）一起使用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此修复程序基本上告诉npm和node-gyp对常规CA使用检查，但是在遇到该证书时也允许此证书</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，您将能够使用系统的受信任证书，但不幸的是并非如此。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将NPM存储库URL更改为HTTP可以快速修复，但是我想使用HTTPS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我的雇主（ZScaler）的代理引起了问题（因为它充当MITM，导致了证书验证问题）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忘了我</font></font><a href="https://gist.github.com/patik/84c0cbbcb65d5b9633c3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与此</font><a href="https://gist.github.com/patik/84c0cbbcb65d5b9633c3" rel="noreferrer"><font style="vertical-align: inherit;">脚本</font></a><font style="vertical-align: inherit;">和Git一起使用</font><a href="https://gist.github.com/patik/84c0cbbcb65d5b9633c3" rel="noreferrer"><font style="vertical-align: inherit;">的脚本</font></a><font style="vertical-align: inherit;">（用于通过HTTPS克隆GitHub存储库存在相同的问题），并将其</font></font><a href="https://gist.github.com/rdundon/ceb2481aea727d50d674b7d485c72e7a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分叉供我使用</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，它对git执行以下操作：</font></font></p>

<pre><code>git config --global http.proxy http://gateway.zscaler.net:80/<font></font>
git config --system http.proxy http://gateway.zscaler.net:80/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Node，它将添加</font></font><code>proxy=http://gateway.zscaler.net:80/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>c:\Users\$USERNAME\npm\.npmrc</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那为我解决了这个问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>npm config set strict-ssl false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幸运的</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">，它</font><font style="vertical-align: inherit;">是互联网搜索的一种快速解决方案</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，作为我工作环境的一部分，我只能将strict-ssl标志设置为false。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后来我找到了一个安全有效的解决方案，</font></font></p>

<pre><code>npm config set registry http://registry.npmjs.org/  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这工作得很好，并且我</font></font><code>Happy Hacking!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有将strict-ssl标志设置为false，从而</font><font style="vertical-align: inherit;">获得了成功消息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
