---
layout: question
title:  如何将Nextjs +样式化组件与material-ui集成
date:   2020-03-20T06:12:49.000Z
description: 1.   要使用样式化的组件构建next.js应用程序，确实非常容易。您只需要使用其_document.js片段即可启用SSR并防止页面加载时样式闪烁：h...
img: 
author: 番长猴子
category: question
answer: 1
tags: material-ui React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   要使用样式化的组件构建next.js应用程序，确实非常容易。</font><font style="vertical-align: inherit;">您只需要使用其</font></font><code>_document.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段即可启用SSR并防止页面加载时样式闪烁：</font><a href="https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用material-ui来构建next.js应用几乎是简单的。</font><font style="vertical-align: inherit;">您只需要从一个项目基础开始：</font></font><a href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/mui-org/material-ui/tree/master/examples/nextjs</font></a><font style="vertical-align: inherit;">，它在以下位置有自己的实现</font></font><code>_document.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/mui -org / material-ui / blob / master / examples / nextjs / pages / _document.js</font></font></a> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令人遗憾的是，我无法弄清楚如何“合并”这两种实现并获得下一个应用程序，其中样式化组件和Material-ui组件可以共存，SSR，并且在页面加载时不会闪烁。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你能帮助我吗？</font><font style="vertical-align: inherit;">互联网上是否有人比我已经解决了这个问题但我不知道的能力更好？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2528篇《如何将Nextjs +样式化组件与material-ui集成》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>_document.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，看起来像：</font></font></p>

<pre><code>    import Document from "next/document";<font></font>
    import { ServerStyleSheet } from "styled-components";<font></font>
<font></font>
    export default class MyDocument extends Document {<font></font>
      static async getInitialProps(ctx) {<font></font>
      const sheet = new ServerStyleSheet();<font></font>
      const originalRenderPage = ctx.renderPage;<font></font>
<font></font>
      try {<font></font>
        ctx.renderPage = () =&gt;<font></font>
          originalRenderPage({<font></font>
            enhanceApp: App =&gt; props =&gt; sheet.collectStyles(&lt;App {...props} /&gt;)<font></font>
          });<font></font>
        const initialProps = await Document.getInitialProps(ctx);<font></font>
<font></font>
        return {<font></font>
          ...initialProps,<font></font>
          styles: (<font></font>
            &lt;&gt;<font></font>
              {initialProps.styles}<font></font>
              {sheet.getStyleElement()}<font></font>
            &lt;/&gt;<font></font>
          )<font></font>
        };<font></font>
      } finally {<font></font>
        sheet.seal();<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面找到我的</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>{ <font></font>
  "presets": ["next/babel"], <font></font>
  "plugins": [<font></font>
      ["styled-components", { "ssr": true }]<font></font>
   ]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
