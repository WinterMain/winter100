---
layout: question
title:  如何在React的render（）中包含一个Font Awesome图标
date:   2020-03-12T12:11:27.000Z
description: 每当我尝试在React的中使用Font Awesome图标时render()，尽管它可以在普通HTML中运行，但它不会显示在结果网页上。render ...
img: 
author: 乐米亚
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我尝试在React的中使用Font Awesome图标时</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，尽管它可以在普通HTML中运行，但它不会显示在结果网页上。</font></font></p>

<pre><code>render: function() {<font></font>
    return &lt;div&gt;&lt;i class="fa fa-spinner fa-spin"&gt;no spinner but why&lt;/i&gt;&lt;/div&gt;;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个实时示例：</font><a href="http://jsfiddle.net/pLWS3/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/pLWS3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/pLWS3/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里错了？ </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1297篇《如何在React的render（）中包含一个Font Awesome图标》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我一直在关注</font></font><code>react-fontawesome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包</font><font style="vertical-align: inherit;">的文档</font><font style="vertical-align: inherit;">，但是在将图标设置到库中时，他们不清楚如何调用图标</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我在做什么：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js文件</font></font></p>
</blockquote>

<pre><code>import {faCoffee} from "@fortawesome/pro-light-svg-icons";<font></font>
library.add(faSearch, faFileSearch, faCoffee);<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件文件</font></font></p>
</blockquote>

<pre><code>&lt;FontAwesomeIcon icon={"coffee"} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我收到这个错误</font></font></p>

<p><a href="https://i.stack.imgur.com/ZjNqf.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ZjNqf.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后我在传递图标prop时添加了别名：</font></font></p>

<pre><code>&lt;FontAwesomeIcon icon={["fal", "coffee"]} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它正在工作，您可以在icon.js文件中找到前缀值，在我的情况下是：faCoffee.js </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结帐</font></font><a href="http://gorangajic.github.io/react-icons/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应图标</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很漂亮并且工作得很好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我经历过这种情况。</font><font style="vertical-align: inherit;">我需要应在生产中正常运行的react / redux站点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是有一个“严格模式”；</font><font style="vertical-align: inherit;">不应该用这些命令吃午餐。</font></font></p>

<pre><code>yarn global add serve<font></font>
serve -s build<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该只使用build / index.html文件。</font><font style="vertical-align: inherit;">当我将fontawesome与npm font-awesome一起使用时，它在开发模式下工作，但在“严格模式”下工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的解决方案：</font></font></p>

<pre><code>public/css/font-awesome.min.css<font></font>
public/fonts/font-awesome.eot <font></font>
*** other different types of files(4) ***<font></font>
*** I copied these files for node_module/font-awesome ***<font></font>
*** after copied then can delete the font-awesome from package.json ***<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在public / index.html中</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="%PUBLIC_URL%/css/font-awesome.min.css"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成上述所有步骤后，fontawesome的效果很好！！！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React使用</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，例如DOM。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用开发版本，并查看控制台，则会出现警告。</font><font style="vertical-align: inherit;">您可以在jsfiddle上看到它。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：未知的DOM属性类。</font><font style="vertical-align: inherit;">您是说className吗？</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
