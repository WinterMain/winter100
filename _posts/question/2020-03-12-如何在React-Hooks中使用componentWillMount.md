---
layout: question
title:  如何在React Hooks中使用componentWillMount（）？
date:   2020-03-12T04:44:41.000Z
description: 在React的官方文档中，它提到-    If you’re familiar with React class lifecycle methods...
img: 
author: 乐Mandy
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React的官方文档中，它提到-  </font></font></p>

<blockquote>
  <p>If you’re familiar with React class lifecycle methods, you can think
  of useEffect Hook as componentDidMount, componentDidUpdate, and
  componentWillUnmount combined.</p>
</blockquote>

<p>My question is - how can we use the <code>componentWillMount()</code> lifecyle method in a hook?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第954篇《如何在React Hooks中使用componentWillMount（）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本·卡尔普（Ben Carp）的回答对我来说似乎只有一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于我们使用的是功能方式，因此可以从闭包和HoC中受益于另一种方法： </font></font></p>

<pre><code>const InjectWillmount = function(Node, willMountCallback) {<font></font>
  let isCalled = true;<font></font>
  return function() {<font></font>
    if (isCalled) {<font></font>
      willMountCallback();<font></font>
      isCalled = false;<font></font>
    }<font></font>
    return Node;<font></font>
  };<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用它：</font></font></p>

<pre><code>const YourNewComponent = InjectWillmount(&lt;YourComponent /&gt;, () =&gt; {<font></font>
  console.log("your pre-mount logic here");<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的</font><font style="vertical-align: inherit;">简短答案</font><font style="vertical-align: inherit;">，如何</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与React Hooks一起使用：</font></font></p>

<p><code>componentWillMount</code> is <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle" rel="nofollow noreferrer">deprecated and considered legacy</a>. React <a href="https://reactjs.org/docs/react-component.html#unsafe_componentwillmount" rel="nofollow noreferrer">recommendation</a>:</p>

<blockquote>
  <p>Generally, we recommend using the constructor() instead for initializing state.</p>
</blockquote>

<p>Now in the <a href="https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks" rel="nofollow noreferrer">Hook FAQ</a> you find  out, what the equivalent of a class constructor  for function components is:</p>

<blockquote>
  <p>constructor: Function components don’t need a constructor. You can initialize the state in the useState call. If computing the initial state is expensive, you can pass a function to useState.</p>
</blockquote>

<p>So a usage example of <code>componentWillMount</code> looks like this:</p>

<pre><code>const MyComp = () =&gt; {<font></font>
  const [state, setState] = useState(42) // set initial value directly in useState <font></font>
  const [state2, setState2] = useState(createInitVal) // call complex computation<font></font>
<font></font>
  return &lt;div&gt;{state},{state2}&lt;/div&gt;<font></font>
};<font></font>
<font></font>
const createInitVal = () =&gt; { /* ... complex computation or other logic */ return 42; };<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://reactjs.org/docs/hooks-reference.html#usememo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/hooks-reference.html#usememo</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，传递给useMemo的函数在渲染期间运行。</font><font style="vertical-align: inherit;">不要在渲染时执行通常不会执行的任何操作。</font><font style="vertical-align: inherit;">例如，副作用属于useEffect，而不是useMemo。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一凯Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useComponentDidMount挂钩</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下</font></font><code>useComponentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要使用的工具。</font><font style="vertical-align: inherit;">组件已安装（初始渲染）后，它将仅运行一次。</font></font></p>

<pre><code> const useComponentDidMount = func =&gt; useEffect(func, []);
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useComponentWillMount</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是要注意，在类中组件</font></font><code>componentWillMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被认为是遗留的。</font><font style="vertical-align: inherit;">如果您需要代码在组件安装之前仅运行一次，则可以使用构造函数。</font></font><a href="https://reactjs.org/docs/react-component.html#unsafe_componentwillmount" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里了解更多</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于功能组件没有构造函数的等同性，因此在某些情况下使用钩子在组件挂载前仅运行一次代码可能是有意义的。</font><font style="vertical-align: inherit;">您可以使用自定义钩子来实现。</font></font></p>

<pre><code>const useComponentWillMount = func =&gt; {<font></font>
  const willMount = useRef(true);<font></font>
<font></font>
  if (willMount.current) {<font></font>
    func();<font></font>
  }<font></font>
<font></font>
  useComponentDidMount(() =&gt; {<font></font>
    willMount.current = false;<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有一个陷阱。</font><font style="vertical-align: inherit;">不要使用它来异步设置状态（例如在服务器请求之后。如您所料，它会影响初始渲染，而不会影响初始渲染）。</font><font style="vertical-align: inherit;">此类情况应以处理</font></font><code>useComponentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></h3>

<pre><code>const Component = (props) =&gt; {<font></font>
  useComponentWillMount(() =&gt; console.log("Runs only once before component mounts"));<font></font>
  useComponentDidMount(() =&gt; console.log("Runs only once after component mounts"));<font></font>
  ...<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;{...}&lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><a href="https://codesandbox.io/embed/didmount-willmount-hooks-r9ios" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整演示</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
