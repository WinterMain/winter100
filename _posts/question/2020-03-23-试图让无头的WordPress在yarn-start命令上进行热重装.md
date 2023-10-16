---
layout: question
title:  试图让无头的WordPress在yarn start命令上进行热重装
date:   2020-03-23T03:58:10.000Z
description: 我正在运行这个项目https //github.com/postlight/headless-wp-starter。我已经能够使一切正常进行。后端工作正常...
img: 
author: 番长猴子
category: question
answer: 2
tags: Node.js的 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在运行这个项目</font></font><a href="https://github.com/postlight/headless-wp-starter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/postlight/headless-wp-starter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经能够使一切正常进行。</font><font style="vertical-align: inherit;">后端工作正常，但是前端有一个错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在说明中说要运行</font></font><code>yarn start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以启动前端服务器，应该为</font></font><code>next.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，从技术上讲它可以正常运行，并且可以继续运行</font></font><code>localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，当我在中修改</font></font><code>scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件时</font></font><code>frontend/src/styles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它不会在外壳中重新渲染，并且浏览器中也不会进行热重载，即使单击刷新也不会显示样式更改。</font><font style="vertical-align: inherit;">但是，如果我停止使用yarn，</font></font><code>ctrl + c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后再次运行它，并且</font></font><code>yarn start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的样式显示在浏览器刷新中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在Windows下的docker下运行所有​​内容，所以不知道这是一个限制还是可能的错误。</font><font style="vertical-align: inherit;">我已经在他们的github上发布了一个问题，但是认为在这里检查也没有什么坏处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能想到的唯一的代码就是</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样。</font><font style="vertical-align: inherit;">提前谢谢。</font></font></p>

<pre><code>{<font></font>
    "name": "frontend",<font></font>
    "version": "1.0.0",<font></font>
    "description": "",<font></font>
    "main": "index.js",<font></font>
    "scripts": {<font></font>
        "build": "next build",<font></font>
        "start": "node server.js",<font></font>
        "docker:build": "docker build -t frontend .",<font></font>
        "docker:clean": "docker rm -f frontend || true",<font></font>
        "docker:run": "docker run -p 3000:3000 --name frontend frontend",<font></font>
        "docker:stop": "docker stop frontend",<font></font>
        "docker:start": "docker start frontend &amp;&amp; yarn run docker:logs",<font></font>
        "docker:logs": "docker logs -f frontend",<font></font>
        "deploy":<font></font>
            "yarn run docker:build &amp;&amp; yarn run docker:clean &amp;&amp; yarn run docker:run"<font></font>
    },<font></font>
    "keywords": [],<font></font>
    "author": "",<font></font>
    "license": "ISC",<font></font>
    "dependencies": {<font></font>
        "express": "^4.16.2",<font></font>
        "isomorphic-unfetch": "^2.0.0",<font></font>
        "next": "latest",<font></font>
        "react": "^16.0.0"<font></font>
    },<font></font>
    "devDependencies": {<font></font>
        "autoprefixer": "7.1.5",<font></font>
        "babel-plugin-module-resolver": "^2.7.1",<font></font>
        "babel-plugin-wrap-in-js": "^1.1.0",<font></font>
        "glob": "^7.1.2",<font></font>
        "node-sass": "^4.4.0",<font></font>
        "normalize.css": "^7.0.0",<font></font>
        "postcss-easy-import": "^3.0.0",<font></font>
        "postcss-loader": "^2.0.7",<font></font>
        "raw-loader": "^0.5.1",<font></font>
        "react-dom": "^16.2.0",<font></font>
        "sass-loader": "^6.0.6",<font></font>
        "webpack": "^3.10.0"<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于似乎热重装是Windows的问题，所以我的主要问题是，是否有一种方法可以运行不热重装的任务，而我只能自行刷新浏览器，否则无法开发在Windows上不停止并重新启动服务的每一次更改，这是不可能做的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2781篇《试图让无头的WordPress在yarn start命令上进行热重装》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Near古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">涉及两件事-Web服务器何时反映来自更新后的CSS的更改（以便浏览器可以使用），其二是浏览器重新加载页面。</font></font></p>

<pre><code>yarn start 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动Web服务器，但可能没有任何内容告诉Web服务器重新加载修改的文件。</font><font style="vertical-align: inherit;">这可能就是为什么您需要重新发出“ yarn start”命令的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了有关热装的问题-查看此链接 </font></font></p>

<p><a href="https://stackoverflow.com/questions/45622125/how-can-i-add-live-reload-to-my-nodejs-server"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将实时重载添加到我的Node.js服务器</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得尝试的事情是不使用docker容器内部的前端堆栈（nodejs，yarn等）。</font><font style="vertical-align: inherit;">按着这些次序：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后端服务</font></font></strong></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用端口</font></font><code>3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>docker-compose.yml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，你可以删除</font></font><code>- "3000:3000"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行或更改它来代替。</font><font style="vertical-align: inherit;">因此</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将在docker容器外部运行</font><font style="vertical-align: inherit;">该端口</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果未更改或删除，将导致端口冲突。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从项目的根运行：</font></font><code>docker-compose up -d</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要启动docker服务，</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确认该端口</font></font><code>3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是通过使用免费的</font></font><code>docker ps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将bash输入docker容器</font></font><code>docker exec -it wp-headless /bin/bash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后运行</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">首次安装时仅运行一次此步骤。</font><font style="vertical-align: inherit;">实际上，</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的</font><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">与React前端无关。</font><font style="vertical-align: inherit;">它只是为wordpress和后端依赖项进行设置。</font><font style="vertical-align: inherit;">所有安装完成后，从容器中退出。</font></font></li>
  </ol>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端服务</font></font></strong></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该已经在计算机中安装了所有必需的前端工具（nodejs，yarn等）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改变工作目录到前端：</font></font><code>cd frontend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装前端软件包的依赖关系：</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动前端开发服务：</font></font><code>yarn start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您的前端工作流堆栈将正常运行（没有docker）。</font><font style="vertical-align: inherit;">请记住，</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您现在要使用的不在docker容器之外，并且是完全分开的东西。</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
