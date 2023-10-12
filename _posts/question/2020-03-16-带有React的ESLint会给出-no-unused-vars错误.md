---
layout: question
title:  带有React的ESLint会给出“ no-unused-vars”错误
date:   2020-03-16T07:24:05.000Z
description: 我已经设定eslint＆eslint-plugin-react。当我运行ESLint时，linter会no-unused-vars为每个React组件...
img: 
author: 木何鱼
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经设定</font></font><code>eslint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>eslint-plugin-react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行ESLint时，linter会</font></font><code>no-unused-vars</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每个React组件</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设它没有意识到我正在使用JSX或React语法。</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js</font></font></strong></p>

<pre><code>import React, { Component } from 'react';<font></font>
import Header from './header.js';<font></font>
<font></font>
export default class App extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Header /&gt;<font></font>
        {this.props.children}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短绒错误：</font></font></strong></p>

<pre><code>/my_project/src/components/app.js<font></font>
  1:8  error  'React' is defined but never used   no-unused-vars<font></font>
  2:8  error  'Header' is defined but never used  no-unused-vars<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>.eslintrc.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></strong></p>

<pre><code>{<font></font>
    "env": {<font></font>
        "browser": true,<font></font>
        "es6": true<font></font>
    },<font></font>
    "extends": "eslint:recommended",<font></font>
    "parserOptions": {<font></font>
        "ecmaFeatures": {<font></font>
            "experimentalObjectRestSpread": true,<font></font>
            "jsx": true<font></font>
        },<font></font>
        "sourceType": "module"<font></font>
    },<font></font>
    "plugins": [<font></font>
        "react"<font></font>
    ],<font></font>
    "rules": {<font></font>
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],<font></font>
        "indent": [<font></font>
            "error",<font></font>
            2<font></font>
        ],<font></font>
        "linebreak-style": [<font></font>
            "error",<font></font>
            "unix"<font></font>
        ],<font></font>
        "quotes": [<font></font>
            "error",<font></font>
            "single"<font></font>
        ],<font></font>
        "semi": [<font></font>
            "error",<font></font>
            "always"<font></font>
        ]<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1797篇《带有React的ESLint会给出“ no-unused-vars”错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小胖</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我是在谷歌搜索时发现的，因此您应该知道，此简单规则足以防止出现此消息：</font></font></p>

<pre><code>react/jsx-uses-react
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>react/recommended</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组规则增加了</font></font><a href="https://github.com/yannickcr/eslint-plugin-react#recommended" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多其他的规则</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可能不希望。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此唯一问题而无需从</font></font><code>react/recommended</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">install </font><font style="vertical-align: inherit;">添加新规则</font></font><code>eslint-plugin-react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install eslint-plugin-react --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>.eslintrc.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"plugins": ["react"]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和：</font></font></p>

<pre><code>"rules": {   <font></font>
     "react/jsx-uses-react": "error",   <font></font>
     "react/jsx-uses-vars": "error" <font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
