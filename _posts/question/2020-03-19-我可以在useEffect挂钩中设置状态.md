---
layout: question
title:  我可以在useEffect挂钩中设置状态
date:   2020-03-19T06:33:05.000Z
description: 可以说我有一些状态依赖于其他状态（例如，当A更改时，我希望B更改）。 创建一个观察A并将B设置在useEffect钩内的钩子是否合适？ 效果是否会...
img: 
author: Near宝儿
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说我有一些状态依赖于其他状态（例如，当A更改时，我希望B更改）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个观察A并将B设置在useEffect钩内的钩子是否合适？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果是否会级联，从而在我单击按钮时会触发第一个效果，从而导致b发生变化，从而导致第二个效果在下一次渲染之前触发？</font><font style="vertical-align: inherit;">这样构造代码是否有性能下降？</font></font></p>

<pre><code>let MyComponent = props =&gt; {<font></font>
  let [a, setA] = useState(1)<font></font>
  let [b, setB] = useState(2)<font></font>
  useEffect(<font></font>
    () =&gt; {<font></font>
      if (/*some stuff is true*/) {<font></font>
        setB(3)<font></font>
      }<font></font>
    },<font></font>
    [a],<font></font>
  )<font></font>
  useEffect(<font></font>
    () =&gt; {<font></font>
      // do some stuff<font></font>
    },<font></font>
    [b],<font></font>
  )<font></font>
<font></font>
  return (<font></font>
    &lt;button<font></font>
      onClick={() =&gt; {<font></font>
        setA(5)<font></font>
      }}<font></font>
    &gt;<font></font>
      click me<font></font>
    &lt;/button&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2395篇《我可以在useEffect挂钩中设置状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Tom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果始终在渲染阶段完成后执行，即使您将setState放在一个效果中，另一个效果也将读取更新的状态并仅在渲染阶段之后对其执行操作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽如此，最好以相同的效果采取两种行动，除非有可能</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于其他原因而改变</font><font style="vertical-align: inherit;">的可能性，</font><font style="vertical-align: inherit;">而不是</font></font><code>changing a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您也希望执行相同的逻辑</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般来说，使用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inside </font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将创建一个无限循环，您很可能不想引起该循环。</font><font style="vertical-align: inherit;">该规则有几个例外，我将在以后讨论。</font></font></p>

<p><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每次渲染之后调用，并在其中</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行使用时，它将导致组件重新渲染，从而进行调用</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，依此类推。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>useState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inside </font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会导致无限循环的</font><font style="vertical-align: inherit;">一种常见情况</font><font style="vertical-align: inherit;">是，当您将一个空数组作为第二个参数传递给</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">like时</font></font><code>useEffect(() =&gt; {....}, [])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着效果函数应该被调用一次：仅在第一次安装/渲染之后。</font><font style="vertical-align: inherit;">当您在组件中进行数据获取并且想要以组件的状态保存请求数据时，此方法被广泛使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useEffect可以挂钩到某个道具或状态。</font><font style="vertical-align: inherit;">因此，您需要做的是避免无限循环挂钩的事情是将某些变量或状态绑定到效果上</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>useEffect(myeffect, [])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当组件渲染后，上述效果才会触发。</font><font style="vertical-align: inherit;">这类似于componentDidMount生命周期</font></font></p>

<pre><code>const [something, setSomething] = withState(0)<font></font>
const [myState, setMyState] = withState(0)<font></font>
useEffect(() =&gt; {<font></font>
  setSomething(0)<font></font>
}, myState)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的效果只会触发我的状态已更改，这类似于componentDidUpdate，除了不是每个更改的状态都会触发其</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过此</font><a href="https://reactjs.org/docs/hooks-reference.html#useeffect" rel="noreferrer"><font style="vertical-align: inherit;">链接</font></a><font style="vertical-align: inherit;">阅读更多详细信息</font></font><a href="https://reactjs.org/docs/hooks-reference.html#useeffect" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
