---
layout: question
title:  Chrome开发工具/ Firebug中的更少/简单调试
date:   2020-03-18T10:33:11.000Z
description:                                                                          ...
img: 
author: Pro神无
category: question
answer: 4
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            按照目前的情况，这个问题并不适合我们的问答形式。</font><font style="vertical-align: inherit;">我们希望答案得到事实，参考或专业知识的支持，但是这个问题可能会引起辩论，争论，民意调查或扩展讨论。</font><font style="vertical-align: inherit;">如果您认为此问题可以解决并且可以重新提出，</font></font><a href="/help/reopen-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请访问帮助中心</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取指导。
                            
                        </font></font></div>
                    </div>
                </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2012-11-08 00：05：43Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你们如何维护用Less / Sass构建的CSS？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢Dev Tools / Firebug的一件事是能够查看CSS样式的行号。</font><font style="vertical-align: inherit;">除了必须手动搜索.less / .scss文件以查找我想要修改的代码之外，还有使用CSS预处理器执行此操作的好方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2156篇《Chrome开发工具/ Firebug中的更少/简单调试》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于失礼，我从少变了。</font><font style="vertical-align: inherit;">这样，您将在Firebug中获得原始的Sass行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用sass，</font><font style="vertical-align: inherit;">请安装</font></font><a href="https://addons.mozilla.org/en-US/firefox/addon/firesass-for-firebug/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">firesass</font></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很少在LESS中进行维护/调试的问题-我们总是在服务器端进行编译，并且仅引用HTML页面中的CSS文件。</font><font style="vertical-align: inherit;">这样一来，网页和光盘上的文件始终保持一一对应的关系。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，当我不得不编辑LESS文件时，我发现LESS，因为它几乎是CSS +额外的标记，所以很容易回溯我对CSS的原始语句感到困惑的任何内容。</font><font style="vertical-align: inherit;">如果是mixin，这是很明显的（因为我通常使用mixin来避免必须重复执行所有供应商前缀的内容），并且由于我们使用了类嵌套功能，因此这只是一个逻辑层次结构，因此查找：</font></font></p>

<p><code>div#awesome aside ul</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像发现一样容易：</font></font></p>

<pre><code>div#awesome{<font></font>
    aside{<font></font>
        ul{<font></font>
            padding: 0;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尽管我们尝试的深度不超过3层）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对SASS并没有真正的经验，但是我不喜欢几年前第一次看CSS时离CSS有多远（从那以后再也没有回来...）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些技巧： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在版本控制中同时包含.sass和.css文件。</font><font style="vertical-align: inherit;">这样，每个人都有最新的变化。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将样式表组织到逻辑区域中，则维护很容易。 </font></font></li>
<li>Also: try to use fewer than three main colors, and then use SASS color functions to modify them and store results in variables that you can reuse throughout your design/theme. </li>
</ul>

<p>Ex: 
<code>$chartreuse: #7fff00</code>
<code>$olive: darken($chartreuse, 32%)</code></p>

<p>That way, you only have to maintain one color. And the rest will be recalculated. </p>

<hr>

<p>Until recently, there were no in-browser SASS debugging tools. </p>

<p>There is now a Firefox plugin called FireSASS (https://addons.mozilla.org/en-US/firefox/addon/firesass-for-firebug/)</p>

<p>In your <code>sass --watch</code> command, add a <code>-g</code> for <code>--debug-info</code> so that it will output the hooks needed for the plugin to run. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome Developer Tools现在支持开箱即用的Sass调试。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已更新为包括源地图：</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
先前版本在CSS中使用内联注释来提供对源代码的引用（请参见下面的方法）。</font><font style="vertical-align: inherit;">sass（3.3+）和chrome（31+）的最新版本为此使用了源映射：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您拥有Sass 3.3.x</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>--sourcemap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">编译您的Sass </font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome / ium DevTools中打开设置，然后单击常规。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用“启用CSS源地图”。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请访问Chrome开发者工具博客：</font><a href="https://developers.google.com/chrome-developer-tools/docs/css-preprocessors" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://developers.google.com/chrome-developer-tools/docs/css-preprocessors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developers.google.com/chrome-developer-tools/docs/css-preprocessors</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版本：</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 1.首先，应在</font></font><code>--debug-info</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开状态下</font><font style="vertical-align: inherit;">编译Sass </font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 2.在Chrome / ium中，转到about：flags。3 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 .启用Developer Tools实验</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 。4.在检查器（F12）中，打开“设置”，然后转到“ Experiments”标签，然后选中“ Support for SASS”。  </font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
