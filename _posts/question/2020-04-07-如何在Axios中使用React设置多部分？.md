---
layout: question
title:  如何在Axios中使用React设置多部分？
date:   2020-04-07T03:13:23.000Z
description: 当我卷曲某些东西时，它可以正常工作：curl -L -i -H 'x-device-id  abc' -F "url=http //clips.vor...
img: 
author: 神乐小哥Near
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我卷曲某些东西时，它可以正常工作：</font></font></p>

<pre><code>curl -L -i -H 'x-device-id: abc' -F "url=http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"  http://example.com/upload
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何使其与axios一起正常工作？</font><font style="vertical-align: inherit;">如果这很重要，我正在使用react：</font></font></p>

<pre><code>uploadURL (url) {<font></font>
  return axios.post({<font></font>
    url: 'http://example.com/upload',<font></font>
    data: {<font></font>
      url: url<font></font>
    },<font></font>
    headers: {<font></font>
      'x-device-id': 'stuff',<font></font>
      'Content-Type': 'multipart/form-data'<font></font>
    }<font></font>
  })<font></font>
  .then((response) =&gt; response.data)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某些原因，这不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4043篇《如何在Axios中使用React设置多部分？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
