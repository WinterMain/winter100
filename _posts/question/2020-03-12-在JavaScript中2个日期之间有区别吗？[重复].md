---
layout: question
title:  在JavaScript中2个日期之间有区别吗？\[重复\]
date:   2020-03-12T08:22:31.000Z
description:                                                                          ...
img: 
author: 卡卡西Sam
category: question
answer: 1
tags: JavaScript
topic: JavaScript
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
                            <a href="/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取JavaScript中两个日期之间的天数？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （37个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-05-14 18：35：23Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获得整天2个日期之间的差额（我不想一天中的任何时间）</font></font></p>

<pre><code>var date1 = new Date('7/11/2010');<font></font>
var date2 = new Date('12/12/2010');<font></font>
var diffDays = date2.getDate() - date1.getDate(); <font></font>
alert(diffDays)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了上述方法，但这没有用。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1120篇《在JavaScript中2个日期之间有区别吗？[重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var date1 = new Date("7/11/2010");<font></font>
var date2 = new Date("8/11/2010");<font></font>
var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); <font></font>
<font></font>
alert(diffDays )<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
