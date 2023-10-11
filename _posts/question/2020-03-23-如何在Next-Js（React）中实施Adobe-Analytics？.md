---
layout: question
title:  如何在Next Js（React）中实施Adobe Analytics？
date:   2020-03-23T06:40:32.000Z
description: 我已要求在已构建的react js应用程序中添加Adobe Analytics。请向我道歉，我对如何实现它没有任何基本想法/理解，因此专家的帮助将对我...
img: 
author: 梅
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已要求在已构建的react js应用程序中添加Adobe Analytics。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请向我道歉，我对如何实现它没有任何基本想法/理解，因此专家的帮助将对我非常有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求是我需要在</font></font><code>next js with typescript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">项目中</font><font style="vertical-align: inherit;">实现Adobe Analytics </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在官方文档中</font><font style="vertical-align: inherit;">只能找到</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">google Analytics（分析）示例，而</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在adobe中找不到。</font></font></p>

<blockquote>
  <p><a href="https://codesandbox.io/s/fervent-resonance-2k7xd" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的示例工作应用程序代码在这里...</font></font></strong></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Index.tsx：</font></font></p>

<pre><code>import React from "react";<font></font>
import Container from "@material-ui/core/Container";<font></font>
import Typography from "@material-ui/core/Typography";<font></font>
import Box from "@material-ui/core/Box";<font></font>
import Link from "../src/Link";<font></font>
<font></font>
export default function Index() {<font></font>
  return (<font></font>
    &lt;Container maxWidth="sm"&gt;<font></font>
      &lt;Box my={4}&gt;<font></font>
        &lt;Typography variant="h4" component="h1" gutterBottom&gt;<font></font>
          Next.js with TypeScript example<font></font>
        &lt;/Typography&gt;<font></font>
        &lt;Link href="/about" color="secondary"&gt;<font></font>
          Go to the about page<font></font>
        &lt;/Link&gt;<font></font>
      &lt;/Box&gt;<font></font>
    &lt;/Container&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从链接中提供的源代码中，请帮助我应该从哪里开始以及实现Adobe Analytics的确切需求？</font></font></p>

<p>I found the link for <strong>SSR</strong> here,  <a href="https://docs.adobe.com/content/help/en/experience-manager-65/developing/headless/spas/spa-ssr.html" rel="nofollow noreferrer">https://docs.adobe.com/content/help/en/experience-manager-65/developing/headless/spas/spa-ssr.html</a> but it doesn't provide necessary details about implementation inside code.</p>

<p>Raised a query here: <a href="https://github.com/zeit/next.js/discussions/10679" rel="nofollow noreferrer">https://github.com/zeit/next.js/discussions/10679</a> but I couldn't get the appropriate help from anyone..</p>

<p>As like the question title indicates, I am in the need of <strong>adobe analytics</strong> implementation and <strong>strictly not</strong> google analytics..</p>

<p>I humble request, please provide the solution by forking the above codesandbox with working condition.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2857篇《如何在Next Js（React）中实施Adobe Analytics？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
