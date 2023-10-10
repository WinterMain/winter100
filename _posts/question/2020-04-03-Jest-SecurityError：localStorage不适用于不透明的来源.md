---
layout: question
title:  Jest SecurityError：localStorage不适用于不透明的来源
date:   2020-04-03T04:15:30.000Z
description: 当我想使用命令运行项目时npm run test，出现以下错误。是什么原因造成的？FAIL● Test suite failed to runS...
img: 
author: JinJin
category: question
answer: 6
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我想使用命令运行项目时</font></font><code>npm run test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，出现以下错误。</font><font style="vertical-align: inherit;">是什么原因造成的？</font></font></p>

<pre><code>FAIL<font></font>
● Test suite failed to run<font></font>
<font></font>
SecurityError: localStorage is not available for opaque origins at Window.get localStorage [as localStorage] (node_modules/jsdom/lib/jsdom/browser/Window.js:257:15)<font></font>
      at Array.forEach (&lt;anonymous&gt;)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4012篇《Jest SecurityError：localStorage不适用于不透明的来源》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React JS时，您不需要做任何事情。</font><font style="vertical-align: inherit;">放置JEST和设置测试环境是create-react-app的默认行为。</font><font style="vertical-align: inherit;">在下面的运行中，它开始显示测试成功或失败，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm测试</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要测试覆盖率，只需将以下内容添加到package.json文件中</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ test”：“ react-scripts test --coverage”现在您的package.json的“脚本”看起来像，</font></font></p>
</blockquote>

<pre><code>"scripts": {<font></font>
"start": "react-scripts start",<font></font>
"build": "react-scripts build",<font></font>
"test": "react-scripts test --coverage",<font></font>
"eject": "react-scripts eject"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与整合时</font></font><code>enzyme</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">这点对我突然弹出</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/jsdom/jsdom/issues/2304#issuecomment-408329897" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github上的问题探讨</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表明同上面提到的，即增加</font></font></p>

<pre><code>"testURL": "http://localhost/"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开玩笑的配置。</font><font style="vertical-align: inherit;">但是，很高兴知道这也是由酶触发的。</font><font style="vertical-align: inherit;">对我来说是React v15和v15适配器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这听起来可能很愚蠢，但是对我来说，问题是由于我错误地使用安装了随机软件包而引起的</font></font><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我当时正在跑步</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我只应该跑步</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我通过删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录并</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行来</font><font style="vertical-align: inherit;">解决该问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这是通过升级到“ jest”：“ ^ 24.9.0”解决的，</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是jsdom，请确保包含url。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检出jsdom存储库简单选项。</font></font><a href="https://github.com/jsdom/jsdom#simple-options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jsdom/jsdom#simple-options</font></font></a></p>

<pre><code>const jsdom = require("jsdom");<font></font>
const { JSDOM } = jsdom;<font></font>
<font></font>
const dom = new JSDOM(`...`, { url: "https://example.org/" });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须指定</font></font><code>--env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用的</font><font style="vertical-align: inherit;">环境（</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中运行</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令时，</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应指定环境（</font></font><code>jsdom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "jest": "jest --env=node --colors --coverage test",<font></font>
    "test": "npm run jest"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该为您工作！</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
