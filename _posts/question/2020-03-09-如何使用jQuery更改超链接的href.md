---
layout: question
title:  如何使用jQuery更改超链接的href
date:   2020-03-09T14:04:58.000Z
description: 如何使用jQuery更改超链接的href？...
img: 
author: 神奇JinJin
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery更改超链接的href？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改Wordpress Avada主题徽标图像的HREF</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您安装ShortCode Exec PHP插件，则可以创建我称为myjavascript的此Shortcode。</font></font></p>

<pre><code>?&gt;&lt;script type="text/javascript"&gt;<font></font>
jQuery(document).ready(function() {<font></font>
jQuery("div.fusion-logo a").attr("href","tel:303-985-9850");<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以转到外观/小部件并选择页脚小部件区域之一，并使用文本小部件添加以下短代码</font></font></p>

<pre><code>[myjavascript]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器可能会根据您使用的图像以及是否准备好视网膜而变化，但是您始终可以使用开发人员工具来找出它。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid前端神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery 1.6及更高版本中，您应该使用：</font></font></p>

<pre><code>$("a").prop("href", "http://www.jakcms.com")
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的区别在于</font><font style="vertical-align: inherit;">，</font></font><code>attr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><code>attr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取HTML属性，而</font></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取DOM属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在这篇文章中找到更多详细信息：</font></font><a href="https://stackoverflow.com/questions/5874652/prop-vs-attr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.prop（）vs .attr（）</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>attr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在查询中</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">您可以切换出具有新值的任何属性。</font></font></p>

<pre><code>$("a.mylink").attr("href", "http://cupcream.com");
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
