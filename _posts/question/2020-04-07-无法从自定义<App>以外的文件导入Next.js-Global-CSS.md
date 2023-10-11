---
layout: question
title:  无法从自定义<App>以外的文件导入Next.js Global CSS
date:   2020-04-07T03:49:08.000Z
description: 我的React App运行良好，也使用了全局CSS。我运行npm i next-images，添加图像，编辑了next.config.js，，ran ...
img: 
author: JinJin
category: question
answer: 0
tags: CSS React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的React App运行良好，也使用了全局CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行</font></font><code>npm i next-images</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，添加图像，编辑了</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，，</font></font><code>ran npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我收到了此消息</font></font></p>

<pre><code>Global CSS cannot be imported from files other than your Custom &lt;App&gt;. Please move all global CSS imports to pages/_app.js.<font></font>
Read more: https://err.sh/next.js/css-global<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经检查了文档，但是由于我是React的新手，所以我发现其中的说明有些混乱。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，为什么现在会发生此错误？</font><font style="vertical-align: inherit;">您是否认为它与npm安装有关？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图删除添加的新文件及其代码，但这不能解决问题。</font><font style="vertical-align: inherit;">我还尝试了阅读更多内容的建议。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的最高层组件。</font></font></p>

<pre><code>import Navbar from './Navbar';<font></font>
import Head from 'next/head';<font></font>
import '../global-styles/main.scss';<font></font>
<font></font>
const Layout = (props) =&gt; (<font></font>
  &lt;div&gt;<font></font>
    &lt;Head&gt;<font></font>
      &lt;title&gt;Bitcoin Watcher&lt;/title&gt;<font></font>
    &lt;/Head&gt;<font></font>
    &lt;Navbar /&gt;<font></font>
    &lt;div className="marginsContainer"&gt;<font></font>
      {props.children}<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
);<font></font>
<font></font>
export default Layout;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的next.config.js</font></font></p>

<pre><code>// next.config.js<font></font>
  const withSass = require('@zeit/next-sass')<font></font>
  module.exports = withSass({<font></font>
  cssModules: true<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的main.scss文件</font></font></p>

<pre><code>@import './fonts.scss';<font></font>
@import './variables.scss';<font></font>
@import './global.scss';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的global.scss</font></font></p>

<pre><code>body {<font></font>
  margin: 0;<font></font>
}<font></font>
:global {<font></font>
  .marginsContainer {<font></font>
    width: 90%;<font></font>
    margin: auto;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现最奇怪的是，此错误是在没有更改任何与CSS或Layout.js有关的情况下发生的，并且以前可以正常工作吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经将main.scss导入移动到pages / _app.js页面，但是样式仍然没有通过。</font><font style="vertical-align: inherit;">这就是_app.js页面的外观</font></font></p>

<pre><code>import '../global-styles/main.scss'<font></font>
<font></font>
export default function MyApp({ Component, props }) {<font></font>
  return &lt;Component {...props} /&gt;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4122篇《无法从自定义<App>以外的文件导入Next.js Global CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
