---
layout: question
title:  使用Next.js渲染normalize.css +情感样式
date:   2020-03-26T08:02:49.000Z
description: 我正在尝试将Normalize.css添加为全局文件，并将情感用于我的CSS模块。首先我的 .babelrc{  "presets"  \[  ...
img: 
author: 小小
category: question
answer: 1
tags: css-modules React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将Normalize.css添加为全局文件，并将情感用于我的CSS模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先我的 </font></font><code>.babelrc</code></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    ["env", {<font></font>
      "modules": false,<font></font>
      "useBuiltIns": true<font></font>
    }],<font></font>
    "next/babel"<font></font>
  ],<font></font>
  "plugins": [<font></font>
    "syntax-dynamic-import",<font></font>
    "transform-runtime",<font></font>
    "transform-decorators-legacy",<font></font>
    "transform-class-properties",<font></font>
    "transform-object-rest-spread",<font></font>
    "es6-promise",<font></font>
    ["module-resolver", {<font></font>
      "root": ["./src"],<font></font>
      "alias": {<font></font>
        "styles": "./styles",<font></font>
        "assets": "./assets",<font></font>
      },<font></font>
      "cwd": "babelrc"<font></font>
    }],<font></font>
    ["inline-import", { "extensions": [".css"] } ],<font></font>
    ["emotion", { "inline": true }]<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加Normalize.css</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我</font></font><code>_document.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我添加了规范化</font></font></p>

<pre><code>import Document, { Head, Main, NextScript } from 'next/document';<font></font>
import normalize from 'normalize.css/normalize.css';<font></font>
import { extractCritical } from 'emotion-server';<font></font>
<font></font>
export default class MyDocument extends Document {<font></font>
  static getInitialProps({ renderPage }) {<font></font>
    const page = renderPage();<font></font>
    const styles = extractCritical(page.html);<font></font>
    return { ...page, ...styles };<font></font>
  }<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    const { __NEXT_DATA__, ids } = props;<font></font>
    if (ids) {<font></font>
      __NEXT_DATA__.ids = ids;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;html&gt;<font></font>
        &lt;Head&gt;<font></font>
          &lt;title&gt;SSR&lt;/title&gt;<font></font>
          &lt;style jsx global&gt;{normalize}&lt;/style&gt;<font></font>
          &lt;style dangerouslySetInnerHTML={{ __html: this.props.css }} /&gt;<font></font>
        &lt;/Head&gt;<font></font>
        &lt;body&gt;<font></font>
          &lt;Main /&gt;<font></font>
          &lt;NextScript /&gt;<font></font>
        &lt;/body&gt;<font></font>
      &lt;/html&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-global-stylesheet-simple" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此处所示</font></a><font style="vertical-align: inherit;">相同</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-global-stylesheet-simple" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用Emotion添加我的CSS模块</font></font></h2>

<pre><code>import React, { Component } from 'react';<font></font>
import Breadcrumb from 'components/Breadcrumb';<font></font>
import Link from 'next/link';<font></font>
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion';<font></font>
<font></font>
// Adds server generated styles to emotion cache.<font></font>
// '__NEXT_DATA__.ids' is set in '_document.js'<font></font>
if (typeof window !== 'undefined') {<font></font>
  hydrate(window.__NEXT_DATA__.ids);<font></font>
}<font></font>
<font></font>
<font></font>
  const basicStyles = css`<font></font>
    background-color: white;<font></font>
    color: cornflowerblue;<font></font>
    margin: 3rem 0;<font></font>
    padding: 1rem 0.5rem;<font></font>
  `<font></font>
<font></font>
  const Basic = styled.div`<font></font>
    ${basicStyles};<font></font>
  `<font></font>
<font></font>
export default class extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Basic&gt;<font></font>
        &lt;p&gt;Basic style rendered by emotion&lt;/p&gt;<font></font>
      &lt;/Basic&gt;);<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-emotion" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此处所示</font></a><font style="vertical-align: inherit;">相同</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-emotion" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：StyleSheet： </font></font><code>insertRule</code> accepts only strings.
      at invariant (/home/riderman/WebstormProjects/tmp/node_modules/styled-jsx/dist/lib/stylesheet.js:274:11)
      at StyleSheet.insertRule (/home/riderman/WebstormProjects/tmp/node_modules/styled-jsx/dist/lib/stylesheet.js:125:7)
      at /home/riderman/WebstormProjects/tmp/node_modules/styled-jsx/dist/stylesheet-registry.js:88:29
      at Array.map (native)
      at StyleSheetRegistry.add (/home/riderman/WebstormProjects/tmp/node_modules/styled-jsx/dist/stylesheet-registry.js:87:27)
      at JSXStyle.componentWillMount (/home/riderman/WebstormProjects/tmp/node_modules/styled-jsx/dist/style.js:58:26)
      at resolve (/home/riderman/WebstormProjects/tmp/node_modules/react-dom/cjs/react-dom-server.node.development.js:2616:12)
      at ReactDOMServerRenderer.render (/home/riderman/WebstormProjects/tmp/node_modules/react-dom/cjs/react-dom-server.node.development.js:2746:22)
      at ReactDOMServerRenderer.read (/home/riderman/WebstormProjects/tmp/node_modules/react-dom/cjs/react-dom-server.node.development.js:2722:19)
      at renderToStaticMarkup (/home/riderman/WebstormProjects/tmp/node_modules/react-dom/cjs/react-dom-server.node.development.js:2991:25)</p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font></h2>

<p><font style="vertical-align: inherit;"><a href="https://gitlab.com/problems/test-emotion-plus-global-nextjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在此处</font></a><font style="vertical-align: inherit;">检查源代码</font></font><a href="https://gitlab.com/problems/test-emotion-plus-global-nextjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><a href="https://gitlab.com/problems/test-emotion-plus-global-nextjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gitlab.com/problems/test-emotion-plus-global-nextjs</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3740篇《使用Next.js渲染normalize.css +情感样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Zeit的styled-jsx页面上似乎存在此问题：</font><a href="https://github.com/zeit/styled-jsx/issues/298" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/zeit/styled-jsx/issues/298" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/zeit/styled-jsx/issues/298</font></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据此问题，它可能是外部样式，或者您需要将</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到模板文字中。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看您的代码，您正在使用</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记，看不到任何会导致这种情况的外部样式。</font><font style="vertical-align: inherit;">如果您没有明确的答案，我想跟Zeit一起探讨第298期。</font><font style="vertical-align: inherit;">HTH，加油！</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摆脱那里的jsx样式，只需将规范化添加到全局模板字符串中即可：</font></font></p>

<pre><code>injectGlobal`<font></font>
    ${normalize}<font></font>
    html, body {<font></font>
      padding: 3rem 1rem;<font></font>
      margin: 0;<font></font>
      background: papayawhip;<font></font>
      min-height: 100%;<font></font>
      font-family: Helvetica, Arial, sans-serif;<font></font>
      font-size: 24px;<font></font>
    }<font></font>
  `;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
