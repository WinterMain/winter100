---
layout: question
title:  Bootstrap中“ col-md-4”，“ col-xs-1”，“ col-lg-2”中数字的含义
date:   2020-03-18T11:47:02.000Z
description: 我对新的Bootstrap中的网格系统感到困惑，尤其是这些类：col-lg-\*col-md-\*col-xs-\*（其中\*代表一些数字）。任...
img: 
author: Near神奇
category: question
answer: 4
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对新的Bootstrap中的网格系统感到困惑，尤其是这些类：</font></font></p>

<pre><code>col-lg-*<font></font>
col-md-*<font></font>
col-xs-*<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其中*代表一些数字）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都可以解释以下内容：</font></font></p>

<ol>
<li><strong><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">这个数字</font></em><strong><em><font style="vertical-align: inherit;">如何</font></em></strong></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对齐网格？</font></font></em></li>
<li><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这些数字？</font></font></em></li>
<li><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们实际上代表什么呢？</font></font></em></li>
</ol></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干得好</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">col-lg-2：如果屏幕很大（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lg</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则此组件将占用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   元素的</font><font style="vertical-align: inherit;">空间，</font><font style="vertical-align: inherit;">因为整行可容纳12个元​​素（因此，您将在大屏幕上看到此组件仅占行的16％的空间）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">col-lg-6：如果屏幕很大（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lg</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则此组件将占用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   元素的</font><font style="vertical-align: inherit;">空间，</font><font style="vertical-align: inherit;">因为整行可以容纳12个元​​素-应用后，您将看到该组件占用了该行中一半的可用空间。</font></font></p>

<p>Above rule is only applied when the screen is large. when the screen is small this rule is discarded and only one component per row is shown.</p>

<p>Below image shows various screen size widths :</p>

<p><a href="https://i.stack.imgur.com/QRM0O.png" rel="noreferrer"><img src="https://i.stack.imgur.com/QRM0O.png" alt="屏幕尺寸定义"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://getbootstrap.com/docs/3.3/css/#grid-options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小网格（≥768px）= </font></font><code>.col-sm-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中格（≥992px）= </font></font><code>.col-md-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大网格（≥1200px）= </font></font><code>.col-lg-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><a href="https://stackoverflow.com/questions/19865158/what-is-the-difference-among-col-lg-col-md-and-col-sm-in-twitter-bootstra"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多...</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要点是：</font></font></p>

<p><code>col-lg-*</code> <code>col-md-*</code> <code>col-xs-*</code> <code>col-sm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 定义在这些不同的屏幕尺寸中将有多少列。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：如果要在桌面屏幕和电话屏幕中有两列，请在这两列中放置两个</font></font><code>col-md-6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和两个</font></font><code>col-xs-6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在桌面屏幕上显示两列，而在电话屏幕上仅显示一列（即，两行相互堆叠），则将</font></font><code>two col-md-6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两</font></font><code>col-xs-12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列</font><font style="vertical-align: inherit;">放进去</font><font style="vertical-align: inherit;">，因为总和为24，因此它们将自动堆叠在每一行的顶部其他，或者只保留</font></font><code>xs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>The Bootstrap grid system has four classes: <br>
  <strong>xs (for phones)  <br>
  sm (for tablets)  <br>
  md (for desktops)  <br>
  lg (for larger desktops)</strong> </p>
  
  <p>The classes above can be combined to create more dynamic and flexible layouts.</p>
  
  <p><strong>Tip:</strong> Each class scales up, so if you wish to set the same widths for
  xs and sm, you only need to specify xs.</p>
</blockquote>

<p><strong>OK,</strong> the answer is easy, but read on:</p>

<p><strong>col-lg-</strong> stands for column large <code>≥ 1200px</code><br>
<strong>col-md-</strong> stands for column medium <code>≥ 992px</code><br>
<strong>col-xs-</strong> stands for column extra small <code>≥ 768px</code><br></p>

<p>The pixel numbers are the breakpoints, so for example <code>col-xs</code> is targeting the element when the window is smaller than <strong>768px</strong>(likely mobile devices)...</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还创建了下面的图片显示了如何网格系统的工作原理，在这个例子我使用他们的3个，喜欢</font></font><code>col-lg-6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向你展示电网系统工作的页面，看看如何如何</font></font><code>lg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>md</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>xs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应窗口大小：</font></font></p>

<p><a href="https://i.stack.imgur.com/S1RYa.png" rel="noreferrer"><img src="https://i.stack.imgur.com/S1RYa.png" alt="引导网格系统，col-*-6"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
