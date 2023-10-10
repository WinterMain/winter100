---
layout: question
title:  如何在React Universal中呈现从REST服务接收的数据？（Next.js）
date:   2020-03-26T08:03:11.000Z
description: 我想使用我的React Universal（与Next.js）应用程序中的REST服务调用接收数据fetch()，然后将结果呈现到JSX中，如下所示：...
img: 
author: 米亚
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用我的React Universal（与Next.js）应用程序中的REST服务调用接收数据</font></font><code>fetch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后将结果呈现到JSX中，如下所示：</font></font></p>

<pre><code>class VideoPage extends Component {<font></font>
  componentWillMount() {<font></font>
    console.log('componentWillMount');<font></font>
<font></font>
    fetch(path, {<font></font>
      method: 'get',<font></font>
    })<font></font>
      .then(response =&gt;<font></font>
        response.json().then(data =&gt; {<font></font>
          this.setState({<font></font>
            video: data,<font></font>
          });<font></font>
          console.log('received');<font></font>
        })<font></font>
      );<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    console.log('render');<font></font>
    console.log(this.state);<font></font>
    if (this.state &amp;&amp; this.state.video) {<font></font>
      return (<font></font>
        &lt;div&gt;<font></font>
          {this.state.video.title}<font></font>
        &lt;/div&gt;<font></font>
      );<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
export default VideoPage;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，输出是这样的：</font></font></p>

<pre><code>componentWillMount<font></font>
render<font></font>
null<font></font>
received<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这之所以有意义，是因为对fetch的调用是异步的，并且</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在REST服务的调用完成之前完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在客户端应用程序中，这不会有问题，因为将调用状态更改</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后更新视图，但是在通用应用程序中，尤其是在客户端上关闭JavaScript的情况下，这是不可能的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法同步或延迟调用服务器</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以添加</font></font><code>static async getInitialProps () {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以将数据加载到props中，然后再渲染页面组件。</font></font></p>

<p>More info here: <a href="https://github.com/zeit/next.js/blob/master/readme.md#fetching-data-and-component-lifecycle" rel="nofollow noreferrer">https://github.com/zeit/next.js/blob/master/readme.md#fetching-data-and-component-lifecycle</a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
