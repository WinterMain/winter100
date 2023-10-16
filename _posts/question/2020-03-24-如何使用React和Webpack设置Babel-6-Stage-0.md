---
layout: question
title:  如何使用React和Webpack设置Babel 6 Stage 0
date:   2020-03-24T02:01:03.000Z
description: 我对文档的理解我看到Babel 6目前具有三个预设：es2015，react和stage-x。我读到可以这样设置.babelrc：{  "pre...
img: 
author: 凯西里
category: question
answer: 2
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对文档的理解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到Babel 6目前具有三个预设：es2015，react和stage-x。</font><font style="vertical-align: inherit;">我读到可以这样设置</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "presets": ["es2015", "react", "stage-0"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或直接在package.JSON中，如下所示：</font></font></p>

<pre><code>{<font></font>
  ...,<font></font>
  "version": x.x.x,<font></font>
  "babel": {<font></font>
    "presets": ["es2015", "react", "stage-0"]<font></font>
  },<font></font>
  ...,<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以进一步将babel-loader与webpack结合使用，如下所示：</font></font></p>

<pre><code>loader: 'babel?presets[]=es2015'
</code></pre>

<p><br></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了将所有内容都编译得</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">井井有条，我在Webpack配置中</font><font style="vertical-align: inherit;">添加了</font><font style="vertical-align: inherit;">刚刚更新为与Babel6配合使用的内容：</font></font></p>

<pre><code>module.exports = function(options) {<font></font>
  var jsLoaders = ['babel?presets[]=es2015'];<font></font>
  [...]<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        exclude: /node_modules/,<font></font>
        loaders: jsLoaders<font></font>
      },<font></font>
      {<font></font>
        test: /\.jsx$/,<font></font>
        exclude: /node_modules/,<font></font>
        loaders: options.production ? jsLoaders : ['react-hot'].concat(jsLoaders)<font></font>
      },<font></font>
      [...]<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
现在，当我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></strong> <code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在root中设置根目录或预设选项的</font><strong><font style="vertical-align: inherit;">情况下</font></strong><font style="vertical-align: inherit;">进行</font><font style="vertical-align: inherit;">编译时</font></font><code>package.JSON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即仅在webpack配置中设置了babel-loader es2015预设时，我在React组件类中收到有关静态propTypes的意外令牌错误：</font></font></p>

<pre><code>ERROR in ./app/components/form/index.jsx<font></font>
Module build failed: SyntaxError: /Library/WebServer/Documents/yarsk.test/app/components/form/index.jsx: Unexpected token (19:19)<font></font>
  17 | // ES6 React Component:<font></font>
  18 | export default class SurveyForm extends Component {<font></font>
&gt; 19 |   static propTypes = {<font></font>
     |                    ^<font></font>
</code></pre>

<p>On GitHub I got told this is a <code>stage-1</code> feature, namely <code>transform-class-properties</code>. So I would like to implement <code>stage-0</code> right away.
<br><strong>BUT</strong><br>
When I do so by adding <code>.babelrc</code> or defining <code>package.JSON</code> like above I get a very weird build fail error:</p>

<pre><code>ERROR in ./app/components/form/index.jsx<font></font>
Module build failed: Error: /Library/WebServer/Documents/yarsk.test/app/components/form/index.jsx: We don't know what to do with this node type. We were previously a Statement but we can't fit in here?<font></font>
    at NodePath.insertAfter (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/modification.js:181:13)<font></font>
    at NodePath.replaceWithMultiple (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/replacement.js:92:8)<font></font>
    at handleClassWithSuper (/Library/WebServer/Documents/yarsk.test/node_modules/babel-plugin-transform-class-constructor-call/lib/index.js:80:10)<font></font>
    at PluginPass.Class (/Library/WebServer/Documents/yarsk.test/node_modules/babel-plugin-transform-class-constructor-call/lib/index.js:101:11)<font></font>
    at newFn (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/visitors.js:233:27)<font></font>
    at NodePath._call (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/context.js:72:18)<font></font>
    at NodePath.call (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/context.js:44:17)<font></font>
    at NodePath.visit (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/context.js:102:12)<font></font>
    at TraversalContext.visitQueue (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:151:16)<font></font>
    at TraversalContext.visitSingle (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:111:19)<font></font>
    at TraversalContext.visit (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:195:19)<font></font>
    at Function.traverse.node (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/index.js:139:17)<font></font>
    at NodePath.visit (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/path/context.js:106:22)<font></font>
    at TraversalContext.visitQueue (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:151:16)<font></font>
    at TraversalContext.visitMultiple (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:106:17)<font></font>
    at TraversalContext.visit (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/context.js:193:19)<font></font>
    at Function.traverse.node (/Library/WebServer/Documents/yarsk.test/node_modules/babel-traverse/lib/index.js:139:17)<font></font>
 @ ./app/index.jsx 9:0-28<font></font>
</code></pre>

<p>Or in short: <code>Module build failed: Error: /.../index.jsx: We don't know what to do with this node type. We were previously a Statement but we can't fit in here?</code></p>

<p><strong>This is where I'm stuck.</strong> I wrote this component with Babel5 when I was able to compile with babel-loader like this and everything worked fine:</p>

<pre><code>loader: 'babel?optional[]=runtime&amp;stage=0
</code></pre>

<p>Now I'm getting the mentioned errors compiling.</p>

<ul>
<li>Is this a <code>babel-loader</code> issue, or a <code>babel</code> issue?</li>
<li>Where do I have to configure <code>stage-0</code> so that it won't
throw errors?</li>
</ul>

<p><br></p>

<h2>Update</h2>

<p>When compiling with presets set and using the mentioned workaround for the class export bug (must not export class until after creating it) the order of the set presets changes the error message. When I set <code>stage-0</code> first the error now is <code>'this' is not allowed before super() (This is an error on an internal node. Probably an internal error)</code>
When I put <code>stage-0</code> second or third I get the message about syntax error from above.</p>

<p><br></p>

<h2>Latest</h2>

<p>For the latest advances regarding these bugs <a href="https://stackoverflow.com/a/33620949/1147595">see my post</a> or <a href="https://phabricator.babeljs.io/" rel="noreferrer">the new babel issue tracker on phabricator</a> for more. <em>(Basically compiling is fixed as of 6.2.1 but there's other things happening now)</em></p>

<p><strong>All the bugs mentioned in this article are completely fixed as of Babel 6.3.x. Please update your dependencies if you're still having issues.</strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3205篇《如何使用React和Webpack设置Babel 6 Stage 0》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/BerndWessels/react-webpack" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Babel 6，React，Webpack和Sequelize的工作示例：</font></font></p>

<p><a href="https://github.com/BerndWessels/react-webpack" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/BerndWessels/react-webpack</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上这是 </font></font><code>.babelrc</code></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    "es2015",<font></font>
    "react",<font></font>
    "stage-0"<font></font>
  ],<font></font>
  "env": {<font></font>
    "development": {<font></font>
      "plugins": [<font></font>
        "babel-relay-plugin-loader",<font></font>
        [<font></font>
          "react-transform",<font></font>
          {<font></font>
            "transforms": [<font></font>
              {<font></font>
                "transform": "react-transform-hmr",<font></font>
                "imports": [<font></font>
                  "react"<font></font>
                ],<font></font>
                "locals": [<font></font>
                  "module"<font></font>
                ]<font></font>
              },<font></font>
              {<font></font>
                "transform": "react-transform-catch-errors",<font></font>
                "imports": [<font></font>
                  "react",<font></font>
                  "redbox-react"<font></font>
                ]<font></font>
              }<font></font>
            ]<font></font>
          }<font></font>
        ]<font></font>
      ]<font></font>
    },<font></font>
    "production": {<font></font>
      "plugins": [<font></font>
        "babel-relay-plugin-loader"<font></font>
      ]<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是模块版本</font></font></p>

<pre><code>babel-core@6.3.17<font></font>
babel-loader@6.2.0<font></font>
babel-plugin-react-transform@2.0.0-beta1<font></font>
babel-preset-es2015@6.3.13<font></font>
babel-preset-react@6.3.13<font></font>
babel-preset-stage-0@6.3.13<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我行得通。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试用以下结构替换您的出口：</font></font></p>

<pre><code>class SurveyForm extends Component {/*implementation*/}<font></font>
export default SurveyForm<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
