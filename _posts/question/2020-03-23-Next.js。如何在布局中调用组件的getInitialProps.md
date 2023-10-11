---
layout: question
title:  Next.js。如何在布局中调用组件的getInitialProps
date:   2020-03-23T07:50:09.000Z
description: 我将标题组件添加到布局中，但我不想为要使用getInitialProps的每个页面将道具从布局发送到标题layout.js  import Hea...
img: 
author: 凯西里
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将标题组件添加到布局中，但我不想为要使用getInitialProps的每个页面将道具从布局发送到标题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">layout.js  </font></font></p>

<pre><code>import Header from './header'<font></font>
export default ({title}) =&gt; (<font></font>
      &lt;div&gt;<font></font>
        &lt;Head&gt;<font></font>
          &lt;title&gt;{ title }&lt;/title&gt;<font></font>
          &lt;meta charSet='utf-8' /&gt;<font></font>
        &lt;/Head&gt;<font></font>
<font></font>
        &lt;Header /&gt;<font></font>
<font></font>
        {children}<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">header.js</font></font></p>

<pre><code>export default class Header extends Component {<font></font>
    static async getInitialProps () {<font></font>
      const headerResponse = await fetch(someapi)<font></font>
      return headerResponse;<font></font>
    }<font></font>
    render() {<font></font>
        console.log({props: this.props})<font></font>
        return (<font></font>
            &lt;div&gt;&lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台：道具：{}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js</font></font></p>

<pre><code>  import Layout from './layout'<font></font>
  import Page from './page'<font></font>
  import axios from 'axios'<font></font>
<font></font>
const app =  (props) =&gt; (<font></font>
  &lt;Layout &gt;<font></font>
    &lt;Page {...props}/&gt;<font></font>
  &lt;/Layout&gt;<font></font>
)<font></font>
<font></font>
app.getInitialProps = async function(){<font></font>
  try {<font></font>
    const response = await axios.get(someUrl)<font></font>
    return response.data;<font></font>
<font></font>
  } catch(e) {<font></font>
    throw new Error(e);<font></font>
  }<font></font>
}<font></font>
<font></font>
export default app<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在Header组件中使用get initial props，但不触发</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2945篇《Next.js。如何在布局中调用组件的getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.11.30</span>
          </div>
          <div class="discuss-comment"><h2>getInitialProps仅支持在page页面中使用，不可以在组件中使用</h2></div>
        </div></div>
    {% endraw %}
  </div>
<div>
