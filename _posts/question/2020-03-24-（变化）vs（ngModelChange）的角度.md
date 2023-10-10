---
layout: question
title:  （变化）vs（ngModelChange）的角度
date:   2020-03-24T07:12:28.000Z
description: Angular 1不接受onchange()事件，它仅接受ng-change()事件。另一方面，Angular 2接受(change)和(ngMode...
img: 
author: 斯丁
category: question
answer: 3
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 1不接受</font></font><code>onchange()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件，它仅接受</font></font><code>ng-change()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，Angular 2接受</font></font><code>(change)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>(ngModelChange)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件，两者似乎都在做相同的事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么不同？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个最适合表现？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngModelChange</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;input type="text" pInputText class="ui-widget ui-text"<font></font>
    (ngModelChange)="clearFilter()" placeholder="Find"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变化</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;input type="text" pInputText class="ui-widget ui-text" <font></font>
    (change)="clearFilter()" placeholder="Find"/&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3424篇《（变化）vs（ngModelChange）的角度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 7中，</font></font><code>(ngModelChange)="eventHandler()"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意志将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到</font></font><code>[(ngModel)]="value"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值更改</font><strong><font style="vertical-align: inherit;">之前</font></strong><font style="vertical-align: inherit;">触发</font><font style="vertical-align: inherit;">，而</font><font style="vertical-align: inherit;">意志将</font><strong><font style="vertical-align: inherit;">在</font></strong><font style="vertical-align: inherit;">绑定到</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">值</font><strong><font style="vertical-align: inherit;">之后</font></strong></font><code>(change)="eventHandler()"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发</font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>[(ngModel)]="value"</code><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-</font></font></strong> <code>(change)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到HTML onchange事件。</font><font style="vertical-align: inherit;">有关HTML onchange的文档说明如下：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户更改</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的选定选项时执行JavaScript</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://www.w3schools.com/jsref/event_onchange.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.w3schools.com/jsref/event_onchange.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/jsref/event_onchange.asp</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，</font></font><code>(ngModelChange)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到模型变量绑定到您的输入。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，我的解释是：</font></font></strong></p>

<ul>
<li><code>(change)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改输入</font><font style="vertical-align: inherit;">时触发</font></font></li>
<li><code>(ngModelChange)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在模型更改时触发，无论它是否连续执行用户操作</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我在</font></font><a href="https://stackoverflow.com/questions/41544086/angular-2-ngmodelchange-old-value/57195920#57195920"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主题中</font><font style="vertical-align: inherit;">找到并写的那样</font><font style="vertical-align: inherit;">-这适用于angular &lt;7（不确定在7+中的效果如何）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了未来</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们需要注意，这</font></font><code>[(ngModel)]="hero.name"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是捷径，可以简化为：</font></font><code>[ngModel]="hero.name" (ngModelChange)="hero.name = $event"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果我们将代码去糖化，最终结果将是： </font></font></p>

<p><code>&lt;select (ngModelChange)="onModelChange()" [ngModel]="hero.name" (ngModelChange)="hero.name = $event"&gt;</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><code>&lt;[ngModel]="hero.name" (ngModelChange)="hero.name = $event" select (ngModelChange)="onModelChange()"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果检查上面的代码，您会注意到我们以2个</font></font><code>ngModelChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">结束</font><font style="vertical-align: inherit;">，这些事件需要按一定顺序执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果放置</font></font><code>ngModelChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在之前</font></font><code>ngModel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则将</font></font><code>$event</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为新值，但是模型对象仍保留先前的值。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果将其放置在之后</font></font><code>ngModel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则该模型将已经具有新值。</font></font></p>

<p><a href="https://github.com/angular/angular/issues/11234" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
