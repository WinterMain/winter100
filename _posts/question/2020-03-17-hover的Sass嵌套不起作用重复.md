---
layout: question
title:  ：hover的Sass嵌套不起作用\[重复\]
date:   2020-03-17T09:07:04.000Z
description:                                                                          ...
img: 
author: 猪猪JinJin
category: question
answer: 2
tags: Sass CSS
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
                            <a href="/questions/11084757/sass-scss-nesting-and-multiple-classes" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass .scss：嵌套和多个类？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （3个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-05-19 18：29：23Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经编写了这段代码，但是它不起作用。</font><font style="vertical-align: inherit;">我怎么了</font></font></p>

<pre><code>.class {<font></font>
    margin:20px;<font></font>
    :hover {<font></font>
        color:yellow;<font></font>
    }<font></font>
 }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1922篇《：hover的Sass嵌套不起作用\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您浏览生成的CSS时，您可以轻松调试此类内容。</font><font style="vertical-align: inherit;">在这种情况下，转换后的伪选择器必须附加到该类上。</font><font style="vertical-align: inherit;">事实并非如此。</font><font style="vertical-align: inherit;">采用 ”＆”。</font></font></p>

<p><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector</font></font></a></p>

<pre><code>.class {<font></font>
    margin:20px;<font></font>
    &amp;:hover {<font></font>
        color:yellow;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Pro樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在嵌套时将选择器并置在一起，您需要使用父选择器（</font></font><code>&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>.class {<font></font>
    margin:20px;<font></font>
    &amp;:hover {<font></font>
        color:yellow;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
