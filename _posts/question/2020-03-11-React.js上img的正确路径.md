---
layout: question
title:  React.js上img的正确路径
date:   2020-03-11T15:12:29.000Z
description: 我的React项目中的图片有问题。的确，我一直认为src属性的相对路径是建立在文件架构上的这是我的文件架构：components    file...
img: 
author: 小卤蛋宝儿
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的React项目中的图片有问题。</font><font style="vertical-align: inherit;">的确，我一直认为src属性的相对路径是建立在文件架构上的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的文件架构：</font></font></p>

<pre><code>components<font></font>
    file1.jsx<font></font>
    file2.jsx<font></font>
    file3.jsx<font></font>
container<font></font>
img<font></font>
js <font></font>
... <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我意识到路径是建立在URL上的。</font><font style="vertical-align: inherit;">在我的组件之一（例如到file1.jsx中）中，我有以下内容：</font></font></p>

<pre><code>localhost/details/2<font></font>
&lt;img src="../img/myImage.png" /&gt; -&gt; works<font></font>
<font></font>
localhost/details/2/id<font></font>
&lt;img src="../img/myImage.png" /&gt; -&gt; doesn't work, images are not displayed<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决这个问题？</font><font style="vertical-align: inherit;">我希望在react-router处理的任何形式的路由中，所有图像都可以使用相同的路径显示。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第827篇《React.js上img的正确路径》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将徽标放在您的公共文件夹中，例如public / img / logo.png下，然后将公共文件夹称为％PUBLIC_URL％：</font></font></p>

<pre><code>&lt;img src="%PUBLIC_URL%/img/logo.png"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的％PUBLIC_URL％的使用将</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构建期间</font><font style="vertical-align: inherit;">替换为</font><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">的URL </font><font style="vertical-align: inherit;">。</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML只能引用文件夹中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与“ /img/logo.png”或“ logo.png”不同，“％PUBLIC_URL％/ img / logo.png”将与客户端路由和非根公共URL一起正常工作。</font><font style="vertical-align: inherit;">了解如何通过运行来配置非根公共URL </font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一位朋友向我展示了如何执行以下操作：</font></font></p>

<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当请求图像的文件（例如“ example.js”）在文件夹树结构中与文件夹“ images”处于同一级别时，“ ./”起作用。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用create-react-app创建项目，则可以访问您的公用文件夹。</font><font style="vertical-align: inherit;">因此，您需要将</font></font><code>image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到公用文件夹中。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公众/图片/</font></font></p>
</blockquote>

<p><code>&lt;img src="/images/logo.png" /&gt;</code> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I would recommend to use traditional relative path. You can use like this below in image. We can put anything in this <code>public</code> folder and can target this folder to access <code>images</code> , <code>videos</code> and so on... This setup is done by react itself.
For this keep your images in public folder. Like so...</p>

<p><a href="https://i.stack.imgur.com/k5fI5.png" rel="noreferrer"><img src="https://i.stack.imgur.com/k5fI5.png" alt="在此处输入图片说明"></a></p>

<p>And than in your jsx.</p>

<pre><code>&lt;img src="images/pitbull-mark.png" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC58560390</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您使用的是相对网址，相对于当前网址，而不是文件系统。</font><font style="vertical-align: inherit;">您可以使用绝对网址来解决此问题</font></font></p>

<p><code>&lt;img src ="http://localhost:3000/details/img/myImage.png" /&gt;
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不适用于您部署到www.my-domain.bike或任何其他站点的情况。</font><font style="vertical-align: inherit;">最好使用相对于网站根目录的网址</font></font></p>

<p><code>&lt;img src="/details/img/myImage.png" /&gt;
</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
