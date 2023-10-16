---
layout: question
title:  我应该在道具中使用哪种TypeScript类型来引用match对象？
date:   2020-04-03T03:38:49.000Z
description: 在我的React容器/组件中，我可以使用哪种类型来引用matchReact Router DOM包含的部分？interface Props {  m...
img: 
author: 卡卡西
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的React容器/组件中，我可以使用哪种类型来引用</font></font><code>match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router DOM包含</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">部分？</font></font></p>

<pre><code>interface Props {<font></font>
  match: any // &lt;= What could I use here instead of any?<font></font>
}<font></font>
<font></font>
export class ProductContainer extends React.Component&lt;Props&gt; {<font></font>
  // ...<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3972篇《我应该在道具中使用哪种TypeScript类型来引用match对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
