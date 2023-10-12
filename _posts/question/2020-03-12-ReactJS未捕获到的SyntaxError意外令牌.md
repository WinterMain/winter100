---
layout: question
title:  ReactJS：“未捕获到的SyntaxError：意外令牌<”
date:   2020-03-12T07:14:29.000Z
description: 我正在尝试开始在ReactJS中构建网站。但是，当我尝试将JS放在单独的文件中时，我开始收到此错误：“ Uncaught SyntaxError：Unex...
img: 
author: 逆天樱
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试开始在ReactJS中构建网站。</font><font style="vertical-align: inherit;">但是，当我尝试将JS放在单独的文件中时，我开始收到此错误：“ Uncaught SyntaxError：Unexpected token &lt;”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试添加</font></font><code>/** @jsx React.DOM */</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到JS文件的顶部，但没有解决任何问题。</font><font style="vertical-align: inherit;">以下是HTML和JS文件。</font><font style="vertical-align: inherit;">关于出什么问题有什么想法吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;title&gt;Page&lt;/title&gt;<font></font>
    &lt;script src="http://fb.me/react-0.12.2.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="http://fb.me/JSXTransformer-0.12.2.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="http://code.jquery.com/jquery-1.10.0.min.js"&gt; &lt;/script&gt;<font></font>
    &lt;script src="./lander.js"&gt; &lt;/script&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="content"&gt;&lt;/div&gt;<font></font>
    &lt;script type="text/jsx"&gt;<font></font>
        React.render(<font></font>
            &lt;Lander /&gt;,<font></font>
            document.getElementById('content')<font></font>
        );<font></font>
    &lt;/script&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS</font></font></strong></p>

<pre><code>/**<font></font>
 * @jsx React.DOM<font></font>
 */<font></font>
var Lander = React.createClass({<font></font>
    render: function () {<font></font>
        var info = "Lorem ipsum dolor sit amet... ";<font></font>
        return(<font></font>
            &lt;div&gt;<font></font>
                &lt;div className="info"&gt;{info}&lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我意识到我需要添加</font></font><code>type="text/jsx"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到包括我的着陆器代码的脚本标签。</font><font style="vertical-align: inherit;">但是，添加并重新加载后，我得到此警告</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“您正在使用的浏览器JSX变压器一定要预编译JSX生产- </font></font><a href="http://facebook.github.io/react/docs/tooling-integration.html#jsx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://facebook.github.io/react/docs/tooling-integration.html#jsx</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随后出现此错误：</font></font></p>

<p>"XMLHttpRequest cannot load file:///Users/.../lander.js. Cross origin requests are only supported for protocol schemes: http, data, chrome-extension, https, chrome-extension-resource."</p>

<p>it seems like there is something else that I need to do in order to get in browser jsx transform working, but I'm not sure what it is.</p>

<p>EDIT: OOOOH do I need to host it using MAMP or something?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1040篇《ReactJS：“未捕获到的SyntaxError：意外令牌<”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到这样的错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法错误：嵌入：意外令牌（107：9）105</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是您缺少大括号</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您输入的代码正确无误。</font><font style="vertical-align: inherit;">JSX代码需要编译为JS：</font></font></p>

<p><a href="http://facebook.github.io/react/jsx-compiler.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://facebook.github.io/react/jsx-compiler.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>type="text/babel"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为脚本标签的属性，如下所示：</font></font></p>

<pre><code>&lt;script type="text/babel" src="./lander.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSTransform已</font></font><a href="https://facebook.github.io/react/blog/2015/06/12/deprecating-jstransform-and-react-tools.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弃用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请改用babel。</font></font></p>

<pre><code>&lt;script type="text/babel" src="./lander.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新-使用此代替：</font></font></p>

<pre><code>&lt;script type="text/babel" src="./lander.js"&gt;&lt;/script&gt;
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>type="text/jsx"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>script</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的属性，该</font><font style="vertical-align: inherit;">标签用于包含必须由JSX Transformer转换的JavaScript文件，如下所示：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;script type="text/jsx" src="./lander.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后你可以使用甲基苯丙胺或一些其他服务托管的网页在本地主机上，这样所有的包裹的工作，为讨论</font></font><a href="https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢各位的帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>type="text/babel"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到包含.jsx文件的脚本并添加以下内容：   </font></font><code>&lt;script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"&gt;&lt;/script&gt;</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
