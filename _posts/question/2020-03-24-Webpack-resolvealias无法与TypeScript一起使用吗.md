---
layout: question
title:  Webpack resolve.alias无法与TypeScript一起使用吗？
date:   2020-03-24T11:20:48.000Z
description: 我尝试缩短TypeScript中的导入时间从 import {Hello} from "./components/Hello";至 import {Hello}...
img: 
author: 泡芙Green
category: question
answer: 5
tags: TypeScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试缩短TypeScript中的导入时间</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 </font></font><code>import {Hello} from "./components/Hello";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font><code>import {Hello} from "Hello";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我发现您可以</font></font><code>resolve.alias</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，因此我将该部分配置如下</font></font></p>

<pre><code>resolve: {<font></font>
    root: path.resolve(__dirname),<font></font>
    alias: {<font></font>
        Hello: "src/components/Hello"<font></font>
    },<font></font>
    extensions: ["", ".ts", ".tsx", ".js"]<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack构建，并且输出bundle.js有效。</font><font style="vertical-align: inherit;">但是TypeScript的智商抱怨它</font></font><code>cannot find the module</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是webpack的resolve.alias是否适用于TypeScript？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了以下</font></font><a href="https://github.com/s-panferov/awesome-typescript-loader/issues/34" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但没有答案。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3733篇《Webpack resolve.alias无法与TypeScript一起使用吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearANear</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有2例 </font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您编写自定义Webpack时，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以使用</font><strong><font style="vertical-align: inherit;">Typescript</font></strong><font style="vertical-align: inherit;">，但不能直接使用。</font><font style="vertical-align: inherit;">解释一下，后台有两种编译类型。</font><font style="vertical-align: inherit;">首先是tsx-&gt; tsconfig.json扮演角色的js，但是当您实际编译js代码时，webpack就会出现。</font><font style="vertical-align: inherit;">因此，对于别名，应在两个位置（即tsconfig和webpack中）放置解析，以成功运行应用程序</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用default时（创建react应用后）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：只需添加</font></font><code>"baseUrl": "./src"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tsconfig并查看代码即可。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如其他人所述，您需要</font></font><code>alias</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack.config.js中</font><font style="vertical-align: inherit;">提供一个</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    resolve: { <font></font>
<font></font>
        extensions: [".ts", ".js"],<font></font>
        alias: {<font></font>
            forms: path.resolve(__dirname, "src/forms/")<font></font>
        } <font></font>
    },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这需要与您的</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">同步</font><font style="vertical-align: inherit;">（需要baseUrl和路径）。</font></font></p>

<pre><code>"compilerOptions":  {<font></font>
    baseUrl: "./",<font></font>
    ...<font></font>
    paths: {<font></font>
       "forms/*": ["src/forms/*"]<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：必须使用通配符模式才能与您的解析别名配置匹配。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用别名导入任何库： </font></font></p>

<pre><code>import { FormsModule } from "forms/my-forms/my-forms.module";
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你使用</font></font><code>ts-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可能需要您的WebPack同步</font></font><code>alias</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>resolve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置请</font></font><code>paths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的设置</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>{<font></font>
    "compilerOptions": {<font></font>
        "baseUrl": "./",<font></font>
        "paths": {<font></font>
            "Hello": ["src/components/Hello"]<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>awesome-typescript-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以的WebPack自动从算出这个</font></font><code>paths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置在你的</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，按</font></font><a href="https://github.com/s-panferov/awesome-typescript-loader/issues/156" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从回购这一问题上的地位</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，您无需在Webpack </font></font><code>alias</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段中</font><font style="vertical-align: inherit;">重复相同的信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然有人遇到此问题，请不要忘记将文件夹添加到tsconfig.json的“ include”选项中，如下所示：</font></font></p>

<pre><code>{<font></font>
  "compilerOptions": {<font></font>
    "sourceMap": true,<font></font>
    "allowJs": true,<font></font>
    "baseUrl": "./",<font></font>
    "paths": {<font></font>
      "@/*": [<font></font>
        "src/*"<font></font>
      ]<font></font>
    },<font></font>
    "target": "es5",<font></font>
    "module": "es2015",<font></font>
    "moduleResolution": "node",<font></font>
    "lib": [<font></font>
      "es2016",<font></font>
      "dom"<font></font>
    ]<font></font>
  },<font></font>
  "outDir": "./built/",<font></font>
  "include": [<font></font>
    "./src/**/*",<font></font>
    "./tests/**/*"<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dudes，您缺少tsconfig.json中的一个非常重要的要点：匹配模式！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该这样配置：</font></font></p>

<pre><code>"baseUrl": ".",<font></font>
"paths": {<font></font>
    "appSrc/*": [<font></font>
        "src/*"<font></font>
    ]<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ *”是告诉TS匹配右侧任何内容的重要部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从这篇文章中发现了这一点：</font><a href="https://medium.com/@martin_hotell/type-safe-es2015-module-import-path-aliasing-with-webpack-typescript-and-jest-fe461347e010" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://medium.com/@martin_hotell/type-safe-es2015-module-import-path-aliasing-with-webpack-typescript-and-jest-fe461347e010" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@martin_hotell/type-safe-es2015-module-import-path-aliasing-with-webpack-typescript-and-jest-fe461347e010</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
