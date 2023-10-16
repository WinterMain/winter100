---
layout: question
title:  用jQuery检查div是否存在\[重复\]
date:   2020-03-24T07:03:17.000Z
description:                                                                          ...
img: 
author: 小胖Gil
category: question
answer: 2
tags: jquery HTML
topic: HTML
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
                            <b>This question already has answers here</b>:
                            
                        </div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/31044/is-there-an-exists-function-for-jquery" dir="ltr">Is there an “exists” function for jQuery?</a>
                                <span class="question-originals-answer-count">
                                    (42 answers)
                                </span>
                        </div>
                                <div class="grid--cell mb0 mt8">Closed <span title="2020-02-02 13：32：29Z" class="relativetime">last month</span>.</div>
            </div>
                    </aside>
<p>Yes, I know this has been asked a lot.
But, it confuses me, since the results on google for this search show different methods (listed below)</p>

<pre><code>$(document).ready(function() {<font></font>
    if ($('#DivID').length){<font></font>
        alert('Found with Length');<font></font>
    }<font></font>
<font></font>
    if ($('#DivID').length &gt; 0 ) {<font></font>
        alert('Found with Length bigger then Zero');<font></font>
    }<font></font>
<font></font>
    if ($('#DivID') != null ) {<font></font>
        alert('Found with Not Null');<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p>Which one of the 3 is the correct way to check if the div exists?</p>

<p>EDIT:
It's a pitty to see that people do not want to learn what is the better approach from the three different methods. This question is not actually on "How to check if a div exists" but it's about which method is better, and, if someone could explain, why it it better?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3418篇《用jQuery检查div是否存在\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEvaDavaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先是最简洁的，我同意。</font><font style="vertical-align: inherit;">前两个相同，但是第一个短一点，因此您将节省字节数。</font><font style="vertical-align: inherit;">第三个是完全错误的，因为该条件永远将为true，因为该对象</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永远不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为null或虚假。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如karim79所说，第一个是最简洁的。</font><font style="vertical-align: inherit;">但是我可能会争辩说第二个更容易理解，因为对于某些Javascript / jQuery程序员来说，非零/假值</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在if语句中</font><font style="vertical-align: inherit;">被评估是不明显的/不为人所知</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，第三种方法是不正确的。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
