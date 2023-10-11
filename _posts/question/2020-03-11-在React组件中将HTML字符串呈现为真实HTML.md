---
layout: question
title:  在React组件中将HTML字符串呈现为真实HTML
date:   2020-03-11T12:46:46.000Z
description: 这是我尝试过的方法以及解决方法。这有效：<div dangerouslySetInnerHTML={{ __html  "<h1>Hi there...
img: 
author: 卡卡西凯
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我尝试过的方法以及解决方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效：</font></font></p>

<pre><code>&lt;div dangerouslySetInnerHTML={{ __html: "&lt;h1&gt;Hi there!&lt;/h1&gt;" }} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是：</font></font></p>

<pre><code>&lt;div dangerouslySetInnerHTML={{ __html: this.props.match.description }} /&gt;
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">description属性只是HTML内容的普通字符串。</font><font style="vertical-align: inherit;">但是由于某种原因，它呈现为字符串，而不是HTML。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/9993/images/thumbnails/1583930806346.png" data-src="https://www.samyoc.com//uploads/users/9993/images/1583930806346.png" rel="noreferrer"><img src="https://i.stack.imgur.com/cI25q.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第823篇《在React组件中将HTML字符串呈现为真实HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">gia</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以控制{this.props.match.description}并且使用的是JSX。</font><font style="vertical-align: inherit;">我建议不要使用“ dangerouslySetInnerHTML”。</font></font></p>

<pre><code>// In JSX, you can define a html object rather than a string to contain raw HTML<font></font>
let description = &lt;h1&gt;Hi there!&lt;/h1&gt;;<font></font>
<font></font>
// Here is how you print<font></font>
return (<font></font>
    {description}<font></font>
);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法</font></font><code>npm build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与之合作</font></font><code>react-html-parser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，就我而言，我能够成功使用</font></font><a href="https://reactjs.org/docs/fragments.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/fragments.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我要求显示一些html unicode字符，但不应将其直接嵌入JSX中。</font><font style="vertical-align: inherit;">在JSX中，必须从组件的状态中选择它。</font><font style="vertical-align: inherit;">组件代码段如下所示：</font></font></p>

<pre><code>constructor() <font></font>
{<font></font>
this.state = {<font></font>
      rankMap : {"5" : &lt;Fragment&gt;&amp;#9733; &amp;#9733; &amp;#9733; &amp;#9733; &amp;#9733;&lt;/Fragment&gt; , <font></font>
                 "4" : &lt;Fragment&gt;&amp;#9733; &amp;#9733; &amp;#9733; &amp;#9733; &amp;#9734;&lt;/Fragment&gt;, <font></font>
                 "3" : &lt;Fragment&gt;&amp;#9733; &amp;#9733; &amp;#9733; &amp;#9734; &amp;#9734;&lt;/Fragment&gt; , <font></font>
                 "2" : &lt;Fragment&gt;&amp;#9733; &amp;#9733; &amp;#9734; &amp;#9734; &amp;#9734;&lt;/Fragment&gt;, <font></font>
                 "1" : &lt;Fragment&gt;&amp;#9733; &amp;#9734; &amp;#9734; &amp;#9734; &amp;#9734;&lt;/Fragment&gt;}<font></font>
                };<font></font>
}<font></font>
<font></font>
render() <font></font>
{<font></font>
       return (&lt;div class="card-footer"&gt;<font></font>
                    &lt;small class="text-muted"&gt;{ this.state.rankMap["5"] }&lt;/small&gt;<font></font>
               &lt;/div&gt;);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿阿飞Tom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只使用React的危险的SetInnerHTML方法</font></font></p>

<p><code>&lt;div dangerouslySetInnerHTML={{ __html: htmlString }} /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以通过这种简单的方法实现更多功能：</font></font><a href="https://www.4codev.com/react/render-the-html-raw-in-react-app-idpx6182013449177354385.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React应用程序中呈现HTML原始文件</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
