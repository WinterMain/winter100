---
layout: question
title:  JavaScript中==和===之间的区别\[重复\]
date:   2020-03-09T12:22:42.000Z
description:                                                                          ...
img: 
author: 米亚伽罗村村
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
                            <a href="/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript比较中应使用哪个等于运算符（== vs ===）？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （49个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2019-11-09 14：30：59Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的区别是什么</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我也看过</font></font><code>!=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>!==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符。</font><font style="vertical-align: inherit;">还有更多这样的运营商吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第243篇《JavaScript中==和===之间的区别\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>!==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是严格的比较运算符：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript具有严格和类型转换相等性比较。</font><font style="vertical-align: inherit;">为了</font></font><code>strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相等，要比较的对象必须具有相同的类型，并且：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当两个字符串在相同位置具有相同的字符序列，相同的长度和相同的字符时，它们是严格相等的。</font></font></li>
  <li>Two numbers are strictly equal when they are numerically equal (have
  the same number value). <code>NaN</code> is not
  equal to anything, including <code>NaN</code>.
  Positive and negative zeros are equal
  to one another.</li>
  <li>Two Boolean operands are strictly equal if both are true or
  both are false.</li>
  <li>Two objects are strictly equal if they refer to the same <code>Object</code>.</li>
  <li><code>Null</code> and <code>Undefined</code> types are <code>==</code> (but not <code>===</code>). [I.e. (<code>Null==Undefined</code>) is <code>true</code> but (<code>Null===Undefined</code>) is <code>false</code>]</li>
  </ul>
</blockquote>

<p><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Operators/Comparison_Operators" rel="noreferrer">Comparison Operators - MDC</a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
