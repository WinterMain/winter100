---
layout: question
title:  用React漂亮地打印JSON
date:   2020-03-16T02:03:22.000Z
description: 我正在使用ReactJS，我的应用程序的一部分需要漂亮的打印JSON。  我得到一些JSON，如：{ "foo"  1, "bar"  2 }，如果我...
img: 
author: GreenNear
category: question
answer: 1
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用ReactJS，我的应用程序的一部分需要漂亮的打印JSON。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到一些JSON，如：</font></font><code>{ "foo": 1, "bar": 2 }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果我跑，通过</font></font><code>JSON.stringify(obj, null, 4)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器控制台，它漂亮的图案，但是当我在使用它的反应片段：</font></font></p>

<pre><code>render: function() {<font></font>
  var json = this.getStateFromFlux().json;<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;JsonSubmitter onSubmit={this.onSubmit} /&gt;<font></font>
      { JSON.stringify(json, null, 2) }<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它呈现像的JSON格式</font></font><code>"{ \"foo\" : 2, \"bar\": 2}\n"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使这些字符正确解释？</font><font style="vertical-align: inherit;">{</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1653篇《用React漂亮地打印JSON》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint-override"><code>const getJsonIndented = (obj) =&gt; JSON.stringify(newObj, null, 4).replace(/["{[,\}\]]/g, "")<font></font>
<font></font>
const JSONDisplayer = ({children}) =&gt; (<font></font>
    &lt;div&gt;<font></font>
        &lt;pre&gt;{getJsonIndented(children)}&lt;/pre&gt;<font></font>
    &lt;/div&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以轻松使用它： </font></font></p>

<pre class="lang-js prettyprint-override"><code>const Demo = (props) =&gt; {<font></font>
   ....<font></font>
   return &lt;JSONDisplayer&gt;{someObj}&lt;JSONDisplayer&gt;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
