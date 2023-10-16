---
layout: question
title:  使用React内联样式设置backgroundImage
date:   2020-03-10T02:46:58.000Z
description: 我正在尝试访问静态图像以backgroundImage在React 的内联属性中使用。不幸的是，我已经干了如何做到这一点。通常，我认为您只是这样做如下...
img: 
author: 阿飞Pro
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试访问静态图像以</font></font><code>backgroundImage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React </font><font style="vertical-align: inherit;">的内联</font><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不幸的是，我已经干了如何做到这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，我认为您只是这样做如下：</font></font></p>

<pre><code>import Background from '../images/background_image.png';<font></font>
<font></font>
var sectionStyle = {<font></font>
  width: "100%",<font></font>
  height: "400px",<font></font>
  backgroundImage: "url(" + { Background } + ")"<font></font>
};<font></font>
<font></font>
class Section extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;section style={ sectionStyle }&gt;<font></font>
      &lt;/section&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">有人可以解释两者之间的区别吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p><code>&lt;img src={ Background } /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 效果很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第446篇《使用React内联样式设置backgroundImage》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以尝试我们img</font></font></p>

<pre><code>backgroundImage: url(process.env.PUBLIC_URL + "/      assets/image_location")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小哥</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用</font></font><code>require()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">将图像带入组件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><code>&lt;div style={{ backgroundImage: `url(require("images/img.svg"))` }}&gt;</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意两组大括号</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">第一组用于进入反应模式，第二组用于表示对象</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三千曜米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Template Literals（用反引号括起来的`...`）代替</font></font><code>backgroundImage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此类属性：</font></font></p>

<pre><code>backgroundImage: `url(${Background})`
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>style={{ backgroundImage: `url(require("path/image.ext"))` }}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ES5-</font></font></p>

<pre><code>backgroundImage: "url(" + Background + ")"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ES6-</font></font></p>

<pre><code>backgroundImage: `url(${Background})`
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从本质上讲，在为backgroundImage属性添加值的同时删除不必要的花括号将起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">backgroundImage属性内的花括号错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能您正在将webpack与图像文件加载器一起使用，因此Background应该已经是一个String了：
</font></font><code>backgroundImage: "url(" + Background + ")"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用以下ES6字符串模板来达到相同的效果：</font></font></p>

<pre><code>backgroundImage: `url(${Background})`
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
