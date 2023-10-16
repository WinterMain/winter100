---
layout: question
title:  “ react-scripts start”命令究竟是什么？
date:   2020-03-11T07:36:35.000Z
description: 我一直在使用React项目，create-react-app并且有两个选项可以启动该项目：第一种方式：npm run start定义package...
img: 
author: 小宇宙神无
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用React项目，</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且有两个选项可以启动该项目：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一种方式：</font></font></strong></p>

<p><code>npm run start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下：</font></font></p>

<p><code>"start": "react-scripts start",</code> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种方式：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font><code>npm start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个命令有什么区别？</font><font style="vertical-align: inherit;">的目的是</font></font><code>react-scripts start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图找到定义，但是我发现了一个带有名称的软件包，但我仍然不知道该命令的含义。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第737篇《“ react-scripts start”命令究竟是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ start”是脚本的名称，在npm中，您可以运行如下所示的脚本</font></font><code>npm run scriptName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>npm start</code> <a href="https://docs.npmjs.com/cli/start" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也是</font></font></a> <code>npm run start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于“反应脚本”，这是一个专门与</font><a href="https://github.com/facebook/create-react-app/blob/master/package.json#L14" rel="nofollow noreferrer"><font style="vertical-align: inherit;">create-react-app</font></a><font style="vertical-align: inherit;">相关的脚本</font></font><a href="https://github.com/facebook/create-react-app/blob/master/package.json#L14" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>As Sagiv b.g. pointed out, the <code>npm start</code> command is a shortcut for <code>npm run start</code>. I just wanted to add <strong>a real-life example</strong> to clarify it a bit more.</p>

<p>The setup below comes from the <code>create-react-app</code> github repo. The <a href="https://github.com/facebook/create-react-app/blob/master/package.json" rel="noreferrer"><code>package.json</code></a> defines a bunch of scripts which define the actual flow.</p>

<pre><code>"scripts": {<font></font>
  "start": "npm-run-all -p watch-css start-js",<font></font>
  "build": "npm run build-css &amp;&amp; react-scripts build",<font></font>
  "watch-css": "npm run build-css &amp;&amp; node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",<font></font>
  "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",<font></font>
  "start-js": "react-scripts start"<font></font>
},<font></font>
</code></pre>

<p>For clarity, I added a diagram. 
<a href="https://i.stack.imgur.com/AgqTe.png" rel="noreferrer"><img src="https://i.stack.imgur.com/AgqTe.png" alt="在此处输入图片说明"></a></p>

<p>The blue boxes are references to scripts, all of which you could executed directly with an <code>npm run &lt;script-name&gt;</code> command. But as you can see, actually there are only 2 practical flows:</p>

<ul>
<li><code>npm run start</code> </li>
<li><code>npm run build</code></li>
</ul>

<p>The grey boxes are commands which can be executed from the command line.</p>

<p>So, for instance, if you run <code>npm start</code> (or <code>npm run start</code>) that actually translate to the <code>npm-run-all -p watch-css start-js</code> command, which is executed from the commandline.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我有一个特殊的</font></font><code>npm-run-all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令，它是一个流行的插件，用于搜索以“ build：”开头的脚本，并执行所有这些命令。</font><font style="vertical-align: inherit;">我实际上没有与该模式匹配的任何东西。</font><font style="vertical-align: inherit;">但是在</font></font><code>-p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换</font><font style="vertical-align: inherit;">之后，它还有两个参数</font><font style="vertical-align: inherit;">，它们是其他脚本。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这里是执行这两个脚本的简写。</font><font style="vertical-align: inherit;">（即</font></font><code>watch-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>start-js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>watch-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可确保</font></font><code>*.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件被转换为</font></font><code>*.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，并寻找未来的更新。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>start-js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该点</font></font><code>react-scripts start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪些主机在开发模式的网站。</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总之，该</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令是可配置的。</font><font style="vertical-align: inherit;">如果您想知道它的作用，则必须检查该</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（而且，当事情变得复杂时，您可能需要制作一些图表）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h3>create-react-app and react-scripts</h3>

<p><code>react-scripts</code> is a set of scripts from the <a href="https://github.com/facebook/create-react-app" rel="noreferrer"><code>create-react-app</code></a> starter pack. create-react-app helps you kick off projects without configuring, so you do not have to setup your project by yourself. </p>

<p><code>react-scripts start</code> sets up the development environment and starts a server, as well as hot module reloading. You can read <a href="https://github.com/facebook/create-react-app#whats-included" rel="noreferrer">here</a> to see what everything it does for you. </p>

<p>with <a href="https://github.com/facebook/create-react-app" rel="noreferrer">create-react-app</a> you have following features out of the box.</p>

<blockquote>
  <ul>
  <li>React, JSX, ES6, and Flow syntax support.</li>
  <li>Language extras beyond ES6 like the object spread operator.</li>
  <li>Autoprefixed CSS, so you don’t need -webkit- or other prefixes.</li>
  <li>A fast interactive unit test runner with built-in support for coverage reporting.</li>
  <li>A live development server that warns about common mistakes.</li>
  <li>A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.</li>
  <li>An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.</li>
  <li>Hassle-free updates for the above tools with a single dependency.</li>
  </ul>
</blockquote>

<h3>npm scripts</h3>

<p><a href="https://docs.npmjs.com/cli/start" rel="noreferrer"><code>npm start</code></a> is a shortcut for <code>npm run start</code>.</p>

<p><a href="https://docs.npmjs.com/cli/run-script" rel="noreferrer"><code>npm run</code></a> is used to run scripts that you define in the <code>scripts</code> object of your package.json</p>

<p>if there is no <code>start</code> key in the scripts object, it will default to <code>node server.js</code></p>

<p>Sometimes you want to do more than the react scripts gives you, in this case you can do <code>react-scripts eject</code>. This will transform your project from a "managed" state into a not managed state, where you have full control over dependencies, build scripts and other configurations.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
