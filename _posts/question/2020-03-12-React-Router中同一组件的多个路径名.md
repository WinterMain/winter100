---
layout: question
title:  React Router中同一组件的多个路径名
date:   2020-03-12T08:23:48.000Z
description: 我将相同的组件用于三种不同的路线：<Router>    <Route path="/home" component={Home} />    <...
img: 
author: Near小哥西门
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将相同的组件用于三种不同的路线：</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;Route path="/home" component={Home} /&gt;<font></font>
    &lt;Route path="/users" component={Home} /&gt;<font></font>
    &lt;Route path="/widgets" component={Home} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，有没有结合起来，就像：</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;Route path=["/home", "/users", "/widgets"] component={Home} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1123篇《React Router中同一组件的多个路径名》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据React Router docs，属性类型“ path”的类型为字符串。因此，您无法将数组作为属性传递给路由组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想更改路线，则可以将同一组件用于不同的路线，这没有问题</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为您使用的是低于v4的React Router版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，您可以</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像对待其他任何JSX组件一样</font><font style="vertical-align: inherit;">使用a </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    {["/home", "/users", "/widgets"].map((path, index) =&gt; <font></font>
        &lt;Route path={path} component={Home} key={index} /&gt;<font></font>
    )}<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font></font><a href="https://reacttraining.com/react-router/web/api/Route/path-string" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在react-router v4中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用正则表达式作为路径</font><a href="https://reacttraining.com/react-router/web/api/Route/path-string" rel="noreferrer"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">只要</font></font><a href="https://www.npmjs.com/package/path-to-regexp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">path-to-regexp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font><a href="https://www.npmjs.com/package/path-to-regexp" rel="noreferrer"><font style="vertical-align: inherit;">即可</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关更多信息，请参见@Cameron的答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从react-router </font></font><a href="https://github.com/ReactTraining/react-router/releases/tag/v4.4.0-beta.4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v4.4.0-beta.4开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且正式在v5.0.0中，您现在可以指定解析为组件的路径数组，例如</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;Route path={["/home", "/users", "/widgets"]} component={Home} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中的每个路径都是一个正则表达式字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在</font></font><a href="https://reacttraining.com/react-router/web/api/Route/path-string-string" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关此方法的文档</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他选项：使用路由前缀。</font></font><code>/pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font><font style="vertical-align: inherit;">你会得到</font></font></p>

<ul>
<li><code>/pages/home</code></li>
<li><code>/pages/users</code></li>
<li><code>/pages/widgets</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">内部以详细方式解决它</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
  &lt;Route path="/pages/" component={Home} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从react-route-dom v5.1.2开始，您可以通过以下多个路径</font></font></p>

<pre><code> &lt;Route path={"/home" | "/users" | "/widgets"} component={Home} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很显然，您需要在顶部导入Home jsx文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少对于react-router v4来说，它</font></font><code>path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是正则表达式字符串，因此您可以执行以下操作：</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;Route path="/(home|users|widgets)/" component={Home} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，它有点冗长，因此，如果您的</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样简单，则可能不值得。</font></font></p>

<p>And of course if this actually comes up often you could always create a wrapping component that takes in an array <code>paths</code> parameter, which does the regex or <code>.map</code> logic reusably.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
