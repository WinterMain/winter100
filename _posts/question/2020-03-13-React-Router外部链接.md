---
layout: question
title:  React-Router外部链接
date:   2020-03-13T07:33:26.000Z
description: 由于我正在使用react-router来处理我的React应用程序中的路由，因此我很好奇是否有一种方法可以重定向到外部资源。说某人点击：examp...
img: 
author: 番长卡卡西
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我正在使用react-router来处理我的React应用程序中的路由，因此我很好奇是否有一种方法可以重定向到外部资源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说某人点击：</font></font></p>

<p><code>example.com/privacy-policy</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它重定向到：</font></font></p>

<p><code>example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现避免在index.html加载类似以下内容的纯JS中编写零帮助：</font></font></p>

<pre><code>if ( window.location.path === "privacy-policy" ){<font></font>
  window.location = "example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies"<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁村村GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用带有Typescript的React会出错，因为该函数必须返回react元素，而不是</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我使用了Route渲染方法（以及使用React Router v4）来做到这一点：</font></font></p>

<pre><code>redirectToHomePage = (): null =&gt; {<font></font>
    window.location.reload();<font></font>
    return null;<font></font>
  };    <font></font>
&lt;Route exact path={'/'} render={this.redirectToHomePage} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以在其他地方使用</font></font><code>window.location.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>window.location.replace()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为React-Router不提供这种支持。</font><font style="vertical-align: inherit;">该</font></font><a href="http://knowbody.github.io/react-router-docs/api/Redirect.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提到</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt;重定向&gt;设置到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个路由的重定向，</font><font style="vertical-align: inherit;">以维护旧的URL。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以尝试使用类似</font></font><a href="https://www.npmjs.com/package/react-redirect" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵营重定向</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需使用</font></font><code>&lt;Link /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router中的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要转到外部链接，请使用锚标记。</font></font></p>

<pre><code>&lt;a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"&gt;Policies&lt;/a&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上最终构建了自己的组件。</font></font><code>&lt;Redirect&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它从</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素中</font><font style="vertical-align: inherit;">获取信息，</font><font style="vertical-align: inherit;">因此我可以将其保留在自己的路线中。</font><font style="vertical-align: inherit;">如：</font></font></p>

<pre><code>&lt;Route<font></font>
  path="/privacy-policy"<font></font>
  component={ Redirect }<font></font>
  loc="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"<font></font>
  /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人好奇，这是我的组件：</font></font></p>

<pre><code>import React, { Component } from "react";<font></font>
<font></font>
export class Redirect extends Component {<font></font>
  constructor( props ){<font></font>
    super();<font></font>
    this.state = { ...props };<font></font>
  }<font></font>
  componentWillMount(){<font></font>
    window.location = this.state.route.loc;<font></font>
  }<font></font>
  render(){<font></font>
    return (&lt;section&gt;Redirecting...&lt;/section&gt;);<font></font>
  }<font></font>
}<font></font>
<font></font>
export default Redirect;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-注意：这与一起使用</font></font><code>react-router: 3.0.5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在4.x中不是那么简单</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
