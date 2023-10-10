---
layout: question
title:  React-Router只有一个孩子
date:   2020-03-17T04:06:06.000Z
description: 我继续得到错误：   “路由器”可能只有一个子元素当使用react-router时。我似乎无法弄清楚为什么它不起作用，因为它与示例中显示的...
img: 
author: 凯Sam
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我继续得到错误： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“路由器”可能只有一个子元素</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用react-router时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎无法弄清楚为什么它不起作用，因为它与示例中显示的代码完全一样：</font></font><a href="https://reacttraining.com/react-router/web/guides/quick-start" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速入门</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>import React from 'react';<font></font>
import Editorstore from './Editorstore';<font></font>
import App from './components/editor/App';<font></font>
import BaseLayer from './components/baselayer';<font></font>
import {BrowserRouter as Router, Route} from 'react-router-dom';<font></font>
import {render} from 'react-dom';<font></font>
<font></font>
const root = document.createElement('div');<font></font>
root.id = 'app';<font></font>
document.body.appendChild(root);<font></font>
<font></font>
const store = new Editorstore();<font></font>
const stylelist = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.33.1/mapbox-gl.css'];<font></font>
<font></font>
stylelist.map((link) =&gt; {<font></font>
    const a = document.createElement('link');<font></font>
    a.rel = 'stylesheet';<font></font>
    a.href = link;<font></font>
    document.body.appendChild(a);<font></font>
    return null;<font></font>
});<font></font>
<font></font>
render((<font></font>
  &lt;Router&gt;<font></font>
    &lt;Route exact  path="/" component={BaseLayer} /&gt;<font></font>
    &lt;Route path="/editor" component={App} store={store} /&gt;<font></font>
  &lt;/Router&gt;<font></font>
), document.querySelector('#app'));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的帮助</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现此问题时，你没有父标签之前</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">里面</font></font><code>&lt;Router&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样来解决这一问题保持</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">封闭在一个父标签如</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等为例-</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;p&gt;<font></font>
       &lt;Route path="/login" component={Login} /&gt;<font></font>
       &lt;Route path="/register" component={Register} /&gt;<font></font>
    &lt;/p&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYSam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在路由器内部嵌套其他组件，则应该这样做。</font></font></p>

<pre><code>  &lt;Router&gt;<font></font>
     &lt;div&gt;<font></font>
       &lt;otherComponent/&gt;<font></font>
         &lt;div&gt;<font></font>
           &lt;Route/&gt;  <font></font>
           &lt;Route/&gt;<font></font>
           &lt;Route/&gt;<font></font>
           &lt;Route/&gt;<font></font>
         &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/Router&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以将所有路线包裹在默认为索引页面的父路线中</font></font></p>

<pre><code>&lt;Router history={history}&gt;    <font></font>
   &lt;Route path="/" component={IndexPage}&gt;<font></font>
      &lt;Route path="to/page" component={MyPage}/&gt;<font></font>
      &lt;Route path="to/page/:pathParam" component={MyPage}/&gt;<font></font>
   &lt;/Route&gt;    <font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
