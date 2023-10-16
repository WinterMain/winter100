---
layout: question
title:  Sass与CSS模块和Webpack
date:   2020-03-19T03:38:26.000Z
description: 我已经使用Webpack，Sass和CSS模块构建项目已有一段时间了。通常，在我的.scss文件中，我定义一个类，如： local(.button) ...
img: 
author: Green达蒙Harry
category: question
answer: 0
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用Webpack，Sass和CSS模块构建项目已有一段时间了。</font><font style="vertical-align: inherit;">通常，在我的</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，我定义一个类，如：</font></font></p>

<pre><code>:local(.button) {<font></font>
    color: white;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的React组件中，在</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中，我需要以下样式：</font></font></p>

<pre><code>render = () =&gt; {<font></font>
    const styles = require('./MyStyles.scss');<font></font>
    &lt;div className={ styles.button } /&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">世界一切都很好。</font><font style="vertical-align: inherit;">一切正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我阅读了</font></font><a href="https://github.com/css-modules/css-modules"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS Modules页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，发现没有一个选择器被我的包围</font></font><code>:local()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而且它们导入的样式如下：</font></font></p>

<pre><code>import styles from './MyStyles.scss';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且我想：“哇，看起来好多了，更容易看到它的导入位置。而且，我很想不使用它</font></font><code>:local()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而默认</font><font style="vertical-align: inherit;">将它们放在</font><font style="vertical-align: inherit;">本地。” </font><font style="vertical-align: inherit;">所以我尝试了一下，立即遇到了几个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）`从'./MyStyles.scss'导入样式；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我在我的React文件上使用ESLint，所以我立即抛出一个错误，该错误</font></font><code>MyStyles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有默认导出，通常这是有意义的，但是CSS模块页面指出：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从JS模块导入CSS模块时，它将导出一个对象，该对象具有从本地名称到全局名称的所有映射。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我自然希望样式表的默认导出也成为他们引用的对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）我试过 </font></font><code>import { button } from './MyStyles.scss';</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以通过linting，但</font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记录为undefined。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）如果我恢复</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入样式</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法，则未指定的内容均未</font></font><code>:local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参考，我的webpack加载器（我还包括</font></font><a href="https://www.npmjs.com/package/node-neat"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node-Neat</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://www.npmjs.com/package/node-bourbon"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node-Bourbon这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个很棒的库）：</font></font></p>

<pre><code>{ test: /.(scss|css)$/, loader: 'style!css?sourceMap&amp;localIdentName=[local]___[hash:base64:5]!resolve-url!sass?outputStyle=expanded&amp;sourceMap&amp;includePaths[]=' + encodeURIComponent(require('node-bourbon').includePaths) +<font></font>
'&amp;includePaths[]=' + encodeURIComponent(require('node-neat').includePaths[1]) + '&amp;includePaths[]=' + path.resolve(__dirname, '..', 'src/client/') }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有这些之后，我的问题是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）当将CSS模块与Sass一起使用时，我仅限于使用</font></font><code>:local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>:global</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）由于我使用的是webpack，这是否也意味着我只能使用</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己的样式？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2306篇《Sass与CSS模块和Webpack》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
