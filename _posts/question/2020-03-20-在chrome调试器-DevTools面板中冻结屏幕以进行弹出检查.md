---
layout: question
title:  在chrome调试器/ DevTools面板中冻结屏幕以进行弹出检查？
date:   2020-03-20T05:13:28.000Z
description: 我正在使用Chrome检查器尝试分析z-indexTwitter Bootstrap弹出窗口的，发现它非常令人沮丧...有没有办法冻结弹出窗口（如图所...
img: 
author: ASamJim
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Chrome检查器尝试分析</font></font><code>z-index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap弹出窗口的，发现它非常令人沮丧...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法冻结弹出窗口（如图所示），以便我可以评估和修改关联的CSS？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在关联的链接上放置固定的“悬停”不会导致弹出窗口的出现。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2469篇《在chrome调试器/ DevTools面板中冻结屏幕以进行弹出检查？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里尝试了其他解决方案，它们可以工作，但是我很懒，所以这是我的解决方案</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将鼠标悬停在元素上以触发扩展状态</font></font></li>
<li><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>c</kbd></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次将鼠标悬停在元素上</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键点击</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到调试器</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击它，因为弹出了上下文菜单，因此不再注册鼠标事件，因此您可以安全地将鼠标移开</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的简单方法：</font></font></p>

<pre><code>setTimeout(function(){ debugger; }, 3000);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这在Chrome中非常有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击要检查的元素，然后单击“强制元素状态”&gt;“悬停”。</font><font style="vertical-align: inherit;">屏幕截图已附上。</font></font></p>

<p><img src="https://i.stack.imgur.com/1xqc4.png" alt="力元素状态"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击“元素”选项卡内的任何位置</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择 </font></font><kbd>Breakon... &gt;</kbd><kbd> subtree modifications</kbd></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发您要查看的弹出窗口，如果看到DOM中的更改，它将冻结</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然看不到弹出窗口，请</font><font style="vertical-align: inherit;">在Chrome的顶部顶部中心</font><font style="vertical-align: inherit;">单击</font></font><code>Step over the next function(F10)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁边</font></font><code>Resume(F8)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">按钮</font><font style="vertical-align: inherit;">，直到冻结要查看的弹出窗口。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯卡卡西凯</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
正如布拉德·帕克斯（Brad Parks）在他的评论中所写，仅使用一行JS代码，这是一个更好，更轻松的解决方案：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>setTimeout(function(){debugger;},5000);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后显示您的元素并等待它进入调试器</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案：</font></font></p>

<p>I just had the same problem, and I think I found an "universal" solution. <em>(assuming the site uses jQuery)</em> <br>
Hope it helps someone!</p>

<ol>
<li>Go to elements tab in inspector</li>
<li>Right click <code>&lt;body&gt;</code> and click "<em>Edit as HTML</em>"</li>
<li>Add the following element after <code>&lt;body&gt;</code> then press Ctrl+Enter: <br><code>&lt;div id="debugFreeze" data-rand="0"&gt;&lt;/div&gt;</code></li>
<li>Right click this new element, and select <em>"Break on..." -&gt; "Attributes modifications"</em></li>
<li>Now go to <em>Console</em> view and run the following command: <br><code>setTimeout(function(){$("#debugFreeze").attr("data-rand",Math.random())},5000);</code></li>
<li>Now go back to the browser window and you have 5 seconds to find your element and click/hover/focus/etc it, before the breakpoint will be hit and the browser will "freeze".</li>
<li>Now you can inspect your clicked/hovered/focused/etc element in peace.</li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以根据需要修改javascript和时间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomLEY</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了能够检查任何元素，请执行以下操作。</font><font style="vertical-align: inherit;">即使很难复制悬停状态，这也应该起作用：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中运行以下javascript。</font><font style="vertical-align: inherit;">这将在5秒钟内打入调试器。</font></font></p>

<p><code>setTimeout(function(){debugger;}, 5000)</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展示您的元素（通过悬停或滚动），然后等到Chrome闯入调试器。 </font></font></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，单击</font></font><code>Elements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome Inspector中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标签，然后可以在其中查找元素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以单击</font></font><code>Find Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图标（看起来像放大镜），然后Chrome将允许您通过右键单击该页面来检查并找到页面上的元素，然后选择</font></font><code>Inspect Element</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此方法</font><font style="vertical-align: inherit;">与此页面上的</font><font style="vertical-align: inherit;">其他</font></font><a href="https://stackoverflow.com/a/23096743/26510"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出色答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">略有不同</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GoldenGG</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到它的工作。</font><font style="vertical-align: inherit;">这是我的程序：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览到所需页面</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发者控制台- </font></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows / Linux上或</font><font style="vertical-align: inherit;">在MacOS上</font></font><kbd>option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>J</kbd><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择</font></font><code>Sources</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome检查器中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标签</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Web浏览器窗口中，将鼠标悬停在所需元素上以启动弹出窗口</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命中</font></font><kbd>F8</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows / Linux操作系统（或者</font></font><kbd>fn</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>F8</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MacOS），而酥料饼被展示。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在实际页面上的任何位置单击，F8将不起作用。</font><font style="vertical-align: inherit;">您的最终点击必须位于检查器中的某处，例如“源”选项卡</font></font></em></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>Elements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查器中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">选项卡</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找您的弹出窗口（它将嵌套在触发元素的HTML中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">玩修改CSS很开心</font></font></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
