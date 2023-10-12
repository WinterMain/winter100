---
layout: question
title:  CSS选择器用于“包含bar的foo”？\[重复\]
date:   2020-03-19T04:18:26.000Z
description:                                                                          ...
img: 
author: 神奇逆天猪猪
category: question
answer: 2
tags: CSS
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
                            <a href="/questions/1014861/is-there-a-css-parent-selector" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有CSS父选择器？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （32个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2020-02-02 13：33：25Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上个月</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以使CSS选择器与以下内容匹配？</font></font></p>

<pre><code>All OBJECT elements<font></font>
  which have a PARAM element inside of them<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器</font></font></p>

<pre><code>OBJECT PARAM
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用，因为它匹配PARAM，而不是对象。</font><font style="vertical-align: inherit;">我想将{display：none}应用于对象；</font><font style="vertical-align: inherit;">将其应用于PARAM毫无用处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我知道我可以使用</font></font><code>$("object param").closest("object")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery-和VanillaJS- </font><font style="vertical-align: inherit;">做到这一点，</font></font><code>document.querySelector("object param").closest("object")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我正在尝试在页面上创建CSS规则。）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2353篇《CSS选择器用于“包含bar的foo”？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，您要查找的内容称为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父选择器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">CSS没有。</font><font style="vertical-align: inherit;">他们已经被多次提出，但是我不知道包括它们在内的现有标准或即将出现的标准。</font><font style="vertical-align: inherit;">您是正确的，您将需要使用jQuery之类的东西或使用其他类注释来实现所需的效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些具有类似结果的类似问题： </font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/1014861/css-parent-selector"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有CSS父选择器？</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/1251768/css-parent-ancestor-selector"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS父/祖先选择器</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/45004/complex-css-selector-for-parent-of-active-child"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动孩子的父母的复杂CSS选择器</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Jim猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以以编程方式将类应用于对象？</font></font></p>

<pre><code>&lt;object class="hasparams"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后做 </font></font></p>

<pre><code>object.hasparams
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
