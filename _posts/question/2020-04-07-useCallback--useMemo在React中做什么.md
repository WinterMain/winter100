---
layout: question
title:  useCallback / useMemo在React中做什么？
date:   2020-04-07T03:12:37.000Z
description: 如docs中所述，useCallback返回一个已记忆的回调。传递内联回调和输入数组。useCallback将返回回调的记忆版本，该回调版本仅在输入之...
img: 
author: 乐米亚
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如</font></font><a href="https://reactjs.org/docs/hooks-reference.html#usecallback" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font><font style="vertical-align: inherit;">，useCallback返回一个已记忆的回调。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递内联回调和输入数组。</font><font style="vertical-align: inherit;">useCallback将返回回调的记忆版本，该回调版本仅在输入之一发生更改时才会更改。</font><font style="vertical-align: inherit;">当将回调传递给依赖于引用相等性的优化子组件以防止不必要的渲染（例如，shouldComponentUpdate）时，此方法很有用。</font></font></p>

<pre><code>const memoizedCallback = useCallback(<font></font>
  () =&gt; {<font></font>
    doSomething(a, b);<font></font>
  },<font></font>
  [a, b],<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它是如何工作的，在React中最好用在哪里？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：我认为带有</font></font><a href="https://codesandbox.io/s/q87kznyp69" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codepen示例的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可视化</font><font style="vertical-align: inherit;">将帮助每个人更好地理解它。</font></font><a href="https://usehooks.com/useMemo/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在docs中解释</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4039篇《useCallback / useMemo在React中做什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
