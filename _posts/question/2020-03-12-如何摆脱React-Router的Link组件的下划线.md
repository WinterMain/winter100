---
layout: question
title:  如何摆脱React Router的Link组件的下划线？
date:   2020-03-12T08:26:48.000Z
description: 我有以下内容： 如何摆脱蓝色下划线？代码如下：<Link to="first"><MenuItem style={{paddingLeft  ...
img: 
author: MandyL
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下内容： </font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/12447/images/thumbnails/1584001608520.png" data-src="https://www.samyoc.com//uploads/users/12447/images/1584001608520.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Od7Ho.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何摆脱蓝色下划线？</font><font style="vertical-align: inherit;">代码如下：</font></font></p>

<pre><code>&lt;Link to="first"&gt;&lt;MenuItem style={{paddingLeft: 13, textDecoration: 'none'}}&gt; Team 1 &lt;/MenuItem&gt;&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MenuItem组件来自</font></font><a href="http://www.material-ui.com/#/components/menu" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.material-ui.com/#/components/menu</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何见识或指导将不胜感激。</font><font style="vertical-align: inherit;">先感谢您。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1126篇《如何摆脱React Router的Link组件的下划线？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>style={{ backgroundImage: "none" }}
</code></pre>

<p>Only this worked for me</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>What worked for me is this:</p>

<pre><code>&lt;Link to="/" style={{boxShadow: "none"}}&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// CSS</font></font></p>

<pre><code>.navigation_bar &gt; ul &gt; li {<font></font>
      list-style: none;<font></font>
      display: inline;<font></font>
      margin: 2%;<font></font>
    }<font></font>
<font></font>
    .link {<font></font>
      text-decoration: none;<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// JSX</font></font></p>

<pre><code> &lt;div className="navigation_bar"&gt;<font></font>
            &lt;ul key="nav"&gt;<font></font>
              &lt;li&gt;<font></font>
                &lt;Link className="link" to="/"&gt;<font></font>
                  Home<font></font>
                &lt;/Link&gt;<font></font>
              &lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
          &lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的App.css（或对应版本）中包含核方法</font></font></p>

<pre><code>a{<font></font>
  text-decoration: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以防止对所有</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">加下划线，</font><font style="vertical-align: inherit;">这是此问题的根本原因</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
