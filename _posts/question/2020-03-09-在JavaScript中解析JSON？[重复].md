---
layout: question
title:  在JavaScript中解析JSON？\[重复\]
date:   2020-03-09T12:18:28.000Z
description:                                                                          ...
img: 
author: 小哥阿飞神奇
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
                            <a href="/questions/45015/safely-turning-a-json-string-into-an-object" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全地将JSON字符串转换为对象</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （27个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-07-18 01：46：34Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想解析JavaScript中的JSON字符串。</font><font style="vertical-align: inherit;">响应就像</font></font></p>

<pre><code>var response = '{"result":true,"count":1}';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎样才能获得的值</font></font><code>result</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这个？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是从外部站点获得的，那么使用jQuery的getJSON可能会有所帮助。</font><font style="vertical-align: inherit;">如果是列表，则可以使用$ .each遍历它。</font></font></p>

<pre><code>$.getJSON(url, function (json) {<font></font>
    alert(json.result);<font></font>
    $.each(json.list, function (i, fb) {<font></font>
        alert(fb.result);<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
