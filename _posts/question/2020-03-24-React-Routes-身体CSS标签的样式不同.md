---
layout: question
title:  React Routes-身体CSS标签的样式不同
date:   2020-03-24T10:13:59.000Z
description: 我的React应用程序上有两条路线：/a和/b。对于/ a，我希望bodycss标记具有一个background-color  red;。对于/ ...
img: 
author: 村村小小凯
category: question
answer: 3
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的React应用程序上有两条路线：</font></font><code>/a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>/b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ a</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我希望</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css标记具有一个</font></font><strong><code>background-color: red;</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ b</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我希望</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css标记具有一个</font></font><strong><code>background-color: blue;</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个组件</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都位于不同的.JSX文件中，并且都导入自己的</font></font><code>main.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，这些文件定义了各自的</font></font><code>body</code> <code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于将整个应用程序编译到</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记中，因此似乎存在冲突，并且</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两条路径仅尊重</font><font style="vertical-align: inherit;">其中一个</font><font style="vertical-align: inherit;">标记。</font></font></p>

<pre><code>  &lt;body&gt;<font></font>
    &lt;script src="bundle.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
  &lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它在</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签上而不只是在容器div上的原因是，</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在页面边界之外滚动时（在Mac和iOS上的反弹效果）</font><font style="vertical-align: inherit;">，我希望</font><font style="vertical-align: inherit;">可见。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3629篇《React Routes-身体CSS标签的样式不同》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加此代码</font></font></p>

<blockquote>
<pre><code>componentDidMount(){<font></font>
    document.body.style.backgroundColor = "white"<font></font>
}<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意QoP所说的，但是作为补充，您还应该确保使用componentWillUnmount将其设置回该组件之外的任何位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：如果通常在整个应用程序中都保留text-align，但是对于一个组件，您希望它居中，但是在组件需要返回到左边之后，您将执行以下操作：</font></font></p>

<pre><code>componentDidMount() {<font></font>
    document.body.style.textAlign = "center"<font></font>
  }<font></font>
<font></font>
  componentWillUnmount(){<font></font>
    document.body.style.textAlign = "left"<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以发生这种情况，是因为当您在没有CSS模块的组件中导入样式时，这些样式是全局的，因此您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主体</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式被定义了两次（您可以在</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记中</font><font style="vertical-align: inherit;">看到所有样式</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><a href="https://i.stack.imgur.com/R38fH.png" rel="noreferrer"><img src="https://i.stack.imgur.com/R38fH.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过在组件componentDidMount（）方法中设置背景色来解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></p>

<pre><code>componentDidMount(){<font></font>
    document.body.style.backgroundColor = "red"// Set the style<font></font>
    document.body.className="body-component-a" // Or set the class<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
