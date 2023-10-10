---
layout: question
title:  在Mocha测试中使用Webpack别名
date:   2020-03-23T14:00:09.000Z
description: 我正在使用React / Redux / Webpack开发一个可运行的Web应用程序，现在开始将测试与Mocha集成在一起。我遵循Redux文档中有...
img: 
author: 神乐凯
category: question
answer: 4
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React / Redux / Webpack开发一个可运行的Web应用程序，现在开始将测试与Mocha集成在一起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循</font></font><a href="http://rackt.org/redux/docs/recipes/WritingTests.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux文档中有关编写测试的说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是现在我的webpack别名遇到了问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，看看我的动作创建者之一的此测试的imports部分：</font></font></p>

<pre><code>import expect       from 'expect'                 // resolves without an issue<font></font>
import * as actions from 'actions/app';           // can't resolve this alias<font></font>
import * as types   from 'constants/actionTypes'; // can't resolve this alias<font></font>
<font></font>
describe('Actions', () =&gt; {<font></font>
  describe('app',() =&gt; {<font></font>
    it('should create an action with a successful connection', () =&gt; {<font></font>
<font></font>
      const host = '***************',<font></font>
            port = ****,<font></font>
            db = '******',<font></font>
            user = '*********',<font></font>
            pass = '******';<font></font>
<font></font>
      const action = actions.createConnection(host, port, db, user, pass);<font></font>
<font></font>
      const expectedAction = {<font></font>
        type: types.CREATE_CONNECTION,<font></font>
        status: 'success',<font></font>
        payload: { host, port, database, username }<font></font>
      };<font></font>
<font></font>
      expect(action).toEqual(expectedAction);<font></font>
    });<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像评论所暗示的那样，mocha在引用别名依赖项时无法解析我的导入语句。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我还是Webpack的新手，所以这是我的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = {<font></font>
  devtool: 'eval-source-map',<font></font>
  entry: [<font></font>
    'webpack-hot-middleware/client',<font></font>
    './src/index'<font></font>
  ],<font></font>
  output: {<font></font>
    path: path.join(__dirname, 'dist'),<font></font>
    filename: 'bundle.js',<font></font>
    publicPath: '/static/'<font></font>
  },<font></font>
  resolve: {<font></font>
    extensions : ['', '.js', '.jsx'],<font></font>
    alias: {<font></font>
      actions: path.resolve(__dirname, 'src', 'actions'),<font></font>
      constants: path.resolve(__dirname, 'src', 'constants'),<font></font>
      /* more aliases */<font></font>
    }<font></font>
  },<font></font>
  plugins: [<font></font>
    new webpack.optimize.OccurenceOrderPlugin(),<font></font>
    new webpack.HotModuleReplacementPlugin(),<font></font>
    new webpack.NoErrorsPlugin()<font></font>
  ],<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.js$/,<font></font>
      loaders: ['babel'],<font></font>
      exclude: /node_modules/,<font></font>
      include: __dirname<font></font>
    }]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我正在使用命令</font></font><code>npm test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来运行mocha，这是我在中使用的脚本</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code> {   <font></font>
   "scripts": {<font></font>
     "test": "mocha ./src/**/test/spec.js --compilers js:babel-core/register --recursive"<font></font>
   }<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这就是我卡住的地方。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在运行时将webpack的别名包含到mocha中。</font></font></strong> </p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想你会</font></font><code>--require babel-register</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的</font></font><code>mocha.opts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用babel模块解析器插件</font></font><a href="https://github.com/tleunen/babel-plugin-module-resolver" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/tleunen/babel-plugin-module-resolver</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这允许您在.babelrc中设置别名，类似于您的webpack别名：</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    ["module-resolver", {<font></font>
       "alias": {<font></font>
         "actions": "./src/actions",<font></font>
         "constants": "./src/constants"<font></font>
       }<font></font>
    }]<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了同样的问题，但是使用此插件，我解决了它。</font></font></p>

<p><a href="https://www.npmjs.com/package/babel-plugin-webpack-aliases" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/babel-plugin-webpack-aliases</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的“ mocha”的执行命令未读取</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此无法解析别名。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
通过设置此插件，请</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用“ babel-core / register”进行编译时</font><font style="vertical-align: inherit;">考虑</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">结果，别名在测试期间也将有效。</font></font></p>

<pre><code>npm i -D babel-plugin-webpack-aliases
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将此设置添加到 </font></font><code>.babelrc</code></p>

<pre><code>{<font></font>
    "plugins": [<font></font>
        [ "babel-plugin-webpack-aliases", { "config": "./webpack.config.js" } ] <font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我意识到别名的所有内容都在</font></font><code>src/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中，因此我只需要修改</font></font><code>npm run test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本即可。</font></font></p>

<pre><code>{   <font></font>
  "scripts": {<font></font>
    "test": "NODE_PATH=./src mocha ./src/**/test/spec.js --compilers js:babel-core/register --recursive"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能对每个人都行不通，但这解决了我的问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用我编写的babel插件：</font></font><a href="https://github.com/trayio/babel-plugin-webpack-alias"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
 </font><a href="https://github.com/trayio/babel-plugin-webpack-alias"><font style="vertical-align: inherit;">//github.com/trayio/babel-plugin-webpack-alias</font></a><font style="vertical-align: inherit;"> 
只需将babel插件包含到，它就可以将别名路径转换为相对路径</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
