---
layout: question
title:  在setInterval中使用React状态挂钩时状态未更新
date:   2020-03-14T10:16:56.000Z
description: 我正在尝试新的React Hooks，并有一个带有计数器的Clock组件，该计数器应该每秒增加一次。但是，该值不会增加到超过一。function ...
img: 
author: 西里飞云
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试新的</font></font><a href="https://reactjs.org/docs/hooks-intro.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Hooks，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并有一个带有计数器的Clock组件，该计数器应该每秒增加一次。</font><font style="vertical-align: inherit;">但是，该值不会增加到超过一。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function Clock() {<font></font>
  const [time, setTime] = React.useState(0);<font></font>
  React.useEffect(() =&gt; {<font></font>
    const timer = window.setInterval(() =&gt; {<font></font>
      setTime(time + 1);<font></font>
    }, 1000);<font></font>
    return () =&gt; {<font></font>
      window.clearInterval(timer);<font></font>
    };<font></font>
  }, []);<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;Seconds: {time}&lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
ReactDOM.render(&lt;Clock /&gt;, document.querySelector('#app'));</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://unpkg.com/react@16.7.0-alpha.0/umd/react.development.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://unpkg.com/react-dom@16.7.0-alpha.0/umd/react-dom.development.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div id="app"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西神乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行以下操作可以正常工作。</font></font></p>

<pre><code>const [count , setCount] = useState(0);<font></font>
<font></font>
async function increment(count,value) {<font></font>
    await setCount(count =&gt; count + 1);<font></font>
  }<font></font>
<font></font>
//call increment function<font></font>
increment(count);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProItachi</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人需要管理队列</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设显示的通知间隔为3秒（先进先出），并且可以随时推送新消息。</font></font></p>

<p><a href="https://codesandbox.io/embed/silly-resonance-6j16x" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codesandbox示例。</font></font></a></p>

<pre><code>import React, {useState, useRef, useEffect} from "react";<font></font>
import ReactDOM from "react-dom";<font></font>
<font></font>
import "./styles.css";<font></font>
<font></font>
let x = 1 // for testing<font></font>
const fadeTime = 3000 // 3 sec <font></font>
<font></font>
function App() {<font></font>
  // our messages array in what we can push at any time<font></font>
  const [queue, setQueue] = useState([]) <font></font>
<font></font>
  // our shiftTimer that will change every 3 sec if array have items<font></font>
  const [shiftTimer, setShiftTimer] = useState(Date.now())<font></font>
<font></font>
  // reference to timer<font></font>
  const shiftTimerRef = useRef(null)<font></font>
<font></font>
  // here we start timer if it was mot started yet<font></font>
  useEffect(() =&gt; {<font></font>
    if (shiftTimerRef.current === null &amp;&amp; queue.length != 0) {<font></font>
      startTimer()<font></font>
    }<font></font>
  }, [queue])<font></font>
<font></font>
  // here we will shift first message out of array (as it was already seen)<font></font>
  useEffect(() =&gt; {<font></font>
    shiftTimerRef.current = null<font></font>
    popupShift()<font></font>
  }, [shiftTimer])<font></font>
<font></font>
  function startTimer() {<font></font>
    shiftTimerRef.current = setTimeout(() =&gt; {<font></font>
      setShiftTimer(Date.now)<font></font>
    }, fadeTime )<font></font>
  }<font></font>
<font></font>
  function startTimer() {<font></font>
    shiftTimerRef.current = setTimeout(() =&gt; setShiftTimer(Date.now), fadeTime )<font></font>
  }<font></font>
<font></font>
  function popupPush(newPopup) {<font></font>
    let newQueue = JSON.parse(JSON.stringify(queue))<font></font>
    newQueue.push(newPopup)<font></font>
    setQueue(newQueue)<font></font>
  }<font></font>
<font></font>
  function popupShift() {<font></font>
    let newQueue = JSON.parse(JSON.stringify(queue))<font></font>
    newQueue.shift()<font></font>
    setQueue(newQueue)<font></font>
  }<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;button onClick={() =&gt; popupPush({ message: x++ })}&gt;Push new message&lt;/button&gt;<font></font>
      &lt;div&gt;{JSON.stringify(queue)}&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
const rootElement = document.getElementById("root");<font></font>
ReactDOM.render(&lt;App /&gt;, rootElement);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小哥</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 提供空的输入列表时，仅在组件安装上评估一次该功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次状态更新时</font><font style="vertical-align: inherit;">设置新的时间间隔</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  const [time, setTime] = React.useState(0);<font></font>
  React.useEffect(() =&gt; {<font></font>
    const timer = setTimeout(() =&gt; {<font></font>
      setTime(time + 1);<font></font>
    }, 1000);<font></font>
    return () =&gt; {<font></font>
      clearTimeout(timer);<font></font>
    };<font></font>
  }, [time]);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的性能影响</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">微不足道，通常可以忽略。</font><font style="vertical-align: inherit;">除非组件是时间敏感到新设置的超时引起不希望的效应的点，都</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是可以接受的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿AJim</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个解决方案对我不起作用，因为我需要获取变量并做一些事情，而不仅仅是更新它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个解决方法来获得带有承诺的钩子的更新值</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如： </font></font></p>

<pre><code>async function getCurrentHookValue(setHookFunction) {<font></font>
  return new Promise((resolve) =&gt; {<font></font>
    setHookFunction(prev =&gt; {<font></font>
      resolve(prev)<font></font>
      return prev;<font></font>
    })<font></font>
  })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样我可以像这样在setInterval函数中获取值</font></font></p>

<pre><code>let dateFrom = await getCurrentHackValue(setSelectedDateFrom);
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
