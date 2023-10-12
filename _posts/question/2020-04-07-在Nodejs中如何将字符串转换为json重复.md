---
layout: question
title:  在Node.js中，如何将字符串转换为json？\[重复\]
date:   2020-04-07T03:33:28.000Z
description:                                                                          ...
img: 
author: 西门
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
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
                            <a href="/questions/4935632/parse-json-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中解析JSON？</font><font style="vertical-align: inherit;">[重复] </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （16个答案）
                                </font></font></span>
                        </div>
                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-05-25 12：01：17Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
        </aside>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，HTTP REST API刚刚向我返回了JSON，但是现在它是一个字符串。</font><font style="vertical-align: inherit;">如何将其转换为JSON？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4082篇《在Node.js中，如何将字符串转换为json？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON函数&gt;</font></font></p>

<pre><code>JSON.parse(theString)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用此功能。</font></font></p>

<pre><code>JSON.parse(yourJsonString);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将返回包含在字符串中的对象/数组。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
