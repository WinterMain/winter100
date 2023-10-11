---
layout: question
title:  在React.js中更新组件onScroll的样式
date:   2020-03-12T02:57:34.000Z
description: 我已经在React中构建了一个组件，该组件应该在窗口滚动时更新其自身的样式以创建视差效果。组件render方法如下所示：  function() ...
img: 
author: Mandy番长
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在React中构建了一个组件，该组件应该在窗口滚动时更新其自身的样式以创建视差效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法如下所示：</font></font></p>

<pre><code>  function() {<font></font>
    let style = { transform: 'translateY(0px)' };<font></font>
<font></font>
    window.addEventListener('scroll', (event) =&gt; {<font></font>
      let scrollTop = event.srcElement.body.scrollTop,<font></font>
          itemTranslate = Math.min(0, scrollTop/3 - 60);<font></font>
<font></font>
      style.transform = 'translateY(' + itemTranslate + 'px)');<font></font>
    });<font></font>
<font></font>
    return (<font></font>
      &lt;div style={style}&gt;&lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是行不通的，因为React不知道组件已更改，因此该组件不会重新渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过</font></font><code>itemTranslate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件状态下</font><font style="vertical-align: inherit;">存储的值</font><font style="vertical-align: inherit;">，并</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在滚动回调中调用。</font><font style="vertical-align: inherit;">但是，这使滚动无法使用，因为这非常慢。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于如何做到这一点的任何建议？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第910篇《在React.js中更新组件onScroll的样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用useEffect的功能组件示例：</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您需要通过在useEffect中返回“清理”功能来删除事件侦听器。</font><font style="vertical-align: inherit;">如果不这样做，则每次组件更新时，您都会有一个附加的窗口滚动侦听器。</font></font></p>

<pre class="lang-js prettyprint-override"><code>import React, { useState, useEffect } from "react"<font></font>
<font></font>
const ScrollingElement = () =&gt; {<font></font>
  const [scrollY, setScrollY] = useState(0);<font></font>
<font></font>
  function logit() {<font></font>
    setScrollY(window.pageYOffset);<font></font>
  }<font></font>
<font></font>
  useEffect(() =&gt; {<font></font>
    function watchScroll() {<font></font>
      window.addEventListener("scroll", logit);<font></font>
    }<font></font>
    watchScroll();<font></font>
    // Remove listener (like componentWillUnmount)<font></font>
    return () =&gt; {<font></font>
      window.removeEventListener("scroll", logit);<font></font>
    };<font></font>
  }, []);<font></font>
<font></font>
  return (<font></font>
    &lt;div className="App"&gt;<font></font>
      &lt;div className="fixed-center"&gt;Scroll position: {scrollY}px&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将函数传递给</font></font><code>onScroll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React元素上的事件：</font><a href="https://facebook.github.io/react/docs/events.html#ui-events" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/react/docs/events.html#ui-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/events.html#ui-events</font></font></a></p>

<pre><code>&lt;ScrollableComponent<font></font>
 onScroll={this.handleScroll}<font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个类似的答案：</font><a href="https://stackoverflow.com/a/36207913/1255973"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/36207913/1255973"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/36207913/1255973</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
