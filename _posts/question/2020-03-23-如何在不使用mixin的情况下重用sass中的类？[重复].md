---
layout: question
title:  如何在不使用mixin的情况下重用sass中的类？\[重复\]
date:   2020-03-23T01:32:29.000Z
description:                                                                          ...
img: 
author: 番长
category: question
answer: 1
tags: twitter-bootstrap CSS
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
                            <a href="/questions/9560170/including-another-class-in-scss" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SCSS中包括另一个课程</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （5个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-03-01 15：49：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我的应用程序中的所有锚点都看起来像.btn（Twitter Bootstrap类），有没有办法做到这一点？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了</font></font></p>

<pre><code>a{<font></font>
  @include btn;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它不起作用，因为btn应该是一个mixin，并且它是Twitter Bootstrap类。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2598篇《如何在不使用mixin的情况下重用sass中的类？[重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要使用</font></font><code>@extend .btn;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-@extend允许您继承选择器的所有属性，而不必将其定义为mixin。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
