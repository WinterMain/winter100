---
layout: question
title:  在本地主机上运行时，Google Optimize不触发
date:   2020-03-23T13:06:02.000Z
description: 我正在按照以下说明尝试通过JavaScript获取Google Optimize实验数据。但是我没有回调，也看不到调试器中发生的任何事情。链接的说明使...
img: 
author: 神无
category: question
answer: 1
tags: google-analytics React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在按照</font></font><a href="https://support.google.com/optimize/answer/9059383" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试通过JavaScript获取Google Optimize实验数据</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我没有回调，也看不到调试器中发生的任何事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接的说明使用了配置Google Analytics（分析）的gtag方式，因此我已经根据</font></font><a href="https://developers.google.com/gtagjs/devguide/snippet" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/gtagjs/devguide/snippet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置了gtag </font><font style="vertical-align: inherit;">，并根据</font></font><a href="https://support.google.com/optimize/answer/7513085?hl=en" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://support.google.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置了Optimize </font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1 </font></font></strong><font style="vertical-align: inherit;"><a href="https://support.google.com/optimize/answer/7513085?hl=en" rel="nofollow noreferrer"><font style="vertical-align: inherit;">优化/ answer / 7513085？hl = zh-CN </font></a><strong><font style="vertical-align: inherit;">：使用全局站点标签（gtag.js）安装优化</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想显示我正在使用的确切代码，但是由于我是在React与Next.js服务器端渲染中进行的，因此与纯HTML + JS相比，原始代码有一些额外的东西。</font><font style="vertical-align: inherit;">来源看起来像这样：</font></font></p>

<pre><code>require("dotenv").config()<font></font>
import React from "react"<font></font>
import Document, { Head, Main, NextScript } from "next/document"<font></font>
<font></font>
export default class extends Document {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;html&gt;<font></font>
                &lt;Head&gt;<font></font>
                    &lt;script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}/&gt;<font></font>
                    &lt;script<font></font>
                        dangerouslySetInnerHTML={{<font></font>
                            __html: `<font></font>
                                window.dataLayer = window.dataLayer || [];<font></font>
                                function gtag(){ dataLayer.push(arguments); }<font></font>
                                gtag('js', new Date());<font></font>
                                gtag('config', '${process.env.GA_TRACKING_ID}', { optimize_id: '${process.env.OPTIMIZE_ID}'});<font></font>
                                console.log('GA setup done: ${process.env.GA_TRACKING_ID} + ${process.env.OPTIMIZE_ID}');<font></font>
                                gtag('event', 'optimize.callback', {<font></font>
                                    name: '${process.env.EXPERIMENT_ID}',<font></font>
                                    callback: o =&gt; console.log(o)<font></font>
                                });<font></font>
                            `<font></font>
                        }}<font></font>
                    /&gt;<font></font>
                &lt;/Head&gt;<font></font>
                &lt;body&gt;<font></font>
                    &lt;Main /&gt;<font></font>
                    &lt;NextScript /&gt;<font></font>
                &lt;/body&gt;<font></font>
            &lt;/html&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>This code produces a result page that starts Analytics and tracks a pageView just like it should, and when I do "RUN DIAGNOSTICS" in the Google Optimize console it opens the page, checks the JavaScript and reports:</p>

<blockquote>
  <h2>Optimize is correctly installed</h2>
  
  <p>No major issues were detected while verifying the Optimize installation on this page.</p>
</blockquote>

<p>I have also installed the Google Chrome Tag Assistant plug-in, and it reports that the Google Optimize tag is correctly installed.</p>

<p>I can see the following calls in the network log:</p>

<pre><code>https://www.googletagmanager.com/gtag/js?id=UA-xxxxxx<font></font>
https://www.google-analytics.com/analytics.js<font></font>
https://www.google-analytics.com/gtm/js?id=GTM-xxxxxx&amp;t=gtag_UA_xxxx&amp;cid=nnn.nnn<font></font>
</code></pre>

<p>I have also verified that the <code>google_optimize</code> global variable is created, and it has a <code>.get()</code> method. If I look (in the debugger network panel) at the http response of the <code>https://www.google-analytics.com/gtm/js?...</code> request I can actually see the Google Optimize experiments data with the correct Experiment embedded in the code. </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，一切看起来都不错，除了该</font></font><code>optimize.callback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动似乎是一场彻底的无人打扰。</font><font style="vertical-align: inherit;">它什么也不做。</font><font style="vertical-align: inherit;">而且我不知道如何通过其他方式访问调试器的http响应中看到的实验数据。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3045篇《在本地主机上运行时，Google Optimize不触发》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我终于弄清楚了导致我挣扎的原因：我是从本地NodeJS服务器运行的，通常使用</font></font><code>http://localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">url。</font><font style="vertical-align: inherit;">事实证明，Google Optimize </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝不会</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发对</font></font><code>http://localhost/...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址</font><font style="vertical-align: inherit;">的实验</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该代码需要</font></font><code>hostname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一部分URL，可以根据</font></font><code>host.domain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方案</font><font style="vertical-align: inherit;">进行解析</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，</font><font style="vertical-align: inherit;">主机名中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个点，Optimize才能触发实验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于本地测试，可以通过创建主机名别名（例如</font></font><code>localhost.domain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for </font></font><code>127.0.0.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并使用该别名访问网页来解决此问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
