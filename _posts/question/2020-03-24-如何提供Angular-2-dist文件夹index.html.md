---
layout: question
title:  如何提供Angular 2 dist文件夹index.html
date:   2020-03-24T10:27:21.000Z
description: 我正在使用这个有角度的4种子应用程序：https   //github.com/2sic/app-tutorial-angular4-hello-dnn...
img: 
author: 卡卡西
category: question
answer: 8
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用这个有角度的4种子应用程序：</font><a href="https://github.com/2sic/app-tutorial-angular4-hello-dnn" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/2sic/app-tutorial-angular4-hello-dnn" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/2sic/app-tutorial-angular4-hello-dnn</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用webpack并正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎只提供dev文件，而不提供dist /文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想提供dist文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不确定执行此操作的命令或我是否需要安装精简服务器或其他工具。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行以下命令来创建dist文件夹（工作正常）：</font></font></strong></p>

<pre><code>g build --prod --aot --output-hashing=none
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想在浏览器中运行此构建。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3652篇《如何提供Angular 2 dist文件夹index.html》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>I use the VS Code extension <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" rel="nofollow noreferrer">Live Server</a>.</p>

<ol>
<li>Run your <code>ng build</code> which will output the <code>dist/</code> folder with <code>index.html</code></li>
<li>Open separate instance of VS Code onto the <code>dist/</code> folder</li>
<li>Press "Go Live" button in bottom right of VS Code status bar <a href="https://i.stack.imgur.com/4cjal.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/4cjal.png" alt="在此处输入图片说明"></a> which you will see after installing the Live Server extension.</li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试通过全局安装http服务器 </font></font></p>

<pre><code>npm install -g http-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后移到dist / project-folder并尝试</font></font></p>

<pre><code>http-server -o
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台输出</font></font></p>

<pre><code>[Fri Sep 13 2019 15:19:57 GMT+0530 (India Standard Time)] "GET /" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132<font></font>
Safari/537.36"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，此解决方案使用了所有相同的步骤，但没有使用http-server try </font></font><code>angular-http-server</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为我工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将正常运行，并且不需要事先构建。</font><font style="vertical-align: inherit;">它在内存中生成文件，并具有一些其他功能，例如自动重新加载。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少对于Angular应用程序来说，这</font></font><code>angular-http-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎是一个更好的选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先使用您喜欢的软件包管理器进行安装，例如</font></font></p>

<pre><code>npm install angular-http-server -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>yarn global add angular-http-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行它：</font></font></p>

<pre><code>angular-http-server --path path/to/dist/folder
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/simonh1000/angular-http-server" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回购</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取有关用法的更多信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：作者认为，它还应与其他SPA框架（React，Vue等）一起使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一点提示 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你避免全局安装</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装在您的根目录</font></font></p>

<pre><code>npm i http-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的package.json中</font></font></p>

<pre><code>"scripts": {<font></font>
    "pwa": "http-server ./dist"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比</font></font></p>

<pre><code>npm run pwa 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要一个服务器来服务您生成的构建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用http服务器。</font><font style="vertical-align: inherit;">使用以下命令安装http-server：</font></font></p>

<pre><code>npm install -g http-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在进入dist文件夹并运行此命令</font></font></p>

<pre><code>http-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<p><a href="https://i.stack.imgur.com/RQT9J.png" rel="noreferrer"><img src="https://i.stack.imgur.com/RQT9J.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">检查</font></font><a href="http://localhost:8080" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：8080</font></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Angular CLI为dist文件夹提供服务...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng serve --prod = true</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果为true，则将构建配置设置为生产目标。</font><font style="vertical-align: inherit;">所有建筑都利用捆绑和有限的摇树。</font><font style="vertical-align: inherit;">生产版本还可以消除有限的死代码。</font></font></p>
</blockquote>

<p><a href="https://angular.io/cli/serve" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://angular.io/cli/serve</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用http-server这样做。</font><font style="vertical-align: inherit;">首先使用命令生成一个构建</font></font><code>ng build --prod --aot --output-hashing=none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将在目录结构中创建一个dist文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，运行</font></font><code>http-server ./dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将开始从dist文件夹提供您的项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保使用以下命令全局安装了http-server </font></font></p>

<pre><code>npm install http-server -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关参考，请参见</font></font><a href="https://www.npmjs.com/package/http-server" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/http-server</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
