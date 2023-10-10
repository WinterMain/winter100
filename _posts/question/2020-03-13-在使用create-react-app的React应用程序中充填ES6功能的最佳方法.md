---
layout: question
title:  在使用create-react-app的React应用程序中充填ES6功能的最佳方法
date:   2020-03-13T09:01:02.000Z
description: 我一直在Internet Explorer上测试我的React.js应用程序，令我惊讶的是，ES6代码像Array.prototype.includes(...
img: 
author: 梅小宇宙
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在Internet Explorer上测试我的React.js应用程序，令我惊讶的是，ES6代码像</font></font><code>Array.prototype.includes()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打破了它。</font><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/facebookincubator/create-react-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">creat-react-app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门套件，我认为babel是其中的一部分，并且它允许我编写ES6代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实证明它并不是那么简单。</font><font style="vertical-align: inherit;">据我所知，他们并不是因为并非每个人都需要它而选择不包含很多polyfill，这会减慢构建时间。</font><font style="vertical-align: inherit;">例如</font></font><a href="https://github.com/facebookincubator/create-react-app/issues/942" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/facebook/create-react-app/issues/914#issuecomment-255336818" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">曾经有过尝试</font></font><a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font><a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features" rel="noreferrer"><font style="vertical-align: inherit;">记录</font></a><font style="vertical-align: inherit;">，但是没有提到如何自己实际执行polyfills。</font><font style="vertical-align: inherit;">只是这个：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用任何其他需要运行时支持的ES6 +功能（例如Array.from（）或Symbol），请确保手动添加了适当的polyfill，或者要使用的浏览器已经支持它们。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么...“手动”包括它们的最佳方法是什么？</font><font style="vertical-align: inherit;">我以为那是通天塔的一部分？</font><font style="vertical-align: inherit;">我应该部分导入</font></font><a href="https://babeljs.io/docs/usage/polyfill/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-polyfill的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1448篇《在使用create-react-app的React应用程序中充填ES6功能的最佳方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得的是，我在使用新的Google Search Console和我的React应用程序（create-react-app）时遇到了问题。</font><font style="vertical-align: inherit;">添加es6shim后，所有问题都解决了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在公共index.html页面上添加了以下内容。</font></font></p>

<pre><code>&lt;script src="https://cdn.polyfill.io/v2/polyfill.min.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">具有polyfill </font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-app-polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来实现React中常用的ES6功能。</font><font style="vertical-align: inherit;">它是</font></font><a href="https://github.com/facebook/create-react-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的一部分</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">确保按照自述文件中的定义将其包括在index.js的开头。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的Create React App项目中弹出</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您可以将所有填充填充物放入</font></font><code>/config/polyfills.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下内容放在文件末尾</font></font></p>

<pre><code>Object.values = Object.values ? Object.values : o=&gt;Object.keys(o).map(k=&gt;o[k]);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack将自动为您修复此问题；）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
