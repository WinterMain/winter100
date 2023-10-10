---
layout: question
title:  React renderToString（）性能和缓存React组件
date:   2020-03-19T06:35:20.000Z
description: 我注意到reactDOM.renderToString()在服务器上渲染大型组件树时，该方法开始显着减慢速度。背景有点背景。该系统是完全同构的堆栈...
img: 
author: 番长SamJim
category: question
answer: 2
tags: performance React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到</font></font><code>reactDOM.renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器上渲染大型组件树时</font><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">方法开始显着减慢速度。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点背景。</font><font style="vertical-align: inherit;">该系统是完全同构的堆栈。</font><font style="vertical-align: inherit;">最高级别的</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件呈现模板，页面，dom元素和更多组件。</font><font style="vertical-align: inherit;">查看一下react代码，我发现它呈现了约1500个组件（这包括任何被视为简单组件的简单dom标签</font></font><code>&lt;p&gt;this is a react component&lt;/p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发中，渲染〜1500个组件大约需要200-300ms。</font><font style="vertical-align: inherit;">通过删除一些组件，我能够在约175-225毫秒内获得约1200个组件进行渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产中，大约1500个组件上的renderToString大约需要50-200ms。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间确实是线性的。</font><font style="vertical-align: inherit;">没有任何一个要素是缓慢的，而是许多要素的总和。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在服务器上产生了一些问题。</font><font style="vertical-align: inherit;">冗长的方法导致服务器响应时间长。</font><font style="vertical-align: inherit;">TTFB比应有的要高得多。</font><font style="vertical-align: inherit;">使用api调用和业务逻辑，响应应该为250毫秒，但是使用250毫秒的renderToString时，响应会加倍！</font><font style="vertical-align: inherit;">对SEO和用户不利。</font><font style="vertical-align: inherit;">同样，作为一种同步方法，它</font></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以阻止节点服务器并备份后续请求（这可以通过使用2个单独的节点服务器来解决：1个作为Web服务器，而1个作为仅提供反应的服务）。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试次数</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，生产中的renderToString需要5到50毫秒。</font><font style="vertical-align: inherit;">我一直在研究一些想法，但是我不确定最好的方法是什么。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想法1：缓存组件</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何标记为“静态”的组件都可以缓存。</font><font style="vertical-align: inherit;">通过保留具有渲染标记</font></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的缓存</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">可以在渲染之前检查缓存。</font><font style="vertical-align: inherit;">如果找到一个组件，它将自动获取字符串。</font><font style="vertical-align: inherit;">在较高级别的组件上执行此操作将节省所有嵌套子组件的安装。</font><font style="vertical-align: inherit;">您将不得不用当前的rootID替换缓存的组件标记的react rootID。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理念2：将组件标记为简单/哑巴</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将组件定义为“简单”，react应该能够在渲染时跳过所有生命周期方法。</font><font style="vertical-align: inherit;">反应已经这样做了芯反应，DOM组件（</font></font><code>&lt;p/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;h1/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等）。</font><font style="vertical-align: inherit;">扩展自定义组件以使用相同的优化会很好。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理念3：跳过服务器端渲染上的组件</font></font></h3>

<p>Components that do not need to be returned by the server (no SEO value) could simply be skipped on the server. Once the client loads, set a <code>clientLoaded</code> flag to <code>true</code> and pass it down to enforce a re-render.</p>

<h3>Closing and other attempts</h3>

<p>The only solution I've implemented thus far is to reduce the number of components that are rendered on the server. </p>

<p>Some projects we're looking at include:</p>

<ul>
<li><a href="https://github.com/aickin/react-dom-stream" rel="nofollow noreferrer">React-dom-stream</a>  (still working on implementing this for a test)</li>
<li><a href="https://babeljs.io/docs/plugins/transform-react-inline-elements/" rel="nofollow noreferrer">Babel inline elements</a>  (seems like this is along the lines of Idea 2)</li>
</ul>

<p>Has anybody faced similar issues? What have you been able to do?
Thanks.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用react-router1.0和react0.14，我们错误地多次序列化了我们的flux对象。</font></font></p>

<p><code>RoutingContext</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将要求</font></font><code>createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的react-router路由中的每个模板。</font><font style="vertical-align: inherit;">这使您可以注入所需的任何道具。</font><font style="vertical-align: inherit;">我们也使用通量。</font><font style="vertical-align: inherit;">我们发送大对象的序列化版本。</font><font style="vertical-align: inherit;">在我们的例子中，我们</font></font><code>flux.serialize()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在createElement中进行。</font><font style="vertical-align: inherit;">序列化方法可能需要20毫秒左右的时间。</font><font style="vertical-align: inherit;">如果有4个模板，那将比您的</font></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">多花80毫秒</font><font style="vertical-align: inherit;">！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧代码： </font></font></p>

<pre><code>function createElement(Component, props) {<font></font>
    props = _.extend(props, {<font></font>
        flux: flux,<font></font>
        path: path,<font></font>
        serializedFlux: flux.serialize();<font></font>
    });<font></font>
    return &lt;Component {...props} /&gt;;<font></font>
}<font></font>
var start = Date.now();<font></font>
markup = renderToString(&lt;RoutingContext {...renderProps} createElement={createElement} /&gt;);<font></font>
console.log(Date.now() - start);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松优化为此：</font></font></p>

<pre><code>var serializedFlux = flux.serialize(); // serialize one time only!<font></font>
<font></font>
function createElement(Component, props) {<font></font>
    props = _.extend(props, {<font></font>
        flux: flux,<font></font>
        path: path,<font></font>
        serializedFlux: serializedFlux<font></font>
    });<font></font>
    return &lt;Component {...props} /&gt;;<font></font>
}<font></font>
var start = Date.now();<font></font>
markup = renderToString(&lt;RoutingContext {...renderProps} createElement={createElement} /&gt;);<font></font>
console.log(Date.now() - start);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这有助于将</font></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间从〜120ms </font><font style="vertical-align: inherit;">减少</font><font style="vertical-align: inherit;">到〜30ms。</font><font style="vertical-align: inherit;">（您仍然需要将1x </font></font><code>serialize()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的〜20ms加到总数上，这要在之前完成</font></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）这是一个不错的快速改进。</font><font style="vertical-align: inherit;">-重要的是要记住，即使您不知道直接的影响，也要始终正确地做事！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是完整的解决方案，我的同构同构应用程序也遇到了同样的问题，并且使用了两件事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）在nodejs服务器之前使用Nginx，并在短时间内缓存呈现的响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）在显示项目列表的情况下，我仅使用列表的子集。</font><font style="vertical-align: inherit;">例如，我将仅渲染X个项目以填充视口，并使用Websocket或XHR在客户端加载列表的其余部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）我的一些组件在服务器端渲染中为空，并且仅从客户端代码（componentDidMount）加载。</font><font style="vertical-align: inherit;">这些组件通常是，图或与个人资料相关的组件。</font><font style="vertical-align: inherit;">从SEO角度来看，这些组件通常没有任何好处</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）关于SEO，根据我6个月使用同构应用的经验。</font><font style="vertical-align: inherit;">Google Bot可以轻松阅读客户端React Web页面，所以我不确定为什么我们要烦恼服务器端渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5）保留</font></font><code>&lt;Head &gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>&lt;Footer&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为静态字符串，或使用模板引擎（</font></font><a href="https://github.com/stevenvachon/handlebars-react" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Reactjs-handellbars</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），仅渲染页面内容（它应保存一些渲染组件）。</font><font style="vertical-align: inherit;">如果是单页应用，则可以在中的每个导航中更新标题说明</font></font><code>Router.Run</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
