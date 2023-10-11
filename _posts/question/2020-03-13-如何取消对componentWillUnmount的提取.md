---
layout: question
title:  如何取消对componentWillUnmount的提取
date:   2020-03-13T12:16:18.000Z
description: 我认为标题说明了一切。每当我卸载仍在取回的组件时，都会显示黄色警告。安慰  警告：无法在未安装的组件上调用setState（或forceUpda...
img: 
author: Pro神无猴子
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为标题说明了一切。</font><font style="vertical-align: inherit;">每当我卸载仍在取回的组件时，都会显示黄色警告。</font></font></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

安慰

</font></font><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：无法</font><font style="vertical-align: inherit;">在未安装的组件上</font><font style="vertical-align: inherit;">调用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>forceUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">这是一项禁忌措施，但是...若要修复，请取消方法中的所有订阅和异步任务</font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<pre><code>  constructor(props){<font></font>
    super(props);<font></font>
    this.state = {<font></font>
      isLoading: true,<font></font>
      dataSource: [{<font></font>
        name: 'loading...',<font></font>
        id: 'loading',<font></font>
      }]<font></font>
    }<font></font>
  }<font></font>
<font></font>
  componentDidMount(){<font></font>
    return fetch('LINK HERE')<font></font>
      .then((response) =&gt; response.json())<font></font>
      .then((responseJson) =&gt; {<font></font>
        this.setState({<font></font>
          isLoading: false,<font></font>
          dataSource: responseJson,<font></font>
        }, function(){<font></font>
        });<font></font>
      })<font></font>
      .catch((error) =&gt;{<font></font>
        console.error(error);<font></font>
      });<font></font>
  }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1535篇《如何取消对componentWillUnmount的提取》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyStafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了接受的解决方案中的cancellable promise hooks示例之外，拥有一个</font></font><code>useAsyncCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装请求回调并返回cancellable promise </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">钩子</font><font style="vertical-align: inherit;">也很方便</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">想法是一样的，但是钩子就像常规的钩子一样工作</font></font><code>useCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个实现示例：</font></font></p>

<pre><code>function useAsyncCallback&lt;T, U extends (...args: any[]) =&gt; Promise&lt;T&gt;&gt;(callback: U, dependencies: any[]) {<font></font>
  const isMounted = useRef(true)<font></font>
<font></font>
  useEffect(() =&gt; {<font></font>
    return () =&gt; {<font></font>
      isMounted.current = false<font></font>
    }<font></font>
  }, [])<font></font>
<font></font>
  const cb = useCallback(callback, dependencies)<font></font>
<font></font>
  const cancellableCallback = useCallback(<font></font>
    (...args: any[]) =&gt;<font></font>
      new Promise&lt;T&gt;((resolve, reject) =&gt; {<font></font>
        cb(...args).then(<font></font>
          value =&gt; (isMounted.current ? resolve(value) : reject({ isCanceled: true })),<font></font>
          error =&gt; (isMounted.current ? reject(error) : reject({ isCanceled: true }))<font></font>
        )<font></font>
      }),<font></font>
    [cb]<font></font>
  )<font></font>
<font></font>
  return cancellableCallback<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我需要“取消所有订阅并异步”时，我通常向componentWillUnmount中的redux分发一些内容，以通知所有其他订阅者，并在必要时向服务器发送一个有关取消的其他请求 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
