---
layout: question
title:  React / Redux和多语言（国际化）应用程序-体系结构
date:   2020-03-12T02:24:35.000Z
description: 我正在构建一个应用程序，它将需要提供多种语言和区域设置。我的问题不是纯粹的技术问题，而是关于架构以及人们在生产中实际用来解决此问题的模式的问题。我在那...
img: 
author: 小小凯
category: question
answer: 0
tags: architecture React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在构建一个应用程序，它将需要提供多种语言和区域设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题不是纯粹的技术问题，而是关于架构以及人们在生产中实际用来解决此问题的模式的问题。</font><font style="vertical-align: inherit;">我在那里找不到任何“食谱”，所以我转向了我最喜欢的问答网站：)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的要求（它们实际上是“标准”）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户可以选择语言（平凡）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改语言后，界面应自动翻译成新选择的语言</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在不太担心格式化数字，日期等的问题，我想要一个简单的解决方案来只翻译字符串</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我可以考虑的可能解决方案：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个组件都独立处理翻译</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着每个组件在其旁边都有例如一组en.json，fr.json等文件以及转换后的字符串。</font><font style="vertical-align: inherit;">以及一个帮助程序功能，可帮助您根据所选语言从这些值中读取值。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pro：更尊重React理念，每个组件都是“独立的”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：您无法将所有翻译集中在一个文件中（例如，让其他人添加新语言）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：您仍然需要在每个血腥部分及其子女中传递当前语言作为道具</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个组成部分都通过道具接收翻译</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以他们不知道当前的语言，他们只是拿一个字符串列表作为道具，恰好匹配当前的语言</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：由于这些字符串是“自上而下”的，因此可以将它们集中在某个位置</font></font></li>
<li>Cons: Each component is now tied into the translation system, you can't just re-use one, you need to specify the correct strings every time</li>
</ul>

<p><strong>You bypass the props a bit and possibly use the <a href="https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html">context</a> thingy to pass down the current language</strong></p>

<ul>
<li>Pro: it's mostly transparent, don't have to pass the current language and/or translations via props all the time</li>
<li>Cons: it looks cumbersome to use</li>
</ul>

<p>If you have any other idea, please do say!</p>

<p>How do you do it?</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第878篇《React / Redux和多语言（国际化）应用程序-体系结构》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
