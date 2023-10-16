---
layout: question
title:  创建React App index.html和index.js连接
date:   2020-04-07T03:13:36.000Z
description: 我开始玩Create React App，但我不明白内如何index.js加载index.html。html代码是这样的：<\!doctype html...
img: 
author: 卡卡西
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开始玩Create React App，但我不明白内如何</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">html代码是这样的：</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<font></font>
    &lt;link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"&gt;<font></font>
    &lt;!--<font></font>
      Notice the use of %PUBLIC_URL% in the tag above.<font></font>
      It will be replaced with the URL of the `public` folder during the build.<font></font>
      Only files inside the `public` folder can be referenced from the HTML.<font></font>
<font></font>
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will<font></font>
      work correctly both with client-side routing and a non-root public URL.<font></font>
      Learn how to configure a non-root public URL by running `npm run build`.<font></font>
    --&gt;<font></font>
    &lt;title&gt;React App&lt;/title&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="root"&gt;&lt;/div&gt;<font></font>
    &lt;!--<font></font>
      This HTML file is a template.<font></font>
      If you open it directly in the browser, you will see an empty page.<font></font>
<font></font>
      You can add webfonts, meta tags, or analytics to this file.<font></font>
      The build step will place the bundled scripts into the &lt;body&gt; tag.<font></font>
<font></font>
      To begin the development, run `npm start`.<font></font>
      To create a production bundle, use `npm run build`.<font></font>
    --&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我看不到任何地方的进口</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">连接在哪里？</font><font style="vertical-align: inherit;">我想念什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4045篇《创建React App index.html和index.js连接》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p>Under the hood, Create React App uses Webpack with <a href="https://www.npmjs.com/package/html-webpack-plugin" rel="noreferrer">html-webpack-plugin</a>.</p>

<p>Our configuration <a href="https://github.com/facebookincubator/create-react-app/blob/21fe19ab0fbae8ca403572beb55b4d11e45a75cf/packages/react-scripts/config/webpack.config.prod.js#L68-L70" rel="noreferrer">specifies</a> that Webpack uses <code>src/index.js</code> as an <a href="https://webpack.js.org/concepts/#entry" rel="noreferrer">“entry point”</a>. So that’s the first module it reads, and it follows from it to other modules to compile them into a single bundle.</p>

<p>When webpack compiles the assets, it produces a single (or several if you use code splitting) bundles. It makes their final paths available to all plugins. We are using one such plugin for injecting scripts into HTML.</p>

<p>We have enabled <a href="https://www.npmjs.com/package/html-webpack-plugin" rel="noreferrer">html-webpack-plugin</a> to generate the HTML file. In our configuration, we <a href="https://github.com/facebookincubator/create-react-app/blob/21fe19ab0fbae8ca403572beb55b4d11e45a75cf/packages/react-scripts/config/webpack.config.prod.js#L233-L235" rel="noreferrer">specified</a> that it should read <code>public/index.html</code> as a template. We have also set <code>inject</code> <a href="https://github.com/jantimon/html-webpack-plugin#configuration" rel="noreferrer">option</a> to <code>true</code>. With that option, <code>html-webpack-plugin</code> adds a <code>&lt;script&gt;</code> with the path provided by Webpack right into the final HTML page. This final page is the one you get in <code>build/index.html</code> after running <code>npm run build</code>, and the one that gets served from <code>/</code> when you run <code>npm start</code>.</p>

<p>Hope this helps! The beauty of Create React App is you don’t actually need to think about it.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
