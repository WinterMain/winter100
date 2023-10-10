---
layout: question
title:  在componentDidMount（）上设置状态
date:   2020-03-19T02:00:55.000Z
description: 我知道将状态设置为打开是一种反模式，componentDidMount应该将状态设置为打开，componentWillMount但是假设我想将li标记数量...
img: 
author: 泡芙古一神无
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道将状态设置为打开是一种反模式，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该将状态设置为打开，</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是假设我想将</font></font><code>li</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">数量的长度设置</font><font style="vertical-align: inherit;">为状态。</font><font style="vertical-align: inherit;">在那种情况下，我无法将状态设置为on，</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>li</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该阶段可能未安装标签。</font><font style="vertical-align: inherit;">那么，这里最好的选择是什么？</font><font style="vertical-align: inherit;">如果将状态设置为开启，会</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
