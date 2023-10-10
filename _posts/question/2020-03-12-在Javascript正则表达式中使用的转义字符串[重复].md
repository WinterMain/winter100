---
layout: question
title:  在Javascript正则表达式中使用的转义字符串\[重复\]
date:   2020-03-12T10:33:37.000Z
description:                                                                          ...
img: 
author: 泡芙小宇宙十三
category: question
answer: 0
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
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2012-08-30 00：53：26Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能重复：</font></font></strong><br>
  <a href="https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript中是否存在RegExp.escape函数？</font></font></a>  </p>
</blockquote>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试根据用户输入构建JavaScript正则表达式：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数FindString（input）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    var reg = new RegExp（''+ input +''）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    // [snip]执行搜索</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
}</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当用户输入包含</font></font><code>?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">时，正则表达式将无法正常工作，</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它们被解释为正则表达式的特殊</font><font style="vertical-align: inherit;">字符</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，如果用户</font><font style="vertical-align: inherit;">在字符串中</font><font style="vertical-align: inherit;">放置不平衡</font></font><code>(</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>[</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式，则该正则表达式甚至无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是可以正确转义要在正则表达式中使用的所有特殊字符的javascript函数？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
