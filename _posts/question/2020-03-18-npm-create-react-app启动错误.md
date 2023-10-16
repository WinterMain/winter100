---
layout: question
title:  npm create-react-app启动错误
date:   2020-03-18T07:47:05.000Z
description: 我有一个项目，我两个星期都没碰过。我将其取回，现在尝试运行时npm start出现此错误。> react-scripts startsh  rea...
img: 
author: 梅樱
category: question
answer: 10
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个项目，我两个星期都没碰过。</font><font style="vertical-align: inherit;">我将其取回，现在尝试运行时</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现此错误。</font></font></p>

<pre><code>&gt; react-scripts start<font></font>
<font></font>
sh: react-scripts: command not found<font></font>
<font></font>
npm ERR! Darwin 16.0.0<font></font>
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"<font></font>
npm ERR! node v6.7.0<font></font>
npm ERR! npm  v3.10.3<font></font>
npm ERR! file sh<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno ENOENT<font></font>
npm ERR! syscall spawn<font></font>
npm ERR! UpScore@0.6.0 start: `react-scripts start`<font></font>
npm ERR! spawn ENOENT<font></font>
npm ERR!<font></font>
npm ERR! Failed at the UpScore@0.6.0 start script 'react-scripts start'.<font></font>
npm ERR! Make sure you have the latest version of node.js and npm installed.<font></font>
npm ERR! If you do, this is most likely a problem with the UpScore package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     react-scripts start<font></font>
npm ERR! You can get information on how to open an issue for this project with:<font></font>
npm ERR!     npm bugs UpScore<font></font>
npm ERR! Or if that isn't available, you can get their info via:<font></font>
npm ERR!     npm owner ls UpScore<font></font>
npm ERR! There is likely additional logging output above.<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点6.7.0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm 3.10.3</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mac sierra 10.12</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></p>

<pre><code>{<font></font>
  "name": "UpScore",<font></font>
  "version": "0.6.0",<font></font>
  "private": true,<font></font>
  "devDependencies": {<font></font>
    "react-addons-test-utils": "^15.3.1",<font></font>
    "react-scripts": "0.4.1",<font></font>
    "react-test-renderer": "^15.3.1",<font></font>
    "redux-logger": "^2.6.1"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "@yoshokatana/medium-button": "^1.1.0",<font></font>
    "axios": "^0.14.0",<font></font>
    "bcrypt": "^0.8.7",<font></font>
    "bcrypt-nodejs": "0.0.3",<font></font>
    "bcryptjs": "^2.3.0",<font></font>
    "body-parser": "^1.15.2",<font></font>
    "connect-flash": "^0.1.1",<font></font>
    "cookie-parser": "^1.4.3",<font></font>
    "draft-js": "^0.8.1",<font></font>
    "draft-js-editor": "^1.7.2",<font></font>
    "draft-js-export-html": "^0.4.0",<font></font>
    "ejs": "^2.5.2",<font></font>
    "email-verification": "^0.4.5",<font></font>
    "express": "^4.14.0",<font></font>
    "express-session": "^1.14.1",<font></font>
    "flexboxgrid": "^6.3.1",<font></font>
    "highlight.js": "^9.6.0",<font></font>
    "immutable": "^3.8.1",<font></font>
    "katex": "^0.6.0",<font></font>
    "lodash": "^4.15.0",<font></font>
    "markdown-it-mathjax": "^1.0.3",<font></font>
    "material-ui": "^0.15.4",<font></font>
    "medium-editor": "^5.22.0",<font></font>
    "minutes-seconds-milliseconds": "^1.0.3",<font></font>
    "moment": "^2.15.0",<font></font>
    "moment-duration-format": "^1.3.0",<font></font>
    "mongod": "^1.3.0",<font></font>
    "mongodb": "^2.2.9",<font></font>
    "mongoose": "^4.6.0",<font></font>
    "monk": "^3.1.2",<font></font>
    "morgan": "^1.7.0",<font></font>
    "normalize.css": "^3.0.3",<font></font>
    "passport": "^0.3.2",<font></font>
    "passport-local": "^1.0.0",<font></font>
    "react": "^15.3.1",<font></font>
    "react-dom": "^15.3.1",<font></font>
    "react-markdown": "^2.4.2",<font></font>
    "react-medium-editor": "^1.8.1",<font></font>
    "react-redux": "^4.4.5",<font></font>
    "react-redux-form": "^0.14.5",<font></font>
    "react-rich-markdown": "^1.0.1",<font></font>
    "react-router": "^2.7.0",<font></font>
    "react-router-redux": "^4.0.5",<font></font>
    "react-tap-event-plugin": "^1.0.0",<font></font>
    "react-tinymce": "^0.5.1",<font></font>
    "redux": "^3.6.0",<font></font>
    "redux-form": "^6.0.5",<font></font>
    "redux-form-material-ui": "^4.0.1",<font></font>
    "redux-promise-middleware": "^4.0.0",<font></font>
    "redux-thunk": "^2.1.0",<font></font>
    "reselect": "^2.5.3",<font></font>
    "screenfull": "^3.0.2"<font></font>
  },<font></font>
  "scripts": {<font></font>
    "start": "react-scripts start",<font></font>
    "start:prod": "pushstate-server build",<font></font>
    "build": "react-scripts build",<font></font>
    "test": "react-scripts test --env=jsdom",<font></font>
    "eject": "react-scripts eject",<font></font>
    "server": "cd client/api &amp;&amp; pm2 start server.js --watch",<font></font>
    "proxy": "http://128.199.139.144:3000"<font></font>
  },<font></font>
  "eslintConfig": {<font></font>
    "extends": "./node_modules/react-scripts/config/eslint.js"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试克隆我的存储库，并得到相同的错误。</font><font style="vertical-align: inherit;">如果有人可以给我一些方法来找到会发生什么。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2034篇《npm create-react-app启动错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易神奇Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比.npm开始添加带有“ SKIP_PREFLIGHT_CHECK = true”的.env文件</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题源于许可问题。</font><font style="vertical-align: inherit;">我通过遵循此</font><a href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally</font></a><font style="vertical-align: inherit;">解决了我的问题
</font></font><a href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当node_modules与package.json不同步时，会发生这种情况。   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根目录和其中可能具有node_modules文件夹的所有子服务/子文件夹中运行以下命令。</font></font></p>

<pre><code>rd node_modules /S /Q<font></font>
npm install<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能与其他库冲突，请删除node_modules并再次安装npm。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Jim</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过运行以下命令来解决此问题</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Eva伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一您碰巧像我这样不幸，连续三（3）天试图解决此问题，这里提出的每个解决方案都使我失败...在您的项目根目录中创建一个.env文件并添加此代码</font></font><code>SKIP_PREFLIGHT_CHECK=true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">祝好运</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，只是我没有添加</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到项目中，所以：</font></font></p>

<pre><code>npm i -S react-scripts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这不起作用，则</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照其他人的建议使用</font><font style="vertical-align: inherit;">rm</font></font></p>

<pre><code>rm -r node_modules<font></font>
npm i<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您不应该在全球范围内安装react-scripts，它将无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我第一次在其他计算机上创建项目时没有使用--save，所以对我来说，这可以解决问题：</font></font></p>

<pre><code>npm install --save react react-dom react-scripts
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签入Create React App的作者。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您绝对不应该在</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球范围内</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">。</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font><code>./node_modules/react-scripts/bin/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><a href="https://stackoverflow.com/a/39960523/458193"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您看到以下内容：</font></font></p>

<pre><code>npm ERR! UpScore@0.6.0 start: `react-scripts start`<font></font>
npm ERR! spawn ENOENT<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅表示在首次安装依赖项时出了点问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议执行以下三个步骤：</font></font></p>

<ol>
<li><code>npm install -g npm@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 更新npm，因为有时会出现问题。</font></font></li>
<li><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 删除现有模块。</font></font></li>
<li><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 重新安装项目依赖项。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该可以解决问题。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果不是，请</font></font><a href="https://github.com/facebookincubator/create-react-app/issues/new" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出问题，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并提供指向您的项目以及Node和npm版本的链接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光番长</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎您不在</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球环境中。</font><font style="vertical-align: inherit;">这里有两种可能性：</font></font></p>

<p><code>npm install -g react-scripts</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在package.json中像这样更改脚本部分：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "start": "./node_modules/react-scripts/bin/react-scripts.js start",<font></font>
    "start:prod": "pushstate-server build",<font></font>
    "build": "./node_modules/react-scripts/bin/react-scripts.js build",<font></font>
    "test": "./node_modules/react-scripts/bin/react-scripts.js test --env=jsdom",<font></font>
    "eject": "./node_modules/react-scripts/bin/react-scripts.js eject",<font></font>
    "server": "cd client/api &amp;&amp; pm2 start server.js --watch",<font></font>
    "proxy": "http://128.199.139.144:3000"<font></font>
  },<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
