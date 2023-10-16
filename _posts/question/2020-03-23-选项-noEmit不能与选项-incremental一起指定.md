---
layout: question
title:  选项“ noEmit”不能与选项“ incremental”一起指定
date:   2020-03-23T13:03:31.000Z
description: 我正在开发next.js应用程序。它具有以下tsconfig.js{  "compilerOptions"  {    "target"  "ES...
img: 
author: 古一Green
category: question
answer: 1
tags: TypeScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开发next.js应用程序。</font><font style="vertical-align: inherit;">它具有以下</font></font><code>tsconfig.js</code></p>

<pre><code>{<font></font>
  "compilerOptions": {<font></font>
    "target": "ES2018",<font></font>
    "module": "esnext",<font></font>
    "lib": [<font></font>
      "dom",<font></font>
      "es2018",<font></font>
      "es2019.array"<font></font>
    ],<font></font>
    "jsx": "preserve",<font></font>
    "sourceMap": true,<font></font>
    "skipLibCheck": true,<font></font>
    "strict": true,<font></font>
    "esModuleInterop": true,<font></font>
    "experimentalDecorators": true,<font></font>
    "emitDecoratorMetadata": true,<font></font>
    "allowJs": true,<font></font>
    "forceConsistentCasingInFileNames": true,<font></font>
    "moduleResolution": "node",<font></font>
    "resolveJsonModule": true,<font></font>
    "isolatedModules": true,<font></font>
    "noEmit": true,<font></font>
    "incremental": true<font></font>
  },<font></font>
  "exclude": [<font></font>
    "server",<font></font>
    "next.config.js"<font></font>
  ],<font></font>
  "include": [<font></font>
    "lib/global.d.ts",<font></font>
    "next-env.d.ts",<font></font>
    "**/*.ts",<font></font>
    "**/*.tsx",<font></font>
    "**/*.js"<font></font>
  ]<font></font>
}<font></font>
<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在开发模式下运行良好，但是在创建构建时显示以下错误：</font></font></p>

<pre><code>ERROR in tsconfig.json<font></font>
22:5 Option 'noEmit' cannot be specified with option 'incremental'.<font></font>
    20 |     "resolveJsonModule": true,<font></font>
    21 |     "isolatedModules": true,<font></font>
  &gt; 22 |     "noEmit": true,<font></font>
       |     ^<font></font>
    23 |     "incremental": true<font></font>
    24 |   },<font></font>
    25 |   "exclude": [<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">注入</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ noEmit：true”</font></font></em><font style="vertical-align: inherit;"></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">虽然我确实需要增量模式才能更快地构建。</font><font style="vertical-align: inherit;">有什么解决方案？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3038篇《选项“ noEmit”不能与选项“ incremental”一起指定》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://github.com/microsoft/TypeScript/issues/33809#issuecomment-589446027" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript问题＃33809开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这真的没有意义有</font></font><code>incremental</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>noEmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一起，因为</font></font><code>noEmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阻止我们写增量元数据。</font><font style="vertical-align: inherit;">（因此，实际上没有什么是增量的）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您实际上只想进行增量检查，则</font><font style="vertical-align: inherit;">应该考虑使用</font></font><code>emitDeclarationOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>noEmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据此，</font></font><code>incremental: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志在</font></font><code>noEmit: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义时</font><font style="vertical-align: inherit;">没有采取任何措施来加快构建速度</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，您应该删除</font></font><code>noEmit: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它或将其更改为</font></font><code>emitDeclarationOnly: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>outDir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">控制输出文件夹</font></font><code>declarationDir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
