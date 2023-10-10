---
layout: question
title:  在TypeScript中始终使用.tsx而不是.ts有什么缺点吗？
date:   2020-03-12T09:06:25.000Z
description: 我只是开始使用Typescript进行react项目，并问自己应该如何处理常规类文件？我应该使用.ts还是.tsx文件，然后我找不到任何理由始终不使用.t...
img: 
author: 斯丁Davaid
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是开始使用Typescript进行react项目，并问自己应该如何处理常规类文件？</font><font style="vertical-align: inherit;">我应该使用.ts还是.tsx文件，然后我找不到任何理由始终不使用.tsx文件，即使它不是React项目！</font><font style="vertical-align: inherit;">有什么原因或特定情况我们不应该使用.tsx文件？</font><font style="vertical-align: inherit;">如果没有，为什么TypeScript团队要添加全新的扩展名？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">。</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件具有</font></font><code>&lt;AngleBracket&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与JSX语法冲突</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">类型断言语法。</font><font style="vertical-align: inherit;">为了避免造成大量人员</font></font><code>.tsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伤亡</font><font style="vertical-align: inherit;">，我们使用</font><font style="vertical-align: inherit;">JSX，并添加了</font><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">文件</font></font><code>foo as Bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中都允许</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">。</font></font><code>.ts</code><font style="vertical-align: inherit;"></font><code>.tsx</code><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint-override"><code>let someValue: any = "this is a string";<font></font>
let strLength: number = (&lt;string&gt;someValue).length;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种是as语法：</font></font></p>

<pre class="lang-js prettyprint-override"><code>let someValue: any = "this is a string";<font></font>
let strLength: number = (someValue as string).length;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以使用.ts </font></font><code>as-syntax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>&lt;string&gt;someValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很酷！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以引入.jsx扩展名，是因为JSX是JS语法的扩展名，因此.jsx文件不包含有效的JavaScript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript通过引入.ts和.tsx扩展名遵循相同的约定。</font><font style="vertical-align: inherit;">一个实际的区别是.tsx不允许</font></font><code>&lt;Type&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型断言，因为语法与JSX标签冲突。</font></font><code>as Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断言是</font></font><code>&lt;Type&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.ts和.tsx中出于一致性原因</font><font style="vertical-align: inherit;">而引入的，</font><font style="vertical-align: inherit;">并被认为是首选。</font><font style="vertical-align: inherit;">如果.tsx文件中使用了.ts中的代码，</font></font><code>&lt;Type&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则需要进行修复。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用.tsx扩展名意味着模块与React相关并且使用JSX语法。</font><font style="vertical-align: inherit;">如果没有，扩展名可能会给模块内容和项目中的角色带来错误的印象，这是默认情况下不使用.tsx扩展名的理由。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，如果文件与React相关并且在某个时候很有可能包含JSX，则可以从一开始就将其命名为.tsx，以避免以后重命名。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，与React组件一起使用的实用程序函数在任何时候都可能涉及JSX，因此可以安全地使用.tsx名称，而</font></font><a href="https://redux.js.org/faq/code-structure" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux代码结构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不应直接使用React组件，可以与React分开使用和测试并可以使用.ts名称。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信使用.tsx文件，您可以使用所有JSX（JavaScript XML）代码。</font><font style="vertical-align: inherit;">而在.ts文件中，您只能使用 TypeScript。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，当您的JavaScript处于</font></font><code>JSX Harmony</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模式下</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">这是一种约定</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也就是说，当这是有效的时：</font></font></p>

<pre><code>doSomething(&lt;div&gt;My div&lt;/div&gt;);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，只要您的预处理程序知道您的决定（浏览器或webpack），文件扩展名实际上并不重要。</font><font style="vertical-align: inherit;">我使用</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了我所有的JavaScript，即使它们是React。</font><font style="vertical-align: inherit;">TypeScript也是如此</font></font><code>ts/tsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我强烈建议您将JavaScript的JSX用于React语法，将TSX的TypeScript与React一起使用，因为大多数编辑器/ IDE都会使用扩展名来启用或不启用React语法。</font><font style="vertical-align: inherit;">它也被认为更具表现力。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
