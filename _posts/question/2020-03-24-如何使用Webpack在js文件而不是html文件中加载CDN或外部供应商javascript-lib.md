---
layout: question
title:  如何使用Webpack在js文件而不是html文件中加载CDN或外部供应商javascript lib
date:   2020-03-24T09:26:14.000Z
description: 我正在使用React Starter Kit进行客户端编程。它使用react和webpack。没有index.html或任何要编辑的html，所有js文件...
img: 
author: 逆天小哥蛋蛋
category: question
answer: 4
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React Starter Kit进行客户端编程。</font><font style="vertical-align: inherit;">它使用react和webpack。</font><font style="vertical-align: inherit;">没有index.html或任何要编辑的html，所有js文件。</font><font style="vertical-align: inherit;">我的问题是，是否要从云中加载供应商js库，该怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在html文件中这样做很容易。 </font></font><code>&lt;script src="https://forio.com/tools/js-libs/1.5.0/epicenter.min.js"&gt;&lt;/script&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在js文件中，它仅使用npm安装的软件包。</font><font style="vertical-align: inherit;">如何导入没有html文件的上述lib？</font><font style="vertical-align: inherit;">我尝试导入并要求，它们仅适用于本地文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新10/21/15到目前为止，我尝试了两个方向，但都不是理想的选择。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@minheq是的，有一个用于react入门工具包的html文件。</font><font style="vertical-align: inherit;">它是src / components / Html下的html.js。</font><font style="vertical-align: inherit;">我可以像这样放置云库及其所有依赖项：</font></font></li>
</ol>

<pre class="lang-html prettyprint-override"><code>        &lt;div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} /&gt;<font></font>
        &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script src="https://forio.com/tools/js-libs/1.5.0/epicenter.min.js"&gt;&lt;/script&gt;<font></font>
        &lt;script src="/app.js"&gt;&lt;/script&gt;<font></font>
        &lt;script dangerouslySetInnerHTML={this.trackingCode()} /&gt;<font></font>
    &lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好消息是它有效，我不需要在js文件中进行任何其他操作，无需导入或要求。</font><font style="vertical-align: inherit;">但是，现在我以不同的方式加载了两个jQuery库。</font><font style="vertical-align: inherit;">一个在这里，另一个通过npm和webpack。</font><font style="vertical-align: inherit;">我不知道以后会不会给我带来麻烦。</font><font style="vertical-align: inherit;">如果我由于服务器端负载而在浏览器窗口中键入无主路径，则我使用的反应路由会给我“未定义的变量”错误。</font><font style="vertical-align: inherit;">所以这个解决方案不是很好。</font></font></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack外部功能。</font><font style="vertical-align: inherit;">记录为：</font></font><a href="https://webpack.github.io/docs/library-and-externals.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">link</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">“当您想将现有的API导入捆绑软件时，也可以对应用程序使用外部选项。即，您想使用CDN中的jquery（单独的标签），仍然希望在捆绑软件中使用require（“ jquery”）。将其指定为外部：{外部：{jquery：“ jQuery”}}。“ </font><font style="vertical-align: inherit;">但是，我发现一些地方的文档对于如何准确地做到这一点都很挑剔。</font><font style="vertical-align: inherit;">到目前为止，我还不知道如何使用它来替换</font></font><code>&lt;script src="https://forio.com/tools/js-libs/1.5.0/epicenter.min.js"&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html。</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3555篇《如何使用Webpack在js文件而不是html文件中加载CDN或外部供应商javascript lib》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>externals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不打算让您这样做。</font><font style="vertical-align: inherit;">这意味着“不要将这个资源编译到最终的捆绑包中，因为我会自己将其包括在内”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要的是脚本加载器实现，例如</font></font><a href="https://github.com/ded/script.js/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">script.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我还编写了一个简单的应用程序来比较不同的脚本加载器实现：</font></font><a href="https://tomchentw.github.io/xrossref/#ZGVkL3NjcmlwdC5qcywgc3lzdGVtanMvc3lzdGVtanMsIFNsZXhBeHRvbi95ZXBub3BlLmpzLCBnZXRpZnkvTEFCanMsIHdlc3NtYW4vZGVmZXIuanM="><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">link</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack的</font></font><a href="http://webpack.github.io/docs/library-and-externals.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部组件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><code>externals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许您为库指定依赖项，这些依赖项不会被webpack解析，而是成为输出的依赖项。</font><font style="vertical-align: inherit;">这意味着它们是在运行时从环境中导入的。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在JS中创建脚本标签，如下所示：</font></font></p>

<pre><code>$("body").append($("&lt;script src="https://forio.com/tools/js-libs/1.5.0/epicenter.min.js"&gt;&lt;/script&gt;"))
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">肯定有一个html文件可用于附加了js捆绑包的用户。</font><font style="vertical-align: inherit;">可能您可以将script标签附加到该html文件中</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
