---
layout: question
title:  如何从Compass输出压缩的CSS？
date:   2020-03-20T05:58:46.000Z
description: 如何配置罗盘以输出较小或压缩的CSS文件？我尝试过，compass -s compressed但是没有用。...
img: 
author: 神无阿飞古一
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何配置罗盘以输出较小或压缩的CSS文件？</font><font style="vertical-align: inherit;">我尝试过，</font></font><code>compass -s compressed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有用。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否尝试在命令行中使用参数的全名？</font></font></p>

<pre><code>compass watch --output-style=compressed
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的</font></font><code>config.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中：</font></font></p>

<pre><code>output_style = :compressed
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请</font></font><a href="http://compass-style.org/help/documentation/configuration-reference/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见http://compass-style.org/help/documentation/configuration-reference/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下终端命令 </font></font></p>

<pre><code>compass compile -e production --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://compass-style.org/help/tutorials/production-css/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://compass-style.org/help/tutorials/production-css/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//compass-style.org/help/tutorials/production-css/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
