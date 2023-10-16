---
layout: question
title:  TypeScript：React事件类型
date:   2020-03-12T06:40:30.000Z
description: React事件的正确类型是什么。最初，我只是any为了简单起见而使用。现在，我正在尝试清理并避免any完全使用。所以以这样的简单形式：export...
img: 
author: 阿飞泡芙
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React事件的正确类型是什么。</font><font style="vertical-align: inherit;">最初，我只是</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了简单起见而使用。</font><font style="vertical-align: inherit;">现在，我正在尝试清理并避免</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以以这样的简单形式：</font></font></p>

<pre><code>export interface LoginProps {<font></font>
  login: {<font></font>
    [k: string]: string | Function<font></font>
    uname: string<font></font>
    passw: string<font></font>
    logIn: Function<font></font>
  }<font></font>
}<font></font>
@inject('login') @observer<font></font>
export class Login extends Component&lt;LoginProps, {}&gt; {<font></font>
  update = (e: React.SyntheticEvent&lt;EventTarget&gt;): void =&gt; {<font></font>
    this.props.login[e.target.name] = e.target.value<font></font>
  }<font></font>
  submit = (e: any): void =&gt; {<font></font>
    this.props.login.logIn()<font></font>
    e.preventDefault()<font></font>
  }<font></font>
  render() {<font></font>
    const { uname, passw } = this.props.login<font></font>
    return (<font></font>
      &lt;div id='login' &gt;<font></font>
        &lt;form&gt;<font></font>
          &lt;input<font></font>
            placeholder='Username'<font></font>
            type="text"<font></font>
            name='uname'<font></font>
            value={uname}<font></font>
            onChange={this.update}<font></font>
          /&gt;<font></font>
          &lt;input<font></font>
            placeholder='Password'<font></font>
            type="password"<font></font>
            name='passw'<font></font>
            value={passw}<font></font>
            onChange={this.update}<font></font>
          /&gt;<font></font>
          &lt;button type="submit" onClick={this.submit} &gt;<font></font>
            Submit<font></font>
          &lt;/button&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里使用什么类型作为事件类型？</font></font></p>

<p><code>React.SyntheticEvent&lt;EventTarget&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎没有工作，因为我收到一个错误消息，</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不存在</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有事件的更笼统的回答，我们将不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1003篇《TypeScript：React事件类型》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样反应 </font></font></p>

<pre><code>handleEvent = (e: React.SyntheticEvent&lt;EventTarget&gt;) =&gt; {<font></font>
  const simpleInput = (e.target as HTMLInputElement).value;<font></font>
  //for simple html input values<font></font>
  const formInput = (e.target as HTMLFormElement).files[0];<font></font>
  //for html form elements<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题不在于事件类型，而是 TypeScript中的EventTarget接口只有3种方法： </font></font></p>

<pre><code>interface EventTarget {<font></font>
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;<font></font>
    dispatchEvent(evt: Event): boolean;<font></font>
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;<font></font>
}<font></font>
<font></font>
interface SyntheticEvent {<font></font>
    bubbles: boolean;<font></font>
    cancelable: boolean;<font></font>
    currentTarget: EventTarget;<font></font>
    defaultPrevented: boolean;<font></font>
    eventPhase: number;<font></font>
    isTrusted: boolean;<font></font>
    nativeEvent: Event;<font></font>
    preventDefault(): void;<font></font>
    stopPropagation(): void;<font></font>
    target: EventTarget;<font></font>
    timeStamp: Date;<font></font>
    type: string;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此这是正确的，</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在EventTarget上不存在。</font><font style="vertical-align: inherit;">您需要做的就是将目标转换为具有所需属性的特定元素类型。</font><font style="vertical-align: inherit;">在这种情况下将是</font></font><code>HTMLInputElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>update = (e: React.SyntheticEvent): void =&gt; {<font></font>
    let target = e.target as HTMLInputElement;<font></font>
    this.props.login[target.name] = target.value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外对于事件，而不是React.SyntheticEvent，你也可以输入他们如下：</font></font><code>Event</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>MouseEvent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>KeyboardEvent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...等，取决于处理程序的使用情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看所有这些类型定义的最佳方法是从typescript和react中检出.d.ts文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请查看以下链接以获取更多说明：
 </font></font><a href="https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么Event.target不是Typescript中的Element？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最简单的方法是：</font></font></p>

<pre><code>type InputEvent = React.ChangeEvent&lt;HTMLInputElement&gt;;<font></font>
type ButtonEvent = React.MouseEvent&lt;HTMLButtonElement&gt;;<font></font>
<font></font>
update = (e: InputEvent): void =&gt; this.props.login[e.target.name] = e.target.value;<font></font>
submit = (e:  ButtonEvent): void =&gt; {<font></font>
    this.props.login.logIn();<font></font>
    e.preventDefault();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云A</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/react/index.d.ts#L277" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SyntheticEvent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口是通用的：</font></font></p>

<pre><code>interface SyntheticEvent&lt;T&gt; {<font></font>
    ...<font></font>
    currentTarget: EventTarget &amp; T;<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>currentTarget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一般约束与的交集   </font></font><code>EventTarget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
另外，由于事件是由输入元素引起的，因此应使用</font></font><code>FormEvent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L485" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在定义文件中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://facebook.github.io/react/docs/events.html#form-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该：</font></font></p>

<pre><code>update = (e: React.FormEvent&lt;HTMLInputElement&gt;): void =&gt; {<font></font>
    this.props.login[e.currentTarget.name] = e.currentTarget.value<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合Nitzan和Edwin的答案，我发现类似这样的方法对我有用：</font></font></p>

<pre><code>update = (e: React.FormEvent&lt;EventTarget&gt;): void =&gt; {<font></font>
    let target = e.target as HTMLInputElement;<font></font>
    this.props.login[target.name] = target.value;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
