---
layout: question
title:  在Sass中的$ primary-color上设置不透明度\[duplicate\]
date:   2020-03-23T07:43:46.000Z
description:                                                                          ...
img: 
author: 十三
category: question
answer: 1
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/9270844/sass-compass-convert-hex-rgb-or-named-color-to-rgba" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass / Compass-将十六进制，RGB或命名的颜色转换为RGBA </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （5个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-05-22 14：02：10Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在sass变量中定义为原色/副色的颜色上包含不透明度？</font><font style="vertical-align: inherit;">用lighten（$ color，amount）函数的方式？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2930篇《在Sass中的$ primary-color上设置不透明度[duplicate]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>rgba</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即</font></font></p>

<pre><code>$primary:rgba(20,20,20, .5);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也适用于十六进制值</font></font></p>

<pre><code>$primary:rgba(#4B00B5, .3);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以基于变量值设置颜色的不透明度。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>$primary-color:#a61723;<font></font>
....<font></font>
color:rgba($primary-color, .5);<font></font>
</code></pre>

<p><a href="http://codepen.io/anon/pen/lxDJy" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></strong></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
