---
layout: question
title:  全新安装的create-next-app后无效的href传递给路由器错误
date:   2020-03-24T06:31:20.000Z
description: 使用我的本地计算机上安装nextjs应用程序后，create-next-app在控制台中出现此错误Invalid href passed to route...
img: 
author: 梅卡卡西Eva
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用我的本地计算机上安装nextjs应用程序后，</font></font><code>create-next-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中出现此错误</font></font><code>Invalid href passed to router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道如何解决吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性而不是</font><font style="vertical-align: inherit;">组件的</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，</font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这无济于事。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nextjs</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法与外部链接一起使用，这就是为什么控制台抛出错误的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我删除所有外部链接，而添加内部链接时，一切正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除协议</font></font><code>http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>https</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从外部URL修复此问题</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></strong>
<code>https://stackoverflow.com/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是</font></font><code>//stackoverflow.com/</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须设置参数 </font></font><code>prefetch={false}</code></p>

<pre><code>&lt;Link key={index} href={value} prefetch={false}&gt;<font></font>
                &lt;a target={"_blank"}&gt;<font></font>
                    {icon}<font></font>
                &lt;/a&gt;<font></font>
            &lt;/Link&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
