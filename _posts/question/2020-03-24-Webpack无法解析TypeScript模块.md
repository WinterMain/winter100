---
layout: question
title:  Webpack无法解析TypeScript模块
date:   2020-03-24T10:27:05.000Z
description: 我构建了一个中继小型webpack和TypeScript演示来玩。如果我使用webpack.config.js运行webpack，则会出现此错误：ERROR in ...
img: 
author: 猴子Sam宝儿
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我构建了一个中继小型webpack和TypeScript演示来玩。</font><font style="vertical-align: inherit;">如果我使用webpack.config.js运行webpack，则会出现此错误：</font></font></p>

<pre><code>ERROR in ./js/app.ts<font></font>
Module not found: Error: Can't resolve './MyModule' in '/Users/timo/Documents/Dev/Web/02_Tests/webpack_test/js'<font></font>
 @ ./js/app.ts 3:17-38<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道可能是什么问题。</font><font style="vertical-align: inherit;">模块导出应该正确。</font></font></p>

<p><a href="https://i.stack.imgur.com/806CP.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料夹结构</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const path = require('path');<font></font>
<font></font>
module.exports = {<font></font>
    entry: './js/app.ts',<font></font>
    output: {<font></font>
        path: path.resolve(__dirname, 'dist'),<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
    module: {<font></font>
        rules: [<font></font>
            {test: /\.ts$/, use: 'ts-loader'}<font></font>
        ]<font></font>
    }<font></font>
};</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tsconfig.json
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>{<font></font>
  "compilerOptions": {<font></font>
        "target": "es5",<font></font>
        "suppressImplicitAnyIndexErrors": true,<font></font>
        "strictNullChecks": false,<font></font>
        "lib": [<font></font>
            "es5", "es2015.core", "dom"<font></font>
        ],<font></font>
        "module": "commonjs",<font></font>
        "moduleResolution": "node",<font></font>
        "outDir": "dist"<font></font>
    },<font></font>
    "include": [<font></font>
        "js/**/*"<font></font>
    ]<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / app.js
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>import { MyModule } from './MyModule';<font></font>
<font></font>
let mym = new MyModule();<font></font>
console.log('Demo');<font></font>
<font></font>
mym.createTool();<font></font>
console.log(mym.demoTool(3,4));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / MyModule.ts</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>export class MyModule {<font></font>
   createTool() {<font></font>
    console.log("Test 123");<font></font>
  }<font></font>
<font></font>
   demoTool(x:number ,y:number) {<font></font>
    return x+y;<font></font>
  }<font></font>
};</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / index.html</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;html&gt;<font></font>
    &lt;head&gt;<font></font>
        &lt;title&gt;Demo&lt;/title&gt;<font></font>
        &lt;base href="/"&gt;<font></font>
    &lt;/head&gt;<font></font>
    &lt;body&gt;<font></font>
        <font></font>
        &lt;script src="dist/bundle.js"&gt;&lt;/script&gt;<font></font>
    &lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3651篇《Webpack无法解析TypeScript模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是tsconfig而不是webpack，它还将子模块编译为捆绑包（index.js）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，问题是我在</font></font><code>tsc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从外部引用</font><font style="vertical-align: inherit;">子模块之前忘记编译子模块（即运行</font><font style="vertical-align: inherit;">生成index.js）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
