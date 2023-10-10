---
layout: question
title:  TypeScript输入onchange event.target.value
date:   2020-03-12T06:40:42.000Z
description: 在我的react和typescript应用程序中，我使用：onChange={(e) => data.motto = (e.target as any)....
img: 
author: A十三
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的react和typescript应用程序中，我使用：</font></font><code>onChange={(e) =&gt; data.motto = (e.target as any).value}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何正确定义类的类型，这样我就不必使用来绕过类型系统了</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>export interface InputProps extends React.HTMLProps&lt;Input&gt; {<font></font>
...<font></font>
<font></font>
}<font></font>
<font></font>
export class Input extends React.Component&lt;InputProps, {}&gt; {<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我把</font></font><code>target: { value: string };</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到：</font></font></p>

<pre><code>ERROR in [default] /react-onsenui.d.ts:87:18<font></font>
Interface 'InputProps' incorrectly extends interface 'HTMLProps&lt;Input&gt;'.<font></font>
  Types of property 'target' are incompatible.<font></font>
    Type '{ value: string; }' is not assignable to type 'string'.<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1004篇《TypeScript输入onchange event.target.value》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>  function handle_change(<font></font>
    evt: React.ChangeEvent&lt;HTMLInputElement&gt;<font></font>
  ): string {<font></font>
    evt.persist(); // This is needed so you can actually get the currentTarget<font></font>
    const inputValue = evt.currentTarget.value;<font></font>
<font></font>
    return inputValue<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并确保您拥有</font></font><code>"lib": ["dom"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己的</font></font><code>tsconfig</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种经过TS 3.3测试的ES6对象分解的方法。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
本示例用于文本输入。</font></font></p>

<pre><code>name: string = '';<font></font>
<font></font>
private updateName({ target }: { target: HTMLInputElement }) {<font></font>
    this.name = target.value;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你试图在添加</font></font><code>InputProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不一样的</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你想这是在</font></font><code>React.FormEvent</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我可以提出的解决方案是，扩展与事件相关的类型以添加​​目标类型，如下所示：</font></font></p>

<pre><code>interface MyEventTarget extends EventTarget {<font></font>
    value: string<font></font>
}<font></font>
<font></font>
interface MyFormEvent&lt;T&gt; extends React.FormEvent&lt;T&gt; {<font></font>
    target: MyEventTarget<font></font>
}<font></font>
<font></font>
interface InputProps extends React.HTMLProps&lt;Input&gt; {<font></font>
    onChange?: React.EventHandler&lt;MyFormEvent&lt;Input&gt;&gt;;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦有了这些类，就可以将输入组件用作</font></font></p>

<pre><code>&lt;Input onChange={e =&gt; alert(e.target.value)} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有编译错误。</font><font style="vertical-align: inherit;">实际上，您还可以将上面的前两个接口用于其他组件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>as HTMLInputElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 为我工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，事件处理程序应使用</font></font><code>e.currentTarget.value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如：</font></font></p>

<pre><code>onChange = (e: React.FormEvent&lt;HTMLInputElement&gt;) =&gt; {<font></font>
    const newValue = e.currentTarget.value;<font></font>
}<font></font>
</code></pre>

<p>You can read why it so here (<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239" rel="noreferrer">Revert "Make SyntheticEvent.target generic, not SyntheticEvent.currentTarget."</a>). </p>

<p>UPD: As mentioned by @roger-gusmao <code>ChangeEvent</code> more suitable for typing form events.</p>

<pre><code>onChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;)=&gt; {<font></font>
   const newValue = e.target.value;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
