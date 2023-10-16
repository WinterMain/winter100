---
layout: question
title:  如何在JavaScript中输出带有前导零的数字
date:   2020-03-12T09:54:48.000Z
description:                                                                          ...
img: 
author: 阿飞Pro
category: question
answer: 3
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
                            <a href="/questions/1267283/how-can-i-pad-a-value-with-leading-zeros" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何用前导零填充值？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （70个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2020-01-31 06：45：23Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上个月</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以用math.round舍入到小数位数的x位数，但是有没有办法舍入到小数点的左边？</font><font style="vertical-align: inherit;">例如，如果我指定2个位置，则5变为05</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1243篇《如何在JavaScript中输出带有前导零的数字》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://gist.github.com/1180489" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/1180489</font></font></a></p>

<pre><code>function pad(a,b){return(1e15+a+"").slice(-b)}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有评论：</font></font></p>

<pre><code>function pad(<font></font>
  a, // the number to convert <font></font>
  b // number of resulting characters<font></font>
){<font></font>
  return (<font></font>
    1e15 + a + // combine with large number<font></font>
    "" // convert to string<font></font>
  ).slice(-b) // cut leading "1"<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以扩展</font></font><code>Number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象：</font></font></p>

<pre><code>Number.prototype.pad = function(size) {<font></font>
    var s = String(this);<font></font>
    while (s.length &lt; (size || 2)) {s = "0" + s;}<font></font>
    return s;<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：</font></font></em></p>

<pre><code>(9).pad();  //returns "09"<font></font>
<font></font>
(7).pad(3);  //returns "007"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function zfill(num, len) {return (Array(len).join("0") + num).slice(-len);}
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
