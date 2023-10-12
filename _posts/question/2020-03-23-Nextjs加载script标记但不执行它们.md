---
layout: question
title:  Next.js加载<script>标记，但不执行它们
date:   2020-03-23T03:57:16.000Z
description: 我正在将现有的React应用程序集成到Next.js中，主要用于SEO功能。我在<Header>标签中粘贴了css文件链接Next.js，它们似乎工作...
img: 
author: GilEva
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将现有的React应用程序集成到Next.js中，主要用于SEO功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>&lt;Header&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">粘贴了css文件链接</font></font><code>Next.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它们似乎工作得很好。</font><font style="vertical-align: inherit;">当我尝试使用</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">对javascript文件执行相同操作时</font><font style="vertical-align: inherit;">，它不会在这些脚本内执行代码。</font><font style="vertical-align: inherit;">但是我可以</font></font><code>http 200</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在chrome dev工具中</font><font style="vertical-align: inherit;">看到它们</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用名为</font></font><code>Loadjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">from </font><font style="vertical-align: inherit;">的库</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将脚本加载到内部，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但得到的结果与使用</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">完全相同</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么合适的方法可以做这种</font></font><code>Next.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道的</font><font style="vertical-align: inherit;">简单事情</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>pages/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">包含的代码</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>  import React from "react"<font></font>
  import Head from 'next/head'<font></font>
  import MyAwesomeComponent from "../components/mycomponent.js"<font></font>
  export default () =&gt; (<font></font>
    &lt;div&gt;<font></font>
      &lt;Head&gt;<font></font>
<font></font>
        &lt;link type="text/css" rel="stylesheet" href="static/css/chatwidget.css" /&gt;<font></font>
        &lt;link type="text/css" rel="stylesheet" href="static/css/download.css" /&gt;<font></font>
<font></font>
        &lt;script type="text/javascript" src="static/libs/jquery.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/malihu-custom-scrollbar-plugin@3.1.5/jquery.mCustomScrollbar.concat.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript" src="static/libs/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript" src="static/libs/owl.carousel.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript" src="static/scripts/chatHead.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript" src="static/libs/jquery.magnific-popup.js"&gt;&lt;/script&gt;<font></font>
      &lt;/Head&gt;<font></font>
<font></font>
      &lt;MyAwesomeComponent /&gt; {/* a simple React component that returns  : &lt;p&gt;Hello World &lt;/p&gt;*/}<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
</code></pre>

<hr>

<p>Sorry for the late answer.
it turned out that all the <code>scripts</code> i linked missed one script that would actually run the <code>functions</code> for each action.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2776篇《Next.js加载<script>标记，但不执行它们》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimDavaid卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许这可以帮助您</font></font><a href="https://stackoverflow.com/questions/54436021/nextjs-public-folder"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nextjs公用文件夹</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的静态文件夹移动到根目录中的公用文件夹中</font></font></p>

<pre><code>export default () =&gt; (<font></font>
    &lt;div&gt;<font></font>
      &lt;Head&gt;<font></font>
<font></font>
        &lt;link type="text/css" rel="stylesheet" href="/static/css/chatwidget.css" /&gt;<font></font>
        &lt;link type="text/css" rel="stylesheet" href="/static/css/download.css" /&gt;<font></font>
<font></font>
        &lt;script type="text/javascript" src="/static/libs/jquery.min.js"&gt;&lt;/script&gt;<font></font>
        ...<font></font>
      &lt;/Head&gt;<font></font>
<font></font>
      &lt;MyAwesomeComponent /&gt; <font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以运行js代码</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>          &lt;script<font></font>
            dangerouslySetInnerHTML={{<font></font>
              __html: `<font></font>
                      let a = 1;<font></font>
                      functionCall();<font></font>
                  `,<font></font>
            }}<font></font>
          &gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
