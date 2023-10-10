---
layout: question
title:  如何仅使用一次React useEffect调用加载函数
date:   2020-03-11T04:15:49.000Z
description: 该useEffect阵营钩将运行在功能上传递的每一个变化。可以对其进行优化，使其仅在所需属性更改时调用。如果我想从中调用初始化函数componentD...
img: 
author: Jim老丝达蒙
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://reactjs.org/docs/hooks-effect.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useEffect</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵营钩将运行在功能上传递的每一个变化。</font><font style="vertical-align: inherit;">可以对其进行优化，使其仅在所需属性更改时调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想从中调用初始化函数</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不在更改时再次调用该怎么办？</font><font style="vertical-align: inherit;">假设我要加载一个实体，但是加载功能不需要组件中的任何数据。</font><font style="vertical-align: inherit;">我们如何使用</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子</font><font style="vertical-align: inherit;">做到这一点</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>class MyComponent extends React.PureComponent {<font></font>
    componentDidMount() {<font></font>
        loadDataOnlyOnce();<font></font>
    }<font></font>
    render() { ... }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用钩子可能看起来像这样：</font></font></p>

<pre><code>function MyComponent() {<font></font>
    useEffect(() =&gt; {<font></font>
        loadDataOnlyOnce(); // this will fire on every change :(<font></font>
    }, [...???]);<font></font>
    return (...);<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第649篇《如何仅使用一次React useEffect调用加载函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果只想</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在初始渲染后</font><font style="vertical-align: inherit;">运行给定的函数</font><font style="vertical-align: inherit;">，则可以给它一个空数组作为第二个参数。</font></font></p>

<pre class="lang-js prettyprint-override"><code>function MyComponent() {<font></font>
  useEffect(() =&gt; {<font></font>
    loadDataOnlyOnce();<font></font>
  }, []);<font></font>
<font></font>
  return &lt;div&gt; {/* ... */} &lt;/div&gt;;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useMountEffect挂钩</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件挂载后仅运行一次功能是一种常见的模式，它证明了自己的钩子隐藏了实现细节。 </font></font></p>

<pre class="lang-js prettyprint-override"><code>const useMountEffect = (fun) =&gt; useEffect(fun, [])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何功能组件中使用它。 </font></font></p>

<pre><code>function MyComponent() {<font></font>
    useMountEffect(function) // function will run only once after it has mounted. <font></font>
    return &lt;div&gt;...&lt;/div&gt;;<font></font>
}<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于useMountEffect挂钩</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与第二个数组参数一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">时，React将在挂载（初始渲染）之后和数组中的值更改后运行回调。</font><font style="vertical-align: inherit;">由于我们传递了一个空数组，因此它将仅在安装后运行。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
