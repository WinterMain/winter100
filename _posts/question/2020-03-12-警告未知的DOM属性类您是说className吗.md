---
layout: question
title:  警告：未知的DOM属性类。您是说className吗？
date:   2020-03-12T07:15:51.000Z
description: 我刚刚开始通过添加带有简单渲染功能的组件来探索React：render() {  return <div class="myApp"></div>...
img: 
author: 小胖Tony
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚开始通过添加带有简单渲染功能的组件来探索React：</font></font></p>

<pre><code>render() {<font></font>
  return &lt;div class="myApp"&gt;&lt;/div&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行应用程序时，出现以下错误：</font></font></p>

<pre><code>Warning: Unknown DOM property class. Did you mean className?
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过更改</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">解决此问题</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是; </font><font style="vertical-align: inherit;">React是否执行此约定？</font><font style="vertical-align: inherit;">另外，为什么我需要使用它</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是传统方法</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">如果这是一个限制，那是由于JSX语法还是其他原因？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1042篇《警告：未知的DOM属性类。您是说className吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam凯卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">流星使用babel将ES5转换为ES6（ES2015），因此我们可以将其作为添加了babel transpiler的普通Node应用程序来处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到项目的根文件夹中，并添加以下项目</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    "react-html-attrs"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您需要使用来安装此插件</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev babel-plugin-react-html-attrs</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中，我们使用</font></font></p>

<pre><code>class="navbar"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在React和ReactNative中没有HTML，我们在这里使用JSX（Javascript XML）</font></font></p>

<pre><code>className="navbar"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，它是一个React约定：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JSX是JavaScript，</font><font style="vertical-align: inherit;">因此不建议使用</font><font style="vertical-align: inherit;">诸如</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等</font><font style="vertical-align: inherit;">标识符</font><font style="vertical-align: inherit;">作为XML属性名称。</font><font style="vertical-align: inherit;">相反，阵营DOM组件期望像DOM属性名称</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>htmlFor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别。</font></font></p>
</blockquote>

<p><a href="https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深度JSX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaEva斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能将class用于任何HTML标记属性，因为JS具有class的另一种含义。</font><font style="vertical-align: inherit;">这就是为什么必须使用className而不是class的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且也使用htmlFor属性代替for。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React.js中，没有for和class属性可用，因此我们需要使用 </font></font></p>

<pre><code>for   --&gt; htmlFor<font></font>
class --&gt; className<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
