---
layout: question
title:  jQuery Event Keypress：按下了哪个键？
date:   2020-03-11T04:32:57.000Z
description: 使用jQuery，如何确定绑定到keypress事件时按下了哪个键？$('#searchbox input').bind('keypress', fu...
img: 
author: 小胖Davaid
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery，如何确定绑定到keypress事件时按下了哪个键？</font></font></p>

<pre><code>$('#searchbox input').bind('keypress', function(e) {});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在</font></font><kbd>ENTER</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按下</font><font style="vertical-align: inherit;">时触发提交</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[更新]</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使我找到了（或者更好：一个）自己回答，似乎还有一些变化的空间;）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有之间的差异</font></font><code>keyCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>which</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-尤其是如果我只是在寻找</font></font><kbd>ENTER</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这永远不会是一个unicode关键？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些浏览器提供一种属性，而其他浏览器提供另一种属性吗？ </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第680篇《jQuery Event Keypress：按下了哪个键？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The <code>event.keyCode</code> and <code>event.which</code> are depracated. See @Gibolt answer above or check documentation: <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent</a></p>

<p><code>event.key</code> should be used instead</p>

<p><code>keypress</code> event is depracated as well:
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The easiest way that I do is:</p>

<pre><code>$("#element").keydown(function(event) {<font></font>
    if (event.keyCode == 13) {<font></font>
        localiza_cep(this.value);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1>Use <code>event.key</code> and modern JS!</h1>

<p><em>No number codes</em> anymore. You can check key directly. For example <code>"Enter"</code>, <code>"LeftArrow"</code>, <code>"r"</code>, or <code>"R"</code>.</p>

<pre><code>const input = document.getElementById("searchbox");<font></font>
input.addEventListener("keypress", function onEvent(event) {<font></font>
    if (event.key === "Enter") {<font></font>
        // Submit<font></font>
    }<font></font>
    else if (event.key === "Q") {<font></font>
        // Play quacking duck sound, maybe...<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key" rel="nofollow noreferrer">Mozilla Docs</a></p>

<p><a href="http://caniuse.com/#feat=keyboardevent-key" rel="nofollow noreferrer">Supported Browsers</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Add hidden submit, not type hidden, just plain submit with style="display:none". Here is an example (removed unnecessary attributes from code).</p>

<pre><code>&lt;form&gt;<font></font>
  &lt;input type="text"&gt;<font></font>
  &lt;input type="submit" style="display:none"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>it will accept enter key natively, no need for JavaScript, works in every browser.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Okay, I was blind:</p>

<pre><code>e.which
</code></pre>

<p>will contain the ASCII code of the key.</p>

<p>See <a href="https://developer.mozilla.org/En/DOM/Event.which" rel="noreferrer">https://developer.mozilla.org/En/DOM/Event.which</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is an at-length description of the behaviour of various browsers <a href="http://unixpapa.com/js/key.html" rel="noreferrer">http://unixpapa.com/js/key.html</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您使用的是jQuery，则应绝对使用.which。</font><font style="vertical-align: inherit;">是的，不同的浏览器设置了不同的属性，但是jQuery将对其进行规范化并分别设置.which值。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="http://api.jquery.com/keydown/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/keydown/上的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档，</font><font style="vertical-align: inherit;">其中指出：</font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了确定按下了哪个键，我们可以检查传递给处理函数的事件对象。</font><font style="vertical-align: inherit;">虽然浏览器使用不同的属性来存储此信息，但jQuery规范化了.which属性，因此我们可以可靠地使用它来检索键码。</font></font></p>
  </blockquote>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上这更好：</font></font></p>

<pre><code> var code = e.keyCode || e.which;<font></font>
 if(code == 13) { //Enter keycode<font></font>
   //Do something<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
