---
layout: question
title:  如何在FireFox中为SVG使用十六进制值
date:   2020-03-23T02:42:37.000Z
description: 我正在使用CSS类将SVG URL加载到网页中。该功能适用​​于我测试过的所有浏览器，但Firefox 35.0.1（以及Firefox的早期版本）除外。...
img: 
author: 伽罗Tony
category: question
answer: 1
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用CSS类将SVG URL加载到网页中。</font><font style="vertical-align: inherit;">该功能适用​​于我测试过的所有浏览器，但Firefox 35.0.1（以及Firefox的早期版本）除外。</font><font style="vertical-align: inherit;">我注意到，当使用实际的颜色名称（例如白色）作为笔触时，它可以按预期工作，但是当我使用十六进制值（例如#ffffff）时，它根本不显示笔触。</font><font style="vertical-align: inherit;">根据MDN，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes?redirectlocale=en-US&amp;redirectslug=SVG%2FTutorial%2FFills_and_Strokes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持十六进制值</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，这很好用：</font></font></p>

<pre class="lang-css prettyprint-override"><code>.ui-stroke-icon .ui-icon-head:after,<font></font>
    background-image: url('data:image/svg+xml;utf8,&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 540 540" enable-background="new 0 0 540 540" xml:space="preserve"&gt;&lt;path fill="none" stroke="white" stroke-width="8" stroke-miterlimit="10" d="...svg coordinates here..."/&gt;&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不是：</font></font></p>

<pre class="lang-css prettyprint-override"><code>.ui-stroke-icon .ui-icon-head:after,<font></font>
    background-image: url('data:image/svg+xml;utf8,&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 540 540" enable-background="new 0 0 540 540" xml:space="preserve"&gt;&lt;path fill="none" stroke="#ffffff" stroke-width="8" stroke-miterlimit="10" d="...svg coordinates here..."/&gt;&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以在此处使用十六进制值作为颜色？</font><font style="vertical-align: inherit;">这确实有助于使我的Sass尽可能干燥。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2675篇《如何在FireFox中为SVG使用十六进制值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符＃</font></font><a href="http://tools.ietf.org/html/rfc3986#section-2.3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在URL中保留，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为片段标识符的开头。</font><font style="vertical-align: inherit;">您必须将其编码为％23，URL才有效。</font><font style="vertical-align: inherit;">这不是Firefox错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以使用base64对整个字符串进行编码。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
