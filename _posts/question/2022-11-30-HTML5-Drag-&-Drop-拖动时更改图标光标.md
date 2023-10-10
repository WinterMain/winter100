---
layout: question
title:  HTML5 Drag & Drop 拖动时更改图标/光标
date:   2022-11-30T09:54:54.000Z
description: 我想知道如何在拖动 (dragover/dragenter) 图标/光标期间更改，例如当我 dragenter 拒绝或允许部分时。当然，我可以用光标移动绝...
img: 
author: 仲羽
category: question
answer: 5
tags: javascript JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道如何在拖动 (dragover/dragenter) 图标/光标期间更改，例如当我 dragenter 拒绝或允许部分时。</font><font style="vertical-align: inherit;">当然，我可以用光标移动绝对定位的 DOM 的一部分，但我对原生 HTML5 解决方案感兴趣。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><code>preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要继续</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标元素</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带的这一行</font><font style="vertical-align: inherit;">终于为我解决了</font></font></p>
<pre class="default s-code-block"><code class="hljs language-coffeescript">document.addEventListener(<span class="hljs-string">"dragover"</span>, <span class="hljs-function"><span class="hljs-params">(event)</span> =&gt;</span> {<font></font>
    event.preventDefault();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图达到同样的目的，但找不到真正好的解决方案。</font><font style="vertical-align: inherit;">我最后所做的是为 dataTransfer 设置一个图像，并在每次操作时更改其 src。</font><font style="vertical-align: inherit;">这样，行为至少在浏览器之间是一致的。</font><font style="vertical-align: inherit;">这是我用作参考的页面的链接：</font></font></p>

<p><a href="https://kryogenix.org/code/browser/custom-drag-image.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://kryogenix.org/code/browser/custom-drag-image.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十刃</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect#javascript_content" rel="nofollow noreferrer"><font style="vertical-align: inherit;">如MDN中所述，</font></a></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当且仅当</font></font></strong> <code>ev.preventDefault()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对所有更改</font></font><code>dropEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不要调用它</font></font><code>dragstart</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的事件调用时</font><font style="vertical-align: inherit;">，接受的答案才有效</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect#javascript_content" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">朔风</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加纯 css 解决方案，这可能对少数人有用。</font><font style="vertical-align: inherit;">在 html 元素上使用此类。</font></font></p>

<pre class="default s-code-block"><code class="hljs language-css"><span class="hljs-selector-class">.grab</span> {
        <span class="hljs-attribute">cursor</span>: move;
        <span class="hljs-attribute">cursor</span>: grab;
        <span class="hljs-attribute">cursor</span>: -moz-grab;
        <span class="hljs-attribute">cursor</span>: -webkit-grab;
        <span class="hljs-selector-class">.thumbnails-list</span>{
            <span class="hljs-attribute">cursor</span>: pointer;<font></font>
        }<font></font>
    }<font></font>
<font></font>
    <span class="hljs-selector-class">.grab</span><span class="hljs-selector-pseudo">:active</span> {
        <span class="hljs-attribute">cursor</span>: grabbing;
        <span class="hljs-attribute">cursor</span>: -moz-grabbing;
        <span class="hljs-attribute">cursor</span>: -webkit-grabbing;<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dropEffect</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 dragstart 中初始化它：</font></font></p>

<pre class="default s-code-block"><code class="hljs language-ini"><span class="hljs-attr">event.dataTransfer.effectAllowed</span> = <span class="hljs-string">"copyMove"</span><span class="hljs-comment">;</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 dragenter 中更新它：</font></font></p>

<pre class="default s-code-block"><code class="hljs language-ini"><span class="hljs-attr">event.dataTransfer.dropEffect</span> = <span class="hljs-string">"copy"</span><span class="hljs-comment">;</span>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
