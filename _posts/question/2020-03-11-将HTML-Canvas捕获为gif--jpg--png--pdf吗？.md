---
layout: question
title:  将HTML Canvas捕获为gif / jpg / png / pdf吗？
date:   2020-03-11T06:29:13.000Z
description: 是否可以捕获或打印html画布中显示为图像或pdf的内容？ 我想通过画布生成图像，并能够从该图像生成png。...
img: 
author: Eva猿猿
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以捕获或打印html画布中显示为图像或pdf的内容？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过画布生成图像，并能够从该图像生成png。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第683篇《将HTML Canvas捕获为gif / jpg / png / pdf吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>On some versions of Chrome, you can:</p>

<ol>
<li>Use the draw image function <code>ctx.drawImage(image1, 0, 0, w, h);</code></li><li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击画布</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会使用“ </font></font><a href="http://wkhtmltopdf.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmltopdf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”。</font><font style="vertical-align: inherit;">效果很好。</font><font style="vertical-align: inherit;">它使用webkit引擎（用于Chrome，Safari等），并且非常易于使用：</font></font></p>

<pre><code>wkhtmltopdf stackoverflow.com/questions/923885/ this_question.pdf
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而已！</font></font></p>

<p><a href="http://wkhtmltopdf.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试一下</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
