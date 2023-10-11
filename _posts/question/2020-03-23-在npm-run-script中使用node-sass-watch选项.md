---
layout: question
title:  在npm run-script中使用node-sass watch选项
date:   2020-03-23T06:33:03.000Z
description: 所以我正在npm包脚本中运行任务，但是我想在中传递watch选项npm start。这有效："scripts"  {  "scss"  "nod...
img: 
author: 村村番长
category: question
answer: 5
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我正在npm包脚本中运行任务，但是我想在中传递watch选项</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效：</font></font></p>

<pre><code>"scripts": {<font></font>
  "scss": "node-sass src/style.scss dist/style.css -w"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不会编译，监视或引发任何错误：</font></font></p>

<pre><code>"scripts": {<font></font>
  "scss": "node-sass src/style.scss dist/style.css",<font></font>
  "start": "parallelshell \"npm run scss -- -w\""<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有并行shell或没有简写都无法工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为问题是运行脚本在引号中传递了额外的参数，因此命令如下所示：</font></font></p>

<pre><code>node-sass src/style.scss dist/style.css "-w"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它可以在不添加任何依赖的情况下工作。</font><font style="vertical-align: inherit;">我想念什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，我在Windows 10中，使用命令提示符/ git bash。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2842篇《在npm run-script中使用node-sass watch选项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Eva小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，对于较小的快速项目，最简单的方法是打开一个新的bash窗口并粘贴：</font></font></p>

<pre><code>node-sass src/ -wo dist
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在将更改保存到</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">时自动查看和编译更改</font><font style="vertical-align: inherit;">，则可以使用以下解决方案：</font></font></p>

<pre><code>"scripts": {<font></font>
  "watch:sass": "node-sass -w path/to/your/scss --output-style compressed", <font></font>
  // example  :  node-sass -w public/styles/scss/bootstrap.scss public/styles/style.css --output-style compressed<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，这是我的零钱：</font></font></p>

<pre><code>"scss": "node-sass src/style.scss dist/style.css",<font></font>
"start": "parallelshell \"npm run scss &amp;&amp; npm run scss -- -w\"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：更改为异步脚本运行，进行初始编译，然后带有watch标志。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我用于css构建的设置</font></font></p>

<pre><code>"scripts": {<font></font>
  "css": "node-sass src/style.scss -o dist",<font></font>
  "css:watch": "npm run css &amp;&amp; node-sass src/style.scss -wo dist"<font></font>
},<font></font>
"devDependencies": {<font></font>
  "node-sass": "^3.4.2"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-o标志设置目录以输出css。</font><font style="vertical-align: inherit;">我有一个非监视版本“ css”，因为监视版本“ css：watch”〜不会在运行时立即构建〜，它只能在更改时运行，所以我称之为</font></font></p>

<pre><code>npm run css 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打电话之前 </font></font></p>

<pre><code>node-sass src/style.scss -wo dist
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只希望它在更改时运行，而不是在首次运行时运行，请使用</font></font></p>

<pre><code>"css:watch": "node-sass src/style.scss -wo dist"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在前面的答案的基础上，另一种选择是</font><font style="vertical-align: inherit;">通过不重复</font><font style="vertical-align: inherit;">脚本中的</font><font style="vertical-align: inherit;">脚本</font><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">来利用NPM的</font></font><a href="https://docs.npmjs.com/cli/run-script" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义脚本参数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来保持DRY </font><font style="vertical-align: inherit;">：</font></font><code>build</code><font style="vertical-align: inherit;"></font><code>watch</code><font style="vertical-align: inherit;"></font></p>

<pre><code>"scripts": {<font></font>
  "build:sass": "node-sass -r --output-style compressed src/style.scss -o dist",<font></font>
  "watch:sass": "npm run build:sass &amp;&amp; npm run build:sass -- -w"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，</font></font><code>watch:sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本的工作方式如下：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>build:sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本。</font><font style="vertical-align: inherit;">这将编译您的CSS。</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>build:sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">脚本，但是这次包含该</font></font><code>-w</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志。</font><font style="vertical-align: inherit;">当您的一个SASS文件更改时，这将编译CSS。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font><font style="vertical-align: inherit;">脚本</font></font><code>--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">末尾使用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">选项</font></font><code>watch:sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">用于在执行脚本时传递自定义参数。</font><font style="vertical-align: inherit;">从</font></font><a href="https://docs.npmjs.com/cli/run-script" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm@2.0.0开始，您可以在执行脚本时使用自定义参数。</font><font style="vertical-align: inherit;">特殊选项-由getopt用来分隔选项的结尾。</font><font style="vertical-align: inherit;">npm会将-之后的所有参数直接传递给脚本。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
