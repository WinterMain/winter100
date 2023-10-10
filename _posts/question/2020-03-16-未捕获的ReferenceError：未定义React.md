---
layout: question
title:  未捕获的ReferenceError：未定义React
date:   2020-03-16T02:02:37.000Z
description: 我正在尝试使用本教程使ReactJS与rails一起使用。我收到此错误：  Uncaught ReferenceError  React is n...
img: 
author: 宝儿猪猪西门
category: question
answer: 0
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><a href="http://rny.io/rails/react/2014/07/31/reactjs-and-rails.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程</font><font style="vertical-align: inherit;">使ReactJS与rails一起使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我收到此错误：  </font></font></p>

<hr>

<p><code>Uncaught ReferenceError: React is not defined</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我可以在浏览器控制台中访问React对象，</font><font style="vertical-align: inherit;">
我还</font><font style="vertical-align: inherit;">按</font><a href="https://stackoverflow.com/questions/29851588/how-can-i-use-this-react-library-with-react-rails?answertab=votes#tab-top"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">所述</font><font style="vertical-align: inherit;">添加了</font><a href="https://github.com/ssorallen/turbo-react/blob/master/public/dist/turbo-react.min.js" rel="noreferrer"><font style="vertical-align: inherit;">public / dist / turbo-react.min.js</font></a><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">并且</font><font style="vertical-align: inherit;">如</font><a href="https://stackoverflow.com/questions/24974478/react-is-not-defined?answertab=votes#tab-top"><font style="vertical-align: inherit;">本回答中</font></a><font style="vertical-align: inherit;">所述</font><a href="https://stackoverflow.com/questions/24974478/react-is-not-defined?answertab=votes#tab-top"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">还在application.js中</font><font style="vertical-align: inherit;">添加了</font><font style="vertical-align: inherit;">一行</font><a href="https://stackoverflow.com/questions/24974478/react-is-not-defined?answertab=votes#tab-top"><font style="vertical-align: inherit;">，但是</font></a><font style="vertical-align: inherit;">没有运气。</font><font style="vertical-align: inherit;">此外，</font><font style="vertical-align: inherit;">给出错误：</font></font><a href="https://www.samyoc.com//uploads/users/17159/images/thumbnails/1584324029792.png" data-src="https://www.samyoc.com//uploads/users/17159/images/1584324029792.png" rel="noreferrer"><img src="https://i.stack.imgur.com/M0Qaj.png" alt="在此处输入图片说明"></a><br><font style="vertical-align: inherit;"></font><a href="https://github.com/ssorallen/turbo-react/blob/master/public/dist/turbo-react.min.js" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/questions/29851588/how-can-i-use-this-react-library-with-react-rails?answertab=votes#tab-top"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>//= require components</code><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/questions/24974478/react-is-not-defined?answertab=votes#tab-top"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><br>
<code>var React = require('react')</code><font style="vertical-align: inherit;"></font><br>
<code>Uncaught ReferenceError: require is not defined</code>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能建议我解决该问题？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[EDIT 1]</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
供参考的源代码：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是我的</font></font><code>comments.js.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：  </font></font></p>

<pre><code>var Comment = React.createClass({<font></font>
  render: function () {<font></font>
    return (<font></font>
      &lt;div className="comment"&gt;<font></font>
        &lt;h2 className="commentAuthor"&gt;<font></font>
          {this.props.author}<font></font>
        &lt;/h2&gt;<font></font>
          {this.props.comment}<font></font>
      &lt;/div&gt;<font></font>
      );<font></font>
  }<font></font>
});<font></font>
<font></font>
var ready = function () {<font></font>
  React.renderComponent(<font></font>
    &lt;Comment author="Richard" comment="This is a comment "/&gt;,<font></font>
    document.getElementById('comments')<font></font>
  );<font></font>
};<font></font>
<font></font>
$(document).ready(ready);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>index.html.erb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：  </font></font></p>

<pre><code>&lt;div id="comments"&gt;&lt;/div&gt;
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
