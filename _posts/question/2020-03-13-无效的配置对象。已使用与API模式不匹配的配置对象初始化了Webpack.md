---
layout: question
title:  无效的配置对象。已使用与API模式不匹配的配置对象初始化了Webpack
date:   2020-03-13T12:09:01.000Z
description: 我有一个通过在线课程创建的简单的helloworld react应用，但是出现此错误：  无效的配置对象。已使用与API模式不匹配的配置对象初始化W...
img: 
author: LEYA
category: question
answer: 10
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个通过在线课程创建的简单的helloworld react应用，但是出现此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的配置对象。</font><font style="vertical-align: inherit;">已使用与API模式不匹配的配置对象初始化Webpack。</font><font style="vertical-align: inherit;">-配置具有未知属性“ postcss”。</font><font style="vertical-align: inherit;">这些属性是有效的：object {amd？，bail？，cache？，context？，dependencies？，devServer？，devtool？，entry，externals？，loader？，module？，name？，node？，output？，performance?。 ，插件，配置文件，recordsInputPath，records utputPath，recordsPath，resolve，resolveLoader，stats，target，watch，watchOptions？</font><font style="vertical-align: inherit;">}对于错别字：请更正它们。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  对于加载程序选项：webpack 2不再允许配置中的自定义属性。</font><font style="vertical-align: inherit;">应该更新加载程序，以允许通过module.rules中的加载程序选项传递选项。</font><font style="vertical-align: inherit;">在更新加载程序之前，可以使用LoaderOptionsPlugin将这些选项传递给加载程序：插件：[new webpack.LoaderOptionsPlugin（{//测试：/.xxx$/，//可能仅将此功能应用于某些模块选项：{postcss： ...}}）]-configuration.resolve具有未知属性'root'。</font><font style="vertical-align: inherit;">这些属性是有效的：object {alias？，aliasFields？，cachePredicate？，descriptionFiles？，forceExtension？，enforceModuleExtension？，extensions，fileSystem？，mainFields，mainFiles？，moduleExtensions？，modules？，plugins？，resolver？，symlinks ？，unsafeCache ?, </font><font style="vertical-align: inherit;">useSyncFileSystemCalls？</font><font style="vertical-align: inherit;">}-configuration.resolve.extensions [0]不能为空。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的webpack文件是：</font></font></p>

<pre><code>// work with all paths in a cross-platform manner<font></font>
const path = require('path');<font></font>
<font></font>
// plugins covered below<font></font>
const { ProvidePlugin } = require('webpack');<font></font>
const CopyWebpackPlugin = require('copy-webpack-plugin');<font></font>
const HtmlWebpackPlugin = require('html-webpack-plugin');<font></font>
<font></font>
// configure source and distribution folder paths<font></font>
const srcFolder = 'src';<font></font>
const distFolder = 'dist';<font></font>
<font></font>
// merge the common configuration with the environment specific configuration<font></font>
module.exports = {<font></font>
<font></font>
    // entry point for application<font></font>
    entry: {<font></font>
        'app': path.join(__dirname, srcFolder, 'ts', 'app.tsx')<font></font>
    },<font></font>
<font></font>
    // allows us to require modules using<font></font>
    // import { someExport } from './my-module';<font></font>
    // instead of<font></font>
    // import { someExport } from './my-module.ts';<font></font>
    // with the extensions in the list, the extension can be omitted from the <font></font>
    // import from path<font></font>
    resolve: {<font></font>
        // order matters, resolves left to right<font></font>
        extensions: ['', '.js', '.ts', '.tsx', '.json'],<font></font>
        // root is an absolute path to the folder containing our application <font></font>
        // modules<font></font>
        root: path.join(__dirname, srcFolder, 'ts')<font></font>
    },<font></font>
<font></font>
    module: {<font></font>
        loaders: [<font></font>
            // process all TypeScript files (ts and tsx) through the TypeScript <font></font>
            // preprocessor<font></font>
            { test: /\.tsx?$/,loader: 'ts-loader' },<font></font>
            // processes JSON files, useful for config files and mock data<font></font>
            { test: /\.json$/, loader: 'json' },<font></font>
            // transpiles global SCSS stylesheets<font></font>
            // loader order is executed right to left<font></font>
            {<font></font>
                test: /\.scss$/,<font></font>
                exclude: [path.join(__dirname, srcFolder, 'ts')],<font></font>
                loaders: ['style', 'css', 'postcss', 'sass']<font></font>
            },<font></font>
            // process Bootstrap SCSS files<font></font>
            {<font></font>
                test: /\.scss$/,<font></font>
                exclude: [path.join(__dirname, srcFolder, 'scss')],<font></font>
                loaders: ['raw', 'sass']<font></font>
            }<font></font>
        ]<font></font>
    },<font></font>
<font></font>
    // configuration for the postcss loader which modifies CSS after<font></font>
    // processing<font></font>
    // autoprefixer plugin for postcss adds vendor specific prefixing for<font></font>
    // non-standard or experimental css properties<font></font>
    postcss: [ require('autoprefixer') ],<font></font>
<font></font>
    plugins: [<font></font>
        // provides Promise and fetch API for browsers which do not support<font></font>
        // them<font></font>
        new ProvidePlugin({<font></font>
            'Promise': 'es6-promise',<font></font>
            'fetch': 'imports?this=&gt;global!exports?global.fetch!whatwg-fetch'<font></font>
        }),<font></font>
        // copies image files directly when they are changed<font></font>
        new CopyWebpackPlugin([{<font></font>
            from: path.join(srcFolder, 'images'),<font></font>
            to: path.join('..', 'images')<font></font>
        }]),<font></font>
        // copies the index.html file, and injects a reference to the output JS <font></font>
        // file, app.js<font></font>
        new HtmlWebpackPlugin({<font></font>
            template: path.join(__dirname, srcFolder, 'index.html'),<font></font>
            filename:  path.join('..', 'index.html'),<font></font>
            inject: 'body',<font></font>
        })<font></font>
    ],<font></font>
<font></font>
    // output file settings<font></font>
    // path points to web server content folder where the web server will serve <font></font>
    // the files from file name is the name of the files, where [name] is the <font></font>
    // name of each entry point <font></font>
    output: {<font></font>
        path: path.join(__dirname, distFolder, 'js'),<font></font>
        filename: '[name].js',<font></font>
        publicPath: '/js'<font></font>
    },<font></font>
<font></font>
    // use full source maps<font></font>
    // this specific setting value is required to set breakpoints in they<font></font>
    // TypeScript source in the web browser for development other source map<font></font>
    devtool: 'source-map',<font></font>
<font></font>
    // use the webpack dev server to serve up the web application<font></font>
    devServer: {<font></font>
        // files are served from this folder<font></font>
        contentBase: 'dist',<font></font>
        // support HTML5 History API for react router<font></font>
        historyApiFallback: true,<font></font>
        // listen to port 5000, change this to another port if another server <font></font>
        // is already listening on this port<font></font>
        port: 5000,<font></font>
        // proxy requests to the JSON server REST service<font></font>
        proxy: {<font></font>
            '/widgets': {<font></font>
                // server to proxy<font></font>
                target: 'http://0.0.0.0:3010'<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我和你有同样的错误。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm卸载webpack --save-dev</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install webpack@2.1.0-beta.22 --save-dev </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决这个问题！。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，问题是项目所在的文件夹的名称，其名称为“！”。</font><font style="vertical-align: inherit;">我要做的就是重命名文件夹，一切就绪。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将webpack引入我使用npm init创建的项目时，出现了相同的错误消息。</font></font></p>

<p><code>Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
   - configuration.output.path: The provided value "dist/assets" is not an absolute path!</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从使用毛线开始，这为我解决了问题：</font></font></p>

<pre><code>brew update<font></font>
brew install yarn<font></font>
brew upgrade yarn<font></font>
yarn init<font></font>
yarn add webpack webpack-dev-server path<font></font>
touch webpack.config.js<font></font>
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev<font></font>
yarn add html-webpack-plugin<font></font>
yarn start<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现以下链接</font><a href="https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel" rel="nofollow noreferrer"><font style="vertical-align: inherit;">很有</font></a><font style="vertical-align: inherit;">用：
 </font></font><a href="https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack和Babel设置React环境</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用冲突版本（角度js）时，通常会发生此错误。</font><font style="vertical-align: inherit;">因此，Webpack无法启动应用程序。</font><font style="vertical-align: inherit;">您只需删除webpack并重新安装即可对其进行修复。</font></font></p>

<pre><code>npm uninstall webpack --save-dev<font></font>
npm install webpack --save-dev<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动应用程序，一切正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够帮助某人。</font><font style="vertical-align: inherit;">干杯</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我改变了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">装载机</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件和更新包</font></font><code>html-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>webpack-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到随后的最新版本，它的工作对我来说！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack.config.js中，将加载器：[..]替换为规则：[..]对我有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将“加载程序”更改为“规则”对我有用（webpack v4）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGilPro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜你的webpack版本是2.2.1。</font><font style="vertical-align: inherit;">我认为您应该使用此迁移指南-&gt;   </font></font><a href="https://webpack.js.org/guides/migrating/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://webpack.js.org/guides/migrating/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以使用</font></font><a href="https://github.com/jquintozamora/react-typescript-es6-webpack2-postCSS" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeSCript + Webpack 2的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需从“ webpack.config.js”中的“加载程序”更改为“规则”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为在Webpack 1中使用了加载程序，在Webpack2中使用了规则。</font><font style="vertical-align: inherit;">您可以看到存在</font></font><a href="https://stackoverflow.com/a/43805263/5453953"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">差异</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YLD</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请尝试以下步骤： </font></font></p>

<pre><code>npm uninstall webpack --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次是</font></font></p>

<pre><code>npm install webpack@2.1.0-beta.22 --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您应该可以再次吞食。</font><font style="vertical-align: inherit;">为我解决了此问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
