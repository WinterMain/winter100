---
layout: question
title:  React JS index.js文件如何联系index.html以获取ID引用？\[重复\]
date:   2020-03-16T07:22:36.000Z
description:                                                                          ...
img: 
author: Eva西里蛋蛋
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/42438171/create-react-app-index-html-and-index-js-connection" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建React App index.html和index.js连接</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （1个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2019-08-24 21：43：59Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近开始做出反应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<font></font>
    &lt;link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"&gt;<font></font>
    &lt;title&gt;React App&lt;/title&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="root"&gt;&lt;/div&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></p>

<pre><code>import React from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
import App from './App';<font></font>
import './index.css';<font></font>
<font></font>
ReactDOM.render(<font></font>
  &lt;App /&gt;,<font></font>
  document.getElementById('root')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的疑问是我没有</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中的任何脚本标签中</font><font style="vertical-align: inherit;">提及</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是它如何引用</font></font><code>root</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">div元素</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我想知道它工作正常。</font><font style="vertical-align: inherit;">请给我解释一下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经运行了这些命令来创建应用程序</font></font></p>

<pre><code>npm install -g create-react-app<font></font>
create-react-app hello-world<font></font>
cd hello-world<font></font>
npm start<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
