---
layout: question
title:  对useEffect中的异步函数的React Hook警告：useEffect函数必须返回清除函数，否则不返回任何内容
date:   2020-03-14T10:18:26.000Z
description: 我正在尝试useEffect示例，如下所示： useEffect(async () => {    try {        const re...
img: 
author: 猴子神无
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试useEffect示例，如下所示： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>useEffect(async () =&gt; {<font></font>
    try {<font></font>
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);<font></font>
        const json = await response.json();<font></font>
        setPosts(json.data.children.map(it =&gt; it.data));<font></font>
    } catch (e) {<font></font>
        console.error(e);<font></font>
    }<font></font>
}, []);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在控制台中收到此警告。</font><font style="vertical-align: inherit;">但是对于我认为的异步调用，清理是可选的。</font><font style="vertical-align: inherit;">我不确定为什么会收到此警告。</font><font style="vertical-align: inherit;">链接沙箱示例。</font></font><a href="https://codesandbox.io/s/24rj871r0p" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codesandbox.io/s/24rj871r0p</font></font></a>
<a href="https://www.samyoc.com//uploads/users/16782/images/thumbnails/1584181105961.png" data-src="https://www.samyoc.com//uploads/users/16782/images/1584181105961.png" rel="noreferrer"><img src="https://i.stack.imgur.com/YFRR5.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1604篇《对useEffect中的异步函数的React Hook警告：useEffect函数必须返回清除函数，否则不返回任何内容》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>const MyFunctionnalComponent: React.FC = props =&gt; {<font></font>
  useEffect(() =&gt; {<font></font>
    // Using an IIFE<font></font>
    (async function anyNameFunction() {<font></font>
      await loadContent();<font></font>
    })();<font></font>
  }, []);<font></font>
  return &lt;div&gt;&lt;/div&gt;;<font></font>
};</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Gil</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于其他读者，该错误可能是由于没有括号包装异步函数的事实引起的：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑异步函数initData</font></font></p>

<pre><code>  async function initData() {<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码将导致您的错误：</font></font></p>

<pre><code>  useEffect(() =&gt; initData(), []);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这一点不会：</font></font></p>

<pre><code>  useEffect(() =&gt; { initData(); }, []);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（注意initData（）的方括号</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通读了这个问题，并认为答案中没有提到实现useEffect的最佳方法。</font><font style="vertical-align: inherit;">假设您有一个网络通话，并且希望在收到回复后立即采取措施。</font><font style="vertical-align: inherit;">为了简单起见，让我们将网络响应存储在状态变量中。</font><font style="vertical-align: inherit;">可能需要使用操作/缩减程序来通过网络响应来更新商店。</font></font></p>

<pre><code>const [data, setData] = useState(null);<font></font>
<font></font>
/* This would be called on initial page load */<font></font>
useEffect(()=&gt;{<font></font>
    fetch(`https://www.reddit.com/r/${subreddit}.json`)<font></font>
    .then(data =&gt; {<font></font>
        setData(data);<font></font>
    })<font></font>
    .catch(err =&gt; {<font></font>
        /* perform error handling if desired */<font></font>
    });<font></font>
}, [])<font></font>
<font></font>
/* This would be called when store/state data is updated */<font></font>
useEffect(()=&gt;{<font></font>
    if (data) {<font></font>
        setPosts(data.children.map(it =&gt; {<font></font>
            /* do what you want */<font></font>
        }));<font></font>
    }<font></font>
}, [data]);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考=&gt; </font></font><a href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用诸如</font></font></p>

<pre><code>async () =&gt; {<font></font>
    try {<font></font>
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);<font></font>
        const json = await response.json();<font></font>
        setPosts(json.data.children.map(it =&gt; it.data));<font></font>
    } catch (e) {<font></font>
        console.error(e);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它返回一个</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Promise，</font><font style="vertical-align: inherit;">并且</font><font style="vertical-align: inherit;">不希望回调函数返回Promise，而是期望不返回任何内容或返回一个函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为警告的解决方法，您可以使用自调用异步功能。</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
    (async function() {<font></font>
        try {<font></font>
            const response = await fetch(<font></font>
                `https://www.reddit.com/r/${subreddit}.json`<font></font>
            );<font></font>
            const json = await response.json();<font></font>
            setPosts(json.data.children.map(it =&gt; it.data));<font></font>
        } catch (e) {<font></font>
            console.error(e);<font></font>
        }<font></font>
    })();<font></font>
}, []);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使其更清晰，您可以定义一个函数然后调用它</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
    async function fetchData() {<font></font>
        try {<font></font>
            const response = await fetch(<font></font>
                `https://www.reddit.com/r/${subreddit}.json`<font></font>
            );<font></font>
            const json = await response.json();<font></font>
            setPosts(json.data.children.map(it =&gt; it.data));<font></font>
        } catch (e) {<font></font>
            console.error(e);<font></font>
        }<font></font>
    };<font></font>
    fetchData();<font></font>
}, []);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种解决方案将使其更易于阅读，并且将帮助您编写代码以在触发新请求时取消先前的请求或将最新的请求响应保存在状态中</font></font></p>

<p><strong><a href="https://codesandbox.io/s/jpknv0kyn9" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作代码和邮箱</font></font></a></strong></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
