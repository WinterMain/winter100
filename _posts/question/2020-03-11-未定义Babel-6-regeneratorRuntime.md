---
layout: question
title:  未定义Babel 6 regeneratorRuntime
date:   2020-03-11T15:34:08.000Z
description: 我正在尝试使用异步，在Babel 6上从头开始，但是我得到的regeneratorRuntime尚未定义。.babelrc文件{    "pre...
img: 
author: Davaid老丝
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用异步，在Babel 6上从头开始，但是我得到的regeneratorRuntime尚未定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc文件</font></font></p>

<pre><code>{<font></font>
    "presets": [ "es2015", "stage-0" ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json文件</font></font></p>

<pre><code>"devDependencies": {<font></font>
    "babel-core": "^6.0.20",<font></font>
    "babel-preset-es2015": "^6.0.15",<font></font>
    "babel-preset-stage-0": "^6.0.15"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.js文件</font></font></p>

<pre><code>"use strict";<font></font>
async function foo() {<font></font>
  await bar();<font></font>
}<font></font>
function bar() { }<font></font>
exports.default = foo;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常使用它而不需要异步/等待就可以了。</font><font style="vertical-align: inherit;">有什么想法我做错了吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第858篇《未定义Babel 6 regeneratorRuntime》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供将来参考</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自Babel版本7.0.0-beta.55起，舞台预设已删除</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅博客</font></font><a href="https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步等待仍然可以被</font></font></p>

<p><a href="https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator#usage" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/zh-CN/babel-plugin-transform-async-to-generator#usage</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></strong></p>

<pre><code>npm install --save-dev @babel/plugin-transform-async-to-generator
</code></pre>

<p><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">.babelrc中的</font></strong><font style="vertical-align: inherit;">用法</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre><code> { <font></font>
     "presets": ["@babel/preset-env"],<font></font>
     "plugins": ["@babel/plugin-transform-async-to-generator"]<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用babel polyfill </font></font><a href="https://babeljs.io/docs/en/babel-polyfill" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/en/babel-polyfill</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></strong> </p>

<pre><code>npm install --save @babel/polyfill
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
  entry: ["@babel/polyfill", "./app/js"],<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用Gulp + Babel作为前端，则需要使用babel-polyfill</font></font></p>

<p><code>npm install babel-polyfill</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在所有其他脚本标签上方将脚本标签添加到index.html，并从node_modules引用babel-polyfill</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel 7</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font><font style="vertical-align: inherit;">样板可与再生器运行时反应：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    [<font></font>
      "@babel/preset-env",<font></font>
      {<font></font>
        "targets": {<font></font>
          "node": true,<font></font>
        },<font></font>
      },<font></font>
    ],<font></font>
    "@babel/preset-react",<font></font>
  ],<font></font>
  "plugins": [<font></font>
    "@babel/plugin-syntax-class-properties",<font></font>
    "@babel/plugin-proposal-class-properties"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></p>

<pre><code>...<font></font>
<font></font>
"devDependencies": {<font></font>
  "@babel/core": "^7.0.0-0",<font></font>
  "@babel/plugin-proposal-class-properties": "^7.4.4",<font></font>
  "@babel/plugin-syntax-class-properties": "^7.2.0",<font></font>
  "@babel/polyfill": "^7.4.4",<font></font>
  "@babel/preset-env": "^7.4.5",<font></font>
  "@babel/preset-react": "^7.0.0",<font></font>
  "babel-eslint": "^10.0.1",<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></p>

<pre><code>import "@babel/polyfill";<font></font>
<font></font>
....<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要babel7用户和ParcelJS&gt; = 1.10.0用户</font></font></p>

<pre><code>npm i @babel/runtime-corejs2<font></font>
npm i --save-dev @babel/plugin-transform-runtime @babel/core<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    ["@babel/plugin-transform-runtime", {<font></font>
      "corejs": 2<font></font>
    }]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取自</font></font><a href="https://github.com/parcel-bundler/parcel/issues/1762" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/parcel-bundler/parcel/issues/1762</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新答案为什么您遵循我的答案？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我将为您提供最新更新版本的npm project的答案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2017年04月14日</font></font></strong></p>

<pre><code>"name": "es6",<font></font>
 "version": "1.0.0",<font></font>
   "babel-core": "^6.24.1",<font></font>
    "babel-loader": "^6.4.1",<font></font>
    "babel-polyfill": "^6.23.0",<font></font>
    "babel-preset-es2015": "^6.24.1",<font></font>
    "webpack": "^2.3.3",<font></font>
    "webpack-dev-server": "^2.4.2"<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Npm的此版本或更高版本以及其他所有版本，则</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
只需更改：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
  entry: ["babel-polyfill", "./app/js"]<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件后，只需将此行添加到代码顶部即可。</font></font></p>

<pre><code>import "babel-polyfill";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在检查一切正常。</font></font><a href="https://babeljs.io/docs/usage/polyfill/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考链接</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也感谢@BrunoLM的回答。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您收到错误消息是因为异步/等待使用生成器，这是ES2016的功能，而不是ES2015。</font><font style="vertical-align: inherit;">解决此问题的一种方法是为ES2016（</font></font><code>npm install --save babel-preset-es2016</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">安装babel预设，</font><font style="vertical-align: inherit;">然后编译为ES2016而不是ES2015：</font></font></p>

<pre><code>"presets": [<font></font>
  "es2016",<font></font>
  // etc...<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如其他答案所述，您也可以使用</font></font><a href="https://stackoverflow.com/a/33527883/6157047"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfills</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尽管请确保</font><font style="vertical-align: inherit;">在运行任何其他代码之前先</font></font><a href="https://stackoverflow.com/a/36628148/6157047"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">另外，如果您不想包括所有的polyfill依赖项，则可以使用</font></font><a href="https://stackoverflow.com/a/36590887/6157047"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-regenerator-runtime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://stackoverflow.com/a/36821986/6157047"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-runtime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2019年10月，这对我有效：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到预设。 </font></font></p>

<pre><code> "presets": [<font></font>
      "@babel/preset-env"<font></font>
    ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用npm安装regenerator-runtime。</font></font></p>

<pre><code>npm i regenerator-runtime
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的主文件中使用：（此导入仅使用一次）</font></font></p>

<pre><code>import "regenerator-runtime/runtime";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使您能够</font></font><code>async</code> <code>awaits</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文件中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">并删除</font></font><code>regenerator error</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猴子古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用，</font></font><code>babel-preset-stage-2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则只需</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">启动脚本</font></font><code>--require babel-polyfill</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这个错误是由</font></font><code>Mocha</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font><font style="vertical-align: inherit;">抛出的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下解决了这个问题</font></font></p>

<p><code>mocha \"server/tests/**/*.test.js\" --compilers js:babel-register --require babel-polyfill</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意提升功能</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的“ polyfill import”和“异步函数”都在同一个文件中，但是我使用的函数语法将其提升到polyfill之上，这会给我带来</font></font><code>ReferenceError: regeneratorRuntime is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改此代码</font></font></h3>

<pre><code>import "babel-polyfill"<font></font>
async function myFunc(){ }<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此</font></font></h3>

<pre><code>import "babel-polyfill"<font></font>
var myFunc = async function(){}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防止将其悬挂在polyfill进口上方。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据以下示例</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">文件，它将起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><code>@babel/preset-env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装</font></font></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    [<font></font>
      "@babel/preset-env", {<font></font>
        "targets": {<font></font>
          "node": "current"<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  ]<font></font>
}<font></font>
or if you are using babel-preset-env package<font></font>
<font></font>
{<font></font>
  "presets": [<font></font>
    [<font></font>
      "env", {<font></font>
        "targets": {<font></font>
          "node": "current"<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel 7.4.0或更高版本（core-js 2/3）</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://babeljs.io/blog/2019/03/19/7.4.0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel 7.4.0开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>@babel/polyfill</code> <a href="https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babel" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已</font></font></a> <a href="https://babeljs.io/docs/en/next/babel-polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弃用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，有两种安装Polyfills / regenerator的方法：通过全局名称空间（选项1）或作为ponyfill（选项2，无全局污染）安装。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项1：</font></font></strong> <code>@babel/preset-env</code></p>

<pre><code>presets: [<font></font>
  ["@babel/preset-env", {<font></font>
    useBuiltIns: "usage",<font></font>
    corejs: 3, // or 2,<font></font>
    targets: {<font></font>
        firefox: "64", // or whatever target to choose .    <font></font>
    },<font></font>
  }]<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会自动使用</font></font><code>regenerator-runtime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>core-js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的</font></font><a href="https://github.com/browserslist/browserslist" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">无需手动导入任何内容。</font><font style="vertical-align: inherit;">不要忘记安装运行时依赖项：</font></font></p>

<pre><code>npm i --save regenerator-runtime core-js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，</font></font><code>useBuiltIns: "entry"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">和导入它：</font></font></p>

<pre><code>import "regenerator-runtime/runtime";<font></font>
import "core-js/stable"; // if polyfills are also needed<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项2：</font></font></strong> <code>@babel/transform-runtime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>@babel/runtime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（没有全球范围的污染）</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    [<font></font>
      "@babel/plugin-transform-runtime",<font></font>
      {<font></font>
        "regenerator": true,<font></font>
        corejs: 3 // or 2; if polyfills needed<font></font>
        ...<font></font>
      }<font></font>
    ]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装它： </font></font></p>

<pre><code>npm i -D @babel/plugin-transform-runtime<font></font>
npm i @babel/runtime<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用core-js polyfills，请安装</font></font><code>@babel/runtime-corejs2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>@babel/runtime-corejs3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替，请参见</font></font><a href="https://babeljs.io/blog/2019/03/19/7.4.0#migration-from-core-js-2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的简单解决方案：</font></font></p>

<pre><code>npm install --save-dev babel-plugin-transform-runtime<font></font>
npm install --save-dev babel-plugin-transform-async-to-generator<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    ["latest", {<font></font>
      "es2015": {<font></font>
        "loose": true<font></font>
      }<font></font>
    }],<font></font>
    "react",<font></font>
    "stage-0"<font></font>
  ],<font></font>
  "plugins": [<font></font>
    "transform-runtime",<font></font>
    "transform-async-to-generator"<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了polyfill之外，我还使用</font></font><a href="https://babeljs.io/docs/en/6.26.3/babel-plugin-transform-runtime" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-runtime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该插件描述为：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部化对助手和内置函数的引用，自动填充代码而不会污染全局变量。</font><font style="vertical-align: inherit;">这实际上是什么意思？</font><font style="vertical-align: inherit;">基本上，您可以使用Promise，Set，Symbol等内置函数，也可以无缝使用需要Polyfill的所有Babel功能，而不会造成全球污染，这使其非常适合于图书馆。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还包括对异步/等待以及ES 6的其他内置支持。 </font></font></p>

<pre><code>$ npm install --save-dev babel-plugin-transform-runtime
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，添加运行时插件</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    ["transform-runtime", {<font></font>
      "regenerator": true<font></font>
    }]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  如果使用的是babel 7，则该软件包已重命名为</font></font><a href="https://babeljs.io/docs/en/babel-plugin-transform-runtime" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ babel / plugin-transform-runtime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel 7用户</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了一些麻烦，因为大多数信息都针对先前的babel版本。</font><font style="vertical-align: inherit;">对于Babel 7，安装以下两个依赖项：</font></font></p>

<pre><code>npm install --save @babel/runtime <font></font>
npm install --save-dev @babel/plugin-transform-runtime<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，在.babelrc中，添加：</font></font></p>

<pre><code>{<font></font>
    "presets": ["@babel/preset-env"],<font></font>
    "plugins": [<font></font>
        ["@babel/transform-runtime"]<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
