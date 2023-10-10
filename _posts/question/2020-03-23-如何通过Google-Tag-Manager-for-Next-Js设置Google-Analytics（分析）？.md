---
layout: question
title:  如何通过Google Tag Manager for Next-Js设置Google Analytics（分析）？
date:   2020-03-23T01:45:16.000Z
description: 以前我是使用react-ga npm模块在下一个js应用程序中插入Google Analytics（分析）。就像这样：import ReactGA f...
img: 
author: 凯西里
category: question
answer: 0
tags: google-tag-manager React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前我是使用react-ga npm模块在下一个js应用程序中插入Google Analytics（分析）。</font><font style="vertical-align: inherit;">就像这样：</font></font></p>

<pre><code>import ReactGA from 'react-ga'<font></font>
<font></font>
export const initGA = () =&gt; {<font></font>
  ReactGA.initialize('UA-*******-*', {<font></font>
    titleCase: false<font></font>
  })<font></font>
}<font></font>
<font></font>
export const logPageView = () =&gt; {<font></font>
  if (window.location.href.split('?')[1]) {<font></font>
    ReactGA.set({page: window.location.pathname + '?' + window.location.href.split('?')[1]})<font></font>
    ReactGA.pageview(window.location.pathname + '?' + window.location.href.split('?')[1])<font></font>
  } else {<font></font>
    ReactGA.set({page: window.location.pathname})<font></font>
    ReactGA.pageview(window.location.pathname)<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我在标头（插入到应用程序的每个页面）中调用logPageView函数，如下所示：</font></font></p>

<pre><code>  componentDidMount () {<font></font>
    if (!window.GA_INITIALIZED) {<font></font>
      initGA()<font></font>
      window.GA_INITIALIZED = true<font></font>
    }<font></font>
    logPageView()<font></font>
  }<font></font>
  componentWillReceiveProps () {<font></font>
    if (!window.GA_INITIALIZED) {<font></font>
      initGA()<font></font>
      window.GA_INITIALIZED = true<font></font>
    }<font></font>
    logPageView()<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想使用Google跟踪代码管理器来处理Google Analytics（分析）页面视图。</font><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2615篇《如何通过Google Tag Manager for Next-Js设置Google Analytics（分析）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
