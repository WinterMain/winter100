---
layout: question
title:  反应propTypes：objectOf与形状？
date:   2020-03-17T07:01:13.000Z
description: PropTypes.objectOf和之间有什么区别PropTypes.shape？在文档中：// An object with property v...
img: 
author: 凯卡卡西凯
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>PropTypes.objectOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>PropTypes.shape</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">在</font></font><a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// An object with property values of a certain type<font></font>
optionalObjectOf: PropTypes.objectOf(PropTypes.number)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>// An object taking on a particular shape<font></font>
optionalObjectWithShape: PropTypes.shape({<font></font>
  color: PropTypes.string,<font></font>
  fontSize: PropTypes.number<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>objectOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时候应该使用</font></font><code>shape</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？什么</font><font style="vertical-align: inherit;">时候应该使用</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1874篇《反应propTypes：objectOf与形状？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
