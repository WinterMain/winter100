---
layout: question
title:  防止在单击外部或按Escape键时Bootstrap Modal消失？\[重复\]
date:   2020-03-20T02:17:23.000Z
description:                                                                          ...
img: 
author: 路易老丝
category: question
answer: 7
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/9894339/disallow-twitter-bootstrap-modal-window-from-closing" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止关闭Twitter Bootstrap模态窗口</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （18个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2019-04-27 20：30：04Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">11个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将Twitter Bootstrap模态用作向导窗口，并希望防止用户在模态之外单击或按Escape键时将其关闭。</font><font style="vertical-align: inherit;">相反，我希望在用户按下“完成”按钮时将其关闭。</font><font style="vertical-align: inherit;">我如何实现这种情况？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2439篇《防止在单击外部或按Escape键时Bootstrap Modal消失？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaA</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;div class="modal show"&gt;<font></font>
  &lt;div class="modal-dialog"&gt;<font></font>
    &lt;div class="modal-content"&gt;<font></font>
      &lt;div class="modal-header"&gt;     <font></font>
<font></font>
    &lt;h4 class="modal-title"&gt;Modal title&lt;/h4&gt;<font></font>
     &lt;/div&gt;<font></font>
     &lt;div class="modal-body"&gt;<font></font>
      &lt;p&gt;One fine body&amp;hellip;&lt;/p&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;/div&gt;&lt;!-- /.modal-content --&gt;<font></font>
&lt;/div&gt;&lt;!-- /.modal-dialog --&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为此Codepen可以帮助您
 </font></font><a href="http://codepen.io/shubhangisingh/pen/RKbeqV" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防止模式关闭CSS和自举</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Your code is working when i click out side the modal, but if i use html <strong><code>input</code></strong> field inside modal-body then focus your cursor on that input then press <strong><code>esc</code></strong> key the modal has closed.
Click <a href="http://jsfiddle.net/4EUS6/185/" rel="nofollow">here</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小胖Jim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;button class="btn btn-primary btn-lg" data-backdrop="static" data-keyboard="false" data-target="#myModal" data-toggle="modal"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom蛋蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用这些属性，并且有效， </font></font><code>data-keyboard="false" data-backdrop="static"</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font><font style="vertical-align: inherit;">向该模式</font><font style="vertical-align: inherit;">添加</font></font><code>data-backdrop="static"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>data-keyboard="false"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性即可。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>&lt;a data-controls-modal="your_div_id" data-backdrop="static" data-keyboard="false" href="#"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以在引导程序模型中使用Direct。 </font></font></p>

<pre><code>&lt;div class="modal fade" id="myModal" data-keyboard="false" data-backdrop="static"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋梅</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以工作，</font></font><code>data-backdrop="static"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击以退出并</font></font><code>data-keyboard="false"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入div模式中的Esc：</font></font></p>

<pre><code>&lt;div id="idModal" class="modal hide" data-backdrop="static" data-keyboard="false"&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
