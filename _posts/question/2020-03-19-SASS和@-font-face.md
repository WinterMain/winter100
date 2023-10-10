---
layout: question
title:  SASS和\` font-face
date:   2020-03-19T01:51:16.000Z
description: 我有以下CSS-如何在SASS中对其进行描述？我已经尝试过使用css2sass进行反向编译，并且不断出错....它是否是我的CSS（有效；-)）？\`f...
img: 
author: 小胖神无
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下CSS-如何在SASS中对其进行描述？</font><font style="vertical-align: inherit;">我已经尝试过使用css2sass进行反向编译，并且不断出错....它是否是我的CSS（有效；-)）？</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: 'bingo';<font></font>
    src: url("bingo.eot");<font></font>
    src: local('bingo'),<font></font>
       url("bingo.svg#bingo") format('svg'),<font></font>
       url("bingo.otf") format('opentype');<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2228篇《SASS和@ font-face》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
