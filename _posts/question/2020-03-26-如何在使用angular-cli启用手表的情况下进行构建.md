---
layout: question
title:  如何在使用angular-cli启用手表的情况下进行构建？
date:   2020-03-26T07:54:09.000Z
description: 我不想使用服务，但我知道它会监视更改，构建和服务。我想以变化为基础。根据“ ng help”，构建采用参数--watch  ng build生成您的...
img: 
author: 神无
category: question
answer: 3
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想使用服务，但我知道它会监视更改，构建和服务。</font><font style="vertical-align: inherit;">我想以变化为基础。</font><font style="vertical-align: inherit;">根据“ ng help”，构建采用参数--watch</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng build生成您的应用程序并将其放入输出路径（默认为dist /）。</font><font style="vertical-align: inherit;">--watch（布尔值）（默认：false）别名：-w --watcher（String）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了-w和--watcher，但是都给出了错误。</font></font></p>

<pre><code>&gt;ng build -w<font></font>
<font></font>
Path must be a string. Received null<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3738篇《如何在使用angular-cli启用手表的情况下进行构建？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门番长</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>ng build --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该路径如下：</font></font><code>dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看变化。</font><font style="vertical-align: inherit;">但是根据新版Angular，默认输出路径为</font></font><code>dist/&lt;project-name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您需要通过命令行来提及输出目录，例如</font></font></p>

<pre><code>ng build --output-path dist --watch
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将默认位置更改</font></font><code>angular.json... -&gt; options -&gt; outputPath: dist/&lt;project-name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并只需运行</font></font><code>ng build --watch</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><code>ng build --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 只是为我工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且如果您使用</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件为</font></font></p>

<p><code>"scripts":{"build":"ng build --watch"}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">照常</font><font style="vertical-align: inherit;">运行</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保已</font></font><code>outDir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">angular-cli.json中</font></em><font style="vertical-align: inherit;">正确设置了应用程序的参数</font></font><em><font style="vertical-align: inherit;"></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidItachi</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这是一个错误还是只是没有记录在案，但是似乎您需要添加一个输出路径以供观看，</font></font><code>ng build -o dist -w</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而dist是您的输出路径。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的命令是： </font></font><code>ng build -op dist -w</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的命令是： </font></font><code>ng build --output-path dist --watch</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
