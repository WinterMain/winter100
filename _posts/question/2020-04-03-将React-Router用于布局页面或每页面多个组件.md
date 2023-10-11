---
layout: question
title:  将React-Router用于布局页面或每页面多个组件
date:   2020-04-03T03:37:58.000Z
description: 我正在将React Router添加到现有项目中。 目前，将模型传递到根组件中，该组件包含用于子导航的导航组件和主要组件。我发现的React Ro...
img: 
author: 神乐小哥Near
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将React Router添加到现有项目中。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，将模型传递到根组件中，该组件包含用于子导航的导航组件和主要组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的React Router的示例只有一个子组件，在不重复两个子组件的情况下改变两个子组件的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3970篇《将React-Router用于布局页面或每页面多个组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2019年+</font></font></h2>

<p>The simple and clean way to do it and avoid abusive re-rendering is (tested on react router v5, need to be confirmed on react router v4):</p>

<pre><code>       &lt;Switch&gt;<font></font>
         &lt;Route exact path={["/route1/:id/:token", "/"]}&gt;<font></font>
          &lt;Layout1&gt;<font></font>
            &lt;Route path="/route1/:id/:token" component={SetPassword} /&gt;<font></font>
            &lt;Route exact path="/" component={SignIn} /&gt;<font></font>
          &lt;/Layout1&gt;<font></font>
        &lt;/Route&gt;<font></font>
        &lt;Route path={["/route2"]}&gt;<font></font>
          &lt;Layout2&gt;<font></font>
            &lt;Route path="/route2" component={Home} /&gt;<font></font>
          &lt;/Layout2&gt;<font></font>
        &lt;/Route&gt;<font></font>
      &lt;/Switch&gt;<font></font>
</code></pre>

<p>which can be refactored to:</p>

<pre><code>const routes = [<font></font>
  {<font></font>
    layout:Layout1,<font></font>
    subRoutes:[<font></font>
      {<font></font>
        path:"/route1/:id/:token",<font></font>
        component:SetPassword<font></font>
      },<font></font>
      {<font></font>
        exact:true,<font></font>
        path:"/",<font></font>
        component:SignIn<font></font>
      },<font></font>
    ]<font></font>
  },<font></font>
  {<font></font>
    layout:Layout2,<font></font>
    subRoutes:[<font></font>
      {<font></font>
        path:"/route2",<font></font>
        component:Home<font></font>
      },<font></font>
    ]<font></font>
  }<font></font>
];<font></font>
</code></pre>

<p>with:</p>

<pre><code>      &lt;Switch&gt;<font></font>
        {routes.map((route,i)=&gt;<font></font>
          &lt;Route key={i} exact={route.subRoutes.some(r=&gt;r.exact)} path={route.subRoutes.map(r=&gt;r.path)}&gt;<font></font>
            &lt;route.layout&gt;<font></font>
              {route.subRoutes.map((subRoute,i)=&gt;<font></font>
                &lt;Route key={i} {...subRoute} /&gt;<font></font>
              )}<font></font>
            &lt;/route.layout&gt;<font></font>
          &lt;/Route&gt;<font></font>
        )}<font></font>
      &lt;/Switch&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该组件可以是返回JSX的函数。</font></font></p>

<pre><code>  &lt;Route&gt;<font></font>
    &lt;Route path="/" component={App}&gt;<font></font>
      &lt;IndexRoute component={Home} /&gt;<font></font>
      &lt;Route path="Invite" component={()=&gt;(&lt;div&gt;&lt;Home/&gt;&lt;Invite/&gt;&lt;/div&gt;)} /&gt;<font></font>
    &lt;/Route&gt;<font></font>
  &lt;/Route&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
