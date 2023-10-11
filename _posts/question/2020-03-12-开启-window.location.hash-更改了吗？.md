---
layout: question
title:  开启-window.location.hash-更改了吗？
date:   2020-03-12T06:49:49.000Z
description: 我正在使用Ajax和哈希进行导航。 有没有办法检查这种window.location.hash变化是否？http //example.com/bl...
img: 
author: Harry小胖
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Ajax和哈希进行导航。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法检查这种</font></font><code>window.location.hash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变化</font><font style="vertical-align: inherit;">是否</font><font style="vertical-align: inherit;">？</font></font></p>

<p><a href="http://example.com/blah" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/blah </font></font></a><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃123</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><a href="http://example.com/blah" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/blah </font></font></a><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃456</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我在加载文档时检查它，它将起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我具有基于#hash的导航，则在按浏览器上的“后退”按钮时将不起作用（因此我从blah＃456跳到blah＃123）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它显示在地址框中，但我无法用JavaScript捕获它。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1024篇《开启-window.location.hash-更改了吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了一个jQuery插件</font></font><a href="http://jstalkies.blogspot.com/2009/10/history-utility.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HUtil</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font><font style="vertical-align: inherit;">在其顶部</font><font style="vertical-align: inherit;">编写了一个</font><font style="vertical-align: inherit;">类似UI </font><font style="vertical-align: inherit;">的</font></font><a href="http://en.wikipedia.org/wiki/Yahoo!_UI_Library" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史记录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查一次。</font><font style="vertical-align: inherit;">如果您需要帮助，我可以提供帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个不错的实现是</font></font><a href="http://www.balupton.com/projects/jquery-history" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery历史记录</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果浏览器支持它，它将使用本机onhashchange事件；否则，它将为浏览器使用适当的iframe或间隔，以确保成功模拟所有预期功能。</font><font style="vertical-align: inherit;">它还提供了一个绑定某些状态的好接口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个值得注意的项目是</font></font><a href="http://www.balupton.com/projects/jquery-ajaxy" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Ajaxy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是jQuery History的扩展，可以将ajax添加到混合中。</font><font style="vertical-align: inherit;">当您开始使用带有哈希值的ajax时，它变得</font></font><a href="https://stackoverflow.com/questions/3205900/how-to-show-ajax-requests-in-url/3276206#3276206"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当复杂</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在</font></font><a href="http://code.google.com/p/reallysimplehistory/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://code.google.com/p/reallysimplehistory/中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到不错的实现</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它具有的唯一（也是）问题和错误是：在Internet Explorer中，手动修改位置哈希将重置整个历史记录堆栈（这是浏览器问题，无法解决）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，Internet Explorer 8确实支持“ hashchange”事件，并且由于它已成为HTML5的一部分，因此您可能会期望其他浏览器跟上。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用path.js进行客户端路由。</font><font style="vertical-align: inherit;">我发现它非常简洁轻巧（它也已发布到NPM），并且利用了基于哈希的导航。</font></font></p>

<p><a href="https://www.npmjs.com/package/pathjs" rel="nofollow" title="path.js npm"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">path.js NPM</font></font></a></p>

<p><a href="https://github.com/mtrpcic/pathjs" rel="nofollow" title="path.js GitHub"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">path.js GitHub</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从3.6开始，Firefox发生了一次onhashchange事件。</font><font style="vertical-align: inherit;">参见</font></font><em><a href="https://developer.mozilla.org/en/DOM/window.onhashchange" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.onhashchange</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿A</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 </font></font><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#history-traversal" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定一个</font></font><code>hashchange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://caniuse.com/hashchange" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有现代浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在都</font><a href="http://caniuse.com/hashchange" rel="noreferrer"><font style="vertical-align: inherit;">支持</font></a><font style="vertical-align: inherit;">此事件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在以下浏览器版本中添加了支持：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 8</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 3.6</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬5</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari 5</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 10.6</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ben Alman有一个很棒的jQuery插件可以解决这个问题：</font><a href="http://benalman.com/projects/jquery-hashchange-plugin/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://benalman.com/projects/jquery-hashchange-plugin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//benalman.com/projects/jquery-hashchange-plugin/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用jQuery，则可能是一个有趣的解剖参考。 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
