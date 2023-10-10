---
layout: question
title:  eslint抱怨getInitialProps
date:   2020-03-24T07:47:59.000Z
description: 这是我的.eslintrc{  "plugins"  \["react"\],  "parserOptions"  {    "ecmaVersio...
img: 
author: 小宇宙
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的.eslintrc</font></font></p>

<pre><code>{<font></font>
  "plugins": ["react"],<font></font>
  "parserOptions": {<font></font>
    "ecmaVersion": 6,<font></font>
    "sourceType": "module",<font></font>
    "ecmaFeatures": {<font></font>
      "jsx": true<font></font>
    }<font></font>
  },<font></font>
  "env": {<font></font>
    "es6": true,<font></font>
    "browser": true,<font></font>
    "node": true,<font></font>
    "mocha": true<font></font>
  },<font></font>
  "extends": ["eslint:recommended", "plugin:react/recommended", "standard"],<font></font>
  "rules": {}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的组件：</font></font></p>

<pre><code>class Index extends React.Component {<font></font>
  static async getInitialProps({ req }) {<font></font>
    ....<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eslint抱怨getInitialProps：</font></font></p>

<pre><code>Parsing error: Unexpected token getInitialProps
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了添加抑制注释之外，还有什么方法可以使eslint接受getInitialProps声明？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3469篇《eslint抱怨getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@Scott在评论中指出的那样，解决方案是添加</font></font><a href="https://github.com/babel/babel-eslint" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-eslint</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的最终.eslintrc是以下内容：</font></font></p>

<pre><code>{<font></font>
  "plugins": ["react"],<font></font>
  "parser": "babel-eslint",<font></font>
  "parserOptions": {<font></font>
    "ecmaVersion": 6,<font></font>
    "sourceType": "module",<font></font>
    "ecmaFeatures": {<font></font>
      "jsx": true<font></font>
    }<font></font>
  },<font></font>
  "env": {<font></font>
    "es6": true,<font></font>
    "browser": true,<font></font>
    "node": true,<font></font>
    "mocha": true<font></font>
  },<font></font>
  "extends": ["eslint:recommended", "plugin:react/recommended", "standard"],<font></font>
  "rules": {}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
