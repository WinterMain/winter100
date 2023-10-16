---
layout: question
title:  分别了解offsetWidth，clientWidth，scrollWidth和-Height
date:   2020-03-20T05:13:11.000Z
description: 在StackOverflow上有几个关于offsetWidth / clientWidth / scrollWidth（分别是-Height和）的问题，但...
img: 
author: 理查德Itachi
category: question
answer: 1
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在StackOverflow上有几个关于offsetWidth / clientWidth / scrollWidth（分别是-Height和）的问题，但是没有一个问题可以全面解释这些值是什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，网络上有多个来源提供令人困惑或不正确的信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否给出完整的解释，包括一些视觉提示？</font><font style="vertical-align: inherit;">另外，这些值如何用于计算滚动条宽度？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2468篇《分别了解offsetWidth，clientWidth，scrollWidth和-Height》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearLHarry</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想使用scrollWidth来获取</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“实际” </font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容的宽度/高度</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为内容可能比css定义的width / height-Box大），</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当某些浏览器似乎“移动”了paddingRIGHT时</font><font style="vertical-align: inherit;">，</font><strong><font style="vertical-align: inherit;">scrollWidth / Height是非常不可靠</font></strong><font style="vertical-align: inherit;">的＆paddingBOTTOM（如果内容太大）。</font><font style="vertical-align: inherit;">然后，他们将填充物放在“太宽/太高”的右/底部（请参见下图）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">==&gt;</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，要在某些浏览器中获得真实内容宽度，您必须从scrollwidth中减去两个填充，而在某些浏览器中，您仅需减去LEFT Padding。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此找到了解决方案，并希望将其添加为注释，但不允许这样做。</font><font style="vertical-align: inherit;">所以我拍了张照片，使它的“移动的填充”和“不可靠的scrollWidth”更加清晰了。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在蓝***域中，您可以找到有关如何获得“真实”内容宽度的解决方案！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这有助于使事情变得更加清晰！</font></font></p>

<p><a href="https://i.stack.imgur.com/JY33m.png" rel="noreferrer"><img src="https://i.stack.imgur.com/JY33m.png" alt="在此处输入图片说明"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
