---
layout: question
title:  Angular 6很多无法解决错误（加密，fs，http，https，net，路径，流，tls，zlib）
date:   2020-03-24T03:13:19.000Z
description: 我正在构建Angular 6应用程序，但是每次我要为localhost服务时，都会出现以下错误： ERROR in ./node_modules/aw...
img: 
author: 伽罗
category: question
answer: 6
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在构建Angular 6应用程序，但是每次我要为localhost服务时，都会出现以下错误： </font></font></p>

<pre><code>ERROR in ./node_modules/aws-sign2/index.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\aws-sign2'<font></font>
ERROR in ./node_modules/aws4/aws4.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\aws4'<font></font>
ERROR in ./node_modules/ecc-jsbn/index.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\ecc-jsbn'<font></font>
ERROR in ./node_modules/http-signature/lib/signer.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\http-signature\lib'<font></font>
ERROR in ./node_modules/http-signature/lib/verify.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\http-signature\lib'<font></font>
ERROR in ./node_modules/oauth-sign/index.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\oauth-sign'<font></font>
ERROR in ./node_modules/request/lib/oauth.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request\lib'<font></font>
ERROR in ./node_modules/request/lib/helpers.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request\lib'<font></font>
ERROR in ./node_modules/request/lib/hawk.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/signature.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/private-key.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/certificate.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/fingerprint.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/key.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/dhe.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/identity.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/utils.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/sshpk/lib/formats/pem.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib\formats'<font></font>
ERROR in ./node_modules/sshpk/lib/formats/ssh-private.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib\formats'<font></font>
ERROR in ./node_modules/sshpk/lib/formats/openssh-cert.js<font></font>
Module not found: Error: Can't resolve 'crypto' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib\formats'<font></font>
ERROR in ./node_modules/request/lib/har.js<font></font>
Module not found: Error: Can't resolve 'fs' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request\lib'<font></font>
ERROR in ./node_modules/forever-agent/index.js<font></font>
Module not found: Error: Can't resolve 'http' in 'C:\Users\sorou\projects\tunrWeb\node_modules\forever-agent'<font></font>
ERROR in ./node_modules/http-signature/lib/signer.js<font></font>
Module not found: Error: Can't resolve 'http' in 'C:\Users\sorou\projects\tunrWeb\node_modules\http-signature\lib'<font></font>
ERROR in ./node_modules/request/request.js<font></font>
Module not found: Error: Can't resolve 'http' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request'<font></font>
ERROR in ./node_modules/tunnel-agent/index.js<font></font>
Module not found: Error: Can't resolve 'http' in 'C:\Users\sorou\projects\tunrWeb\node_modules\tunnel-agent'<font></font>
ERROR in ./node_modules/forever-agent/index.js<font></font>
Module not found: Error: Can't resolve 'https' in 'C:\Users\sorou\projects\tunrWeb\node_modules\forever-agent'<font></font>
ERROR in ./node_modules/request/request.js<font></font>
Module not found: Error: Can't resolve 'https' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request'<font></font>
ERROR in ./node_modules/tunnel-agent/index.js<font></font>
Module not found: Error: Can't resolve 'https' in 'C:\Users\sorou\projects\tunrWeb\node_modules\tunnel-agent'<font></font>
ERROR in ./node_modules/forever-agent/index.js<font></font>
Module not found: Error: Can't resolve 'net' in 'C:\Users\sorou\projects\tunrWeb\node_modules\forever-agent'<font></font>
ERROR in ./node_modules/tough-cookie/lib/cookie.js<font></font>
Module not found: Error: Can't resolve 'net' in 'C:\Users\sorou\projects\tunrWeb\node_modules\tough-cookie\lib'<font></font>
ERROR in ./node_modules/tunnel-agent/index.js<font></font>
Module not found: Error: Can't resolve 'net' in 'C:\Users\sorou\projects\tunrWeb\node_modules\tunnel-agent'<font></font>
ERROR in ./node_modules/mime-types/index.js<font></font>
Module not found: Error: Can't resolve 'path' in 'C:\Users\sorou\projects\tunrWeb\node_modules\mime-types'<font></font>
ERROR in ./node_modules/assert-plus/assert.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\assert-plus'<font></font>
ERROR in ./node_modules/combined-stream/lib/combined_stream.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\combined-stream\lib'<font></font>
ERROR in ./node_modules/delayed-stream/lib/delayed_stream.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\delayed-stream\lib'<font></font>
ERROR in ./node_modules/isstream/isstream.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\isstream'<font></font>
ERROR in ./node_modules/request/request.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request'<font></font>
ERROR in ./node_modules/sshpk/lib/ed-compat.js<font></font>
Module not found: Error: Can't resolve 'stream' in 'C:\Users\sorou\projects\tunrWeb\node_modules\sshpk\lib'<font></font>
ERROR in ./node_modules/forever-agent/index.js<font></font>
Module not found: Error: Can't resolve 'tls' in 'C:\Users\sorou\projects\tunrWeb\node_modules\forever-agent'<font></font>
ERROR in ./node_modules/tunnel-agent/index.js<font></font>
Module not found: Error: Can't resolve 'tls' in 'C:\Users\sorou\projects\tunrWeb\node_modules\tunnel-agent'<font></font>
ERROR in ./node_modules/request/request.js<font></font>
Module not found: Error: Can't resolve 'zlib' in 'C:\Users\sorou\projects\tunrWeb\node_modules\request'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "tunr-web",<font></font>
  "version": "0.0.0",<font></font>
  "scripts": {<font></font>
    "ng": "ng",<font></font>
    "start": "ng serve",<font></font>
    "build": "ng build",<font></font>
    "test": "ng test",<font></font>
    "lint": "ng lint",<font></font>
    "e2e": "ng e2e"<font></font>
  },<font></font>
  "private": true,<font></font>
  "dependencies": {<font></font>
    "@angular/animations": "^6.0.7",<font></font>
    "@angular/cdk": "github:angular/cdk-builds",<font></font>
    "@angular/common": "^6.0.3",<font></font>
    "@angular/compiler": "^6.0.3",<font></font>
    "@angular/core": "^6.0.3",<font></font>
    "@angular/forms": "^6.0.3",<font></font>
    "@angular/http": "^6.0.3",<font></font>
    "@angular/material": "github:angular/material2-builds",<font></font>
    "@angular/platform-browser": "^6.0.3",<font></font>
    "@angular/platform-browser-dynamic": "^6.0.3",<font></font>
    "@angular/router": "^6.0.3",<font></font>
    "angular-svg-round-progressbar": "^2.0.0",<font></font>
    "angularfire2": "^5.0.0-rc.11",<font></font>
    "core-js": "^2.5.4",<font></font>
    "firebase": "^5.1.0",<font></font>
    "hammerjs": "^2.0.8",<font></font>
    "jquery": "^3.3.1",<font></font>
    "ng-scrollreveal": "^2.2.0",<font></font>
    "ng2-scroll-to-el": "^1.2.1",<font></font>
    "ngx-facebook": "^2.4.0",<font></font>
    "ngx-infinite-scroll": "^6.0.1",<font></font>
    "ngx-sharebuttons": "^4.1.4",<font></font>
    "rxjs": "^6.2.1",<font></font>
    "rxjs-compat": "^6.2.1",<font></font>
    "time-ago-pipe": "^1.3.2",<font></font>
    "youtube-search": "^1.1.1",<font></font>
    "zone.js": "^0.8.26"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@angular-devkit/build-angular": "~0.6.8",<font></font>
    "@angular/cli": "~6.0.8",<font></font>
    "@angular/compiler-cli": "^6.0.3",<font></font>
    "@angular/language-service": "^6.0.3",<font></font>
    "@types/jasmine": "~2.8.6",<font></font>
    "@types/jasminewd2": "~2.0.3",<font></font>
    "@types/node": "~8.9.4",<font></font>
    "@types/scrollreveal": "0.0.3",<font></font>
    "codelyzer": "~4.2.1",<font></font>
    "jasmine-core": "~2.99.1",<font></font>
    "jasmine-spec-reporter": "~4.2.1",<font></font>
    "karma": "~1.7.1",<font></font>
    "karma-chrome-launcher": "~2.2.0",<font></font>
    "karma-coverage-istanbul-reporter": "~2.0.0",<font></font>
    "karma-jasmine": "~1.1.1",<font></font>
    "karma-jasmine-html-reporter": "^0.2.2",<font></font>
    "protractor": "~5.3.0",<font></font>
    "ts-node": "~5.0.1",<font></font>
    "tslint": "~5.9.1",<font></font>
    "typescript": "~2.7.2"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道出了什么问题吗？</font><font style="vertical-align: inherit;">我的node_modules文件中没有上述模块（我可以安装其中一些，但是现在内置了'crypto'）。</font><font style="vertical-align: inherit;">如何获得这些文件夹？</font><font style="vertical-align: inherit;">它让我发疯。  </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3289篇《Angular 6很多无法解决错误（加密，fs，http，https，net，路径，流，tls，zlib）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前版本的Angular-cli不会安装某些软件包，例如zlib，而较早的版本会安装。</font><font style="vertical-align: inherit;">您可能必须手动安装一些软件包才能解决这些错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在使用最新版本的Angular CLI。</font><font style="vertical-align: inherit;">不再支持某些npm软件包。</font><font style="vertical-align: inherit;">现在，它是内置的Node模块。</font><font style="vertical-align: inherit;">如果您依赖加密，则应切换到内置密码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决加密问题，流库，请转到，</font></font></p>

<p><code>node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并进行以下更改，</font></font></p>

<pre><code>`node: {crypto: true, stream: true}`
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是作为Angular的新手遇到这个问题，而所有其他所有答案实际上都在为您提供一些不应解决的解决方法（在大多数情况下）。</font><font style="vertical-align: inherit;">实际上，您需要退后一步，认为您正在执行框架不希望执行的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，发生的事情是，我添加了对用于访问外部API服务的库的依赖，然后尝试将其导入Angular“服务”中。</font><font style="vertical-align: inherit;">我仍然对Angular还是陌生的，并且来自C＃WCF背景，因此在我看来，服务是服务器端进程。</font><font style="vertical-align: inherit;">但是，Angular中没有什么是服务器端的！</font><font style="vertical-align: inherit;">它是在浏览器中运行的严格的客户端框架。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我解决此问题的方法是意识到Angular服务需要严格地与自己的后端（而不是外部网站）进行通信，这意味着我需要单独编写自己的API。</font><font style="vertical-align: inherit;">就我而言，我要使用MEAN堆栈，因此这意味着创建一个Express.js API，该API将在后端与我与外部API通信。</font><font style="vertical-align: inherit;">这增加了一些优势，例如能够将会话数据和来自外部API的其他数据缓存到Mongo数据库中，而不是每次都需要一个新的客户端API会话，这将很快超过该站点允许的每日会话数7500一天，假设我有很多用户。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR的解决方法是删除任何进口并非用于前端工作NPM包，需要这样的包，比如</font></font><code>https</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>crypto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">本</font></font><code>fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个特殊的红旗。</font><font style="vertical-align: inherit;">我认为这意味着“文件系统”，您的前端当然不应该直接访问它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是由依赖项导入浏览器中不可用的节点模块引起的。</font><font style="vertical-align: inherit;">将出现错误的模块添加到package.json中：</font></font></p>

<pre><code>"browser": {<font></font>
    "http": false,<font></font>
    "https":false,<font></font>
    "net": false,<font></font>
    "path": false,<font></font>
    "stream": false,<font></font>
    "tls": false<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ngx-build-plus软件包-https: </font></font><a href="https://github.com/manfredsteyer/ngx-build-plus" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/manfredsteyer/ngx-build-plus-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并提供其他配置。</font><font style="vertical-align: inherit;">这样，您不必在每次安装时都手动更新节点模块文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须找到作为依赖项添加的节点程序包，这会导致此问题。</font><font style="vertical-align: inherit;">打开package-lock.json，搜索crypto可以找到依赖关系链，该依赖关系导致package.json的dependencies部分中包含包名称。</font><font style="vertical-align: inherit;">就我而言，这些库中的大多数都是通过npm软件包“ request”引入的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
