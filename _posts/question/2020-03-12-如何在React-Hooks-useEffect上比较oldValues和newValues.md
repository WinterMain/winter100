---
layout: question
title:  如何在React Hooks useEffect上比较oldValues和newValues？
date:   2020-03-12T04:44:15.000Z
description: 假设我有3个输入：rate，sendAmount和receiveAmount。我把那3个输入放在useEffect diffing params上。规则是...
img: 
author: LEY逆天
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有3个输入：rate，sendAmount和receiveAmount。</font><font style="vertical-align: inherit;">我把那3个输入放在useEffect diffing params上。</font><font style="vertical-align: inherit;">规则是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果sendAmount改变了，我计算 </font></font><code>receiveAmount = sendAmount * rate</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果receiveAmount改变了，我计算 </font></font><code>sendAmount = receiveAmount / rate</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果费率发生变化，我计算</font></font><code>receiveAmount = sendAmount * rate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间</font></font><code>sendAmount &gt; 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或计算</font></font><code>sendAmount = receiveAmount / rate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间</font></font><code>receiveAmount &gt; 0</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是codesandbox </font></font><a href="https://codesandbox.io/s/pkl6vn7x6j" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codesandbox.io/s/pkl6vn7x6j</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来演示此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以比较</font></font><code>oldValues</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>newValues</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢，</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是为此情况制作3个处理程序？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用</font><a href="https://codesandbox.io/s/30n01w2r06" rel="noreferrer"><font style="vertical-align: inherit;">https://codesandbox.io/s/30n01w2r06的</font></a><font style="vertical-align: inherit;">最终解决方案</font></font><code>usePrevious</code>
<a href="https://codesandbox.io/s/30n01w2r06" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，我不能使用多个，</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为每次更改都会导致相同的网络呼叫。</font><font style="vertical-align: inherit;">这就是为什么我也使用</font></font><code>changeCount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪更改</font><font style="vertical-align: inherit;">的原因</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这</font></font><code>changeCount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也有助于跟踪仅来自本地的更改，因此我可以防止由于服务器的更改而导致不必要的网络呼叫。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第952篇《如何在React Hooks useEffect上比较oldValues和newValues？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于状态不会与功能组件中的组件实例紧密耦合，因此，如果不先</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存</font><font style="vertical-align: inherit;">状态，就无法进入先前的状态</font></font><code>useRef</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这也意味着状态更新可能在错误的位置错误地实现了，因为以前的状态在</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">updater函数中</font><font style="vertical-align: inherit;">可用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很好的用例</font></font><code>useReducer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，提供了类似Redux的存储，并允许实现各自的模式。</font><font style="vertical-align: inherit;">状态更新是显式执行的，因此无需弄清楚哪个状态属性已更新。</font><font style="vertical-align: inherit;">从派遣行动中已经很清楚了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="https://codesandbox.io/s/r0pr18xyv4" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来可能像这样：</font></font></p>

<pre><code>function reducer({ sendAmount, receiveAmount, rate }, action) {<font></font>
  switch (action.type) {<font></font>
    case "sendAmount":<font></font>
      sendAmount = action.payload;<font></font>
      return {<font></font>
        sendAmount,<font></font>
        receiveAmount: sendAmount * rate,<font></font>
        rate<font></font>
      };<font></font>
    case "receiveAmount":<font></font>
      receiveAmount = action.payload;<font></font>
      return {<font></font>
        sendAmount: receiveAmount / rate,<font></font>
        receiveAmount,<font></font>
        rate<font></font>
      };<font></font>
    case "rate":<font></font>
      rate = action.payload;<font></font>
      return {<font></font>
        sendAmount: receiveAmount ? receiveAmount / rate : sendAmount,<font></font>
        receiveAmount: sendAmount ? sendAmount * rate : receiveAmount,<font></font>
        rate<font></font>
      };<font></font>
    default:<font></font>
      throw new Error();<font></font>
  }<font></font>
}<font></font>
<font></font>
function handleChange(e) {<font></font>
  const { name, value } = e.target;<font></font>
  dispatch({<font></font>
    type: name,<font></font>
    payload: value<font></font>
  });<font></font>
}<font></font>
<font></font>
...<font></font>
const [state, dispatch] = useReducer(reducer, {<font></font>
  rate: 2,<font></font>
  sendAmount: 0,<font></font>
  receiveAmount: 0<font></font>
});<font></font>
...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚发布了</font></font><a href="https://github.com/malerba118/react-delta" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-delta</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它解决了这种情况。</font><font style="vertical-align: inherit;">我认为</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">责任太多。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">职责范围</font></font></h3>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用以下命令比较其依赖项数组中的所有值 </font></font><code>Object.is</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它根据＃1的结果运行效果/清理回调</font></font></li>
</ol>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分手责任</font></font></h3>

<p><code>react-delta</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">责任分解为几个较小的钩子。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">责任一</font></font></strong></p>

<ul>
<li><a href="https://github.com/malerba118/react-delta#usepreviousvalue" rel="nofollow noreferrer"><code>usePrevious(value)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#uselatestvalue" rel="nofollow noreferrer"><code>useLatest(value)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#usedeltavalue-options" rel="nofollow noreferrer"><code>useDelta(value, options)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#usedeltaarrayarray-options" rel="nofollow noreferrer"><code>useDeltaArray(valueArray, options)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#usedeltaobjectobj-options" rel="nofollow noreferrer"><code>useDeltaObject(valueObject, options)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#somearray" rel="nofollow noreferrer"><code>some(deltaArray)</code></a></li>
<li><a href="https://github.com/malerba118/react-delta#everyarray" rel="nofollow noreferrer"><code>every(deltaArray)</code></a></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">责任二</font></font></strong></p>

<ul>
<li><a href="https://github.com/malerba118/react-delta#useconditionaleffectcallback-condition" rel="nofollow noreferrer"><code>useConditionalEffect(callback, boolean)</code></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以我的经验，这种方法比</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>useRef</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font><font style="vertical-align: inherit;">更加灵活，干净和简洁</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Ref会在应用程序中引入一种新的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们用</font></font><code>usePrevious</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人评论的</font><font style="vertical-align: inherit;">情况来看看这种情况</font><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop.minTime：5 ==&gt;参考电流= 5 | </font><font style="vertical-align: inherit;">设定参考电流</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop.minTime：5 ==&gt;参考电流= 5 | </font><font style="vertical-align: inherit;">新值等于参考电流</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop.minTime：8 ==&gt;参考电流= 5 | </font><font style="vertical-align: inherit;">新值不等于参考电流</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop.minTime：5 ==&gt;参考电流= 5 | </font><font style="vertical-align: inherit;">新值等于参考电流</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我们在这里看到的，我们没有更新内部，</font></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我们正在使用</font></font><code>useEffect</code> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于真正简单的道具比较，您可以使用useEffect和useState轻松检查道具是否已更新。</font></font></p>

<pre><code>const myComponent = ({ prop }) =&gt; {<font></font>
  const [propHasChanged, setPropHasChanged] = useState(false)<font></font>
  useEffect(() =&gt; {<font></font>
    setPropHasChanged(true)<font></font>
  }, [prop])<font></font>
<font></font>
  if(propHasChanged){<font></font>
    ~ do stuff here ~<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useEffect检查该道具是否已更改，更新状态说它已经拥有，并允许您的条件代码运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以编写一个自定义钩子，以</font><a href="https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state" rel="noreferrer"><font style="vertical-align: inherit;">使用</font></a><a href="https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state" rel="noreferrer"><strong><font style="vertical-align: inherit;">useRef</font></strong></a><font style="vertical-align: inherit;">为您提供</font></font><a href="https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前的道具</font></font><strong><font style="vertical-align: inherit;"></font></strong></a></p>

<pre><code>function usePrevious(value) {<font></font>
  const ref = useRef();<font></font>
  useEffect(() =&gt; {<font></font>
    ref.current = value;<font></font>
  });<font></font>
  return ref.current;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后用在 </font></font><code>useEffect</code></p>

<pre><code>const Component = (props) =&gt; {<font></font>
    const {receiveAmount, sendAmount } = props<font></font>
    const prevAmount = usePrevious({receiveAmount, sendAmount});<font></font>
    useEffect(() =&gt; {<font></font>
        if(prevAmount.receiveAmount !== receiveAmount) {<font></font>
<font></font>
         // process here<font></font>
        }<font></font>
        if(prevAmount.sendAmount !== sendAmount) {<font></font>
<font></font>
         // process here<font></font>
        }<font></font>
    }, [receiveAmount, sendAmount])<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对每个更改ID分别</font><font style="vertical-align: inherit;">使用两个，则它更清晰，并且可能更好，更清晰地阅读和理解，</font><font style="vertical-align: inherit;">您想分别处理它们</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项1-useCompare挂钩</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将当前值与以前的值进行比较是一种常见的模式，它证明了自己的自定义钩子是正确的，从而隐藏了实现细节。 </font></font></p>

<pre><code>const useCompare = (val: any) =&gt; {<font></font>
    const prevVal = usePrevious(val)<font></font>
    return prevVal !== val<font></font>
}<font></font>
<font></font>
const usePrevious = (value) {<font></font>
    const ref = useRef();<font></font>
    useEffect(() =&gt; {<font></font>
      ref.current = value;<font></font>
    });<font></font>
    return ref.current;<font></font>
}<font></font>
<font></font>
const Component = (props) =&gt; {<font></font>
  ...<font></font>
  const hasVal1Changed = useCompare(val1)<font></font>
  const hasVal2Changed = useCompare(val2);<font></font>
  useEffect(() =&gt; {<font></font>
    if (hasVal1Changed ) {<font></font>
      console.log("val1 has changed");<font></font>
    }<font></font>
    if (hasVal2Changed ) {<font></font>
      console.log("val2 has changed");<font></font>
    }<font></font>
  });<font></font>
<font></font>
  return &lt;div&gt;...&lt;/div&gt;;<font></font>
};<font></font>
</code></pre>

<p><a href="https://codesandbox.io/embed/vigilant-lake-8fxxs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></a></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项2-值更改时运行useEffect</font></font></h3>

<pre><code>const Component = (props) =&gt; {<font></font>
  ...<font></font>
  useEffect(() =&gt; {<font></font>
    console.log("val1 has changed");<font></font>
  }, [val1]);<font></font>
  useEffect(() =&gt; {<font></font>
    console.log("val2 has changed");<font></font>
  }, [val2]);<font></font>
<font></font>
  return &lt;div&gt;...&lt;/div&gt;;<font></font>
};<font></font>
</code></pre>

<p><a href="https://codesandbox.io/embed/optimistic-sky-0x0b2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人正在寻找use的TypeScript版本</font></font></strong></p>

<pre><code>import { useEffect, useRef } from "react";<font></font>
<font></font>
const usePrevious = &lt;T extends {}&gt;(value: T): T | undefined =&gt; {<font></font>
  const ref = useRef&lt;T&gt;();<font></font>
  useEffect(() =&gt; {<font></font>
    ref.current = value;<font></font>
  });<font></font>
  return ref.current;<font></font>
};<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
