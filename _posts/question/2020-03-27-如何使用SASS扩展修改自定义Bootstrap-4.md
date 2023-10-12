---
layout: question
title:  如何使用SASS扩展/修改（自定义）Bootstrap 4
date:   2020-03-27T12:10:11.000Z
description: 我想创建一个基于Bootstrap的网站主题。我想扩展Bootstrap的默认组件并更改其中一些。为此，我需要访问 Bootstrap定义的SASS变量，...
img: 
author: LGil
category: question
answer: 2
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想创建一个基于Bootstrap的网站主题。</font><font style="vertical-align: inherit;">我想扩展Bootstrap的默认组件并更改其中一些。</font><font style="vertical-align: inherit;">为此，我需要</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Bootstrap定义的SASS变量，以便可以覆盖它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我虽然从GitHub克隆了Bootstrap并直接对其进行了更改，但是我听说这实际上不是一个好习惯。</font><font style="vertical-align: inherit;">你能给我一些建议吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3800篇《如何使用SASS扩展/修改（自定义）Bootstrap 4》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github版本的Bootstrap总是会更改，因为基础本身会不断更新。</font><font style="vertical-align: inherit;">更不用说，Bootstrap的结构方式，并不一定编译您的SASS编译器将导出的方式。</font><font style="vertical-align: inherit;">最佳实践是按照最适合您的方式进行构建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我通常构建整个项目的方式</font></font></p>

<pre><code>/style/<font></font>
/style/theme.scss<font></font>
/style/theme.min.css<font></font>
/style/bootstrap.scss<font></font>
/style/bootstrap.min.css<font></font>
/style/bootstrap/{subfiles}<font></font>
/style/bootstrap/mixins/{subfiles}<font></font>
/style/bootstrap/utilities/{subfiles}<font></font>
<font></font>
/scripts/<font></font>
/scripts/bootstrap.min.js<font></font>
/scripts/main.min.js<font></font>
/scripts/bootstrap/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有sass和js缩小器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p>I will explain from scratch: Download Ruby because sass is written in Ruby. Open the “start command prompt with Ruby” and enter this:</p>

<pre><code>gem install sass
</code></pre>

<p>In macos, ruby is already installed. so in terminal:</p>

<pre><code>sudo gem install sass
</code></pre>

<p>If you did install bootstrap through package manager; write this code into main.scss</p>

<pre><code>@import "../node_modules/bootstrap/scss/bootstrap";
</code></pre>

<p>then navigate to your work directory where you keep your main.scss or main.css files. Enter this code into command line:</p>

<pre><code>sass main.scss main.css
</code></pre>

<p>this will initialize compiling sass to css.</p>

<p>If you did download bootstrap source files, find the “scss” folder in your source folder</p>

<pre><code>BOOTSTRAP\bootstrap-4.2.1\bootstrap-4.2.1\scss
</code></pre>

<p>and copy it into your style folder in your project where u keep all styling files:css,scss,bootstrap then import “bootstrap.scss” file into main.scss</p>

<pre><code>@import "./scss/bootstrap.scss";
</code></pre>

<p>And now initialize compiling by entering this code:</p>

<pre><code>sass main.scss main.css
</code></pre>

<p>Finally, you can type:</p>

<pre><code>sass --watch main.scss:main.css //this should be running
</code></pre>

<p>to watch all changes in main.css DONT FORGET: You will write your css codes into main.scss, sass will compile it to main.css and you will LINK main.css file in your html.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Visual Studio代码，则可以安装“ Live Sass Compiler”扩展，在下面的窗口中您会看到“ Watch Sass”按钮。</font><font style="vertical-align: inherit;">在style文件夹中创建main.scss文件，然后按照我上面的说明导入文件后，单击“ watch Sass”按钮，它将开始编译。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在在bootstrap文件夹中的scss文件夹下有一个</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹。</font><font style="vertical-align: inherit;">它包含引导变量。</font><font style="vertical-align: inherit;">假设您想更改边界半径。</font><font style="vertical-align: inherit;">在</font></font><code>main.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，在导入引导程序之前：</font></font></p>

<pre><code>$border-radius:10rem<font></font>
@import "./scss/bootstrap.scss";<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
