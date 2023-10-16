---
layout: question
title:  无红宝石的Sass或Compass？
date:   2020-03-18T07:36:48.000Z
description: 没有Ruby，有没有办法使用Sass或Compass或类似的东西？ 我一直在谷歌和这个网站周围，找不到任何东西，任何帮助将不胜感激。谢谢...
img: 
author: JinJin乐
category: question
answer: 5
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有Ruby，有没有办法使用Sass或Compass或类似的东西？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在谷歌和这个网站周围，找不到任何东西，任何帮助将不胜感激。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2014篇《无红宝石的Sass或Compass？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这是用于.NET，那么现在</font></font><a href="https://github.com/TBAPI-0KA/NSass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个libsass的包装器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可从</font></font><a href="http://www.nuget.org/packages/NSass.Core/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuget获得</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomAL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您实际上可以在不使用ruby的情况下解析sass，可以使用node-sass。</font><font style="vertical-align: inherit;">详情在这里：</font><a href="https://github.com/andrew/node-sass" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/andrew/node-sass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/andrew/node-sass</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇伽罗Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><a href="http://brackets.io/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改文件时，</font><a href="http://brackets.io/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"> Adobe Brackets</font></strong></a><font style="vertical-align: inherit;">（免费，开源）可以编译LESS，SASS和Stylus，并在实时预览期间更新样式，您只需要从扩展管理器中安装所需的扩展即可。</font><font style="vertical-align: inherit;">获取</font></font><a href="http://brackets.io/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并享受！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：其他问题建议</font><font style="vertical-align: inherit;">如果已经安装了nodejs，</font></font><a href="https://www.npmjs.com/package/node-sass" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也是一个不错的选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小仲羽</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，有一个库可为Node.js绑定到Sass的C版本libsass：</font><a href="https://npmjs.org/package/node-sass"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://npmjs.org/package/node-sass</font></font><a href="https://npmjs.org/package/node-sass"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许您在未安装Ruby的情况下以惊人的速度将.scss文件本地编译为css。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装只需运行：</font></font></p>

<pre><code>npm install node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要的话，还有一个Grunt扩展名：</font></font><a href="https://github.com/sindresorhus/grunt-sass"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/sindresorhus/grunt-sass"><font style="vertical-align: inherit;">//github.com/sindresorhus/grunt-sass</font></a><font style="vertical-align: inherit;">（这是我一直在寻找的这个问题）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，</font><a href="https://github.com/andrew/node-sass"><font style="vertical-align: inherit;">请</font></a><font style="vertical-align: inherit;">访问：</font><a href="https://github.com/andrew/node-sass"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/andrew/node-sass"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/andrew/node-sass</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需稍作更新，您就可以使用SCSS / SASS文件并快速生成正确的文件，而无需使用名为Scout的程序来安装Ruby。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">侦察兵有自己的独立的红宝石环境，并且用Java编码，因此在使用前请确保Java是最新的。</font></font><a href="http://mhs.github.com/scout-app/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">林基在这里。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候 ：）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
