---
layout: question
title:  如何在Mobile Safari上禁用视口缩放？
date:   2020-03-23T06:09:44.000Z
description: I've tried all three of these to no avail <meta name=”viewport” content=”wi...
img: 
author: 阿飞卡卡西
category: question
answer: 10
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I've tried all three of these to no avail:</p>

<pre><code>&lt;meta name=”viewport” content=”width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;” /&gt;<font></font>
<font></font>
&lt;meta name=”viewport” content=”width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=false;” /&gt;<font></font>
<font></font>
&lt;meta name=”viewport” content=”width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;” /&gt;<font></font>
</code></pre>

<p>each are different values I found recommended by google searching or SO searching, but none of the '<strong>user-scalable=X</strong>' values seem to be working</p>

<p>I also tried comma delimiting the values instead of semicolon, no luck. Then I tried ONLY having the <code>user-scalable</code> value present, still no luck.</p>

<hr>

<p><strong>UPDATE</strong></p>

<p>Got this from Apple's site and it works:</p>

<pre><code>&lt;meta name="viewport" content="width=device-width, user-scalable=no" /&gt;
</code></pre>

<p>it turns out that the problem was the non-standard quotes because I had copied the meta tag from a website that was using them, whoops</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2805篇《如何在Mobile Safari上禁用视口缩放？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个应该可以在iphone等上使用。</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1 initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了符合WAI WCAG 2.0 AA的可访问性要求，您绝</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能禁用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">收缩缩放。</font><font style="vertical-align: inherit;">（WCAG 2.0：SC 1.4.4调整AA级文本的大小）。</font><font style="vertical-align: inherit;">您可以在此处阅读有关此内容的更多信息：   </font></font><a href="http://www.w3.org/TR/mobile-accessibility-mapping/#zoom-magnification" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移动辅助功能：WCAG 2.0和其他W3C / WAI准则如何应用于移动，2.2缩放/放大</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我设法通过将以下内容添加到HTML标头中来停止这种行为。</font><font style="vertical-align: inherit;">这适用于移动设备，因为桌面浏览器在使用鼠标滚轮时支持缩放。</font><font style="vertical-align: inherit;">在桌面浏览器上这没什么大不了的，但是考虑到这一点很重要。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及CSS样式表的以下规则</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>html {<font></font>
	-webkit-text-size-adjust: none;<font></font>
	touch-action: manipulation;<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我愚蠢地有一个包装器div，其宽度以像素为单位。</font><font style="vertical-align: inherit;">其他浏览器似乎足够智能，可以解决此问题。</font><font style="vertical-align: inherit;">一旦将宽度转换为百分比值，它就可以在Safari移动版上正常工作。</font><font style="vertical-align: inherit;">很烦人。</font></font></p>

<pre><code>.page{width: 960px;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font></p>

<pre><code>.page{width:93.75%}<font></font>
<font></font>
&lt;div id="divPage" class="page"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Safari 9.0及更高版本中，您可以</font><font style="vertical-align: inherit;">在视口meta标签中</font><font style="vertical-align: inherit;">使用“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缩小以适合”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，</font></font><code>content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">中的其他指令</font><font style="vertical-align: inherit;">会弄乱Apple关于如何布局页面的最佳猜测/启发式，您只需禁用捏缩放即可。</font></font></p>

<pre><code>&lt;meta name="viewport" content="user-scalable=no" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将以下内容添加到您的标签中：</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, <font></font>
minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外</font></font></p>

<pre><code>&lt;meta name="HandheldFriendly" content="true"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，作为样式属性或在您的css文件中，为基于Webkit的浏览器添加以下文本：</font></font></p>

<pre><code>html {<font></font>
    -webkit-text-size-adjust: none<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码将属性双引号显示为花式双引号。</font><font style="vertical-align: inherit;">如果您的实际源代码中包含花哨的引号，我想可能是问题所在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我适用于iOS 4.2中的Mobile Safari。</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>user-scalable=0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能不再适用于iOS10。Apple删除了该功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您制作总平台应用，否则您无法立即在iOS上禁用缩放网站。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于正在寻找iOS 10解决方案的用户，</font></font><code>user-scaleable=no</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iOS 10的Safari已被禁用。原因是Apple试图通过允许人们放大网页来提高可访问性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从发行说明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了提高Safari中网站的可访问性，即使网站在视口中设置user-scalable = no，用户现在也可以捏缩放。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，我们很不走运。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
