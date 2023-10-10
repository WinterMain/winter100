---
layout: question
title:  TypeScript出现错误TS2304：找不到名称“ require”
date:   2020-03-17T08:54:57.000Z
description: 我正在尝试启动并运行我的第一个TypeScript和DefinitelyTyped Node.js应用程序，并且遇到一些错误。当我尝试转换简单的Typ...
img: 
author: Near卡卡西小宇宙
category: question
answer: 15
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试启动并运行我的第一个TypeScript和DefinitelyTyped Node.js应用程序，并且遇到一些错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试转换简单的TypeScript Node.js页面时，出现错误“ TS2304：找不到名称'require'”。</font><font style="vertical-align: inherit;">我已经阅读了Stack Overflow上此错误的其他几种情况，但我认为我没有类似的问题。</font><font style="vertical-align: inherit;">我在shell提示符下运行命令：</font></font></p>

<pre><code>tsc movie.server.model.ts.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文件的内容是：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
/// &lt;reference path="typings/tsd.d.ts" /&gt;<font></font>
<font></font>
/*    movie.server.model.ts - definition of movie schema */<font></font>
<font></font>
var mongoose = require('mongoose'),<font></font>
Schema = mongoose.Schema;<font></font>
<font></font>
var foo = 'test';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误被抛出</font></font><code>var mongoose=require('mongoose')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Types / tsd.d.ts文件的内容是：</font></font></p>

<pre><code>/// &lt;reference path="node/node.d.ts" /&gt;<font></font>
/// &lt;reference path="requirejs/require.d.ts" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.d.ts文件引用放置在适当的文件夹中，并通过以下命令添加到Types / tsd.d.ts中：</font></font></p>

<pre><code>tsd install node --save<font></font>
tsd install require --save<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生的.js文件似乎可以正常工作，因此我可以忽略该错误。</font><font style="vertical-align: inherit;">但是，我很高兴知道为什么会发生此错误以及我在做什么错。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1912篇《TypeScript出现错误TS2304：找不到名称“ require”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在.ts文件中遇到此问题，而该文件只是为您提供一些常量值，那么您可以</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的.ts文件重命名为.js文件</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且错误不会再出现。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有另一个答案是建立在以前的不同，描述</font></font><code>npm install @types/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和包括</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>tsconfig.json / compilerOptions / types</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我</font></font><code>tsConfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular应用程序中</font><font style="vertical-align: inherit;">有一个基础</font><font style="vertical-align: inherit;">和一个单独</font><font style="vertical-align: inherit;">的基础</font><font style="vertical-align: inherit;">，用于扩展此基础：</font></font></p>

<pre><code>{<font></font>
    "extends": "../../tsconfig.json",<font></font>
    "compilerOptions": {<font></font>
        "outDir": "../out-tsc/app",<font></font>
        "types": []<font></font>
 },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是空</font></font><code>types</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这</font></font><code>tsconfi.app.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-它则会覆盖了一个在基本配置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry蛋蛋Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中添加以下内容</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"typeRoots": [ "../node_modules/@types" ]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以编译代码，但Visual Studio 2015将“需要”功能标记为带有错误文本的错误，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则找不到名称“需要”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法解析符号“需要”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请将TypeScript for Visual Studio 2015更新到最新版本（当前为2.1）。 5）并将ReSharper（如果使用的话）更新到至少2016.3.2版。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个烦人的问题，有一段时间无法找到解决方案，但是我终于以这种方式解决了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用以上任何技巧，我都无法摆脱“需要”错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我发现问题出在我的Visual Studio TypeScript工具上，其中旧版本（1.8.6.0）和最新版本是（2.0.6.0）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从以下位置下载工具的最新版本：</font></font></p>

<p><em><a href="https://www.microsoft.com/en-us/download/details.aspx?id=48593" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Visual Studio 2015的TypeScript</font></font></a></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了cgatian的答案外，对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript 1.x</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然看到错误，请在编译器选项中专门提供index.d.ts。</font></font></p>

<pre><code>"files": [<font></font>
    "typings/index.d.ts"<font></font>
]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否指定了用于转码的模块？</font></font><br>
<code>tsc --target es5 --module commonjs script.ts</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您必须执行此操作以使编译器知道您正在编译NodeJS代码。</font></font><a href="https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md#code-generation-for-modules" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还必须安装猫鼬定义</font></font><br>
<code>tsd install mongoose --save</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明变量（除非有必要，这是一种非常罕见的情况），请</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用。  </font></font><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步了解</font></font></a></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="https://en.wikipedia.org/wiki/Electron_(software_framework)" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">电子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> +角2/4加法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了向ts.config中添加各种文件的“节点”类型之外，最终对我有用的是在</font></font><code>typings.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">添加下一个
 </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>declare var window: Window;<font></font>
interface Window {<font></font>
  process: any;<font></font>
  require: any;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我的案例是使用Electron + Angular 2/4开发的。</font><font style="vertical-align: inherit;">我需要全局窗口上的需求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神乐前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时从tsconfig.json中丢失“茉莉花”可能会导致此错误。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（TypeScript 2.X）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以加</font></font></p>

<pre><code>"types": [<font></font>
  "node",<font></font>
  "jasmine"<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从“猫鼬”进口*作为猫鼬</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near达蒙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保已安装 </font></font><code>npm i @types/node</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也一直在努力解决这个问题。</font><font style="vertical-align: inherit;">我相信这适用于所有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发行候选版本</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> aka </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rc，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我没有测试过。</font><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@angular rc.2，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以很好地工作。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>core-js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为npm依赖项</font></font><code>package.json</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>typings install core-js --save</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>"es6-shim"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font><font style="vertical-align: inherit;">所有的</font><font style="vertical-align: inherit;">事件</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您不再需要它。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿DavaidL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，这是一个超级愚蠢的问题，其中</font></font><code>src/tsconfig.app.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">已</font><font style="vertical-align: inherit;">被覆盖</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，我在</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    "types": [<font></font>
      "node"<font></font>
    ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而这个在</font></font><code>src/tsconfig.app.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    "types": []
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望有人觉得这有帮助，因为此错误使我发白。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱阳光Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现解决方案是使用TSD命令：</font></font></p>

<pre><code>tsd install node --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将添加/更新</font></font><code>typings/tsd.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，并且该文件包含节点应用程序所需的所有类型定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文件的顶部，我引用了</font></font><code>tsd.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下内容：</font></font></p>

<pre><code>/// &lt;reference path="../typings/tsd.d.ts" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2016年1月起，需求定义如下：</font></font></p>

<pre><code>declare var require: NodeRequire;<font></font>
<font></font>
interface NodeModule {<font></font>
    exports: any;<font></font>
    require: NodeRequireFunction;<font></font>
    id: string;<font></font>
    filename: string;<font></font>
    loaded: boolean;<font></font>
    parent: any;<font></font>
    children: any[];<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西小卤蛋GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，我使用的是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 7.1.4</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript 3.1.6</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我唯一需要做的就是在此行中添加</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    "types": ["node"], // within compilerOptions
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
