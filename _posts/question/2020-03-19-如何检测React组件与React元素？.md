---
layout: question
title:  如何检测React组件与React元素？
date:   2020-03-19T06:32:39.000Z
description: React.isValidElement对React组件和React元素均测试为true。我将如何具体测试对象是React组件？目前，我正在通过测试进行操...
img: 
author: 斯丁泡芙
category: question
answer: 4
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><code>React.isValidElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对React组件和React元素均测试为true。</font><font style="vertical-align: inherit;">我将如何具体测试对象是React组件？</font><font style="vertical-align: inherit;">目前，我正在通过测试进行操作</font></font><code>typeof obj.type === 'function'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我希望有更好的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2394篇《如何检测React组件与React元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>class Test extends React.Component {}<font></font>
<font></font>
console.log(!!Test.prototype.isReactComponent);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你想知道什么</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你有一个特定</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象变量</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么你想要什么</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的instanceof</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符...</font></font></p>

<pre><code>function isHTMLElement(obj) {<font></font>
    return (obj instanceof HTMLElement);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同时测试了</font></font><code>document.createElement('div')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（返回true）和</font></font><code>&lt;someReactJSComponent /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（返回false）。</font></font></p>

<p><code>instanceof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是JavaScript中功能强大且有用的工具。</font><font style="vertical-align: inherit;">查看官方MDN文档：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla文档网络：instanceof</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ instanceof运算符测试对象的原型链中是否有builder.prototype。”</font></font></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我还在线上传了带有代码沙箱的代码示例，以演示上述原理...</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在线代码沙箱：</font></font></em></strong></p>

<p><a href="https://codesandbox.io/s/kmxjq27ol5" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codesandbox.io/s/kmxjq27ol5</font></font></a></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码：</font></font></em></strong></p>

<pre><code>function App() { return (//insert JSX here//);};<font></font>
const app = App();<font></font>
const ele = document.createElement("div");<font></font>
const rootElement = document.getElementById("root");<font></font>
ReactDOM.render(app, rootElement);<font></font>
console.log(<font></font>
  "Hello!  Is a React Component HTML???" +<font></font>
    (app instanceof HTMLElement) +<font></font>
    "|  Is an HTML element HTML???" +<font></font>
    (ele instanceof HTMLElement) +<font></font>
    "|"<font></font>
);<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码结果：</font></font></em></strong></p>

<pre><code>Hello!  Is a React Element HTML???false|  Is an HTML element HTML???true|
</code></pre>

<p>No problem (tested Chrome and FF).  Just use <code>instanceof</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是：</font></font></p>

<pre><code>React.isValidElement(element)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞羽</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>ReactComponent.prototype.isReactComponent = {};
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/node_modules/react/lib/ReactComponent.js中的33</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npm安装。</font><font style="vertical-align: inherit;">在这一点上，没有直接的方法可用来检查其有效性。</font><font style="vertical-align: inherit;">你在做什么是正确的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
