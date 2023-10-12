---
layout: question
title:  Redux \`connect decorator中的“ \`”（符号处）是什么？
date:   2020-03-10T14:21:38.000Z
description: 我正在用React学习Redux，偶然发现了这段代码。我不确定它是否特定于Redux，但是我在其中一个示例中看到了以下代码片段。\`connect((s...
img: 
author: 小卤蛋小小
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用React学习Redux，偶然发现了这段代码。</font><font style="vertical-align: inherit;">我不确定它是否</font><font style="vertical-align: inherit;">特定于</font></font><a href="https://rackt.github.io/redux/index.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我在其中一个示例中看到了以下代码片段。</font></font></p>

<pre><code>@connect((state) =&gt; {<font></font>
  return {<font></font>
    key: state.a.b<font></font>
  };<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然的功能</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单明了，但是我</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前</font><font style="vertical-align: inherit;">并不了解</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果我没有记错的话，它甚至不是JavaScript运算符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以解释一下这是什么，为什么使用它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，</font></font><a href="https://github.com/rackt/react-redux"><code>react-redux</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">的一部分</font><font style="vertical-align: inherit;">用于将React组件连接到Redux存储。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第516篇《Redux \`connect decorator中的“ \`”（符号处）是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很重要！</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些道具称为状态道具，它们与普通道具不同，即使您不使用这些道具，对组件状态道具的任何更改也会一次又一次触发组件渲染方法，因此出于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能原因，请</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试仅绑定到组件在组件内部需要的状态道具，如果使用子道具，则仅绑定这些道具。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：假设您的组件内部仅需要两个道具：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一条消息  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户名</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要这样</font></font></strong> </p>

<pre><code>@connect(state =&gt; ({ <font></font>
   user: state.user,<font></font>
   messages: state.messages<font></font>
}))<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做这个</font></font></strong> </p>

<pre><code>@connect(state =&gt; ({ <font></font>
   user_name: state.user.name,<font></font>
   last_message: state.messages[state.messages.length-1]<font></font>
}))<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
