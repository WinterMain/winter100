---
layout: question
title:  webpack-dev-server热重装不起作用
date:   2020-03-12T12:27:41.000Z
description: 我的文件结构是：dist  css    style.css  index.html  js    bundle.jssrc  css...
img: 
author: 十三前端Harry
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的文件结构是：</font></font></p>

<pre><code>dist<font></font>
  css<font></font>
    style.css<font></font>
  index.html<font></font>
  js<font></font>
    bundle.js<font></font>
src<font></font>
  css<font></font>
    style.css<font></font>
  index.html<font></font>
  js<font></font>
    main.js<font></font>
node_modules<font></font>
webpack.config.js<font></font>
package.json<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的webpack.config.js看起来像：</font></font></p>

<pre><code>module.exports = {<font></font>
    entry: './src/js/main.js',<font></font>
    output: {<font></font>
        path: __dirname,<font></font>
        filename: './dist/js/bundle.js'<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {<font></font>
                test: /\.js$/,<font></font>
                exclude: /(node_modules)/,<font></font>
                loader: 'babel',<font></font>
                query: {<font></font>
                    presets: ['es2015']<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                test: /\.vue$/,<font></font>
                loader: 'vue'<font></font>
            }<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我跑：</font></font></p>

<pre><code>webpack-dev-server --content-base dist --hot
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以构建，并且看起来正在运行。</font><font style="vertical-align: inherit;">localhost：8080显示了预期的结果，但是热重载只是不起作用。</font><font style="vertical-align: inherit;">当我更改文件时，我可以在终端中看到正在重建，但是浏览器中什么也没有发生。</font><font style="vertical-align: inherit;">我在配置中缺少什么吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1323篇《webpack-dev-server热重装不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我增加了可以观看的最大文件更改数量，这对我有用。</font><font style="vertical-align: inherit;">我想对我来说问题是文件太多。</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=1999999 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<p><a href="https://unix.stackexchange.com/questions/444998/how-to-set-and-understand-fs-notify-max-user-watches"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，删除</font></font><code>"test" "echo \"Error: no test specified\" &amp;&amp; exit 1"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本对象下</font><font style="vertical-align: inherit;">包含的行</font><font style="vertical-align: inherit;">，并将其替换为：</font></font></p>

<pre><code>...<font></font>
"scripts": {<font></font>
    "start": "webpack-dev-server --hot"<font></font>
  },<font></font>
<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重新启动您的项目，只需使用</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我遇到这个问题时，这对我有用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：您可以共享您的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也尝试将其添加到webpack.config.js中</font></font></p>

<pre><code>devServer: {<font></font>
  inline: true,<font></font>
  port: 3000,<font></font>
  hot: true<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GreenL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将在内部构建所有文件，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且不会将其</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吐出到您的输出路径中。</font><font style="vertical-align: inherit;">在</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有开发服务器的情况下单独</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，会将实际的编译工作复制到磁盘上。</font><font style="vertical-align: inherit;">开发服务器会执行内存中的所有操作，从而大大加快了重新编译的速度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决您的热装问题，请将内容库设置为源目录并启用</font></font><a href="https://webpack.js.org/configuration/dev-server/#devserverinline" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联模式</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>webpack-dev-server --content-base src --hot --inline
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--inline --hot对我来说不是问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是redux，可以尝试一下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种随机原因</font></font><code>redux-devtools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不允许我进行热装。</font><font style="vertical-align: inherit;">尝试从根组件和</font></font><code>redux compose</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置中</font><font style="vertical-align: inherit;">删除它</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：在商店配置中，将此配置使用redux devtool浏览器扩展： </font></font><code>window.devToolsExtension ? window.devToolsExtension() : f =&gt; f</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，必须阅读：</font><a href="https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.ejpsmve8f" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.ejpsmve8f" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.ejpsmve8f</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或尝试热重装3：示例：</font><a href="https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack热重装对我也停止了工作。</font><font style="vertical-align: inherit;">对我来说，解决方案是删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹并重新安装所有依赖项。</font><font style="vertical-align: inherit;">只需</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">打开的父文件夹</font><font style="vertical-align: inherit;">并运行</font></font><code>npm install</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
