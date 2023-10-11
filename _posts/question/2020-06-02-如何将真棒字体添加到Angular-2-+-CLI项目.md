---
layout: question
title:  如何将真棒字体添加到Angular 2 + CLI项目
date:   2020-06-02T01:53:59.000Z
description: 我正在使用Angular 2+和Angular CLI。如何在我的项目中添加超棒的字体？...
img: 
author: 西门
category: question
answer: 15
tags: 角度的 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Angular 2+和Angular CLI。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在我的项目中添加超棒的字体？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4246篇《如何将真棒字体添加到Angular 2 + CLI项目》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果由于某种原因您无法安装软件包，请抛出npm。</font><font style="vertical-align: inherit;">您始终可以编辑index.html并在标题中添加超赞的CSS字体。</font><font style="vertical-align: inherit;">然后在项目中使用它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于webpack2使用：</font></font></p>

<pre><code>{<font></font>
 test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?(v=)?(\d+)(\.\d+)*)?$/,<font></font>
                    loader: "file-loader"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 </font></font><code>file-loader?name=/assets/fonts/[name].[ext]</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">千羽</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，有几种方法可以在Angular CLI上安装fontAwesome：</font></font></p>

<pre><code>ng add @fortawesome/angular-fontawesome<font></font>
<font></font>
OR using yarn<font></font>
<font></font>
yarn add @fortawesome/fontawesome-svg-core<font></font>
yarn add @fortawesome/free-solid-svg-icons<font></font>
yarn add @fortawesome/angular-fontawesome<font></font>
<font></font>
OR Using NPM<font></font>
<font></font>
npm install @fortawesome/fontawesome-svg-core<font></font>
npm install @fortawesome/free-solid-svg-icons<font></font>
npm install @fortawesome/angular-fontawesome<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考在这里：</font><a href="https://github.com/FortAwesome/angular-fontawesome" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/FortAwesome/angular-fontawesome" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/FortAwesome/angular-fontawesome</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Angular 9使用</font></font><code>ng</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>ng add @fortawesome/angular-fontawesome@0.6.x
</code></pre>

<p><a href="https://github.com/FortAwesome/angular-fontawesome/blob/master/README.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看更多信息</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用Font Awesome 5+，大多数答案都集中在旧版本上</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于新的Font Awesome 5+，尚未发布角度项目，因此，如果您要使用Font Awesome网站atm上提到的示例，则需要使用变通方法。</font><font style="vertical-align: inherit;">（尤其是fas，far类而不是fa类）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在我的styles.css中将cdn导入到Font Awesome 5。</font><font style="vertical-align: inherit;">只是添加了此内容，以防有人比我更快找到答案:-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Style.css中的代码</font></font></p>

<pre><code>@import "https://use.fontawesome.com/releases/v5.0.7/css/all.css";
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其作为“ devDependencies”字体添加到您的package.json中：awesome：“版本号”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到您配置的命令提示符键入npm命令。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在Angular项目中使用Font Awesome 5，请将下面的代码插入src / index.html文件中。</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我浪费了数小时试图将最新版本的FontAwesome 5.2.0与AngularCLI 6.0.3和Material Design一起使用。</font><font style="vertical-align: inherit;">我按照FontAwesome网站上的npm安装说明进行操作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们的最新文档指示您使用以下内容进行安装：</font></font></p>

<pre><code>npm install @fortawesome/fontawesome-free
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浪费了几个小时后，我终于卸载了它，并使用以下命令安装了真棒字体（这将安装FontAwesome v4.7.0）：</font></font></p>

<pre><code>npm install font-awesome --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在使用以下命令可以正常工作：</font></font></p>

<pre><code>$fa-font-path: "~font-awesome/fonts" !default;<font></font>
@import "~font-awesome/scss/font-awesome.scss";<font></font>
&lt;mat-icon fontSet="fontawesome" fontIcon="fa-android"&gt;&lt;/mat-icon&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案已过时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于有角9和Fontawesome 5</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装FontAwesome</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install @ fortawesome / fontawesome-free-保存</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在样式下的angular.json上注册 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ node_modules/@fortawesome/fontawesome-free/css/all.min.css”</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的应用程序上使用它 </font></font></p>

<p></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面有很多说明，我建议您看一下。</font><font style="vertical-align: inherit;">但是，需要注意的是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，在我的项目（仅一个星期的新练习项目）中，</font><font style="vertical-align: inherit;">Using </font></font><code>&lt;i class="fas fa-coffee"&gt;&lt;/i&gt;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且过去的一周内，此处的示例图标也从Font Awesome复制到了剪贴板。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>&lt;i class="fa fa-coffee"&gt;&lt;/i&gt;</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实有效</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果在您的项目上安装了Font Awesome之后仍无法正常工作，建议您检查图标上的类以删除“ s”以查看其是否正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我会为此解决，因为font-awesome现在根据其文档安装的方式有所不同。</font></font></p>

<pre><code>npm install --save-dev @fortawesome/fontawesome-free
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么它令人赞叹不已，现在让我escape然，但我认为我会坚持使用最新版本，而不是退回到旧字体真棒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我将其导入到我的scss</font></font></p>

<pre><code>$fa-font-path: "../node_modules/@fortawesome/fontawesome-free/webfonts";<font></font>
@import "~@fortawesome/fontawesome-free/scss/fontawesome";<font></font>
@import "~@fortawesome/fontawesome-free/scss/brands";<font></font>
@import "~@fortawesome/fontawesome-free/scss/regular";<font></font>
@import "~@fortawesome/fontawesome-free/scss/solid";<font></font>
@import "~@fortawesome/fontawesome-free/scss/v4-shims";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章介绍了如何将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fontawesome 5</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成</font><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 6中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Angular 5和以前的版本也可以使用，但是您必须调整我的著作）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项1：添加css文件</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：每个图标都会包括在内</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反：将包括每个图标（应用程序尺寸较大，因为包括了所有字体）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下包：</font></font></p>

<pre><code>npm install @fortawesome/fontawesome-free-webfonts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将以下几行添加到您的angular.json中：</font></font></p>

<pre><code>"app": {<font></font>
....<font></font>
"styles": [<font></font>
....<font></font>
"node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css",<font></font>
"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",<font></font>
"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",<font></font>
"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css"<font></font>
],<font></font>
...    <font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项2：角度包装</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：较小的应用程序大小</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反：您必须包括要单独使用的每个图标</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用FontAwesome 5 Angular软件包：</font></font></p>

<pre><code>npm install @fortawesome/angular-fontawesome
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需按照他们的文档添加图标即可。</font><font style="vertical-align: inherit;">他们使用svg-icons，因此您只需要添加真正使用的svgs /图标即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Angular 6，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一 </font></font><code>npm install font-awesome --save</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加   </font></font><code>node_modules/font-awesome/css/font-awesome.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular.json</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在前面添加任何点</font></font><code>node_modules/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是SASS，则可以通过npm进行安装 </font></font></p>

<pre><code>npm install font-awesome --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用以下命令将其导入您</font></font><code>/src/styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的：</font></font></p>

<pre><code>$fa-font-path: "../node_modules/font-awesome/fonts";<font></font>
@import "../node_modules/font-awesome/scss/font-awesome.scss";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示：尽可能避免</font></font><code>angular-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">破坏基础架构。</font><font style="vertical-align: inherit;">;）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 2.0最终发行版之后，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular2 CLI项目的结构已更改</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -您不需要任何供应商文件，不需要system.js-仅Webpack。</font><font style="vertical-align: inherit;">所以你也是：</font></font></p>

<ol>
<li><p><code>npm install font-awesome --save</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>angular-cli.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中找到</font></font><code>styles[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组，然后在此处添加“真棒字体”引用目录，如下所示：</font></font></p>

<pre><code>"apps": [<font></font>
    {<font></font>
      "root": "src",<font></font>
      "outDir": "dist",<font></font>
      ....<font></font>
      "styles": [<font></font>
          "styles.css",<font></font>
          "../node_modules/bootstrap/dist/css/bootstrap.css",<font></font>
          "../node_modules/font-awesome/css/font-awesome.css" // -here webpack will automatically build a link css element out of this!?<font></font>
      ],<font></font>
      ...<font></font>
  }<font></font>
  ]<font></font>
],<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular的最新版本中，请改用该</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，而不使用</font></font><code>../</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，使用</font></font><code>"node_modules/font-awesome/css/font-awesome.css"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></li>
<li><p>Place some font-awesome icons in any html file you want:</p>

<pre class="lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;i</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"fa fa-american-sign-language-interpreting fa-5x"</span><span class="pln"> </span><span class="atn">aria-hidden</span><span class="pun">=</span><span class="atv">"true"</span><span class="tag">&gt;</span><span class="pln"> </span><span class="tag">&lt;/i&gt;</span></code></pre></li>
<li><p>Stop the application <kbd>Ctrl</kbd> + <kbd>c</kbd> then re-run the  app using <code>ng serve</code> because the watchers are only for the src folder and angular-cli.json is not observed for changes.</p></li>
<li>Enjoy your awesome icons!</li>
</ol></div>
        </div></div>
    {% endraw %}
  </div>
<div>
