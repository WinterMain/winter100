---
layout: question
title:  Nodejs5和babel中的“意外的令牌导入”？
date:   2020-03-23T13:41:44.000Z
description: 在js文件中，我使用import代替requireimport co from 'co';并尝试由nodejs直接运行它，因为它说import是...
img: 
author: Tony泡芙
category: question
answer: 10
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在js文件中，我使用import代替require</font></font></p>

<pre><code>import co from 'co';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试由nodejs直接运行它，因为它说import是“运输功能”和支持，没有任何运行时标记（</font></font><a href="https://nodejs.org/en/docs/es6/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/docs/es6/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但是我遇到了一个错误</font></font></p>

<pre><code>import co from 'co';<font></font>
^^^^^^<font></font>
<font></font>
SyntaxError: Unexpected token import<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我试图用通天塔</font></font></p>

<pre><code>npm install -g babel-core<font></font>
npm install -g babel-cli<font></font>
npm install babel-core //install to babel locally, is it necessary?<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并由 </font></font></p>

<pre><code>babel-node js.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然有相同的错误，意外的令牌导入？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何摆脱它？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于仍然存在相同问题的用户，请按照以下步骤进行修复。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用babel 7 </font></font><code>@babel/core @babel/present-env @babel/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，依此类推...</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到项目的根目录，其中包含以下代码。</font></font></li>
</ol>

<pre><code>{<font></font>
  "presets": [<font></font>
    [<font></font>
      "@babel/preset-env",<font></font>
      {<font></font>
        "targets": {<font></font>
          "node": "current"<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保使用本地版本的bebel节点 </font></font><code>./node_modules/.bin/babel-node main.js</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您应该能够使用</font></font><code>import/export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句了，祝您黑客愉快。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@jovi您需要做的就是添加.babelrc文件，如下所示：</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    "transform-strict-mode",<font></font>
    "transform-es2015-modules-commonjs",<font></font>
    "transform-es2015-spread",<font></font>
    "transform-es2015-destructuring",<font></font>
    "transform-es2015-parameters"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用npm将这些插件安装为devdependence。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后再次尝试babel-node ***。js。</font><font style="vertical-align: inherit;">希望这可以帮到你。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilItachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">涉及以下步骤来解决此问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CLI和环境预设</font></font></strong></p>

<pre><code>$ npm install --save-dev babel-cli babel-preset-env
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）创建一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></p>

<pre><code>{<font></font>
  "presets": ["env"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）在</font><strong><font style="vertical-align: inherit;">package.json中</font></strong><font style="vertical-align: inherit;">配置npm start</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre><code>"scripts": {<font></font>
    "start": "babel-node ./server/app.js",<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）然后启动应用</font></font></p>

<pre><code>$ npm start
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-preset-env</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodemon</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行热重装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后创建具有以下内容的.babelrc文件：</font></font></p>

<pre><code>{<font></font>
  "presets": ["env"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，在package.json中创建脚本： </font></font></p>

<pre><code>"scripts": {<font></font>
    "babel-node": "babel-node --presets=env",<font></font>
    "start": "nodemon --exec npm run babel-node -- ./index.js",<font></font>
    "build": "babel src -d dist"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者只是使用以下样板：</font></font></p>

<p><a href="https://github.com/priyanshuchauhan/node-es6" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样板：node-es6</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装-&gt;“ npm i --save-dev babel-cli babel-preset-es2015 babel-preset-stage-0”</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json文件中的下一个添加脚本    </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ start”：“ babel-node server.js”</font></font></strong></p>

<pre><code>    {<font></font>
  "name": "node",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "server.js",<font></font>
  "dependencies": {<font></font>
    "body-parser": "^1.18.2",<font></font>
    "express": "^4.16.2",<font></font>
    "lodash": "^4.17.4",<font></font>
    "mongoose": "^5.0.1"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "babel-cli": "^6.26.0",<font></font>
    "babel-preset-es2015": "^6.24.1",<font></font>
    "babel-preset-stage-0": "^6.24.1"<font></font>
  },<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",<font></font>
    "start": "babel-node server.js"<font></font>
  },<font></font>
  "keywords": [],<font></font>
  "author": "",<font></font>
  "license": "ISC"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在根“ .babelrc”中为babel创建文件</font></font></p>

<pre><code>    {<font></font>
    "presets":[<font></font>
        "es2015",<font></font>
        "stage-0"<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在终端中运行npm start </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Jim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前方法是使用：</font></font></p>

<p><code>npm install --save-dev babel-cli babel-preset-env</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在 </font></font><code>.babelrc</code></p>

<pre><code>{<font></font>
    "presets": ["env"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此安装Babel支持最新版本的js（es2015及更高版本）查看babeljs</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下运行js文件时，</font><font style="vertical-align: inherit;">不要忘记</font></font><code>babel-node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用中</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到脚本中</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>"scripts": {<font></font>
   "test": "mocha",<font></font>
    //Add this line to your scripts<font></font>
   "populate": "node_modules/babel-cli/bin/babel-node.js" <font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以</font></font><code>npm populate yourfile.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端内。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在运行Windows并且无法识别内部或外部命令的运行错误，请按如下所示使用脚本的节点infront</font></font></p>

<p><code>node node_modules/babel-cli/bin/babel-node.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后 </font></font><code>npm run populate</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>babel-preset-es2015</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 现在已弃用，如果尝试使用Laurence的解决方案，则会收到警告。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使它与Babel 6.24.1+一起使用，请</font></font><code>babel-preset-env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用：</font></font></p>

<pre><code>npm install babel-preset-env --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后添加</font></font><code>env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的预设中</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "presets": ["env"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://babeljs.io/env" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>From the babel 6 Release notes:</p>

<blockquote>
  <p>Since Babel is focusing on being a platform for JavaScript tooling and not an ES2015 transpiler, we’ve decided to make all of the plugins opt-in. This means when you install Babel it will no longer transpile your ES2015 code by default.</p>
</blockquote>

<p>In my setup I installed the es2015 preset</p>

<pre><code>npm install --save-dev babel-preset-es2015
</code></pre>

<p>or with yarn</p>

<pre><code>yarn add babel-preset-es2015 --dev
</code></pre>

<p>and enabled the preset in my .babelrc</p>

<pre><code>{<font></font>
  "presets": ["es2015"]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将预置用于本机，则它接受导入</font></font></p>

<pre><code>npm i babel-preset-react-native --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其放在您的.babelrc文件中</font></font></p>

<pre><code>{<font></font>
  "presets": ["react-native"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的项目根目录中</font></font></p>

<p><a href="https://www.npmjs.com/package/babel-preset-react-native" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/babel-preset-react-native</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GOItachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实现模块之前，您可以使用Babel“翻译器”运行代码：</font></font></p>

<pre><code>npm install --save babel-cli babel-preset-node6
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着</font></font></p>

<pre><code>./node_modules/babel-cli/bin/babel-node.js --presets node6 ./your_script.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想键入</font></font><code>--presets node6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以通过以下方式将其保存为.babelrc文件：</font></font></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    "node6"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://www.npmjs.com/package/babel-preset-node6" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/babel-preset-node6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://babeljs.io/docs/usage/cli/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/usage/cli/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
