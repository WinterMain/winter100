---
layout: question
title:  使用React Router V4以编程方式导航
date:   2020-03-10T01:31:50.000Z
description: 我刚刚react-router从v3 替换为v4。但是我不确定如何以编程方式在的成员函数中进行导航Component。即在handleClick()功能...
img: 
author: LEY小卤蛋
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从v3 </font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">为v4。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是我不确定如何以编程方式在的成员函数中进行导航</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即在</font></font><code>handleClick()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能上我想导航到</font></font><code>/path/some/where</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理一些数据后。</font><font style="vertical-align: inherit;">我曾经通过以下方式做到这一点：</font></font></p>

<pre class="lang-js prettyprint-override"><code>import { browserHistory } from 'react-router'<font></font>
browserHistory.push('/path/some/where')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我在v4中找不到这样的接口。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如何使用v4导航？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成它的最简单方法是：</font></font></p>

<p><code>this.props.history.push("/new/url")</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"></font><code>history</code> <code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不可用，则</font><font style="vertical-align: inherit;">可能需要将“ </font><font style="vertical-align: inherit;">父对象”组件</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">给要调用该动作的组件。</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
