---
layout: question
title:  如何解决“要执行此任务，您需要在PATH中安装Ruby和Sass”警告？
date:   2020-03-17T10:13:02.000Z
description: 我正在设置新的Mac进行工作。我已经在全球范围内安装了Grunt＆Grunt CLI。然后，我npm install在项目文件夹中进行了安装，以安装所有依...
img: 
author: 宝儿L
category: question
answer: 8
tags: 红宝石 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在设置新的Mac进行工作。</font><font style="vertical-align: inherit;">我已经在全球范围内安装了Grunt＆Grunt CLI。</font><font style="vertical-align: inherit;">然后，我</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目文件夹中进行了安装，以安装所有依赖项。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，还没有问题，但是一旦我尝试运行</font></font><code>sass:dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务，就会收到以下警告：  </font></font></p>

<pre><code>Warning: You need to have Ruby and Sass installed and in your PATH for<font></font>
this task to work. More info:<font></font>
https://github.com/gruntjs/grunt-contrib-sass Use --force <font></font>
to continue.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解的是，我需要在更全局的级别上安装Ruby和Sass才能运行此任务。</font><font style="vertical-align: inherit;">由于对使用该终端还很陌生，因此我进行了快速搜索以找出是什么</font></font><code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-似乎是存储重要数据的某些系统路径（可以更改）。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是否意味着我可以简单地通过a </font></font><code>sudo grunt install contrib-sass -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解决此问题？</font><font style="vertical-align: inherit;">那么Ruby –我一直以为它已经安装在OS X上了？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1972篇《如何解决“要执行此任务，您需要在PATH中安装Ruby和Sass”警告？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://brew.sh/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Homebrew</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Ruby，然后使用Ruby安装SASS。</font><font style="vertical-align: inherit;">如果您已经使用Homebrew或想定期开始使用它，可能只有这是最好的方法...</font></font></p>

<pre><code>brew install ruby<font></font>
gem install sass<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyJinJin泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样</font></font><code>brew install saas/sass/sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac High Sierra（10.13.x）上</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小LDavaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将Ruby和Sass安装为：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Ruby使用命令</font></font></p>

<pre><code>sudo apt-get install ruby-full
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Sass使用命令</font></font></p>

<pre><code>sudo gem install sass
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grunt-sass文档不是很清楚。</font><font style="vertical-align: inherit;">为了避免使用Ruby，可以尝试以下操作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm卸载--save grunt-contrib-sass
 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save节点-sass grunt-sass</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个，对我有用。</font></font></p>

<p><a href="https://github.com/gruntjs/grunt-contrib-sass/issues/229" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用grunt，请使用grunt --force。</font><font style="vertical-align: inherit;">如果要使用grunt运行应用程序，并且会出现这样的警告。</font><font style="vertical-align: inherit;">要忽略此警告，可以使用--force。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin阿飞番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将Ruby和Sass安装为：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Ruby使用命令</font></font></p>

<p><code>sudo apt-get install ruby-full</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Sass使用命令</font></font></p>

<pre><code>sudo gem install sass
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是OSX El Capitan或Mac上的Yosemite，则安装gem似乎有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>sudo gem install -n /usr/local/bin sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font><a href="https://github.com/sass/sass/issues/1769"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自github</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿L</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好，我知道了。</font><font style="vertical-align: inherit;">我只需要使用安装Sass </font></font><code>gem install sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，现在一切都很好...再简单不过了。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
