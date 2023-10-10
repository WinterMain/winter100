---
layout: question
title:  警告：将Cipheriv用于aes-256-ctr的计数器模式
date:   2020-03-23T07:49:54.000Z
description: 在终端中出现此警告，跟踪源或其实际原因/原因时出现问题。(node 37770) Warning  Use Cipheriv for counter ...
img: 
author: SamL
category: question
answer: 3
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中出现此警告，跟踪源或其实际原因/原因时出现问题。</font></font></p>

<pre><code>(node:37770) Warning: Use Cipheriv for counter mode of aes-256-ctr<font></font>
(node:37770) Warning: Use Cipheriv for counter mode of aes-256-ctr<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，没有太多信息可以提供。</font><font style="vertical-align: inherit;">我知道Node有点问题，但是不知道如何解决。</font></font><a href="https://nodejs.org/api/crypto.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/api/crypto.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点-v </font></font><code>stable 8.9.0 (bottled), HEAD</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></p>

<pre><code>"dependencies": {<font></font>
    "axios": "^0.17.0",<font></font>
    "babel-plugin-wrap-in-js": "^1.1.1",<font></font>
    "babel-runtime": "^6.26.0",<font></font>
    "body-parser": "^1.18.2",<font></font>
    "compression": "^1.7.1",<font></font>
    "cookie": "^0.3.1",<font></font>
    "dotenv": "^4.0.0",<font></font>
    "express": "^4.16.2",<font></font>
    "express-session": "^1.15.6",<font></font>
    "firebase": "^4.6.0",<font></font>
    "firebase-admin": "^5.4.3",<font></font>
    "isomorphic-unfetch": "^2.0.0",<font></font>
    "js-cookie": "^2.2.0",<font></font>
    "lusca": "^1.5.2",<font></font>
    "next": "^4.1.4",<font></font>
    "next-redux-wrapper": "^1.3.4",<font></font>
    "node-sass": "^4.5.3",<font></font>
    "now-logs": "0.0.7",<font></font>
    "nprogress": "^0.2.0",<font></font>
    "orm": "^4.0.1",<font></font>
    "prop-types": "^15.6.0",<font></font>
    "raw-loader": "^1.0.0-beta.0",<font></font>
    "react": "^16.0.0",<font></font>
    "react-dom": "^16.0.0",<font></font>
    "react-redux": "^5.0.6",<font></font>
    "react-stripe-checkout": "^2.6.3",<font></font>
    "react-stripe-elements": "^1.2.0",<font></font>
    "react-transition-group": "^2.2.1",<font></font>
    "redux": "^3.7.2",<font></font>
    "redux-thunk": "^2.2.0",<font></font>
    "sass-loader": "^6.0.6",<font></font>
    "session-file-store": "^1.1.2",<font></font>
    "styled-jsx": "^2.1.2",<font></font>
    "timeme.js": "^2.0.3",<font></font>
    "uuid": "^3.1.0",<font></font>
    "webpack": "^3.8.1"<font></font>
  }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2944篇《警告：将Cipheriv用于aes-256-ctr的计数器模式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，在遍历此
 </font></font><a href="https://github.com/nodejs/node/issues/13801" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
并查看</font></font><a href="https://nodejs.org/dist/latest-v8.x/docs/api/crypto.html#crypto_crypto_createcipher_algorithm_password_options" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本节</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的底部后，</font><font style="vertical-align: inherit;">
不建议使用没有随机输入的aes-256-ctr来摇动它。</font><font style="vertical-align: inherit;">将其更新为另一种算法后，错误消失了。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定如果您未在代码中使用加密，那么哪个部门可能会抛出此错误。</font><font style="vertical-align: inherit;">它可能会搜索</font></font><code>createCipher</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>aes-256-ctr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯凯Jim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用createCipheriv方法</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎与节点8和</font></font><code>session-file-store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">有关的问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://github.com/valery-barysok/session-file-store/issues/65" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/valery-barysok/session-file-store/issues/65</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
