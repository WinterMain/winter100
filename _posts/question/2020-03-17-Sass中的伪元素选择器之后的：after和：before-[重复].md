---
layout: question
title:  Sass中的伪元素选择器之后的：after和：before \[重复\]
date:   2020-03-17T10:06:20.000Z
description:                                                                          ...
img: 
author: 樱樱Pro
category: question
answer: 1
tags: css CSS
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
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-02-10 03：23：22Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何按照Sass或SCSS的语法使用：before和：after伪元素选择器？</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>p<font></font>
  margin: 2em auto<font></font>
  &gt; a<font></font>
    color: red<font></font>
  :before<font></font>
    content: ""<font></font>
  :after<font></font>
    content: "* * *"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，以上失败。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1963篇《Sass中的伪元素选择器之后的：after和：before \[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用＆符指定父选择器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS语法：</font></font></p>

<pre><code>p {<font></font>
    margin: 2em auto;<font></font>
<font></font>
    &gt; a {<font></font>
        color: red;<font></font>
    }<font></font>
<font></font>
    &amp;:before {<font></font>
        content: "";<font></font>
    }<font></font>
<font></font>
    &amp;:after {<font></font>
        content: "* * *";<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
