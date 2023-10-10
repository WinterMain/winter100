---
layout: question
title:  如何在OS X中将NODE_ENV设置为生产/开发
date:   2020-03-18T10:17:14.000Z
description: 用于express.js环境。有什么建议么？...
img: 
author: 古一蓝染大人别太浪
category: question
answer: 9
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于express.js环境。</font><font style="vertical-align: inherit;">有什么建议么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2139篇《如何在OS X中将NODE_ENV设置为生产/开发》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>In order to have multiple environments you need all of the answers before (NODE_ENV parameter and export it), but I use a very simple approach without the need of installing anything. In your package.json just put a script for each env you need, like this:</p>

<pre><code>...<font></font>
"scripts": {<font></font>
    "start-dev": "export NODE_ENV=dev &amp;&amp; ts-node-dev --respawn --transpileOnly ./src/app.ts",<font></font>
    "start-prod": "export NODE_ENV=prod &amp;&amp; ts-node-dev --respawn --transpileOnly ./src/app.ts"<font></font>
  }<font></font>
 ...<font></font>
</code></pre>

<p>Then, to start the app instead of using <code>npm start</code> use <code>npm run script-prod</code>. </p>

<p>In the code you can access the current environment with <code>process.env.NODE_ENV</code>.</p>

<p>Voila.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Windows CMD     -&gt; <code>set NODE_ENV=production</code></p>

<p>Windows Powershell -&gt; <code>$env:NODE_ENV="production"</code></p>

<p>MAC -&gt; <code>export NODE_ENV=production</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>If you are on windows. Open your cmd at right folder then first</p>

<pre><code>set node_env={your env name here}
</code></pre>

<p>hit enter then you can start your node with</p>

<pre><code>node app.js
</code></pre>

<p>it will start with your env setting</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Daniel has a fantastic answer which is the better approach for the correct deployment (set and forget) process.</p>

<p>For those using express. 
You can use grunt-express-server which is fantastic as well.
<a href="https://www.npmjs.org/package/grunt-express-server" rel="nofollow">https://www.npmjs.org/package/grunt-express-server</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows Powershell，请使用此命令</font></font></p>

<pre><code>$env:NODE_ENV="production" ; node app.js
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙A宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不必担心您是在Windows，Mac还是Linux上运行脚本，都可以安装cross-env软件包。</font><font style="vertical-align: inherit;">然后，您可以轻松使用脚本，如下所示：</font></font></p>

<pre><code>"scripts": {<font></font>
    "start-dev": "cross-env NODE_ENV=development nodemon --exec babel-node -- src/index.js",<font></font>
    "start-prod": "cross-env NODE_ENV=production nodemon --exec babel-node -- src/index.js"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给该软件包开发人员的大量道具。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><code>export NODE_ENV=production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是错误的解决方案，重启后消失。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想再担心该变量，请将其添加到此文件中：</font></font></p>

<pre><code>/etc/environment
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用导出语法，只需写（如果已有一些内容，则换行）：</font></font></p>

<pre><code>NODE_ENV=production
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动后可以工作。</font><font style="vertical-align: inherit;">您将不再需要在</font><font style="vertical-align: inherit;">任何地方</font><font style="vertical-align: inherit;">重新输入</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">export NODE_ENV = production</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令，而只需将node与任何您想使用的东西一起使用-永远，pm2 ...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于heroku：</font></font></strong></p>

<pre><code>heroku config:set NODE_ENV="production"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这实际上是默认设置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>heroku config:set NODE_ENV="production"
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中：</font></font></p>

<pre><code>{<font></font>
  ...<font></font>
  "scripts": {<font></font>
    "start": "NODE_ENV=production node ./app"<font></font>
  }<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在终端中运行：</font></font></p>

<pre><code>npm start
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
