---
layout: question
title:  Angular：带\* ngClass的条件类
date:   2020-03-12T08:42:59.000Z
description: 我的Angular代码有什么问题？我正进入（状态：Cannot read property 'remove' of undefined at Brow...
img: 
author: 西门泡芙Jim
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Angular代码有什么问题？</font><font style="vertical-align: inherit;">我正进入（状态：</font></font></p>

<pre><code>Cannot read property 'remove' of undefined at BrowserDomAdapter.removeClass ...
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;ol class="breadcrumb"&gt;<font></font>
    &lt;li *ngClass="{active: step==='step1'}" (click)="step='step1; '"&gt;Step1&lt;/li&gt;<font></font>
    &lt;li *ngClass="{active: step==='step2'}"  (click)="step='step2'"&gt;Step2&lt;/li&gt;<font></font>
    &lt;li *ngClass="{active: step==='step3'}" (click)="step='step3'"&gt;Step3&lt;/li&gt;<font></font>
&lt;/ol&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1156篇《Angular：带* ngClass的条件类》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们说，YourCondition是您的条件或布尔值属性，然后执行以下操作</font></font></p>

<pre><code>[class.yourClass]="YourCondition"
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
