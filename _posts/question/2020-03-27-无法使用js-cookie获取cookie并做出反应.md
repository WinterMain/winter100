---
layout: question
title:  无法使用js-cookie获取cookie并做出反应
date:   2020-03-27T12:13:45.000Z
description: 我正在使用Nextjs并尝试制作多语言应用程序。多语言工作正常，但是当我尝试使用“ en”之类的Cookie获取语言代码时，出现错误。这样工作；i...
img: 
author: 卡卡西Near
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Nextjs并尝试制作多语言应用程序。</font><font style="vertical-align: inherit;">多语言工作正常，但是当我尝试使用“ en”之类的Cookie获取语言代码时，出现错误。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样工作；</font></font></strong></p>

<pre><code>initialLang = 'en';<font></font>
setDefaultTranslations({en, fr});<font></font>
setLanguage('en');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我尝试设置带有cookie的initialLang无效时。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方式不起作用</font></font></strong></p>

<pre><code>initialLang = Cookies.get('lang');<font></font>
setDefaultTranslations({en, fr});<font></font>
setLanguage(initialLang);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3808篇《无法使用js-cookie获取cookie并做出反应》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决您的问题，您需要退后一步并理解问题。</font><font style="vertical-align: inherit;">关于cookie的主要问题是您需要拆分代码以读取和写入服务器和客户端的cookie。</font><font style="vertical-align: inherit;">js-cookie仅适用于客户端。</font><font style="vertical-align: inherit;">基本上，它可以在客户端上使用，因为它可以与一起使用</font></font><code>document.cookie</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当它调用</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.js SSR时，后端代码无法读取，</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它不存在。</font><font style="vertical-align: inherit;">如果您想在SSR中读取cookie，则需要从expressjs中捕获它</font></font><code>request</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并传递到react状态。</font><font style="vertical-align: inherit;">我建议您使用</font></font><a href="https://github.com/andreizanik/cookies-next" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/andreizanik/cookies-next</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经解决了这个问题（实现）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能您没有在componentDidMount挂钩中使用它们：</font></font></p>

<pre><code>componentDidMount() {<font></font>
  // get cookie<font></font>
  // set state to update the language<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
