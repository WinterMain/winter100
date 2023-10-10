---
layout: question
title:  eslint：错误解析错误：关键字“ const”已保留
date:   2020-03-24T06:08:24.000Z
description: 我从ESLint收到此错误：error  Parsing error  The keyword 'const' is reserved从此代码：...
img: 
author: 斯丁
category: question
answer: 5
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从ESLint收到此错误：</font></font></p>

<pre class="lang-none prettyprint-override"><code>error  Parsing error: The keyword 'const' is reserved
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从此代码：</font></font></p>

<pre><code>const express = require('express');<font></font>
const app = express();<font></font>
const _ = require('underscore');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试着删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重新安装所有NPM包（如建议</font></font><a href="https://stackoverflow.com/questions/38757885/setting-up-airbnb-eslint-with-react-and-webpack"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但无济于事。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3343篇《eslint：错误解析错误：关键字“ const”已保留》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Visual Code，一种选择是将其添加到settings.json文件：</font></font></p>

<pre><code>"eslint.options": {<font></font>
    "useEslintrc": false,<font></font>
    "parserOptions": {<font></font>
        "ecmaVersion": 2017<font></font>
    },<font></font>
    "env": {<font></font>
        "es6": true<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ESLint默认为ES5语法检查。</font><font style="vertical-align: inherit;">您将要覆盖到最新的受支持的JavaScript版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将</font></font><code>.eslintrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到您的项目。</font><font style="vertical-align: inherit;">在里面：</font></font></p>

<pre><code>{<font></font>
    "parserOptions": {<font></font>
        "ecmaVersion": 2017<font></font>
    },<font></font>
<font></font>
    "env": {<font></font>
        "es6": true<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我也发现了</font></font><a href="https://gist.github.com/nkbt/9efd4facb391edbf8048" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个例子</font></font><code>.eslintrc</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以添加此内联而不是配置，只需在添加自己的禁用内容之前将其添加到同一文件</font></font></p>

<pre><code>/* eslint-env es6 */<font></font>
/* eslint-disable no-console */<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的案子是禁用文件，而eslint-disable不适用于我</font></font></p>

<pre><code>/* eslint-env es6 */<font></font>
/* eslint-disable */<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了.eslintrc.js，并添加了以下代码。</font></font></p>

<pre><code>module.exports = {<font></font>
    "parserOptions": {<font></font>
        "ecmaVersion": 6<font></font>
    }<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，它找不到</font></font><code>.eslintrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，因此我从node_modules / .bin复制到了根目录。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
