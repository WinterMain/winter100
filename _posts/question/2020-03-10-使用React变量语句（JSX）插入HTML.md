---
layout: question
title:  使用React变量语句（JSX）插入HTML
date:   2020-03-10T14:38:31.000Z
description: 我正在用React构建一些东西，我需要在JSX中插入带有React变量的HTML。有没有办法像这样一个变量：var thisIsMyCopy = '<...
img: 
author: 十三L
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用React构建一些东西，我需要在JSX中插入带有React变量的HTML。</font><font style="vertical-align: inherit;">有没有办法像这样一个变量：</font></font></p>

<pre><code>var thisIsMyCopy = '&lt;p&gt;copy copy copy &lt;strong&gt;strong copy&lt;/strong&gt;&lt;/p&gt;';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样将其插入反应中并起作用？</font></font></p>

<pre><code>render: function() {<font></font>
    return (<font></font>
        &lt;div className="content"&gt;{thisIsMyCopy}&lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并按预期插入HTML吗？</font><font style="vertical-align: inherit;">我还没有看到或听到任何有关可以内联执行此操作的react函数的信息，也没有听说过任何可以使之起作用的解析方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第528篇《使用React变量语句（JSX）插入HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Near米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使它成为字符串。</font><font style="vertical-align: inherit;">使用不带反逗号的它将正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果还有其他人落在这里。</font><font style="vertical-align: inherit;">使用ES6，您可以像这样创建html变量：</font></font></p>

<pre><code>render(){<font></font>
    var thisIsMyCopy = (<font></font>
        &lt;p&gt;copy copy copy &lt;strong&gt;strong copy&lt;/strong&gt;&lt;/p&gt;<font></font>
    );<font></font>
    return(<font></font>
        &lt;div&gt;<font></font>
            {thisIsMyCopy}<font></font>
        &lt;/div&gt;<font></font>
    )<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://stackoverflow.com/questions/19266197/reactjs-convert-to-html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dragonallySetInnerHTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font></p>

<pre><code>render: function() {<font></font>
    return (<font></font>
        &lt;div className="content" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}&gt;&lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
