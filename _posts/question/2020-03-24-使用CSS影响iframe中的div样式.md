---
layout: question
title:  使用CSS影响iframe中的div样式
date:   2020-03-24T06:52:11.000Z
description: 是否可以仅使用CSS更改位于页面上iframe内的div的样式？...
img: 
author: 斯丁
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以仅使用CSS更改位于页面上iframe内的div的样式？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3405篇《使用CSS影响iframe中的div样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加它，一切都很好：</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从客户端不可能。</font><font style="vertical-align: inherit;">由于Iframe不属于您的域，因此将引发JavaScript错误“错误：拒绝访问属性“文档”的权限”。</font><font style="vertical-align: inherit;">唯一的解决方案是从服务器端代码获取页面并更改所需的CSS。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能不是您的思维方式。</font><font style="vertical-align: inherit;">iframe也必须</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在css文件中。</font><font style="vertical-align: inherit;">而且，即使它位于其他域中，您也无法使用javascript做到这一点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，虽然很麻烦，但还是有可能的。</font><font style="vertical-align: inherit;">您需要将页面的HTML打印/回显到页面的主体中，然后应用CSS规则更改功能。</font><font style="vertical-align: inherit;">使用上面给出的相同示例，您实际上将使用一种解析方法来查找页面中的div，然后将CSS应用于该div，然后将其重新打印/回显给最终用户。</font><font style="vertical-align: inherit;">我不需要这个，所以我不想为了另一个功能而将该功能编码到另一个网页的CSS中的每个项目中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献：</font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/5725851/printing-content-of-iframe"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IFRAME的打印内容 </font></font></a></li>
<li><a href="https://stackoverflow.com/questions/14062158/accessing-and-printing-html-source-code-using-php-or-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PHP或JavaScript访问和打印HTML源代码</font></font></a></li>
<li><a href="http://www.w3schools.com/js/js_htmldom_html.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/js/js_htmldom_html.asp</font></font></a></li>
<li><a href="http://www.w3schools.com/js/js_htmldom_css.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/js/js_htmldom_css.asp</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速的答案是：不，对不起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅使用CSS是不可能的。</font><font style="vertical-align: inherit;">基本上，您需要控制iframe内容才能设置其样式。</font><font style="vertical-align: inherit;">有一些方法可以使用javascript或您选择的网络语言（我已经读过一些，但并不熟悉我自己）动态插入一些所需的样式，但是您需要直接控制iframe内容，听起来就像你没有。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以先检索内容，</font></font><code>iframe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像往常一样对它们</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">选择器。</font></font></p>

<pre><code>$("#iframe-id").contents().find("img").attr("style","width:100%;height:100%")<font></font>
<font></font>
$("#iframe-id").contents().find("img").addClass("fancy-zoom")<font></font>
<font></font>
$("#iframe-id").contents().find("img").onclick(function(){ zoomit($(this)); });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能将CSS应用于iframe中加载的HTML，除非由于跨域资源限制而可以控制iframe中加载的页面。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
