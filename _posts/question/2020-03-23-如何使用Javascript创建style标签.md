---
layout: question
title:  如何使用Javascript创建<style>标签？
date:   2020-03-23T02:18:32.000Z
description: 我正在寻找一种<style>使用JavaScript 将标记插入HTML页面的方法。到目前为止，我发现的最好方法是：var divNode = d...
img: 
author: 乐
category: question
answer: 3
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找一种</font></font><code>&lt;style&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript </font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">标记插入HTML页面的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我发现的最好方法是：</font></font></p>

<pre><code>var divNode = document.createElement("div");<font></font>
divNode.innerHTML = "&lt;br&gt;&lt;style&gt;h1 { background: red; }&lt;/style&gt;";<font></font>
document.body.appendChild(divNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在Firefox，Opera和Internet Explorer中有效，但在Google Chrome中不起作用。</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE的前面</font><font style="vertical-align: inherit;">也有点难看</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道创建</font></font><code>&lt;style&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的方法吗</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Chrome吗？</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或许</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我应该避免的非标准事情</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三种运行良好的浏览器都很棒，到底谁在使用Chrome？</font></font></p></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2638篇《如何使用Javascript创建<style>标签？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaDavaid</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切都很好，但是要使styleNode.cssText在由Javascipt创建的节点的IE6中工作，需要在设置cssText之前将节点附加到文档中；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步的信息@ </font></font><a href="http://msdn.microsoft.com/en-us/library/ms533698%28VS.85%29.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://msdn.microsoft.com/en-us/library/ms533698%28VS.85%29.aspx</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你写了：</font></font></p>

<pre><code>var divNode = document.createElement("div");<font></font>
divNode.innerHTML = "&lt;br&gt;&lt;style&gt;h1 { background: red; }&lt;/style&gt;";<font></font>
document.body.appendChild(divNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不呢？</font></font></p>

<pre><code>var styleNode = document.createElement("style");<font></font>
document.head.appendChild(styleNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以轻松将CSS规则附加到HTML代码：</font></font></p>

<pre><code>styleNode.innerHTML = "h1 { background: red; }\n";<font></font>
styleNode.innerHTML += "h2 { background: green; }\n";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...或直接到DOM：</font></font></p>

<pre><code>styleNode.sheet.insertRule("h1 { background: red; }");<font></font>
styleNode.sheet.insertRule("h2 { background: green; }");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这可以在除旧版浏览器之外的所有地方使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对可以在</font><strong><font style="vertical-align: inherit;">2019年</font></strong><font style="vertical-align: inherit;">在Chrome </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中使用。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidStafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个适用于所有浏览器的示例：</font></font></p>

<pre><code>var ss = document.createElement("link");<font></font>
ss.type = "text/css";<font></font>
ss.rel = "stylesheet";<font></font>
ss.href = "style.css";<font></font>
document.getElementsByTagName("head")[0].appendChild(ss);<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
