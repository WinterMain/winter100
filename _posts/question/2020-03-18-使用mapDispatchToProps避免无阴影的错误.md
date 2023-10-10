---
layout: question
title:  使用mapDispatchToProps避免无阴影的错误
date:   2020-03-18T09:06:16.000Z
description: 我有以下组件会no-shadow在上触发ESlint错误FilterButton props。import { setFilter } from '....
img: 
author: 古一宝儿
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下组件会</font></font><code>no-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上</font><font style="vertical-align: inherit;">触发</font><font style="vertical-align: inherit;">ESlint错误</font></font><code>FilterButton</code> <code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>import { setFilter } from '../actions/filter';<font></font>
<font></font>
<font></font>
function FilterButton({ setFilter }) {<font></font>
  return (<font></font>
    &lt;button onClick={setFilter}&gt;Click&lt;/button&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
export default connect(null, { setFilter })(FilterButton);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在保持简洁语法</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和ESlint规则的</font><font style="vertical-align: inherit;">同时避免警告</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以添加注释以禁止显示警告，但是对每个组件执行此操作似乎都是多余且乏味的。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
