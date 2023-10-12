---
layout: question
title:  在Cloud9.io上的Webpack开发服务器中运行我的React应用程序时，我收到“无效的主机标头”消息
date:   2020-03-11T04:20:05.000Z
description: 我正在使用Cloud9.io ubuntu VM Online IDE作为环境，并且通过对该错误进行故障诊断而减少了使用Webpack开发服务器运行应用程...
img: 
author: 猪猪Jim
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Cloud9.io ubuntu VM Online IDE作为环境，并且通过对该错误进行故障诊断而减少了使用Webpack开发服务器运行应用程序的速度。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用以下命令启动它：</font></font></p>

<pre><code>webpack-dev-server -d --watch --history-api-fallback --host $IP --port $PORT
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ IP是具有主机地址的变量，$ PORT具有端口号。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我被指示在Cloud 9中部署应用程序时使用这些var，因为它们具有默认的IP和PORT信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器启动并编译代码，没问题，虽然它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示索引文件。</font><font style="vertical-align: inherit;">只有空白屏幕，“无效的主机头”为文本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是请求：</font></font></p>

<pre><code>GET / HTTP/1.1<font></font>
Host: store-client-nestroia1.c9users.io<font></font>
Connection: keep-alive<font></font>
Pragma: no-cache<font></font>
Cache-Control: no-cache<font></font>
Upgrade-Insecure-Requests: 1<font></font>
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 <font></font>
(KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36<font></font>
Accept: <font></font>
text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8<font></font>
DNT: 1<font></font>
Accept-Encoding: gzip, deflate, sdch, br<font></font>
Accept-Language: en-US,en;q=0.8<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "workspace",<font></font>
  "version": "0.0.0",<font></font>
  "scripts": {<font></font>
    "dev": "webpack -d --watch",<font></font>
    "server": "webpack-dev-server -d --watch --history-api-fallback --host $IP --port $PORT",<font></font>
    "build": "webpack --config webpack.config.js"<font></font>
  },<font></font>
  "author": "Artur Vieira",<font></font>
  "license": "ISC",<font></font>
  "dependencies": {<font></font>
    "babel-core": "^6.18.2",<font></font>
    "babel-loader": "^6.2.8",<font></font>
    "babel-preset-es2015": "^6.18.0",<font></font>
    "babel-preset-react": "^6.16.0",<font></font>
    "babel-preset-stage-0": "^6.24.1",<font></font>
    "file-loader": "^0.11.1",<font></font>
    "node-fetch": "^1.6.3",<font></font>
    "react": "^15.5.4",<font></font>
    "react-bootstrap": "^0.30.9",<font></font>
    "react-dom": "^15.5.4",<font></font>
    "react-router": "^4.1.1",<font></font>
    "react-router-dom": "^4.1.1",<font></font>
    "url-loader": "^0.5.8",<font></font>
    "webpack": "^2.4.1",<font></font>
    "webpack-dev-server": "^2.4.4",<font></font>
    "whatwg-fetch": "^2.0.3"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是webpack.config.js：</font></font></p>

<pre><code>const path = require('path');<font></font>
<font></font>
module.exports = {<font></font>
<font></font>
  entry: ['whatwg-fetch', "./app/_app.jsx"], // string | object | array<font></font>
  // Here the application starts executing<font></font>
  // and webpack starts bundling<font></font>
  output: {<font></font>
    // options related to how webpack emits results<font></font>
<font></font>
    path: path.resolve(__dirname, "./public"), // string<font></font>
    // the target directory for all output files<font></font>
    // must be an absolute path (use the Node.js path module)<font></font>
<font></font>
    filename: "bundle.js", // string<font></font>
    // the filename template for entry chunks<font></font>
<font></font>
    publicPath: "/public/", // string<font></font>
    // the url to the output directory resolved relative to the HTML page<font></font>
  },<font></font>
<font></font>
  module: {<font></font>
    // configuration regarding modules<font></font>
<font></font>
    rules: [<font></font>
      // rules for modules (configure loaders, parser options, etc.)<font></font>
      {<font></font>
        test: /\.jsx?$/,<font></font>
        include: [<font></font>
          path.resolve(__dirname, "./app")<font></font>
        ],<font></font>
        exclude: [<font></font>
          path.resolve(__dirname, "./node_modules")<font></font>
        ],<font></font>
        loader: "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0",<font></font>
        // the loader which should be applied, it'll be resolved relative to the context<font></font>
        // -loader suffix is no longer optional in webpack2 for clarity reasons<font></font>
        // see webpack 1 upgrade guide<font></font>
      },<font></font>
      {<font></font>
        test: /\.css$/,<font></font>
        use: [ 'style-loader', 'css-loader' ]<font></font>
      },<font></font>
      {<font></font>
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,<font></font>
        loader: 'url-loader',<font></font>
        options: {<font></font>
          limit: 10000<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
<font></font>
  devServer: {<font></font>
    compress: true<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack开发服务器由于我的主机设置而返回此消息。</font><font style="vertical-align: inherit;">在webpack-dev-server / lib / Server.js第60行中。来自</font></font><a href="https://github.com/webpack/webpack-dev-server" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack/webpack-dev-server</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是如何设置才能正确通过此检查。</font><font style="vertical-align: inherit;">任何帮助将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第653篇《在Cloud9.io上的Webpack开发服务器中运行我的React应用程序时，我收到“无效的主机标头”消息》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尚未从CRA中退出，则无法轻松修改Webpack配置。</font><font style="vertical-align: inherit;">配置文件隐藏在中</font></font><code>node_modules/react_scripts/config/webpackDevServer.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不鼓励您更改该配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，您可以将环境变量</font></font><code>DANGEROUSLY_DISABLE_HOST_CHECK</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为禁用主机检查：</font></font></p>

<pre class="lang-none prettyprint-override"><code>DANGEROUSLY_DISABLE_HOST_CHECK=true yarn start  <font></font>
# or the equivalent npm command<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在C9上使用create-react-app，请运行此命令以启动 </font></font></p>

<pre><code>npm run start --public $C9_HOSTNAME
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并从您的主机名开始访问该应用程序（例如</font></font><code>$C_HOSTNAME</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在终端中</font><font style="vertical-align: inherit;">键入</font><font style="vertical-align: inherit;">以获取主机名）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生此问题的原因是</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.4.4添加了主机检查。</font><font style="vertical-align: inherit;">您可以通过将其添加到您的webpack配置中来禁用它：</font></font></p>

<pre><code> devServer: {<font></font>
    compress: true,<font></font>
    disableHostCheck: true,   // That solved it<font></font>
<font></font>
 }      <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：请注意，此修复程序不安全。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅以下答案以获取安全的解决方案：</font><a href="https://stackoverflow.com/a/43621275/5425585"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://stackoverflow.com/a/43621275/5425585"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/43621275/5425585</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
