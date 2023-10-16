---
layout: question
title:  如何使用类别道具在Material UI中添加多个类别
date:   2020-03-19T03:45:39.000Z
description: 使用css-in-js方法将类添加到React组件，如何添加多个组件？这是class变量：const styles = theme => ({ ...
img: 
author: 路易神奇猪猪
category: question
answer: 2
tags: CSS React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用css-in-js方法将类添加到React组件，如何添加多个组件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是class变量：</font></font></p>

<pre><code>const styles = theme =&gt; ({<font></font>
 container: {<font></font>
  display: 'flex',<font></font>
  flexWrap: 'wrap'<font></font>
},<font></font>
 spacious: {<font></font>
  padding: 10<font></font>
},<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的用法：</font></font></p>

<pre><code>    return (<font></font>
     &lt;div className={ this.props.classes.container }&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的作品，但有没有办法添加两个类，而无需使用</font></font><code>classNames</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm包？</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>     &lt;div className={ this.props.classes.container + this.props.classes.spacious}&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2322篇《如何使用类别道具在Material UI中添加多个类别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，您可以使用字符串插值 </font></font></p>

<pre><code>className={`${this.props.classes.container}  ${this.props.classes.spacious}`}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试使用</font></font><code>classnames</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库 
 </font></font><a href="https://www.npmjs.com/package/classnames" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/classnames</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用字符串插值：</font></font></p>

<pre><code>&lt;div className={`${this.props.classes.container} ${this.props.classes.spacious}`}&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
