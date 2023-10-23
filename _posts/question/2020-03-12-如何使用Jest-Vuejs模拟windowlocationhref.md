---
layout: question
title:  如何使用Jest + Vuejs模拟window.location.href？
date:   2020-03-12T07:28:01.000Z
description: 目前，我正在为我的项目实施单元测试，并且包含一个文件window.location.href。我想对此进行测试，这是我的示例代码：it("meth...
img: 
author: 神无阳光
category: question
answer: 2
tags: 单元测试
topic: 单元测试
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在为我的项目实施单元测试，并且包含一个文件</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想对此进行测试，这是我的示例代码：</font></font></p>

<pre><code>it("method A should work correctly", () =&gt; {<font></font>
      const url = "http://dummy.com";<font></font>
      Object.defineProperty(window.location, "href", {<font></font>
        value: url,<font></font>
        writable: true<font></font>
      });<font></font>
      const data = {<font></font>
        id: "123",<font></font>
        name: null<font></font>
      };<font></font>
      window.location.href = url;<font></font>
      wrapper.vm.methodA(data);<font></font>
      expect(window.location.href).toEqual(url);<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我得到这个错误：</font></font></p>

<pre><code>TypeError: Cannot redefine property: href<font></font>
        at Function.defineProperty (&lt;anonymous&gt;)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了一些解决方案，但没有解决。</font><font style="vertical-align: inherit;">我需要一些提示来帮助我摆脱困境。</font><font style="vertical-align: inherit;">请帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1061篇《如何使用Jest + Vuejs模拟window.location.href？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的可能是创建一个新的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" rel="nofollow noreferrer"><code>URL</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例，以便它分析你的字符串一样</font></font><code>location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做，所以它更新的所有属性</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样</font></font><code>.hash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.search</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.protocol</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等。</font></font></p>

<pre><code>it("method A should work correctly", () =&gt; {<font></font>
  const url = "http://dummy.com/";<font></font>
  Object.defineProperty(window, "location", {<font></font>
    value: new URL(url)<font></font>
  } );<font></font>
<font></font>
  window.location.href = url;<font></font>
  expect(window.location.href).toEqual(url);<font></font>
<font></font>
  window.location.href += "#bar"<font></font>
  expect(window.location.hash).toEqual("#bar");<font></font>
});<font></font>
</code></pre>

<p><a href="https://repl.it/repls/VoluminousHauntingFunctions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://repl.it/repls/VoluminousHauntingFunctions</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已解决此问题</font></font><code>writable: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，方法是将其</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">并移至</font></font><code>beforeEach</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的示例代码：</font></font></p>

<pre><code>global.window = Object.create(window);<font></font>
const url = "http://dummy.com";<font></font>
Object.defineProperty(window, "location", {<font></font>
    value: {<font></font>
       href: url<font></font>
    },<font></font>
    writable: true<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
