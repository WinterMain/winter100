---
layout: question
title:  从Google的CDN下载jQuery UI CSS
date:   2020-03-18T09:39:25.000Z
description: 我打算使用Google下载UI和Core的jQuery库。我的问题是，他们允许我为此下载CSS还是应该自己托管它？另外，如果我使用Google加载，应...
img: 
author: 卡卡西樱
category: question
answer: 5
tags: jquery CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我打算使用Google下载UI和Core的jQuery库。</font><font style="vertical-align: inherit;">我的问题是，他们允许我为此下载CSS还是应该自己托管它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果我使用Google加载，应该如何加载其他插件？</font><font style="vertical-align: inherit;">我可以将所有插件压缩在一起吗，还是应该将其单独压缩？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2121篇《从Google的CDN下载jQuery UI CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google AJAX库API，其中包括jQuery UI（当前为v1.10.3），并且根据</font></font><a href="http://blog.jqueryui.com/2013/05/jquery-ui-1-10-3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery UI博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还包括流行的主题</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Ajax库API（CDN）</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未压缩： </font></font><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.js" rel="noreferrer"></a><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.js</font></font></a></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">压缩后： </font></font><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js" rel="noreferrer"></a><a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js</font></font></a></p></li>
<li><p>Themes Uncompressed:
<a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/black-tie/jquery-ui.css" rel="noreferrer">black-tie</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/blitzer/jquery-ui.css" rel="noreferrer">blitzer</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/cupertino/jquery-ui.css" rel="noreferrer">cupertino</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/dark-hive/jquery-ui.css" rel="noreferrer">dark-hive</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/dot-luv/jquery-ui.css" rel="noreferrer">dot-luv</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/eggplant/jquery-ui.css" rel="noreferrer">eggplant</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/excite-bike/jquery-ui.css" rel="noreferrer">excite-bike</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/flick/jquery-ui.css" rel="noreferrer">flick</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/hot-sneaks/jquery-ui.css" rel="noreferrer">hot-sneaks</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/humanity/jquery-ui.css" rel="noreferrer">humanity</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/le-frog/jquery-ui.css" rel="noreferrer">le-frog</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/mint-choc/jquery-ui.css" rel="noreferrer">mint-choc</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/overcast/jquery-ui.css" rel="noreferrer">overcast</a>,<a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/pepper-grinder/jquery-ui.css" rel="noreferrer">pepper-grinder</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/redmond/jquery-ui.css" rel="noreferrer">redmond</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css" rel="noreferrer">smoothness</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/south-street/jquery-ui.css" rel="noreferrer">south-street</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/start/jquery-ui.css" rel="noreferrer">start</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/sunny/jquery-ui.css" rel="noreferrer">sunny</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/swanky-purse/jquery-ui.css" rel="noreferrer">swanky-purse</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/trontastic/jquery-ui.css" rel="noreferrer">trontastic</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/ui-darkness/jquery-ui.css" rel="noreferrer">ui-darkness</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/ui-lightness/jquery-ui.css" rel="noreferrer">ui-lightness</a>, and <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/vader/jquery-ui.css" rel="noreferrer">vader</a>.</p></li>
<li><p>Themes Compressed:
<a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/black-tie/jquery-ui.min.css" rel="noreferrer">black-tie</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/blitzer/jquery-ui.min.css" rel="noreferrer">blitzer</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/cupertino/jquery-ui.min.css" rel="noreferrer">cupertino</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/dark-hive/jquery-ui.min.css" rel="noreferrer">dark-hive</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/dot-luv/jquery-ui.min.css" rel="noreferrer">dot-luv</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/eggplant/jquery-ui.min.css" rel="noreferrer">eggplant</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/excite-bike/jquery-ui.min.css" rel="noreferrer">excite-bike</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/flick/jquery-ui.min.css" rel="noreferrer">flick</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/hot-sneaks/jquery-ui.min.css" rel="noreferrer">hot-sneaks</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/humanity/jquery-ui.min.css" rel="noreferrer">humanity</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/le-frog/jquery-ui.min.css" rel="noreferrer">le-frog</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/mint-choc/jquery-ui.min.css" rel="noreferrer">mint-choc</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/overcast/jquery-ui.min.css" rel="noreferrer">overcast</a>,<a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/pepper-grinder/jquery-ui.min.css" rel="noreferrer">pepper-grinder</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/redmond/jquery-ui.min.css" rel="noreferrer">redmond</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css" rel="noreferrer">smoothness</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/south-street/jquery-ui.min.css" rel="noreferrer">south-street</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/start/jquery-ui.min.css" rel="noreferrer">start</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/sunny/jquery-ui.min.css" rel="noreferrer">sunny</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/swanky-purse/jquery-ui.min.css" rel="noreferrer">swanky-purse</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/trontastic/jquery-ui.min.css" rel="noreferrer">trontastic</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/ui-darkness/jquery-ui.min.css" rel="noreferrer">ui-darkness</a>, <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/ui-lightness/jquery-ui.min.css" rel="noreferrer">ui-lightness</a>, and <a href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/vader/jquery-ui.min.css" rel="noreferrer">vader</a>.</p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天樱</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是指jQuery UI CSS，则可以使用此代码：</font></font></p>

<pre><code>&lt;link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery现在具有CDN访问权限：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">code.jquery.com/ui/ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[版本]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / themes / </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[主题名称]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> /jquery-ui.css</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使这更容易一些，在这里，您可以：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本：</font><a href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">黑色领带：</font><a href="http://code.jquery.com/ui/1.9.1/themes/black-tie/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/black-tie/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/black-tie/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">blitzer：</font><a href="http://code.jquery.com/ui/1.9.1/themes/blitzer/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://code.jquery.com/ui/1.9.1/themes/blitzer/jquery-ui.css</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/blitzer/jquery-ui.css"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cupertino：</font><a href="http://code.jquery.com/ui/1.9.1/themes/cupertino/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://code.jquery.com/ui/1.9.1/themes/cupertino/jquery-ui.css</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/cupertino/jquery-ui.css"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暗蜂巢：</font><a href="http://code.jquery.com/ui/1.9.1/themes/dark-hive/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/dark-hive/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/dark-hive/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点-luv：</font><a href="http://code.jquery.com/ui/1.9.1/themes/dot-luv/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/dot-luv/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/dot-luv/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">茄子：</font><a href="http://code.jquery.com/ui/1.9.1/themes/eggplant/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/eggplant/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/eggplant/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刺激自行车：</font><a href="http://code.jquery.com/ui/1.9.1/themes/excite-bike/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/excite-bike/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/excite-bike/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻弹：</font><a href="http://code.jquery.com/ui/1.9.1/themes/flick/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/flick/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/flick/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">热偷偷摸摸的：</font><a href="http://code.jquery.com/ui/1.9.1/themes/hot-sneaks/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/hot-sneaks/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/hot-sneaks/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人类：</font><a href="http://code.jquery.com/ui/1.9.1/themes/humanity/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/humanity/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/humanity/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">le-frog：</font><a href="http://code.jquery.com/ui/1.9.1/themes/le-frog/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/le-frog/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/le-frog/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mint-choc：</font><a href="http://code.jquery.com/ui/1.9.1/themes/mint-choc/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/mint-choc/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/mint-choc/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阴：</font><a href="http://code.jquery.com/ui/1.9.1/themes/overcast/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/overcast/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/overcast/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pepper-grinder：</font><a href="http://code.jquery.com/ui/1.9.1/themes/pepper-grinder/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/pepper-grinder/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/pepper-grinder/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">雷德蒙德：</font><a href="http://code.jquery.com/ui/1.9.1/themes/redmond/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/redmond/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/redmond/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平滑度：</font><a href="http://code.jquery.com/ui/1.9.1/themes/smoothness/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/smoothness/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/smoothness/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">南街：</font><a href="http://code.jquery.com/ui/1.9.1/themes/south-street/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/south-street/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/south-street/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始：</font><a href="http://code.jquery.com/ui/1.9.1/themes/start/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/start/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/start/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">晴天：</font><a href="http://code.jquery.com/ui/1.9.1/themes/sunny/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/sunny/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/sunny/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时髦的钱包：</font><a href="http://code.jquery.com/ui/1.9.1/themes/swanky-purse/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/swanky-purse/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/swanky-purse/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">trontastic：</font><a href="http://code.jquery.com/ui/1.9.1/themes/trontastic/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：//code.jquery.com/ui/1.9.1/themes/trontastic/jquery-ui.css</font></font><a href="http://code.jquery.com/ui/1.9.1/themes/trontastic/jquery-ui.css"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-darkness：</font><a href="http://code.jquery.com/ui/1.9.1/themes/ui-darkness/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/ui-darkness/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/ui-darkness/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-lightness：</font><a href="http://code.jquery.com/ui/1.9.1/themes/ui-lightness/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/ui-lightness/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/ui-lightness/jquery-ui.css</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vader：</font><a href="http://code.jquery.com/ui/1.9.1/themes/vader/jquery-ui.css"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.jquery.com/ui/1.9.1/themes/vader/jquery-ui.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/ui/1.9.1/themes/vader/jquery-ui.css</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google通过此链接托管jQueryUI CSS </font></font><a href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.all.css" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.all.css</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果直接看这段代码，它将使用@import导入css </font></font><a href="https://stackoverflow.com/a/1022715/745"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这可能会很慢</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可能需要将导入因素分解成部分，以获得轻微的性能优势：</font></font></p>

<p><a href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.base.css" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.base.css </font></font></a>
<a href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.theme.css" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base /jquery.ui.theme.css</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid十三樱</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会这样认为。</font><font style="vertical-align: inherit;">为什么不？</font><font style="vertical-align: inherit;">没有提供CD来支持脚本文件的CSS的CDN不会太多</font></font></p>

<p><a href="http://www.filamentgroup.com/lab/jquery_ui_17_now_released/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表明它们是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们感到特别令人兴奋的是，jQuery UI CSS主题现在托管在Google的Ajax Libraries CDN中。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
