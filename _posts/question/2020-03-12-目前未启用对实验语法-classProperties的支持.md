---
layout: question
title:  目前未启用对实验语法“ classProperties”的支持
date:   2020-03-12T12:13:41.000Z
description: 当我在Django项目中设置React时，遇到了此错误模块构建中的ModuleBuildError失败（来自./node_modules/babel-...
img: 
author: Tom阳光
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在Django项目中设置React时，遇到了此错误</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块构建中的ModuleBuildError失败（来自./node_modules/babel-loader/lib/index.js）：语法错误：C：\ Users \ 1Sun \ Cebula3 \ cebula_react \ assets \ js \ index.js：支持实验语法'classProperties '当前未启用（17：9）：</font></font></p>

<pre><code>  15 | <font></font>
  16 | class BodyPartWrapper extends Component {<font></font>
&gt; 17 |   state = {<font></font>
     |         ^<font></font>
  18 | <font></font>
  19 |   }<font></font>
  20 | <font></font>
<font></font>
Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the <font></font>
'plugins' section of your Babel config to enable transformation.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我安装了@ babel / plugin-proposal-class-properties并将其放在babelrc中 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "cebula_react",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",<font></font>
    "build": "webpack --config prod.config.js"<font></font>
  },<font></font>
  "keywords": [],<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "babel": {<font></font>
    "presets": [<font></font>
      "@babel/preset-env",<font></font>
      "@babel/preset-react"<font></font>
    ]<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@babel/cli": "^7.0.0",<font></font>
    "@babel/core": "^7.0.0",<font></font>
    "@babel/plugin-proposal-class-properties": "^7.0.0",<font></font>
    "@babel/preset-env": "^7.0.0",<font></font>
    "@babel/preset-react": "^7.0.0",<font></font>
    "babel-loader": "^8.0.2",<font></font>
    "babel-plugin-transform-class-properties": "^6.24.1",<font></font>
    "react-hot-loader": "^4.3.6",<font></font>
    "webpack": "^4.17.2",<font></font>
    "webpack-bundle-tracker": "^0.3.0",<font></font>
    "webpack-cli": "^3.1.0",<font></font>
    "webpack-dev-server": "^3.1.8"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "react": "^16.5.0",<font></font>
    "react-dom": "^16.5.0"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴贝尔克</font></font></strong></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    "@babel/preset-env",<font></font>
    "@babel/preset-react"<font></font>
  ],<font></font>
  "plugins": [<font></font>
    "@babel/plugin-proposal-class-properties"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是错误仍然存​​在，这是什么问题？？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1301篇《目前未启用对实验语法“ classProperties”的支持》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新增中 </font></font></p>

<pre><code>"plugins": [<font></font>
    [<font></font>
      "@babel/plugin-proposal-class-properties"<font></font>
    ]<font></font>
  ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了我的作品。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在用纱。</font><font style="vertical-align: inherit;">我必须执行以下操作来克服该错误。</font></font></p>

<pre><code>yarn add @babel/plugin-proposal-class-properties --dev
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font><code>constructor function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作：</font></font></p>

<pre class="lang-js prettyprint-override"><code>...<font></font>
class MyComponent extends Component {<font></font>
  constructor(man) {<font></font>
    super(man)<font></font>
    this.state = {}<font></font>
  }<font></font>
}<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先安装：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ babel / plugin-proposal-class-properties</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为dev依赖项：</font></font></p>

<pre><code>npm install @babel/plugin-proposal-class-properties --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后编辑您的.babelrc文件，使其完全像这样：</font></font></p>

<pre><code>{<font></font>
  "presets": [<font></font>
      "@babel/preset-env",<font></font>
      "@babel/preset-react"<font></font>
  ],<font></font>
  "plugins": [<font></font>
      [<font></font>
        "@babel/plugin-proposal-class-properties"<font></font>
      ]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件位于根目录中，即</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所在的</font><font style="vertical-align: inherit;">位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您应该重新启动webpack开发服务器，以使更改生效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>{<font></font>
    "presets": [<font></font>
        "@babel/preset-env",<font></font>
        "@babel/preset-react"<font></font>
    ],<font></font>
    "plugins": [<font></font>
        [<font></font>
          "@babel/plugin-proposal-class-properties"<font></font>
        ]<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用上面的代码替换您的.babelrc文件。</font><font style="vertical-align: inherit;">它为我解决了这个问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在Laravel Framework 5.7.19上进行了测试，以下步骤可以正常工作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您的.babelrc文件位于应用程序的根文件夹中，并添加以下代码：</font></font></p>

<pre><code>{<font></font>
  "plugins": ["@babel/plugin-proposal-class-properties"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm install --save-dev @babel/plugin-proposal-class-properties</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm run watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font></strong></p>

<pre><code>"plugins": [<font></font>
    "@babel/plugin-proposal-class-properties"<font></font>
  ]<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></strong></p>

<pre><code>"plugins": [<font></font>
    [<font></font>
      "@babel/plugin-proposal-class-properties",<font></font>
      {<font></font>
        "loose": true<font></font>
      }<font></font>
    ]<font></font>
  ]<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用</font></font></strong></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
