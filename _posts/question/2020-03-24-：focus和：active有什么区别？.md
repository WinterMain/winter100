---
layout: question
title:  ：focus和：active有什么区别？
date:   2020-03-24T02:30:47.000Z
description:  focus和 active伪类之间有什么区别？...
img: 
author: 阳光Mandy
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪类</font><font style="vertical-align: inherit;">之间有什么区别</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“焦点”将为键盘用户提供与鼠标用户悬停鼠标时相同的效果。</font><font style="vertical-align: inherit;">为了在Internet Explorer中获得相同的效果，需要“活动”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现实情况是，这些状态无法像所有用户那样正常工作。</font><font style="vertical-align: inherit;">不使用所有三个选择器会为许多无法使用鼠标的纯键盘用户带来可访问性问题。</font><font style="vertical-align: inherit;">我邀请您参加#nomouse挑战赛（nomouse dot org）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动是指当用户激活该点时（例如单击鼠标，如果我们使用逐个字段中的选项卡，则活动样式没有任何迹象。也许单击需要更多时间，请尝试按住该点），然后在该点已激活。</font><font style="vertical-align: inherit;">尝试这个 ：</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
  input { font-weight: normal; color: black; }<font></font>
  input:focus { color: green; outline: 1px solid green; }<font></font>
  input:active { color: red; outline: 1px solid red; }<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;input type="text"/&gt;<font></font>
&lt;input type="text"/&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是两个不同的状态。</font></font></p>

<ul>
<li><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示当前选择该元素以接收输入的状态，并且 </font></font></li>
<li><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示当元素当前被用户激活时的状态。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设我们有一个</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会有开始与任何国家。</font><font style="vertical-align: inherit;">它只是存在。</font><font style="vertical-align: inherit;">如果我们</font></font><kbd>Tab</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过去给赋予“焦点” </font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它现在进入其</font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态。</font><font style="vertical-align: inherit;">如果然后单击（或按</font></font><kbd>space</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则使按钮进入其（</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于这一点，当你点击一个元素，你给它重点，这也培养了幻觉，</font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相同的。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们不一样。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击时，按钮处于</font></font><code>:focus:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个例子：
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;style type="text/css"&gt;<font></font>
  button { font-weight: normal; color: black; }<font></font>
  button:focus { color: red; }<font></font>
  button:active { font-weight: bold; }<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;button&gt;<font></font>
  When clicked, my text turns red AND bold!&lt;br /&gt;<font></font>
  But not when focused, where my text just turns red<font></font>
&lt;/button&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font><a href="http://jsfiddle.net/NCwvj/" rel="noreferrer" title="jsfiddle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有四种情况。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，活动和焦点均处于关闭状态。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您按</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tab</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键浏览</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可聚焦元素时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它们将进入</font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（未激活）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当你</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非聚焦元素</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它进入</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（无焦点）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当你</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">聚焦元素</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入</font></font><code>:active:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（活动，同时集中）。</font></font></li>
</ol>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></em></p>

<pre><code>&lt;div&gt;<font></font>
  I cannot be focused.<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div tabindex="0"&gt;<font></font>
  I am focusable.<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<hr>

<pre><code>div:focus {<font></font>
  background: green;<font></font>
}<font></font>
<font></font>
div:active {<font></font>
  color: orange;<font></font>
}<font></font>
<font></font>
div:focus:active {<font></font>
  font-weight: bold;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当页面加载时都是案例1。当您按下Tab键时，您将聚焦第二个div并看到案例2。当您单击第一个div时，您会看到案例3。单击第二个div时，您就会看到案例4。 。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素是否可聚焦是</font></font><a href="https://stackoverflow.com/a/1600194"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">大多数不是默认设置。</font><font style="vertical-align: inherit;">但是，它是安全的假设</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在默认情况下可获得焦点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTony</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre class="lang-none prettyprint-override"><code>:active       Adds a style to an element that is activated<font></font>
:focus        Adds a style to an element that has keyboard input focus<font></font>
:hover        Adds a style to an element when you mouse over it<font></font>
:lang         Adds a style to an element with a specific lang attribute<font></font>
:link         Adds a style to an unvisited link<font></font>
:visited      Adds a style to a visited link<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="http://www.w3schools.com/CSS/css_pseudo_classes.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS伪类</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">焦点只能通过键盘输入来指定，但是一个元素可以通过鼠标或键盘来激活。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在链接上使用：focus，则样式规则仅在按下键盘上的botton时适用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：focus是当元素能够接受输入时-输入框中的光标或已制表到的链接。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：active是用户激活元素的时间-用户按下鼠标按钮然后释放它之间的时间。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
