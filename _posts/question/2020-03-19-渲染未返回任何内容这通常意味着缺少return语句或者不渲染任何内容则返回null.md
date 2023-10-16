---
layout: question
title:  渲染未返回任何内容。这通常意味着缺少return语句。或者，不渲染任何内容，则返回null
date:   2020-03-19T02:02:55.000Z
description: 我在React中有一个要在index.js中导入的组件，但是它给出了这个错误：  渲染未返回任何内容。这通常意味着缺少return语句。或者，不渲染...
img: 
author: Tony凯
category: question
answer: 11
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在React中有一个要在index.js中导入的组件，但是它给出了这个错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染未返回任何内容。</font><font style="vertical-align: inherit;">这通常意味着缺少return语句。</font><font style="vertical-align: inherit;">或者，不渲染任何内容，则返回null</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js：</font></font></p>

<pre><code>import React from 'react';<font></font>
import ReactDOM from 'react-dom'; <font></font>
import  Search_Bar from './components/search_bar';<font></font>
<font></font>
const   API_KEY = 'AIzaSyCnpDObOLiiqN87YKJKZ-cxzdAsvYD1F-U';<font></font>
<font></font>
const App = () =&gt; {<font></font>
    return<font></font>
    (<font></font>
        &lt;div&gt;<font></font>
            &lt;Search_Bar /&gt;<font></font>
         &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
<font></font>
ReactDOM.render(&lt;App /&gt;, document.querySelector('#root'));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件：</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
const Search_Bar = () =&gt;<font></font>
{<font></font>
    return &lt;input /&gt;;<font></font>
};<font></font>
<font></font>
export default Search_Bar;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2239篇《渲染未返回任何内容。这通常意味着缺少return语句。或者，不渲染任何内容，则返回null》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行Jest测试时遇到了此错误。</font><font style="vertical-align: inherit;">安装文件中正在模拟其中一个组件，因此当我尝试在测试中使用实际的组件时，我得到了非常意外的结果。</font></font></p>

<pre><code>jest.mock("components/MyComponent", () =&gt; ({ children }) =&gt; children);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除该模拟程序（实际上并不需要）可以立即解决我的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您知道从组件中正确返回时，这可能会节省您几个小时的研究时间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProJinJin</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的错误，不同的情况。</font><font style="vertical-align: inherit;">我将其发布在这里是因为有人可能与我的处境相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用如下上下文API。</font></font></p>

<pre><code>export const withDB = Component =&gt; props =&gt; {<font></font>
    &lt;DBContext.Consumer&gt;<font></font>
        {db =&gt; &lt;Component {...props} db={db} /&gt;}<font></font>
    &lt;/DBContext.Consumer&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本上，错误消息为您提供了答案。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染未返回任何内容。</font><font style="vertical-align: inherit;">这通常意味着缺少return语句</font></font></p>
</blockquote>

<p><code>withDB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该返回一个html块。</font><font style="vertical-align: inherit;">但这并没有返回任何东西。</font><font style="vertical-align: inherit;">将我的代码修改为以下内容可以解决我的问题。</font></font></p>

<pre><code>export const withDB = Component =&gt; props =&gt; {<font></font>
  return (<font></font>
    &lt;DBContext.Consumer&gt;<font></font>
        {db =&gt; &lt;Component {...props} db={db} /&gt;}<font></font>
    &lt;/DBContext.Consumer&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Sam</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下一行写括号以在下一行不返回。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不正确的
</font></font><code>
return
(
statement1
statement2
.......
.......
)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font></font></p>

<p><code>return(
statement1
statement2
.........
.........
)
</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到了此错误消息，但这是一个真正的基本错误，我已经将另一个Component复制/粘贴为模板，从render（）中删除了所有内容，然后将其导入并添加到父级JSX中，但尚未重命名该组件类。</font><font style="vertical-align: inherit;">因此，错误看起来像是来自另一个组件，我花了一段时间尝试对其进行调试，然后才能发现它实际上不是该组件引发错误！</font><font style="vertical-align: inherit;">将文件名作为错误消息的一部分会有所帮助。</font><font style="vertical-align: inherit;">希望这对某人有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，旁注说明我不确定有人提到返回</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会引发错误：</font></font></p>

<pre><code>render() {<font></font>
  return this.foo // Where foo is undefined.<font></font>
}<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题似乎在于返回时的括号。</font><font style="vertical-align: inherit;">括号应与以下return语句一致：</font></font></p>

<pre><code>return(<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不是这样：</font></font></p>

<pre><code>return<font></font>
(<font></font>
)  <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您将无状态组件用作箭头函数，则内容需要放入括号“（）”而不是括号“ {}”，并且必须删除返回函数。</font></font></p>

<pre><code>const Search_Bar= () =&gt; (<font></font>
    &lt;input /&gt;; <font></font>
);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到了答案：后面不应该使用括号   </font></font><code>return ()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这有效：</font></font></p>

<pre><code>return  &lt;div&gt; &lt;Search_Bar /&gt; &lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要写多行，那么 </font></font><code>return ( ...</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的起始括号应与放在同一行</font></font><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇A</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现此错误的原因有很多：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所述，在新行上开始括号。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></p>

<pre><code>render() {<font></font>
  return  <font></font>
  (<font></font>
    &lt;div&gt;I am demo data&lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的实施方式</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>render() {<font></font>
  return (<font></font>
    &lt;div&gt;I am demo html&lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，</font></font><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">末尾的分号</font><font style="vertical-align: inherit;">不会有任何区别。</font></font></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可能是由于布线中使用了错误的括号引起的：</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></p>

<pre><code>export default () =&gt; {<font></font>
  &lt;BrowserRouter&gt;<font></font>
    &lt;Switch&gt;<font></font>
      &lt;Route exact path='/' component={ DemoComponent } /&gt;<font></font>
    &lt;/Switch&gt;<font></font>
  &lt;/BrowserRouter&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确方法：</font></font></p>

<pre><code>export default () =&gt; (<font></font>
  &lt;BrowserRouter&gt;<font></font>
    &lt;Switch&gt;<font></font>
      &lt;Route exact path='/' component={ DemoComponent } /&gt;<font></font>
    &lt;/Switch&gt;<font></font>
  &lt;/BrowserRouter&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在错误示例中，我们使用了花括号，但必须使用圆括号。</font><font style="vertical-align: inherit;">这也会产生相同的错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖古一</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题出在返回中，请尝试以下操作：</font></font></p>

<pre><code>return(<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我的问题</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">花括号中包含一个组件，即</font></font><code>{</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const SomeComponent = () =&gt; {&lt;div&gt; Some Component Page &lt;/div&gt;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用圆括号ie替换它们，</font></font><code>(</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复问题：</font></font></p>

<pre><code>const SomeComponent = () =&gt; (&lt;div&gt; Some Component Page &lt;/div&gt;)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神乐</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">render（）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中</font><font style="vertical-align: inherit;">遇到了同样的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当您从</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">render（）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回时，问题来了</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>render() {<font></font>
    return <font></font>
    (<font></font>
        &lt;div&gt;Here comes JSX !&lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即如果您在新行中开始括号</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用：</font></font></p>

<pre><code>render() {<font></font>
    return (<font></font>
        &lt;div&gt;Here comes JSX !&lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决错误</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
