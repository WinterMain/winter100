---
layout: question
title:  在React-Router中未调用onEnter
date:   2020-03-19T03:44:18.000Z
description: 好吧，我受够了尝试。该onEnter方法不起作用。知道为什么吗？// Authentication "before" filterfunction...
img: 
author: 小宇宙GilMandy
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我受够了尝试。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
该</font></font><code>onEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法不起作用。</font><font style="vertical-align: inherit;">知道为什么吗？</font></font></p>

<pre><code>// Authentication "before" filter<font></font>
function requireAuth(nextState, replace){<font></font>
  console.log("called"); // =&gt; Is not triggered at all <font></font>
  if (!isLoggedIn()) {<font></font>
    replace({<font></font>
      pathname: '/front'<font></font>
    })<font></font>
  }<font></font>
}<font></font>
<font></font>
// Render the app<font></font>
render(<font></font>
  &lt;Provider store={store}&gt;<font></font>
      &lt;Router history={history}&gt;<font></font>
        &lt;App&gt;<font></font>
          &lt;Switch&gt;<font></font>
            &lt;Route path="/front" component={Front} /&gt;<font></font>
            &lt;Route path="/home" component={Home} onEnter={requireAuth} /&gt;<font></font>
            &lt;Route exact path="/" component={Home} onEnter={requireAuth} /&gt;<font></font>
            &lt;Route path="*" component={NoMatch} /&gt;<font></font>
          &lt;/Switch&gt;<font></font>
        &lt;/App&gt;<font></font>
      &lt;/Router&gt;<font></font>
  &lt;/Provider&gt;,<font></font>
  document.getElementById("lf-app")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法在我调用时执行</font></font><code>onEnter={requireAuth()}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但显然这不是目的，而且我也不会获得所需的参数。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽Jim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从反应路由器-V4 </font></font><code>onEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>onUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>onLeave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被删除，根据所述文档</font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md#on-properties" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从V2 / V3到V4迁移</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><strong><code>on*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
   阵营路由器v3提供</font></font><code>onEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>onUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>onLeave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  方法。</font><font style="vertical-align: inherit;">这些本质上是在重新创建React的生命周期方法。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于v4，您应该使用由呈现的组件的生命周期方法</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">取而代之的是</font></font><code>onEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用
   </font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用的地方</font></font><code>onUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>componentWillUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或可能
   </font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font><code>onLeave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以替换为
   </font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>onEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再存在</font></font><code>react-router-4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您应该使用它</font></font><code>&lt;Route render={ ... } /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来获得所需的功能。</font><font style="vertical-align: inherit;">我相信</font></font><a href="https://reacttraining.com/react-router/web/api/Redirect" rel="noreferrer"><code>Redirect</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例具有您的特定情况。</font><font style="vertical-align: inherit;">我在下面对其进行了修改，以匹配您的。</font></font></p>

<pre><code>&lt;Route exact path="/home" render={() =&gt; (<font></font>
  isLoggedIn() ? (<font></font>
    &lt;Redirect to="/front"/&gt;<font></font>
  ) : (<font></font>
    &lt;Home /&gt;<font></font>
  )<font></font>
)}/&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
