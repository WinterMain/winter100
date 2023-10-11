---
layout: question
title:  如何检查Google Maps是否已满载？
date:   2020-03-24T08:35:44.000Z
description: I’m embedding Google Maps into my web site. Once Google Maps is loaded, I nee...
img: 
author: 猴子村村
category: question
answer: 4
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I’m embedding Google Maps into my web site. Once Google Maps is loaded, I need to kick off a few JavaScript processes.</p>

<p><strong>Is there a way to auto-detect when Google Maps has fully loaded, including tile downloads and all?</strong></p>

<p>A <code>tilesloaded()</code> method exists that is supposed to accomplish exactly this task but <a href="https://www.google.com/search?hl=en&amp;q=GEvent.addListener%28map,+%22tilesloaded%22,+function%28%29+{&amp;btnG=Google+Search&amp;aq=f&amp;oq=" rel="noreferrer">it does not work</a>.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3517篇《如何检查Google Maps是否已满载？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Tom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中变量</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是GMap2类型的对象：</font></font></p>

<pre><code>    GEvent.addListener(map, "tilesloaded", function() {<font></font>
      console.log("Map is fully loaded");<font></font>
    });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>GMap2.isLoaded()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">毫秒</font><font style="vertical-align: inherit;">检查一次该</font><font style="vertical-align: inherit;">方法，</font><font style="vertical-align: inherit;">以查看地图及其所有图块是否已加载（</font></font><code>window.setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>window.setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是您的朋友）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然这不会给您确切的加载完成事件，但足以触发Javascript。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Maps API v3，则此操作已更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在版本3中，您实质上想为</font></font><code>bounds_changed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">设置一个侦听器，该</font><font style="vertical-align: inherit;">事件将在加载地图时触发。</font><font style="vertical-align: inherit;">一旦触发，请删除侦听器，因为您不想在每次视口边界更改时都被告知。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着V3 API的发展，这种情况将来可能会改变：-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Green</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>GMap2::tilesloaded()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将是您正在寻找的事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">参考，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://code.google.com/apis/maps/documentation/reference.html#GMap2.tilesloaded" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GMap2.tilesloaded</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
