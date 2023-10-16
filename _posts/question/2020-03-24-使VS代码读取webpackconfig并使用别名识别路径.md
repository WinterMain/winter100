---
layout: question
title:  使VS代码读取webpack.config并使用别名识别路径？
date:   2020-03-24T06:27:04.000Z
description: 我正在使用Webpack和Visual Studio Code，为了避免出现类似情况：import { AuthenticationService }...
img: 
author: 老丝阿飞
category: question
answer: 3
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Webpack和Visual Studio Code，为了避免出现类似情况：</font></font></p>

<pre><code>import { AuthenticationService } from '../../../services/authentication/service';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在webpack.config上创建了别名，因此可以使用：</font></font></p>

<pre><code>import { AuthenticationService } from 'services/authentication/service';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这样做会导致Visual Code无法检测到我的代码，因此我失去了类的智能感知能力。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人有解决方案，有没有办法使VS代码读取webpack.config并使用别名识别路径？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3373篇《使VS代码读取webpack.config并使用别名识别路径？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装VSCode扩展</font></font><a href="https://github.com/ChristianKohler/PathIntellisense" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PathIntellisense</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要打开VSCode设置文件，可以</font><font style="vertical-align: inherit;">在macOS上</font><font style="vertical-align: inherit;">按</font></font><kbd>command</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>,</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在Windows上为</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>,</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），在右上角找到“一对大括号按钮”，然后单击它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，我想将符号</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作path的别名</font></font><code>./src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我将此配置添加到我的VSCode设置文件中：</font></font></p>

<pre><code>  "path-intellisense.mappings": {<font></font>
    "@": "${workspaceRoot}/src"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>${workspaceRoot}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，路径应该是相对于当前项目的当前根。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://github.com/ChristianKohler/PathIntellisense#mappings" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到官方示例</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案：</font></font></p>

<p>I use the VSCode extension <a href="https://github.com/ChristianKohler/PathIntellisense" rel="nofollow noreferrer">PathIntellisense</a> .</p>

<p>Configure this <a href="https://github.com/ChristianKohler/PathIntellisense#mappings" rel="nofollow noreferrer">setting</a> in my VSCode setting file.</p>

<p>Now VSCode could recognize the path with the alias.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要</font><font style="vertical-align: inherit;">在jsconfig.json文件中</font><font style="vertical-align: inherit;">指定</font></font><code>paths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>baseUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段。</font></font></p>

<pre><code>{<font></font>
    "compilerOptions": {<font></font>
        "jsx": "react",<font></font>
        "target": "ES6",<font></font>
        "allowSyntheticDefaultImports": true,<font></font>
        "baseUrl": "./",<font></font>
        "paths": {<font></font>
            "~/*": ["./app/*"]<font></font>
        }<font></font>
    },<font></font>
    "exclude": [<font></font>
        "node_modules"<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Module%20Resolution.md#path-mapping" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径映射文档</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新typescript@2.0.0，然后可以通过添加以下内容在tsconfig.json上映射相同的Webpack别名：</font></font></p>

<pre><code>"compilerOptions": {<font></font>
    "baseUrl": "./",<font></font>
    "paths": {<font></font>
      "app/*": ["src/app/*"]<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
