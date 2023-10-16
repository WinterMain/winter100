---
layout: question
title:  pm2是否可以运行“ npm start”脚本
date:   2020-03-24T01:52:01.000Z
description: pm2是否可以运行npm start脚本，还是只需要运行 pm2 start app.js所以在发展中 npm start然后在pm2的生产环...
img: 
author: Mandy
category: question
answer: 14
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pm2是否可以运行npm start脚本，还是只需要运行 </font></font><code>pm2 start app.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以在发展中 </font></font></p>

<p><code>npm start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在pm2的生产环境中运行类似</font></font></p>

<p><code>pm2 start 'npm start'</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种等效的方法可以永远做到这一点</font></font></p>

<p><code>forever start -c "npm start" ./</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3180篇《pm2是否可以运行“ npm start”脚本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以在以下时间使用：</font></font></p>

<pre><code>pm2 start npm -- start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟着</font></font><a href="https://github.com/Unitech/pm2/issues/1317#issuecomment-220955319" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Unitech/pm2/issues/1317#issuecomment-220955319</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CentOS 7上运行正常</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PM2版本4.2.1</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们采取两种情况：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1. npm start</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> //server.js</font></font></p>

<pre><code>pm2 start "npm -- start" --name myMainFile
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2. npm运行main</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> //main.js</font></font></p>

<pre><code>pm2 start "npm -- run main" --name myMainFile
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在pm2中的应用程序上运行特定的npm脚本（对于每个环境），就我而言，这是我创建登台/测试服务的时间 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的命令（必须以这种方式转发args）：</font></font></p>

<pre><code>pm2 start npm --name "my-app-name" -- run "npm:script"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：</font></font></p>

<pre><code>pm2 start npm --name "myApp" -- run "start:test"<font></font>
<font></font>
pm2 start npm --name "myApp" -- run "start:staging"<font></font>
<font></font>
pm2 start npm --name "myApp" -- run "start:production"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能有所帮助</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始之前不要忘记空间</font></font></p>

<pre><code>pm2 start npm --[space]start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以正确的命令是：</font></font></p>

<pre><code>pm2 start npm -- start
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>pm2 start npm --name "custom_pm2_name" -- run prod</code></p>

<pre><code>"scripts": {<font></font>
    "prod": "nodemon --exec babel-node ./src/index.js"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人没有的时候这对我有用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，似乎pm2不支持您请求的确切功能</font></font><a href="https://github.com/Unitech/PM2/issues/1317" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Unitech/PM2/issues/1317</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的替代方案是使用</font></font><code>ecosystem.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件“ </font></font><a href="https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#getting-started-with-deployment" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部署入门”，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中可能包括生产和开发环境的设置。</font><font style="vertical-align: inherit;">但是，这仍</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于引导您的应用程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>pm2 start ./bin/www
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以跑步</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想部署多个服务器，则可以这样做。</font><font style="vertical-align: inherit;">代替pm2 start npm-开始</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅启用集群：</font></font></p>

<pre><code>pm2 start npm --name "AppName" -i 0 -- run start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你怎么看？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋神乐L</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PM2现在支持npm start：</font></font></p>

<pre><code>pm2 start npm -- start
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，我们可以，现在pm2支持npm start，--name到种类应用程序名称。</font></font></p>

<pre><code>pm2 start npm --name "app" -- start
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">使用</font></font><code>pm2 start npm --no-automation --name {app name} -- run {script name}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有用。</font><font style="vertical-align: inherit;">该</font></font><code>--no-automation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志存在</font></font><a href="https://github.com/Unitech/pm2/issues/1934" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是因为没有它，PM2崩溃时将不会重新启动您的应用程序。</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 </font></font><code>npm run</code></p>

<p><code>pm2 start npm --name "{app_name}" -- run {script_name}</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用诸如</font></font><code>.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件之</font><font style="vertical-align: inherit;">类的配置脚本</font><font style="vertical-align: inherit;">来运行pm2进程的用户可以使用</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何其他类似这样的脚本-</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-app-pm2.json</font></font></strong></p>

<pre><code>{<font></font>
    "apps": [<font></font>
        {<font></font>
            "name": "my-app",<font></font>
            "script": "npm",<font></font>
            "args" : "start"<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后简单地- </font></font></p>

<pre><code>pm2 start my-app-pm2.json
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -要处理用例，当您在父目录中拥有此配置脚本并想要在子目录中启动应用程序时，请使用</font></font><code>cwd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们的应用程序位于</font></font><code>nested-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相对于此配置文件</font><font style="vertical-align: inherit;">的子目录中</font><font style="vertical-align: inherit;">，则-  </font></font></p>

<pre><code>{<font></font>
    "apps": [<font></font>
        {<font></font>
            "name": "my-nested-app",<font></font>
            "cwd": "./nested-app",<font></font>
            "script": "npm",<font></font>
            "args": "start"<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="https://github.com/Unitech/pm2/issues/2003" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多细节</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在下面编写了shell脚本（名为</font></font><code>start.sh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">因为我</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>prestart</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择。</font><font style="vertical-align: inherit;">所以我要跑步</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>#!/bin/bash<font></font>
cd /path/to/project<font></font>
npm start<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，从</font></font><code>start.sh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pm2 </font><font style="vertical-align: inherit;">开始</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>pm2 start start.sh --name appNameYouLike
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
