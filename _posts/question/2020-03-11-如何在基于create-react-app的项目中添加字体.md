---
layout: question
title:  如何在基于create-react-app的项目中添加字体？
date:   2020-03-11T09:49:42.000Z
description: 我正在使用create-react-app，但不想使用eject。目前尚不清楚应该通过\` font-face导入并本地加载的字体在哪里。 即我正在...
img: 
author: 神乐神乐
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://github.com/facebook/create-react-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">create-react-app</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">但不想使用</font></font><code>eject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前尚不清楚应该通过@ font-face导入并本地加载的字体在哪里。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即我正在加载</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: 'Myriad Pro Regular';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Regular'), url('MYRIADPRO-REGULAR.woff') format('woff');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-编辑</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括丹在回答中提到的要点</font></font></p>

<pre><code>➜  Client git:(feature/trivia-game-ui-2) ✗ ls -l public/static/fonts<font></font>
total 1168<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  62676 Mar 17  2014 MYRIADPRO-BOLD.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  61500 Mar 17  2014 MYRIADPRO-BOLDCOND.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  66024 Mar 17  2014 MYRIADPRO-BOLDCONDIT.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  66108 Mar 17  2014 MYRIADPRO-BOLDIT.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  60044 Mar 17  2014 MYRIADPRO-COND.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  64656 Mar 17  2014 MYRIADPRO-CONDIT.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  61848 Mar 17  2014 MYRIADPRO-REGULAR.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  62448 Mar 17  2014 MYRIADPRO-SEMIBOLD.woff<font></font>
-rwxr-xr-x@ 1 maximveksler  staff  66232 Mar 17  2014 MYRIADPRO-SEMIBOLDIT.woff<font></font>
➜  Client git:(feature/trivia-game-ui-2) ✗ cat src/containers/GameModule.css<font></font>
.GameModule {<font></font>
  padding: 15px;<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Regular';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Regular'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-REGULAR.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Condensed';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Condensed'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-COND.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Semibold Italic';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Semibold Italic'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-SEMIBOLDIT.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Semibold';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Semibold'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-SEMIBOLD.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Condensed Italic';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Condensed Italic'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-CONDIT.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Bold Italic';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Bold Italic'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-BOLDIT.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Bold Condensed Italic';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Bold Condensed Italic'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-BOLDCONDIT.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Bold Condensed';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Bold Condensed'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-BOLDCOND.woff') format('woff');<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'Myriad Pro Bold';<font></font>
  font-style: normal;<font></font>
  font-weight: normal;<font></font>
  src: local('Myriad Pro Bold'), url('%PUBLIC_URL%/static/fonts/MYRIADPRO-BOLD.woff') format('woff');<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第778篇《如何在基于create-react-app的项目中添加字体？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在犯这样的错误。</font></font></p>

<pre><code>@import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&amp;amp;subset=cyrillic,cyrillic-ext,latin-ext";<font></font>
@import "https://use.fontawesome.com/releases/v5.3.1/css/all.css";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以正常工作</font></font></p>

<pre><code>@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&amp;amp;subset=cyrillic,cyrillic-ext,latin-ext);<font></font>
@import url(https://use.fontawesome.com/releases/v5.3.1/css/all.css);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到Google字体</font></font><a href="https://fonts.google.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fonts.google.com/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择您的字体，如下图所示： </font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/ekX7F.png" rel="noreferrer"><img src="https://i.stack.imgur.com/ekX7F.png" alt="在此处输入图片说明"></a></p>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制该网址，然后将其粘贴到新标签中，您将获得CSS代码以添加该字体。</font><font style="vertical-align: inherit;">在这种情况下，如果您转到</font></font></li>
</ol>

<blockquote>
  <p><a href="https://fonts.googleapis.com/css?family=Spicy+Rice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fonts.googleapis.com/css?family=Spicy+Rice</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将像这样打开：</font></font></p>

<p><a href="https://i.stack.imgur.com/GxjHx.png" rel="noreferrer"><img src="https://i.stack.imgur.com/GxjHx.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4，复制该代码并将其粘贴到您的style.css中，然后开始使用这种字体，如下所示：</font></font></p>

<pre><code>      &lt;Typography<font></font>
          variant="h1"<font></font>
          gutterBottom<font></font>
          style={{ fontFamily: "Spicy Rice", color: "pink" }}<font></font>
        &gt;<font></font>
          React Rock<font></font>
        &lt;/Typography&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/udJ77.png" rel="noreferrer"><img src="https://i.stack.imgur.com/udJ77.png" alt="在此处输入图片说明"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
