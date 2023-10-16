---
layout: question
title:  如何在AngularJS中有条件地应用CSS样式？
date:   2020-03-23T04:17:17.000Z
description: Q1。假设我想在按下主“删除”按钮之前更改用户标记为要删除的每个“项目”的外观。（这种立即的视觉反馈应该消除了众所周知的“您确定吗？”对话框的需要。）用户...
img: 
author: Itachi达蒙Green
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Q1。</font><font style="vertical-align: inherit;">假设我想在按下主“删除”按钮之前更改用户标记为要删除的每个“项目”的外观。</font><font style="vertical-align: inherit;">（这种立即的视觉反馈应该消除了众所周知的“您确定吗？”对话框的需要。）用户将选中复选框以指示应删除哪些项目。</font><font style="vertical-align: inherit;">如果未选中此复选框，则该项目应恢复为正常外观。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用或删除CSS样式的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Q2。</font><font style="vertical-align: inherit;">假设我想允许每个用户个性化展示我的网站。</font><font style="vertical-align: inherit;">例如，从一组固定的字体大小中进行选择，允许用户定义前景色和背景色等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用用户选择/输入的CSS样式的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2800篇《如何在AngularJS中有条件地应用CSS样式？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的一件事是-如果CSS样式中有破折号-您必须将其删除。</font><font style="vertical-align: inherit;">因此，如果要设置</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，正确的方法是：</font></font></p>

<pre><code>ng-style="{backgroundColor:myColor}" 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（将来）有条件应用样式的另一种方法是有条件地创建范围样式</font></font></p>

<pre><code>&lt;style scoped type="text/css" ng-if="..."&gt;<font></font>
<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如今，只有FireFox支持范围样式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我建议您使用返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">false</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的函数检查控制器中的条件</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div class="week-wrap" ng-class="{today: getTodayForHighLight(todayDate, day.date)}"&gt;{{day.date}}&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在控制器中检查情况 </font></font></p>

<pre><code>$scope.getTodayForHighLight = function(today, date){<font></font>
    return (today == date);<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
