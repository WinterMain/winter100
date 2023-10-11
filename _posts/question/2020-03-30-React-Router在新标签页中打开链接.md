---
layout: question
title:  React-Router在新标签页中打开链接
date:   2020-03-30T09:50:52.000Z
description: 有没有办法让React Router在新标签页中打开链接？我尝试了这个，但是没有用。<Link to="chart" target="_blank" ...
img: 
author: 番长樱梅
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法让</font></font><a href="https://github.com/rackt/react-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在新标签页中打开链接？</font><font style="vertical-align: inherit;">我尝试了这个，但是没有用。</font></font></p>

<pre><code>&lt;Link to="chart" target="_blank" query={{test: this.props.test}} &gt;Test&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过向</font></font><code>onClick="foo"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Link </font><font style="vertical-align: inherit;">添加类似于</font><font style="vertical-align: inherit;">我上面的内容来使其模糊，但会出现控制台错误。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3856篇《React-Router在新标签页中打开链接》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋古一Eva</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是使用“ to”属性：</font></font></p>

<pre><code>&lt;Link to="chart" target="_blank" to="http://link2external.page.com" &gt;Test&lt;/Link&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说很好</font></font></p>

<pre><code>&lt;Link to={`link`} target="_blank"&gt;View&lt;/Link&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于外部链接，只需使用achach代替Link： </font></font></p>

<pre><code>&lt;a rel="noopener noreferrer" href="http://url.com" target="_blank"&gt;Link Here&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从react_router 1.0开始，道具将传递到锚标记上。</font><font style="vertical-align: inherit;">您可以直接使用</font></font><code>target="_blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这里讨论：</font><a href="https://github.com/ReactTraining/react-router/issues/2188" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/issues/2188" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/issues/2188</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用“ {}”作为目标，然后jsx不会哭</font></font></p>

<blockquote>
  <p><code>&lt;Link target={"_blank"} to="your-link"&gt;Your Link&lt;/Link&gt;</code></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在当前版本的React Router中，您可以使用：</font></font></p>

<pre><code>&lt;Link to="route" target="_blank" onClick={(event) =&gt; {event.preventDefault(); window.open(this.makeHref("route"));}} /&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
