---
layout: question
title:  如何计算css px或rem中的Photoshop字母间距？
date:   2020-03-24T10:14:09.000Z
description: 任何人都对如何计算CSS px或rem中的Photoshop字母间距有任何想法。示例：我在Photoshop中有140个字母间距。现在，在CSS上应该是什...
img: 
author: 小小
category: question
answer: 1
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都对如何计算CSS px或rem中的Photoshop字母间距有任何想法。</font><font style="vertical-align: inherit;">示例：我在Photoshop中有140个字母间距。</font><font style="vertical-align: inherit;">现在，在CSS上应该是什么？</font><font style="vertical-align: inherit;">还是有什么办法可以用sass做到这一点？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Photoshop中的值除以1000，然后将结果设置</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为得到完美的像素结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设您在Photoshop中字母间距为50，则结果CSS为</font></font><code>letter-spacing: 0.05em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个简单的函数来帮助您每次进行数学运算：</font></font></p>

<pre><code>@function letter-spacing($ps-value) {<font></font>
    @return ($ps-value / 1000) * 1em<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
