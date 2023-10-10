---
layout: question
title:  无法导入CSS / SCSS模块。TypeScript说“找不到模块”
date:   2020-03-19T03:39:16.000Z
description: 我正在尝试从CSS模块导入主题，但是TypeScript给我一个“找不到模块”错误，并且该主题未在运行时应用。我认为我的Webpack配置有问题，但是我不...
img: 
author: MandyL
category: question
answer: 0
tags: TypeScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试从CSS模块导入主题，但是TypeScript给我一个“找不到模块”错误，并且该主题未在运行时应用。</font><font style="vertical-align: inherit;">我认为我的Webpack配置有问题，但是我不确定问题出在哪里。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用以下工具：</font></font></p>

<pre><code>"typescript": "^2.0.3"<font></font>
"webpack": "2.1.0-beta.25"<font></font>
"webpack-dev-server": "^2.1.0-beta.9"<font></font>
"react": "^15.4.0-rc.4"<font></font>
"react-toolbox": "^1.2.3"<font></font>
"node-sass": "^3.10.1"<font></font>
"style-loader": "^0.13.1"<font></font>
"css-loader": "^0.25.0"<font></font>
"sass-loader": "^4.0.2"<font></font>
"sass-lint": "^1.9.1"<font></font>
"sasslint-webpack-plugin": "^1.0.4"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>webpack.config.js</code></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
var sassLintPlugin = require('sasslint-webpack-plugin');<font></font>
<font></font>
module.exports = {<font></font>
  entry: [<font></font>
    'webpack-dev-server/client?http://localhost:8080',<font></font>
    'webpack/hot/dev-server',<font></font>
    './src/index.tsx',<font></font>
  ],<font></font>
  output: {<font></font>
    path: path.resolve(__dirname, 'dist'),<font></font>
    publicPath: 'http://localhost:8080/',<font></font>
    filename: 'dist/bundle.js',<font></font>
  },<font></font>
  devtool: 'source-map',<font></font>
  resolve: {<font></font>
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],<font></font>
  },<font></font>
  module: {<font></font>
    rules: [{<font></font>
      test: /\.js$/,<font></font>
      loader: 'source-map-loader',<font></font>
      exclude: /node_modules/,<font></font>
      enforce: 'pre',<font></font>
    }, {<font></font>
      test: /\.tsx?$/,<font></font>
      loader: 'tslint-loader',<font></font>
      exclude: /node_modules/,<font></font>
      enforce: 'pre',<font></font>
    }, {<font></font>
      test: /\.tsx?$/,<font></font>
      loaders: [<font></font>
        'react-hot-loader/webpack',<font></font>
        'awesome-typescript-loader',<font></font>
      ],<font></font>
      exclude: /node_modules/,<font></font>
    }, {<font></font>
      test: /\.scss$/,<font></font>
      loaders: ['style', 'css', 'sass']<font></font>
    }, {<font></font>
      test: /\.css$/,<font></font>
      loaders: ['style', 'css']<font></font>
    }],<font></font>
  },<font></font>
  externals: {<font></font>
    'react': 'React',<font></font>
    'react-dom': 'ReactDOM'<font></font>
  },<font></font>
  plugins: [<font></font>
    new sassLintPlugin({<font></font>
      glob: 'src/**/*.s?(a|c)ss',<font></font>
      ignoreFiles: ['src/normalize.scss'],<font></font>
      failOnWarning: false, // Do it.<font></font>
    }),<font></font>
    new webpack.HotModuleReplacementPlugin(),<font></font>
  ],<font></font>
  devServer: {<font></font>
    contentBase: './'<font></font>
  },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及我</font></font><code>App.tsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要导入的位置：</font></font></p>

<pre><code>import * as React from 'react';<font></font>
<font></font>
import { AppBar } from 'react-toolbox';<font></font>
import appBarTheme from 'react-toolbox/components/app_bar/theme.scss'<font></font>
// local ./theme.scss stylesheets aren't found either <font></font>
<font></font>
interface IAppStateProps {<font></font>
  // No props yet<font></font>
}<font></font>
<font></font>
interface IAppDispatchProps {<font></font>
  // No state yet<font></font>
}<font></font>
<font></font>
class App extends React.Component&lt;IAppStateProps &amp; IAppDispatchProps, any&gt; {<font></font>
<font></font>
  constructor(props: IAppStateProps &amp; IAppDispatchProps) {<font></font>
    super(props);<font></font>
  }<font></font>
<font></font>
  public render() {<font></font>
    return (<font></font>
<font></font>
        &lt;div className='wrapper'&gt;<font></font>
          &lt;AppBar title='My App Bar' theme={appBarTheme}&gt;<font></font>
          &lt;/AppBar&gt;<font></font>
        &lt;/div&gt;<font></font>
<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default App;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用类型安全样式表模块导入还需要什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2309篇《无法导入CSS / SCSS模块。TypeScript说“找不到模块”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
